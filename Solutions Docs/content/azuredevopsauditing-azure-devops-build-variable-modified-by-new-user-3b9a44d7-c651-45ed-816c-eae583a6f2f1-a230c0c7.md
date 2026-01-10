# Azure DevOps Build Variable Modified by New User

'Variables can be configured and used at any stage of the build process in Azure DevOps to inject values. An attacker with the required permissions could modify or add to these variables to conduct malicious activity such as changing paths or remote endpoints called during the build. As variables are often changed by users, just detecting these changes would have a high false positive rate. This detection looks for modifications to variable groups where that user has not been observed modifying

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `3b9a44d7-c651-45ed-816c-eae583a6f2f1` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1578 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Analytic%20Rules/ADOVariableModifiedByNewUser.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

