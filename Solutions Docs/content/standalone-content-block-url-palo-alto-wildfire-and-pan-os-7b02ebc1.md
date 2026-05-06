# Block URL - Palo Alto Wildfire and PAN-OS

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook used to add verdict URL security policy rules

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/PaloAlto-Wildfire/Playbooks/Block-URL/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`panosconnector`](../logic-apps/managed-panosconnector.md) | Managed | 0 | 4 |
| [`wildfireconnector`](../logic-apps/managed-wildfireconnector.md) | Managed | 0 | 1 |
| [`PaloAltoPANOS`](../logic-apps/custom-paloaltopanos.md) | Custom | 1 | 0 |
| [`PaloAltoWildFire`](../logic-apps/custom-paloaltowildfire.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_URLs | post | `/entities/url` | — |
| Add_comment_to_the_incident | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |

#### [`panosconnector`](../logic-apps/managed-panosconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Create_address_object_to_apply_security_rule | post | `/restapi/v10.0/Objects/Addresses` | — |
| Add_address_objects_to_security_policy_rules | put | `/restapi/v10.0/Policies/SecurityRules` | — |
| Get_address_list | get | `/restapi/v10.0/Objects/Addresses` | — |
| Get_existing_member_of_the_security_rules | get | `/restapi/v10.0/Policies/SecurityRules` | — |

#### [`wildfireconnector`](../logic-apps/managed-wildfireconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_URL_or_Hash_verdict | post | `/get/verdict` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

