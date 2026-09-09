# DatadogLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (37 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datadog%5CData%20Connectors%5CDatadogConnector/table_DatadogLogs.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Attributes | dynamic | Full attributes object of the Datadog log event |
| AwsAccountId | string | AWS account identifier associated with the log |
| AwsDetails | dynamic | AWS metadata associated with the log event |
| AwsInvokedFunctionArn | string | ARN of the AWS Lambda function invoked by the integration |
| AwsLogGroup | string | AWS CloudWatch log group |
| AwsLogStream | string | AWS CloudWatch log stream |
| AwsS3Bucket | string | S3 bucket containing the source log |
| AwsS3Key | string | S3 object key containing the source log |
| BytesWritten | long | Number of bytes written during the network flow |
| ClientIp | string | Source IP address of the network flow |
| ClientPort | long | Source port of the network flow |
| DestinationIp | string | Destination IP address of the network flow |
| DestinationPort | long | Destination port of the network flow |
| EventId | string | Unique identifier of the Datadog log event |
| EventTimestamp | string | Timestamp reported by Datadog for the log event |
| EventType | string | Resource type of the event (always 'log') |
| Host | string | Host that generated the log event |
| LambdaArn | string | ARN of the AWS Lambda function that generated the log |
| Level | string | Source-specific log level |
| LogAttributeId | string | Source-specific identifier in the log attributes |
| LogAttributes | dynamic | Custom attributes associated with the Datadog log event |
| LogAttributeTimestamp | datetime | Source timestamp from the log attributes |
| Message | string | Log message |
| NetworkDetails | dynamic | Network metadata associated with the log event |
| NetworkInterface | string | AWS network interface associated with the flow |
| NetworkProtocol | string | IP protocol number of the network flow |
| PacketCount | long | Number of packets in the network flow |
| Service | string | Application or service that generated the log event |
| Status | string | Status or severity associated with the log event |
| Tags | dynamic | Tags associated with the log event |
| TimeGenerated | datetime |  |
| VpcAction | string | Action applied to the VPC network flow |
| VpcDetails | dynamic | Amazon VPC flow metadata |
| VpcIntervalEnd | datetime | End time of the VPC flow interval |
| VpcIntervalStart | datetime | Start time of the VPC flow interval |
| VpcStatus | string | Status of the VPC flow log record |
| VpcVersion | long | Version of the VPC flow log format |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Datadog](../solutions/datadog.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Datadog Logs (via Codeless Connector Framework)](../connectors/datadogconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

