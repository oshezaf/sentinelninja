# GCP Audit Logs - List Activities Disabling Data Access Logging for GCP Services

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

List all activities where data access logging (ADMIN_READ, DATA_READ, or DATA_WRITE) is disabled for GCP services through IAM policy modifications.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| **ID** | `8f3a9b2d-5c6e-4a1f-9d8c-3e7b4f9a6c2d` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562.008 |
| **Required Connectors** | [GCPAuditLogsDefinition](../connectors/gcpauditlogsdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/Hunting%20Queries/GCPDataAccessLoggingDisabled.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md)

