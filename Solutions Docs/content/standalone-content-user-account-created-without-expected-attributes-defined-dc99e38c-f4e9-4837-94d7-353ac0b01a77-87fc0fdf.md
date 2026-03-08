# User account created without expected attributes defined

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'This query looks for accounts being created that do not have attributes populated that are commonly populated in the tenant.   Attackers may attempt to add accounts as a means of establishing persistant access to an environment, looking for anomalies in created accounts may help identify illegitimately created accounts.   Created accounts should be investigated to ensure they were legitimated created.   Ref: https://docs.microsoft.com/azure/active-directory/fundamentals/security-operations-user

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `dc99e38c-f4e9-4837-94d7-353ac0b01a77` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1136.003 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/AuditLogs/Useraccountcreatedwithoutexpectedattributesdefined.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

