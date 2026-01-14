# Azure DevOps Agent Pool Created Then Deleted

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

'As well as adding build agents to an existing pool to execute malicious activity within a pipeline, an attacker could create a complete new agent pool and use this for execution. Azure DevOps allows for the creation of agent pools with Azure hosted infrastructure or self-hosted infrastructure. Given the additional customizability of self-hosted agents this   detection focuses on the creation of new self-hosted pools. To further reduce false positive rates the detection looks for pools created a

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `acfdee3f-b794-404a-aeba-ef6a1fa08ad1` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1578.002 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Analytic%20Rules/ADOAgentPoolCreatedDeleted.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ADOAuditLogs_CL`](../tables/adoauditlogs-cl.md)
- [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)

