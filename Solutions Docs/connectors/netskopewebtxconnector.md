# Netskope Web Transactions (via Blob Storage)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/netskope.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `NetskopeWebTxConnector` |
| **Publisher** | Netskope |
| **Used in Solutions** | [NetskopeWebTx](../solutions/netskopewebtx.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [NetskopeWebtx_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeWebTx/Data%20Connectors/NetskopeWebTx_CCF/NetskopeWebtx_connectorDefinition.json) |
| **DCR Definition Files** | [NetskopeWebtx_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeWebTx/Data%20Connectors/NetskopeWebTx_CCF/NetskopeWebtx_DCR.json) |
| **CCF Configuration** | [NetskopeWebtx_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeWebTx/Data%20Connectors/NetskopeWebTx_CCF/NetskopeWebtx_PollingConfig.json) |
| **CCF Capabilities** | `StorageAccountBlobContainer`, `ServicePrincipal` |

The Netskope Web Transactions data connector enables ingestion of web transaction logs from Netskope into Microsoft Sentinel using Netskope Log Streaming (NLS) capability. Web transaction logs provide detailed visibility into all web traffic processed by Netskope, including user activity, application usage, URL categories, policy actions, and network metadata.



This connector uses Azure Blob Storage and Event Grid to ingest logs that Netskope streams to your storage account.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) | ✓ | ✓ | ✓ |

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
- **Netskope Log Streaming Configuration**: Configure Netskope Log Streaming (NLS) to send Web Transaction logs to your Azure Blob Storage container. Follow the [Netskope NLS documentation](https://docs.netskope.com/en/log-streaming) for setup instructions.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Netskope Web Transaction Logs to Microsoft Sentinel**

To enable the Netskope Web Transactions Logs for Microsoft Sentinel, provide the required information below and click on Connect.

**Prerequisites:**
1. Configure Netskope NLS to send Web Transaction logs to an Azure Blob Storage container
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

