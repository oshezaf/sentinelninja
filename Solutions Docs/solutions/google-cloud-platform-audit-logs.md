# Google Cloud Platform Audit Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/logo/Google-Cloud-Branding.png" alt="Google Cloud Platform Audit Logs Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Google Cloud Platform (GCP) audit logs, ingested from Microsoft Sentinel's connector, enables you to capture and track all activity that occurs in your GCP environment. These audit logs provide valuable insights for monitoring user activity, troubleshooting issues, and ensuring compliance with security regulations. They serve as a record of events that practitioners can utilize to monitor access and identify potential threats across GCP resources.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-03-29 |
| **Solution Folder** | [Google Cloud Platform Audit Logs](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs) |

## Additional Information

📖 **Setup Guide:** [Google Cloud Platform connectors](https://learn.microsoft.com/azure/sentinel/connect-google-cloud-platform) - Connect GCP logs to Microsoft Sentinel

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [GCP Pub/Sub Audit Logs](../connectors/gcpauditlogsdefinition.md)
- [GCP Pub/Sub Audit Logs](../connectors/gcppub-subauditlogs.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | [GCP Pub/Sub Audit Logs](../connectors/gcppub-subauditlogs.md), [GCP Pub/Sub Audit Logs](../connectors/gcpauditlogsdefinition.md) | Analytics, Hunting |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 7 |
| Hunting Queries | 5 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [GCP Audit Logs - DNSSEC Disabled on Managed DNS Zone](../content/google-cloud-platform-audit-logs-gcp-audit-logs-dnssec-disabled-on-managed-dns-zone-9129a43e-e204-4a9a-969e-d8861ce3437c-ca50f855.md) | High | DefenseEvasion, CommandAndControl, ResourceDevelopment | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [GCP Audit Logs - Data Access Logging Exemption Added for Principal](../content/google-cloud-platform-audit-logs-gcp-audit-logs-data-access-logging-exemption-added-for-principal-b7da45ce-fcc8-43c7-a37c-c08454579d26-e999603f.md) | High | DefenseEvasion, PrivilegeEscalation | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [GCP Audit Logs - Detect Bulk VM Snapshot Deletion](../content/google-cloud-platform-audit-logs-gcp-audit-logs-detect-bulk-vm-snapshot-deletion-dfdffdc7-929f-4c7e-8f48-30e5ffddb067-3282e1dc.md) | High | Impact, DefenseEvasion | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [GCP Audit Logs - Detect Organization Policy Deletion or Updation](../content/google-cloud-platform-audit-logs-gcp-audit-logs-detect-organization-policy-deletion-or-updation-205e1c9f-faee-43f1-b3b8-1952ffbbeea4-804699fa.md) | High | DefenseEvasion | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [GCP Audit Logs - Open Firewall Rule Created or Modified](../content/google-cloud-platform-audit-logs-gcp-audit-logs-open-firewall-rule-created-or-modified-8061c611-55f1-4ee5-a8f8-8f19f2c7aab2-cd842d29.md) | High | DefenseEvasion, Persistence, InitialAccess | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [GCP Audit Logs - Storage Bucket Made Public](../content/google-cloud-platform-audit-logs-gcp-audit-logs-storage-bucket-made-public-3a8d7f9e-4b2c-4e5d-8c6b-9f1a3d5e8c7b-41a0a082.md) | High | Collection, InitialAccess, Exfiltration | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [GCP Audit Logs - VPC Flow Logs Disabled](../content/google-cloud-platform-audit-logs-gcp-audit-logs-vpc-flow-logs-disabled-8f3e9c2d-5b4a-4d6e-9a7c-2f8b5e1d3c9a-acd074a8.md) | High | DefenseEvasion | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [GCP Audit Logs - List Activities Disabling Data Access Logging for GCP Services](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-activities-disabling-data-access-logging-for-gcp-se-8f3a9b2d-5c6e-4a1f-9d8c-3e7b4f9a6c2d-0d14abaa.md) | DefenseEvasion | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [GCP Audit Logs - List All GCP Firewall Operations by Principal](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-all-gcp-firewall-operations-by-principal-9c4b2f7e-6d8a-4e9b-8f5c-2a3d7e9f6b4a-58341b5a.md) | DefenseEvasion, InitialAccess | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [GCP Audit Logs - List All GCP VPN Tunnels Created](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-all-gcp-vpn-tunnels-created-245c0747-db27-460b-b1bf-131042f664b9-fbd7e550.md) | Persistence, CommandAndControl, DefenseEvasion | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [GCP Audit Logs - List All GCP VPN Tunnels Deleted](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-all-gcp-vpn-tunnels-deleted-8f3e4a2b-6c7d-4e8f-9a0b-1c2d3e4f5a6b-45f3f0b9.md) | Impact, DefenseEvasion | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [GCP Audit Logs - List GCP Organization Policy Modifications by Principal](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-gcp-organization-policy-modifications-by-principal-7a3e8c5f-4b9d-4e6a-8c7b-5f2a9d6e8b3c-a149a2a1.md) | DefenseEvasion | [`GCPAuditLogs`](../tables/gcpauditlogs.md) |

## Additional Documentation

> 📄 *Source: [Google Cloud Platform Audit Logs/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Audit%20Logs/README.md)*

# GCP Audit logs configuration
The following are the steps for GCP Audit logs configuration.

## Configure GCP project.
There are two things you need to set up in your GCP environment:

Set up Microsoft Sentinel authentication in GCP by creating the following resources in the GCP IAM service:

Workload identity pool
Workload identity provider
Service account
Role
Set up log collection in GCP and ingestion into Microsoft Sentinel by creating the following resources in the GCP Pub/Sub service:

Topic
Subscription for the topic

You can set up the environment in one of two ways:

1. Create GCP resources via the Terraform API: Terraform provides APIs for resource creation and for Identity and Access Management (see Prerequisites). Microsoft Sentinel provides Terraform scripts that issue the necessary commands to the APIs.

2. Set up GCP environment manually, creating the resources yourself in the GCP console.

In order to create fresh projects and GCP PUB/Sub service ,subscription,please follow below steps

### GCP Authentication Setup

Please follow terraform script steps mentioned in below link as may miss some steps in GCP while adding manually
* https://learn.microsoft.com/en-us/azure/sentinel/connect-google-cloud-platform?tabs=terraform%2Cauditlogs#tabpanel_1_terraform

if you don't want to perform above steps please use the below link for manual set up

* https://learn.microsoft.com/en-us/azure/sentinel/connect-google-cloud-platform?tabs=manual%2Cauditlogs#tabpanel_2_manual

### GCP Audit Logs Setup

Please follow terraform script steps mentioned in below link to set up GCP audit logs

* https://learn.microsoft.com/en-us/azure/sentinel/connect-google-cloud-platform?tabs=terraform%2Cauditlogs#tabpanel_2_terraform


if you don't want to perform above steps please use the below link for manual set up

* https://learn.microsoft.com/en-us/azure/sentinel/connect-google-cloud-platform?tabs=manual%2Cauditlogs#tabpanel_2_manual


# Note

* if want to  use existing project/account details need to modify the above scripts accordingly and run in GCP cloud console.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------| 
| 3.0.2       | 19-01-2026                     | Added new GCP security **Analytic Rules** and **Hunting Queries**  |
| 3.0.1       | 28-04-2025                     | Updated **Data Connector** definition file and fixed overlapping collector issue.|
| 3.0.0       | 15-01-2024                     | Created CCP Package   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

