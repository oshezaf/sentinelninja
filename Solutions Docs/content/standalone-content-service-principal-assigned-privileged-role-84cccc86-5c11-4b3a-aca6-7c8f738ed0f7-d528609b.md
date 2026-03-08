# Service Principal Assigned Privileged Role

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects a privileged role being added to a Service Principal.   Ensure that any assignment to a Service Principal is valid and appropriate - Service Principals should not be assigned to very highly privileged roles such as Global Admin.   Ref: https://docs.microsoft.com/azure/active-directory/fundamentals/security-operations-privileged-accounts#changes-to-privileged-accounts

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `84cccc86-5c11-4b3a-aca6-7c8f738ed0f7` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1078.004 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/AuditLogs/ServicePrincipalAssignedPrivilegedRole.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

