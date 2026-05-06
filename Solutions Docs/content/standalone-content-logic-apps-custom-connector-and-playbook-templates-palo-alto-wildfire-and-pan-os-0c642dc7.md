# Logic Apps Custom Connector and Playbook templates - Palo Alto Wildfire and PAN-OS

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This is a consolidated json file for deploying WildFire custom connector + 3 Playbooks

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/PaloAlto-Wildfire/azuredeployConsoildatedTemplate.json) |

## Logic App Connectors

This playbook uses **7** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 9 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 1 |
| [`panosconnector`](../logic-apps/managed-panosconnector.md) | Managed | 0 | 8 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 0 |
| [`wildfireconnector`](../logic-apps/managed-wildfireconnector.md) | Managed | 0 | 5 |
| [`PaloAltoPANOS`](../logic-apps/custom-paloaltopanos.md) | Custom | 1 | 0 |
| [`PaloAltoWildFire`](../logic-apps/custom-paloaltowildfire.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_FileHash | post | `/entities/filehash` | — |
| Add_comment_to_incident | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_when_exceeds_limit | post | `/Incidents/Comment` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |
| Add_comment_to_the_incident | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Update_Incident_for_configuration_case | put | `/Incidents` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |
| Add_comment_to_incident | post | `/Incidents/Comment` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_email_with_FileHash_attachment | post | `/v2/Mail` | — |

#### [`panosconnector`](../logic-apps/managed-panosconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Create_address_object_to_apply_security_rule | post | `/restapi/v10.0/Objects/Addresses` | — |
| Add_address_objects_to_security_policy_rules | put | `/restapi/v10.0/Policies/SecurityRules` | — |
| Get_address_list | get | `/restapi/v10.0/Objects/Addresses` | — |
| Get_existing_member_of_the_security_rules | get | `/restapi/v10.0/Policies/SecurityRules` | — |
| Add_address_objects_to_security_policy_rules | put | `/restapi/v10.0/Policies/SecurityRules` | — |
| Add_address_objects_to_security_rules | post | `/restapi/v10.0/Objects/Addresses` | — |
| Get_address_list | get | `/restapi/v10.0/Objects/Addresses` | — |
| Get_existing_member_of_the_security_rules | get | `/restapi/v10.0/Policies/SecurityRules` | — |

#### [`wildfireconnector`](../logic-apps/managed-wildfireconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_FileHash_analysis_report_in_PDF_or_XML_format | post | `/get/report` | — |
| Get_FileHash_analysis_report_in_PDF_or_XML_format_2 | post | `/get/report` | — |
| Get_URL_or_Hash_Verdict | post | `/get/verdict` | — |
| Get_URL_or_Hash_verdict | post | `/get/verdict` | — |
| Get_URL_or_Hash_verdict | post | `/get/verdict` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

