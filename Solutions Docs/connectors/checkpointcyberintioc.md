# Check Point Cyberint IOC Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CheckPointCyberintIOC` |
| **Publisher** | Checkpoint Cyberint |
| **Used in Solutions** | [Check Point Cyberint IOC](../solutions/check-point-cyberint-ioc.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CyberintArgosIOCLogs_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20IOC/Data%20Connectors/CyberintArgosIOCLogs_ccp/CyberintArgosIOCLogs_connectorDefinition.json) |
| **CCF Configuration** | [CyberintArgosIOCLogs_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20IOC/Data%20Connectors/CyberintArgosIOCLogs_ccp/CyberintArgosIOCLogs_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `POST` |

Cyberint, a Check Point company, provides a Microsoft Sentinel integration to ingest Indicators of Compromise (IOCs) from the Infinity External Risk Management solution into Microsoft Sentinel. This connector automatically pulls the daily IOC feed — including malicious IPs, domains, URLs, and file hashes — enriched with threat context such as severity, confidence, and detected activity.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`iocsent_CL`](../tables/iocsent-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Check Point Cyberint API Key, Argos URL, and Customer Name**: The connector API key, Argos URL, and Customer Name are required

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Check Point Cyberint IOC Feed to Microsoft Sentinel**

To enable the connector provide the required information below and click on Connect.

**Argos URL** — Cyberint API URL for your tenant (e.g. `https://your_tenant.cyberint.io`)

**API Token** — Cyberint API access token

**Customer Name** — Company (client) name associated with your Cyberint instance
>
- **Argos URL**: https://your-company.cyberint.io
- **API Token**: (password field)
- **Customer Name**: Company (client) name associated with your Cyberint instance
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

