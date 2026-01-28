# Azure Activity

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/azureactivity_logo.svg" alt="Azure Activity Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Azure Activity](https://docs.microsoft.com/azure/azure-monitor/essentials/activity-log) solution for Microsoft Sentinel enables you to ingest Azure Activity Administrative, Security, Service Health, Alert, Recommendation, Policy, Autoscale and Resource Health [logs](https://docs.microsoft.com/azure/azure-monitor/reference/tables/azureactivity) using Diagnostic Settings into Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-04-18 |
| **Solution Folder** | [Azure Activity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure Activity](../connectors/azureactivity.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureActivity`](../tables/azureactivity.md) | [Azure Activity](../connectors/azureactivity.md) | Analytics, Hunting, Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`IdentityInfo`](../tables/identityinfo.md) | - | Analytics |

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
| [Azure Machine Learning Write Operations](../content/azure-activity-azure-machine-learning-write-operations-68c89998-8052-4c80-a1f6-9d81060b6d57-78e6b271.md) | Low | InitialAccess, Execution, Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Creation of expensive computes in Azure](../content/azure-activity-creation-of-expensive-computes-in-azure-9736e5f1-7b6e-4bfb-a708-e53ff1d182c3-ceac9b06.md) | Low | DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [Mass Cloud resource deletions Time Series Anomaly](../content/azure-activity-mass-cloud-resource-deletions-time-series-anomaly-ed43bdb7-eaab-4ea4-be52-6951fcfa7e3b-bbd8cfc2.md) | Medium | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Entra ID Hybrid Health AD FS New Server](../content/azure-activity-microsoft-entra-id-hybrid-health-ad-fs-new-server-88f453ff-7b9e-45bb-8c12-4058ca5e44ee-ede40a47.md) | Medium | DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Entra ID Hybrid Health AD FS Service Delete](../content/azure-activity-microsoft-entra-id-hybrid-health-ad-fs-service-delete-86a036b2-3686-42eb-b417-909fc0867771-676dbeac.md) | Medium | DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Entra ID Hybrid Health AD FS Suspicious Application](../content/azure-activity-microsoft-entra-id-hybrid-health-ad-fs-suspicious-application-d9938c3b-16f9-444d-bc22-ea9a9110e0fd-8920c2ac.md) | Medium | CredentialAccess, DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [NRT Creation of expensive computes in Azure](../content/azure-activity-nrt-creation-of-expensive-computes-in-azure-56fe0db0-6779-46fa-b3c5-006082a53064-7552960d.md) | Medium | DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [NRT Microsoft Entra ID Hybrid Health AD FS New Server](../content/azure-activity-nrt-microsoft-entra-id-hybrid-health-ad-fs-new-server-ec491363-5fe7-4eff-b68e-f42dcb76fcf6-5534b382.md) | Medium | DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md) |
| [New CloudShell User](../content/azure-activity-new-cloudshell-user-6d7214d9-4a28-44df-aafb-0910b9e6ae3e-a064ab7a.md) | Low | Execution | [`AzureActivity`](../tables/azureactivity.md) |
| [Rare subscription-level operations in Azure](../content/azure-activity-rare-subscription-level-operations-in-azure-23de46ea-c425-4a77-b456-511ae4855d69-121f6490.md) | Low | CredentialAccess, Persistence | [`AzureActivity`](../tables/azureactivity.md) |
| [Subscription moved to another tenant](../content/azure-activity-subscription-moved-to-another-tenant-48c026d8-7f36-4a95-9568-6f1420d66e37-856f8155.md) | Low | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Suspicious Resource deployment](../content/azure-activity-suspicious-resource-deployment-9fb57e58-3ed8-4b89-afcf-c8e786508b1c-a84aefba.md) | Low | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Suspicious granting of permissions to an account](../content/azure-activity-suspicious-granting-of-permissions-to-an-account-b2c15736-b9eb-4dae-8b02-3016b6a45a32-6643d8bb.md) | Medium | Persistence, PrivilegeEscalation | [`AzureActivity`](../tables/azureactivity.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Suspicious number of resource creation or deployment activities](../content/azure-activity-suspicious-number-of-resource-creation-or-deployment-activities-361dd1e3-1c11-491e-82a3-bb2e44ac36ba-812975d5.md) | Medium | Impact | [`AzureActivity`](../tables/azureactivity.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Anomalous Azure Operation Hunting Model](../content/azure-activity-anomalous-azure-operation-hunting-model-43cb0347-bdcc-4e83-af5a-cebbd03971d8-cab991db.md) | LateralMovement, CredentialAccess | [`AzureActivity`](../tables/azureactivity.md) |
| [Azure Machine Learning Write Operations](../content/azure-activity-azure-machine-learning-write-operations-26d116bd-324b-4bb8-b102-d4a282607ad7-c243c1ab.md) | InitialAccess, Execution, Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Azure Network Security Group NSG Administrative Operations](../content/azure-activity-azure-network-security-group-nsg-administrative-operations-e94d6756-981c-4f02-9a81-d006d80c8b41-633c60f3.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Azure VM Run Command executed from Azure IP address](../content/azure-activity-azure-vm-run-command-executed-from-azure-ip-address-efe843ca-3ce7-4896-9f8b-f2c374ae6527-1a85a75b.md) | LateralMovement, CredentialAccess | [`AzureActivity`](../tables/azureactivity.md) |
| [Azure Virtual Network Subnets Administrative Operations](../content/azure-activity-azure-virtual-network-subnets-administrative-operations-57784ba5-7791-422e-916f-65ef94fe1dbb-9d2f39f9.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Azure storage key enumeration](../content/azure-activity-azure-storage-key-enumeration-5d2399f9-ea5c-4e67-9435-1fba745f3a39-dc9ad5ce.md) | Discovery | [`AzureActivity`](../tables/azureactivity.md) |
| [AzureActivity Administration From VPS Providers](../content/azure-activity-azureactivity-administration-from-vps-providers-1b8779c9-abf2-444f-a21f-437b8f90ac4a-2a957dc6.md) | InitialAccess | [`AzureActivity`](../tables/azureactivity.md) |
| [Common deployed resources](../content/azure-activity-common-deployed-resources-0278e3b8-9899-45c5-8928-700cd80d2d80-cd2dd606.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Creation of an anomalous number of resources](../content/azure-activity-creation-of-an-anomalous-number-of-resources-a09e6368-065b-4f1e-a4ce-b1b3a64b493b-70888297.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Granting permissions to account](../content/azure-activity-granting-permissions-to-account-860cda84-765b-4273-af44-958b7cca85f7-74a48e32.md) | Persistence, PrivilegeEscalation | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Sentinel Analytics Rules Administrative Operations](../content/azure-activity-microsoft-sentinel-analytics-rules-administrative-operations-ef7ef44e-6129-4d8e-94fe-b5530415d8e5-4b1b530d.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Sentinel Connectors Administrative Operations](../content/azure-activity-microsoft-sentinel-connectors-administrative-operations-17201aa8-0916-4078-a020-7ea3a9262889-4cf8c28d.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Microsoft Sentinel Workbooks Administrative Operations](../content/azure-activity-microsoft-sentinel-workbooks-administrative-operations-5a1f9655-c893-4091-8dc0-7f11d7676506-d2f3274a.md) | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Port opened for an Azure Resource](../content/azure-activity-port-opened-for-an-azure-resource-9e146876-e303-49af-b847-b029d1a66852-03c8ef50.md) | CommandAndControl, Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Rare Custom Script Extension](../content/azure-activity-rare-custom-script-extension-81fd68a2-9ad6-4a1c-7bd7-18efe5c99081-a79becd9.md) | Execution | [`AzureActivity`](../tables/azureactivity.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AzureActivity](../content/azure-activity-azureactivity-dc7bc453.md) | [`AzureActivity`](../tables/azureactivity.md) |
| [AzureServiceHealthWorkbook](../content/azure-activity-azureservicehealthworkbook-d3085bda.md) | [`AzureActivity`](../tables/azureactivity.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                         |
|-------------|--------------------------------|----------------------------------------------------------------------------|
| 3.0.3       | 19-02-2025                     | Added new **Workbook** Azure Service Health to the Solution and added new **Hunting query** Machine_Learning_Creation.yaml. <br/> Added new **Analytic Rule** Machine_Learning_Creation.yaml          |
| 3.0.2       | 21-02-2024                     | Modified Entity Mappings of **Analytic Rules**                             |
| 3.0.1       | 23-01-2024                     | Added subTechniques in Template                                            |
| 3.0.0       | 06-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID. <br/> Optimized the **Analytic Rule** query logic to achieve expected results    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

