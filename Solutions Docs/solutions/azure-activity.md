# Azure Activity

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-04-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure Activity](../connectors/azureactivity.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureActivity`](../tables/azureactivity.md) | [Azure Activity](../connectors/azureactivity.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **31 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 15 |
| Analytic Rules | 14 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Azure Machine Learning Write Operations](../content/68c89998-8052-4c80-a1f6-9d81060b6d57.md) | Low | InitialAccess, Execution, Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Creation of expensive computes in Azure](../content/9736e5f1-7b6e-4bfb-a708-e53ff1d182c3.md) | Low | DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [Mass Cloud resource deletions Time Series Anomaly](../content/ed43bdb7-eaab-4ea4-be52-6951fcfa7e3b.md) | Medium | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Entra ID Hybrid Health AD FS New Server](../content/88f453ff-7b9e-45bb-8c12-4058ca5e44ee.md) | Medium | DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Entra ID Hybrid Health AD FS Service Delete](../content/86a036b2-3686-42eb-b417-909fc0867771.md) | Medium | DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Entra ID Hybrid Health AD FS Suspicious Application](../content/d9938c3b-16f9-444d-bc22-ea9a9110e0fd.md) | Medium | CredentialAccess, DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [NRT Creation of expensive computes in Azure](../content/56fe0db0-6779-46fa-b3c5-006082a53064.md) | Medium | DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [NRT Microsoft Entra ID Hybrid Health AD FS New Server](../content/ec491363-5fe7-4eff-b68e-f42dcb76fcf6.md) | Medium | DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [New CloudShell User](../content/6d7214d9-4a28-44df-aafb-0910b9e6ae3e.md) | Low | Execution | [`AzureActivity`](../tables/azureactivity.md) |
| [Rare subscription-level operations in Azure](../content/23de46ea-c425-4a77-b456-511ae4855d69.md) | Low | CredentialAccess, Persistence | [`AzureActivity`](../tables/azureactivity.md) |
| [Subscription moved to another tenant](../content/48c026d8-7f36-4a95-9568-6f1420d66e37.md) | Low | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Suspicious Resource deployment](../content/9fb57e58-3ed8-4b89-afcf-c8e786508b1c.md) | Low | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Suspicious granting of permissions to an account](../content/b2c15736-b9eb-4dae-8b02-3016b6a45a32.md) | Medium | Persistence, PrivilegeEscalation | [`AzureActivity`](../tables/azureactivity.md) |
| [Suspicious number of resource creation or deployment activities](../content/361dd1e3-1c11-491e-82a3-bb2e44ac36ba.md) | Medium | Impact | [`AzureActivity`](../tables/azureactivity.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Anomalous Azure Operation Hunting Model](../content/43cb0347-bdcc-4e83-af5a-cebbd03971d8.md) | LateralMovement, CredentialAccess | [`AzureActivity`](../tables/azureactivity.md) |
| [Azure Machine Learning Write Operations](../content/26d116bd-324b-4bb8-b102-d4a282607ad7.md) | InitialAccess, Execution, Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Azure Network Security Group NSG Administrative Operations](../content/e94d6756-981c-4f02-9a81-d006d80c8b41.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Azure VM Run Command executed from Azure IP address](../content/efe843ca-3ce7-4896-9f8b-f2c374ae6527.md) | LateralMovement, CredentialAccess | - |
| [Azure Virtual Network Subnets Administrative Operations](../content/57784ba5-7791-422e-916f-65ef94fe1dbb.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Azure storage key enumeration](../content/5d2399f9-ea5c-4e67-9435-1fba745f3a39.md) | Discovery | [`AzureActivity`](../tables/azureactivity.md) |
| [AzureActivity Administration From VPS Providers](../content/1b8779c9-abf2-444f-a21f-437b8f90ac4a.md) | InitialAccess | [`AzureActivity`](../tables/azureactivity.md) |
| [Common deployed resources](../content/0278e3b8-9899-45c5-8928-700cd80d2d80.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Creation of an anomalous number of resources](../content/a09e6368-065b-4f1e-a4ce-b1b3a64b493b.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Granting permissions to account](../content/860cda84-765b-4273-af44-958b7cca85f7.md) | Persistence, PrivilegeEscalation | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Sentinel Analytics Rules Administrative Operations](../content/ef7ef44e-6129-4d8e-94fe-b5530415d8e5.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Sentinel Connectors Administrative Operations](../content/17201aa8-0916-4078-a020-7ea3a9262889.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Sentinel Workbooks Administrative Operations](../content/5a1f9655-c893-4091-8dc0-7f11d7676506.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Port opened for an Azure Resource](../content/9e146876-e303-49af-b847-b029d1a66852.md) | CommandAndControl, Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Rare Custom Script Extension](../content/81fd68a2-9ad6-4a1c-7bd7-18efe5c99081.md) | Execution | [`AzureActivity`](../tables/azureactivity.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AzureActivity](../content/azureactivity-azure-activity.md) | [`AzureActivity`](../tables/azureactivity.md) |
| [AzureServiceHealthWorkbook](../content/azureservicehealthworkbook-azure-activity.md) | [`AzureActivity`](../tables/azureactivity.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                         |
|-------------|--------------------------------|----------------------------------------------------------------------------|
| 3.0.3       | 19-02-2025                     | Added new **Workbook** Azure Service Health to the Solution and added new **Hunting query** Machine_Learning_Creation.yaml. <br/> Added new **Analytic Rule** Machine_Learning_Creation.yaml          |
| 3.0.2       | 21-02-2024                     | Modified Entity Mappings of **Analytic Rules**                             |
| 3.0.1       | 23-01-2024                     | Added subTechniques in Template                                            |
| 3.0.0       | 06-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID. <br/> Optimized the **Analytic Rule** query logic to achieve expected results    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
