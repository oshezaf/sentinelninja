# StorageBlobLogs

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for StorageBlobLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/storagebloblogs) |

## Solutions (6)

This table is used by the following solutions:

- [Azure Storage](../solutions/azure-storage.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOC Handbook](../solutions/soc-handbook.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Azure Storage Account](../connectors/azurestorageaccount.md)

---

## Content Items Using This Table (19)

### Analytic Rules (1)

**In solution [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md):**
- [Linked Malicious Storage Artifacts](../content/microsoft-defender-for-cloud-apps-linked-malicious-storage-artifacts-b9e3b9f8-a406-4151-9891-e5ff1ddd8c1d-6de5b72c.md)

### Hunting Queries (8)

**In solution [](../solutions/.md):**
- [Azure Storage File Create and Delete](../content/-azure-storage-file-create-and-delete-276731f6-ae09-4469-9fa0-c0791a5a0d8d-e22876cd.md)
- [Azure Storage File Create, Access, Delete](../content/-azure-storage-file-create,-access,-delete-25568c62-414b-4577-acee-5cba9494c232-6590c431.md)
- [Azure Storage Mass File Deletion](../content/-azure-storage-mass-file-deletion-85e16874-72aa-4ebe-b36e-e45f8ba50f79-ef798428.md)
- [Azure Storage file upload from VPS Providers](../content/-azure-storage-file-upload-from-vps-providers-85e16874-72aa-4ebe-b36e-e45f8ba50f79-35208d0a.md)
- [Detect Enumeration Activity Using Unique Identifiers and Session Aggregation](../content/-detect-enumeration-activity-using-unique-identifiers-and-session-aggregation-b7b409df-af7b-4feb-9cc9-109beed37512-a1359b31.md)
- [Storage Alert Correlation with CommonSecurityLogs and StorageLogs](../content/-storage-alert-correlation-with-commonsecuritylogs-and-storagelogs-7098cae1-c632-4b40-b715-86d6b07720d7-02f8c87f.md)
- [Storage File Seen on Endpoint](../content/-storage-file-seen-on-endpoint-c7f03700-8bbe-4838-9e78-4852ef21609b-953c2a75.md)
- [User Account Linked to Storage Account File Upload](../content/-user-account-linked-to-storage-account-file-upload-bee57113-7b9d-4158-958c-a7f3d534c6c4-dbfcb6ea.md)

### Workbooks (10)

**In solution [](../solutions/.md):**
- [AzureLogCoverage](../content/-azurelogcoverage-e63c774a.md)
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [DoDZeroTrustWorkbook](../content/-dodzerotrustworkbook-93adac1a.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [ZeroTrustStrategyWorkbook](../content/-zerotruststrategyworkbook-e9062fae.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.storage/storageaccounts`

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimFileEventAzureBlobStorage](../asim/asimfileeventazureblobstorage.md) | FileEvent |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

