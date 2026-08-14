# TrendAI Vision One - Create Incident for Workbench Alerts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates an incident based on TrendAI Vision One Workbench Alerts and maps the impacted entities for Microsoft Sentinel usage.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [TrendAI Vision One(CCF)](../solutions/trendai-vision-one-ccf.md) |
| **ID** | `2f668615-c372-4673-a5cd-773e4da715b9` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, Persistence, PrivilegeEscalation, DefenseEvasion, CredentialAccess, Discovery, LateralMovement, Collection, Exfiltration, CommandAndControl, Impact |
| **Techniques** | T1059, T1566, T1078, T1055 |
| **Required Connectors** | [TrendAIVisionOneWorkbench](../connectors/trendaivisiononeworkbench.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TrendAI%20Vision%20One%28CCF%29/Analytic%20Rules/TrendAIVisionOneWorkbenchIncident.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`TrendAI_XDR_WORKBENCH_V2_CL`](../tables/trendai-xdr-workbench-v2-cl.md) 🔶 |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to TrendAI Vision One(CCF)](../solutions/trendai-vision-one-ccf.md)

