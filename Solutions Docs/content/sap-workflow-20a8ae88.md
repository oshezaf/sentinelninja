# workflow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

< 🏡home

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SAP](../solutions/sap.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/Playbooks/SAPCollectorRemediate-STD/workflow.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 0 | 1 |
| `azuresentinel` | Managed | 0 | 2 |
| `azurevm` | Managed | 0 | 1 |
| `teams` | Managed | 0 | 6 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_SAPConnectorHealth_check*: method=`post`, path=`/queryData`

**`azuresentinel`** (managedApi):
- *Add_SAP_SOC_comment_to_incident*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident*: method=`post`, path=`/Incidents/Comment`

**`azurevm`** (managedApi):
- *Restart_Sentinel_Collector_virtual_machine*: method=`post`, path=`/subscriptions/@{encodeURIComponent(parameters('SentinelCollectorSubscriptionId'))}/resourcegroups/@{encodeURIComponent(parameters('SentinelCollectorResourceGroup'))}/providers/Microsoft.Compute/virtualMachines/@{encodeURIComponent(parameters('SentinelCollectorVMName'))}/restart`

**`teams`** (managedApi):
- *Reply_with_processed_message_in_a_channel*: method=`post`, path=`/v1.0/teams/conversation/replyWithMessage/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Reply_with_restart_error_message_in_a_channel*: method=`post`, path=`/v1.0/teams/conversation/replyWithMessage/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Reply_with_restart_success_message_in_a_channel*: method=`post`, path=`/v1.0/teams/conversation/replyWithMessage/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Post_adaptive_card_for_unlikely_attack_in_a_chat_or_channel*: method=`post`, path=`/v1.0/teams/conversation/adaptivecard/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Post_REST_API_error_message_in_a_chat_or_channel*: method=`post`, path=`/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Post_card_in_a_chat_or_channel_despite_ACSS_connection_error*: method=`post`, path=`/v1.0/teams/conversation/adaptivecard/poster/Flow bot/location/@{encodeURIComponent('Channel')}`

**`http`** (builtin):
- *Get_SAP_virtual_instance_state_by_SID_from_ACSS_via_Azure_Resource_Graph*: method=`POST`, uri=`https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2021-03-01`

</details>

## Additional Documentation

> 📄 *Source: [SAPCollectorRemediate-STD/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/Playbooks/SAPCollectorRemediate-STD/readme.md)*

# Remediate SAP Sentinel Collector Agent attack

< 🏡[home](../README.md)

Sophisticated scenario distinguishing between SAP maintenance events and malicious deactivation of the audit log ingestion into Sentinel.

Used Sentinel alert rule `[SAP - Data collection health check](https://learn.microsoft.com/azure/sentinel/monitor-sap-system-health#use-an-alert-rule-template)`

[Azure Center for SAP Solutions (ACSS)](https://learn.microsoft.com/azure/sap/center-sap-solutions/overview) health info exposed via the [Azure Resource Graph](https://learn.microsoft.com/azure/governance/resource-graph/overview) qualify the incident to drive better triage processes at the SAP Security Operations teams.

👨🏽‍🔧[**installation guide**](../INSTALLATION.md).

| Step | 🪂 |
| --- | --- |
| Logic Apps Infrastructure | [![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSAP%2FPlaybooks%2FSAPCollectorRemediate-STD%2Fazuredeploy.json) |
| Logic Apps Connections | [![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSAP%2FPlaybooks%2FSAPCollectorRemediate-STD%2Fazureconnectordeploy.json) |
| Logic Apps Standard Connections configuration | 🔗[link](connections.json) |
| Logic Apps Standard workflow | 🔗[link](workflow.json) |
| Logic Apps Standard workflow parameters | 🔗[link](workflowparameters.json) |

## Required Azure Roles

| Role Name | Resource Type Scope | Purpose |
| --- | --- | --- |
| [Microsoft Sentinel Responder](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles#microsoft-sentinel-responder) | At least resource group where Sentinel lives | Required for Incident state update |
| [Azure Center for SAP solutions reader](https://learn.microsoft.com/azure/sap/center-sap-solutions/manage-with-azure-rbac) | Subscription level | Required for Azure resource graph SAP Virtual Instance discovery by Sentinel known SAP SID |
| [Virtual Machine Contributor](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles#virtual-machine-contributor) | At least resource group/virtual machine where Sentinel Collector runs | Required for remediation option to restart the collector VM |

Learn more about Microsoft Sentinel built-in roles [here](https://learn.microsoft.com/azure/sentinel/roles) and Azure built-in roles [here](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles).

## Additional integration options with Azure Resource Graph query for ACSS

[Azure Resource Graph Explorer🔗](https://portal.azure.com/?#view/HubsExtension/ArgQueryBlade)

This playbook uses below query (dynmic SID param coming from Sentinel). Get inspired from it to expand to your own scenarios.

Find the REST API docs for the resource graph [here](https://learn.microsoft.com/rest/api/azureresourcegraph/resourcegraph(2021-03-01)/resources/resources?tabs=HTTP).

`POST https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2021-03-01`

BODY

```sql
// Global SAP ACSS details by SID
// Click the "Run query" command above to execute the query and see results.
resources
| where type =~ 'Microsoft.Workloads/sapVirtualInstances' //get all resources of type SAP Virtual Instance
| where name == 'P01' //get selected SAP SID
| project id,name,tenantId,resourceGroup,subscriptionId,properties.health,properties.status //get only required fields
```

[🔝](#)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SAP](../solutions/sap.md)

