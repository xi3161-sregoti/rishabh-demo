
terraform {
  backend "s3" {	
    bucket = "xlr8s-artifacts"
    encrypt = "false"
    key = "demodigitalcoe-3ec81a2/envs/dev-43469a8/01-infra/eks-eks-1f08dc/06-eks-iam-addons/terraform.tfstate"
    region = "ap-south-1"
  }
}
