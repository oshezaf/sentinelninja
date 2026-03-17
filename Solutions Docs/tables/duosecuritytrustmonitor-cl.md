# DuoSecurityTrustMonitor_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (44 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DuoSecurityTrustMonitor_CL.json)

| Column Name | Type |
|:------------|:-----|
| bypass_status_enabled_d | real |
| enabled_by_key_s | string |
| enabled_by_name_s | string |
| enabled_for_key_s | string |
| enabled_for_name_s | string |
| explanations_s | string |
| from_common_netblock_b | bool |
| from_new_user_b | bool |
| low_risk_ip_b | bool |
| priority_event_b | bool |
| priority_reasons_s | string |
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
| surfaced_auth_isotimestamp_t | datetime |
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
| triage_event_uri_s | string |
| triaged_as_interesting_b | bool |
| type_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Standalone Content](../solutions/standalone-content.md)

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Trust Monitor Event](../content/standalone-content-trust-monitor-event-8dcf7238-a7d0-4cfd-8d0c-b230e3cd9182-75684fe5.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DuoSecurityTrustMonitor](../parsers/duosecuritytrustmonitor.md) | *(Legacy)* |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

