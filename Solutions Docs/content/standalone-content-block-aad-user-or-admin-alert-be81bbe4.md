# Block AAD user or admin - Alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

For each account entity included in the alert, this playbook will disable the user in Azure Active Directoy, add a comment to the incident that contains this alert and notify manager if available. Note: This playbook will disable admin users as well!

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Block-AADUserOrAdmin/alert-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuread`](../logic-apps/managed-azuread.md) | Managed | 1 | 2 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`microsoftsentinel`](../logic-apps/managed-microsoftsentinel.md) | Managed | 0 | 7 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 3 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 6 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuread`](../logic-apps/managed-azuread.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_user_-_details | get | `/v1.0/users/@{encodeURIComponent(concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix']))}` | — |
| Get_user_-_admin_details | get | `/v1.0/users/@{encodeURIComponent(concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix']))}` | — |

#### [`microsoftsentinel`](../logic-apps/managed-microsoftsentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Alert_-_Get_incident | get | `/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}` | — |
| Entities_-_Get_Accounts | post | `/entities/account` | — |
| Add_comment_to_incident_-_with_manager_-_no_admin | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_no_manager_-_no_admin | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_admin_sign_in_block_is_rejected | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_with_manager_-_admin_user | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_no_manager_-_admin_user | post | `/Incidents/Comment` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_-_to_manager_-_no_admin | post | `/v2/Mail` | — |
| Send_an_email_-_to_manager_-_admin_user | post | `/v2/Mail` | — |
| Send_an_email_-_no_manager_-_admin_user | post | `/v2/Mail` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP | PATCH | `https://graph.microsoft.com/beta/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}` | — |
| HTTP_-_get_user_manager | GET | `https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}/manager` | — |
| HTTP_-_re-enable_admin_user | PATCH | `https://graph.microsoft.com/beta/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}` | — |
| HTTP_-_get_admin_manager | GET | `https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}/manager` | — |
| HTTP_-_Block_admin_user | PATCH | `https://graph.microsoft.com/beta/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}` | — |
| HTTP_-_get_admin_roles | GET | `https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}/memberOf/microsoft.graph.directoryRole` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

