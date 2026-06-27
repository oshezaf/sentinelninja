# UCClientReadinessStatus

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for UCClientReadinessStatus table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucclientreadinessstatus) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucclientreadinessstatus)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AzureADDeviceId | string | A GUID corresponding to the AAD tenant to which the device belongs. |
| AzureADTenantId | string | A GUID corresponding to this device's AAD device ID. |
| DeviceName | string | The Device given name. |
| GlobalDeviceId | string | Microsoft internal global device identifier. |
| OSBuild | string | The currently-installed Windows 10 Build in the format 'Major'.'Revision'. 'Major' corresponds to which Feature Update the device is on, whereas 'Revision' corresponds to which quality update the device is on. Mappings between Feature release and Major, as well as Revision and KBs, are available aka.ms/win10releaseinfo. |
| OSName | string | The version of Windows 10 as is organized on aka.ms/win10releaseinfo. |
| OSVersion | string | The version of Windows 10 as is organized on aka.ms/win10releaseinfo. |
| ReadinessExpiryTime | datetime | The time the readiness report expires. |
| ReadinessReason | string | Reason why the device is not capable of taking target OS and version. |
| ReadinessScanTime | datetime | The time the readiness generated this specific record. |
| ReadinessStatus | string | Whether or not the device is capable of taking target OS and version. |
| SCCMClientId | string | A GUID corresponding to the SCCM client ID on the device. |
| SetupReadinessExpiryTime | datetime | The time the readiness report expires. |
| SetupReadinessReason | string | Reason why the device is not capable of taking target OS and version when setup ran. |
| SetupReadinessStatus | string | Whether or not the device is capable of taking target OS and version when setup ran. |
| SetupReadinessTime | datetime | The time the readiness generated this specific record when setup ran. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TargetOSBuild | string | The currently-installed Windows 10 Build in the format 'Major'.'Revision'. 'Major' corresponds to which Feature Update the device is on, whereas 'Revision' corresponds to which quality update the device is on. Mappings between Feature release and Major, as well as Revision and KBs, are available aka.ms/win10releaseinfo. |
| TargetOSName | string | The version of Windows 10 as is organized on aka.ms/win10releaseinfo. |
| TargetOSVersion | string | The version of Windows 10 as is organized on aka.ms/win10releaseinfo. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time at which this event is generated. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [UCClientReadinessStatus Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucclientreadinessstatus)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

