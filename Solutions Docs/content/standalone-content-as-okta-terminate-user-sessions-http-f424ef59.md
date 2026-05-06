# AS-Okta-Terminate-User-Sessions-HTTP

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be triggered from an Azure Logic App master playbook. It will match Okta users against the account entities on the incident and then terminate all sessions of the matched users in Okta.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-IAM-Master-Playbook/AS-Okta-Terminate-User-Sessions-HTTP/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `keyvault` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`keyvault`** (managedApi):
- *Get_Secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('SecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP-_Terminate_User_Sessions*: method=`DELETE`, uri=`[concat('https://', parameters('OktaSubdomain') , '.okta.com/api/v1/users/@{body(''HTTP_-_Get_Okta_User_Account'')?[0]?[''id'']}/sessions')]`
- *HTTP_-_Get_Okta_User_Account*: method=`GET`, uri=`[concat('https://', parameters('OktaSubdomain') , '.okta.com/api/v1/users?search=profile.email%20eq%20%22@{concat(replace(encodeUriComponent(items(''For_each_-_Account'')?[''accountName'']),''.'',''%2E''), ''%40'', replace(encodeUriComponent(items(''For_each_-_Account'')?[''upnSuffix'']),''.'',''%2E''))}%22')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

