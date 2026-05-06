# AS-Sign-Out-Google-User

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run from a Microsoft Sentinel Incident. It will look up the Google Users associated with the Incident Account Entities and sign them out of all Google web and device sessions. This action also resets user sign-in cookies and forces them reauthenticate. A comment noting the affected Google Users will be added to the Incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Sign-Out-Google-User/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `keyvault` | Managed | 1 | 1 |
| `function` | Built-in | 0 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)_-_Affected_Google_Users*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_-_No_Affected_Google_Users*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`

**`keyvault`** (managedApi):
- *Get_secret_-_Google_Service_Account_Private_Key*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('SecretName'), ''')}/value')]`

**`function`** (builtin):
- *CreateGoogleJWT*: functionId=`[concat('/subscriptions/', subscription().subscriptionId,'/resourceGroups/', resourceGroup().name ,'/providers/Microsoft.Web/sites/', parameters('FunctionAppName'), '/functions/CreateGoogleJWT')]`

**`http`** (builtin):
- *HTTP_-_Sign_Out_User*: method=`POST`, uri=`https://admin.googleapis.com/admin/directory/v1/users/@{concat(items('For_each_-_Account')?['name'], '@', items('For_each_-_Account')?['UPNSuffix'])}/signOut`
- *HTTP_-_Access_Token*: method=`POST`, uri=`https://oauth2.googleapis.com/token`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

