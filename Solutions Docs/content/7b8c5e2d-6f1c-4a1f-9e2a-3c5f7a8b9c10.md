# AWS Security Hub - Detect SQS Queue lacking encryption at rest

This query detects Amazon SQS queues without server-side encryption at rest enabled, using AWS Security Hub control SQS.1 findings. Lack of encryption for SQS queues can expose sensitive message contents if underlying storage or backups are accessed by unauthorized parties.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AWS Security Hub](../solutions/aws-security-hub.md) |
| **ID** | `7b8c5e2d-6f1c-4a1f-9e2a-3c5f7a8b9c10` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1565.001 |
| **Required Connectors** | [AWSSecurityHub](../connectors/awssecurityhub.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub/Analytic%20Rules/SQSQueueNotEncrypted.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to AWS Security Hub](../solutions/aws-security-hub.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
