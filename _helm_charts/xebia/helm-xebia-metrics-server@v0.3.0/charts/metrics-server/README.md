# metrics-server

![Version: 3.10.0](https://img.shields.io/badge/Version-3.10.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 0.6.3](https://img.shields.io/badge/AppVersion-0.6.3-informational?style=flat-square)

Metrics Server is a scalable, efficient source of container resource metrics for Kubernetes built-in autoscaling pipelines.

**Homepage:** <https://github.com/kubernetes-sigs/metrics-server>

## Maintainers

| Name | Email | Url |
| ---- | ------ | --- |
| stevehipwell |  | https://github.com/stevehipwell |
| krmichel |  | https://github.com/krmichel |
| endrec |  | https://github.com/endrec |

## Source Code

* <https://github.com/kubernetes-sigs/metrics-server>

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| addonResizer.enabled | bool | `false` |  |
| addonResizer.image.repository | string | `"registry.k8s.io/autoscaling/addon-resizer"` |  |
| addonResizer.image.tag | string | `"1.8.14"` |  |
| addonResizer.nanny.cpu | string | `"20m"` |  |
| addonResizer.nanny.extraCpu | string | `"1m"` |  |
| addonResizer.nanny.extraMemory | string | `"2Mi"` |  |
| addonResizer.nanny.memory | string | `"15Mi"` |  |
| addonResizer.nanny.minClusterSize | int | `10` |  |
| addonResizer.nanny.pollPeriod | int | `300000` |  |
| addonResizer.nanny.threshold | int | `5` |  |
| addonResizer.resources.limits.cpu | string | `"40m"` |  |
| addonResizer.resources.limits.memory | string | `"25Mi"` |  |
| addonResizer.resources.requests.cpu | string | `"40m"` |  |
| addonResizer.resources.requests.memory | string | `"25Mi"` |  |
| affinity | object | `{}` |  |
| apiService.annotations | object | `{}` |  |
| apiService.caBundle | string | `""` |  |
| apiService.create | bool | `true` |  |
| apiService.insecureSkipTLSVerify | bool | `true` |  |
| args | list | `[]` |  |
| commonLabels | object | `{}` |  |
| containerPort | int | `10250` |  |
| defaultArgs[0] | string | `"--cert-dir=/tmp"` |  |
| defaultArgs[1] | string | `"--kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname"` |  |
| defaultArgs[2] | string | `"--kubelet-use-node-status-port"` |  |
| defaultArgs[3] | string | `"--metric-resolution=15s"` |  |
| deploymentAnnotations | object | `{}` |  |
| extraVolumeMounts | list | `[]` |  |
| extraVolumes | list | `[]` |  |
| fullnameOverride | string | `""` |  |
| hostNetwork.enabled | bool | `false` |  |
| image.pullPolicy | string | `"IfNotPresent"` |  |
| image.repository | string | `"registry.k8s.io/metrics-server/metrics-server"` |  |
| image.tag | string | `""` |  |
| imagePullSecrets | list | `[]` |  |
| livenessProbe.failureThreshold | int | `3` |  |
| livenessProbe.httpGet.path | string | `"/livez"` |  |
| livenessProbe.httpGet.port | string | `"https"` |  |
| livenessProbe.httpGet.scheme | string | `"HTTPS"` |  |
| livenessProbe.initialDelaySeconds | int | `0` |  |
| livenessProbe.periodSeconds | int | `10` |  |
| metrics.enabled | bool | `false` |  |
| nameOverride | string | `""` |  |
| nodeSelector | object | `{}` |  |
| podAnnotations | object | `{}` |  |
| podDisruptionBudget.enabled | bool | `false` |  |
| podDisruptionBudget.maxUnavailable | string | `nil` |  |
| podDisruptionBudget.minAvailable | string | `nil` |  |
| podLabels | object | `{}` |  |
| podSecurityContext | object | `{}` |  |
| priorityClassName | string | `"system-cluster-critical"` |  |
| rbac.create | bool | `true` |  |
| rbac.pspEnabled | bool | `false` |  |
| readinessProbe.failureThreshold | int | `3` |  |
| readinessProbe.httpGet.path | string | `"/readyz"` |  |
| readinessProbe.httpGet.port | string | `"https"` |  |
| readinessProbe.httpGet.scheme | string | `"HTTPS"` |  |
| readinessProbe.initialDelaySeconds | int | `20` |  |
| readinessProbe.periodSeconds | int | `10` |  |
| replicas | int | `1` |  |
| resources | object | `{}` |  |
| schedulerName | string | `""` |  |
| securityContext.allowPrivilegeEscalation | bool | `false` |  |
| securityContext.capabilities.drop[0] | string | `"ALL"` |  |
| securityContext.readOnlyRootFilesystem | bool | `true` |  |
| securityContext.runAsNonRoot | bool | `true` |  |
| securityContext.runAsUser | int | `1000` |  |
| securityContext.seccompProfile.type | string | `"RuntimeDefault"` |  |
| service.annotations | object | `{}` |  |
| service.labels | object | `{}` |  |
| service.port | int | `443` |  |
| service.type | string | `"ClusterIP"` |  |
| serviceAccount.annotations | object | `{}` |  |
| serviceAccount.create | bool | `true` |  |
| serviceAccount.name | string | `""` |  |
| serviceAccount.secrets | list | `[]` |  |
| serviceMonitor.additionalLabels | object | `{}` |  |
| serviceMonitor.enabled | bool | `false` |  |
| serviceMonitor.interval | string | `"1m"` |  |
| serviceMonitor.metricRelabelings | list | `[]` |  |
| serviceMonitor.relabelings | list | `[]` |  |
| serviceMonitor.scrapeTimeout | string | `"10s"` |  |
| tolerations | list | `[]` |  |
| topologySpreadConstraints | list | `[]` |  |
| updateStrategy | object | `{}` |  |

----------------------------------------------
Autogenerated from chart metadata using [helm-docs v1.7.0](https://github.com/norwoodj/helm-docs/releases/v1.7.0)
