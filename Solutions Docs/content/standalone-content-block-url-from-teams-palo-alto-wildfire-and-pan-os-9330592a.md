# Block URL From Teams - Palo Alto Wildfire and PAN-OS

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is used to add Malicious URL to security policy rules of PAN-OS VM on teams response

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/PaloAlto-Wildfire/Playbooks/Block-URL-From-Teams/azuredeploy.json) |

## Logic App Connectors

This playbook uses **6** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`panosconnector`](../logic-apps/managed-panosconnector.md) | Managed | 0 | 4 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 0 |
| [`wildfireconnector`](../logic-apps/managed-wildfireconnector.md) | Managed | 0 | 1 |
| [`PaloAltoPANOS`](../logic-apps/custom-paloaltopanos.md) | Custom | 1 | 0 |
| [`PaloAltoWildFire`](../logic-apps/custom-paloaltowildfire.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Update_Incident_for_configuration_case | put | `/Incidents` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |
| Add_comment_to_incident | post | `/Incidents/Comment` | — |

#### [`panosconnector`](../logic-apps/managed-panosconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_address_objects_to_security_policy_rules | put | `/restapi/v10.0/Policies/SecurityRules` | — |
| Add_address_objects_to_security_rules | post | `/restapi/v10.0/Objects/Addresses` | — |
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

