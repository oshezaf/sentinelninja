# Azure DevOps - Variable Created and Deleted

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

The query detects additions and removals of variables in build processes in a short span of time, possibly indicating malicious activity. Promoting to a detection if few such events occur.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `0fa523de-ce23-49d0-87a4-e890028e1e50` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1578 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Hunting%20Queries/ADOVariableCreatedDeleted.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ADOAuditLogs_CL`](../tables/adoauditlogs-cl.md) | ✓ | ✓ | ✓ |
| [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md) | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)

