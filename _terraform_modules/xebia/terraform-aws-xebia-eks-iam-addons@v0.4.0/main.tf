module "cluster-autoscaler-role" {
  source                        = "./modules/terraform-aws-xebia-iam-0.9.0"
  region                        = var.region
  create_oidc_role              = var.create_cluster_autoscaler_role
  oidc_role_name                = "${var.cluster_name}-cluster-autoscaler"
  provider_urls                 = [var.oidc_provider_url]
  oidc_fully_qualified_subjects = ["system:serviceaccount:kube-system:cluster-autoscaler"]
  create_policy                 = var.create_cluster_autoscaler_role
  policy_name                   = "${var.cluster_name}-cluster-autoscaler"
  policy_path                   = "${path.root}/${var.policy_path_prefix}/cluster-autoscaler-role.json"
  policy_vars = {
    cluster_name = var.cluster_name
  }
}

module "karpenter-controller-role" {
  source                        = "./modules/terraform-aws-xebia-iam-0.9.0"
  region                        = var.region
  create_oidc_role              = var.create_karpenter_controller_role
  oidc_role_name                = "${var.cluster_name}-karpenter-controller"
  provider_urls                 = [var.oidc_provider_url]
  oidc_fully_qualified_subjects = [var.karpenter_oidc_subject]
  create_policy                 = var.create_karpenter_controller_role
  policy_name                   = "${var.cluster_name}-karpenter-controller"
  policy_path                   = "${path.root}/${var.policy_path_prefix}/karpenter-controller-role.json"
}

module "karpenter-node-role" {
  source                  = "./modules/terraform-aws-xebia-iam-0.9.0"
  region                  = var.region
  create_role             = var.create_karpenter_node_role
  role_name               = "${var.cluster_name}-karpenter-node"
  assume_role_policy_path = "${path.root}/${var.policy_path_prefix}/karpenter-node-trust-policy.json"
  role_policy_arns        = ["arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy", "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy", "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly", "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"]
}

module "opensearch-role" {
  source                        = "./modules/terraform-aws-xebia-iam-0.9.0"
  region                        = var.region
  create_oidc_role              = var.create_opensearch_role
  oidc_role_name                = "${var.cluster_name}-opensearch-write-assume-role"
  provider_urls                 = [var.oidc_provider_url]
  oidc_fully_qualified_subjects = [var.opensearch_oidc_subject]
  create_policy                 = var.create_opensearch_role
  policy_name                   = "${var.cluster_name}-opensearch-write-assume-role"
  policy_path                   = "${path.root}/${var.policy_path_prefix}/opensearch-write-assume-role.json"
  policy_vars = {
    opensearch_write_assume_role_arn = var.opensearch_write_assume_role_arn
  }
}

module "aws-lb-controller-role" {
  source                        = "./modules/terraform-aws-xebia-iam-0.9.0"
  region                        = var.region
  create_oidc_role              = var.create_aws_lb_controller_role
  oidc_role_name                = "${var.cluster_name}-aws-load-balancer-controller"
  provider_urls                 = [var.oidc_provider_url]
  oidc_fully_qualified_subjects = ["system:serviceaccount:kube-system:aws-load-balancer-controller"]
  create_policy                 = var.create_aws_lb_controller_role
  policy_name                   = "${var.cluster_name}-aws-load-balancer-controller"
  policy_path                   = "${path.root}/${var.policy_path_prefix}/aws-lb-controller-role.json"
}

module "prometheus-amp-role" {
  source                        = "./modules/terraform-aws-xebia-iam-0.9.0"
  region                        = var.region
  create_oidc_role              = var.create_prometheus_amp_role
  oidc_role_name                = "${var.cluster_name}-amp-assume-role"
  provider_urls                 = [var.oidc_provider_url]
  oidc_fully_qualified_subjects = [var.prometheus_amp_oidc_subject]
  create_policy                 = var.create_prometheus_amp_role
  policy_name                   = "${var.cluster_name}-amp-assume-role"
  policy_path                   = "${path.root}/${var.policy_path_prefix}/prometheus-amp-assume-role.json"
  policy_vars = {
    prometheus_amp_assume_role_arn = var.prometheus_amp_assume_role_arn
  }
}

module "ebs-csi-driver-role" {
  source                        = "./modules/terraform-aws-xebia-iam-0.9.0"
  region                        = var.region
  create_oidc_role              = var.create_ebs_csi_driver_role
  oidc_role_name                = "${var.cluster_name}-ebs-csi-driver-role"
  provider_urls                 = [var.oidc_provider_url]
  oidc_fully_qualified_subjects = ["system:serviceaccount:kube-system:ebs-csi-controller-sa", "system:serviceaccount:kube-system:ebs-csi-node-sa"]
  oidc_role_policy_arns         = ["arn:aws:iam::aws:policy/service-role/AmazonEBSCSIDriverPolicy"]
}

module "cloudwatch-observability-addon-role" {
  source                        = "./modules/terraform-aws-xebia-iam-0.9.0"
  region                        = var.region
  create_oidc_role              = var.create_cloudwatch_observability_role
  oidc_role_name                = "${var.cluster_name}-cloudwatch_observability_role"
  provider_urls                 = [var.oidc_provider_url]
  oidc_fully_qualified_subjects = ["system:serviceaccount:amazon-cloudwatch:cloudwatch-agent", "system:serviceaccount:amazon-cloudwatch:amazon-cloudwatch-observability-controller-manager", "system:serviceaccount:amazon-cloudwatch:dcgm-exporter-service-acct"]
  oidc_role_policy_arns         = ["arn:aws:iam::aws:policy/CloudWatchAgentServerPolicy"]
}