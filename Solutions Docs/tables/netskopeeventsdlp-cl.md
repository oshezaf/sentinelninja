# NetskopeEventsDLP_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (49 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Data%20Connectors/NetskopeAlertsEvents_RestAPI_CCP/NetskopeAlertsEvents_DCR.json)

| Column Name | Type |
|:------------|:-----|
| _id | string |
| access_method | string |
| acting_user | string |
| activity | string |
| app | string |
| app_session_id | long |
| assignee | string |
| bcc | string |
| cc | string |
| channel | string |
| classification | string |
| connection_id | long |
| destination_app | string |
| destination_instance_id | string |
| dlp_file | string |
| dlp_incident_id | long |
| dlp_match_info | dynamic |
| dlp_parent_id | long |
| dst_location | string |
| exposure | string |
| file_lang | string |
| file_path | string |
| file_size | int |
| file_type | string |
| from_user | string |
| inline_dlp_match_info | dynamic |
| instance | string |
| instance_id | string |
| latest_incident_id | long |
| md5 | string |
| object | string |
| object_type | string |
| original_file_snapshot_id | string |
| owner | string |
| owner_pdl | string |
| referer | string |
| severity | string |
| site | string |
| src_location | string |
| status | string |
| timestamp | int |
| title | string |
| to_user | string |
| true_obj_category | string |
| true_obj_type | string |
| url | string |
| user | string |
| user_id | string |
| zip_file_id | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Alerts and Events](../connectors/netskopealertsevents.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeEventsDLP](../parsers/netskopeeventsdlp.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

