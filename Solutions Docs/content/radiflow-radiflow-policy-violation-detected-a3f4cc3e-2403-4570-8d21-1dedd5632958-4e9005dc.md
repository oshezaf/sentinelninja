# Radiflow - Policy Violation Detected

Generates an incident when an unauthorized session or action is detected either by Radiflow's iSID.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Radiflow](../solutions/radiflow.md) |
| **ID** | `a3f4cc3e-2403-4570-8d21-1dedd5632958` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement, ImpairProcessControl, Execution, Collection, Persistence |
| **Techniques** | T0886, T0855, T0858, T0845, T0889, T0843 |
| **Required Connectors** | [RadiflowIsid](../connectors/radiflowisid.md) |
| **Event Product** | iSID |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Radiflow/Analytic%20Rules/RadiflowPolicyViolationDetected.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Radiflow](../solutions/radiflow.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
