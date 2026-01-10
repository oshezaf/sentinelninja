# Azure DevOps Variable Secret Not Secured

Credentials used in the build process may be stored as Azure DevOps variables. To secure these variables they should be stored in KeyVault or marked as Secrets.  This detection looks for new variables added with names that suggest they are credentials but where they are not set as Secrets or stored in KeyVault.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `4ca74dc0-8352-4ac5-893c-73571cc78331` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1552 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Analytic%20Rules/ADOSecretNotSecured.yaml) |

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

