# WsSecurityEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (16 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/WsSecurityEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| Activity | string |
| AdditionalExtensions | string |
| DeviceAction | string |
| DeviceCustomString1 | string |
| DeviceCustomString1Label | string |
| DeviceCustomString2 | string |
| DeviceCustomString2Label | string |
| DeviceEventClassID | string |
| DeviceVendor | string |
| LogSeverity | int |
| Message | string |
| PersistenceTimestamp | datetime |
| SimplifiedDeviceAction | string |
| SourceHostName | string |
| SourceUserName | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [WithSecureElementsViaFunction](../solutions/withsecureelementsviafunction.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [WithSecure Elements API (Azure Function)](../connectors/withsecureelementsviafunction.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [WithSecureElementsViaFunction](../solutions/withsecureelementsviafunction.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [WithSecureTopComputersByInfections](../content/withsecureelementsviafunction-withsecuretopcomputersbyinfections-63577228.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

