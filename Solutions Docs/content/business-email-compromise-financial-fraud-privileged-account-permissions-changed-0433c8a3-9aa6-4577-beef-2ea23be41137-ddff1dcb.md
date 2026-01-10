# Privileged Account Permissions Changed

Detects changes to permissions assigned to admin users. Threat actors may try and increase permission scope by adding additional roles to already privileged accounts. Review any modifications to ensure they were made legitimately. Ref: https://docs.microsoft.com/azure/active-directory/fundamentals/security-operations-privileged-accounts#changes-to-privileged-accounts

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md) |
| **ID** | `0433c8a3-9aa6-4577-beef-2ea23be41137` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1078.004 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud/Analytic%20Rules/PrivilegedAccountPermissionsChanged.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`IdentityInfo`](../tables/identityinfo.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

