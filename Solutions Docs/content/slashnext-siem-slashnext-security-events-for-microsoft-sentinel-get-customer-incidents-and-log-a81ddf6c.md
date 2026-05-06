# SlashNext Security Events for Microsoft Sentinel - Get customer incidents and log

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The playbook will run after every 3 mintues to get list of events occured to a customer in that time and log them in Log Analytic Workspace.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SlashNext SIEM](../solutions/slashnext-siem.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlashNext%20SIEM/Playbook/SlashNextSecurityEventForMSSentinel/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SlashNext_CL`](../tables/slashnext-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureblob`](../logic-apps/managed-azureblob.md) | Managed | 0 | 2 |
| [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) | Managed | 0 | 3 |
| [`slashnext`](../logic-apps/managed-slashnext.md) | Managed | 0 | 2 |
| [`SlashNext-CMS`](../logic-apps/custom-slashnext-cms.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureblob`](../logic-apps/managed-azureblob.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| create_file | post | `/v2/datasets/@{encodeURIComponent(encodeURIComponent('AccountNameFromSettings'))}/files` | — |
| Get_content | get | `[replace(variables('storage_path'),'slashnextstorage',parameters('Storage Account Name'))]` | — |

#### [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Email_Text_Threat_Data | post | `/api/logs` | — |
| Send_Email_Threat_Data_ | post | `/api/logs` | — |
| Send_Threat_Data | post | `/api/logs` | — |

#### [`slashnext`](../logic-apps/managed-slashnext.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Events_details | post | `/api/integration/v4/incidents/detail` | — |
| incident_list_response | post | `/api/integration/v4/incidents/list` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SlashNext SIEM](../solutions/slashnext-siem.md)

