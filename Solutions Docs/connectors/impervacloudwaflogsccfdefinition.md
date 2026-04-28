# Imperva Cloud WAF (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Imperva_DarkGrey_final_75x75.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ImpervaCloudWAFLogsCCFDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [ImpervaCloudWAF](../solutions/impervacloudwaf.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ImpervaCloudWAFLogs_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF/Data%20Connectors/ImpervaCloudWAFLogs_ccf/ImpervaCloudWAFLogs_ConnectorDefinition.json) |
| **CCF Configuration** | [ImpervaCloudWAFLogs_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF/Data%20Connectors/ImpervaCloudWAFLogs_ccf/ImpervaCloudWAFLogs_PollingConfig.json) |
| **CCF Capabilities** | `AmazonWebServicesS3` |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The Imperva WAF Cloud data connector provides the capability to ingest logs into Microsoft Sentinel using the Imperva Log Integration via AWS S3 with SQS notifications. The connector parses CEF-formatted WAF events including access logs and security alerts for threat detection and investigation.Refer to [Imperva WAF Cloud Log Integration](https://docs.imperva.com/bundle/cloud-application-security/page/settings/log-integration.htm) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md) | ? | ✓ | ? |
| [`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) 🔶 | ? | ✓ | ? |
| [`SentinelImpervaWAFCloudV2Logs`](../tables/sentinelimpervawafcloudv2logs.md) | ✓ | ✗ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Imperva WAF Cloud to Microsoft Sentinel**
>**NOTE:** This connector fetches the Imperva Cloud WAF logs from AWS S3 bucket
To gather data from Imperva, you need to configure the following resources
#### 1. AWS Role ARN 
 To gather data from Imperva, you'll need AWS Role ARN.
#### 2. AWS SQS Queue URL 
 To gather data from Imperva, you'll need AWS SQS Queue URL.


For detailed steps to retrieve the AWS Role ARN, SQS Queue URL, and configure Imperva log forwarding to the Amazon S3 bucket, refer to the [Connector Setup Guide](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF/Data%20Connectors/Readme.md).
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **AWS Role ARN**
- **AWS SQS Queue URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Account**

*Add Account*

When you click the "Add Account" button in the portal, a configuration form will open. You'll need to provide:

- **Role ARN** (optional): Enter Role ARN
- **Queue URL** (optional): Enter SQL Queue URL

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

