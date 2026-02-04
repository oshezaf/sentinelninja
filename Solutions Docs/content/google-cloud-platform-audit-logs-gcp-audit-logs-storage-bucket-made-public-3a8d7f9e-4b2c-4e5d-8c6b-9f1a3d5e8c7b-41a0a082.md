# GCP Audit Logs - Storage Bucket Made Public

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when a Google Cloud Storage bucket is made publicly accessible by granting permissions to allUsers or allAuthenticatedUsers. Making buckets public can expose sensitive data to unauthorized access and may indicate a misconfiguration or malicious activity. Adversaries may make buckets public to exfiltrate data or as part of a data exposure attack. This rule monitors setIamPermissions operations that add public access roles to storage buckets.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| **ID** | `3a8d7f9e-4b2c-4e5d-8c6b-9f1a3d5e8c7b` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection, InitialAccess, Exfiltration |
| **Techniques** | T1530, T1078.004, T1567.002 |
| **Required Connectors** | [GCPAuditLogsDefinition](../connectors/gcpauditlogsdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/Analytic%20Rules/GCPStorageBucketMadePublic.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md)

