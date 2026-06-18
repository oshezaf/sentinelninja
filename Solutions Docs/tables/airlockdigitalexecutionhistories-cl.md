# AirlockDigitalExecutionHistories_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (26 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital/Data%20Connectors/AirlockDigital_CCF/table_AirlockDigitalExecutionHistories.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Checkpoint | string | Event checkpoint identifier for incremental retrieval |
| CommandLine | string | Command line arguments |
| EventDateTime | string | Timestamp of execution event |
| ExecutionType | int | Execution type code (0-18): Trusted, Blocked, Audit, OTP, etc. |
| ExtensionBrowser | string | Browser type (1=Chrome, 2=Firefox, 3=Edge) |
| ExtensionId | string | Browser extension ID |
| ExtensionName | string | Browser extension name |
| ExtensionType | string | Extension type (1=CRX, 2=XPI) |
| FileName | string | Full path of the executed file |
| GrandparentProcess | string | Grandparent process name |
| Hostname | string | Host machine name where execution occurred |
| IPAddress | string | IP address |
| LocalIPAddress | string | Local IP address |
| MD5 | string | MD5 file hash |
| NetDomain | string | Network domain |
| ParentPolicy | string | Parent policy group name |
| ParentProcess | string | Parent process name |
| PolicyName | string | Airlock policy name applied |
| PolicyVersion | string | Policy version identifier |
| Publisher | string | Code signing publisher |
| SHA128 | string | SHA-128 file hash |
| SHA256 | string | SHA-256 file hash |
| SHA384 | string | SHA-384 file hash |
| SHA512 | string | SHA-512 file hash |
| TimeGenerated | datetime |  |
| Username | string | User account that executed the file |

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

