# 🔗 Fortinet via AMA Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[Fortinet FortiGate](https://www.fortinet.com/products/next-generation-firewall) is a next-generation firewall that provides high-performance network security including firewall, VPN, intrusion prevention, application control, and advanced threat protection.

The connector uses the Azure Monitor Agent (AMA) to collect CEF logs, routing them via a Data Collection Rule (DCR) to the CommonSecurityLog table ([learn more about CEF via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)).

To collect Fortinet FortiGate logs into Microsoft Sentinel:
- Set Fortinet to send Syslog messages in CEF format to the AMA collector on port 514 TCP. Replace `server <ip address>` with the syslog agent IP.
- See [Fortinet Document Library](https://aka.ms/asi-syslog-fortinet-fortinetdocumentlibrary) and [CEF configuration guide](https://aka.ms/CEF-Fortinet).

For additional vendor documentation, see [FortiGate Log Message Fields](https://docs.fortinet.com/document/fortigate/7.4.0/fortios-log-message-reference/357866/log-message-fields).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "Fortigate"`<br>`DeviceProduct startswith "Fortigate"`<br>`DeviceVendor == "Fortinet"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

