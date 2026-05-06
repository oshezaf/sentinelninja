# CDC_Dismiss_Upstream_Events

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Bridewell Consulting - Robert Kitching

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Dismiss_Upstream_Events/azuredeploy.json) |

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
| `azuremonitorlogs_1` | Managed | 0 | 2 |
| `wdatp` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_list_results_2*: method=`post`, path=`/queryData`

**`azuremonitorlogs_1`** (managedApi):
- *Run_query_and_list_results*: method=`post`, path=`/queryData`
- *Run_query_and_list_results_3*: method=`post`, path=`/queryData`

**`wdatp`** (managedApi):
- *Alerts_-_Update_alert*: method=`patch`, path=`/api/alerts/@{encodeURIComponent('body(''Run_query_and_list_results_2'')[''value''][0][''VendorOriginalId'']')}`

**`http`** (builtin):
- *Get_incident_relation_data*: method=`GET`, uri=`https://management.azure.com/subscriptions/@{variables('Settings')['subscriptionId']}/resourcegroups/@{variables('Settings')['resourceGroup']}/providers/Microsoft.OperationalInsights/workspaces/@{variables('Settings')['logWorkspace']}/providers/Microsoft.SecurityInsights/incidents/@{items('For_each')['name']}/relations`
- *HTTP*: method=`POST`, uri=`https://management.azure.com/subscriptions/@{body('Run_query_and_list_results')['value'][0]['ascsubid']}/resourcegroups/@{body('Run_query_and_list_results')['value'][0]['ascrgname']}/providers/Microsoft.Security/locations/@{body('Run_query_and_list_results')['value'][0]['asclocation']}/alerts/@{body('Run_query_and_list_results')['value'][0]['ascalertname']}/dismiss`
- *Resolve_MCAS_Alert*: method=`POST`, uri=`[concat(parameters('McasBaseUrl'),'api/v1/alerts/resolve/')]`
- *Dismiss_MCAS_Alert*: method=`POST`, uri=`[concat(parameters('McasBaseUrl'),'api/v1/alerts/','@{body(''Run_query_and_list_results_3'')[''value''][0][''alertId'']}','/dismiss/')]`
- *Get_incidents*: method=`GET`, uri=`@variables('requestUrl')`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

