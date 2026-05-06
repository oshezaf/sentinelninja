# Pure Storage FlashBlade File System Snapshot

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook gets triggered when a Microsoft Sentinel Incident created for suspicious activity and it takes files system snapshot of specific file systems listed in key vault

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Pure Storage](../solutions/pure-storage.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pure%20Storage/Playbooks/Pure-Storage-FlashBlade-File-System-Snapshot/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 2 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 2 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_Accounts | post | `/entities/account` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_secret | get | `/secrets/@{encodeURIComponent(replace(items('IP_Loop')?['Address'], '.', '-'))}/value` | — |
| Get_FileSystem_list | get | `/secrets/@{encodeURIComponent(concat(replace(items('IP_Loop')?['Address'], '.', '-'),'-filesystem'))}/value` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Fetching_API_version | GET | `https://@{item()?['Address']}/api/api_version` | — |
| Retrieving_auth_token | POST | `https://@{item()?['Address']}/api/login` | — |
| FileSystem_snapshot | POST | `https://@{item()?['Address']}/api/@{last(body('Fetching_API_version')?['versions'])}/file-system-snapshots` | — |
| Logout_of_the_FlashBlade | POST | `https://@{item()?['Address']}/api/logout` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Pure Storage](../solutions/pure-storage.md)

