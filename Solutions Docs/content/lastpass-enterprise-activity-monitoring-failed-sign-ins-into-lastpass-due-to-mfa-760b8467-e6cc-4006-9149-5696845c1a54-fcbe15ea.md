# Failed sign-ins into LastPass due to MFA

This rule will check if a sign-in failed into LastPass due to MFA. An incident can indicate the potential brute forcing of a LastPass account.  The use of MFA is identified by combining the sign-in logs, this rule assumes LastPass is federated to Entra ID.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md) |
| **ID** | `760b8467-e6cc-4006-9149-5696845c1a54` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078, T1190 |
| **Required Connectors** | [LastPass](../connectors/lastpass.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/LastPass/Analytic%20Rules/FailedSigninDueToMFA.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
