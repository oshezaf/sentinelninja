# UCClientUpdateStatus

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for UCClientUpdateStatus table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucclientupdatestatus) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (44 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucclientupdatestatus)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AzureADDeviceId | string | A GUID corresponding to the AAD Tenant to which the device belongs. |
| AzureADTenantId | string | A GUID corresponding to this device's AAD Device ID. |
| CatalogId | string | The update catalog ID. |
| ClientState | string | Higher-level bucketization of ClientSubstate. |
| ClientSubstate | string | Last-known state of this update relative to the device, from the client (the device's WDD). |
| ClientSubstateRank | int | Ranking of Client Substates for sequential ordering in funnel-type views. The rankings between ServiceSubstate and ClientSubstate can be used together. |
| ClientSubstateTime | datetime | DateTime of last Client Substate transition. |
| DeploymentId | string | The identifier of the Deployment that is targeting this update to this device, else empty. |
| DeviceName | string | Device's given name. |
| EventData | string | Json to fill with arbitrary K/V pairs. Used to populate contextual data that would otherwise be sparsely populated if elevated to a field always present in the schema. |
| FurthestClientSubstate | string | Furthest clientSubstate. |
| FurthestClientSubstateRank | int | Ranking of furthest clientSubstate. |
| GlobalDeviceId | string | Microsoft internal Global Device Identifier |
| IsHotpatchUpdate | bool | Status of whether a device is taking a windows security update without requiring a restart or not |
| IsUpdateHealthy | bool | True: No issues preventing this device from updating to this update have been found. False: There is something that may prevent this device from updating. |
| OfferReceivedTime | datetime | DateTime when device last reported entering OfferReceived, else empty. |
| RestartRequiredTime | datetime | DateTime when device first reported entering RebootRequired (or RebootPending), else empty. |
| SCCMClientId | string | A GUID corresponding to the SCCM Client ID on the device. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TargetBuild | string | The full build of the content this DeviceUpdateEvent is tracking. For Windows 10 updates, this would correspond to the full build (10.0.14393.385). |
| TargetBuildNumber | int | Integer of the Major portion of Build. |
| TargetKBNumber | string | KB Article. |
| TargetRevisionNumber | int | Integer or the Minor (or Revision) portion of Build. |
| TargetVersion | string | The target OS Version - eg, 1909. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time the snapshot generated this specific record. |
| Type | string | The name of the table |
| UpdateCategory | string | The type of content this DeviceUpdateEvent is tracking. |
| UpdateClassification | string | Whether this content is an Upgrade (FU), Security (QU), NonSecurity (QU). |
| UpdateConnectivityLevel | string | Whether or not this device is maintaining a sufficiently cumulative and continuous connection to Windows Update so the update can progress optimally. |
| UpdateDisplayName | string | The long-form display name for the given update. Varies on content type (FU/QU). |
| UpdateHealthGroupL1 | string | Grouping design to describe the current update installation's "health", L1 (highest-level). |
| UpdateHealthGroupL2 | string | Second grouping, subset of L1, more detailed. |
| UpdateHealthGroupL3 | string | Third grouping, subset of L3, more detailed. |
| UpdateHealthGroupRankL1 | int | Integer for ranking the L1 UpdateHealthGroup. |
| UpdateHealthGroupRankL2 | int | Integer for ranking the L2 UpdateHealthGroup. |
| UpdateHealthGroupRankL3 | int | Integer for ranking the L3 UpdateHealthGroup. |
| UpdateId | string | Update ID of the targeted update. |
| UpdateInstalledTime | datetime | DateTime when event transitioned to UpdateInstalled, else empty. |
| UpdateManufacturer | string | Manufacturer of update. Microsoft for WU FU/QU, for D&amp;F name of driver manufacturer e.g. NVIDIA. |
| UpdateReleaseTime | datetime | The release date of the update. |
| UpdateSource | string | The source of the update - UUP, MUv6, Media. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [UCClientUpdateStatus Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucclientupdatestatus)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

