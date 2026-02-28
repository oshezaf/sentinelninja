# CitrixAnalytics_indicatorSummary_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (54 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CitrixAnalytics_indicatorSummary_CL.json)

| Column Name | Type |
|:------------|:-----|
| data_source_id_d | real |
| data_source_s | string |
| entity_id_s | string |
| entity_type_s | string |
| event_type_s | string |
| indicator_category_id_d | real |
| indicator_category_s | string |
| indicator_id_s | string |
| indicator_name_s | string |
| indicator_type_s | string |
| indicator_uuid_g | string |
| indicator_vector_id_d | real |
| indicator_vector_name_s | string |
| indicator_vector_s | string |
| occurrence_details_city_s | string |
| occurrence_details_client_ip_s | string |
| occurrence_details_condition_s | string |
| occurrence_details_country_s | string |
| occurrence_details_cumulative_event_count_day_d | real |
| occurrence_details_device_id_s | string |
| occurrence_details_event_count_d | real |
| occurrence_details_event_description_s | string |
| occurrence_details_exfiltrated_data_volume_in_bytes_d | real |
| occurrence_details_file_hash_g | string |
| occurrence_details_happen_d | real |
| occurrence_details_historical_logon_locations_s | string |
| occurrence_details_historical_observation_period_in_days_d | real |
| occurrence_details_lifetime_download_count_d | real |
| occurrence_details_lifetime_download_volume_in_bytes_d | real |
| occurrence_details_lifetime_users_downloaded_d | real |
| occurrence_details_link_first_downloaded_t | datetime |
| occurrence_details_new_entities_s | string |
| occurrence_details_observation_start_time_t | datetime |
| occurrence_details_region_s | string |
| occurrence_details_relevant_event_type_s | string |
| occurrence_details_repeat_d | real |
| occurrence_details_risky_domain_category_list_s | string |
| occurrence_details_suspicious_network_risk_d | real |
| occurrence_details_time_quantity_d | real |
| occurrence_details_time_unit_s | string |
| occurrence_details_tool_name_s | string |
| occurrence_details_type_s | string |
| occurrence_details_user_device_risk_d | real |
| occurrence_details_user_location_risk_d | real |
| occurrence_details_user_network_risk_d | real |
| occurrence_details_virus_name_s | string |
| occurrence_details_webroot_threat_categories_s | string |
| pre_configured_s | string |
| risk_probability_d | real |
| severity_s | string |
| tenant_id_s | string |
| TimeGenerated | datetime |
| ui_link_s | string |
| version_d | real |

## Solutions (1)

This table is used by the following solutions:

- [Citrix Analytics for Security](../solutions/citrix-analytics-for-security.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CITRIX SECURITY ANALYTICS](../connectors/citrix.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Citrix Analytics for Security](../solutions/citrix-analytics-for-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Citrix](../content/citrix-analytics-for-security-citrix-7f228429.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

