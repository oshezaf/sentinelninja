# dossier_whois_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (48 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/dossier_whois_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| data_info_s | string |
| data_reason_s | string |
| data_response_ip_response_country_s | string |
| data_response_ip_response_handle_s | string |
| data_response_ip_response_last_changed_t | datetime |
| data_response_ip_response_name_s | string |
| data_response_ip_response_net_range_s | string |
| data_response_ip_response_net_type_s | string |
| data_response_ip_response_parent_s | string |
| data_response_ip_response_registration_t | datetime |
| data_response_ip_response_source_registery_s | string |
| data_response_nameservers_s | string |
| data_response_parsed_whois_created_date_t | datetime |
| data_response_parsed_whois_domain_s | string |
| data_response_parsed_whois_expired_date_t | datetime |
| data_response_parsed_whois_name_servers_s | string |
| data_response_parsed_whois_other_properties_registry_domain_id_s | string |
| data_response_parsed_whois_registrar_abuse_contact_email_s | string |
| data_response_parsed_whois_registrar_abuse_contact_phone_s | string |
| data_response_parsed_whois_registrar_iana_id_s | string |
| data_response_parsed_whois_registrar_name_s | string |
| data_response_parsed_whois_statuses_s | string |
| data_response_parsed_whois_updated_date_t | datetime |
| data_response_registrant_s | string |
| data_response_registration_created_t | datetime |
| data_response_registration_expires_t | datetime |
| data_response_registration_registrar_s | string |
| data_response_registration_statuses_s | string |
| data_response_registration_updated_t | datetime |
| data_response_whois_date_s | string |
| data_response_whois_record_s | string |
| ManagementGroupName | string |
| MG | string |
| params_source_s | string |
| params_target_s | string |
| params_type_s | string |
| RawData | string |
| SourceSystem | string |
| status_message_for_dossier_s | string |
| status_s | string |
| task_id_g | string |
| TenantId | string |
| time_d | real |
| TimeGenerated | datetime |
| Type | string |
| v_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Infoblox](../solutions/infoblox.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Lookup_Workbook](../content/infoblox-infoblox-lookup-workbook-5d6a67bf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

