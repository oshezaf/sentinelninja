# Rare domains seen in Cloud Logs

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This script identifies rare domain accounts accessing cloud resources by examining logs. You can lower the domainLimit value to see domains with fewer access attempts. For example, set domainLimit = 2 to see domains with 2 or fewer access attempts.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `66fb97d1-55c3-4268-ac22-b9742d0fdccc` |
| **Tactics** | InitialAccess, Discovery, Collection |
| **Techniques** | T1190, T1087, T1114 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/RareDomainsInCloudLogs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AuditLogs`](../tables/auditlogs.md) | ✓ | ✗ |
| [`OfficeActivity`](../tables/officeactivity.md) | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |

**Solutions:** [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

