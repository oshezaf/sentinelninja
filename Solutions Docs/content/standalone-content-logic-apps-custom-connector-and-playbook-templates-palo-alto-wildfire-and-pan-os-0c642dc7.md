# Logic Apps Custom Connector and Playbook templates - Palo Alto Wildfire and PAN-OS

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
| `azuresentinel` | Managed | 1 | 9 |
| `office365` | Managed | 1 | 1 |
| `panosconnector` | Managed | 0 | 8 |
| `teams` | Managed | 1 | 0 |
| `wildfireconnector` | Managed | 0 | 5 |
| `PaloAltoPANOS` | Custom | 1 | 0 |
| `PaloAltoWildFire` | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_FileHash*: method=`post`, path=`/entities/filehash`
- *Add_comment_to_incident*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_when_exceeds_limit*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`
- *Add_comment_to_the_incident*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Update_Incident_for_configuration_case*: method=`put`, path=`/Incidents`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`
- *Add_comment_to_incident*: method=`post`, path=`/Incidents/Comment`

**`office365`** (managedApi):
- *Send_email_with_FileHash_attachment*: method=`post`, path=`/v2/Mail`

**`panosconnector`** (managedApi):
- *Create_address_object_to_apply_security_rule*: method=`post`, path=`/restapi/v10.0/Objects/Addresses`
- *Add_address_objects_to_security_policy_rules*: method=`put`, path=`/restapi/v10.0/Policies/SecurityRules`
- *Get_address_list*: method=`get`, path=`/restapi/v10.0/Objects/Addresses`
- *Get_existing_member_of_the_security_rules*: method=`get`, path=`/restapi/v10.0/Policies/SecurityRules`
- *Add_address_objects_to_security_policy_rules*: method=`put`, path=`/restapi/v10.0/Policies/SecurityRules`
- *Add_address_objects_to_security_rules*: method=`post`, path=`/restapi/v10.0/Objects/Addresses`
- *Get_address_list*: method=`get`, path=`/restapi/v10.0/Objects/Addresses`
- *Get_existing_member_of_the_security_rules*: method=`get`, path=`/restapi/v10.0/Policies/SecurityRules`

**`wildfireconnector`** (managedApi):
- *Get_FileHash_analysis_report_in_PDF_or_XML_format*: method=`post`, path=`/get/report`
- *Get_FileHash_analysis_report_in_PDF_or_XML_format_2*: method=`post`, path=`/get/report`
- *Get_URL_or_Hash_Verdict*: method=`post`, path=`/get/verdict`
- *Get_URL_or_Hash_verdict*: method=`post`, path=`/get/verdict`
- *Get_URL_or_Hash_verdict*: method=`post`, path=`/get/verdict`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

