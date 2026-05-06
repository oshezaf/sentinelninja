# <PlaybookName>

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Intent: As an IT admin, I want to be able to block logins from all TOR Exit Node IP Addresses using Conditional Access.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Update-NamedLocations-TOR/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `http` | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *GET_Client_Secret_From_Key_Vault_-_Graph_API*: method=`GET`, uri=`@parameters('KeyVaultClientCredentialsURL-GraphAPI')`
- *GET_Client_Secret_from_Key_Vault_-_BigDataCloud*: method=`GET`, uri=`@parameters('KeyVaultClientCredentialsURL-BigDataCloud')`
- *GET_TOR_Exit_Nodes*: method=`GET`, uri=`https://api.bigdatacloud.net/data/tor-exit-nodes-list?batchSize=900&offset=0&localityLanguage=en&key=@{body('Parse_Response_from_Key_Vault_-_BigDataCloud')?['value']}`
- *UPDATE_Named_Location_List*: method=`PUT`, uri=`https://graph.microsoft.com/beta/identity/conditionalAccess/namedLocations/@{parameters('NamedLocationID')}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

