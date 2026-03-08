# McasShadowItReporting

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for McasShadowItReporting table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/mcasshadowitreporting) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/mcasshadowitreporting)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AadTenantId | string |  |
| AppCategory | string |  |
| AppId | string |  |
| AppInstance | string |  |
| AppName | string |  |
| AppScore | int |  |
| AppTags | dynamic |  |
| BlockedEvents | int |  |
| Date | datetime |  |
| DownloadedBytes | int |  |
| EnrichedUserName | string |  |
| IpAddress | string |  |
| MachineId | string |  |
| MachineName | string |  |
| RawUserName | string |  |
| RichUserName | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StreamName | string |  |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime |  |
| TotalBytes | int |  |
| TotalEvents | int |  |
| Type | string | The name of the table |
| UploadedBytes | int |  |
| UserName | string |  |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender for Cloud Apps](../connectors/microsoftcloudappsecurity.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftCloudAppSecurity](../content/microsoft-defender-for-cloud-apps-microsoftcloudappsecurity-0234df86.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

