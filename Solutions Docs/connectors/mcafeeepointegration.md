# 🔗 McAfee ePolicy Orchestrator (ePO) Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[McAfee ePolicy Orchestrator (ePO)](https://www.mcafee.com/enterprise/en-us/products/epolicy-orchestrator.html) is a centralized security management platform that provides unified policy management, monitoring, and reporting across endpoint and network security products.

The connector uses the Azure Monitor Agent (AMA) to collect Syslog messages, routing them via a Data Collection Rule (DCR) to the Syslog table ([learn more about Syslog via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)).

To collect McAfee ePO logs into Microsoft Sentinel, [follow these instructions](https://kcm.trellix.com/corporate/index?page=content&id=KB87927) to configure ePO to forward syslog messages to the AMA collector.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

