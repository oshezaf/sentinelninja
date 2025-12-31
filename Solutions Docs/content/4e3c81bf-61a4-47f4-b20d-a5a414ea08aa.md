# CreateLoginProfile detected

An attacker could use CreateLoginProfile permissions on other users for privilege escalation by creating a password to a victim user without a login profile to use to login to the AWS Console.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `4e3c81bf-61a4-47f4-b20d-a5a414ea08aa` |
| **Severity** | Low |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_CreateLoginProfile.yaml) |

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
