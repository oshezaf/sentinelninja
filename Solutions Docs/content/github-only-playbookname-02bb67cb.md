# PlaybookName

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will create a snapshot from an Azure VM.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Create-AzureSnapshot/Create-Snapshot.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 2 |
| `azuresentinel_1` | Managed | 0 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Get_Full_Alert_Details*: method=`post`, path=`/queryData`

**`azuresentinel`** (managedApi):
- *Alert_-_Get_incident*: method=`get`, path=`/Cases/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}`
- *Add_comment_to_incident_(V2)_2*: method=`put`, path=`/Comment/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/@{encodeURIComponent('Alert')}/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`

**`azuresentinel_1`** (managedApi):
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`

**`http`** (builtin):
- *Create_Snapshot*: method=`PUT`, uri=`https://management.azure.com/subscriptions/@{split(body('Parse_VMData')?['id'],'/')[2]}/resourceGroups/@{split(body('Parse_VMData')?['id'],'/')[4]}/providers/Microsoft.Compute/snapshots/@{body('Parse_VMData')?['properties']?['osProfile']?['computerName']}@{body('Alert_-_Get_incident')?['properties']?['CaseNumber']}?api-version=2019-07-01`
- *Get-AzureVM*: method=`GET`, uri=`https://management.azure.com@{items('For_each')['ResourceId']}?api-version=2019-07-01`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

