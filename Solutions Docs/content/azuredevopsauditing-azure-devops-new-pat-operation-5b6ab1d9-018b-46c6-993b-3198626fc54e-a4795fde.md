# Azure DevOps - New PAT Operation

Using PATs for new operations may signal misuse. This query flags unfamiliar PAT-based operations, potentially indicating malicious use of a stolen PAT.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `5b6ab1d9-018b-46c6-993b-3198626fc54e` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1078 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Hunting%20Queries/ADONewPATOperation.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
