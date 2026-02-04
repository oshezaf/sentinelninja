# GCP Audit Logs - List All GCP VPN Tunnels Created

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Lists all Google Cloud VPN tunnel creation operations to identify network connectivity changes and tunnel configurations.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| **ID** | `245c0747-db27-460b-b1bf-131042f664b9` |
| **Tactics** | Persistence, CommandAndControl, DefenseEvasion |
| **Techniques** | T1133, T1090, T1562.007 |
| **Required Connectors** | [GCPAuditLogsDefinition](../connectors/gcpauditlogsdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/Hunting%20Queries/GCPVpnTunnelCreation.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md)

