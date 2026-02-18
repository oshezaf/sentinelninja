# 🔗 Infoblox SOC Insight Data Connector via AMA Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[Infoblox BloxOne SOC Insight](https://docs.infoblox.com/space/BloxOneThreatDefense/501514252/SOC+Insights) is a threat intelligence and analytics feature that aggregates and correlates DNS security data to prioritize and accelerate SOC investigations. **Note:** Microsoft recommends installation via the AMA integration. Using MMA and AMA on the same machine can cause log duplication and extra ingestion cost ([more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate)).

The connector uses the Azure Monitor Agent (AMA) to collect CEF logs, routing them via a Data Collection Rule (DCR) to the CommonSecurityLog table ([learn more about CEF via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)).

To collect Infoblox SOC Insight logs into Microsoft Sentinel, deploy the Infoblox Data Connector. See the [deployment guide](https://docs.infoblox.com/display/BloxOneThreatDefense/Deploying+the+Data+Connector+Solution) and [quick-start guide](https://www.infoblox.com/wp-content/uploads/infoblox-deployment-guide-data-connector.pdf).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID == "BloxOne-InsightsNotification-Log"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

