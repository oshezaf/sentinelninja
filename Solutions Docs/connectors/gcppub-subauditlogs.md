# 🔍 GCP Pub/Sub Audit Logs

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/logo/Google-Cloud-Branding.png" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GCPPub/SubAuditLogs` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [GCPAuditLogs.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/Data%20Connectors/GCPAuditLogs.json) |

The Google Cloud Platform (GCP) audit logs, ingested from Sentinel's connector, enable you to capture three types of audit logs: admin activity logs, data access logs, and access transparency logs. Google cloud audit logs record a trail that practitioners can use to monitor access and detect potential threats across Google Cloud Platform (GCP) resources.

## Additional Information

📖 **Setup Guide:** [Google Cloud Platform connectors](https://learn.microsoft.com/azure/sentinel/connect-google-cloud-platform) - Connect GCP logs to Microsoft Sentinel

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

#### 1. Set up your GCP environment 
 You must have the following GCP resources defined and configured: topic, subscription for the topic, workload identity pool, workload identity provider and service account with permissions to get and consume from subscription. 
 Terraform provides API for the IAM that creates the resources. [Link to Terraform scripts](https://github.com/Azure/Azure-Sentinel/tree/master/DataConnectors/GCP/Terraform/sentinel_resources_creation).

**Government Cloud:**
#### 1. Set up your GCP environment 
 You must have the following GCP resources defined and configured: topic, subscription for the topic, workload identity pool, workload identity provider and service account with permissions to get and consume from subscription. 
 Terraform provides API for the IAM that creates the resources. [Link to Gov Terraform scripts](https://github.com/Azure/Azure-Sentinel/tree/master/DataConnectors/GCP/Terraform/sentinel_resources_creation_gov).
- **Tenant ID: A unique identifier that is used as an input in the Terraform configuration within a GCP environment.**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
#### 2. Connect new collectors 
 To enable GCP Audit Logs for Microsoft Sentinel, click the Add new collector button, fill the required information in the context pane and click on Connect.
**GCP Collector Management**

📊 **View GCP Collectors**: A management interface displays your configured Google Cloud Platform data collectors.

➕ **Add New Collector**: Click "Add new collector" to configure a new GCP data connection.

> 💡 **Portal-Only Feature**: This configuration interface is only available in the Microsoft Sentinel portal.

**GCP Connection Configuration**

When you click "Add new collector" in the portal, you'll be prompted to provide:
- **Project ID**: Your Google Cloud Platform project ID
- **Service Account**: GCP service account credentials with appropriate permissions
- **Subscription**: The Pub/Sub subscription to monitor for log data

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

