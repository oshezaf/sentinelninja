# Suspicious activity of STS token related to EC2

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Suspicious activity of the STS token of an EC2 machine hosted by ECS (for example, by SSRF) indicates a possible token hijacking. An attacker may have stolen the token and could abuse its permissions to escalate privileges and move laterally in the cloud account.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `82ecf967-d6e9-4757-8f5d-42c562a8f05f` |
| **Severity** | High |
| **Tactics** | Credential Access |
| **Techniques** | T1528 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_STStoEC2.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Amazon Web Services](../solutions/amazon-web-services.md)

