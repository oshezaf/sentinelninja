# QscoutAppEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (11 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Quokka/Data%20Connectors/QuokkaQscoutAppEventsLogs_ccf/QuokkaQscoutAppEventsLogs_DCR.json)

| Column Name | Type |
|:------------|:-----|
| app_id | string |
| device_os_build_version | string |
| mdm_device_id | string |
| mdm_source | string |
| org_id | string |
| package | string |
| platform | string |
| received_at | datetime |
| result_type | string |
| results | dynamic |
| version | string |

## Solutions (1)

This table is used by the following solutions:

- [Quokka](../solutions/quokka.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [QscoutAppEventsConnector (via Codeless Connector Framework)](../connectors/qscoutappeventsccfdefinition.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Quokka](../solutions/quokka.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Quokka - Malicious Results Detected](../content/quokka-quokka-malicious-results-detected-97ad71ed-e4c0-4f7a-b1a2-683108bece4f-1210d06b.md) |  |

### Workbooks (1)

**In solution [Quokka](../solutions/quokka.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [QscoutDashboards](../content/quokka-qscoutdashboards-03cf0a2b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

