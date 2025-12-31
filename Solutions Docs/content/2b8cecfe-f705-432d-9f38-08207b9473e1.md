# IAM assume role policy brute force

Several failed "assume role" attempts occurred on existing roles in the account. This could be an attacker trying to escalate privileges and move laterally by assuming roles in a compromised account. Verify with the user identity that the activity is legitimate.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `2b8cecfe-f705-432d-9f38-08207b9473e1` |
| **Severity** | High |
| **Tactics** | Credential Access |
| **Techniques** | T1110 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_AssumeRoleBruteForce.yaml) |

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
