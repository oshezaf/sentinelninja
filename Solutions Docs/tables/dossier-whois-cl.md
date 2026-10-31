# dossier_whois_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (53 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/dossier_whois_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| data | dynamic |
| data_response | dynamic |
| data_response_ip_response | dynamic |
| data_response_ip_response_country | string |
| data_response_ip_response_handle | string |
| data_response_ip_response_last_changed | datetime |
| data_response_ip_response_name | string |
| data_response_ip_response_net_range | string |
| data_response_ip_response_net_type | string |
| data_response_ip_response_parent | string |
| data_response_ip_response_registration | datetime |
| data_response_ip_response_source_registery | string |
| data_response_nameservers | dynamic |
| data_response_parsed_whois | dynamic |
| data_response_parsed_whois_contacts | string |
| data_response_parsed_whois_created_date | datetime |
| data_response_parsed_whois_domain | string |
| data_response_parsed_whois_expired_date | datetime |
| data_response_parsed_whois_name_servers | dynamic |
| data_response_parsed_whois_other_props | dynamic |
| data_response_parsed_whois_other_props_registry_domain_id | string |
| data_response_parsed_whois_registrar | dynamic |
| data_response_parsed_whois_registrar_abuse_contact_email | string |
| data_response_parsed_whois_registrar_abuse_contact_phone | string |
| data_response_parsed_whois_registrar_iana_id | string |
| data_response_parsed_whois_registrar_name | string |
| data_response_parsed_whois_statuses | dynamic |
| data_response_parsed_whois_updated_date | datetime |
| data_response_raw | string |
| data_response_registrant | string |
| data_response_registration | dynamic |
| data_response_registration_created | datetime |
| data_response_registration_expires | datetime |
| data_response_registration_registrar | string |
| data_response_registration_statuses | dynamic |
| data_response_registration_updated | datetime |
| data_response_whois | dynamic |
| data_response_whois_date | datetime |
| data_response_whois_record | string |
| params | dynamic |
| params_source | string |
| params_target | string |
| params_type | string |
| RowData | dynamic |
| status | string |
| status_message_for_dossier | string |
| task_id | string |
| TenantId | string |
| time_value | real |
| TimeGenerated | datetime |
| Type | string |
| v_value | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Infoblox](../solutions/infoblox.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Lookup_Workbook](../content/infoblox-infoblox-lookup-workbook-5d6a67bf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

