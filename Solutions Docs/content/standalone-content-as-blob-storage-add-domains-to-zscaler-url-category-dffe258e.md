# AS-Blob-Storage-Add-Domains-to-Zscaler-URL-Category

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will use Azure blob storage to maintain a Zscaler custom URL category of your choice. If the azure blob storage is modified, the Zscaler URL category values will be updated to match.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Blob-Storage-Add-Domains-to-Zscaler-URL-Category/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureblob` | Managed | 1 | 0 |
| `keyvault` | Managed | 1 | 2 |
| `http` | Built-in | 0 | 7 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`keyvault`** (managedApi):
- *Get_Secret_-_Password*: method=`get`, path=`/secrets/@{encodeURIComponent('AS-Zscaler-Integration-Password')}/value`
- *Get_Secret_API_Key*: method=`get`, path=`/secrets/@{encodeURIComponent('AS-Zscaler-Integration-API-Key')}/value`

**`http`** (builtin):
- *HTTP-_Activate_Changes*: method=`POST`, uri=`[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/status/activate')]`
- *HTTP-_Add_Blob_Domains*: method=`PUT`, uri=`[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/urlCategories/@{variables(''URL Category Id'')}?action=ADD_TO_LIST')]`
- *HTTP_-_Get_existing_URLs*: method=`GET`, uri=`[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/urlCategories/@{variables(''URL Category Id'')}')]`
- *HTTP_-_Remove_existing_urls*: method=`PUT`, uri=`[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/urlCategories/@{variables(''URL Category Id'')}?action=REMOVE_FROM_LIST')]`
- *HTTP-_Authenticate*: method=`POST`, uri=`[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/authenticatedSession')]`
- *HTTP-_End_Session*: method=`DELETE`, uri=`[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/authenticatedSession')]`
- *HTTP-_Get_URLCategories*: method=`GET`, uri=`[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/urlCategories?customOnly=true')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

