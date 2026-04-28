# QscoutAppEvents_CL

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

## Schema (12 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Quokka%5CData%20Connectors%5CQuokkaQscoutAppEventsLogs_ccf/QuokkaQScoutAppEventsLogs_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| app_id | string |  |
| device_os_build_version | string | The OS build version of the device |
| mdm_device_id | string | The unique identifier of the device in MDM |
| mdm_source | string | The Mobile Device Management source |
| org_id | string | Unique identifier of the organization |
| package | string | The package name of the application |
| platform | string | The platform of the device (e.g., iOS, Android) |
| received_at | datetime | The timestamp when the event was received from QScout |
| result_type | string | The type of result returned |
| results | dynamic | The detailed results of the app event |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time when the event was ingested |
| version | string | The version of the application |

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

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Quokka - Malicious Results Detected](../content/quokka-quokka-malicious-results-detected-97ad71ed-e4c0-4f7a-b1a2-683108bece4f-1210d06b.md) |  |

### Workbooks (1)

**In solution [Quokka](../solutions/quokka.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [QscoutDashboards](../content/quokka-qscoutdashboards-03cf0a2b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

