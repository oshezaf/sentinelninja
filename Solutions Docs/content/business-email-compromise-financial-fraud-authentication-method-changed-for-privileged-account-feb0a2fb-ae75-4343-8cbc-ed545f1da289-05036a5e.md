# Authentication Method Changed for Privileged Account

Identifies authentication methods being changed for a privileged account. This could be an indication of an attacker adding an auth method to the account so they can have continued access. Ref : https://docs.microsoft.com/azure/active-directory/fundamentals/security-operations-privileged-accounts#things-to-monitor-1

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md) |
| **ID** | `feb0a2fb-ae75-4343-8cbc-ed545f1da289` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud/Analytic%20Rules/AuthenticationMethodChangedforPrivilegedAccount.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`IdentityInfo`](../tables/identityinfo.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
