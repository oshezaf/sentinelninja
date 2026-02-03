# Windows Security Events via AMA

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `WindowsSecurityEvents` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Windows Security Events](../solutions/windows-security-events.md) |
| **Collection Method** | [AMA](../methods/ama.md) |
| **Connector Definition Files** | [template_WindowsSecurityEvents.JSON](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events/Data%20Connectors/template_WindowsSecurityEvents.JSON) |

You can stream all security events from the Windows machines connected to your Microsoft Sentinel workspace using the Windows agent. This connection enables you to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization’s network and improves your security operation capabilities. For more information, see the [Microsoft Sentinel documentation](https://go.microsoft.com/fwlink/p/?linkid=2220225&wt.mc_id=sentinel_dataconnectordocs_content_cnl_csasci).

## Additional Information

- 📖 **Related Documentation:** [Windows security event sets reference](https://learn.microsoft.com/azure/sentinel/windows-security-event-id-reference) - Lists Windows security event IDs for Minimal, Common, and All event sets
- 📖 **Setup Guide:** [Windows security events via AMA](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#windows-security-events-via-ama) - Collect Windows security events using Azure Monitor Agent

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SecurityEvent`](../tables/securityevent.md) | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace data sources** (Workspace): read and write permissions.

**Custom Permissions:**

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Enable data collection rule​**

>  Security Events logs are collected only from **Windows** agents.
- Configure WindowsSecurityEvents data connector

- **Create data collection rule**

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

