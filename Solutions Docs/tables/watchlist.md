# Watchlist

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Watchlist table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/watchlist) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/watchlist)

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

## Solutions (5)

This table is used by the following solutions:

- [Dataminr Pulse](../solutions/dataminr-pulse.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [Web Session Essentials](../solutions/web-session-essentials.md)

---

## Content Items Using This Table (10)

### Analytic Rules (6)

**In solution [Dataminr Pulse](../solutions/dataminr-pulse.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataminr - urgent alerts detected](../content/dataminr-pulse-dataminr-urgent-alerts-detected-64a46029-3236-4d03-b5df-207366a623f1-d65138c6.md) |  |

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect Local File Inclusion(LFI) in web requests (ASIM Web Session)](../content/web-session-essentials-detect-local-file-inclusion-lfi-in-web-requests-asim-web-session-7bb55d05-ef39-4a40-8079-0bc3c05e7881-a7ad6ac3.md) |  |
| [Detect URLs containing known malicious keywords or commands (ASIM Web Session)](../content/web-session-essentials-detect-urls-containing-known-malicious-keywords-or-commands-asim-web-session-32c08696-2e37-4730-86f8-97d9c8b184c9-e787b1ad.md) |  |
| [Detect known risky user agents (ASIM Web Session)](../content/web-session-essentials-detect-known-risky-user-agents-asim-web-session-6a4dbcf8-f5e2-4b33-b34f-2db6487613f0-02ac6657.md) |  |
| [Detect web requests to potentially harmful files (ASIM Web Session)](../content/web-session-essentials-detect-web-requests-to-potentially-harmful-files-asim-web-session-c6608467-3678-45fe-b038-b590ce6d00fb-170f0dec.md) |  |
| [The download of potentially risky files from the Discord Content Delivery Network (CDN) (ASIM Web Session)](../content/web-session-essentials-the-download-of-potentially-risky-files-from-the-discord-content-delivery-network-b7fe8f27-7010-404b-aec5-6e5245cea580-7bb8623e.md) |  |

### Workbooks (4)

**In solution [Dataminr Pulse](../solutions/dataminr-pulse.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-d5436210.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

