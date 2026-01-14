# Suspicious AWS CLI Command Execution

This detection focuses on identifying potentially suspicious activities involving the execution of AWS Command Line Interface (CLI) commands, particularly focusing on reconnaissance operations.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `8c2dc344-9352-4ca1-8863-b1b7a5e09e59` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance |
| **Techniques** | T1595, T1592.004, T1589.002, T1589.003, T1590, T1591, T1596 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Analytic%20Rules/SuspiciousAWSCLICommandExecution.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Amazon Web Services](../solutions/amazon-web-services.md)

