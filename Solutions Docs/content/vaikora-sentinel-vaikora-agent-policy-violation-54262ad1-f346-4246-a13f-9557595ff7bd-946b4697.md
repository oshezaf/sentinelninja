# Vaikora - Agent policy violation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies AI agent actions explicitly blocked by a Vaikora policy. Repeated violations from the same agent may indicate prompt injection, policy circumvention, or a compromised workflow.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vaikora-Sentinel](../solutions/vaikora-sentinel.md) |
| **ID** | `54262ad1-f346-4246-a13f-9557595ff7bd` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact, DefenseEvasion |
| **Techniques** | T1078, T1562 |
| **Required Connectors** | [VaikoraSentinel](../connectors/vaikorasentinel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-Sentinel/Analytic%20Rules/Vaikora%20-%20Agent%20Policy%20Violation.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Vaikora-Sentinel](../solutions/vaikora-sentinel.md)

