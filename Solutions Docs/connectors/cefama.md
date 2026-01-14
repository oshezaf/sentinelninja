# 🔍 Common Event Format (CEF) via AMA

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CefAma` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Common Event Format](../solutions/common-event-format.md) |
| **Collection Method** | AMA |
| **Connector Definition Files** | [CEF%20AMA.JSON](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Common%20Event%20Format/Data%20Connectors/CEF%20AMA.JSON) |

## Additional Information

📖 **Related Documentation:** [CEF and CommonSecurityLog field mapping](https://learn.microsoft.com/azure/sentinel/cef-name-mapping) - Maps CEF field names to CommonSecurityLog column names

Common Event Format (CEF) is an industry standard format on top of Syslog messages, used by many security vendors to allow event interoperability among different platforms. By connecting your CEF logs to Microsoft Sentinel, you can take advantage of search & correlation, alerting, and threat intelligence enrichment for each log. For more information, see the [Microsoft Sentinel documentation](https://go.microsoft.com/fwlink/p/?linkid=2223547&wt.mc_id=sentinel_dataconnectordocs_content_cnl_csasci).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Supports Transformations | Ingestion API Supported |
|-------|:------------------------:|:-----------------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace data sources** (Workspace): read and write permissions.

**Custom Permissions:**

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Enable data collection rule​**

>  CEF Events logs are collected only from **Linux** agents.
- Configure CefAma data connector

- **Create data collection rule**

**2. Run the following command to install and apply the CEF collector:**

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

