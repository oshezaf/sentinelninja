# Detecting Macro Invoking ShellBrowserWindow COM Objects

This query detects a macro invoking ShellBrowserWindow COM Objects evade naive parent/child Office detection rules.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md) |
| **ID** | `e7470b35-0128-4508-bfc9-e01cfb3c2eb7` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement |
| **Techniques** | T1021.003 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endpoint%20Threat%20Protection%20Essentials/Analytic%20Rules/MacroInvokingShellBrowserWindowCOMObjects.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Event`](../tables/event.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
