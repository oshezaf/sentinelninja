# GCP Audit Logs - DNSSEC Disabled on Managed DNS Zone

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when DNSSEC (DNS Security Extensions) is disabled on a Google Cloud DNS managed zone. DNSSEC provides cryptographic authentication of DNS data, preventing DNS spoofing and cache poisoning attacks. Adversaries may disable DNSSEC to enable DNS-based command and control, phishing campaigns, or to redirect traffic to malicious infrastructure without cryptographic validation. This rule monitors DNS zone patch operations where DNSSEC state changes from ON to OFF.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| **ID** | `9129a43e-e204-4a9a-969e-d8861ce3437c` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, CommandAndControl, ResourceDevelopment |
| **Techniques** | T1562.001, T1071.004, T1584.002 |
| **Required Connectors** | [GCPAuditLogsDefinition](../connectors/gcpauditlogsdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/Analytic%20Rules/GCPDNSSECDisabledForDNSZone.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md)

