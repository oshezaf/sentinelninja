# ⚠️ Amazon Web Services S3 VPC Flow Logs

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Aws.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AWSS3VPCFlowLogsParquetDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [AWS VPC Flow Logs](../solutions/aws-vpc-flow-logs.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [AWSVPCFlowLogs_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20VPC%20Flow%20Logs/Data%20Connectors/AWSVPCFlowLogs_CCP/AWSVPCFlowLogs_DataConnectorDefinition.json) |
| **CCF Configuration** | [AWSVPCFlowLogs_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20VPC%20Flow%20Logs/Data%20Connectors/AWSVPCFlowLogs_CCP/AWSVPCFlowLogs_PollingConfig.json) |
| **CCF Capabilities** | `AmazonWebServicesS3` |

This connector allows you to ingest AWS VPC Flow Logs, collected in AWS S3 buckets, to Microsoft Sentinel. AWS VPC Flow Logs provide visibility into network traffic within your AWS Virtual Private Cloud (VPC), enabling security analysis and network monitoring.

## Additional Information

- 📖 **Setup Guide:** [Connect Microsoft Sentinel to AWS](https://learn.microsoft.com/azure/sentinel/connect-aws-configure-environment) - Configure your AWS environment for Microsoft Sentinel integration
- 📖 **Troubleshooting:** [Troubleshoot AWS S3 connector issues](https://learn.microsoft.com/azure/sentinel/aws-s3-troubleshoot) - Resolve common AWS S3 connector problems

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

#### 1. AWS CloudFormation Deployment 
 To configure access on AWS, two templates have been generated to set up the AWS environment to send VPC Flow Logs from an S3 bucket to your Log Analytics Workspace.
 #### For each template, create a Stack in AWS: 
 1. Go to [AWS CloudFormation Stacks](https://aka.ms/awsCloudFormationLink#/stacks/create). 
 2. Choose the ‘Specify template’ option, then ‘Upload a template file’ by clicking on ‘Choose file’ and selecting the appropriate CloudFormation template file provided below. Click ‘Choose file’ and select the downloaded template. 
 3. Click 'Next' and 'Create stack'.
- **Template 1: OpenID connect authentication deployment**: `Oidc`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Template 2: AWS VPC Flow Logs resources deployment**: `AwsVPCFlow`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
#### 2. Connect new collectors 
 To enable AWS S3 for Microsoft Sentinel, click the 'Add new collector' button, fill in the required information and click on 'Connect'
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Role ARN**
- **Queue URL**
- **File Format**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add new controller**

*AWS VPC Flow Logs connector*

When you click the "Add new collector" button in the portal, a configuration form will open. You'll need to provide:

*Account details*

- **Role ARN** (required)
- **Queue URL** (required)
- **Data type** (required): Select from available options
  - JSON Format
  - Parquet Format
  - CSV Format

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

