# 🔗 Azure Backup (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Backup](https://learn.microsoft.com/en-us/azure/backup/backup-overview) is a cloud-based backup service for protecting data and workloads.

To collect Azure Backup logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/backup/backup-azure-monitoring-use-azuremonitor) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AddonAzureBackupAlerts`](../tables/addonazurebackupalerts.md) | ✓ | ✗ | — |
| [`AddonAzureBackupJobs`](../tables/addonazurebackupjobs.md) | ✓ | ✗ | — |
| [`AddonAzureBackupPolicy`](../tables/addonazurebackuppolicy.md) | ✓ | ✗ | — |
| [`AddonAzureBackupProtectedInstance`](../tables/addonazurebackupprotectedinstance.md) | ✓ | ✗ | — |
| [`AddonAzureBackupStorage`](../tables/addonazurebackupstorage.md) | ✓ | ✗ | — |
| [`AzureBackupOperations`](../tables/azurebackupoperations.md) | ✓ | ✗ | — |
| [`CoreAzureBackup`](../tables/coreazurebackup.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

