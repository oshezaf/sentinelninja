# Successful Sign-In From Non-Compliant Device with bulk download activity

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This hunting query will help detect successful sign-ins from devices that are marked non-compliant along with bulk download activity. Attackers may attempt to get a list of accounts, groups, registration details within an environment which could help in follow-on behavior. Best practice is to block sign ins from non-complaint devices, however if allowed monitor these events to ensure they do not lead to other risky activity.   Reference: https://docs.microsoft.com/azure/active-directory/fundame

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `a5bb38e3-5ee2-47fe-a65d-c3c9341112ef` |
| **Tactics** | InitialAccess, Discovery |
| **Techniques** | T1078, T1087 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/MultipleDataSources/NonCompliantSigninwithBulkDownload.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AuditLogs`](../tables/auditlogs.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

