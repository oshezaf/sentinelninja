# Netcraft Takedown - Latest record inventory

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Latest takedown record state per `subject` for the last 7 days via `NetcraftTakedown_Latest` (`EventType == "takedown"` rolled up by Subject).

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |
| **ID** | `d945aaaf-39a1-46b2-8046-4f982eaa9839` |
| **Tactics** | ResourceDevelopment, InitialAccess |
| **Techniques** | T1583, T1566 |
| **Required Connectors** | [NetcraftIntegrationGatewayDefinition](../connectors/netcraftintegrationgatewaydefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetcraftIntegrationGateway/Hunting%20Queries/NetcraftTakedown_SubjectLifecycle.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md)

