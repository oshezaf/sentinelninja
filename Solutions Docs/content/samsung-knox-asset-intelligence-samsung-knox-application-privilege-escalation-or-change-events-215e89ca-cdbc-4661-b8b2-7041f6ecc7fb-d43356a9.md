# Samsung Knox - Application Privilege Escalation or Change Events

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a Knox mobile app has transitioned from an acceptable uid/esuid/fsuid to a different, non-App id.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md) |
| **ID** | `215e89ca-cdbc-4661-b8b2-7041f6ecc7fb` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | NRT |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1548 |
| **Required Connectors** | [SamsungDCDefinition](../connectors/samsungdcdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Samsung%20Knox%20Asset%20Intelligence/Analytic%20Rules/SamsungKnoxApplicationPrivilegeEscalationOrChange.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Samsung_Knox_Process_CL`](../tables/samsung-knox-process-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md)

