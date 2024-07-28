terraform {
  required_version = "~> 1.3"

  required_providers {
    aws       = "~> 5.0"
    cloudinit = "~> 2.0"
    tls       = "~> 4.0"
  }
}