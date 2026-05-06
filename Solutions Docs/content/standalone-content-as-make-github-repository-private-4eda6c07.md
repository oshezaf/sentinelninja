# AS-Make-GitHub-Repository-Private

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run from a Microsoft Sentinel Incident. It will look up the GitHub repositories associated with the Incident Account Entities and make them private. A comment noting the affected GitHub repositories will be added to the Incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Make-GitHub-Repository-Private/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 2 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 1 |
| [`function`](../logic-apps/builtin-function.md) | Built-in | 0 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Entities_-_Get_Accounts | post | `/entities/account` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_secret | get | `[concat('/secrets/@{encodeURIComponent(''', parameters('SecretName'), ''')}/value')]` | — |

#### [`function`](../logic-apps/builtin-function.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| CreateJWT | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId,'/resourceGroups/', resourceGroup().name ,'/providers/Microsoft.Web/sites/', parameters('FunctionAppName'), '/functions/CreateJWT')]` |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_Make_Repository_Private | PATCH | `https://api.github.com/repos/@{items('For_each_-_Repository')['owner']['login']}/@{substring(items('For_each_-_Account_entity')['name'], add(indexOf(items('For_each_-_Account_entity')['name'],'/'), 1), sub(length(items('For_each_-_Account_entity')['name']), add(indexOf(items('For_each_-_Account_entity')['name'],'/'),1)))}` | — |
| HTTP_-_Authenticate_as_a_GitHub_App_installation | POST | `[concat('https://api.github.com/app/installations/', parameters('GitHubAppInstallationID'), '/access_tokens')]` | — |
| HTTP_-_Get_Organization_Repositories | GET | `[concat('https://api.github.com/orgs/', parameters('GitHubOrganizationName'), '/repos?per_page=100')]` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

