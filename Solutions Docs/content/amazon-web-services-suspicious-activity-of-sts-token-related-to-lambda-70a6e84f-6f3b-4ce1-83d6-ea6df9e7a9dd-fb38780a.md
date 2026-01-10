# Suspicious activity of STS token related to Lambda

Suspicious activity of the STS token of a Lambda function (for example, by SSRF) indicates a possible token hijacking. An attacker may have stolen the token and could abuse its permissions to escalate privileges and move laterally in the cloud account.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `70a6e84f-6f3b-4ce1-83d6-ea6df9e7a9dd` |
| **Severity** | High |
| **Tactics** | Credential Access |
| **Techniques** | T1528 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_STStoLambda.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Amazon Web Services](../solutions/amazon-web-services.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

