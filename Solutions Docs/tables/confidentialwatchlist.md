# ConfidentialWatchlist

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ConfidentialWatchlist table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/confidentialwatchlist) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/confidentialwatchlist)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _DTItemId | string | The Watchlist or Watchlist item unique ID. As an example, a Watchlist 'RiskyUsers' can contain Watchlist item 'Name:John Doe; email:johndoe@contoso.com'. A Watchlist item has unique ID and belongs to a Watchlist. The containing Watchlist can identified using the 'WatchlistId'. |
| _DTItemStatus | string | Was the Watchlist or Watchlist item created, updated or deleted by user. As an example, a Watchlist 'RiskyUsers' can contain Watchlist item 'Name:John Doe; email:johndoe@contoso.com'. If a Watchlist is added, the the status would be 'Created'. If the name of the Watchlist is updated from 'RiskyUsers' to 'RiskyEmployees' the status would be 'Updated'. |
| _DTItemType | string | Distinguish between a Watchlist and a Watchlist item. As an example, a Watchlist 'RiskyUsers' can contain Watchlist item 'Name:John Doe; email:johndoe@contoso.com'. A Watchlist item type will belong to a Watchlist type and the containing Watchlist can identified using the 'WatchlistId'. |
| _DTTimestamp | datetime | The time (UTC) when the event was generated. |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AzureTenantId | string | The AAD tenant ID to which this Watchlist table belongs. |
| CorrelationId | string | The ID for correlated events. |
| CreatedBy | dynamic | The JSON object with the user who created the Watchlist or Watchlist item, including: Object ID, email and name. |
| CreatedTimeUTC | datetime | The time (UTC) when the Watchlist or Watchlist item was first created. |
| DefaultDuration | string | The JSON object describing the default duration to live that each item of a Watchlist should inherit on creation. The default duration has this format : P(n)Y(n)M(n)DT(n)H(n)M(n)S, where P, Y, M, DT, H, M and S are invariant. For example, P3Y6M4DT12H30M9S represents a duration of three years, six months, four days, twelve hours, thirty minutes, and nine seconds. |
| EntityMapping | dynamic | The JSON object with Azure Sentinel entity mapping to input columns. |
| LastUpdatedTimeUTC | datetime | The time (UTC) when Watchlist or Watchlist item was last updated. |
| Notes | string | The notes provided by user. |
| Provider | string | The input provider of the Watchlist. |
| SearchKey | string | The SearchKey is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field to join in other event tables by IP address. |
| Source | string | The input source of the Watchlist. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Tags | string | The JSON array of tags provided by user. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the event was generated. |
| TimeToLive | datetime | The time to live for a Watchlist record, expressed as a date and time of day (e.g. 2020-08-20T17:00:00.9618037Z). Its original value is inherited from Watchlist's default duration. If TimeToLive passes, the record is considered deleted. A record's duration can be extended at any time by updating the TimeToLive value. |
| Type | string | The name of the table |
| UpdatedBy | dynamic | The JSON object with the user who last updated the Watchlist or Watchlist item, including: Object ID, email and name. |
| WatchlistAlias | string | The unique string referring to the Watchlist. |
| WatchlistCategory | string | The Watchlist category provided by user. |
| WatchlistId | string | The Resource Manager Watchlist resource name. |
| WatchlistItem | dynamic | The JSON object with key-value pairs from the input Watchlist source. |
| WatchlistItemId | string | The Watchlist item unique ID. |
| WatchlistName | string | The display name of Watchlist. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

