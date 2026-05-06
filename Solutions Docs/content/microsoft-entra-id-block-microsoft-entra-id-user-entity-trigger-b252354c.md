# Block Microsoft Entra ID user - Entity trigger

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook disables the selected user (account entity) in Microsoft Entra ID. If this playbook triggered from an incident context, it will add a comment to the incident. This playbook will notify the disabled user manager if available. Note: This playbook will not disable admin user!

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Playbooks/Block-AADUser/entity-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuread`](../logic-apps/managed-azuread.md) | Managed | 1 | 2 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`microsoftsentinel`](../logic-apps/managed-microsoftsentinel.md) | Managed | 0 | 3 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuread`](../logic-apps/managed-azuread.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_user_-_details | get | `/v1.0/users/@{encodeURIComponent(variables('AccountDetails'))}` | — |
| Update_user_-_disable_user | patch | `/v1.0/users/@{encodeURIComponent(variables('AccountDetails'))}` | — |

#### [`microsoftsentinel`](../logic-apps/managed-microsoftsentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_-_with_manager_-_no_admin | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_no_manager_-_no_admin | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_error_details | post | `/Incidents/Comment` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_-_to_manager_-_no_admin | post | `/v2/Mail` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_get_user_manager | GET | `https://graph.microsoft.com/v1.0/users/@{variables('AccountDetails')}/manager` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)

