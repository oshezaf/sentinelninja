# Netcraft Domain Detection - Preemptive disruption

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies Domain Detection results whose tag `display_name` is `Preemptive Disruption`. Uses NetcraftDomainDetection_Latest so the same DomainResultId alerts once per window.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |
| **ID** | `9284825d-3f0f-4ca2-a2f3-44a2a229909e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment, InitialAccess |
| **Techniques** | T1583, T1566 |
| **Required Connectors** | [NetcraftIntegrationGatewayDefinition](../connectors/netcraftintegrationgatewaydefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetcraftIntegrationGateway/Analytic%20Rules/NetcraftDomainDetection_PreemptiveDisruption.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetcraftDomainDetection_CL`](../tables/netcraftdomaindetection-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md)

