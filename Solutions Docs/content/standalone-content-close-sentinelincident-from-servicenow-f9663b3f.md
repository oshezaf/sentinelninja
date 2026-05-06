# Close-SentinelIncident-from-ServiceNow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Author: Yaniv Shasha This Logic App act as listener for a incident close event in ServiceNow and will close the incident in Sentinel.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Close-SentinelIncident-fromServiceNow/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SecurityIncident`](../tables/securityincident.md) | ✓ | ✗ | ? |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [DerdackSIGNL4](../connectors/derdacksignl4.md) | [SIGNL4](../solutions/signl4.md) |

**Solutions:** [SIGNL4](../solutions/signl4.md)

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_list_results*: method=`post`, path=`/queryData`

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V2)*: method=`put`, path=`/Comment/@{encodeURIComponent(body('Parse_JSON_2')?['value']?[0]['SubId'])}/@{encodeURIComponent(body('Parse_JSON_2')?['value']?[0]['WorkspaceID'])}/@{encodeURIComponent(body('Parse_JSON_2')?['value']?[0]['RG'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(body('Parse_JSON_2')?['value']?[0]['IncidentNumber'])}`

**`http`** (builtin):
- *Close_Incident_*: method=`PUT`, uri=`https://management.azure.com/subscriptions/@{body('Parse_JSON_2')?['value']?[0]['SubId']}/resourceGroups/@{body('Parse_JSON_2')?['value']?[0]['RG']}/providers/Microsoft.OperationalInsights/workspaces/@{body('Parse_JSON_2')?['value']?[0]['WorkspaceName']}/providers/Microsoft.SecurityInsights/incidents/@{body('Parse_JSON_2')?['value']?[0]['IncidentName']}/?api-version=2020-01-01`
- *GEt_incident_-_bring_fresh_Etag*: method=`GET`, uri=`https://management.azure.com/subscriptions/@{body('Parse_JSON_2')?['value']?[0]['SubId']}/resourceGroups/@{body('Parse_JSON_2')?['value']?[0]['RG']}/providers/Microsoft.OperationalInsights/workspaces/@{body('Parse_JSON_2')?['value']?[0]['WorkspaceName']}/providers/Microsoft.SecurityInsights/incidents/@{body('Parse_JSON_2')?['value']?[0]['IncidentName']}/?api-version=2020-01-01`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

