# Dataverse - Guest user exfiltration following Power Platform defense impairment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a chain of events starting with disablement of Power Platform tenant isolation and removal of an environment's access security group. These events are correlated with Dataverse exfiltration alerts associated with the impacted environment and recently created Microsoft Entra guest users.  Note: Activate other Dataverse analytics rules with the MITRE tactic 'Exfiltration' before enabling this rule.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `39efbf4b-b347-4cc7-895e-99a868bf29ea` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Exfiltration |
| **Techniques** | T1629, T1567 |
| **Required Connectors** | [PowerPlatformAdmin](../connectors/powerplatformadmin.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/Dataverse%20-%20Guest%20user%20exfiltration%20following%20Power%20Platform%20defense%20impairment.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AuditLogs`](../tables/auditlogs.md) | `OperationName == "Update user"` | ✓ | ✗ | ✓ |
| [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |  | ✓ | ✗ | ✓ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)

