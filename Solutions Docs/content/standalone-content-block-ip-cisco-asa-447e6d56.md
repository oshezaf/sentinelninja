# Block IP - Cisco ASA

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook allows blocking/allowing of IPs in Cisco ASA, using a Network Object Group. The Network Object Group itself should be part of an Access Control Entry.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/CiscoASA/CiscoASA-AddIPtoNetworkObjectGroup/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `cisco-asav-connector` | Managed | 0 | 3 |
| `teams` | Managed | 1 | 0 |
| `CiscoASAConnector` | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`

**`cisco-asav-connector`** (managedApi):
- *Fetch_a_network_object_group*: method=`get`, path=`/api/objects/networkobjectgroups/@{encodeURIComponent(variables('Network Object Group object ID'))}`
- *Patch_members_of_a_network_object_group_to_add_IPAddress*: method=`patch`, path=`/api/objects/networkobjectgroups/@{encodeURIComponent(variables('Network Object Group object ID'))}`
- *Patch_members_of_a_network_object_group_to_remove_IPAddress*: method=`patch`, path=`/api/objects/networkobjectgroups/@{encodeURIComponent(variables('Network Object Group object ID'))}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

