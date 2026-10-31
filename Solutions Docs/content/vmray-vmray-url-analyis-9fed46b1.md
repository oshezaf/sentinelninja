# VMRay URL Analyis

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Submits a url or set of urls associated with an incident to VMRay for Analyis.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [VMRay](../solutions/vmray.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMRay/Playbooks/Submit-URL-VMRay-Analyzer/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 8 |
| [`function`](../logic-apps/builtin-function.md) | Built-in | 0 | 5 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_URLs | post | `/entities/url` | — |
| Add_whitelist_comment_to_incident | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Retry_add_comment_to_incident | post | `/Incidents/Comment` | — |
| Threat_Intelligence_-_Upload_Indicators_of_Compromise_(V2)_(Preview) | post | `/V2/ThreatIntelligence/@{encodeURIComponent(triggerBody()?['workspaceId'])}/UploadIndicators/` | — |
| Add_comment_to_incident_(V3)_1 | post | `/Incidents/Comment` | — |
| Retry_add_comment_to_incident_1 | post | `/Incidents/Comment` | — |
| Add_Comment_to_incident | post | `/Incidents/Comment` | — |

#### [`function`](../logic-apps/builtin-function.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| UplaodURL | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/UplaodURL')]` |
| GetVMRaySubmission | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRaySubmission')]` |
| GetVMRaySample | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRaySample')]` |
| GetVMRayIOCs | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRayIOCs')]` |
| vmrayenrichcox-GetVMRayVTIs | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRayVTIs')]` |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_existing_comments | GET | `@concat(parameters('environmentResourceManagerUrl'), triggerBody()?['object']?['id'], '/comments?api-version=2023-02-01')` | — |
| Get_existing_comments_1 | GET | `@concat(parameters('environmentResourceManagerUrl'), triggerBody()?['object']?['id'], '/comments?api-version=2023-02-01')` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to VMRay](../solutions/vmray.md)

