# 🔗 Ubiquiti UniFi Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [MMA](../methods/mma.md) |

[Ubiquiti UniFi](https://www.ui.com/) is a networking platform that provides enterprise-grade wireless access points, switches, gateways, and security cameras, all managed through a unified software controller.

To collect Ubiquiti UniFi logs into Microsoft Sentinel:
- Enable syslog in the UniFi controller: Settings > System Settings > Controller Configuration > Remote Logging.
- Configure a Data Collection Rule for the `Ubiquiti_CL` table with rsyslog UDP input. See [Custom Logs via AMA configuration](https://learn.microsoft.com/azure/sentinel/unified-connector-custom-device#ubiquiti-unifi) and [Ubiquiti documentation](https://help.ui.com/hc/en-us/categories/6583256751383).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

