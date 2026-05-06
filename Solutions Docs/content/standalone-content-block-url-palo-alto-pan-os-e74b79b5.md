# Block URL - Palo Alto PAN-OS

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook allows blocking/allowing of URLs in PAN-OS, using an address object group. The address object group itself should be attached to a pre-defined security policy rule.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/PaloAlto-PAN-OS/Playbooks/PaloAlto-PAN-OS-BlockURL/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`paloaltoconnector`](../logic-apps/managed-paloaltoconnector.md) | Managed | 0 | 5 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 0 |
| [`PAN-OSRestApiCustomConnector`](../logic-apps/custom-pan-osrestapicustomconnector.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |

#### [`paloaltoconnector`](../logic-apps/managed-paloaltoconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Create_an_address_object | post | `/restapi/v10.0/Objects/Addresses` | — |
| Update_an_address_object_group | put | `/restapi/v10.0/Objects/AddressGroups` | — |
| List_address_groups | get | `/restapi/v10.0/Objects/AddressGroups` | — |
| List_address_objects | get | `/restapi/v10.0/Objects/Addresses` | — |
| List_security_rules | get | `/restapi/v10.0/Policies/SecurityRules` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

