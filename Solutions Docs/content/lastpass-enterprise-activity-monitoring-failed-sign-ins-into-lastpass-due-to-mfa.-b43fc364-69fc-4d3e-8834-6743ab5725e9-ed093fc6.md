# Failed sign-ins into LastPass due to MFA.

This will check for sign-ins into LastPass which are not confirmed using MFA based on the Sign-in Logs

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md) |
| **ID** | `b43fc364-69fc-4d3e-8834-6743ab5725e9` |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [LastPass](../connectors/lastpass.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/LastPass/Hunting%20Queries/FailedSigninsDueToMFA.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

