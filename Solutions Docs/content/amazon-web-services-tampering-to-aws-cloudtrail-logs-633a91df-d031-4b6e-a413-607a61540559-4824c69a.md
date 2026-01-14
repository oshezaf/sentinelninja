# Tampering to AWS CloudTrail logs

'Attackers often try to hide their steps by deleting or stopping the collection of logs that could show their activity.  This alert identifies any manipulation of AWS CloudTrail, Cloudwatch/EventBridge or VPC Flow logs. More Information: AWS CloudTrail API: https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_Operations.html  AWS Cloudwatch/Eventbridge API: https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_Operations.html  AWS DelteteFlowLogs API : https://docs.aws.ama

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `633a91df-d031-4b6e-a413-607a61540559` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1070 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Analytic%20Rules/AWS_LogTampering.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Amazon Web Services](../solutions/amazon-web-services.md)

