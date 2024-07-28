################################################################################
# Cluster
################################################################################

output "cluster_arn" {
  description = "The Amazon Resource Name (ARN) of the cluster"
  value       = aws_eks_cluster.cluster.arn
}
output "cluster_certificate_authority_data" {
  description = "Base64 encoded certificate data required to communicate with the cluster"
  value       = aws_eks_cluster.cluster.certificate_authority[0].data
}
output "cluster_endpoint" {
  description = "Endpoint for your Kubernetes API server"
  value       = aws_eks_cluster.cluster.endpoint
}
output "cluster_id" {
  description = "The name/id of the EKS cluster. Will block on cluster creation until the cluster is really ready"
  value       = aws_eks_cluster.cluster.id
}
output "cluster_oidc_issuer_url" {
  description = "The URL on the EKS cluster for the OpenID Connect identity provider"
  value       = aws_eks_cluster.cluster.identity[0].oidc[0].issuer
}
output "cluster_platform_version" {
  description = "Platform version for the cluster"
  value       = aws_eks_cluster.cluster.platform_version
}

################################################################################
# Cluster Security Group
################################################################################

output "cluster_security_group_arn" {
  description = "Amazon Resource Name (ARN) of the cluster security group"
  value       = aws_security_group.cluster.arn
}
output "cluster_security_group_id" {
  description = "ID of the cluster security group"
  value       = aws_security_group.cluster.id
}

################################################################################
# Node Security Group
################################################################################

output "node_security_group_arn" {
  description = "Amazon Resource Name (ARN) of the node shared security group"
  value       = aws_security_group.node.arn
}
output "node_security_group_id" {
  description = "ID of the node shared security group"
  value       = aws_security_group.node.id
}