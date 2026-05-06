# Notify-ASCAlertAzureResource

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Nathan Swift

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Notify-ASCAlertAzureResource/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SecurityAlert`](../tables/securityalert.md) | `SystemAlertId == "@{items("` | ✓ | ✗ | ? |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 1 |
| `office365` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_list_results*: method=`post`, path=`/queryData`

**`azuresentinel`** (managedApi):
- *Alert_-_Get_incident*: method=`get`, path=`/Cases/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}`

**`office365`** (managedApi):
- *Send_an_email_(V2)*: method=`post`, path=`/v2/Mail`

**`http`** (builtin):
- *HTTP*: method=`GET`, uri=`https://management.azure.com/@{body('Run_query_and_list_results')['value'][0]['resourceId']}/providers/Microsoft.Authorization/roleAssignments?api-version=2018-09-01-preview`
- *HTTP_2*: method=`POST`, uri=`https://graph.windows.net/@{parameters('TenantID')}/getObjectsByObjectIds?api-version=1.6`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

