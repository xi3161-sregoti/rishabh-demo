
terraform {
  required_version = "~> 1.3"

  required_providers {
    aws = "~> 5.0"
  }
}

provider tls {
	version = "<4.0.0"
}


module "eks_iam_addons" {
  source = "../../../../../_terraform_modules/xebia/terraform-aws-xebia-eks-iam-addons@v0.4.0"
	
  assume_role_arn = var.assume_role_arn
  cluster_name = var.cluster_name
  common_tags = var.common_tags
  create_aws_lb_controller_role = var.create_aws_lb_controller_role
  create_cloudwatch_observability_role = var.create_cloudwatch_observability_role
  create_cluster_autoscaler_role = var.create_cluster_autoscaler_role
  create_ebs_csi_driver_role = var.create_ebs_csi_driver_role
  create_karpenter_controller_role = var.create_karpenter_controller_role
  create_karpenter_node_role = var.create_karpenter_node_role
  create_opensearch_role = var.create_opensearch_role
  create_prometheus_amp_role = var.create_prometheus_amp_role
  karpenter_oidc_subject = var.karpenter_oidc_subject
  oidc_provider_url = var.oidc_provider_url
  opensearch_oidc_subject = var.opensearch_oidc_subject
  opensearch_write_assume_role_arn = var.opensearch_write_assume_role_arn
  policy_path_prefix = var.policy_path_prefix
  prometheus_amp_assume_role_arn = var.prometheus_amp_assume_role_arn
  prometheus_amp_oidc_subject = var.prometheus_amp_oidc_subject
  region = var.region
}
