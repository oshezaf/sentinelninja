# 🔗 Zscaler Private Access Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [MMA](../methods/mma.md) |

[Zscaler Private Access (ZPA)](https://help.zscaler.com/zpa/what-zscaler-private-access) is a zero trust network access (ZTNA) service that provides secure access to private applications without placing users on the network or exposing applications to the internet.

To collect Zscaler ZPA logs into Microsoft Sentinel:
- [Configure a ZPA log receiver](https://help.zscaler.com/zpa/configuring-log-receiver) to forward events.
- Configure a Data Collection Rule for the `ZPA_CL` table with rsyslog UDP input and JSON log template. See [Custom Logs via AMA configuration](https://learn.microsoft.com/azure/sentinel/unified-connector-custom-device#zscaler-private-access-zpa) and [LSS documentation](https://help.zscaler.com/zpa/about-log-streaming-service).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZPA_CL`](../tables/zpa-cl.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

