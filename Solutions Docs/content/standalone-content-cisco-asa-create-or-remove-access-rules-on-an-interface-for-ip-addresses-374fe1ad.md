# Cisco ASA - Create or remove access rules on an interface for IP Addresses

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook allows blocking/unblocking of IPs in Cisco ASA, using **Access Control Entries** which will be created in an access control list.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/CiscoASA/CiscoASA-CreateACEInACL/azuredeploy.json) |

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
- *Fetch_ACEs_on_an_interface*: method=`get`, path=`/api/objects/extendedacls/@{encodeURIComponent(variables('ACL Name'))}/aces`
- *Add_a_new_ACE_on_an_interface*: method=`post`, path=`/api/objects/extendedacls/@{encodeURIComponent(variables('ACL Name'))}/aces`
- *Delete_an_ACE*: method=`delete`, path=`/api/objects/extendedacls/@{encodeURIComponent(variables('ACL Name'))}/aces/@{encodeURIComponent(items('For_each_over_ipAddresses')['extendedAceItemObjectId'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

