# AzureDevOpsAuditing

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-09-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure DevOps Audit Logs (via Codeless Connector Platform)](../connectors/azuredevopsauditlogs.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ADOAuditLogs_CL`](../tables/adoauditlogs-cl.md) | [Azure DevOps Audit Logs (via Codeless Connector Platform)](../connectors/azuredevopsauditlogs.md) | - |

### Internal Tables

The following **1 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Analytics, Hunting |

## Content Items

This solution includes **37 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 19 |
| Hunting Queries | 17 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Azure DevOps Administrator Group Monitoring](../content/azuredevopsauditing-azure-devops-administrator-group-monitoring-89e6adbd-612c-4fbe-bc3d-32f81baf3b6c.md) | Medium | Persistence | - |
| [Azure DevOps Agent Pool Created Then Deleted](../content/azuredevopsauditing-azure-devops-agent-pool-created-then-deleted-acfdee3f-b794-404a-aeba-ef6a1fa08ad1.md) | High | DefenseEvasion | - |
| [Azure DevOps Audit Detection for known malicious tooling](../content/azuredevopsauditing-azure-devops-audit-detection-for-known-malicious-tooling-bc71cf84-c02c-4c0a-a64c-306d84f9ff89.md) | High | Collection | - |
| [Azure DevOps Audit Stream Disabled](../content/azuredevopsauditing-azure-devops-audit-stream-disabled-4e8238bd-ff4f-4126-a9f6-09b3b6801b3d.md) | High | DefenseEvasion | - |
| [Azure DevOps Build Variable Modified by New User](../content/azuredevopsauditing-azure-devops-build-variable-modified-by-new-user-3b9a44d7-c651-45ed-816c-eae583a6f2f1.md) | Medium | DefenseEvasion | - |
| [Azure DevOps New Extension Added](../content/azuredevopsauditing-azure-devops-new-extension-added-bf07ca9c-e408-443a-8939-6860a45a929e.md) | Low | Persistence | - |
| [Azure DevOps PAT used with Browser](../content/azuredevopsauditing-azure-devops-pat-used-with-browser-5f0d80db-3415-4265-9d52-8466b7372e3a.md) | Medium | CredentialAccess | - |
| [Azure DevOps Personal Access Token (PAT) misuse](../content/azuredevopsauditing-azure-devops-personal-access-token-%28pat%29-misuse-ac891683-53c3-4f86-86b4-c361708e2b2b.md) | High | Execution, Impact | - |
| [Azure DevOps Pipeline Created and Deleted on the Same Day](../content/azuredevopsauditing-azure-devops-pipeline-created-and-deleted-on-the-same-day-17f23fbe-bb73-4324-8ecf-a18545a5dc26.md) | Medium | Execution | - |
| [Azure DevOps Pipeline modified by a new user](../content/azuredevopsauditing-azure-devops-pipeline-modified-by-a-new-user-155e9134-d5ad-4a6f-88f3-99c220040b66.md) | Medium | Execution, DefenseEvasion | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Azure DevOps Pull Request Policy Bypassing - Historic allow list](../content/azuredevopsauditing-azure-devops-pull-request-policy-bypassing---historic-allow-list-4d8de9e6-263e-4845-8618-cd23a4f58b70.md) | Medium | Persistence | - |
| [Azure DevOps Retention Reduced](../content/azuredevopsauditing-azure-devops-retention-reduced-71d374e0-1cf8-4e50-aecd-ab6c519795c2.md) | Low | DefenseEvasion | - |
| [Azure DevOps Service Connection Abuse](../content/azuredevopsauditing-azure-devops-service-connection-abuse-d564ff12-8f53-41b8-8649-44f76b37b99f.md) | Medium | Persistence, Impact | - |
| [Azure DevOps Service Connection Addition/Abuse - Historic allow list](../content/azuredevopsauditing-azure-devops-service-connection-addition-abuse---historic-allow-list-5efb0cfd-063d-417a-803b-562eae5b0301.md) | Medium | Persistence, Impact | - |
| [Azure DevOps Variable Secret Not Secured](../content/azuredevopsauditing-azure-devops-variable-secret-not-secured-4ca74dc0-8352-4ac5-893c-73571cc78331.md) | Medium | CredentialAccess | - |
| [External Upstream Source Added to Azure DevOps Feed](../content/azuredevopsauditing-external-upstream-source-added-to-azure-devops-feed-adc32a33-1cd6-46f5-8801-e3ed8337885f.md) | Medium | InitialAccess | - |
| [NRT Azure DevOps Audit Stream Disabled](../content/azuredevopsauditing-nrt-azure-devops-audit-stream-disabled-74ed028d-e392-40b7-baef-e69627bf89d1.md) | High | DefenseEvasion | - |
| [New Agent Added to Pool by New User or Added to a New OS Type](../content/azuredevopsauditing-new-agent-added-to-pool-by-new-user-or-added-to-a-new-os-type-4ce177b3-56b1-4f0e-b83e-27eed4cb0b16.md) | Medium | Execution | - |
| [New PA, PCA, or PCAS added to Azure DevOps](../content/azuredevopsauditing-new-pa,-pca,-or-pcas-added-to-azure-devops-35ce9aff-1708-45b8-a295-5e9a307f5f17.md) | Medium | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Azure DevOps - Build Check Deleted](../content/azuredevopsauditing-azure-devops---build-check-deleted-940386c3-4b2c-4147-ac8e-dcddedaaae52.md) | DefenseEvasion | - |
| [Azure DevOps - Build Deleted After Pipeline Modification](../content/azuredevopsauditing-azure-devops---build-deleted-after-pipeline-modification-47857f1f-f8e6-470d-b132-03a8a606b3f4.md) | Persistence | - |
| [Azure DevOps - Internal Upstream Package Feed Added](../content/azuredevopsauditing-azure-devops---internal-upstream-package-feed-added-20be967c-4923-4c4b-8e1d-e1c95d537dc3.md) | InitialAccess | - |
| [Azure DevOps - New Agent Pool Created](../content/azuredevopsauditing-azure-devops---new-agent-pool-created-76f626e0-4c78-47d4-aeb6-eaa59f4f2ecb.md) | DefenseEvasion | - |
| [Azure DevOps - New PAT Operation](../content/azuredevopsauditing-azure-devops---new-pat-operation-5b6ab1d9-018b-46c6-993b-3198626fc54e.md) | DefenseEvasion | - |
| [Azure DevOps - New Package Feed Created](../content/azuredevopsauditing-azure-devops---new-package-feed-created-3d1aa540-b4c7-4789-8c4c-4174b3c2371f.md) | InitialAccess | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Azure DevOps - New Release Approver](../content/azuredevopsauditing-azure-devops---new-release-approver-0c149cc9-78ba-4be1-9f7b-018288e3a829.md) | DefenseEvasion | - |
| [Azure DevOps - New Release Pipeline Created](../content/azuredevopsauditing-azure-devops---new-release-pipeline-created-2dfa9c23-1590-4589-995a-d1486be66028.md) | Persistence, Execution, PrivilegeEscalation | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Azure DevOps - Variable Created and Deleted](../content/azuredevopsauditing-azure-devops---variable-created-and-deleted-0fa523de-ce23-49d0-87a4-e890028e1e50.md) | DefenseEvasion | - |
| [Azure DevOps Display Name Changes](../content/azuredevopsauditing-azure-devops-display-name-changes-cf0c493b-a8af-4b32-8c7e-d4303f3a406f.md) | Persistence, DefenseEvasion | - |
| [Azure DevOps Pull Request Policy Bypassing](../content/azuredevopsauditing-azure-devops-pull-request-policy-bypassing-df205daf-fcf3-4b95-a7fd-043b70f6c209.md) | Execution | - |
| [Azure DevOps- Addtional Org Admin added](../content/azuredevopsauditing-azure-devops--addtional-org-admin-added-7b634263-9971-4887-8ecf-0d83ab9c7370.md) | Persistence, DefenseEvasion | - |
| [Azure DevOps- Guest users access enabled](../content/azuredevopsauditing-azure-devops--guest-users-access-enabled-2380670e-e168-4a99-9529-6c4d127b3ce6.md) | Persistence, DefenseEvasion | - |
| [Azure DevOps- Microsoft Entra ID Protection Conditional Access Disabled](../content/azuredevopsauditing-azure-devops--microsoft-entra-id-protection-conditional-access-disabled-c78a3845-37d9-448e-a8cd-e9543f00bcc5.md) | Persistence, DefenseEvasion | - |
| [Azure DevOps- Project visibility changed to public](../content/azuredevopsauditing-azure-devops--project-visibility-changed-to-public-42e69ff6-719d-4853-95a5-2b211e2bb031.md) | Collection | - |
| [Azure DevOps- Public project created](../content/azuredevopsauditing-azure-devops--public-project-created-3cdc5404-15ed-4656-8eb9-60bc8b495934.md) | Persistence, DefenseEvasion | - |
| [Azure DevOps- Public project enabled by admin](../content/azuredevopsauditing-azure-devops--public-project-enabled-by-admin-800ae9c9-0280-4296-821f-c6e0a473fb41.md) | Persistence, DefenseEvasion | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ADOAuditLogs](../content/azuredevopsauditing-adoauditlogs-dea70aa0-cd14-4e7f-bac4-a73d9d57eae1.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                         |
|-------------|--------------------------------|----------------------------------------------------------------------------|
| 3.0.6       | 19-06-2025                     | Updated **Data Connector** instructions to include a note about User permissions.                                   |
| 3.0.5       | 05-05-2025                     | Updated **Data Connector** instructions.                                   |
| 3.0.4       | 15-04-2025                     | Added new **CCP Connector** - Azure DevOps Audit Logs. 					   		   |
| 3.0.3       | 16-07-2024                     | Updated the **Analytic rules** for missing TTP.					   		   |
| 3.0.2       | 23-01-2024                     | Updated the solution to fix **Analytic Rules** deployment issue.            |
| 3.0.1       | 27-11-2023                     | Added new Entity Mappings to **Analytic Rules**.                            |
| 3.0.0       | 06-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
