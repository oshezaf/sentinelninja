# Unauthorized user access across AWS and Azure

'This detection compiles and correlates unauthorized user access alerts originating from AWS GuardDuty with Azure portal sign-in activities. It focuses on AWS GuardDuty alerts related to unauthorized user access, specifically targeting network IP associations tied to activities such as logins from malicious IP addresses or instance credential exfiltration attempts. The ditection leverages these common network IP advisories to detect and pinpoint unauthorized users attempting to access both AWS a

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md) |
| **ID** | `60f31001-018a-42bf-8045-a92e1f361b7b` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Exfiltration, Discovery |
| **Techniques** | T1557, T1110, T1110.003, T1110.004, T1212, T1048, T1087, T1580 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Multi%20Cloud%20Attack%20Coverage%20Essentials%20-%20Resource%20Abuse/Analytic%20Rules/Unauthorized_user_access_across_AWS_and_Azure.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSGuardDuty`](../tables/awsguardduty.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
