![Version: 0.2.0](https://img.shields.io/badge/Version-0.2.0-informational?style=for-the-badge)
![Type: application](https://img.shields.io/badge/Type-application-informational?style=for-the-badge)
![AppVersion: 2.2.1](https://img.shields.io/badge/AppVersion-2.2.1-informational?style=for-the-badge)

## Description

A Helm chart to setup aws-load-balancer-controller

## Usage
<fill out>

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| aws-load-balancer-controller.clusterName | string | `"cluster-name"` |  |
| aws-load-balancer-controller.image.repository | string | `"602401143452.dkr.ecr.us-west-2.amazonaws.com/amazon/aws-load-balancer-controller"` |  |
| aws-load-balancer-controller.image.tag | string | `"v2.4.6"` |  |
| aws-load-balancer-controller.ingressClass | string | `"alb"` |  |
| aws-load-balancer-controller.region | string | `"ap-south-1"` |  |
| aws-load-balancer-controller.resources.requests.cpu | string | `"100m"` |  |
| aws-load-balancer-controller.resources.requests.memory | string | `"128Mi"` |  |
| aws-load-balancer-controller.serviceAccount.annotations | object | `{}` |  |
| aws-load-balancer-controller.serviceAccount.create | bool | `true` |  |
| aws-load-balancer-controller.serviceAccount.name | string | `"aws-load-balancer-controller"` |  |
| aws-load-balancer-controller.vpcId | string | `"vpc-xxxx"` |  |

