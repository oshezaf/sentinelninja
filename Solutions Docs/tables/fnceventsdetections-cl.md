# FncEventsDetections_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/FncEventsDetections_CL.json)

| Column Name | Type |
|:------------|:-----|
| Category | string |
| confidence_s | string |
| created_t | datetime |
| customer_id_s | string |
| device_ip_s | string |
| event_type_s | string |
| first_seen_t | datetime |
| indicators_s | string |
| last_seen_t | datetime |
| muted_b | bool |
| muted_comment_s | string |
| muted_rule_b | bool |
| name_s | string |
| other_dhcp_machost_pairs_s | string |
| other_pdns_hostnames_s | string |
| primary_dhcp_machost_pairs_s | string |
| primary_pdns_hostnames_s | string |
| product_s | string |
| rule_uuid_g | string |
| sensor_id_s | string |
| severity_s | string |
| signal_version_s | string |
| status_s | string |
| subject_s | string |
| TimeGenerated | datetime |
| timestamp_t | datetime |
| Type | string |
| updated_t | datetime |
| uuid_g | string |
| vendor_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Fortinet FortiNDR Cloud](../connectors/fortinetfortindrclouddataconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [FortinetFortiNdrCloudWorkbook](../content/fortinet-fortindr-cloud-fortinetfortindrcloudworkbook-9c938d85.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Fortinet_FortiNDR_Cloud](../parsers/fortinet-fortindr-cloud.md) | [Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

