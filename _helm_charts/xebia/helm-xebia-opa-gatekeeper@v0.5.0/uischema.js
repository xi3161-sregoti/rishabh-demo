function getSchema(formData, extensions) {
  return {
    title: "Policies",
    description: "A simple form example.",
    type: "object",
    "ui:outerTable": [
      { header: "Template Name", value: "params.name", headerStyle: { width: "25%" }, valueStyle: { width: "30%" } },
      { header: "Category", value: "params.category", headerStyle: { width: "11%" }, valueStyle: { width: "15%" } },
      { header: "No of Policies", value: "params.policyCount", headerStyle: { width: "10%" }, valueStyle: { width: "10%" } },
      { header: "Template Description", value: "params.description", valueStyle: { width: "55%" } }],
    "ui:innerTable": [
      { header: "Policy Name", value: "params.name", type: "string", valueStyle: { color: "#2e6ce6" } },
      { header: "Severity", value: "params.severity", type: "tag" },
      { header: "Enforcement Mode", value: "params.enforcementAction", type: "string" },
    ],
    properties: {
      K8sAllowedConfigmap: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "id": 1,
          "name": "Allowed Configmap",
          "key": "K8sAllowedConfigmap",
          "category": "Security",
          "description": "Access allowed Configmap",
          "version": "v1",
          "severity": "high",
          "enforcementAction": "dryrun",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              allowedConfigmap: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Allowed Configmap",
                "ui:rank": "1",
                "ui:component": "multiInput",
                "ui:rankLabel": "Paramaters",
                "ui:css": { flexGrow: "1" },
                "ui:validation": [{
                  condition: "formData.params && formData.params.allowedConfigmap && formData.params.allowedConfigmap.length > 0",
                  message: "Allowed Configmap is required",
                },
                ],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sAllowedGroupID: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Container should only use allowed group ID",
          "enforcementAction": "dryrun",
          "id": 2,
          "key": "K8sAllowedGroupID",
          "name": "Allowed GroupID",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              "groupID": {
                "ui:component": "tableMultiInput",
                "type": "array",
                "ui:rank": "4:1",
                "items": {
                  "type": "string"
                },
                "ui:columns": [
                  {
                    "input": false,
                    "label": "Min"
                  },
                  {
                    "input": true,
                    "label": "min"
                  },
                  {
                    "input": false,
                    "label": "Max"
                  },
                  {
                    "input": true,
                    "label": "max"
                  }
                ],
                "ui:label": "ID Range"
              },
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:default": ["istio-init"],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sAllowedPorts: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Services are running on allowed ports",
          "enforcementAction": "dryrun",
          "id": 2,
          "key": "K8sAllowedPorts",
          "name": "Allowed Ports",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              "allowedPorts": {
                "ui:component": "tableMultiInput",
                "type": "array",
                "ui:rank": "4:1",
                "items": {
                  "type": "string"
                },
                "ui:columns": [
                  {
                    "input": false,
                    "label": "Min"
                  },
                  {
                    "input": true,
                    "label": "min"
                  },
                  {
                    "input": false,
                    "label": "Max"
                  },
                  {
                    "input": true,
                    "label": "max"
                  }
                ],
                "ui:label": "ID Range"
              },
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:default": ["istio-init"],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sAllowedPullPolicy: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "id": 4,
          "name": "Allowed Pull Policy",
          "key": "K8sAllowedPullPolicy",
          "category": "Security",
          "description": "Should have allowed pull policy",
          "version": "v1",
          "severity": "high",
          "enforcementAction": "dryrun",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              allowedPullPolicies: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Allowed PullPolicy",
                "ui:rank": "1",
                "ui:component": "multiInput",
                "ui:rankLabel": "Paramaters",
                "ui:css": { flexGrow: "1" },
                "ui:validation": [{
                  condition: "formData.params && formData.params.allowedPullPolicies && formData.params.allowedPullPolicies.length > 0",
                  message: "Allowed PullPolicies is required",
                },
                ],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sAllowedRepos: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "id": 5,
          "name": "Allowed Repos",
          "key": "K8sAllowedRepos",
          "category": "Security",
          "description": "Requires container images to begin with a repo string from a specified list.",
          "version": "v1",
          "severity": "high",
          "enforcementAction": "dryrun",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              repos: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Allowed Repos",
                "ui:rank": "1",
                "ui:component": "multiInput",
                "ui:rankLabel": "Paramaters",
                "ui:css": { flexGrow: "1" },
                "ui:validation": [{
                  condition: "formData.params && formData.params.repos && formData.params.repos.length > 0",
                  message: "Allowed Repos is required",
                },
                ],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sAllowedSecret: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "id": 6,
          "name": "Allowed Secret",
          "key": "K8sAllowedSecret",
          "category": "Security",
          "description": "Access allowed Secret",
          "version": "v1",
          "severity": "high",
          "enforcementAction": "dryrun",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              allowedSecret: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Allowed Secret",
                "ui:rank": "1",
                "ui:component": "multiInput",
                "ui:rankLabel": "Paramaters",
                "ui:css": { flexGrow: "1" },
                "ui:validation": [{
                  condition: "formData.params && formData.params.allowedSecret && formData.params.allowedSecret.length > 0",
                  message: "Allowed Secret is required",
                },
                ],
              },
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "2",
                "ui:component": "multiInput",
                "ui:css": { flexGrow: "1" },
                "ui:validation": [{
                  condition: "formData.params && formData.params.skipContainers && formData.params.skipContainers.length > 0",
                  message: "Allowed Secret is required",
                },
                ],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sAllowedUserID: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Container should only use allowed user ID",
          "enforcementAction": "dryrun",
          "id": 2,
          "key": "K8sAllowedUserID",
          "name": "Allowed UserID",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              "userID": {
                "ui:component": "tableMultiInput",
                "type": "array",
                "ui:rank": "4:1",
                "items": {
                  "type": "string"
                },
                "ui:columns": [
                  {
                    "input": false,
                    "label": "Min"
                  },
                  {
                    "input": true,
                    "label": "min"
                  },
                  {
                    "input": false,
                    "label": "Max"
                  },
                  {
                    "input": true,
                    "label": "max"
                  }
                ],
                "ui:label": "ID Range"
              },
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:default": ["istio-init"],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sAppScaling: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
            "id": 8,
            "name": "App Scaling",
            "key": "K8sAppScaling",
            "category": "QoS",
            "description": "Application should use backpressure to scale horizontally ",
            "severity": "high",
            "enforcementAction": "dryrun",
        },
        properties: {
            name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
                condition: "formData.name && formData.name.length > 0",
                message: "Policy name is required",
            },
            ],
            },
            params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
            },
            advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
            },
            enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
                {
                label: "Deny",
                value: "deny",
                },
                {
                label: "Warn",
                value: "warn",
                },
                {
                label: "Dry Run",
                value: "dryRun",
                },
            ],
            "ui:component": "toggleButtonGroup",
            },
            severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
                {
                label: "High",
                value: "high",
                },
                {
                label: "Medium",
                value: "medium",
                },
                {
                label: "Low",
                value: "low",
                },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
            },
            filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
                namespaces: {
                type: "array",
                items: {
                    type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                },
                excludedNamespaces: {
                type: "array",
                items: {
                    type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                },
                labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                    type: "string",
                },
                },
            },
            },
        },
      },
      K8sAppStartupProbe: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
            "id": 9,
            "name": "Application Startup Probe",
            "key": "K8sAppStartupProbe",
            "category": "QoS",
            "description": "Container should use startup probe instead of initial delay seconds ",
            "severity": "high",
            "enforcementAction": "dryrun",
        },
        properties: {
            name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
                condition: "formData.name && formData.name.length > 0",
                message: "Policy name is required",
            },
            ],
            },
            params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
            },
            advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
            },
            enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
                {
                label: "Deny",
                value: "deny",
                },
                {
                label: "Warn",
                value: "warn",
                },
                {
                label: "Dry Run",
                value: "dryRun",
                },
            ],
            "ui:component": "toggleButtonGroup",
            },
            severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
                {
                label: "High",
                value: "high",
                },
                {
                label: "Medium",
                value: "medium",
                },
                {
                label: "Low",
                value: "low",
                },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
            },
            filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
                namespaces: {
                type: "array",
                items: {
                    type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                },
                excludedNamespaces: {
                type: "array",
                items: {
                    type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                },
                labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                    type: "string",
                },
                },
            },
            },
        },
      },
      K8sAutomountableToken: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Runtime",
          "description": "Default Service Account should have token as false  ",
          "enforcementAction": "dryrun",
          "id": 9,
          "key": "K8sAutomountableToken",
          "name": "Automountable Token",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sBlockNpLb: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "id": 10,
          "name": "Block NodePort LoadBalancer",
          "key": "K8sBlockNpLb",
          "category": "Security",
          "description": "Disallows all Services with type NodePort and Loadbalancer",
          "version": "v1",
          "severity": "high",
          "enforcementAction": "dryrun",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              allowedSVC: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Allowed Services",
                "ui:rank": "1",
                "ui:component": "multiInput",
                "ui:rankLabel": "Paramaters",
                "ui:css": { flexGrow: "1" },
                "ui:validation": [{
                  condition: "formData.params && formData.params.allowedSVC && formData.params.repos.length > 0",
                  message: "Allowed Services is required",
                },
                ],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sCapsOnDeployment: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "QoS",
          "description": "Requires Deployment to have min replicas",
          "enforcementAction": "dryrun",
          "id": 11,
          "key": "K8sCapsOnDeployment",
          "name": "Caps on Deployments",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              minReplicas: {
                type: "number",
                title: "Min Replicas for Deployments",
                "ui:default": 3,
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sCapsOnHPA: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Resilience",
          "description": "Requires HPA to have min-max replicas",
          "enforcementAction": "dryrun",
          "id": 12,
          "key": "K8sCapsOnHPA",
          "name": "Caps on HPA",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              minReplicas: {
                type: "number",
                title: "Min Replicas for Deployments",
                "ui:default": 3,
                "ui:rank": "1:1",
              },
              maxReplicas: {
                type: "number",
                title: "Max Replicas for HPA",
                "ui:default": 10,
                "ui:rank": "1:2",
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sContainerResourceLimits: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "QoS",
          "description": "Requires containers to have memory and CPU limits set and constrains limits to be within the specified maximum values",
          "enforcementAction": "dryrun",
          "id": 13,
          "key": "K8sContainerResourceLimits",
          "name": "Limit Container Resources",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              requiredResourceTypes: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Required Resource Types",
                "ui:rank": "1",
                "ui:optionList": [
                  {
                    label: "limits",
                    value: "limits",
                  },
                  {
                    label: "requests",
                    value: "requests",
                  },
                ],
                "ui:component": "multiSelect",
              },
              requiredResources: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Required Resources",
                "ui:rank": "2",
                "ui:optionList": [
                  {
                    label: "cpu",
                    value: "cpu",
                  },
                  {
                    label: "memory",
                    value: "memory",
                  },
                ],
                "ui:component": "multiSelect",
              },
              resourceLimits: {
                type: "string",
                "ui:component": "codemirror",
                "ui:rank": "3",
                "ui:css": { width: "100%" },
                "ui:default": `{"limits": {"cpu": "100m", "memory": "1Gi"},"requests":{"cpu": "100m", "memory": "1Gi"}}`,
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      k8sdiallowedrbacpriviledges: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Runtime",
          "description": "Default Service Account should have RBAC Priveledges ",
          "enforcementAction": "dryrun",
          "id": 9,
          "key": "k8sdiallowedrbacpriviledges",
          "name": "Diallowed RBAC Priveledges",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sDisableHostNetworking: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Pods should not have host networking",
          "enforcementAction": "dryrun",
          "id": 14,
          "key": "K8sDisableHostNetworking",
          "name": "Disable Host Networking",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:default": ["istio-init"],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sDisallowedAdministratorUser: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Container windows user should be container administrator",
          "enforcementAction": "dryrun",
          "id": 15,
          "key": "K8sDisallowedAdministratorUser",
          "name": "Disallowed Administrator User",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:default": ["istio-init"],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sDisallowedCapabilities: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Container should have certain capabilities",
          "enforcementAction": "dryrun",
          "id": 17,
          "key": "K8sDisallowedCapabilities",
          "name": "Disallowed Capabilities",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              disAllowedAddCapabilies: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Disallowed ADD Capabilities",
                "ui:rank": "1",
                "ui:component": "multiInput",
                "ui:default": ["NET_ADMIN"],
              },
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:default": ["istio-init"],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sDisallowedHostIPCHostPID: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Container windows user should be container administrator",
          "enforcementAction": "dryrun",
          "id": 18,
          "key": "K8sDisallowedHostIPCHostPID",
          "name": "Disallowed Host IPC & HostPID",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:default": ["istio-init"],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sDisallowedTags: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Misc",
          "description": "Requires container images to have an image tag different from the ones in the specified list",
          "enforcementAction": "dryrun",
          "id": 8,
          "key": "K8sDisallowedTags",
          "name": "Disallowed Tags",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              tags: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Disallowed Image Tags",
                "ui:rank": "1",
                "ui:component": "multiInput",
                "ui:default": ["latest"],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sDisallowHostPath: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Disallow Hostpath in resources",
          "enforcementAction": "dryrun",
          "id": 9,
          "key": "K8sDisallowHostPath",
          "name": "Disallow Host Path",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sDisallowPrivilegedPods: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Container should not be privileged or allowed privilege escalation",
          "enforcementAction": "dryrun",
          "id": 10,
          "key": "K8sDisallowPrivilegedPods",
          "name": "Disallow Privileged Pods",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sEnableAutoscaling: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Qos",
          "description": "All deployments should have autoscaling",
          "enforcementAction": "dryrun",
          "id": 11,
          "key": "K8sEnableAutoscaling",
          "name": "Enable Autoscaling",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sHostAlias: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "QoS",
          "description": "Container should not have host Aliases",
          "enforcementAction": "dryrun",
          "id": 16,
          "key": "K8sHostAlias",
          "name": "Host Alias",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "2" },
            properties: {
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:default": ["istio-init"],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sHPAMinMaxReplica: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "QoS",
          "description": "HPA Should not have same min-max replicas ",
          "enforcementAction": "dryrun",
          "id": 9,
          "key": "K8sHPAMinMaxReplica",
          "name": "HPA Min-Max Replica",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sHPAPresents: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "QoS",
          "description": "If HPA present deployment should not have replica ",
          "enforcementAction": "dryrun",
          "id": 9,
          "key": "K8sHPAPresents",
          "name": "HPA Presents",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sIRSAAnnotation: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Container should only use allowed group ID",
          "enforcementAction": "dryrun",
          "id": 2,
          "key": "K8sIRSAAnnotation",
          "name": "IRSA Annotation",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              "annotation": {
                "ui:component": "tableMultiInput",
                "type": "array",
                "ui:rank": "4:1",
                "items": {
                  "type": "string"
                },
                "ui:columns": [
                  {
                    "input": false,
                    "label": "Key"
                  },
                  {
                    "input": true,
                    "label": "key"
                  },
                  {
                    "input": false,
                    "label": "Value"
                  },
                  {
                    "input": true,
                    "label": "value"
                  }
                ],
                "ui:label": "Annotations"
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sMinReplicaCount: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Resilience",
          "description": "All deployments and statefulset should have min replica",
          "enforcementAction": "dryrun",
          "id": 3,
          "key": "K8sMinReplicaCount",
          "name": "Min Replica Count",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              minReplicas: {
                type: "number",
                title: "Min Replicas for Deployments",
                "ui:default": 3,
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sMultipleAZsSupport: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Resilience",
          "description": "All deployments and statefulset should multiple AZs Support",
          "enforcementAction": "dryrun",
          "id": 3,
          "key": "K8sMultipleAZsSupport",
          "name": "Multiple AZs Support",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              skewCount: {
                type: "number",
                title: "skew Count",
                "ui:default": 2,
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sPodDistributionBudget: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Resilience",
          "description": "Alotted Pod Distribution Budget ",
          "enforcementAction": "dryrun",
          "id": 9,
          "key": "K8sPodDistributionBudget",
          "name": "Pod Distribution Budget",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sPodPriority: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Qos",
          "description": "Pods must have a priority or priority class",
          "enforcementAction": "dryrun",
          "id": 12,
          "key": "K8sPodPriority",
          "name": "Pod Priority",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sRequiredNamespace: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Misc",
          "description": "Requires all k8s resources to have namespace",
          "enforcementAction": "dryrun",
          "id": 13,
          "key": "K8sRequiredNamespace",
          "name": "Enforce Namespace",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sRequiredProbes: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "QoS",
          "description": "Requires recources to have readiness, startup and liveness probes",
          "enforcementAction": "dryrun",
          "id": 14,
          "key": "K8sRequiredProbes",
          "name": "Enforce Probes",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              probes: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Required Probes",
                "ui:rank": "1",
                "ui:optionList": [
                  {
                    label: "Readiness Probe",
                    value: "readinessProbe",
                  },
                  {
                    label: "Liveness Probe",
                    value: "livenessProbe",
                  },
                  {
                    label: "Startup Probe",
                    value: "startupProbe",
                  },
                ],
                "ui:component": "multiSelect",
              },
              probesTypes: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Allowed Probe Types",
                "ui:rank": "2",
                "ui:optionList": [
                  {
                    label: "TCP Socket",
                    value: "tcpSocket",
                  },
                  {
                    label: "HTTP Get",
                    value: "httpGet",
                  },
                  {
                    label: "Exec",
                    value: "exec",
                  },
                ],
                "ui:component": "multiSelect",
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sRootFileSystemReadOnly: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Container should have root file system as read only permission",
          "enforcementAction": "dryrun",
          "id": 7,
          "key": "K8sRootFileSystemReadOnly",
          "name": "Root File System Read Only",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:default": ["istio-init"],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sRunAsNonRoot: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "category": "Security",
          "description": "Container should run as non root",
          "enforcementAction": "dryrun",
          "id": 15,
          "key": "K8sRunAsNonRoot",
          "name": "Container Run As Non Root",
          "severity": "high",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "1",
                "ui:component": "multiInput",
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      K8sWindowsAllowedUserIDGroupID: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        "ui:params": {
          "id": 1,
          "name": "Windows Allowed UserID & GroupID",
          "key": "K8sWindowsAllowedUserIDGroupID",
          "category": "Security",
          "description": "Windows container should run on allowed userID or groupID",
          "version": "v1",
          "severity": "high",
          "enforcementAction": "dryrun",
        },
        properties: {
          name: {
            type: "string",
            title: "Policy Name",
            "ui:rank": "1",
            "ui:rankLabel": "Basic Detail",
            "ui:css": { width: "50%" },
            "ui:validation": [{
              condition: "formData.name && formData.name.length > 0",
              message: "Policy name is required",
            },
            ],
          },
          params: {
            type: "object",
            "ui:rank": "2",
            "ui:css": { flexGrow: "1" },
            properties: {
              userID: {
                type: "array",
                item: {
                  type: "number",
                },
                title: "user ID",
                "ui:rank": "1",
                "ui:component": "multiInput",
                "ui:rankLabel": "Paramaters",
                "ui:css": { flexGrow: "1" },
                "ui:validation": [{
                  condition: "formData.params && formData.params.allowedSecret && formData.params.allowedSecret.length > 0",
                  message: "user ID is required",
                },
                ],
              },
              groupID: {
                type: "array",
                item: {
                  type: "number",
                },
                title: "group ID",
                "ui:rank": "1",
                "ui:component": "multiInput",
                "ui:rankLabel": "Paramaters",
                "ui:css": { flexGrow: "1" },
                "ui:validation": [{
                  condition: "formData.params && formData.params.allowedSecret && formData.params.allowedSecret.length > 0",
                  message: "group ID is required",
                },
                ],
              },
              skipContainers: {
                type: "array",
                item: {
                  type: "string",
                },
                title: "Skip Containers",
                "ui:rank": "2",
                "ui:component": "multiInput",
                "ui:css": { flexGrow: "1" },
                "ui:validation": [{
                  condition: "formData.params && formData.params.skipContainers && formData.params.skipContainers.length > 0",
                  message: "Allowed Secret is required",
                },
                ],
              },
            },
          },
          advanceConfiguration: {
            type: "boolean",
            title: "Advance Configuration",
            "ui:rank": "3",
            "ui:component": "toggle",
            "ui:css": { flexGrow: "1" },
            "ui:label": "Advance Configuration",
          },
          enforcementAction: {
            type: "string",
            title: "Enforcement Mode",
            "ui:default": "dryRun",
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:rank": "4",
            "ui:css": { flexGrow: "1" },
            "ui:optionList": [
              {
                label: "Deny",
                value: "deny",
              },
              {
                label: "Warn",
                value: "warn",
              },
              {
                label: "Dry Run",
                value: "dryRun",
              },
            ],
            "ui:component": "toggleButtonGroup",
          },
          severity: {
            type: "string",
            title: "Severity",
            "ui:rank": "5",
            "ui:css": { flexGrow: "1" },
            "ui:default": "high",
            "ui:optionList": [
              {
                label: "High",
                value: "high",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Low",
                value: "low",
              },
            ],
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            "ui:component": "toggleButtonGroup",
          },
          filters: {
            type: "object",
            title: "Filters",
            "ui:rank": "6",
            "ui:css": { width: "100%" },
            "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
            properties: {
              namespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Include Namespace",
                "ui:rank": "3",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              excludedNamespaces: {
                type: "array",
                items: {
                  type: "string",
                },
                title: "Exclude Namespace",
                "ui:rank": "4",
                "ui:component": "multiInput",
                "ui:css": { width: "40%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
              },
              labels: {
                type: "object",
                title: "++Labels",
                "ui:rank": "5",
                "ui:css": { width: "100%" },
                "ui:condition": "formData.advanceConfiguration && formData.advanceConfiguration === true",
                additionalProperties: {
                  type: "string",
                },
              },
            },
          },
        },
      }
    },
  }
}
