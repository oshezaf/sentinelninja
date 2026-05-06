# Pure Storage Volume Snapshot

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook gets triggered when a Microsoft Sentinel Incident created for suspicious activity and it takes snapshot of specific volumes mentioned in key vault.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Pure Storage](../solutions/pure-storage.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pure%20Storage/Playbooks/Pure-Storage-Volumes-Snapshot/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `keyvault` | Managed | 1 | 2 |
| `http` | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`

**`keyvault`** (managedApi):
- *Get_secret*: method=`get`, path=`/secrets/@{encodeURIComponent(replace(items('IP_Loop')?['Address'], '.', '-'))}/value`
- *Get_Volumes_list*: method=`get`, path=`/secrets/@{encodeURIComponent(concat(replace(items('IP_Loop')?['Address'], '.', '-'),'-volumes'))}/value`

**`http`** (builtin):
- *Fetching_API_version*: method=`GET`, uri=`https://@{items('IP_Loop')?['Address']}/api/api_version`
- *Retrieving_auth_token*: method=`POST`, uri=`https://@{items('IP_Loop')?['Address']}/api/@{last(body('Fetching_API_version')?['version'])}/login`
- *Volume_snapshot*: method=`POST`, uri=`https://@{items('IP_Loop')?['Address']}/api/@{last(body('Fetching_API_version')?['version'])}/volume-snapshots`
- *Logout*: method=`POST`, uri=`https://@{items('IP_Loop')?['Address']}/api/@{last(body('Fetching_API_version')?['version'])}/logout`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Pure Storage](../solutions/pure-storage.md)

