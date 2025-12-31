# Suspicious activity of STS token related to Glue

Suspicious activity of the STS token of a Glue endpoint machine hosted by ECS (for example, by SSRF) indicates a possible token hijacking. An attacker may have stolen the token and could abuse its permissions to escalate privileges and move laterally in the cloud account.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `0cd3eb95-6c8e-4eeb-8338-a0decdc0a328` |
| **Severity** | High |
| **Tactics** | Credential Access |
| **Techniques** | T1528 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_STStoGlue.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Amazon Web Services](../solutions/amazon-web-services.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
