# EntraIdSpnSignInEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Microsoft Entra service principal and managed identity sign-ins

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-entraidspnsigninevents-table) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/entraidspnsigninevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Application | string | Application that performed the recorded action |
| ApplicationId | string | Unique identifier for the application |
| City | string | City where the account user is located |
| CorrelationId | string | Unique identifier of the sign-in event |
| Country | string | Two-letter code indicating the country/region where the client IP address is geolocated |
| ErrorCode | int | Contains the error code if a sign-in error occurs. To find a description of a specific error code, visithttps://aka.ms/AADsigninsErrorCodes. |
| IPAddress | string | IP address assigned to the endpoint and used during related network communications |
| IsManagedIdentity | boolean | Indicates whether the sign-in was initiated by a managed identity |
| Latitude | string | The north to south coordinates of the sign-in location |
| Longitude | string | The east to west coordinates of the sign-in location |
| ReportId | string | Unique identifier for the event |
| RequestId | string | Unique identifier of the request |
| ResourceDisplayName | string | Display name of the resource accessed. The display name can contain any character. |
| ResourceId | string | Unique identifier of the resource accessed |
| ResourceTenantId | string | Unique identifier of the tenant of the resource accessed |
| ServicePrincipalId | string | Unique identifier of the service principal that initiated the sign-in |
| ServicePrincipalName | string | Name of the service principal that initiated the sign-in |
| State | string | State where the sign-in occurred, if available |
| Timestamp | datetime | Date and time when the record was generated |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

