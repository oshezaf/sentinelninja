# Google Cloud Platform Security Command Center

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="Google Cloud Platform Security Command Center Logo" width="75" height="75">

The Google Cloud Platform (GCP) Security Command Center is a comprehensive security and risk management platform for Google Cloud, ingested from Sentinel's connector. It offers features such as asset inventory and discovery, vulnerability and threat detection, and risk mitigation and remediation to help you gain insight into your organization's security and data attack surface. This integration enables you to perform tasks related to findings and assets more effectively.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.7 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-09-11 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Security%20Command%20Center](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Security%20Command%20Center) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Google Security Command Center](../connectors/googlesccdefinition.md)

## Tables Used

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
| [GCP Security Command Center - Detect DNSSEC disabled for DNS zones](../content/google-cloud-platform-security-command-center-gcp-security-command-center-detect-dnssec-disabled-for-dns-a9c7a4be-b7e7-4045-8028-0d1ffaa049af-30e58eb2.md) | Medium | Collection, CommandAndControl, DefenseEvasion | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [GCP Security Command Center - Detect Firewall rules allowing unrestricted high-risk ports](../content/google-cloud-platform-security-command-center-gcp-security-command-center-detect-firewall-rules-allowing-f4f92ca4-6ebe-4f2a-90e5-b0d04b709651-ab46a4b7.md) | High | InitialAccess, LateralMovement, Discovery | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [GCP Security Command Center - Detect Open/Unrestricted API Keys](../content/google-cloud-platform-security-command-center-gcp-security-command-center-detect-open-unrestricted-api-k-d8e30113-373a-4f49-a0ad-1a5d8b95b729-e3f9ca23.md) | Medium | InitialAccess, CredentialAccess | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [GCP Security Command Center - Detect Resources with Logging Disabled](../content/google-cloud-platform-security-command-center-gcp-security-command-center-detect-resources-with-logging--d1fe8d30-4852-463a-b6ee-3b459788b75d-dd5c52f3.md) | Medium | DefenseEvasion | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [GCP Security Command Center - Detect projects with API Keys present](../content/google-cloud-platform-security-command-center-gcp-security-command-center-detect-projects-with-api-keys--395f3ced-3923-4b83-b05d-8d077fd48c1e-0dec98c0.md) | Medium | CredentialAccess | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Identify Compute VMs with Secure Boot Disabled](../content/google-cloud-platform-security-command-center-identify-compute-vms-with-secure-boot-disabled-d87bb737-2f4e-4261-b863-23c8a8999693-ba77c545.md) | ResourceDevelopment, DefenseEvasion | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [Identify GCP Instances with Full API Access](../content/google-cloud-platform-security-command-center-identify-gcp-instances-with-full-api-access-0cbdd537-b31b-41b7-a3f2-8a421ea89a43-1fe82858.md) | PrivilegeEscalation | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [Identify GCP Service Account with Overly Permissive Roles](../content/google-cloud-platform-security-command-center-identify-gcp-service-account-with-overly-permissive-roles-f26cff6f-1a57-4462-a956-162639d14c3f-9e1c9851.md) | PrivilegeEscalation, Persistence | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [Identify GCP User-Managed Service Account Keys](../content/google-cloud-platform-security-command-center-identify-gcp-user-managed-service-account-keys-47375801-ba85-4296-a548-7d748e3c7601-2fe8ed87.md) | CredentialAccess | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |
| [Identify Public GCP Storage Buckets](../content/google-cloud-platform-security-command-center-identify-public-gcp-storage-buckets-86b3c2e5-9f44-4f7a-9d2d-2f1a3b4c5d6e-443b5d30.md) | Exfiltration, Discovery | [`GoogleCloudSCC`](../tables/googlecloudscc.md) |

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
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

