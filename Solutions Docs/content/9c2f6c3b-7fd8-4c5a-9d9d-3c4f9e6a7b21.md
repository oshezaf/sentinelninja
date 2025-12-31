# AWS Security Hub - Detect CloudTrail trails lacking KMS encryption

This query detects AWS CloudTrail trails that are not configured to use server-side encryption with a customer managed KMS key using AWS Security Hub control CloudTrail.2 findings.  Unencrypted CloudTrail logs increase the risk of unauthorized access to sensitive audit data at rest.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AWS Security Hub](../solutions/aws-security-hub.md) |
| **ID** | `9c2f6c3b-7fd8-4c5a-9d9d-3c4f9e6a7b21` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact, DefenseEvasion |
| **Techniques** | T1565.001, T1562.008 |
| **Required Connectors** | [AWSSecurityHub](../connectors/awssecurityhub.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub/Analytic%20Rules/CloudTrailTrailEncryptionDisabled.yaml) |

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
