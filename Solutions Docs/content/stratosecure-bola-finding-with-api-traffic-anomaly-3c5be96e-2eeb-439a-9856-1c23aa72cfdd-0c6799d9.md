# BOLA Finding with API Traffic Anomaly

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects applications with open BOLA/IDOR findings (OWASP API1, API3, API5) that also show anomalous 4xx error traffic in Azure API Management. Correlates StratoSecure BOLA findings with APIM gateway error spikes.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [StratoSecure](../solutions/stratosecure.md) |
| **ID** | `3c5be96e-2eeb-439a-9856-1c23aa72cfdd` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Discovery |
| **Techniques** | T1190, T1083 |
| **Required Connectors** | [StratoSecurePush](../connectors/stratosecurepush.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Analytic%20Rules/S3_BOLA_TrafficAnomaly.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ApiManagementGatewayLogs`](../tables/apimanagementgatewaylogs.md) | ✓ | ✗ | ✗ |
| [`StratoSecure_Findings_CL`](../tables/stratosecure-findings-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to StratoSecure](../solutions/stratosecure.md)

