# AWS Security Hub - Detect root user lacking MFA

This query detects AWS accounts where the root user does not have multi-factor authentication (MFA) enabled, using AWS Security Hub control IAM.9 findings. Lack of MFA on the root user increases the risk of unauthorized access and privilege abuse.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AWS Security Hub](../solutions/aws-security-hub.md) |
| **ID** | `6b3b9b1d-0d5d-4d4a-9f0f-8d1e2c7a5f44` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation, Persistence, CredentialAccess, DefenseEvasion |
| **Techniques** | T1098, T1110, T1556.006 |
| **Required Connectors** | [AWSSecurityHub](../connectors/awssecurityhub.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub/Analytic%20Rules/IAMRootUserMFADisabled.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to AWS Security Hub](../solutions/aws-security-hub.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

