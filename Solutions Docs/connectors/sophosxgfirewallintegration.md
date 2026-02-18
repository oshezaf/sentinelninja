# 🔗 Sophos XG Firewall Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[Sophos XG Firewall](https://www.sophos.com/products/next-gen-firewall.aspx) is a next-generation firewall that provides deep packet inspection, intrusion prevention, VPN, web application firewall, and synchronized security between endpoints and the firewall.

The connector uses the Azure Monitor Agent (AMA) to collect Syslog messages, routing them via a Data Collection Rule (DCR) to the Syslog table ([learn more about Syslog via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)).

To collect Sophos XG Firewall logs into Microsoft Sentinel, [configure syslog streaming](https://doc.sophos.com/nsg/sophos-firewall/20.0/Help/en-us/webhelp/onlinehelp/AdministratorHelp/SystemServices/LogSettings/SyslogServerAdd/index.html) using the IP address or hostname for the Linux device with the AMA agent.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

