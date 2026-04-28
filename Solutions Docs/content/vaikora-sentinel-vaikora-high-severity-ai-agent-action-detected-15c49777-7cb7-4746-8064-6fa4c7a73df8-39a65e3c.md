# Vaikora - High severity AI agent action detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies AI agent actions from Vaikora classified as high or critical severity. These events may indicate an agent operating outside safe parameters or triggering policy thresholds.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vaikora-Sentinel](../solutions/vaikora-sentinel.md) |
| **ID** | `15c49777-7cb7-4746-8064-6fa4c7a73df8` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact, Execution, PrivilegeEscalation |
| **Techniques** | T1059, T1078, T1548 |
| **Required Connectors** | [VaikoraSentinel](../connectors/vaikorasentinel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-Sentinel/Analytic%20Rules/Vaikora%20-%20High%20Risk%20AI%20Agent%20Action.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Vaikora-Sentinel](../solutions/vaikora-sentinel.md)

