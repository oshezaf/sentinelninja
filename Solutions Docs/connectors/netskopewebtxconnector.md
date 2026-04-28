# Netskope Web Transaction Connector (via Blob Storage)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/netskope.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `NetskopeWebTxConnector` |
| **Publisher** | Netskope |
| **Used in Solutions** | [NetskopeWebTx](../solutions/netskopewebtx.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [NetskopeWebtx_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeWebTx/Data%20Connectors/NetskopeWebTx_CCF/NetskopeWebtx_connectorDefinition.json) |
| **CCF Configuration** | [NetskopeWebtx_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeWebTx/Data%20Connectors/NetskopeWebTx_CCF/NetskopeWebtx_PollingConfig.json) |
| **CCF Capabilities** | `StorageAccountBlobContainer`, `ServicePrincipal` |

The Netskope Web Transaction connector ingests web transaction logs from Netskope Log Streaming into Microsoft Sentinel via Azure Blob Storage using the Codeless Connector Framework (CCF).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key)

**Custom Permissions:**
- **Subscription permissions**: You need permissions to create the data flow resources: 
- storage queues (notification queue and dead-letter queue) 
- event grid topic and subscription (to send 'blob created event' notifications to the notification queue) 
- role assignments (to grant access for Microsoft Sentinel app to the blob container and the storage queues.)
- **Storage Account Network Configuration**: Network restrictions (firewall/IP rules) on the Azure Blob Storage account are **not supported** for this connector due to [Azure Storage firewall restrictions and limitations](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security-limitations):
- IP network rules have**no effect**on requests originating from the same Azure region as the storage account.
- IP network rules**cannot restrict**access to Azure services deployed in the same region, as these services use private Azure IP addresses for communication.
- Virtual network service endpoint rules do not apply to clients in a paired region.

Ensure the storage account's **Networking** blade is set to **Enabled from all networks**.
- **Storage Account Role Assignments**: The following Azure RBAC roles must be assigned to the Microsoft Sentinel enterprise application service principal (displayed below) on the **Storage Account** that contains your blob container:
- **Storage Blob Data Contributor** — required for reading blob data from the container.
- **Storage Queue Data Contributor** — required for managing notification and dead-letter queue messages.

To assign these roles: navigate to the Storage Account → **Access Control (IAM)** → **Add role assignment**, search for the service principal ID shown below, and assign both roles.
- **Collecting data from Netskope to your blob container**: Follow the steps in the [Netskope Log Streaming documentation](https://docs.netskope.com/en/log-streaming.html) to configure Netskope to stream Web Transaction logs to your Azure Blob Storage container.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Netskope WebTx Logs to Microsoft Sentinel**

To enable the Netskope WebTx Logs for Microsoft Sentinel, provide the required information below and click on Connect.
>
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `ServicePrincipalIDTextBox_test`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.
- **The blob container URL you want to collect data from**
- **The blobs folder name in the container. Optional.**
- **The blob container's storage account location**
- **The blob container's storage account resource group name**
- **The blob container's storage account subscription id**
- **The event grid topic name of the blob container's storage account if exist. else keep empty.**
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

