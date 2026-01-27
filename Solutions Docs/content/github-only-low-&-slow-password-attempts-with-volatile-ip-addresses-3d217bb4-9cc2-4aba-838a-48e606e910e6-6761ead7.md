# Low & slow password attempts with volatile IP addresses

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This hunting query will identify instances where a single user account has seen a high incidence of failed attempts from highly volatile IP addresses  Changing IP address for every password attempt is becoming a more common technique amongst sophisticated threat groups. Often threat groups will randomise   the user agent they are using as well as IP address. This technique has been enabled by the emergence of services providing huge numbers of residential IP   addresses. These services are ofte

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `3d217bb4-9cc2-4aba-838a-48e606e910e6` |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1078, T1078.004, T1110, T1110.004, T1110.003 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/SigninLogs/LowAndSlowPasswordAttempt.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
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

