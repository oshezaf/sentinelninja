# GCPAuditLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPAuditLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpauditlogs) |

## Solutions (2)

This table is used by the following solutions:

- [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [GCP Pub/Sub Audit Logs](../connectors/gcpauditlogsdefinition.md) |  |
| [GCP Pub/Sub Audit Logs](../connectors/gcppub-subauditlogs.md) |  |

---

## Content Items Using This Table (14)

### Analytic Rules (9)

**In solution [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GCP Audit Logs - DNSSEC Disabled on Managed DNS Zone](../content/google-cloud-platform-audit-logs-gcp-audit-logs-dnssec-disabled-on-managed-dns-zone-9129a43e-e204-4a9a-969e-d8861ce3437c-ca50f855.md) |  |
| [GCP Audit Logs - Data Access Logging Exemption Added for Principal](../content/google-cloud-platform-audit-logs-gcp-audit-logs-data-access-logging-exemption-added-for-principal-b7da45ce-fcc8-43c7-a37c-c08454579d26-e999603f.md) |  |
| [GCP Audit Logs - Detect Bulk VM Snapshot Deletion](../content/google-cloud-platform-audit-logs-gcp-audit-logs-detect-bulk-vm-snapshot-deletion-dfdffdc7-929f-4c7e-8f48-30e5ffddb067-3282e1dc.md) |  |
| [GCP Audit Logs - Detect Organization Policy Deletion or Updation](../content/google-cloud-platform-audit-logs-gcp-audit-logs-detect-organization-policy-deletion-or-updation-205e1c9f-faee-43f1-b3b8-1952ffbbeea4-804699fa.md) |  |
| [GCP Audit Logs - Open Firewall Rule Created or Modified](../content/google-cloud-platform-audit-logs-gcp-audit-logs-open-firewall-rule-created-or-modified-8061c611-55f1-4ee5-a8f8-8f19f2c7aab2-cd842d29.md) |  |
| [GCP Audit Logs - Storage Bucket Made Public](../content/google-cloud-platform-audit-logs-gcp-audit-logs-storage-bucket-made-public-3a8d7f9e-4b2c-4e5d-8c6b-9f1a3d5e8c7b-41a0a082.md) |  |
| [GCP Audit Logs - VPC Flow Logs Disabled](../content/google-cloud-platform-audit-logs-gcp-audit-logs-vpc-flow-logs-disabled-8f3e9c2d-5b4a-4d6e-9a7c-2f8b5e1d3c9a-acd074a8.md) |  |

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cross-Cloud Suspicious Compute resource creation in GCP](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-suspicious-compute-resource-creation-i-5c847e47-0a07-4c01-ab99-5817ad6cb11e-be6ace2e.md) |  |
| [Cross-Cloud Suspicious user activity observed in GCP Envourment](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-suspicious-user-activity-observed-in-g-58e306fe-1c49-4b8f-9b0e-15f25e8f0cd7-36b1a06d.md) |  |

### Hunting Queries (5)

**In solution [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GCP Audit Logs - List Activities Disabling Data Access Logging for GCP Services](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-activities-disabling-data-access-logging-for-gcp-se-8f3a9b2d-5c6e-4a1f-9d8c-3e7b4f9a6c2d-0d14abaa.md) |  |
| [GCP Audit Logs - List All GCP Firewall Operations by Principal](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-all-gcp-firewall-operations-by-principal-9c4b2f7e-6d8a-4e9b-8f5c-2a3d7e9f6b4a-58341b5a.md) |  |
| [GCP Audit Logs - List All GCP VPN Tunnels Created](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-all-gcp-vpn-tunnels-created-245c0747-db27-460b-b1bf-131042f664b9-fbd7e550.md) |  |
| [GCP Audit Logs - List All GCP VPN Tunnels Deleted](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-all-gcp-vpn-tunnels-deleted-8f3e4a2b-6c7d-4e8f-9a0b-1c2d3e4f5a6b-45f3f0b9.md) |  |
| [GCP Audit Logs - List GCP Organization Policy Modifications by Principal](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-gcp-organization-policy-modifications-by-principal-7a3e8c5f-4b9d-4e6a-8c7b-5f2a9d6e8b3c-a149a2a1.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

