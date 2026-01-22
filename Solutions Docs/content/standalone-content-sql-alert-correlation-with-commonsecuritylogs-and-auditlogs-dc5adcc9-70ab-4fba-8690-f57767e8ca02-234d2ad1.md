# SQL Alert Correlation with CommonSecurityLogs and AuditLogs

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query combines different SQL alerts with CommonSecurityLogs and AuditLogs helping analysts /investigate any possible SQL related attacks faster  thus reducing Mean Time To Respond

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `dc5adcc9-70ab-4fba-8690-f57767e8ca02` |
| **Tactics** | InitialAccess, Impact |
| **Techniques** | T1190, T1078 |
| **Required Connectors** | [AzureSecurityCenter](../connectors/azuresecuritycenter.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Event Vendor** | Palo Alto Networks |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/SQLAlertCorrelationwithCommonSecurityLogsandAuditLogs.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AuditLogs`](../tables/auditlogs.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

