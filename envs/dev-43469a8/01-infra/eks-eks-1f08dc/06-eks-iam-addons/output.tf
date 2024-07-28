

output "cluster_autoscaler_role_name" {
	description = "IAM role name of cluster autoscaler role"
	value       = module.eks_iam_addons.cluster_autoscaler_role_name
	sensitive    = false
}

output "cluster_autoscaler_role_arn" {
	description = "IAM role ARN of cluster autoscaler role"
	value       = module.eks_iam_addons.cluster_autoscaler_role_arn
	sensitive    = false
}

output "opensearch_role_name" {
	description = "IAM role name of opensearch role"
	value       = module.eks_iam_addons.opensearch_role_name
	sensitive    = false
}

output "opensearch_role_arn" {
	description = "IAM role ARN of opensearch role"
	value       = module.eks_iam_addons.opensearch_role_arn
	sensitive    = false
}

output "aws_lb_controller_role_name" {
	description = "IAM role name of AWS Load Balancer Controller role"
	value       = module.eks_iam_addons.aws_lb_controller_role_name
	sensitive    = false
}

output "aws_lb_controller_role_arn" {
	description = "IAM role ARN of AWS Load Balancer Controller role"
	value       = module.eks_iam_addons.aws_lb_controller_role_arn
	sensitive    = false
}

output "prometheus_amp_role_name" {
	description = "IAM role name of prometheus AMP role"
	value       = module.eks_iam_addons.prometheus_amp_role_name
	sensitive    = false
}

output "prometheus_amp_role_arn" {
	description = "IAM role ARN of Prometheus AMP role"
	value       = module.eks_iam_addons.prometheus_amp_role_arn
	sensitive    = false
}

output "ebs_csi_driver_role_name" {
	description = "IAM role name of EBS CSI Driver role"
	value       = module.eks_iam_addons.ebs_csi_driver_role_name
	sensitive    = false
}

output "ebs_csi_driver_role_arn" {
	description = "IAM role ARN of EBS CSI Driver role"
	value       = module.eks_iam_addons.ebs_csi_driver_role_arn
	sensitive    = false
}

output "cloudwatch_observability_role_name" {
	description = "IAM role name of Cloudwatch Observability Addon role"
	value       = module.eks_iam_addons.cloudwatch_observability_role_name
	sensitive    = false
}

output "cloudwatch_observability_role_arn" {
	description = "IAM role ARN of Cloudwatch Observability Addon role"
	value       = module.eks_iam_addons.cloudwatch_observability_role_arn
	sensitive    = false
}

