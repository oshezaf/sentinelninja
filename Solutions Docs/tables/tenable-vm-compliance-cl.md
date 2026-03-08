# Tenable_VM_Compliance_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (47 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tenable_VM_Compliance_CL.json)

| Column Name | Type |
|:------------|:-----|
| actual_value | string |
| asset | dynamic |
| asset_agent_name | string |
| asset_agent_uuid | string |
| asset_fqdns | dynamic |
| asset_id | string |
| asset_ipv4_addresses | dynamic |
| asset_ipv6_addresses | dynamic |
| asset_mac_addresses | dynamic |
| asset_name | string |
| asset_netbios_name | string |
| asset_network_id | string |
| asset_operating_systems | dynamic |
| asset_system_type | string |
| asset_tags | dynamic |
| asset_uuid | string |
| audit_file | string |
| check_error | string |
| check_id | string |
| check_info | string |
| check_name | string |
| compliance_benchmark_name | string |
| compliance_benchmark_version | string |
| compliance_control_id | string |
| compliance_full_id | string |
| compliance_functional_id | string |
| compliance_informational_id | string |
| db_type | string |
| description | string |
| expected_value | string |
| first_seen | datetime |
| indexed_at | datetime |
| last_fixed | datetime |
| last_observed | datetime |
| last_seen | datetime |
| metadata_id | string |
| plugin_id | real |
| plugin_name | string |
| profile_name | string |
| reference | dynamic |
| see_also | string |
| solution | string |
| state | string |
| status | string |
| synopsis | string |
| TimeGenerated | datetime |
| uname_output | string |

## Solutions (1)

This table is used by the following solutions:

- [Tenable App](../solutions/tenable-app.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tenable Vulnerability Management](../connectors/tenablevm.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

