# User Login IP Address Teleportation

This query identifies users logging in from two different countries within a specified time window, potentially indicating VPN use. It includes UEBA logs IdentityInfo and BehaviorAnalytics for context.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md) |
| **ID** | `09a7c5fc-0649-4f7d-a21b-36a754cef6b6` |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [BehaviorAnalytics](../connectors/behavioranalytics.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud/Hunting%20Queries/UserLoginIPAddressTeleportation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BehaviorAnalytics`](../tables/behavioranalytics.md)
- [`IdentityInfo`](../tables/identityinfo.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
