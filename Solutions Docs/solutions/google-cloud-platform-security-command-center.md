# Google Cloud Platform Security Command Center

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2023-09-11 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Security%20Command%20Center](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Security%20Command%20Center) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Google Security Command Center](../connectors/googlesccdefinition.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GoogleCloudSCC`](../tables/googlecloudscc.md) | [Google Security Command Center](../connectors/googlesccdefinition.md) | Analytics, Hunting |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 5 |
| Hunting Queries | 5 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [GCP Security Command Center - Detect DNSSEC disabled for DNS zones](../content/google-cloud-platform-security-command-center-gcp-security-command-center---detect-dnssec-disabled-for-dns-zones-a9c7a4be-b7e7-4045-8028-0d1ffaa049af.md) | Medium | Collection, CommandAndControl, DefenseEvasion | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [GCP Security Command Center - Detect Firewall rules allowing unrestricted high-risk ports](../content/google-cloud-platform-security-command-center-gcp-security-command-center---detect-firewall-rules-allowing-unrestricted-high-risk-ports-f4f92ca4-6ebe-4f2a-90e5-b0d04b709651.md) | High | InitialAccess, LateralMovement, Discovery | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [GCP Security Command Center - Detect Open/Unrestricted API Keys](../content/google-cloud-platform-security-command-center-gcp-security-command-center---detect-open-unrestricted-api-keys-d8e30113-373a-4f49-a0ad-1a5d8b95b729.md) | Medium | InitialAccess, CredentialAccess | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [GCP Security Command Center - Detect Resources with Logging Disabled](../content/google-cloud-platform-security-command-center-gcp-security-command-center---detect-resources-with-logging-disabled-d1fe8d30-4852-463a-b6ee-3b459788b75d.md) | Medium | DefenseEvasion | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [GCP Security Command Center - Detect projects with API Keys present](../content/google-cloud-platform-security-command-center-gcp-security-command-center---detect-projects-with-api-keys-present-395f3ced-3923-4b83-b05d-8d077fd48c1e.md) | Medium | CredentialAccess | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Identify Compute VMs with Secure Boot Disabled](../content/google-cloud-platform-security-command-center-identify-compute-vms-with-secure-boot-disabled-d87bb737-2f4e-4261-b863-23c8a8999693.md) | ResourceDevelopment, DefenseEvasion | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [Identify GCP Instances with Full API Access](../content/google-cloud-platform-security-command-center-identify-gcp-instances-with-full-api-access-0cbdd537-b31b-41b7-a3f2-8a421ea89a43.md) | PrivilegeEscalation | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [Identify GCP Service Account with Overly Permissive Roles](../content/google-cloud-platform-security-command-center-identify-gcp-service-account-with-overly-permissive-roles-f26cff6f-1a57-4462-a956-162639d14c3f.md) | PrivilegeEscalation, Persistence | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [Identify GCP User-Managed Service Account Keys](../content/google-cloud-platform-security-command-center-identify-gcp-user-managed-service-account-keys-47375801-ba85-4296-a548-7d748e3c7601.md) | CredentialAccess | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [Identify Public GCP Storage Buckets](../content/google-cloud-platform-security-command-center-identify-public-gcp-storage-buckets-86b3c2e5-9f44-4f7a-9d2d-2f1a3b4c5d6e.md) | Exfiltration, Discovery | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.7       | 11-11-2025                     | Add New **Analytic Rules** and **Hunting Queries** |
| 3.0.6       | 12-11-2024                     | Modified datatype query for **Data Connector** |
| 3.0.5       | 16-05-2024                     | Modification in ** Data Connector **           |
| 3.0.4       | 28-02-2024                     | Initial solution release                       |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
