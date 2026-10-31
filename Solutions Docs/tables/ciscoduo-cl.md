# CiscoDuo_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (82 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CiscoDuo_CL.json)

| Column Name | Type |
|:------------|:-----|
| access_device_browser_s | string |
| access_device_browser_version_s | string |
| access_device_flash_version_s | string |
| access_device_ip_s | string |
| access_device_is_encryption_enabled_b | bool |
| access_device_is_firewall_enabled_b | bool |
| access_device_is_password_set_b | bool |
| access_device_java_version_s | string |
| access_device_location_city_s | string |
| access_device_location_country_s | string |
| access_device_location_state_s | string |
| access_device_os_s | string |
| access_device_os_version_s | string |
| access_device_security_agents_s | string |
| action_s | string |
| alias_s | string |
| application_key_s | string |
| application_name_s | string |
| auth_device_ip_s | string |
| auth_device_location_city_s | string |
| auth_device_location_country_s | string |
| auth_device_location_state_s | string |
| auth_device_name_s | string |
| context_s | string |
| credits_d | real |
| description_s | string |
| email_s | string |
| event_type_s | string |
| eventtype_s | string |
| explanations_s | string |
| factor_s | string |
| from_common_netblock_b | bool |
| from_new_user_b | bool |
| host_s | string |
| isotimestamp_t [UTC] | string |
| low_risk_ip_b | bool |
| object_s | string |
| phone_s | string |
| priority_event_b | bool |
| priority_reasons_s | string |
| reason_s | string |
| result_s | string |
| sekey_s | string |
| state_s | string |
| surfaced_auth_access_device_browser_s | string |
| surfaced_auth_access_device_browser_version_s | string |
| surfaced_auth_access_device_ip_s | string |
| surfaced_auth_access_device_is_encryption_enabled_s | string |
| surfaced_auth_access_device_is_firewall_enabled_s | string |
| surfaced_auth_access_device_is_password_set_s | string |
| surfaced_auth_access_device_location_city_s | string |
| surfaced_auth_access_device_location_country_s | string |
| surfaced_auth_access_device_location_state_s | string |
| surfaced_auth_access_device_os_s | string |
| surfaced_auth_access_device_os_version_s | string |
| surfaced_auth_access_device_security_agents_s | string |
| surfaced_auth_alias_s | string |
| surfaced_auth_application_key_s | string |
| surfaced_auth_application_name_s | string |
| surfaced_auth_email_s | string |
| surfaced_auth_factor_s | string |
| surfaced_auth_isotimestamp_t [UTC] | string |
| surfaced_auth_ood_software_s | string |
| surfaced_auth_reason_s | string |
| surfaced_auth_result_s | string |
| surfaced_auth_timestamp_d | real |
| surfaced_auth_txid_s | string |
| surfaced_auth_user_groups_s | string |
| surfaced_auth_user_key_s | string |
| surfaced_auth_user_name_s | string |
| surfaced_timestamp_d | real |
| TimeGenerated | datetime |
| timestamp_d | real |
| triage_event_uri_s | string |
| triaged_as_interesting_b | bool |
| trusted_endpoint_status_s | string |
| txid_g | string |
| type_s | string |
| user_groups_s | string |
| user_key_s | string |
| user_name_s | string |
| username_s | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (2)

This table is used by the following solutions:

- [CiscoDuoSecurity](../solutions/ciscoduosecurity.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco Duo Security](../connectors/ciscoduosecurity.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to Duo Security](../content/threat-intelligence-new-ti-map-ip-entity-to-duo-security-4988c238-a118-442c-80bd-6c689a1b2e97-43e39fdc.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CiscoDuo](../parsers/ciscoduo.md) | [CiscoDuoSecurity](../solutions/ciscoduosecurity.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

