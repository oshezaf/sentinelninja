# Network log IOC matching

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Search CommonSecurityLog for IP addresses that match known indicators of compromise (IOCs) from threat intelligence (TI) feeds.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `9bb88c27-ef05-4091-ac14-45ff8604360d` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [CEF](../connectors/cef.md), [ThreatIntelligence](../connectors/threatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/DataLakeSamples/NetworkLogIOCMatching.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ | ✓ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [CefAma](../connectors/cefama.md) | [Common Event Format](../solutions/common-event-format.md) |
| [InfobloxDataConnector](../connectors/infobloxdataconnector.md) | [Infoblox](../solutions/infoblox.md) |
| [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md) | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| [ThreatIntelligenceUploadIndicatorsAPI](../connectors/threatintelligenceuploadindicatorsapi.md) | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| [VirtualMetricDirectorProxy](../connectors/virtualmetricdirectorproxy.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelConnector](../connectors/virtualmetricmssentinelconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelDataLakeConnector](../connectors/virtualmetricmssentineldatalakeconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |

**Solutions:** [Common Event Format](../solutions/common-event-format.md), [Infoblox](../solutions/infoblox.md), [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md), [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

