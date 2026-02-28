# VeeamSessions_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VeeamSessions_CL.json)

| Column Name | Type |
|:------------|:-----|
| CreationTime | datetime |
| EndTime | datetime |
| Id | string |
| IsCanceled | bool |
| JobId | string |
| Message | string |
| Name | string |
| ParentSessionId | string |
| PlatformId | string |
| PlatformName | string |
| ProgressPercent | int |
| ResourceId | string |
| ResourceReference | string |
| Result | string |
| ResultIsCanceled | bool |
| ResultMessage | string |
| ResultStatus | string |
| SessionType | string |
| State | string |
| TimeGenerated | datetime |
| Usn | long |
| VbrHostName | string |

## Solutions (1)

This table is used by the following solutions:

- [Veeam](../solutions/veeam.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Veeam](../solutions/veeam.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Configuration Backup Failed](../content/veeam-configuration-backup-failed-259ef474-836d-4662-86ef-70cb7a38e765-7c9c3700.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

