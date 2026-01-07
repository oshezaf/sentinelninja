# Semperis DSP Zerologon vulnerability

This indicator looks for security vulnerability to CVE-2020-1472, which was patched by Microsoft in August 2020. Without this patch, an unauthenticated attacker can exploit CVE-2020-1472 to elevate their privileges and get administrative access on the domain.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md) |
| **ID** | `85c1f9e4-6f14-46bf-82d5-dbe495b92aab` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1068 |
| **Required Connectors** | [SemperisDSP](../connectors/semperisdsp.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Semperis%20Directory%20Services%20Protector/Analytic%20Rules/SemperisDSP_ZerologonVulnerability.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
