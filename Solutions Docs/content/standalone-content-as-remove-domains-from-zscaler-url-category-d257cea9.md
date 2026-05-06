# AS-Remove-Domains-from-Zscaler-URL-Category

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will extract domains from Microsoft Sentinel incidents and remove them from a Zscaler Custom URL Category of your choice.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Remove-Domains-from-Zscaler-URL-Category/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `keyvault` | Managed | 1 | 2 |
| `http` | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`

**`keyvault`** (managedApi):
- *Get_Secret_API_Key*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('KeySecretName'), ''')}/value')]`
- *Get_Secret_-_Password*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('PasswordSecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP-_Authenticate*: method=`POST`, uri=`[concat(parameters('ZscalerURL'), '/api/v1/authenticatedSession')]`
- *HTTP-_Get_URLCategories*: method=`GET`, uri=`[concat(parameters('ZscalerURL'), '/api/v1/urlCategories?customOnly=true')]`
- *HTTP-_Activate_Changes*: method=`POST`, uri=`[concat(parameters('ZscalerURL'), '/api/v1/status/activate')]`
- *HTTP-_Update_URL_Category*: method=`PUT`, uri=`[concat(parameters('ZscalerURL'), '/api/v1/urlCategories/@{variables(''URL Category Id'')}?action=REMOVE_FROM_LIST')]`
- *HTTP-_End_Session*: method=`DELETE`, uri=`[concat(parameters('ZscalerURL'), '/api/v1/authenticatedSession')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

