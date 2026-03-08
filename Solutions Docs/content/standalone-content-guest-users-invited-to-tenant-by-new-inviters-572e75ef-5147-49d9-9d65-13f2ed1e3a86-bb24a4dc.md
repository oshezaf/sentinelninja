# Guest Users Invited to Tenant by New Inviters

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when a Guest User is added by a user account that has not been seen adding a guest in the previous 14 days.   Monitoring guest accounts and the access they are provided is important to detect potential account abuse.   Accounts added should be investigated to ensure the activity was legitimate.   Ref: https://docs.microsoft.com/azure/active-directory/fundamentals/security-operations-user-accounts#monitoring-for-failed-unusual-sign-ins

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `572e75ef-5147-49d9-9d65-13f2ed1e3a86` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1078.004 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/AuditLogs/GuestUsersInvitedtoTenantbyNewInviters.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

