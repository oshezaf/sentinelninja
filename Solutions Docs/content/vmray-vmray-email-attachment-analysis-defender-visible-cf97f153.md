# VMRay Email Attachment Analysis (Defender-visible)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Submits each attachment of an Office 365 email to VMRay and writes the analysis result to a Log Analytics custom table via the Logs Ingestion API. Unlike the original playbook this variant does NOT create the incident itself: a scheduled analytics rule (also created by this template) turns malicious/suspicious rows into Microsoft Sentinel incidents with File and FileHash entity mappings, so they correlate and surface in the Microsoft Defender portal incident queue. This single template creates t

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [VMRay](../solutions/vmray.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMRay/Playbooks/VMRay-Sandbox_Outlook_Attachment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 1 |
| [`function`](../logic-apps/builtin-function.md) | Built-in | 0 | 4 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Threat_Intelligence_-_Upload_Indicators_of_Compromise_(V2)_(Preview) | post | `[concat('/V2/ThreatIntelligence/',parameters('WorkspaceID'),'/UploadIndicators/')]` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_(V2) | post | `/v2/Mail` | — |

#### [`function`](../logic-apps/builtin-function.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| VMRayUploadSample | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('functionappName'), '/functions/VMRayUploadSample')]` |
| GetVMRaySubmission | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('functionappName'), '/functions/GetVMRaySubmission')]` |
| GetVMRaySample | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('functionappName'), '/functions/GetVMRaySample')]` |
| GetVMRayIOCs | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('functionappName'), '/functions/GetVMRayIOCs')]` |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Result_To_Log_Analytics | POST | `@{parameters('DataCollectionEndpoint')}/dataCollectionRules/@{parameters('DataCollectionRuleImmutableId')}/streams/@{parameters('StreamName')}?api-version=2023-01-01` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to VMRay](../solutions/vmray.md)

