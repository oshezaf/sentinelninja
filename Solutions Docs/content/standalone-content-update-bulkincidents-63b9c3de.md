# Update-BulkIncidents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

authors: Priscila Viana, Nathan Swift

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Update-BulkIncidents/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *SearchSecurityIncident*: method=`post`, path=`/queryData`

**`azuresentinel`** (managedApi):
- *Change_incident_status_4*: method=`put`, path=`/Case/@{encodeURIComponent(parameters('SentinelSubId'))}/@{encodeURIComponent(parameters('SentinelWorkspaceId'))}/@{encodeURIComponent(parameters('SentinelResourceGroup'))}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(items('For_each_4')?['IncidentNumber'])}/Status/@{encodeURIComponent('Closed')}`
- *Change_incident_status*: method=`put`, path=`/Case/@{encodeURIComponent(parameters('SentinelSubId'))}/@{encodeURIComponent(parameters('SentinelWorkspaceId'))}/@{encodeURIComponent(parameters('SentinelResourceGroup'))}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(items('For_each')?['IncidentNumber'])}/Status/@{encodeURIComponent(triggerBody()?['bulkoperation']?['operationstatus'])}`
- *Change_incident_status_5*: method=`put`, path=`/Case/@{encodeURIComponent(parameters('SentinelSubId'))}/@{encodeURIComponent(parameters('SentinelWorkspaceId'))}/@{encodeURIComponent(parameters('SentinelResourceGroup'))}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(items('For_each_5'))}/Status/@{encodeURIComponent('Closed')}`
- *Change_incident_status_2*: method=`put`, path=`/Case/@{encodeURIComponent(parameters('SentinelSubId'))}/@{encodeURIComponent(parameters('SentinelWorkspaceId'))}/@{encodeURIComponent(parameters('SentinelResourceGroup'))}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(items('For_each_2'))}/Status/@{encodeURIComponent(triggerBody()?['bulkoperation']?['operationstatus'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

