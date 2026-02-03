# Cross-Cloud Unauthorized Credential Access Detection From AWS RDS Login

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection correlates AWS GuardDuty Credential Access alerts related to Amazon Relational Database Service (RDS) activity with Azure portal sign-in activities. It identifies successful and failed logins, anomalous behavior, and malicious IP access. By joining these datasets on network entities and IP addresses, it detects unauthorized credential access attempts across AWS and Azure resources, enhancing cross-cloud security monitoring.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md) |
| **ID** | `122fbc6a-57ab-4aa7-b9a9-51ac4970cac1` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, InitialAccess |
| **Techniques** | T1557, T1110, T1110.003, T1110.004, T1606, T1556, T1133 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Multi%20Cloud%20Attack%20Coverage%20Essentials%20-%20Resource%20Abuse/Analytic%20Rules/CrossCloudUnauthorizedCredentialsAccessDetection.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AWSGuardDuty`](../tables/awsguardduty.md) | ✓ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)

