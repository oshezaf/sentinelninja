# Changes to Amazon VPC settings

'Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. This identifies changes to Amazon VPC (Virtual Private Cloud) settings such as new ACL entries,routes, routetable or Gateways. More information: https://medium.com/@GorillaStack/the-most-important-aws-cloudtrail-security-events-to-track-a5b9873f8255  and AWS VPC API Docs: https://docs.aws.amazon.com/AWSEC2/latest/APIR

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `65360bb0-8986-4ade-a89d-af3cf44d28aa` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation, LateralMovement |
| **Techniques** | T1078, T1563 |
| **Required Connectors** | [AWS](../connectors/aws.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Analytic%20Rules/AWS_ChangeToVPC.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Amazon Web Services](../solutions/amazon-web-services.md)

