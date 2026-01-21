# Cisco ASA/FTD via AMA

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CiscoAsaAma` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [CiscoASA](../solutions/ciscoasa.md) |
| **Collection Method** | AMA |
| **Event Vendor** | Cisco |
| **Connector Definition Files** | [template_CiscoAsaAma.JSON](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoASA/Data%20Connectors/template_CiscoAsaAma.JSON) |

## Additional Information

📖 **Vendor Documentation:** [Cisco ASA Syslog Messages](https://www.cisco.com/c/en/us/td/docs/security/asa/syslog/b_syslog.html) - Complete ASA syslog message reference

The Cisco ASA firewall connector allows you to easily connect your Cisco ASA logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization's network and improves your security operation capabilities.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Event Vendor | Event Product | Transformations | Ingestion API |
|-------|:-------------|:--------------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Cisco | — | ✓ | ✓ |
| [`Heartbeat`](../tables/heartbeat.md) | — | — | ✗ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace data sources** (Workspace): read and write permissions.

**Custom Permissions:**

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Enable data collection rule​**

> Cisco ASA/FTD event logs are collected only from **Linux** agents.
- Configure CiscoAsaAma data connector

- **Create data collection rule**

**2. Run the following command to install and apply the Cisco ASA/FTD collector:**

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

