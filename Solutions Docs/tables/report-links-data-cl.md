# Report_links_data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (8 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Report_links_data_CL.json)

| Column Name | Type |
|:------------|:-----|
| indicator_id_s | string |
| ManagementGroupName | string |
| MG | string |
| report_link_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| updated_at_t | datetime |

## Solutions (1)

This table is used by the following solutions:

- [CofenseTriage](../solutions/cofensetriage.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cofense Triage Threat Indicators Ingestion](../connectors/cofensetriage.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [CofenseTriage](../solutions/cofensetriage.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CofenseTriageThreatIndicators](../content/cofensetriage-cofensetriagethreatindicators-b9ec5acc.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

