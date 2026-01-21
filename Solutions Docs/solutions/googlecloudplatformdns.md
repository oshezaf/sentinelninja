# GoogleCloudPlatformDNS

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="GoogleCloudPlatformDNS Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Google Cloud Platform DNS solution  provides the capability to ingest [Cloud DNS query logs](https://cloud.google.com/dns/docs/monitoring#using_logging) and [Cloud DNS audit logs](https://cloud.google.com/dns/docs/audit-logging) into Microsoft Sentinel using the [GCP Logging](https://cloud.google.com/logging/docs/api) API. Refer to GCP Logging [API documentation](https://cloud.google.com/logging/docs/api) for more information.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs

 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-07-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformDNS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformDNS) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[DEPRECATED] Google Cloud Platform DNS](../connectors/gcpdnsdataconnector.md) ⚠️
- [Google Cloud Platform DNS (via Codeless Connector Framework)](../connectors/gcpdnslogsccpdefinition.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPDNS`](../tables/gcpdns.md) | [Google Cloud Platform DNS (via Codeless Connector Framework)](../connectors/gcpdnslogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) | [[DEPRECATED] Google Cloud Platform DNS](../connectors/gcpdnsdataconnector.md) | Analytics, Hunting, Workbooks |

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
| [Google DNS - CVE-2020-1350 (SIGRED) exploitation pattern](../content/googlecloudplatformdns-google-dns-cve-2020-1350-sigred-exploitation-pattern-1267d53d-f5fd-418b-b8da-34453a5994c2-54c24855.md) | High | PrivilegeEscalation | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - CVE-2021-34527 (PrintNightmare) external exploit](../content/googlecloudplatformdns-google-dns-cve-2021-34527-printnightmare-external-exploit-e632e73a-06c4-47f6-8bed-b2498aa6e30f-67f817fe.md) | High | PrivilegeEscalation | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - CVE-2021-40444 exploitation](../content/googlecloudplatformdns-google-dns-cve-2021-40444-exploitation-6758c671-e9ee-495d-b6b0-92ffd08a8c3b-818ecc21.md) | High | PrivilegeEscalation | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Exchange online autodiscover abuse](../content/googlecloudplatformdns-google-dns-exchange-online-autodiscover-abuse-424c2aca-5367-4247-917a-5d0f7035e40e-eb3b481d.md) | Medium | InitialAccess, CredentialAccess | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - IP check activity](../content/googlecloudplatformdns-google-dns-ip-check-activity-35221a58-cacb-4174-9bb4-ee777784fbce-89e6bab9.md) | Medium | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Malicous Python packages](../content/googlecloudplatformdns-google-dns-malicous-python-packages-75491db8-eaf7-40bb-a46a-279872cc82f5-92bff549.md) | High | InitialAccess | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Multiple errors for source](../content/googlecloudplatformdns-google-dns-multiple-errors-for-source-7e81a935-5e91-45a5-92fd-3b58c180513b-91c296af.md) | Medium | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Multiple errors to same domain](../content/googlecloudplatformdns-google-dns-multiple-errors-to-same-domain-da04a5d6-e2be-4cba-8cdb-a3f2efa87e9e-a76d7e80.md) | Medium | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Possible data exfiltration](../content/googlecloudplatformdns-google-dns-possible-data-exfiltration-705bed63-668f-4508-9d2d-26faf4010700-4755c5a5.md) | High | Exfiltration | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Request to dynamic DNS service](../content/googlecloudplatformdns-google-dns-request-to-dynamic-dns-service-09fc03e0-daec-4b22-8afa-4bba30d7e909-53e7965a.md) | Medium | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - UNC2452 (Nobelium) APT Group activity](../content/googlecloudplatformdns-google-dns-unc2452-nobelium-apt-group-activity-22a613ea-c338-4f91-bbd3-3be97b00ebf9-74349df9.md) | High | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Google DNS - Domains with rare errors](../content/googlecloudplatformdns-google-dns-domains-with-rare-errors-9e3145ef-f6bf-4dd0-8783-a0847f68cb54-bd1078be.md) | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Errors](../content/googlecloudplatformdns-google-dns-errors-74267de2-ff2e-415a-9e2a-5a99b471a1e2-c553919c.md) | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Rare domains](../content/googlecloudplatformdns-google-dns-rare-domains-49d88918-03c8-4e22-9c8b-843e79cad6f5-5826fbc2.md) | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Requests to IP lookup resources](../content/googlecloudplatformdns-google-dns-requests-to-ip-lookup-resources-8459cf31-9c5d-48a8-88ca-c4b1a6014031-77b1e4f8.md) | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Requests to TOR resources](../content/googlecloudplatformdns-google-dns-requests-to-tor-resources-53b91d17-f6a7-4439-8d9a-0aebf0abeea2-4663dbdd.md) | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Requests to online shares](../content/googlecloudplatformdns-google-dns-requests-to-online-shares-e909c48d-7bd4-45d0-bfb9-319b5fdc6332-632d0c96.md) | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Server latency](../content/googlecloudplatformdns-google-dns-server-latency-3cff73de-8c4a-46f5-85d8-3f1c051876f1-1af26d07.md) | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Sources with high number of errors](../content/googlecloudplatformdns-google-dns-sources-with-high-number-of-errors-e85a5d94-1f9f-4ce1-b54d-c61bbd24c41f-bf442c7b.md) | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Unexpected top level domains](../content/googlecloudplatformdns-google-dns-unexpected-top-level-domains-1823db08-2ba4-4624-900f-9be0f950ea57-0a238939.md) | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |
| [Google DNS - Unusual top level domains](../content/googlecloudplatformdns-google-dns-unusual-top-level-domains-2aff9e01-d3bb-4455-94e3-66be758474bd-689a2946.md) | CommandAndControl | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [GCPDNS](../content/googlecloudplatformdns-gcpdns-15de76e5.md) | [`GCPDNS`](../tables/gcpdns.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GCPCloudDNS](../content/googlecloudplatformdns-gcpclouddns-c1dc5d15-5600-477b-8750-48b5e2df7da8-a17dbc40.md) | - | [`GCPDNS`](../tables/gcpdns.md) *(read)*<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) *(read)* |

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

