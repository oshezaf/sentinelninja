# VMRay Email Attachment Analyis

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Submits a attachment or set of attachment associated with an office 365 email to VMRay for Analyis.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [VMRay](../solutions/vmray.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMRay/Playbooks/VMRay-Sandbox_Outlook_Attachment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 1 |
| [`function`](../logic-apps/builtin-function.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Create_incident | put | `[concat('/Incidents/subscriptions/',variables('subscription'),'/resourceGroups/',variables('resourceGroupName'),'/workspaces/',parameters('WorkspaceName'))]` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Threat_Intelligence_-_Upload_Indicators_of_Compromise_(V2)_(Preview) | post | `[concat('/V2/ThreatIntelligence/',parameters('WorkspaceID'),'/UploadIndicators/')]` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_(V2) | post | `/v2/Mail` | — |

#### [`function`](../logic-apps/builtin-function.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| VMRayUploadSample | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/VMRayUploadSample')]` |
| GetVMRaySubmission | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRaySubmission')]` |
| GetVMRaySample | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRaySample')]` |
| GetVMRayIOCs | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('Functionappname'), '/functions/GetVMRayIOCs')]` |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to VMRay](../solutions/vmray.md)

