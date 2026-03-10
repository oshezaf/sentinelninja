# Cross-Cloud Suspicious Compute resource creation in GCP

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection  identifies potential suspicious activity across multi-cloud environments by combining AWS GuardDuty findings with GCP Audit Logs. It focuses on AWS activities related to unauthorized access, credential abuse, and unusual behaviors, as well as GCP instances creation with non-Google service account users. The query aims to provide a comprehensive view of cross-cloud security incidents for proactive threat detection and response.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md) |
| **ID** | `5c847e47-0a07-4c01-ab99-5817ad6cb11e` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, Persistence, PrivilegeEscalation, CredentialAccess, Discovery, LateralMovement |
| **Techniques** | T1566, T1059, T1078, T1547, T1548, T1069, T1552 |
| **Required Connectors** | [GCPAuditLogsDefinition](../connectors/gcpauditlogsdefinition.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Multi%20Cloud%20Attack%20Coverage%20Essentials%20-%20Resource%20Abuse/Analytic%20Rules/Cross-CloudSuspiciousComputeResourcecreationinGCP.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AWSGuardDuty`](../tables/awsguardduty.md) | ✓ | ✓ | ✓ |
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)

