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
| `azuresentinel` | Managed | 1 | 4 |
| `azuresentinel-1` | Managed | 0 | 1 |
| `function` | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Threat_Intelligence_-_Upload_Indicators_of_Compromise_(V2)_(Preview)*: method=`post`, path=`/V2/ThreatIntelligence/@{encodeURIComponent(triggerBody()?['workspaceId'])}/UploadIndicators/`
- *Add_comment_to_incident_(V3)_1*: method=`post`, path=`/Incidents/Comment`

**`azuresentinel-1`** (managedApi):
- *Add_Comment_to_incident*: method=`post`, path=`/Incidents/Comment`

**`function`** (builtin):
- *UplaodURL*: functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/UplaodURL')]`
- *GetVMRaySubmission*: functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRaySubmission')]`
- *GetVMRaySample*: functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRaySample')]`
- *GetVMRayIOCs*: functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRayIOCs')]`
- *vmrayenrichcox-GetVMRayVTIs*: functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRayVTIs')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to VMRay](../solutions/vmray.md)

