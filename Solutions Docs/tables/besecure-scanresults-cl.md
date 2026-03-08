# beSECURE_ScanResults_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (18 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/beSECURE_ScanResults_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| cves | string |
| cvss_score_s | string |
| destination_host_s | string |
| destination_port | string |
| ManagementGroupName | string |
| MG | string |
| RawData | string |
| risk_name_s | string |
| risk_value_s | string |
| scan_name | string |
| SourceSystem | string |
| TenantId | string |
| test_id | string |
| TimeGenerated | datetime |
| Type | string |
| vulnerability_name | string |

## Solutions (1)

This table is used by the following solutions:

- [Beyond Security beSECURE](../solutions/beyond-security-besecure.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Beyond Security beSECURE](../connectors/beyondsecuritybesecure.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

