# Vectra Host's Behaviors

This analytic rule is looking for new attacker behaviors observed by the Vectra Platform. This rule is focused on host's detections.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vectra AI Detect](../solutions/vectra-ai-detect.md) |
| **ID** | `33e3b6da-2660-4cd7-9032-11be76db88d2` |
| **Severity** | Informational |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact |
| **Techniques** | T1003, T1087, T1021, T1119, T1071, T1041, T1499 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Event Vendor** | Vectra Networks |
| **Event Product** | X Series |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Detect/Analytic%20Rules/VectraDetect-Host-Detections.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Vectra AI Detect](../solutions/vectra-ai-detect.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
