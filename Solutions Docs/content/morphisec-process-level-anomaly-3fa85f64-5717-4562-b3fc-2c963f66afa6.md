# Process-Level Anomaly

Triggers an incident when the same process name appears in 50 or more alerts across multiple devices, suggesting widespread activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Morphisec](../solutions/morphisec.md) |
| **ID** | `3fa85f64-5717-4562-b3fc-2c963f66afa6` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, DefenseEvasion |
| **Techniques** | T1059, T1204 |
| **Required Connectors** | [MorphisecCCF](../connectors/morphisecccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Morphisec/Analytic%20Rules/MorphisecProcessLevelAnomaly.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`MorphisecAlerts_CL`](../tables/morphisecalerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Morphisec](../solutions/morphisec.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
