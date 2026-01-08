# Red Canary Threat Detection

Triggers Incidents using detection data assembled by Red Canary.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Red Canary](../solutions/red-canary.md) |
| **ID** | `6d263abb-6445-45cc-93e9-c593d3d77b89` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation |
| **Techniques** | T1566, T1059, T1547, T1548, T1562, T1003, T1087, T1021, T1119, T1071, T1041, T1499 |
| **Required Connectors** | [RedCanaryDataConnector](../connectors/redcanarydataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Canary/Analytic%20Rules/RedCanaryThreatDetection.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

This content item queries data from the following tables:

- [`RedCanaryDetections_CL`](../tables/redcanarydetections-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Red Canary](../solutions/red-canary.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
