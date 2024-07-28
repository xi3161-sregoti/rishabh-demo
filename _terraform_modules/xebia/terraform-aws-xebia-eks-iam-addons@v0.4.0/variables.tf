variable "region" {
  type        = string
  default     = "ap-south-1"
  description = "AWS region where resources are to be created"
}
variable "common_tags" {
  type        = map(string)
  default     = {}
  description = "Common tags to be added to the resources"
}
variable "assume_role_arn" {
  type        = string
  default     = ""
  description = "The role to be assumed while creating resources"
}
variable "policy_path_prefix" {
  type        = string
  default     = "policies"
  description = "Folder name where policies are stored"
}


################################################################################
# EKS CLUSTER
################################################################################

variable "cluster_name" {
  type        = string
  description = "Name of the eks cluster for which roles are to be created"
}
variable "oidc_provider_url" {
  type        = string
  description = "OIDC provider URL of the EKS cluster for which roles are to be created"
}

################################################################################
# CLUSTER AUTOSCALER
################################################################################

variable "create_cluster_autoscaler_role" {
  type        = bool
  default     = true
  description = "Whether to create a role for cluster autoscaler or not"
}

################################################################################
# KARPENTER
################################################################################

variable "create_karpenter_controller_role" {
  type        = bool
  default     = false
  description = "Whether to create a role for karpenter controller or not"
}
variable "karpenter_oidc_subject" {
  type        = string
  default     = "system:serviceaccount:karpenter:karpenter"
  description = "OIDC fully qualified subject name for karpenter"
}
variable "create_karpenter_node_role" {
  type        = bool
  default     = false
  description = "Whether to create a role for karpenter node or not"
}

################################################################################
# OPENSEARCH
################################################################################

variable "create_opensearch_role" {
  type        = bool
  default     = false
  description = "Whether to create Opensearch role to assume opensearch write role"
}
variable "opensearch_oidc_subject" {
  type        = string
  default     = "system:serviceaccount:logging:opensearch-sa"
  description = "OIDC fully qualified subject name for Opensearch"
}
variable "opensearch_write_assume_role_arn" {
  type        = string
  default     = ""
  description = "IAM role ARN of the opensearch write role"
}

################################################################################
# AWS LOAD BALANCER CONTROLLER
################################################################################

variable "create_aws_lb_controller_role" {
  type        = bool
  default     = true
  description = "Whether to create AWS Load Balancer Controller role or not"
}

################################################################################
# PROMETHEUS AMP
################################################################################

variable "create_prometheus_amp_role" {
  type        = bool
  default     = false
  description = "Whether to create role for Prometheus AMP"
}
variable "prometheus_amp_oidc_subject" {
  type        = string
  default     = "system:serviceaccount:logging:prometheus-amp-sa"
  description = "OIDC fully qualified subject name for Prometheus"
}
variable "prometheus_amp_assume_role_arn" {
  type        = string
  default     = ""
  description = "IAM role ARN of the prometheus amp role to assume"
}

################################################################################
# EBS CSI DRIVER
################################################################################

variable "create_ebs_csi_driver_role" {
  type        = bool
  default     = true
  description = "Whether to create role for EBS CSI driver"
}

################################################################################
# CLOUDWATCH OBSERVABILITY ADDON
################################################################################

variable "create_cloudwatch_observability_role" {
  type        = bool
  default     = true
  description = "Whether to create role for Cloudwatch Observability Addon"
}