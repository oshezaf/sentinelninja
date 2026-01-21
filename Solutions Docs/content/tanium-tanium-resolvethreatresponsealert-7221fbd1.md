# Tanium-ResolveThreatResponseAlert

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Maintaining alert hygiene in multiple consoles can be overwhelming. This playbook helps teams keep Tanium Threat Response up-to-date when using Microsoft Sentinel to centrally manage alerts. This playbook will resolve any Tanium Threat Response alerts associated with a Microsoft Sentinel incident. See [Tanium Help](https://help.tanium.com/bundle/ConnectAzureSentinel/page/Integrations/MSFT/ConnectAzureSentinel/Overview.htm) for a guide to setting up the Tanium Connector for Sentinel. Don't forget

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Tanium](../solutions/tanium.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Playbooks/Tanium-ResolveThreatResponseAlert/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Tanium-ResolveThreatResponseAlert/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Playbooks/Tanium-ResolveThreatResponseAlert/readme.md)*

## Overview

This playbook will resolve any associated alerts in Tanium Threat Response associated with a Microsoft Sentinel incident. The result of resolving the alert will be added as a comment on the incident.

![Tanium-ResolveThreatResponseAlert screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Playbooks/Tanium-ResolveThreatResponseAlert/images/Tanium-ResolveThreatResponseAlert.png)

## Prerequisites
- Sentinel incidents created using the "Tanium Threat Response Alerts" analytic rule  
Only Microsoft Sentinel Incidents created by the "Tanium Threat Response Alerts" analytic rule will have the required metadata to allow resolving the associated Tanium Threat Response alert.

- A [Tanium API Token](https://help.tanium.com/bundle/ug_console_cloud/page/platform_user/console_api_tokens.html)   
A Tanium API token, granting access to your Tanium environment is required to make the necessary queries against the Tanium API.  

- Tanium Threat Response Module  
Tanium Threat Response must be installed and operational in your Tanium environment.

- Permission to Assign Roles to the Resource Group   
For this playbook to successfully run it must have the Microsoft Sentinel Contributor role at the Resource Group scope. This is added as part of this ARM template, and therefore requires the user who is creating the playbook to have `Microsoft.Authorization/roleAssignments/write` on the resource group. Some examples of roles that meet this criteria for the user include:
  - Owner
  - User Access Administrator
  - Role Based Access Control Administrator
  - Global Administrator 

## Post-Deployment Instructions

You must authorize the API Connections used by this playbook after deployment. See [Tanium Playbooks](https://help.tanium.com/bundle/ConnectAzureSentinel/page/Integrations/MSFT/ConnectAzureSentinel/Get_to_know_our_Content.htm#_Tanium_Playbooks) for more information about our playbooks and how to create a playbook from this template.


## Get the Template
Use the links below to create the playbook from our template.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTanium%2FPlaybooks%2FTanium-ResolveThreatResponseAlert%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTanium%2FPlaybooks%2FTanium-ResolveThreatResponseAlert%2Fazuredeploy.json)

## Note

With the default deployment and configuration settings of the playbooks, your Tanium API Key is stored in a secure string workflow parameter. To update your Tanium API Key you must redeploy this playbook.

To allow Tanium API Key updates it is advised to use Azure Key Vault to securely store the Tanium API Key and update this playbook to use the Tanium API Key from the Key Vault instead of the secure string parameter.

Key Vault references

* [Key Vault | Microsoft Azure](https://azure.microsoft.com/services/key-vault/)
* [Azure Key Vault Connector reference | Microsoft Docs](https://docs.microsoft.com/connectors/keyvault/)
* [Secure access and data - Azure Logic Apps | Microsoft Docs](https://docs.microsoft.com/azure/logic-apps/logic-apps-securing-a-logic-app?tabs=azure-portal#secure-inputs-and-outputs-in-the-designer).

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Tanium](../solutions/tanium.md)

