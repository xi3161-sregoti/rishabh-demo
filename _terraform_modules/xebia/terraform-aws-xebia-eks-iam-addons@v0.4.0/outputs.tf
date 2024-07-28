################################################################################
# CLUSTER AUTOSCALER
################################################################################

output "cluster_autoscaler_role_name" {
  value       = var.create_cluster_autoscaler_role ? module.cluster-autoscaler-role.oidc_role_name : null
  description = "IAM role name of cluster autoscaler role"
}
output "cluster_autoscaler_role_arn" {
  value       = var.create_cluster_autoscaler_role ? module.cluster-autoscaler-role.oidc_role_arn : null
  description = "IAM role ARN of cluster autoscaler role"
}

################################################################################
# OPENSEARCH
################################################################################

output "opensearch_role_name" {
  value       = var.create_opensearch_role ? module.opensearch-role.oidc_role_name : null
  description = "IAM role name of opensearch role"
}
output "opensearch_role_arn" {
  value       = var.create_opensearch_role ? module.opensearch-role.oidc_role_arn : null
  description = "IAM role ARN of opensearch role"
}

################################################################################
# AWS LOAD BALANCER CONTROLLER
################################################################################

output "aws_lb_controller_role_name" {
  value       = var.create_aws_lb_controller_role ? module.aws-lb-controller-role.oidc_role_name : null
  description = "IAM role name of AWS Load Balancer Controller role"
}
output "aws_lb_controller_role_arn" {
  value       = var.create_aws_lb_controller_role ? module.aws-lb-controller-role.oidc_role_arn : null
  description = "IAM role ARN of AWS Load Balancer Controller role"
}

################################################################################
# PROMETHEUS AMP
################################################################################

output "prometheus_amp_role_name" {
  value       = var.create_prometheus_amp_role ? module.prometheus-amp-role.oidc_role_name : null
  description = "IAM role name of prometheus AMP role"
}
output "prometheus_amp_role_arn" {
  value       = var.create_prometheus_amp_role ? module.prometheus-amp-role.oidc_role_arn : null
  description = "IAM role ARN of Prometheus AMP role"
}

################################################################################
# EBS CSI DRIVER
################################################################################

output "ebs_csi_driver_role_name" {
  value       = var.create_ebs_csi_driver_role ? module.ebs-csi-driver-role.oidc_role_name : null
  description = "IAM role name of EBS CSI Driver role"
}
output "ebs_csi_driver_role_arn" {
  value       = var.create_ebs_csi_driver_role ? module.ebs-csi-driver-role.oidc_role_arn : null
  description = "IAM role ARN of EBS CSI Driver role"
}

################################################################################
# CLOUDWATCH OBSERVABILITY ADDON
################################################################################

output "cloudwatch_observability_role_name" {
  value       = var.create_cloudwatch_observability_role ? module.cloudwatch-observability-addon-role.oidc_role_name : null
  description = "IAM role name of Cloudwatch Observability Addon role"
}
output "cloudwatch_observability_role_arn" {
  value       = var.create_cloudwatch_observability_role ? module.cloudwatch-observability-addon-role.oidc_role_arn : null
  description = "IAM role ARN of Cloudwatch Observability Addon role"
}