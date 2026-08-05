# ⚠️ Netskope Alerts & Events (via Log Streaming)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Netskope.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `NetskopeAlertEventsConnector` |
| **Publisher** | Netskope |
| **Used in Solutions** | [NetskopeAlertEvents](../solutions/netskopealertevents.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [NetskopeAlertEvents_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeAlertEvents/Data%20Connectors/NetskopeAlertEvents_CCF/NetskopeAlertEvents_connectorDefinition.json) |
| **DCR Definition Files** | [NetskopeAlertEvents_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeAlertEvents/Data%20Connectors/NetskopeAlertEvents_CCF/NetskopeAlertEvents_DCR.json) |
| **CCF Configuration** | [NetskopeAlertEvents_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeAlertEvents/Data%20Connectors/NetskopeAlertEvents_CCF/NetskopeAlertEvents_PollingConfig.json) |
| **CCF Capabilities** | `StorageAccountBlobContainer`, `ServicePrincipal` |

The Netskope Alerts & Events data connector enables ingestion of alert and event logs from Netskope into Microsoft Sentinel using Netskope Log Streaming (NLS) capability. Alerts & Events logs provide visibility into DLP incidents, malware and threat detections, policy violations, anomalous behavior, compromised credentials, and application activity across the Netskope Security Cloud.



This connector uses Azure Blob Storage and Event Grid to ingest the gzip-compressed CSV logs that Netskope streams to your storage account. The logs are mapped to columns positionally, so the Netskope Log Streaming configuration must use the matching field order.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeAlertEvents_CL`](../tables/netskopealertevents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required.

**Custom Permissions:**
- **Subscription permissions**: You need permissions to create the data flow resources:
- Storage queues (notification queue and dead-letter queue)
- Event Grid topic and subscription (to send 'blob created event' notifications)
- Role assignments (to grant access for Microsoft Sentinel app to the blob container and storage queues)
- **Netskope Log Streaming Configuration**: Configure Netskope Log Streaming (NLS) to send Alerts & Events logs to your Azure Blob Storage container. Follow the [Netskope NLS documentation](https://docs.netskope.com/en/netskope-help/data-security/netskope-log-streaming/) for setup instructions.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Netskope Alerts & Events Logs to Microsoft Sentinel**

To enable the Netskope Alerts & Events Logs for Microsoft Sentinel, provide the required information below and click on Connect.

**Prerequisites:**
1. Configure Netskope NLS to send Alerts & Events logs to an Azure Blob Storage container
2. Ensure you have the required permissions on the storage account
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `ServicePrincipalIDTextBox_test`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.
- **Blob Container URL**
- **Blob Folder Name (Optional)**: Leave empty if logs are at container root
- **Storage Account Location**: e.g., eastus
- **Storage Account Resource Group Name**
- **Storage Account Subscription ID**
- **Event Grid Topic Name (if exists)**: Leave empty to create new topic
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

