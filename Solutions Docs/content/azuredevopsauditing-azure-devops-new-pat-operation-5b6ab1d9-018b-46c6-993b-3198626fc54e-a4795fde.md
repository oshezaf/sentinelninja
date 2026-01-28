# Azure DevOps - New PAT Operation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Using PATs for new operations may signal misuse. This query flags unfamiliar PAT-based operations, potentially indicating malicious use of a stolen PAT.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `5b6ab1d9-018b-46c6-993b-3198626fc54e` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1078 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Hunting%20Queries/ADONewPATOperation.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`ADOAuditLogs_CL`](../tables/adoauditlogs-cl.md) | — | — |
| [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)

