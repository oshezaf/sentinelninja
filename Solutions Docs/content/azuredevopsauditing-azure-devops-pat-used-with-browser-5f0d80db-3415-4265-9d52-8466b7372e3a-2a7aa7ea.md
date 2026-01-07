# Azure DevOps PAT used with Browser

Personal Access Tokens (PATs) are used as an alternate password to authenticate into Azure DevOps. PATs are intended for programmatic access use in code or applications.  This can be prone to attacker theft if not adequately secured. This query looks for the use of a PAT in authentication but from a User Agent indicating a browser.  This should not be normal activity and could be an indicator of an attacker using a stolen PAT.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `5f0d80db-3415-4265-9d52-8466b7372e3a` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1528 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Analytic%20Rules/ADOPATUsedWithBrowser.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
