# CitrixAnalytics_SPA_Events_V1_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

## Schema (68 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20Analytics%20CCF%5CData%20Connectors%5CCitrixAnalytics_CCF/CitrixAnalytics_tableSPAEvents.json)

| Column Name | Type |
|:------------|:-----|
| app_fqdn | string |
| app_name | string |
| app_type | string |
| browser_name | string |
| browser_version | string |
| city | string |
| client_ip | string |
| clipboard_details_format_size_in_bytes | real |
| clipboard_details_format_type | string |
| clipboard_details_initiator | string |
| clipboard_details_result | string |
| clipboard_operation | string |
| compromised_password | bool |
| connector_id | string |
| country | string |
| device_id | string |
| device_posture_tags | dynamic |
| device_type | string |
| endpoint_information | dynamic |
| entity_id | string |
| entity_type | string |
| event_category | string |
| event_description | string |
| event_id | string |
| event_source | string |
| event_status | string |
| event_type | string |
| file_download_file_format | string |
| file_download_file_path | string |
| file_size_in_bytes | real |
| full_name | string |
| hardware_id | string |
| identity_provider | string |
| info_code | string |
| job_details_filename | string |
| launch_type | string |
| mode_of_access | string |
| occurrence_event_type | string |
| operation_type | string |
| os_extra_info | string |
| os_name | string |
| os_version | string |
| policy_name | string |
| policy_result | string |
| product | string |
| product_version | string |
| resource_location_id | string |
| rule_name | string |
| saas_app_launch_url | string |
| saas_app_name | string |
| scan_type | string |
| session_key | string |
| session_type | string |
| skip_check | bool |
| store_url | string |
| tenant_id | string |
| test_mode | bool |
| TimeGenerated | datetime |
| timestamp | datetime |
| transaction_id | string |
| url | string |
| user_email | string |
| user_name | string |
| user_oid | string |
| user_sid | string |
| user_upn | string |
| version | int |
| workspaceAppStatus | string |

## Solutions (1)

This table is used by the following solutions:

- [Citrix Analytics CCF](../solutions/citrix-analytics-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Citrix Analytics (via Codeless Connector Framework)](../connectors/citrixanalyticsdefinition.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Citrix Analytics CCF](../solutions/citrix-analytics-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [CitrixAnalytics](../content/citrix-analytics-ccf-citrixanalytics-e5da2e00.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

