# User Granted Access and created resources

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when a new user is granted access and starts creating resources in Azure.  This can help you identify rogue or malicious user behavior.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `b6baa3bb-a231-4e50-8ad1-4e28a958a0d3` |
| **Tactics** | Persistence, PrivilegeEscalation, Impact |
| **Techniques** | T1098, T1078, T1496 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md), [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/UserGrantedAccess_CreatesResources.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ |
| [`AzureActivity`](../tables/azureactivity.md) | `OperationName has "Create"` | ✗ | ✗ |
| [`Operation`](../tables/operation.md) |  | ✗ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| [AzureActivity](../connectors/azureactivity.md) | [Azure Activity](../solutions/azure-activity.md) |

**Solutions:** [Azure Activity](../solutions/azure-activity.md), [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

