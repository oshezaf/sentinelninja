# Amazon Web Services Elastic Load Balancing (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Aws.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AWSELBConnector` |
| **Publisher** | Amazon Web Services |
| **Used in Solutions** | [AWS ELB](../solutions/aws-elb.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [AWSELBConnector_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20ELB/Data%20Connectors/AWSELBConnector_CCF/AWSELBConnector_ConnectorDefinition.json) |
| **CCF Configuration** | [AWSELBConnector_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20ELB/Data%20Connectors/AWSELBConnector_CCF/AWSELBConnector_PollingConfig.json) |
| **CCF Capabilities** | `AmazonWebServicesS3` |

The AWS Elastic Load Balancing (ELB) connector for Microsoft Sentinel allows you to ingest access logs and flow logs from AWS Application Load Balancers (ALB), Network Load Balancers (NLB), and Gateway Load Balancers (GLB) into Microsoft Sentinel. These logs provide detailed information about requests processed by your load balancers and VPC traffic flows, enabling security monitoring, threat detection, and traffic analysis.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AWSALBAccessLogs`](../tables/awsalbaccesslogs.md) | ✓ | ✓ | ? |
| [`AWSALBAccessLogs_CL`](../tables/awsalbaccesslogs-cl.md) | ? | ✓ | ? |
| [`AWSELBFlowLogs`](../tables/awselbflowlogs.md) | ✓ | ✓ | ? |
| [`AWSELBFlowLogs_CL`](../tables/awselbflowlogs-cl.md) | ? | ✓ | ? |
| [`AWSNLBAccessLogs`](../tables/awsnlbaccesslogs.md) | ✓ | ✓ | ? |
| [`AWSNLBAccessLogs_CL`](../tables/awsnlbaccesslogs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **AWS IAM Role ARN and SQS Queue**: An **AWS IAM Role ARN** with cross-account access and an **SQS Queue URL** configured for S3 event notifications are required. See [AWS ELB connector documentation](https://learn.microsoft.com/en-us/azure/sentinel/connect-aws) for setup instructions.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

### 1. AWS CloudFormation Deployment 
 To configure access on AWS, use CloudFormation templates to set up the environment to send logs from ALB, NLB and GLB to your Log Analytics Workspace.
#### Deployment steps: 
1. Go to the [Cloud Formation Templates](https://github.com/Azure/Azure-Sentinel/tree/master/Solutions/AWS%20ELB/Data%20Connectors/CloudFormationTemplates), download the JSON template files. 
2. Go to [AWS CloudFormation Stacks](https://aka.ms/awsCloudFormationLink#/stacks/create). 
3. First deploy the **OIDCWebIdProvider.json** template (skip if you already have an OIDC provider for Microsoft Sentinel). 
4. Then deploy the **AWSS3ELB.json** template with your parameters. 
5. Note down the following values from the stack outputs: 
   - `IAMRoleArn` 
   - `ALBSQSQueueURL` 
   - `NLBSQSQueueURL` 
   - `NLBFlowLogsSQSQueueURL` 
   - `GLBFlowLogsSQSQueueURL` 

#### Post-deployment Configuration: 
Once the CloudFormation stack is successfully deployed: 
- Go to the **Resources** tab in the stack. 
- Locate the created **S3 bucket name**. 
- In the S3 bucket, manually create the following folders: 
  - `ALBLogs` 
  - `NLBAccessLogs` 
  - `NLBFlowLogs` 
  - `GLBFlowLogs` 

#### Sending Logs: 
After folder creation, configure your AWS services to send logs to the appropriate folders: 
- ALB access logs -> `ALBLogs/` 
- NLB access logs -> `NLBAccessLogs/` 
- NLB flow logs -> `NLBFlowLogs/` 
- GLB flow logs -> `GLBFlowLogs/` 

These logs will be ingested into the corresponding tables in your Log Analytics Workspace. 

#### Table Mapping: 
- ALB access logs -> `AWSALBAccessLogsData` 
- NLB access logs -> `AWSNLBAccessLogsData` 
- NLB and GLB flow logs -> `AWSELBFlowLogsData` 

> **Note:** 
In the `AWSELBFlowLogsData` table, a column named `LogType` will indicate whether a row is from **NLB flow logs** or **GLB flow logs**.
### 2. Connect new collectors 
 To enable the connector, click **Add new collector**, enter the required details, and click **Connect**.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Role ARN**
- **Queue URL**
- **Stream**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add new collector**

*AWS S3 connector*

When you click the "Add new collector" button in the portal, a configuration form will open. You'll need to provide:

*Account details*

- **Role ARN** (required): arn:aws:iam::123456789012:role/SentinelELBRole
- **Queue URL** (required): https://sqs.us-east-1.amazonaws.com/123456789012/my-elb-queue
- **Data type** (required): Select from available options
  - ALB Access Logs
  - NLB Access Logs
  - NLB Flow Logs
  - GLB Flow Logs

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

