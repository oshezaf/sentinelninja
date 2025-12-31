# Contrast Exploits

Creates Incidents for Exploit events sourced from the Contrast Protect agent.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Contrast Protect](../solutions/contrast-protect.md) |
| **ID** | `e1abb6ed-be18-40fd-be58-3d3d84041daf` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Exfiltration |
| **Techniques** | T1566 |
| **Required Connectors** | [ContrastProtect](../connectors/contrastprotect.md), [ContrastProtectAma](../connectors/contrastprotectama.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Contrast%20Protect/Analytic%20Rules/ContrastExploits.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:**

- [← Back to Analytic Rules](../analytic-rules.md)
- [← Back to Contrast Protect](../solutions/contrast-protect.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
