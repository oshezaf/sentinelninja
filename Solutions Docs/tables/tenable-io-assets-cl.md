# Tenable_IO_Assets_CL

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
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (43 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tenable_IO_Assets_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| acr_score_s | string |
| agent_names_s | string |
| azure_resource_id_s | string |
| azure_vm_id_g | string |
| Computer | string |
| created_at_t | datetime |
| exposure_score_s | string |
| first_scan_time_t | datetime |
| first_seen_t | datetime |
| fqdns_s | string |
| has_agent_b | bool |
| has_plugin_results_b | bool |
| hostnames_s | string |
| id_g | string |
| installed_software_s | string |
| ipv4s_s | string |
| ipv6s_s | string |
| last_licensed_scan_date_t | datetime |
| last_scan_id_s | string |
| last_scan_time_s | string |
| last_schedule_id_s | string |
| last_seen_t | datetime |
| mac_addresses_s | string |
| ManagementGroupName | string |
| manufacturer_tpm_ids_s | string |
| MG | string |
| netbios_names_s | string |
| network_interfaces_s | string |
| operating_systems_s | string |
| qualys_asset_ids_s | string |
| qualys_host_ids_s | string |
| RawData | string |
| sources_s | string |
| SourceSystem | string |
| ssh_fingerprints_s | string |
| symantec_ep_hardware_keys_s | string |
| system_types_s | string |
| tags_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| updated_at_t | datetime |

## Solutions (1)

This table is used by the following solutions:

- [TenableIO](../solutions/tenableio.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tenable.io Vulnerability Management](../connectors/tenableioapi.md) |  |

---

## Content Items Using This Table (1)

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [TenableIOAssets](../parsers/tenableioassets.md) | [TenableIO](../solutions/tenableio.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

