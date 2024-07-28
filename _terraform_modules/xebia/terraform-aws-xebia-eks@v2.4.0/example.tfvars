region = "ap-south-1"
# assume_role_arn                        = "arn:aws:iam::123456789:role/TerraformAdmin"
cluster_name                           = "test"
cluster_version                        = "1.24"
vpc_id                                 = "vpc-01234abc56789"
subnet_ids                             = ["subnet-01234abc56789", "subnet-01234pqr56789", "subnet-01234xyz56789"]
enable_endpoint_private_access         = true
enable_endpoint_public_access          = false
kms_key_arn                            = "arn:aws:kms:ap-south-1:123456789:key/1234abcd-1234-5678-9123-12345678"
enabled_cluster_log_types              = ["api", "audit", "authenticator", "controllerManager", "scheduler"]
cloudwatch_log_group_retention_in_days = 365

eks_managed_node_groups = [
  {
    "name" : "worker-v1"
    "capacity_type" : "SPOT",
    "instance_types" : ["t3.medium"],
    "labels" : {
      "type" : "worker"
    },
    "max_size" : 2,
    "min_size" : 2,
    "desired_size" : 2,
    // this example is to deploy ng to a specific AZ or Subnet
    "subnet_ids" : ["subnet-01234abc56789"]
  },
  {
    "name" : "worker-v2"
    "capacity_type" : "SPOT",
    "instance_types" : ["t3.medium"],
    "labels" : {
      "type" : "worker"
    },
    "max_size" : 2,
    "min_size" : 2,
    "desired_size" : 2
  }
]

control_plane_security_group_additional_rules = {
  ingress_self_all = {
    description = "Node to node all ports/protocols",
    from_port   = 0,
    protocol    = "-1",
    self        = true,
    to_port     = 0,
    type        = "ingress"
  },
  release_management_access = {
    cidr_blocks = ["10.0.0.0/16"],
    description = "Release management access",
    from_port   = 443,
    protocol    = "tcp",
    to_port     = 443,
    type        = "ingress"
  }
}