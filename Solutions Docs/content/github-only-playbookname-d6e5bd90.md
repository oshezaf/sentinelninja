# <PlaybookName>

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Intent: As an IT admin, I want to be know which users have publicly posted compromised passwords and I want to ensure these passwords and variations of those passwords are not used in my environment.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Get-CompromisedPasswords/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 4 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 6 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Alert_-_Get_incident | get | `/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}` | — |
| Entities_-_Get_Accounts | post | `/entities/account` | — |
| Add_comment_to_incident_(V3)_2 | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Passwords | GET | `https://api.dehashed.com/search?query=@{body('Parse_AAD_User_Info')?['mail']}` | — |
| Graph_-_Get_AAD_User_Info | GET | `https://graph.microsoft.com/v1.0/users/@{items('For_Each_Account')?['AadUserId']}` | — |
| Update_Password_Settings | PATCH | `https://graph.microsoft.com/beta/settings//5bfc75a9-c4cb-42d5-9abc-56d458ab560d` | — |
| Get_Client_Secret_from_Vault_-_Dehashed | GET | `@parameters('KeyVaultClientCredentialsURL-DeHashed-Password')` | — |
| Get_Client_Secret_from_Vault_-_Graph_API | GET | `@parameters('KeyVaultClientCredentialsURL-GraphAPI')` | — |
| Get_Password_Settings | GET | `https://graph.microsoft.com/beta/settings/5bfc75a9-c4cb-42d5-9abc-56d458ab560d` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

