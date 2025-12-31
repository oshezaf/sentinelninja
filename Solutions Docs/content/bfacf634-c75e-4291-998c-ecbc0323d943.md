# Risky Sign-in with new MFA method

This query identifies new MFA methods added to an account within 6 hours of a medium or high risk sign-in session. It includes UEBA logs IdentityInfo and BehaviorAnalytics for context.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md) |
| **ID** | `bfacf634-c75e-4291-998c-ecbc0323d943` |
| **Tactics** | Persistence |
| **Techniques** | T1078.004 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [BehaviorAnalytics](../connectors/behavioranalytics.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud/Hunting%20Queries/riskSignInWithNewMFAMethod.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AuditLogs`](../tables/auditlogs.md)
- [`BehaviorAnalytics`](../tables/behavioranalytics.md)
- [`IdentityInfo`](../tables/identityinfo.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
