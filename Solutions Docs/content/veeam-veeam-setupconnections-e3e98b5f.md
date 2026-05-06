# Veeam-SetupConnections

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

A Microsoft Sentinel playbook that configures Key Vault secrets and hybrid connections for Veeam servers. The playbook gets server settings and Key Vault secrets from vbr_settings and vone_settings watchlists, creates Key Vault IDs, and sets all collection flags to True if required.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Playbooks/Veeam-SetupConnectionsPlaybook/SetupConnectionsPlaybook.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 6 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 22 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Update_Watchlist_Item_With_KeyVault_IDs_VONE | put | `/Watchlists/subscriptions/@{encodeURIComponent(parameters('subscriptionId'))}/resourceGroups/@{encodeURIComponent(parameters('resourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('workspaceId'))}/watchlists/@{encodeURIComponent('vone_settings')}/watchlistItem/@{encodeURIComponent(items('For_each_VONE_server_set_missing_parameters')?['name'])}` | — |
| Watchlists_-_Get_Updated_VONE_Settings | get | `/Watchlists/subscriptions/@{encodeURIComponent(parameters('subscriptionId'))}/resourceGroups/@{encodeURIComponent(parameters('resourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('workspaceId'))}/watchlists/@{encodeURIComponent('vone_settings')}/watchlistItems` | — |
| Update_Watchlist_Item_With_KeyVault_IDs | put | `/Watchlists/subscriptions/@{encodeURIComponent(parameters('subscriptionId'))}/resourceGroups/@{encodeURIComponent(parameters('resourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('workspaceId'))}/watchlists/@{encodeURIComponent('vbr_settings')}/watchlistItem/@{encodeURIComponent(items('For_each_VBR_server_set_missing_parameters')?['name'])}` | — |
| Watchlists_-_Get_Updated_VBR_Settings | get | `/Watchlists/subscriptions/@{encodeURIComponent(parameters('subscriptionId'))}/resourceGroups/@{encodeURIComponent(parameters('resourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('workspaceId'))}/watchlists/@{encodeURIComponent('vbr_settings')}/watchlistItems` | — |
| Watchlists_-_Get_VONE_Settings_ | get | `/Watchlists/subscriptions/@{encodeURIComponent(parameters('subscriptionId'))}/resourceGroups/@{encodeURIComponent(parameters('resourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('workspaceId'))}/watchlists/@{encodeURIComponent('vone_settings')}/watchlistItems` | — |
| Watchlists_-_Get_VBR_Settings | get | `/Watchlists/subscriptions/@{encodeURIComponent(parameters('subscriptionId'))}/resourceGroups/@{encodeURIComponent(parameters('resourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('workspaceId'))}/watchlists/@{encodeURIComponent('vbr_settings')}/watchlistItems` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Check_Username_Secret_Exists_VONE | GET | `@concat('https://', parameters('keyVaultName'), parameters('keyVaultDomain'), '/secrets/', variables('VoneUsernameId'), '?api-version=7.4')` | — |
| Create_Username_Secret_VONE | PUT | `@concat('https://', parameters('keyVaultName'), parameters('keyVaultDomain'), '/secrets/', variables('VoneUsernameId'), '?api-version=7.4')` | — |
| Check_Password_Secret_Exists_VONE | GET | `@concat('https://', parameters('keyVaultName'), parameters('keyVaultDomain'), '/secrets/', variables('VonePasswordId'), '?api-version=7.4')` | — |
| Create_Password_Secret_VONE | PUT | `@concat('https://', parameters('keyVaultName'), parameters('keyVaultDomain'), '/secrets/', variables('VonePasswordId'), '?api-version=7.4')` | — |
| Check_Hybrid_Connection_Exists_VONE | GET | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Relay/namespaces/', parameters('relayNamespaceName'), '/hybridConnections/', variables('VoneServerName'), '?api-version=2024-01-01')` | — |
| Create_Hybrid_Connection_VONE | PUT | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Relay/namespaces/', parameters('relayNamespaceName'), '/hybridConnections/', variables('VoneServerName'), '?api-version=2024-01-01')` | — |
| Create_Listener_Rule_VONE | PUT | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Relay/namespaces/', parameters('relayNamespaceName'), '/hybridConnections/', variables('VoneServerName'), '/authorizationRules/defaultListener?api-version=2024-01-01')` | — |
| Create_Sender_Rule_VONE | PUT | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Relay/namespaces/', parameters('relayNamespaceName'), '/hybridConnections/', variables('VoneServerName'), '/authorizationRules/defaultSender?api-version=2024-01-01')` | — |
| Get_Sender_Key_VONE | POST | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Relay/namespaces/', parameters('relayNamespaceName'), '/hybridConnections/', variables('VoneServerName'), '/authorizationRules/defaultSender/listKeys?api-version=2024-01-01')` | — |
| Check_Function_App_Binding_Exists_VONE | GET | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Web/sites/', parameters('functionAppName'), '/hybridConnectionNamespaces/', parameters('relayNamespaceName'), '/relays/', variables('VoneServerName'), '?api-version=2022-03-01')` | — |
| Bind_To_Function_App_VONE | PUT | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Web/sites/', parameters('functionAppName'), '/hybridConnectionNamespaces/', parameters('relayNamespaceName'), '/relays/', variables('VoneServerName'), '?api-version=2022-03-01')` | — |
| Check_Username_Secret_Exists_VBR | GET | `@concat('https://', parameters('keyVaultName'), parameters('keyVaultDomain'), '/secrets/', variables('VbrUsernameId'), '?api-version=7.4')` | — |
| Create_Username_Secret_VBR | PUT | `@concat('https://', parameters('keyVaultName'), parameters('keyVaultDomain'), '/secrets/', variables('VbrUsernameId'), '?api-version=7.4')` | — |
| Check_Password_Secret_Exists_VBR | GET | `@concat('https://', parameters('keyVaultName'), parameters('keyVaultDomain'), '/secrets/', variables('VbrPasswordId'), '?api-version=7.4')` | — |
| Create_Password_Secret_VBR | PUT | `@concat('https://', parameters('keyVaultName'), parameters('keyVaultDomain'), '/secrets/', variables('VbrPasswordId'), '?api-version=7.4')` | — |
| Check_Hybrid_Connection_Exists_VBR | GET | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Relay/namespaces/', parameters('relayNamespaceName'), '/hybridConnections/', variables('VbrServerName'), '?api-version=2024-01-01')` | — |
| Create_Hybrid_Connection_VBR | PUT | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Relay/namespaces/', parameters('relayNamespaceName'), '/hybridConnections/', variables('VbrServerName'), '?api-version=2024-01-01')` | — |
| Create_Listener_Rule_VBR | PUT | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Relay/namespaces/', parameters('relayNamespaceName'), '/hybridConnections/', variables('VbrServerName'), '/authorizationRules/defaultListener?api-version=2024-01-01')` | — |
| Create_Sender_Rule_VBR | PUT | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Relay/namespaces/', parameters('relayNamespaceName'), '/hybridConnections/', variables('VbrServerName'), '/authorizationRules/defaultSender?api-version=2024-01-01')` | — |
| Get_Sender_Key_VBR | POST | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Relay/namespaces/', parameters('relayNamespaceName'), '/hybridConnections/', variables('VbrServerName'), '/authorizationRules/defaultSender/listKeys?api-version=2024-01-01')` | — |
| Check_Function_App_Binding_Exists_VBR | GET | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Web/sites/', parameters('functionAppName'), '/hybridConnectionNamespaces/', parameters('relayNamespaceName'), '/relays/', variables('VbrServerName'), '?api-version=2022-03-01')` | — |
| Bind_To_Function_App_VBR | PUT | `@concat(parameters('azureManagementDomain'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Web/sites/', parameters('functionAppName'), '/hybridConnectionNamespaces/', parameters('relayNamespaceName'), '/relays/', variables('VbrServerName'), '?api-version=2022-03-01')` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Veeam](../solutions/veeam.md)

