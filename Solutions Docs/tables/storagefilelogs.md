# StorageFileLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for StorageFileLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/storagefilelogs) |

## Solutions (3)

This table is used by the following solutions:

- [Azure Storage](../solutions/azure-storage.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Azure Storage Account](../connectors/azurestorageaccount.md) |  |

---

## Content Items Using This Table (9)

### Analytic Rules (1)

**In solution [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Linked Malicious Storage Artifacts](../content/microsoft-defender-for-cloud-apps-linked-malicious-storage-artifacts-b9e3b9f8-a406-4151-9891-e5ff1ddd8c1d-6de5b72c.md) |  |

### Hunting Queries (7)

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Azure Storage File Create and Delete](../content/github-only-azure-storage-file-create-and-delete-276731f6-ae09-4469-9fa0-c0791a5a0d8d-9afbf5e4.md) |  |
| [Azure Storage File Create, Access, Delete](../content/github-only-azure-storage-file-create,-access,-delete-25568c62-414b-4577-acee-5cba9494c232-3fab8ab2.md) |  |
| [Azure Storage Mass File Deletion](../content/github-only-azure-storage-mass-file-deletion-85e16874-72aa-4ebe-b36e-e45f8ba50f79-194e0a08.md) |  |
| [Azure Storage file upload from VPS Providers](../content/github-only-azure-storage-file-upload-from-vps-providers-85e16874-72aa-4ebe-b36e-e45f8ba50f79-c966139b.md) |  |
| [Storage Alert Correlation with CommonSecurityLogs and StorageLogs](../content/github-only-storage-alert-correlation-with-commonsecuritylogs-and-storagelogs-7098cae1-c632-4b40-b715-86d6b07720d7-78ea9953.md) |  |
| [Storage File Seen on Endpoint](../content/github-only-storage-file-seen-on-endpoint-c7f03700-8bbe-4838-9e78-4852ef21609b-4254e436.md) |  |
| [User Account Linked to Storage Account File Upload](../content/github-only-user-account-linked-to-storage-account-file-upload-bee57113-7b9d-4158-958c-a7f3d534c6c4-d30a8c48.md) |  |

### Workbooks (1)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimFileEventAzureFileStorage](../asim/asimfileeventazurefilestorage.md) | FileEvent | Microsoft Azure File Storage |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.storage/storageaccounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

