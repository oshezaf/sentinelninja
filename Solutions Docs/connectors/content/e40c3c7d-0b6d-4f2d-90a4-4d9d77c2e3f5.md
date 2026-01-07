# AWS Security Hub - CloudTrail trails without log file validation

This query finds CloudTrail trails with log file validation disabled using AWS Security Hub findings.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AWS Security Hub](../solutions/aws-security-hub.md) |
| **ID** | `e40c3c7d-0b6d-4f2d-90a4-4d9d77c2e3f5` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1070.004, T1562.001 |
| **Required Connectors** | [AWSSecurityHub](../connectors/awssecurityhub.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub/Hunting%20Queries/CloudTrailLogFileValidationDisabled.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to AWS Security Hub](../solutions/aws-security-hub.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
