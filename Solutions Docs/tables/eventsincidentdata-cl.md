# eventsincidentdata_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (60 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/eventsincidentdata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| access_method_s | string |
| acting_user_s | string |
| activity_s | string |
| app_s | string |
| app_session_id_d | real |
| assignee_s | string |
| bcc_s | string |
| cc_s | string |
| channel_s | string |
| classification_s | string |
| Computer | string |
| connection_id_d | real |
| destination_app_s | string |
| destination_instance_id_s | string |
| destination_site_s | string |
| dlp_file_s | string |
| dlp_incident_id_d | real |
| dlp_match_info_s | string |
| dlp_parent_id_d | real |
| dst_location_s | string |
| exposure_s | string |
| file_lang_s | string |
| file_path_s | string |
| file_size_d | real |
| file_type_s | string |
| from_user_s | string |
| inline_dlp_match_info_s | string |
| instance_id_s | string |
| instance_s | string |
| latest_incident_id_d | real |
| ManagementGroupName | string |
| md5_g | string |
| MG | string |
| object_id_s | string |
| object_s | string |
| object_type_s | string |
| original_file_snapshot_id_s | string |
| owner_pdl_s | string |
| owner_s | string |
| RawData | string |
| referer_s | string |
| severity_s | string |
| site_s | string |
| SourceSystem | string |
| src_location_s | string |
| status_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| title_s | string |
| to_user_s | string |
| true_obj_category_s | string |
| true_obj_type_s | string |
| Type | string |
| url_s | string |
| user_id_s | string |
| user_s | string |
| zip_file_id_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Data Connector](../connectors/netskopedataconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [EventIncident](../parsers/eventincident.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

