# alertssecurityassessmentdata_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (57 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/alertssecurityassessmentdata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| access_method_s | string |
| account_id_s | string |
| account_name_s | string |
| acked_s | string |
| action_s | string |
| activity_s | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| app_s | string |
| appcategory_s | string |
| asset_id_s | string |
| asset_object_id_s | string |
| browser_s | string |
| Category | string |
| cci_d | real |
| cci_s | string |
| ccl_s | string |
| compliance_standards_s | string |
| Computer | string |
| count_d | real |
| device_s | string |
| iaas_asset_tags_s | string |
| iaas_remediated_s | string |
| instance_id_s | string |
| ManagementGroupName | string |
| MG | string |
| object_s | string |
| object_type_s | string |
| organization_unit_s | string |
| os_s | string |
| policy_id_d | real |
| policy_s | string |
| RawData | string |
| region_id_s | string |
| region_name_s | string |
| resource_category_s | string |
| resource_group_s | string |
| sa_profile_id_d | real |
| sa_profile_name_s | string |
| sa_rule_id_s | string |
| sa_rule_name_s | string |
| sa_rule_severity_s | string |
| sAMAccountName_s | string |
| site_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| traffic_type_s | string |
| Type | string |
| type_s | string |
| ur_normalized_s | string |
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

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeDashboard](../content/netskopev2-netskopedashboard-7f2bb16f.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AlertsSecurityAssessment](../parsers/alertssecurityassessment.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

