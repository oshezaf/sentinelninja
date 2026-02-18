# 🔗 Ivanti Unified Endpoint Management Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[Ivanti Unified Endpoint Management (UEM)](https://www.ivanti.com/products/unified-endpoint-manager) is an endpoint management platform that provides centralized discovery, inventory, software distribution, and security posture management across enterprise devices.

The connector uses the Azure Monitor Agent (AMA) to collect Syslog messages, routing them via a Data Collection Rule (DCR) to the Syslog table ([learn more about Syslog via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)).

To collect Ivanti UEM logs into Microsoft Sentinel, [follow these instructions](https://help.ivanti.com/ld/help/en_US/LDMS/11.0/Windows/alert-t-define-action.htm) to configure Ivanti UEM alerts to forward syslog messages to the AMA collector.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

