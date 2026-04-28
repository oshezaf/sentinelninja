# Vaikora - Behavioral anomaly detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies AI agent behavioral anomalies flagged by Vaikora with an anomaly score of 0.7 or above, indicating significant deviation from the agent's established behavioral baseline.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vaikora-Sentinel](../solutions/vaikora-sentinel.md) |
| **ID** | `e61258ec-1a7f-454c-95b5-458a6edb1ea4` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Execution |
| **Techniques** | T1059, T1027 |
| **Required Connectors** | [VaikoraSentinel](../connectors/vaikorasentinel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-Sentinel/Analytic%20Rules/Vaikora%20-%20Behavioral%20Anomaly%20Detected.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Vaikora-Sentinel](../solutions/vaikora-sentinel.md)

