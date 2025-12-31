# Login to AWS Management Console without MFA

Multi-Factor Authentication (MFA) helps you to prevent credential compromise. This alert identifies logins to the AWS Management Console without MFA. You can limit this detection to trigger for adminsitrative accounts if you do not have MFA enabled on all accounts. This is done by looking at the eventName ConsoleLogin and if the AdditionalEventData field indicates MFA was NOT used and the ResponseElements field indicates NOT a Failure. Thereby indicating that a non-MFA login was successful.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `d25b1998-a592-4bc5-8a3a-92b39eedb1bc` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, PrivilegeEscalation, Persistence, InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [AWS](../connectors/aws.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Analytic%20Rules/AWS_ConsoleLogonWithoutMFA.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Amazon Web Services](../solutions/amazon-web-services.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
