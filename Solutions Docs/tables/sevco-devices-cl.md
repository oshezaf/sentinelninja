# Sevco_Devices_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (61 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Sevco_Devices_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| asset_asset_type_s | string |
| asset_attributes_active_directory_domain_s | string |
| asset_attributes_additional_attributes_manufacturer_s | string |
| asset_attributes_additional_attributes_model_s | string |
| asset_attributes_asset_classification_category_s | string |
| asset_attributes_associated_usernames_s | string |
| asset_attributes_controls_s | string |
| asset_attributes_distinguished_name_s | string |
| asset_attributes_external_ips_s | string |
| asset_attributes_fqdn_s | string |
| asset_attributes_geo_ip_associated_ip_s | string |
| asset_attributes_geo_ip_city_s | string |
| asset_attributes_geo_ip_country_s | string |
| asset_attributes_geo_ip_latitude_d | real |
| asset_attributes_geo_ip_locality_s | string |
| asset_attributes_geo_ip_longitude_d | real |
| asset_attributes_geo_ip_region_s | string |
| asset_attributes_hostname_s | string |
| asset_attributes_hostnames_s | string |
| asset_attributes_imei_s | string |
| asset_attributes_internal_ips_s | string |
| asset_attributes_ips_s | string |
| asset_attributes_mac_addresses_s | string |
| asset_attributes_mac_manufacturers_s | string |
| asset_attributes_network_location_s | string |
| asset_attributes_os_platform_s | string |
| asset_attributes_os_release_s | string |
| asset_attributes_os_s | string |
| asset_attributes_serial_number_s | string |
| asset_config_ids_s | string |
| asset_first_observed_timestamp_s | string |
| asset_first_observed_timestamp_t | datetime |
| asset_id_g | string |
| asset_last_activity_timestamp_s | string |
| asset_last_observed_timestamp_s | string |
| asset_last_observed_timestamp_t | datetime |
| asset_org_id_g | string |
| asset_source_ids_s | string |
| asset_sources_s | string |
| asset_tags_s | string |
| asset_version_s | string |
| asset_version_t | datetime |
| Computer | string |
| event_asset_id_g | string |
| event_asset_id_s | string |
| event_asset_type_s | string |
| event_asset_version_s | string |
| event_config_id_g | string |
| event_correlation_timestamp_s | string |
| event_deleted_b | bool |
| event_event_type_s | string |
| event_source_id_s | string |
| event_updates_s | string |
| ManagementGroupName | string |
| MG | string |
| RawData | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [SevcoSecurity](../solutions/sevcosecurity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Sevco Platform - Devices](../connectors/sevcodevices.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

