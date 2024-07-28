provider "aws" {
  region = var.region
  default_tags {
    tags = var.common_tags
  }
  assume_role {
    role_arn = var.assume_role_arn
  }
}

################################################################################
# EKS Cluster Role
################################################################################

data "aws_iam_policy_document" "assume_role_policy" {
  statement {
    sid     = "EKSClusterAssumeRole"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["eks.${local.dns_suffix}"]
    }
  }
}

resource "aws_iam_role" "this" {
  name                  = "${var.cluster_name}-cluster"
  assume_role_policy    = data.aws_iam_policy_document.assume_role_policy.json
  force_detach_policies = true
  inline_policy {
    name = "deny-cloudwatch-${var.cluster_name}-cluster"
    policy = jsonencode({
      Version = "2012-10-17"
      Statement = [
        {
          Action   = ["logs:CreateLogGroup"]
          Effect   = "Deny"
          Resource = "*"
        },
      ]
    })
  }
}

resource "aws_iam_role_policy_attachment" "this" {
  for_each = { for k, v in {
    AmazonEKSClusterPolicy         = "arn:${data.aws_partition.current.partition}:iam::aws:policy/AmazonEKSClusterPolicy",
    AmazonEKSVPCResourceController = "arn:${data.aws_partition.current.partition}:iam::aws:policy/AmazonEKSVPCResourceController",
  } : k => v }
  policy_arn = each.value
  role       = aws_iam_role.this.name
}

resource "aws_iam_role_policy_attachment" "cluster_encryption" {
  policy_arn = aws_iam_policy.cluster_encryption.arn
  role       = aws_iam_role.this.name
}

resource "aws_iam_policy" "cluster_encryption" {
  name        = "${var.cluster_name}-cluster-ClusterEncryption"
  description = "Cluster encryption policy to allow cluster role to utilize CMK provided"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "kms:Encrypt",
          "kms:Decrypt",
          "kms:ListGrants",
          "kms:DescribeKey",
        ]
        Effect   = "Allow"
        Resource = var.kms_key_arn
      },
    ]
  })
}

################################################################################
# OIDC Configuration
################################################################################

data "tls_certificate" "this" {
  count = var.enable_irsa ? 1 : 0
  url   = aws_eks_cluster.cluster.identity[0].oidc[0].issuer
}

resource "aws_iam_openid_connect_provider" "oidc_provider" {
  count           = var.enable_irsa ? 1 : 0
  client_id_list  = ["sts.${local.dns_suffix}"]
  thumbprint_list = data.tls_certificate.this[0].certificates[*].sha1_fingerprint
  url             = aws_eks_cluster.cluster.identity[0].oidc[0].issuer
  tags = {
    Name = "${var.cluster_name}-eks-irsa"
  }
}

################################################################################
# EKS Cluster
################################################################################

resource "aws_eks_cluster" "cluster" {
  name                      = var.cluster_name
  version                   = var.cluster_version
  role_arn                  = aws_iam_role.this.arn
  enabled_cluster_log_types = var.enabled_cluster_log_types
  vpc_config {
    endpoint_private_access = var.enable_endpoint_private_access
    endpoint_public_access  = var.enable_endpoint_public_access
    public_access_cidrs     = var.public_access_cidrs
    security_group_ids      = compact(distinct(concat(var.control_plane_additional_security_group_ids, [aws_security_group.cluster.id])))
    subnet_ids              = var.subnet_ids
  }
  encryption_config {
    provider {
      key_arn = var.kms_key_arn
    }
    resources = ["secrets"]
  }
  kubernetes_network_config {
    service_ipv4_cidr = var.service_ipv4_cidr
    ip_family         = var.ip_family
  }
  tags = var.tags
  depends_on = [
    aws_security_group_rule.cluster,
    aws_security_group_rule.node,
    aws_cloudwatch_log_group.cluster
  ]
}

resource "aws_cloudwatch_log_group" "cluster" {
  name              = "/aws/eks/${var.cluster_name}/cluster"
  retention_in_days = var.cloudwatch_log_group_retention_in_days
  kms_key_id        = var.cloudwatch_log_group_kms_key_arn == "" ? var.kms_key_arn : var.cloudwatch_log_group_kms_key_arn
}

################################################################################
# EKS Cluster security group
################################################################################

resource "aws_security_group" "cluster" {
  name        = "${var.cluster_name}-cluster"
  description = "eks cluster security group"
  vpc_id      = var.vpc_id
  tags = {
    "Name" = "${var.cluster_name}-cluster"
  }
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_security_group_rule" "cluster" {
  for_each = { for k, v in merge(
    local.cluster_security_group_rules,
    var.control_plane_security_group_additional_rules
  ) : k => v }
  security_group_id        = aws_security_group.cluster.id
  protocol                 = each.value.protocol
  from_port                = each.value.from_port
  to_port                  = each.value.to_port
  type                     = each.value.type
  description              = lookup(each.value, "description", null)
  cidr_blocks              = lookup(each.value, "cidr_blocks", null)
  ipv6_cidr_blocks         = lookup(each.value, "ipv6_cidr_blocks", null)
  prefix_list_ids          = lookup(each.value, "prefix_list_ids", null)
  self                     = lookup(each.value, "self", null)
  source_security_group_id = try(each.value.source_node_security_group, false) ? aws_security_group.node.id : lookup(each.value, "source_security_group_id", null)
}