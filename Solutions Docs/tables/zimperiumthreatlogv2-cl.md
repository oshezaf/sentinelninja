# ZimperiumThreatLogV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (104 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zimperium%20Mobile%20Threat%20Defense%5CData%20Connectors%5CZimperiumMTD_CCF/ZimperiumThreatLogV2_table.json)

| Column Name | Type |
|:------------|:-----|
| account_id | string |
| action_triggered | string |
| additional_properties | dynamic |
| android_enterprise_access_network_states | dynamic |
| android_enterprise_management_state | dynamic |
| app_developer | string |
| app_first_install_time | datetime |
| app_name | string |
| app_recently_created | bool |
| app_source_label | string |
| app_source_package | string |
| attacker_bssid | string |
| attacker_ip | string |
| attacker_mac | string |
| attacker_ssid | string |
| base_station | string |
| build_information | string |
| certificate | string |
| child_threat_uuids | dynamic |
| content_category_name | string |
| custom_content_category_name | string |
| default_content_category_name | string |
| detected_url | string |
| detection_app | string |
| detection_app_instance_id | string |
| detection_app_version | string |
| device_id | string |
| device_info_tag1 | string |
| device_info_tag2 | string |
| device_ip | string |
| device_jailbroken | bool |
| device_mac | string |
| device_manufacturer | string |
| device_model | string |
| device_operator | string |
| device_os | string |
| device_os_version | string |
| device_owner_email | string |
| device_owner_first_name | string |
| device_owner_id | string |
| device_owner_last_name | string |
| device_owner_middle_name | string |
| device_time | datetime |
| device_type | string |
| event | string |
| expected_os_version | string |
| expected_security_patch | string |
| external_ip | string |
| external_network | string |
| file_hash | string |
| file_name | string |
| file_path | string |
| gateway_ip | string |
| gateway_mac | string |
| installer_source | string |
| ip_of_detected_url | string |
| jailbreak_reasons | string |
| location | dynamic |
| malware_family | string |
| malware_list | string |
| malware_name | string |
| md5_hash | string |
| mdm_alt_ids | dynamic |
| mdm_device_id | string |
| mitre_tactics | dynamic |
| module | string |
| network | string |
| network_bssid | string |
| network_encryption | string |
| network_interface | string |
| package_name | string |
| process | string |
| profile_category | string |
| profile_description | string |
| profile_identifier | string |
| profile_name | string |
| profile_risk | string |
| profile_type | string |
| reason | string |
| risk_posture_name | string |
| severity_name | string |
| sideloaded_app_developer | string |
| sideloaded_app_name | string |
| sideloaded_app_package | string |
| sideloaded_app_version | string |
| sideloaded_file_hash | string |
| source | string |
| stagefright_vulnerability_report | string |
| subnet_mask | string |
| suspected_url | string |
| system_app | bool |
| team_id | string |
| team_name | string |
| threat_category | string |
| threat_display_name | string |
| threat_name | string |
| threat_status | string |
| threat_uuid | string |
| threat_vector | string |
| TimeGenerated | datetime |
| triggered_actions | dynamic |
| vulnerable_os_version | string |
| vulnerable_security_patch | string |
| zdevice_id | string |

## Solutions (1)

This table is used by the following solutions:

- [Zimperium Mobile Threat Defense](../solutions/zimperium-mobile-threat-defense.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Zimperium Mobile Threat Defense CCF](../connectors/zimperiummtdpush.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Zimperium Mobile Threat Defense](../solutions/zimperium-mobile-threat-defense.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ZimperiumMTDCCFWorkbooks](../content/zimperium-mobile-threat-defense-zimperiummtdccfworkbooks-2bb0d331.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ZimperiumMTDCCFWorkbooks](../content/github-only-zimperiummtdccfworkbooks-92ace659.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

