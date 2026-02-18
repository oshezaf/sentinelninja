# 🔗 Claroty via AMA Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[Claroty](https://claroty.com/) is an industrial cybersecurity platform that provides continuous threat detection, secure remote access, and risk assessment for operational technology (OT) and industrial control system (ICS) environments.

The connector uses the Azure Monitor Agent (AMA) to collect CEF logs, routing them via a Data Collection Rule (DCR) to the CommonSecurityLog table ([learn more about CEF via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)).

To collect Claroty logs into Microsoft Sentinel:
- In the Claroty console, navigate to Configuration > Syslog > Add.
- Configure the Remote Server IP (AMA collector), Port, and Protocol.
- Set Message Format to CEF and save.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceVendor == "Claroty"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

