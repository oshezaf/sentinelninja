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
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 1 |
| [`azuremonitorlogs_1`](../logic-apps/managed-azuremonitorlogs-1.md) | Managed | 0 | 2 |
| [`wdatp`](../logic-apps/managed-wdatp.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_query_and_list_results_2 | post | `/queryData` | — |

#### [`azuremonitorlogs_1`](../logic-apps/managed-azuremonitorlogs-1.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_query_and_list_results | post | `/queryData` | — |
| Run_query_and_list_results_3 | post | `/queryData` | — |

#### [`wdatp`](../logic-apps/managed-wdatp.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Alerts_-_Update_alert | patch | `/api/alerts/@{encodeURIComponent('body(''Run_query_and_list_results_2'')[''value''][0][''VendorOriginalId'']')}` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_incident_relation_data | GET | `https://management.azure.com/subscriptions/@{variables('Settings')['subscriptionId']}/resourcegroups/@{variables('Settings')['resourceGroup']}/providers/Microsoft.OperationalInsights/workspaces/@{variables('Settings')['logWorkspace']}/providers/Microsoft.SecurityInsights/incidents/@{items('For_each')['name']}/relations` | — |
| HTTP | POST | `https://management.azure.com/subscriptions/@{body('Run_query_and_list_results')['value'][0]['ascsubid']}/resourcegroups/@{body('Run_query_and_list_results')['value'][0]['ascrgname']}/providers/Microsoft.Security/locations/@{body('Run_query_and_list_results')['value'][0]['asclocation']}/alerts/@{body('Run_query_and_list_results')['value'][0]['ascalertname']}/dismiss` | — |
| Resolve_MCAS_Alert | POST | `[concat(parameters('McasBaseUrl'),'api/v1/alerts/resolve/')]` | — |
| Dismiss_MCAS_Alert | POST | `[concat(parameters('McasBaseUrl'),'api/v1/alerts/','@{body(''Run_query_and_list_results_3'')[''value''][0][''alertId'']}','/dismiss/')]` | — |
| Get_incidents | GET | `@variables('requestUrl')` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

