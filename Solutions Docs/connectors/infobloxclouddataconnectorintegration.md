# 🔗 Infoblox Cloud Data Connector via AMA Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[Infoblox BloxOne](https://www.infoblox.com/products/bloxone-threat-defense/) is a cloud-first platform that provides DNS security, threat defense, and DDI (DNS, DHCP, and IPAM) services to detect and block threats at the DNS layer.

The connector uses the Azure Monitor Agent (AMA) to collect CEF logs, routing them via a Data Collection Rule (DCR) to the CommonSecurityLog table ([learn more about CEF via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)). For setup guidance, see [**Infoblox Data Connector**](https://docs.infoblox.com/display/BloxOneThreatDefense/Deploying+the+Data+Connector+Solution). For setup guidance, see [**quick-start guide**](https://www.infoblox.com/wp-content/uploads/infoblox-deployment-guide-data-connector.pdf).

To collect Infoblox BloxOne logs into Microsoft Sentinel, deploy the Infoblox Data Connector. See the [deployment guide](https://docs.infoblox.com/display/BloxOneThreatDefense/Deploying+the+Data+Connector+Solution) and [quick-start guide](https://www.infoblox.com/wp-content/uploads/infoblox-deployment-guide-data-connector.pdf).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID == "DHCP-LEASE-CREATE"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

