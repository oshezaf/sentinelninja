# PRODAFT USTA - TI map Domain to DnsEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a match in DnsEvents from any domain-name indicator ingested from PRODAFT USTA IoC Threat Intelligence (SourceSystem starting with "PRODAFT USTA").

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PRODAFT USTA - IoC Threat Intelligence](../solutions/prodaft-usta-ioc-threat-intelligence.md) |
| **ID** | `c6f85aff-4ef0-4fde-b90e-e0ba1a9c3df6` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [DNS](../connectors/dns.md), [PRODAFTUstaIoCUploadIndicators](../connectors/prodaftustaiocuploadindicators.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20IoC%20Threat%20Intelligence/Analytic%20Rules/TIMapDomainToDnsEvents.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DnsEvents`](../tables/dnsevents.md) | ✓ | ✗ | ✓ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PRODAFT USTA - IoC Threat Intelligence](../solutions/prodaft-usta-ioc-threat-intelligence.md)

