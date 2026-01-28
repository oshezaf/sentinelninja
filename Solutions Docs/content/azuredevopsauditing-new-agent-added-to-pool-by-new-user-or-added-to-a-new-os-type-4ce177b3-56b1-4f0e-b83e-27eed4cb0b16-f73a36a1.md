# New Agent Added to Pool by New User or Added to a New OS Type

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'As seen in attacks such as SolarWinds attackers can look to subvert a build process by controlling build servers. Azure DevOps uses agent pools to execute pipeline tasks.  An attacker could insert compromised agents that they control into the pools in order to execute malicious code. This query looks for users adding agents to pools they have not added agents to before, or adding agents to a pool of an OS that has not been added to that pool before. This detection has potential for false positi

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `4ce177b3-56b1-4f0e-b83e-27eed4cb0b16` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1053 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Analytic%20Rules/NewAgentAddedToPoolbyNewUserorofNewOS.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`ADOAuditLogs_CL`](../tables/adoauditlogs-cl.md) | — | — |
| [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)

