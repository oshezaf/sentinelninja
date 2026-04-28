# Zero Networks Segment Audit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ZeroNetworks.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ZNSegmentAuditCCPDefinition` |
| **Publisher** | Zero Networks |
| **Used in Solutions** | [ZeroNetworks](../solutions/zeronetworks.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ZNSegmentAudit_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks/Data%20Connectors/ZNSegmentAudit_CCP_Pull/ZNSegmentAudit_ConnectorDefinition.json) |
| **CCF Configuration** | [ZNSegmentAudit_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks/Data%20Connectors/ZNSegmentAudit_CCP_Pull/ZNSegmentAudit_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

The [Zero Networks Segment](https://zeronetworks.com/) Audit data connector provides the capability to ingest Zero Networks Audit events into Microsoft Sentinel through the REST API. This data connector uses Microsoft Sentinel native polling capability.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key)

**Custom Permissions:**
- **Zero Networks API Token**: **ZeroNetworksAPIToken** is required for REST API. See the API Guide and follow the instructions for obtaining credentials.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Zero Networks to Microsoft Sentinel**

Enter the Zero Networks API URL (e.g. portal.zeronetworks.com). The connector adds https:// and /api/v1/audit automatically. Then provide your API key and click Connect.
- **Zero Networks API URL**: portal.zeronetworks.com
- **ApiKey**: (password field)
- Click 'Connect' to establish connection
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Zero Networks Segment Audit API Endpoint**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

