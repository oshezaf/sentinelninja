# Egress Defend v2

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Egress-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `EgressDefendAudit` |
| **Publisher** | Egress Software Technologies |
| **Used in Solutions** | [Egress Defend](../solutions/egress-defend.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [EgressDefendAudit_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Defend/Data%20Connectors/EgressDefendAuditLogs_ccp/EgressDefendAudit_ConnectorDefinition.json) |
| **DCR Definition Files** | [EgressDefendAudit_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Defend/Data%20Connectors/EgressDefendAuditLogs_ccp/EgressDefendAudit_DCR.json) |
| **CCF Configuration** | [EgressDefendAudit_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Defend/Data%20Connectors/EgressDefendAuditLogs_ccp/EgressDefendAudit_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#egress-defend-v2) |

The Egress Defend audit connector ingests Egress Defend audit data into Microsoft Sentinel via the Logs Ingestion API (DCR-based). It pulls from the Egress Defend `V1/events` API and lands events in the `EgressDefend_v4_CL` table.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`EgressDefend_v4_CL`](../tables/egressdefend-v4-cl.md) 🔶 | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions on the Log Analytics workspace are required to enable the data connector.

**Custom Permissions:**
- **Egress Defend API access**: An Egress Defend API URL, customer domain and API key are required to ingest audit records into Microsoft Sentinel.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Egress Defend to Microsoft Sentinel**

Enter your Egress Defend API URL, Egress domain and API key, then click Connect.
- **API URL**
- **Domain name**
- **API Key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

