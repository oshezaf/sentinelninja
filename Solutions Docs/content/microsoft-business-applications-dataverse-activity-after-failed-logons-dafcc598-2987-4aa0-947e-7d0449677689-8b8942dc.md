# Dataverse - Activity after failed logons

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query looks for users conducting Dataverse/Dynamics 365 activity shortly after a number of failed logons. Use this to look for potential post brute force activity. Adjust the threshold figure based on false positive rate.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `dafcc598-2987-4aa0-947e-7d0449677689` |
| **Tactics** | InitialAccess |
| **Techniques** | T1078, T0819, T1078.004 |
| **Required Connectors** | [Dataverse](../connectors/dataverse.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Hunting%20Queries/Dataverse%20-%20Activity%20after%20failed%20logons.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`DataverseActivity`](../tables/dataverseactivity.md) | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)

