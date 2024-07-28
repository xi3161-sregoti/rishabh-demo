
terraform {
  required_version = "~> 1.3"

  required_providers {
    aws       = "~> 5.0"
    cloudinit = "~> 2.0"
    tls       = "~> 4.0"
  }
}
provider "aws" {
  region = "ap-south-1"
  default_tags {
    tags = var.common_tags
  }
  assume_role {
    role_arn = "arn:aws:iam::474532148129:role/TerraformAdmin"
  }
}


module "aws_eks" {
  source = "../../../../../_terraform_modules/xebia/terraform-aws-xebia-eks@v2.4.0"
	
  assume_role_arn = var.assume_role_arn
  cloudwatch_log_group_retention_in_days = var.cloudwatch_log_group_retention_in_days
  cluster_name = var.cluster_name
  cluster_version = var.cluster_version
  common_tags = var.common_tags
  control_plane_security_group_additional_rules = var.control_plane_security_group_additional_rules
  create_cni_ipv6_iam_policy = var.create_cni_ipv6_iam_policy
  eks_managed_node_group_defaults = var.eks_managed_node_group_defaults
  eks_managed_node_groups = var.eks_managed_node_groups
  enable_endpoint_private_access = var.enable_endpoint_private_access
  enable_endpoint_public_access = var.enable_endpoint_public_access
  enable_irsa = var.enable_irsa
  enabled_cluster_log_types = var.enabled_cluster_log_types
  ip_family = var.ip_family
  kms_key_arn = var.kms_key_arn
  node_security_group_additional_rules = var.node_security_group_additional_rules
  public_access_cidrs = var.public_access_cidrs
  region = var.region
  subnet_ids = var.subnet_ids
  tags = var.tags
  vpc_id = var.vpc_id
}
