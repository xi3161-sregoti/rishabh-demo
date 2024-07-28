![Version: 0.2.0](https://img.shields.io/badge/Version-0.2.0-informational?style=for-the-badge)
![Type: application](https://img.shields.io/badge/Type-application-informational?style=for-the-badge)
![AppVersion: 1.16.0](https://img.shields.io/badge/AppVersion-1.16.0-informational?style=for-the-badge)

## Description

A Helm chart to setup AWS EBS CSI driver

## Usage
<fill out>

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| aws-ebs-csi-driver.controller.env[0].name | string | `"AWS_STS_REGIONAL_ENDPOINTS"` |  |
| aws-ebs-csi-driver.controller.env[0].value | string | `"legacy"` |  |
| aws-ebs-csi-driver.controller.region | string | `"ap-south-1"` |  |
| aws-ebs-csi-driver.controller.resources.requests.cpu | string | `"200m"` |  |
| aws-ebs-csi-driver.controller.resources.requests.memory | string | `"128Mi"` |  |
| aws-ebs-csi-driver.controller.serviceAccount.annotations | object | `{}` |  |
| aws-ebs-csi-driver.controller.serviceAccount.create | bool | `false` |  |
| aws-ebs-csi-driver.controller.serviceAccount.name | string | `"ebs-csi-controller-sa"` |  |
| aws-ebs-csi-driver.node.serviceAccount.annotations | object | `{}` |  |
| aws-ebs-csi-driver.node.serviceAccount.create | bool | `false` |  |
| aws-ebs-csi-driver.node.serviceAccount.name | string | `"ebs-csi-node-sa"` |  |
| aws-ebs-csi-driver.storageClasses[0].allowVolumeExpansion | bool | `true` |  |
| aws-ebs-csi-driver.storageClasses[0].annotations."storageclass.kubernetes.io/is-default-class" | string | `"true"` |  |
| aws-ebs-csi-driver.storageClasses[0].name | string | `"ebs-sc"` |  |
| aws-ebs-csi-driver.storageClasses[0].parameters.encrypted | string | `"true"` |  |
| aws-ebs-csi-driver.storageClasses[0].volumeBindingMode | string | `"WaitForFirstConsumer"` |  |
| aws-ebs-csi-driver.storageClasses[1].allowVolumeExpansion | bool | `true` |  |
| aws-ebs-csi-driver.storageClasses[1].allowedTopologies[0].matchLabelExpressions[0].key | string | `"topology.ebs.csi.aws.com/zone"` |  |
| aws-ebs-csi-driver.storageClasses[1].allowedTopologies[0].matchLabelExpressions[0].values[0] | string | `"ap-south-1a"` |  |
| aws-ebs-csi-driver.storageClasses[1].name | string | `"ebs-sc-1a"` |  |
| aws-ebs-csi-driver.storageClasses[1].parameters.encrypted | string | `"true"` |  |
| aws-ebs-csi-driver.storageClasses[1].volumeBindingMode | string | `"WaitForFirstConsumer"` |  |
| aws-ebs-csi-driver.storageClasses[2].allowVolumeExpansion | bool | `true` |  |
| aws-ebs-csi-driver.storageClasses[2].allowedTopologies[0].matchLabelExpressions[0].key | string | `"topology.ebs.csi.aws.com/zone"` |  |
| aws-ebs-csi-driver.storageClasses[2].allowedTopologies[0].matchLabelExpressions[0].values[0] | string | `"ap-south-1b"` |  |
| aws-ebs-csi-driver.storageClasses[2].name | string | `"ebs-sc-1b"` |  |
| aws-ebs-csi-driver.storageClasses[2].parameters.encrypted | string | `"true"` |  |
| aws-ebs-csi-driver.storageClasses[2].volumeBindingMode | string | `"WaitForFirstConsumer"` |  |
| aws-ebs-csi-driver.storageClasses[3].allowVolumeExpansion | bool | `true` |  |
| aws-ebs-csi-driver.storageClasses[3].allowedTopologies[0].matchLabelExpressions[0].key | string | `"topology.ebs.csi.aws.com/zone"` |  |
| aws-ebs-csi-driver.storageClasses[3].allowedTopologies[0].matchLabelExpressions[0].values[0] | string | `"ap-south-1c"` |  |
| aws-ebs-csi-driver.storageClasses[3].name | string | `"ebs-sc-1c"` |  |
| aws-ebs-csi-driver.storageClasses[3].parameters.encrypted | string | `"true"` |  |
| aws-ebs-csi-driver.storageClasses[3].volumeBindingMode | string | `"WaitForFirstConsumer"` |  |

