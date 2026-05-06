# Cisco ASA - Create or Inbound Access Rule On Interface

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook allows blocking/unblocking of IPs in Cisco ASA, using **Access Rules** which will be created on an interface.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/CiscoASA/CiscoASA-CreateInboundAccessRuleOnInterface/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`cisco-asav-connector`](../logic-apps/managed-cisco-asav-connector.md) | Managed | 0 | 3 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 0 |
| [`CiscoASAConnector`](../logic-apps/custom-ciscoasaconnector.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |

#### [`cisco-asav-connector`](../logic-apps/managed-cisco-asav-connector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Fetch_inbound_access_rules_on_an_interface | get | `/api/access/in/@{encodeURIComponent(variables('Interface ID'))}/rules` | — |
| Create_an_inbound_access_rule_on_an_interface | post | `/api/access/in/@{encodeURIComponent(variables('Interface ID'))}/rules` | — |
| Remove_an_inbound_access_rule_on_an_interface | delete | `/api/access/in/@{encodeURIComponent(variables('Interface ID'))}/rules/@{encodeURIComponent(items('For_each_over_ipAddresses')['extendedAceItemObjectId'])}` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

