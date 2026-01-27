# Dormant Service Principal Update Creds and Logs In

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query look for Service Principal accounts that are no longer used where a user has added or updated credentials for them before logging in with the Service Principal.  Threat actors may look to re-activate dormant accounts and use them for access in the hope that changes to such dormant accounts may go un-noticed.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `e7cdfacc-d112-45c7-9e8f-2b52948d075c` |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/DormantServicePrincipalUpdateCredsandLogsIn.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | `OperationName in "Add service principal credentials,Update application - Certificates`<br>`secrets management"` | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |

**Solutions:** [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

