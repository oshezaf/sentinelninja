# UCServiceUpdateStatus

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for UCServiceUpdateStatus table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucserviceupdatestatus) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (37 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucserviceupdatestatus)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AzureADDeviceId | string | A GUID corresponding to the AAD Tenant to which the device belongs. |
| AzureADTenantId | string | A GUID corresponding to this device's AAD Device ID |
| CatalogId | string | Catalog ID for update. |
| DeploymentApprovedTime | datetime | The datetime of when the update deployment was approved. |
| DeploymentId | string | The identifier of the Deployment that is targeting this update to this device, else empty. |
| DeploymentIsExpedited | bool | Whether this content is being expedited by WUfB DS. |
| DeploymentName | string | Friendly name of the created deployment. |
| DeploymentRevokeTime | datetime | The datetime of when the update deployment was Revoked. |
| GlobalDeviceId | string | Microsoft internal Global Device Identifier |
| OfferReadyTime | datetime | DateTime of OfferReady transition. If empty, not yet been Offered. |
| PolicyCreatedTime | datetime | The datetime of when the policy was created. |
| PolicyId | string | The policy identifier targeting the update to this device. |
| PolicyName | string | Friendly name of the created update policy. |
| ProjectedOfferReadyTime | datetime | Projected time update will be Offered to device. If empty, unknown. |
| ServiceState | string | High-level state of update's status relative to device, service-side. |
| ServiceSubstate | string | Last-known state of this update relative to the device, from the client (the device's WDD). |
| ServiceSubstateRank | int | Ranking of Substates for sequential ordering in funnel-type views. The rankings between ServiceSubstate and ClientSubstate can be used together. |
| ServiceSubstateTime | datetime | DateTime of last ServiceSubstate transition. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TargetBuild | string | The full build of the content this DeviceUpdateEvent is tracking. For Windows 10 updates, this would correspond to the full build (10.0.14393.385). |
| TargetVersion | string | The target OS Version - eg, 1909. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time at which this event is generated. |
| Type | string | The name of the table |
| UdpateIsSystemManifest | bool | Signifies if update is a system manifest. |
| UpdateCategory | string | The type of content this DeviceUpdateEvent is tracking. |
| UpdateClassification | string | Whether this content is an Upgrade (FU), Security (QU), NonSecurity (QU). |
| UpdateDisplayName | string | The long-form display name for the given update. Varies on content type (FU/QU). |
| UpdateId | string | Update ID of the targeted update. |
| UpdateManufacturer | string | Manufacturer of update. Microsoft for WU FU/QU, for D&amp;F name of driver manufacturer e.g. NVIDIA. |
| UpdateProvider | string | Update provider of drivers and firmware, eg. Microsoft. |
| UpdateRecommendedTime | datetime | The datetime of when the update was recomemnded to the device. |
| UpdateReleaseTime | datetime | DateTime of update's release date. |
| UpdateVersion | string | Update version of drivers and firmware. |
| UpdateVersionTime | datetime | Update version time of drivers and firmware. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [UCServiceUpdateStatus Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucserviceupdatestatus)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

