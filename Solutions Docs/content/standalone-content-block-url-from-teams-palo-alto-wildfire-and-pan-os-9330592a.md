# Block URL From Teams - Palo Alto Wildfire and PAN-OS

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
| `azuresentinel` | Managed | 1 | 3 |
| `panosconnector` | Managed | 0 | 4 |
| `teams` | Managed | 1 | 0 |
| `wildfireconnector` | Managed | 0 | 1 |
| `PaloAltoPANOS` | Custom | 1 | 0 |
| `PaloAltoWildFire` | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Update_Incident_for_configuration_case*: method=`put`, path=`/Incidents`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`
- *Add_comment_to_incident*: method=`post`, path=`/Incidents/Comment`

**`panosconnector`** (managedApi):
- *Add_address_objects_to_security_policy_rules*: method=`put`, path=`/restapi/v10.0/Policies/SecurityRules`
- *Add_address_objects_to_security_rules*: method=`post`, path=`/restapi/v10.0/Objects/Addresses`
- *Get_address_list*: method=`get`, path=`/restapi/v10.0/Objects/Addresses`
- *Get_existing_member_of_the_security_rules*: method=`get`, path=`/restapi/v10.0/Policies/SecurityRules`

**`wildfireconnector`** (managedApi):
- *Get_URL_or_Hash_verdict*: method=`post`, path=`/get/verdict`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

