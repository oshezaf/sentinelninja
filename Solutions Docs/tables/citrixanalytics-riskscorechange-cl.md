# CitrixAnalytics_riskScoreChange_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (10 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CitrixAnalytics_riskScoreChange_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_message_s | string |
| alert_type_s | string |
| alert_value_s | string |
| cur_riskscore_d | real |
| entity_id_s | string |
| entity_type_s | string |
| event_type_s | string |
| tenant_id_s | string |
| TimeGenerated | datetime |
| version_d | real |

## Solutions (1)

This table is used by the following solutions:

- [Citrix Analytics for Security](../solutions/citrix-analytics-for-security.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CITRIX SECURITY ANALYTICS](../connectors/citrix.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Citrix Analytics for Security](../solutions/citrix-analytics-for-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Citrix](../content/citrix-analytics-for-security-citrix-7f228429.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

