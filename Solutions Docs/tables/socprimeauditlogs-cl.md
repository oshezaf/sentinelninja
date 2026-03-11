# SOCPrimeAuditLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (10 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Prime%20CCF%5CData%20Connectors%5CSOCPrime_ccp/SOCPrime_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| EventName | string | Event Name |
| EventProduct | string |  |
| EventType | string |  |
| EventVendor | string |  |
| HttpUserAgent | string |  |
| SourceIp | string |  |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| Uri | string |  |
| UserEmail | string |  |
| UserName | string |  |

## Solutions (1)

This table is used by the following solutions:

- [SOC Prime CCF](../solutions/soc-prime-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SOC Prime Platform Audit Logs Data Connector](../connectors/socprimeauditlogsdataconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

