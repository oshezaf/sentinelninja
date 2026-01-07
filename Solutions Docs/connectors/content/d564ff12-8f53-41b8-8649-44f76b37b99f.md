# Azure DevOps Service Connection Abuse

Flags builds/releases that use a large number of service connections if they aren't manually in the allow list. This is to determine if someone is hijacking a build/release and adding many service connections in order to abuse or dump credentials from service connections.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `d564ff12-8f53-41b8-8649-44f76b37b99f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, Impact |
| **Techniques** | T1098, T1496 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Analytic%20Rules/AzDOServiceConnectionUsage.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
