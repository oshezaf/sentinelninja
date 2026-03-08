# ZimperiumThreatLog_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (72 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ZimperiumThreatLog_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| account_id | string |
| actionriggered | string |
| attacker_bssid | string |
| attacker_ip | string |
| attacker_mac | string |
| attackersid | string |
| basetation | string |
| basetation_cid | real |
| basetation_lac | real |
| basetation_mcc | real |
| basetation_mnc | real |
| basetation_psc | real |
| basetationtype | string |
| certificate | string |
| Computer | string |
| detection_app_instance_id | string |
| detection_app_version | string |
| device_id | string |
| device_ip | string |
| device_jailbroken | bool |
| device_mac | string |
| device_model | string |
| device_os_s | string |
| device_os_version | string |
| device_owner_email | string |
| device_owner_first_name | string |
| device_owner_id | string |
| device_owner_last_name | string |
| devicetime | datetime |
| event | string |
| event_id | string |
| event_timestamp_s | string |
| external_ip | string |
| file_hash | string |
| file_name | string |
| file_path | string |
| gateway_ip | string |
| gateway_mac | string |
| installerource | string |
| jailbreak_reasons | string |
| malware_family | string |
| malware_list | string |
| ManagementGroupName | string |
| MG | string |
| network | string |
| network_bssid | string |
| network_encryption | string |
| network_interface | string |
| package_name | string |
| process | string |
| profile_identifier | string |
| profile_name | string |
| profileype | string |
| RawData | string |
| severity_name | string |
| sideloaded_app_name | string |
| sideloaded_app_package | string |
| sideloaded_appeveloper | string |
| SourceSystem | string |
| stagefright_vulnerability_report | string |
| subnet_mask | string |
| suspected_url | string |
| systemtoken | string |
| TenantId | string |
| threat_name | string |
| threat_uuid | string |
| threat_vector_s | string |
| threatdetail | string |
| TimeGenerated | datetime |
| Type | string |
| zdevice_id | string |

## Solutions (1)

This table is used by the following solutions:

- [Zimperium Mobile Threat Defense](../solutions/zimperium-mobile-threat-defense.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Zimperium Mobile Threat Defense](../connectors/zimperiummtdalerts.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Zimperium Mobile Threat Defense](../solutions/zimperium-mobile-threat-defense.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZimperiumWorkbooks](../content/zimperium-mobile-threat-defense-zimperiumworkbooks-53cb70da.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

