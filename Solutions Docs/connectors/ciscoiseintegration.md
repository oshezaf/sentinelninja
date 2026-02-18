# 🔗 Cisco Identity Services Engine Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[Cisco Identity Services Engine (ISE)](https://www.cisco.com/c/en/us/products/security/identity-services-engine/index.html) is a network access control and identity management platform that enforces security policies and provides visibility into users and devices connecting to the network.

The connector uses the Azure Monitor Agent (AMA) to collect Syslog messages, routing them via a Data Collection Rule (DCR) to the Syslog table ([learn more about Syslog via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)).

To collect Cisco ISE logs into Microsoft Sentinel, [configure remote syslog collection locations](https://www.cisco.com/c/en/us/td/docs/security/ise/3-1/admin_guide/b_ise_admin_3_1.html#ID58) in your Cisco ISE deployment to forward logs to the AMA collector.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

