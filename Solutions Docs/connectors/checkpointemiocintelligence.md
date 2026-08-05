# ⚠️ Check Point EM ThreatCloud Intelligence Feed Connector

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CheckPointEMIOCIntelligence` |
| **Publisher** | Check Point |
| **Used in Solutions** | [Check Point EM ThreatCloud Intelligence Feed](../solutions/check-point-em-threatcloud-intelligence-feed.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CPEMIOCIntelligenceLogs_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20EM%20ThreatCloud%20Intelligence%20Feed/Data%20Connectors/CPEMIOCIntelligenceLogs_ccp/CPEMIOCIntelligenceLogs_connectorDefinition.json) |
| **DCR Definition Files** | [CPEMIOCIntelligenceLogs_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20EM%20ThreatCloud%20Intelligence%20Feed/Data%20Connectors/CPEMIOCIntelligenceLogs_ccp/CPEMIOCIntelligenceLogs_DCR.json) |
| **CCF Configuration** | [CPEMIOCIntelligenceLogs_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20EM%20ThreatCloud%20Intelligence%20Feed/Data%20Connectors/CPEMIOCIntelligenceLogs_ccp/CPEMIOCIntelligenceLogs_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `POST` |

Check Point provides a Microsoft Sentinel integration to ingest high-fidelity Indicators of Compromise (IoCs) from the Infinity External Risk Management solution into Microsoft Sentinel. This connector incrementally pulls the premium IOC feed — including malicious IPs, domains, URLs, and file hashes — enriched with confidence, severity, malicious classification, kill chain stage, blocking and uniqueness flags, malware types, and CVE/campaign associations.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`emiocintel_CL`](../tables/emiocintel-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read/Write/Delete permissions are required.

**Custom Permissions:**
- **Check Point Cyberint API Key, Argos URL, and Customer Name**: The connector API key, Argos URL, and Customer Name are required

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Check Point EM ThreatCloud Intelligence Feed to Microsoft Sentinel**

To enable the connector provide the required information below and click on Connect.

**Argos URL** — Cyberint API URL for your tenant (e.g. `https://your_tenant.cyberint.io`)

**API Token** — Cyberint API access token

**Customer Name** — Company (client) name associated with your Cyberint instance
- **Argos URL**: https://your-company.cyberint.io
- **API Token**: (password field)
- **Customer Name**: Company (client) name associated with your Cyberint instance
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

