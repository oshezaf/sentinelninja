# DuoSecurityAuthentication_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (27 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DuoSecurityAuthentication_CL.json)

| Column Name | Type |
|:------------|:-----|
| access_device_browser_s | string |
| access_device_browser_version_s | string |
| access_device_ip_s | string |
| access_device_is_encryption_enabled_s | string |
| access_device_is_firewall_enabled_s | string |
| access_device_is_password_set_s | string |
| access_device_location_city_s | string |
| access_device_location_country_s | string |
| access_device_location_state_s | string |
| access_device_os_s | string |
| access_device_os_version_s | string |
| alias_s | string |
| application_key_s | string |
| application_name_s | string |
| auth_device_name_s | string |
| email_s | string |
| event_type_s | string |
| factor_s | string |
| isotimestamp_t | datetime |
| reason_s | string |
| result_s | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| txid_g | string |
| user_groups_s | string |
| user_key_s | string |
| user_name_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Threat Intelligence](../solutions/threat-intelligence.md)

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to Duo Security](../content/threat-intelligence-ti-map-ip-entity-to-duo-security-d23ed927-5be3-4902-a9c1-85f841eb4fa1-cf610585.md) |  |

### Workbooks (1)

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DuoSecurity](../content/github-only-duosecurity-51a3ff3a.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DuoSecurityAuthentication](../parsers/duosecurityauthentication.md) | *(Legacy)* |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

