# PRODAFT USTA - TI map URL to Syslog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a match in Syslog data from any malicious URL indicator ingested from PRODAFT USTA IoC Threat Intelligence (SourceSystem starting with "PRODAFT USTA").

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PRODAFT USTA - IoC Threat Intelligence](../solutions/prodaft-usta-ioc-threat-intelligence.md) |
| **ID** | `99ae4d06-d352-4926-a1d7-9c28e25b1313` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [PRODAFTUstaIoCUploadIndicators](../connectors/prodaftustaiocuploadindicators.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20IoC%20Threat%20Intelligence/Analytic%20Rules/TIMapUrlToSyslog.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) |  | ✓ | ✓ | ✓ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) |  | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PRODAFT USTA - IoC Threat Intelligence](../solutions/prodaft-usta-ioc-threat-intelligence.md)

