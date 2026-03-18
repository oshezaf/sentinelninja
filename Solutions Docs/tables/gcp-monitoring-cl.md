# GCP_MONITORING_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (25 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/GCP_MONITORING_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| interval_endTime_t | datetime |
| interval_startTime_t | datetime |
| ManagementGroupName | string |
| metric_labels_device_name_s | string |
| metric_labels_device_type_s | string |
| metric_labels_instance_name_s | string |
| metric_labels_loadbalanced_s | string |
| metric_labels_storage_type_s | string |
| metric_type_s | string |
| metricKind_s | string |
| MG | string |
| RawData | string |
| resource_labels_instance_id_s | string |
| resource_labels_project_id_s | string |
| resource_labels_zone_s | string |
| resource_type_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| value_doubleValue_d | real |
| value_int64Value_d | real |
| valueType_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Google Cloud Platform Cloud Monitoring](../solutions/google-cloud-platform-cloud-monitoring.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] Google Cloud Platform Cloud Monitoring](../connectors/gcpmonitordataconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [GCP_MONITOR](../parsers/gcp-monitor.md) | [Google Cloud Platform Cloud Monitoring](../solutions/google-cloud-platform-cloud-monitoring.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

