# High-Risk Cross-Cloud User Impersonation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection focuses on identifying high-risk cross-cloud activities and sign-in anomalies that may indicate potential security threats. The query starts by analyzing Microsoft Entra ID Signin Logs to pinpoint instances where specific applications, risk levels, and result types align. It then correlates this information with relevant AWS CloudTrail events to identify activities across Azure and AWS environments.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md) |
| **ID** | `f4a28082-2808-4783-9736-33c1ae117475` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1134, T1078.002, T1078.004 |
| **Required Connectors** | [AWS](../connectors/aws.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Multi%20Cloud%20Attack%20Coverage%20Essentials%20-%20Resource%20Abuse/Analytic%20Rules/UserImpersonateByRiskyUser.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | `EventName in "AddUserToGroup,ChangePassword,CreateAccessKey,CreateGroup,CreateMailUser,CreateOrganization,CreateRole,CreateServiceSpecificCredential,CreateUser,CreateVirtualMFADevice,DeleteAccessKey,DeleteGroup,DeleteGroupPolicy,DeleteLoginProfile,DeleteRole,DeleteServiceSpecificCredential,DeleteUser,DisableMailUsers,EnableMailUsers,RegisterToWorkMail,RemoveUserFromGroup,ResetPassword,SetDefaultMailDomain,SetMailUserDetails,UpdateAccountEmailAddress,UploadServerCertificate"` | ✓ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)

