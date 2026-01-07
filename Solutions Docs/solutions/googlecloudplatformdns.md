# GoogleCloudPlatformDNS

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-07-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformDNS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformDNS) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[DEPRECATED] Google Cloud Platform DNS](../connectors/gcpdnsdataconnector.md)
- [Google Cloud Platform DNS (via Codeless Connector Framework)](../connectors/gcpdnslogsccpdefinition.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPDNS`](../tables/gcpdns.md) | [Google Cloud Platform DNS (via Codeless Connector Framework)](../connectors/gcpdnslogsccpdefinition.md) | - |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) | [[DEPRECATED] Google Cloud Platform DNS](../connectors/gcpdnsdataconnector.md) | - |

## Content Items

This solution includes **23 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 11 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Google DNS - CVE-2020-1350 (SIGRED) exploitation pattern](../content/1267d53d-f5fd-418b-b8da-34453a5994c2.md) | High | PrivilegeEscalation | - |
| [Google DNS - CVE-2021-34527 (PrintNightmare) external exploit](../content/e632e73a-06c4-47f6-8bed-b2498aa6e30f.md) | High | PrivilegeEscalation | - |
| [Google DNS - CVE-2021-40444 exploitation](../content/6758c671-e9ee-495d-b6b0-92ffd08a8c3b.md) | High | PrivilegeEscalation | - |
| [Google DNS - Exchange online autodiscover abuse](../content/424c2aca-5367-4247-917a-5d0f7035e40e.md) | Medium | InitialAccess, CredentialAccess | - |
| [Google DNS - IP check activity](../content/35221a58-cacb-4174-9bb4-ee777784fbce.md) | Medium | CommandAndControl | - |
| [Google DNS - Malicous Python packages](../content/75491db8-eaf7-40bb-a46a-279872cc82f5.md) | High | InitialAccess | - |
| [Google DNS - Multiple errors for source](../content/7e81a935-5e91-45a5-92fd-3b58c180513b.md) | Medium | CommandAndControl | - |
| [Google DNS - Multiple errors to same domain](../content/da04a5d6-e2be-4cba-8cdb-a3f2efa87e9e.md) | Medium | CommandAndControl | - |
| [Google DNS - Possible data exfiltration](../content/705bed63-668f-4508-9d2d-26faf4010700.md) | High | Exfiltration | - |
| [Google DNS - Request to dynamic DNS service](../content/09fc03e0-daec-4b22-8afa-4bba30d7e909.md) | Medium | CommandAndControl | - |
| [Google DNS - UNC2452 (Nobelium) APT Group activity](../content/22a613ea-c338-4f91-bbd3-3be97b00ebf9.md) | High | CommandAndControl | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Google DNS - Domains with rare errors](../content/9e3145ef-f6bf-4dd0-8783-a0847f68cb54.md) | CommandAndControl | - |
| [Google DNS - Errors](../content/74267de2-ff2e-415a-9e2a-5a99b471a1e2.md) | CommandAndControl | - |
| [Google DNS - Rare domains](../content/49d88918-03c8-4e22-9c8b-843e79cad6f5.md) | CommandAndControl | - |
| [Google DNS - Requests to IP lookup resources](../content/8459cf31-9c5d-48a8-88ca-c4b1a6014031.md) | CommandAndControl | - |
| [Google DNS - Requests to TOR resources](../content/53b91d17-f6a7-4439-8d9a-0aebf0abeea2.md) | CommandAndControl | - |
| [Google DNS - Requests to online shares](../content/e909c48d-7bd4-45d0-bfb9-319b5fdc6332.md) | CommandAndControl | - |
| [Google DNS - Server latency](../content/3cff73de-8c4a-46f5-85d8-3f1c051876f1.md) | CommandAndControl | - |
| [Google DNS - Sources with high number of errors](../content/e85a5d94-1f9f-4ce1-b54d-c61bbd24c41f.md) | CommandAndControl | - |
| [Google DNS - Unexpected top level domains](../content/1823db08-2ba4-4624-900f-9be0f950ea57.md) | CommandAndControl | - |
| [Google DNS - Unusual top level domains](../content/2aff9e01-d3bb-4455-94e3-66be758474bd.md) | CommandAndControl | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [GCPDNS](../content/gcpdns-googlecloudplatformdns.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GCPCloudDNS](../content/c1dc5d15-5600-477b-8750-48b5e2df7da8.md) | - | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.5      | 29-07-2025                    | Removed Deprecated **Data Connector**. | 
| 3.0.4      | 26-06-2025                    | Moving **CCF Connector** - *Google Cloud Platform DNS* from Public preview to GA.         |
| 3.0.3      | 09-05-2025                    | Implemented Standard table Functionality to **CCF Connector** - *Google Cloud Platform DNS*.   |
| 3.0.2      | 11-02-2025                    | Migrated the **Function app** connector to CCP **Data Connctor** and Updated **Parser**.   |
| 3.0.1      | 10-09-2024                    | Repackaged solution to add existing **Parser**.                                            |
| 3.0.0      | 04-09-2024                    | Updated the python runtime version to 3.11 Function app **Data Connector**.                      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
