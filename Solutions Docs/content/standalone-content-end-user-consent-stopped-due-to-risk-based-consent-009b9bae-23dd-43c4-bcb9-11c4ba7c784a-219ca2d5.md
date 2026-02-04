# End-user consent stopped due to risk-based consent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects a user's consent to an OAuth application being blocked due to it being too risky.   These events should be investigated to understand why the user attempted to consent to the applicaiton and what other applicaitons they may have consented to.   Ref: https://docs.microsoft.com/azure/active-directory/fundamentals/security-operations-applications#end-user-stopped-due-to-risk-based-consent

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `009b9bae-23dd-43c4-bcb9-11c4ba7c784a` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Persistence, PrivilegeEscalation |
| **Techniques** | T1078.004 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/AuditLogs/End-userconsentstoppedduetorisk-basedconsent.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

