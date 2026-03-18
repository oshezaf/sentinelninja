# alertsctepdata_CL

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

## Schema (70 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/alertsctepdata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| acked_s | string |
| action_s | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| app_s | string |
| Category | string |
| cci_d | real |
| cci_s | string |
| ccl_s | string |
| company_s | string |
| Computer | string |
| count_d | real |
| department_s | string |
| device_s | string |
| deviceClassification_s | string |
| dst_country_s | string |
| dst_geoip_src_d | real |
| dst_latitude_d | real |
| dst_location_s | string |
| dst_longitude_d | real |
| dst_region_s | string |
| dst_zipcode_s | string |
| dstip_s | string |
| dstport_d | real |
| gid_d | real |
| home_pop_s | string |
| hostname_s | string |
| http_method_s | string |
| http_port_d | real |
| ip_protocol_s | string |
| ManagementGroupName | string |
| manager_s | string |
| MG | string |
| netskope_pop_s | string |
| organization_unit_s | string |
| os_s | string |
| other_categories_s | string |
| profile_id_s | string |
| RawData | string |
| referer_s | string |
| signature_id_d | real |
| signature_s | string |
| site_s | string |
| SourceSystem | string |
| src_country_s | string |
| src_geoip_src_d | real |
| src_latitude_d | real |
| src_location_s | string |
| src_longitude_d | real |
| src_region_s | string |
| src_zipcode_s | string |
| srcip_s | string |
| srcport_d | real |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| traffic_type_s | string |
| transaction_id_d | real |
| tunnel_id_s | string |
| Type | string |
| type_s | string |
| ur_normalized_s | string |
| url_s | string |
| user_s | string |
| userip_s | string |
| userkey_s | string |
| userPrincipalName_s | string |

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
| [AlertsCtep](../parsers/alertsctep.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

