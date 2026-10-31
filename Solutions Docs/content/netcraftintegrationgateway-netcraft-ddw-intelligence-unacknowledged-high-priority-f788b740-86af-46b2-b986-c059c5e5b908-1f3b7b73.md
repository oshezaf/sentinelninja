# Netcraft DDW Intelligence - Unacknowledged high priority

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies high-priority Deep & Dark Web intelligence matches that are still unacknowledged (`Acknowledged == false`). Uses NetcraftDdwIntelligence_Latest so the same MatchUuid alerts once per window.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |
| **ID** | `f788b740-86af-46b2-b986-c059c5e5b908` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance, CredentialAccess |
| **Techniques** | T1597, T1552 |
| **Required Connectors** | [NetcraftIntegrationGatewayDefinition](../connectors/netcraftintegrationgatewaydefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetcraftIntegrationGateway/Analytic%20Rules/NetcraftDdwIntelligence_UnacknowledgedHigh.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetcraftDdwIntelligence_CL`](../tables/netcraftddwintelligence-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md)

