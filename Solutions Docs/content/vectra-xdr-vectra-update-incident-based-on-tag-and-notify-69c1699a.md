# Vectra Update Incident Based on Tag And Notify

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook runs hourly to identify entities with Medium severity incidents, checks for user-defined tags in Vectra, and if found, upgrades the incident severity to High, adds a comment, and sends a notification to a specified MS Teams channel.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraUpdateIncidentBasedOnTagAndNotify/azuredeploy.json) |

## Logic App Connectors

This playbook uses **8** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 1 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`azuresentinel_1`](../logic-apps/managed-azuresentinel-1.md) | Managed | 0 | 2 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 0 |
| [`keyvault_3`](../logic-apps/managed-keyvault-3.md) | Managed | 0 | 2 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_Query_And_List_Incidents_V2_(Preview) | post | `/queryDataV2` | — |

#### [`azuresentinel_1`](../logic-apps/managed-azuresentinel-1.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_Incident_Severity_To_High | put | `/Incidents` | — |

#### [`keyvault_3`](../logic-apps/managed-keyvault-3.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Vectra_Access_Token_For_Account | get | `/secrets/@{encodeURIComponent('Vectra-Access-Token')}/value` | — |
| Get_Vectra_Access_Token_For_Host | get | `/secrets/@{encodeURIComponent('Vectra-Access-Token')}/value` | — |

#### [`teams`](../logic-apps/managed-teams.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Sent_Notification_Message_To_MS_Teams | post | `/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Channel')}` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_Request_To_Fetch_Associated_Account_Entity_Data | GET | `@{variables('base_url')}/api/@{variables('api_version')}/entities` | — |
| HTTP_Request_To_Fetch_Host_Entity_Data | GET | `@{variables('base_url')}/api/@{variables('api_version')}/entities` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| GenerateAccessTokenVectra_2 | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('GenerateAccessCredPlaybookName')))]`<br>triggerName=`manual` |
| GenerateAccessTokenVectra | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('GenerateAccessCredPlaybookName')))]`<br>triggerName=`manual` |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Vectra XDR](../solutions/vectra-xdr.md)

