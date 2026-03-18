# alertsquarantinedata_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (72 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/alertsquarantinedata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| access_method_s | string |
| acked_s | string |
| action_s | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| app_s | string |
| appcategory_s | string |
| browser_s | string |
| Category | string |
| cci_d | real |
| cci_s | string |
| ccl_s | string |
| Computer | string |
| count_d | real |
| department_s | string |
| departmentNumber_s | string |
| device_s | string |
| dlp_profile_s | string |
| exposure_s | string |
| file_id_s | string |
| file_path_s | string |
| file_size_d | real |
| file_type_s | string |
| from_user_s | string |
| instance_id_s | string |
| ManagementGroupName | string |
| manager_s | string |
| md5_g | string |
| MG | string |
| mime_type_s | string |
| modified_d | real |
| object_id_s | string |
| object_s | string |
| object_type_s | string |
| organization_unit_s | string |
| orignal_file_path_s | string |
| os_s | string |
| other_categories_s | string |
| owner_s | string |
| policy_s | string |
| profile_emails_s | string |
| q_admin_s | string |
| q_app_s | string |
| q_instance_s | string |
| q_original_filename_s | string |
| q_original_filepath_s | string |
| q_original_shared_s | string |
| q_original_version_s | string |
| quarantine_file_id_s | string |
| quarantine_file_name_s | string |
| quarantine_profile_id_s | string |
| quarantine_profile_s | string |
| RawData | string |
| scan_type_s | string |
| shared_with_s | string |
| site_s | string |
| SourceSystem | string |
| suppression_key_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| traffic_type_s | string |
| Type | string |
| type_s | string |
| ur_normalized_s | string |
| url_s | string |
| user_id_s | string |
| user_s | string |
| userkey_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Data Connector](../connectors/netskopedataconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeDashboard](../content/netskopev2-netskopedashboard-7f2bb16f.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AlertsQuarantine](../parsers/alertsquarantine.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

