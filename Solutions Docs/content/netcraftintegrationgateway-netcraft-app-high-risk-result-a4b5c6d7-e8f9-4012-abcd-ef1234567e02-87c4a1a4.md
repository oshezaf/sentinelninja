# Netcraft App - High risk result

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies newly reported App results (`ChangeType == "new"`) with `Risk.category` of highest or high. Uses NetcraftAppResult_Latest so updates for the same ResultUuid do not re-alert unless they appear as a new result in the window.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |
| **ID** | `a4b5c6d7-e8f9-4012-abcd-ef1234567e02` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment, InitialAccess |
| **Techniques** | T1583, T1566 |
| **Required Connectors** | [NetcraftIntegrationGatewayDefinition](../connectors/netcraftintegrationgatewaydefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetcraftIntegrationGateway/Analytic%20Rules/NetcraftAppResult_HighRisk.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`NetcraftAppResult_CL`](../tables/netcraftappresult-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md)

