# AirlockDigitalFileActivitySummary_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Microsoft *(basis: projected)* |
| **Source Product** | Airlock Digital |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (17 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital%5CData%20Connectors%5CAirlockDigital_CCF/table_AirlockDigitalFileActivitySummary.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AuditTotal | int | Total count of audited executions |
| AuditUnique | int | Unique count of audited executions |
| BlockedTotal | int | Total count of blocked executions |
| BlockedUnique | int | Unique count of blocked executions |
| BlocklistAuditTotal | int | Total count of blocklist audit executions |
| BlocklistTotal | int | Total count of blocklist executions |
| EndDate | string | End date of the summary period |
| MaliciousFilesCount | int | Count of malicious files (optional) |
| NewFilesCount | int | Count of unique new file hashes |
| OtpTotal | int | Total count of one-time password executions |
| PolicyFilter | string | Policy filter name (if applied) |
| StartDate | string | Start date of the summary period |
| TimeGenerated | datetime |  |
| TimePeriod | string | Time period for the summary |
| TotalUntrustedTotal | int | Total count of untrusted executions |
| TotalUntrustedUnique | int | Unique count of untrusted executions |
| TrustedTotal | int | Total count of trusted executions |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [AirlockDigital](../solutions/airlockdigital.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Airlock Digital connector (via Codeless Connector Framework)](../connectors/airlockdigitalconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

