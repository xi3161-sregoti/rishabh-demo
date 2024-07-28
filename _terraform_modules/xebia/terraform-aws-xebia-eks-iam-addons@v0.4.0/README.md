# terraform-aws-xebia-eks-iam-addons
Terraform module to provision IAM Roles for Service Accounts (IRSA) to be used with EKS

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | ~> 1.3 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | ~> 5.0 |

## Providers

No providers.

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_aws-lb-controller-role"></a> [aws-lb-controller-role](#module\_aws-lb-controller-role) | ./modules/terraform-aws-xebia-iam-0.9.0 | n/a |
| <a name="module_cloudwatch-observability-addon-role"></a> [cloudwatch-observability-addon-role](#module\_cloudwatch-observability-addon-role) | ./modules/terraform-aws-xebia-iam-0.9.0 | n/a |
| <a name="module_cluster-autoscaler-role"></a> [cluster-autoscaler-role](#module\_cluster-autoscaler-role) | ./modules/terraform-aws-xebia-iam-0.9.0 | n/a |
| <a name="module_ebs-csi-driver-role"></a> [ebs-csi-driver-role](#module\_ebs-csi-driver-role) | ./modules/terraform-aws-xebia-iam-0.9.0 | n/a |
| <a name="module_karpenter-controller-role"></a> [karpenter-controller-role](#module\_karpenter-controller-role) | ./modules/terraform-aws-xebia-iam-0.9.0 | n/a |
| <a name="module_karpenter-node-role"></a> [karpenter-node-role](#module\_karpenter-node-role) | ./modules/terraform-aws-xebia-iam-0.9.0 | n/a |
| <a name="module_opensearch-role"></a> [opensearch-role](#module\_opensearch-role) | ./modules/terraform-aws-xebia-iam-0.9.0 | n/a |
| <a name="module_prometheus-amp-role"></a> [prometheus-amp-role](#module\_prometheus-amp-role) | ./modules/terraform-aws-xebia-iam-0.9.0 | n/a |

## Resources

No resources.

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_assume_role_arn"></a> [assume\_role\_arn](#input\_assume\_role\_arn) | The role to be assumed while creating resources | `string` | `""` | no |
| <a name="input_cluster_name"></a> [cluster\_name](#input\_cluster\_name) | Name of the eks cluster for which roles are to be created | `string` | n/a | yes |
| <a name="input_common_tags"></a> [common\_tags](#input\_common\_tags) | Common tags to be added to the resources | `map(string)` | `{}` | no |
| <a name="input_create_aws_lb_controller_role"></a> [create\_aws\_lb\_controller\_role](#input\_create\_aws\_lb\_controller\_role) | Whether to create AWS Load Balancer Controller role or not | `bool` | `true` | no |
| <a name="input_create_cloudwatch_observability_role"></a> [create\_cloudwatch\_observability\_role](#input\_create\_cloudwatch\_observability\_role) | Whether to create role for Cloudwatch Observability Addon | `bool` | `true` | no |
| <a name="input_create_cluster_autoscaler_role"></a> [create\_cluster\_autoscaler\_role](#input\_create\_cluster\_autoscaler\_role) | Whether to create a role for cluster autoscaler or not | `bool` | `true` | no |
| <a name="input_create_ebs_csi_driver_role"></a> [create\_ebs\_csi\_driver\_role](#input\_create\_ebs\_csi\_driver\_role) | Whether to create role for EBS CSI driver | `bool` | `true` | no |
| <a name="input_create_karpenter_controller_role"></a> [create\_karpenter\_controller\_role](#input\_create\_karpenter\_controller\_role) | Whether to create a role for karpenter controller or not | `bool` | `false` | no |
| <a name="input_create_karpenter_node_role"></a> [create\_karpenter\_node\_role](#input\_create\_karpenter\_node\_role) | Whether to create a role for karpenter node or not | `bool` | `false` | no |
| <a name="input_create_opensearch_role"></a> [create\_opensearch\_role](#input\_create\_opensearch\_role) | Whether to create Opensearch role to assume opensearch write role | `bool` | `false` | no |
| <a name="input_create_prometheus_amp_role"></a> [create\_prometheus\_amp\_role](#input\_create\_prometheus\_amp\_role) | Whether to create role for Prometheus AMP | `bool` | `false` | no |
| <a name="input_karpenter_oidc_subject"></a> [karpenter\_oidc\_subject](#input\_karpenter\_oidc\_subject) | OIDC fully qualified subject name for karpenter | `string` | `"system:serviceaccount:karpenter:karpenter"` | no |
| <a name="input_oidc_provider_url"></a> [oidc\_provider\_url](#input\_oidc\_provider\_url) | OIDC provider URL of the EKS cluster for which roles are to be created | `string` | n/a | yes |
| <a name="input_opensearch_oidc_subject"></a> [opensearch\_oidc\_subject](#input\_opensearch\_oidc\_subject) | OIDC fully qualified subject name for Opensearch | `string` | `"system:serviceaccount:logging:opensearch-sa"` | no |
| <a name="input_opensearch_write_assume_role_arn"></a> [opensearch\_write\_assume\_role\_arn](#input\_opensearch\_write\_assume\_role\_arn) | IAM role ARN of the opensearch write role | `string` | `""` | no |
| <a name="input_policy_path_prefix"></a> [policy\_path\_prefix](#input\_policy\_path\_prefix) | Folder name where policies are stored | `string` | `"policies"` | no |
| <a name="input_prometheus_amp_assume_role_arn"></a> [prometheus\_amp\_assume\_role\_arn](#input\_prometheus\_amp\_assume\_role\_arn) | IAM role ARN of the prometheus amp role to assume | `string` | `""` | no |
| <a name="input_prometheus_amp_oidc_subject"></a> [prometheus\_amp\_oidc\_subject](#input\_prometheus\_amp\_oidc\_subject) | OIDC fully qualified subject name for Prometheus | `string` | `"system:serviceaccount:logging:prometheus-amp-sa"` | no |
| <a name="input_region"></a> [region](#input\_region) | AWS region where resources are to be created | `string` | `"ap-south-1"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_aws_lb_controller_role_arn"></a> [aws\_lb\_controller\_role\_arn](#output\_aws\_lb\_controller\_role\_arn) | IAM role ARN of AWS Load Balancer Controller role |
| <a name="output_aws_lb_controller_role_name"></a> [aws\_lb\_controller\_role\_name](#output\_aws\_lb\_controller\_role\_name) | IAM role name of AWS Load Balancer Controller role |
| <a name="output_cloudwatch_observability_role_arn"></a> [cloudwatch\_observability\_role\_arn](#output\_cloudwatch\_observability\_role\_arn) | IAM role ARN of Cloudwatch Observability Addon role |
| <a name="output_cloudwatch_observability_role_name"></a> [cloudwatch\_observability\_role\_name](#output\_cloudwatch\_observability\_role\_name) | IAM role name of Cloudwatch Observability Addon role |
| <a name="output_cluster_autoscaler_role_arn"></a> [cluster\_autoscaler\_role\_arn](#output\_cluster\_autoscaler\_role\_arn) | IAM role ARN of cluster autoscaler role |
| <a name="output_cluster_autoscaler_role_name"></a> [cluster\_autoscaler\_role\_name](#output\_cluster\_autoscaler\_role\_name) | IAM role name of cluster autoscaler role |
| <a name="output_ebs_csi_driver_role_arn"></a> [ebs\_csi\_driver\_role\_arn](#output\_ebs\_csi\_driver\_role\_arn) | IAM role ARN of EBS CSI Driver role |
| <a name="output_ebs_csi_driver_role_name"></a> [ebs\_csi\_driver\_role\_name](#output\_ebs\_csi\_driver\_role\_name) | IAM role name of EBS CSI Driver role |
| <a name="output_opensearch_role_arn"></a> [opensearch\_role\_arn](#output\_opensearch\_role\_arn) | IAM role ARN of opensearch role |
| <a name="output_opensearch_role_name"></a> [opensearch\_role\_name](#output\_opensearch\_role\_name) | IAM role name of opensearch role |
| <a name="output_prometheus_amp_role_arn"></a> [prometheus\_amp\_role\_arn](#output\_prometheus\_amp\_role\_arn) | IAM role ARN of Prometheus AMP role |
| <a name="output_prometheus_amp_role_name"></a> [prometheus\_amp\_role\_name](#output\_prometheus\_amp\_role\_name) | IAM role name of prometheus AMP role |
<!-- END_TF_DOCS -->