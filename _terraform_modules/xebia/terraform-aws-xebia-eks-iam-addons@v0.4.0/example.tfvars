cluster_name                         = "test"
oidc_provider_url                    = "https://oidc.eks.ap-south-1.amazonaws.com/id/ABCD123456789DEFXYZ"
create_cluster_autoscaler_role       = true
create_opensearch_role               = true
opensearch_write_assume_role_arn     = "arn:aws:iam::123456789:role/opensearch-test-role"
create_aws_lb_controller_role        = true
create_prometheus_amp_role           = true
prometheus_amp_assume_role_arn       = "arn:aws:iam::123456789:role/prometheus-test-role"
create_ebs_csi_driver_role           = true
create_cloudwatch_observability_role = true