# GCP Audit Logs - Data Access Logging Exemption Added for Principal

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Detects when a principal (user or service account) is exempted from GCP data access audit logging. This is a critical security event as it reduces visibility into privileged operations and may indicate an attempt to hide malicious activity. Adversaries may exempt their accounts from audit logging to evade detection while performing reconnaissance, privilege escalation, or data exfiltration. This rule monitors SetIamPolicy operations that add audit log exemptions for ADMIN_READ, DATA_READ, or DA

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| **ID** | `b7da45ce-fcc8-43c7-a37c-c08454579d26` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, PrivilegeEscalation |
| **Techniques** | T1562.008, T1078.004 |
| **Required Connectors** | [GCPAuditLogsDefinition](../connectors/gcpauditlogsdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/Analytic%20Rules/GCPDataAccessLoggingExemption.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md)

