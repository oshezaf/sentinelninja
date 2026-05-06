# Commvault Disable SAML Provider Logic App Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Logic App executes when called upon by an Automation Rule. Accessing the KeyVault to retrieve various credentials, it executes a specific runbook depending on the use case.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Commvault Security IQ](../solutions/commvault-security-iq.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Commvault%20Security%20IQ/Playbooks/Commvault_Disable_SAML_Provider_Logic_App/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureautomation` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 0 |
| `keyvault` | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureautomation`** (managedApi):
- *Disable_IDP_Job*: method=`put`, path=`/subscriptions/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/providers/Microsoft.Automation/automationAccounts/@{encodeURIComponent('Commvault-Automation-Account')}/jobs`
- *Disable_IDP_Job_Output*: method=`get`, path=`/subscriptions/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/providers/Microsoft.Automation/automationAccounts/@{encodeURIComponent('Commvault-Automation-Account')}/jobs/@{encodeURIComponent(body('Disable_IDP_Job')?['properties']?['jobId'])}/output`

**`keyvault`** (managedApi):
- *Access_Token*: method=`get`, path=`/secrets/@{encodeURIComponent('access-token')}/value`
- *Environment_Endpoint_URL*: method=`get`, path=`/secrets/@{encodeURIComponent('environment-endpoint-url')}/value`

</details>

## Additional Documentation

> 📄 *Source: [Commvault_Disable_SAML_Provider_Logic_App/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Commvault%20Security%20IQ/Playbooks/Commvault_Disable_SAML_Provider_Logic_App/readme.md)*

# Commvault Logic App Playbook
## Summary
This Logic App executes when called upon by an Automation Rule. Accessing the KeyVault to retrieve various credentials, it executes a specific runbook depending on the use case. 

## Prerequisites
- Administrative access to your Commvault/Metallic environment.
- Administrative access to your Azure Resource Group and Subscription.
- A Microsoft Sentinel instance in the aforementioned Azure Resource Group.
- A Keyvault and an Automation Account configured as mentioned in the documentation here :- (https://github.com/Cv-securityIQ/Azure-Integration/blob/master/Solutions/Commvault%20Security%20IQ/README.md)

## Deployment Instructions
Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2Commvault%20Security%20IQ%2FPlaybooks%2Commvault_Disable_SAML_Provider_Logic_App%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2Commvault%20Security%20IQ%2FPlaybooks%2Commvault_Disable_SAML_Provider_Logic_App%2Fazuredeploy.json)

Alternatively:-
1. To import the logic app from the azure portal go to "Custom Deployment"
2. "Build your own template in the editor"
3. "Load File" -> Use the json present under **Playbooks/CommvaultLogicApp/azuredeploy.json**.
4. Enter in the required parameters

## Post-deployment Instructions
Steps to follow the instructions are mentioned here :- (https://github.com/Cv-securityIQ/Azure-Integration/blob/master/Solutions/Commvault%20Security%20IQ/README.md)
1. Give the required permissions to the logic app to get the secrets from the keyvault.
2. Setup the Managed Identity

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Commvault Security IQ](../solutions/commvault-security-iq.md)

