# AWSALBAccessLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (32 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/AWSALBAccessLogs_CL.json)

| Column Name | Type |
|:------------|:-----|
| ActionsExecuted | string |
| Alb | string |
| ALBType | string |
| ChosenCertArn | string |
| Classification | string |
| ClassificationReason | string |
| ClientIp | string |
| ClientPort | int |
| ConnTraceId | string |
| DomainName | string |
| ElbStatusCode | int |
| LambdaErrorReason | string |
| MatchedRulePriority | string |
| ReceivedBytes | long |
| RedirectUrl | string |
| RequestCreationTime | string |
| RequestProcessingTime | string |
| RequestRaw | string |
| ResponseProcessingTime | string |
| SentBytes | long |
| SslCipher | string |
| SslProtocol | string |
| TargetGroupArn | string |
| TargetIp | string |
| TargetPort | int |
| TargetPortList | string |
| TargetProcessingTime | string |
| TargetStatusCode | string |
| TargetStatusCodeList | string |
| TimeGenerated | datetime |
| TraceId | string |
| UserAgent | string |

## Solutions (1)

This table is used by the following solutions:

- [AWS ELB](../solutions/aws-elb.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Amazon Web Services Elastic Load Balancing (via Codeless Connector Framework)](../connectors/awselbconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AWSALBAccessLogsData](../parsers/awsalbaccesslogsdata.md) | [AWS ELB](../solutions/aws-elb.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

