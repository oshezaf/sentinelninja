# Check Point Cyberint Alerts Connector (via Codeless Connector Platform)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CheckPointCyberintAlerts` |
| **Publisher** | Checkpoint Cyberint |
| **Used in Solutions** | [Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CyberintArgosAlertsLogs_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/Data%20Connectors/CyberintArgosAlertsLogs_ccp/CyberintArgosAlertsLogs_connectorDefinition.json) |
| **CCF Configuration** | [CyberintArgosAlertsLogs_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/Data%20Connectors/CyberintArgosAlertsLogs_ccp/CyberintArgosAlertsLogs_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `POST` |

Cyberint, a Check Point company, provides a Microsoft Sentinel integration to streamline critical Alerts and bring enriched threat intelligence from the Infinity External Risk Management solution into Microsoft Sentinel. This simplifies the process of tracking the status of tickets with automatic sync updates across systems. Using this new integration for Microsoft Sentinel, existing Cyberint and Microsoft Sentinel customers can easily pull logs based on Cyberint's findings into Microsoft Sentinel platform.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`argsentdc_CL`](../tables/argsentdc-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Check Point Cyberint API Key, Argos URL, Customer Name**: The connector API key, Argos URL, and Customer Name are required. Include CSV Attachments as JSON is optional.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Checkpoint Cyberint Alerts to Microsoft Sentinel**

To enable the connector provide the required information below and click on Connect.

**Argos URL** — Cyberint API URL for your tenant (e.g. `https://your_tenant.cyberint.io`)

**API Token** — Cyberint API access token

**Customer Name** — Company (client) name associated with your Cyberint instance

**Severity** — Comma-separated list of severities to fetch (low, medium, high, very_high). If empty, all severities are fetched.

**Environments** — Comma-separated list of environments to fetch (e.g. Production,Staging). If empty, all environments are fetched.

**Polling Interval** — How often to poll for new alerts, in minutes (default: 5)

**Include CSV Attachments as JSON** — Whether to include CSV attachments as JSON content in alerts (default: false)
>
- **Argos URL**: https://your_tenant.cyberint.io
- **API Token**: (password field)
- **Customer Name**: Company (client) name associated with your Cyberint instance
- **Severity**: Comma-separated list (e.g. low,medium,high,very_high)
- **Environments**: Comma-separated list
- **Polling Interval (Minutes)**: Polling frequency in minutes
- **Include CSV Attachments as JSON**: true or false
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

