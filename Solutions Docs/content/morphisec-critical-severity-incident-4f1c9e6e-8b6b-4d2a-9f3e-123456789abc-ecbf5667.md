# Critical Severity Incident

Triggers an incident for every Morphisec alert whose attacks severity is critical.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Morphisec](../solutions/morphisec.md) |
| **ID** | `4f1c9e6e-8b6b-4d2a-9f3e-123456789abc` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, DefenseEvasion |
| **Techniques** | T1059, T1204 |
| **Required Connectors** | [MorphisecCCF](../connectors/morphisecccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Morphisec/Analytic%20Rules/MorphisecCriticalSeverityIncident.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`MorphisecAlerts_CL`](../tables/morphisecalerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Morphisec](../solutions/morphisec.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

