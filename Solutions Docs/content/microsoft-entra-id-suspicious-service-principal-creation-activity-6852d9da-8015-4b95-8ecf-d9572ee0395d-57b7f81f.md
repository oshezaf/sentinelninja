# Suspicious Service Principal creation activity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This alert will detect creation of an SPN, permissions granted, credentials created, activity and deletion of the SPN in a time frame (default 10 minutes)

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **ID** | `6852d9da-8015-4b95-8ecf-d9572ee0395d` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, PrivilegeEscalation, InitialAccess |
| **Techniques** | T1078, T1528 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Analytic%20Rules/SuspiciousServicePrincipalcreationactivity.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AuditLogs`](../tables/auditlogs.md) | `OperationName == "Remove service principal"`<br>`OperationName has_all "Update application"` | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)

