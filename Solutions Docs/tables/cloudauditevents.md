# CloudAuditEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Cloud audit events for various cloud platforms protected by the organization's Microsoft Defender for Cloud

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-cloudauditevents-table) |

## Schema (14 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudauditevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ActionType | string | Type of activity that triggered the event, can be: Unknown, Create, Read, Update, Delete, Other |
| AdditionalFields | dynamic | Additional information about the audit event |
| City | string | City where the client IP address is geolocated |
| CountryCode | string | Two-letter code indicating the country where the client IP address is geolocated |
| DataSource | string | Data source for the cloud audit events, can be GCP (for Google Cloud Platform), AWS (for Amazon Web Services), Azure (for Azure Resource Manager), Kubernetes Audit (for Kubernetes), or other cloud platforms |
| IPAddress | string | The client IP address used to access the cloud resource or control plane |
| IsAnonymousProxy | boolean | Indicates whether the IP address belongs to a known anonymous proxy (1) or no (0) |
| Isp | string | Internet service provider (ISP) associated with the IP address |
| OperationName | string | Audit event operation name as it appears in the record, usually includes both resource type and operation |
| RawEventData | dynamic | Full raw event information from the data source in JSON format |
| ReportId | string | Unique identifier for the event |
| ResourceId | string | Unique identifier of the cloud resource accessed |
| Timestamp | datetime | Date and time when the event was recorded |
| UserAgent | string | User agent information from the web browser or other client application |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

