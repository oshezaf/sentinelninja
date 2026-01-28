# Login into LastPass from a previously unknown IP.

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query will check how many activity there is in LastPass from IPs that are not seen before in the Sign-in Logs

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md) |
| **ID** | `d292d770-69a4-4399-9272-6e86c4e53e58` |
| **Tactics** | InitialAccess |
| **Techniques** | T1078, T1190 |
| **Required Connectors** | [LastPass](../connectors/lastpass.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/LastPass/Hunting%20Queries/LoginIntoLastPassFromUnknownIP.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md)

