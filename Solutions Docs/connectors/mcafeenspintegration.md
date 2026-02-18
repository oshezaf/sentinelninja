# 🔗 McAfee Network Security Platform Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[McAfee Network Security Platform (NSP)](https://www.mcafee.com/enterprise/en-us/products/network-security-platform.html) is a network intrusion prevention system (IPS) that detects and blocks sophisticated network-borne attacks using signature-based and behavioral analysis.

The connector uses the Azure Monitor Agent (AMA) to collect Syslog messages, routing them via a Data Collection Rule (DCR) to the Syslog table ([learn more about Syslog via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)).

To collect McAfee NSP logs into Microsoft Sentinel, [configure syslog forwarding](https://docs.mcafee.com/bundle/network-security-platform-10.1.x-product-guide/page/GUID-E4A687B0-FAFB-4170-AC94-1D968A10380F.html) to send events to the AMA collector. See also [alert notification details](https://docs.mcafee.com/bundle/network-security-platform-10.1.x-product-guide/page/GUID-5BADD5D7-21AE-4E3B-AEE2-A079F3FD6A38.html).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

