# Tanium-QuarantineHosts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

During an investigation, it may be critical to isolate endpoints quickly if a compromise is detected. It's also important to track quarantine actions for auditing purposes. This playbook starts with a Microsoft Sentinel incident, gets the hosts associated with that incident, then directs Tanium to quarantine those hosts. The status of the quarantine operation is commented on the Microsoft Sentinel incident. See [Tanium Help](https://help.tanium.com/bundle/ConnectAzureSentinel/page/Integrations/M

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Tanium](../solutions/tanium.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Playbooks/Tanium-QuarantineHosts/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 8 |
| `keyvault` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 11 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_Issued_Actions_to_Incident*: method=`post`, path=`/Incidents/Comment`
- *Get_Hosts_From_Incident*: method=`post`, path=`/entities/host`
- *Add_comment__-_no_hosts_found*: method=`post`, path=`/Incidents/Comment`
- *Add_comment__-_no_data_in_Tanium*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_-_hosts_that_will_be_targeted*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_-_known_and_unknown_action_results*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_-_known_action_results*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_-_unknown_action_results*: method=`post`, path=`/Incidents/Comment`

**`keyvault`** (managedApi):
- *Get_secret*: method=`get`, path=`/secrets/@{encodeURIComponent('TaniumApiToken')}/value`

**`http`** (builtin):
- *Get_the_"All_Computers"_group*: method=`GET`, uri=`@parameters('TaniumAllComputersUrl')`
- *Get_Linux_Quarantine_package*: method=`GET`, uri=`@{concat(parameters('TaniumPackagesByNameUrlFragment'), uriComponent(variables('linuxPackageName')))}`
- *Issue_Linux_Quarantine_action*: method=`POST`, uri=`@parameters('TaniumActionsApi')`
- *Get_Windows_Quarantine_package*: method=`GET`, uri=`@{concat(parameters('TaniumPackagesByNameUrlFragment'), uriComponent(variables('windowsPackageName')))}`
- *Issue_Windows_Quarantine_action*: method=`POST`, uri=`@parameters('TaniumActionsApi')`
- *Get_macOS_Quarantine_package*: method=`GET`, uri=`@{concat(parameters('TaniumPackagesByNameUrlFragment'), uriComponent(variables('macOsPackageName')))}`
- *Issue_macOS_Quarantine_action*: method=`POST`, uri=`@parameters('TaniumActionsApi')`
- *Get_General_Host_Info*: method=`POST`, uri=`@parameters('TaniumApiGatewayApi')`
- *Requery_the_API_Gateway*: method=`POST`, uri=`@parameters('TaniumApiGatewayApi')`
- *Get_next_page*: method=`POST`, uri=`@parameters('TaniumApiGatewayApi')`
- *Get_action_result*: method=`GET`, uri=`@{concat(parameters('TaniumActionResultDataUrlFragment'), items('Collect_action_results_for_each_issued_action')?['id'])}`

</details>

## Additional Documentation

> 📄 *Source: [Tanium-QuarantineHosts/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Playbooks/Tanium-QuarantineHosts/readme.md)*

## Overview

This playbook will use Tanium to quarantine any hosts associated with a Microsoft Sentinel incident. After the quarantine request has been made, it will wait for the quarantine action to expire and then check its results.

The results of the playbook will be added as comments to the incident:
1. The hosts that will be targeted
2. The quarantine action(s)' deployment status
3. The results of the quarantine action(s)

![Tanium-QuarantineHosts screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Playbooks/Tanium-QuarantineHosts/images/Tanium-QuarantineHosts.png)

## Prerequisites
- Sentinel incidents with associated hosts running the Tanium client   
If this playbook is run against an incident with 1 or more hosts that are not running the Tanium client, then Tanium will not be able to provide information for those host(s). If the incident only contains hosts that are not running the Tanium client then a comment will be placed on the incident indicating that, and the playbook will exit early.

> [!TIP]
> Leverage the "Tanium Threat Response Alerts" analytics rule to generate Sentinel incidents for an Threat Response Alert from Tanium.

- A [Tanium API Token](https://help.tanium.com/bundle/ug_console_cloud/page/platform_user/console_api_tokens.html)   
A Tanium API token, granting access to your Tanium environment is required to make the necessary queries against the Tanium API.  

- An Azure Integration Account   
Required to execute javascript needed to prepare query filters for Tanium API Gateway HTTP requests

- Tanium Threat Response 4.7+ Module   
Tanium Threat Response must be installed and running your Tanium environment and must be version 4.7 or higher. If you are running a lower version see See [Tanium Playbooks](https://help.tanium.com/bundle/ConnectAzureSentinel/page/Integrations/MSFT/ConnectAzureSentinel/Get_to_know_our_Content.htm#_Tanium_Playbooks) for more information.

- Permission to Assign Roles to the Resource Group   
For this playbook to successfully run it must have the Microsoft Sentinel Contributor role at the Resource Group scope. This is added as part of this ARM template, and therefore requires the user who is creating the playbook to have `Microsoft.Authorization/roleAssignments/write` on the resource group. Some examples of roles that meet this criteria for the user include:
  - Owner
  - User Access Administrator
  - Role Based Access Control Administrator
  - Global Administrator 

## Get the Template
Use the links below to create the playbook from our template.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTanium%2FPlaybooks%2FTanium-QuarantineHosts%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTanium%2FPlaybooks%2FTanium-QuarantineHosts%2Fazuredeploy.json)

## Note

With the default deployment and configuration settings of the playbooks, your Tanium API Key is stored in a secure string workflow parameter. To update your Tanium API Key you must redeploy this playbook.

To allow Tanium API Key updates it is advised to use Azure Key Vault to securely store the Tanium API Key and update this playbook to use the Tanium API Key from the Key Vault instead of the secure string parameter.

Key Vault references

* [Key Vault | Microsoft Azure](https://azure.microsoft.com/services/key-vault/)
* [Azure Key Vault Connector reference | Microsoft Docs](https://docs.microsoft.com/connectors/keyvault/)
* [Secure access and data - Azure Logic Apps | Microsoft Docs](https://docs.microsoft.com/azure/logic-apps/logic-apps-securing-a-logic-app?tabs=azure-portal#secure-inputs-and-outputs-in-the-designer).

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Tanium](../solutions/tanium.md)

