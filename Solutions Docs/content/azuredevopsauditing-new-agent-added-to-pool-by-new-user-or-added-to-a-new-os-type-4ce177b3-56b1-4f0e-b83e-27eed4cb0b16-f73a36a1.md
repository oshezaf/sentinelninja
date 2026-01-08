# New Agent Added to Pool by New User or Added to a New OS Type

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

- [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
