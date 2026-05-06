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
| [`azureblob`](../logic-apps/managed-azureblob.md) | Managed | 1 | 0 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 2 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 7 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Secret_-_Password | get | `/secrets/@{encodeURIComponent('AS-Zscaler-Integration-Password')}/value` | — |
| Get_Secret_API_Key | get | `/secrets/@{encodeURIComponent('AS-Zscaler-Integration-API-Key')}/value` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP-_Activate_Changes | POST | `[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/status/activate')]` | — |
| HTTP-_Add_Blob_Domains | PUT | `[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/urlCategories/@{variables(''URL Category Id'')}?action=ADD_TO_LIST')]` | — |
| HTTP_-_Get_existing_URLs | GET | `[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/urlCategories/@{variables(''URL Category Id'')}')]` | — |
| HTTP_-_Remove_existing_urls | PUT | `[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/urlCategories/@{variables(''URL Category Id'')}?action=REMOVE_FROM_LIST')]` | — |
| HTTP-_Authenticate | POST | `[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/authenticatedSession')]` | — |
| HTTP-_End_Session | DELETE | `[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/authenticatedSession')]` | — |
| HTTP-_Get_URLCategories | GET | `[concat('https://', parameters('ZscalerRootDomain'), '/api/v1/urlCategories?customOnly=true')]` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

