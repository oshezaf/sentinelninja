# PurviewDataSensitivityLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for PurviewDataSensitivityLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, Security |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/purviewdatasensitivitylogs) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Resource Types](#resource-types)

## Schema (33 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/purviewdatasensitivitylogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActivityType | string | The type of data sensitivity event: classification, labeling. |
| AssetCreationTime | datetime | Time (UTC) at which the asset was created. |
| AssetLastScanTime | datetime | Time (UTC) at which the asset was last scanned. |
| AssetModifiedTime | datetime | Time (UTC) at which the asset was last modified. |
| AssetName | string | Name of the asset scanned. |
| AssetPath | string | Path of the asset scanned in a source. |
| AssetType | string | Type of asset that was scanned: file, column, table, generic. |
| Classification | dynamic | Names of the classifications found. |
| ClassificationDetails | dynamic | List of classification details: ID, name, count, uniquecount, confidence. |
| ClassificationTrigger | string | The trigger for the classification event. |
| FileExtension | string | File extension of the asset scanned. Only populated when asset type is a file. |
| FileSize | long | File size of the asset scanned in bytes. Only populated when asset type is a file. |
| PurviewAccountName | string | Name of the Purview account. |
| PurviewRegion | string | Region of the Purview account. |
| PurviewTenantId | string | Tenant ID associated with the Purview account. |
| SensitivityLabel | dynamic | Names for the labels found. |
| SensitivityLabelDetails | dynamic | List of label details: ID, name, order. |
| SensitivityLabelTrigger | string | The trigger for the sensitivity label event. |
| SourceCollectionName | string | Name of the data source collection name in Purview. |
| SourceName | string | Name of the data source scanned as registered in Purview. |
| SourcePath | string | Resource Path of the data source. Ex: ARM path for Azure resources and ARN for AWS resources. |
| SourceRegion | string | The location of the data source that was scanned. |
| SourceScanId | string | The associated Purview scan ID for the source. |
| SourceSubscriptionId | string | Subscription ID associated with the data source. Account ID for AWS resources. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SourceType | string | Type of data source scanned: azuredatalakegen1, azureblob, azuredataexplorer, amazons3 etc. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time (UTC) when the log was generated. |
| Type | string | The name of the table |

## Solutions (3)

This table is used by the following solutions:

- [DPDP Compliance](../solutions/dpdp-compliance.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Microsoft Purview](../solutions/microsoft-purview.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Purview](../connectors/microsoftazurepurview.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (2)

**In solution [Microsoft Purview](../solutions/microsoft-purview.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Sensitive Data Discovered in the Last 24 Hours](../content/microsoft-purview-sensitive-data-discovered-in-the-last-24-hours-7ae7e8b0-07e9-43cb-b783-b04082f09060-60c3db5f.md) |  |
| [Sensitive Data Discovered in the Last 24 Hours - Customized](../content/microsoft-purview-sensitive-data-discovered-in-the-last-24-hours-customized-79f296d9-e6e4-45dc-9ca7-1770955435fa-d7061393.md) |  |

### Workbooks (3)

**In solution [DPDP Compliance](../solutions/dpdp-compliance.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) |  |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |  |

**In solution [Microsoft Purview](../solutions/microsoft-purview.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftPurview](../content/microsoft-purview-microsoftpurview-c44ab5ce.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/purview`
- `microsoft.purview/accounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

