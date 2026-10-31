# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Web Session ASIM parser for Salesforce Real-Time Event Monitoring

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionSalesforceRealTimeEventMonitoring` |
| **Built-in Parser** | `_ASim_WebSession_SalesforceRealTimeEventMonitoring` |
| **Schema** | WebSession |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Salesforce Real-Time Event Monitoring |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimWebSession/CHANGELOG/ASimWebSessionSalesforceRealTimeEventMonitoring.md)) |
| **Last Updated** | Oct 26, 2026 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionSalesforceRealTimeEventMonitoring.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionSalesforceRealTimeEventMonitoring.yaml) |

## Description

This ASIM parser normalizes Salesforce Real-Time Event Monitoring page view events (LightningUriEvent and UriEvent) stored in the SalesForceRealTimeEventMonitoring_CL table to the ASIM Web Session schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SalesForceRealTimeEventMonitoring_CL`](../tables/salesforcerealtimeeventmonitoring-cl.md) |  | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SalesForceRTEMConnector](../connectors/salesforcertemconnector.md) | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |

**Solutions:** [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Salesforce LightningUriEvent](https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_lightningurievent.htm)
- [Salesforce UriEvent](https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_urievent.htm)
- [Developer](https://www.bluevoyant.com/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

