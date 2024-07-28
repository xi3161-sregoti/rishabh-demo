

output "cluster_arn" {
	description = "The Amazon Resource Name (ARN) of the cluster"
	value       = module.aws_eks.cluster_arn
	sensitive    = false
}

output "cluster_certificate_authority_data" {
	description = "Base64 encoded certificate data required to communicate with the cluster"
	value       = module.aws_eks.cluster_certificate_authority_data
	sensitive    = false
}

output "cluster_endpoint" {
	description = "Endpoint for your Kubernetes API server"
	value       = module.aws_eks.cluster_endpoint
	sensitive    = false
}

output "cluster_id" {
	description = "The name/id of the EKS cluster. Will block on cluster creation until the cluster is really ready"
	value       = module.aws_eks.cluster_id
	sensitive    = false
}

output "cluster_oidc_issuer_url" {
	description = "The URL on the EKS cluster for the OpenID Connect identity provider"
	value       = module.aws_eks.cluster_oidc_issuer_url
	sensitive    = false
}

output "cluster_platform_version" {
	description = "Platform version for the cluster"
	value       = module.aws_eks.cluster_platform_version
	sensitive    = false
}

output "cluster_security_group_arn" {
	description = "Amazon Resource Name (ARN) of the cluster security group"
	value       = module.aws_eks.cluster_security_group_arn
	sensitive    = false
}

output "cluster_security_group_id" {
	description = "ID of the cluster security group"
	value       = module.aws_eks.cluster_security_group_id
	sensitive    = false
}

output "node_security_group_arn" {
	description = "Amazon Resource Name (ARN) of the node shared security group"
	value       = module.aws_eks.node_security_group_arn
	sensitive    = false
}

output "node_security_group_id" {
	description = "ID of the node shared security group"
	value       = module.aws_eks.node_security_group_id
	sensitive    = false
}

