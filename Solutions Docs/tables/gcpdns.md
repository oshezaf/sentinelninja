# GCPDNS

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPDNS table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpdns) |

## Solutions (1)

This table is used by the following solutions:

- [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Google Cloud Platform DNS (via Codeless Connector Framework)](../connectors/gcpdnslogsccpdefinition.md)

---

## Content Items Using This Table (22)

### Analytic Rules (11)

**In solution [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md):**
- [Google DNS - CVE-2020-1350 (SIGRED) exploitation pattern](../content/googlecloudplatformdns-google-dns-cve-2020-1350-sigred-exploitation-pattern-1267d53d-f5fd-418b-b8da-34453a5994c2-54c24855.md)
- [Google DNS - CVE-2021-34527 (PrintNightmare) external exploit](../content/googlecloudplatformdns-google-dns-cve-2021-34527-printnightmare-external-exploit-e632e73a-06c4-47f6-8bed-b2498aa6e30f-67f817fe.md)
- [Google DNS - CVE-2021-40444 exploitation](../content/googlecloudplatformdns-google-dns-cve-2021-40444-exploitation-6758c671-e9ee-495d-b6b0-92ffd08a8c3b-818ecc21.md)
- [Google DNS - Exchange online autodiscover abuse](../content/googlecloudplatformdns-google-dns-exchange-online-autodiscover-abuse-424c2aca-5367-4247-917a-5d0f7035e40e-eb3b481d.md)
- [Google DNS - IP check activity](../content/googlecloudplatformdns-google-dns-ip-check-activity-35221a58-cacb-4174-9bb4-ee777784fbce-89e6bab9.md)
- [Google DNS - Malicous Python packages](../content/googlecloudplatformdns-google-dns-malicous-python-packages-75491db8-eaf7-40bb-a46a-279872cc82f5-92bff549.md)
- [Google DNS - Multiple errors for source](../content/googlecloudplatformdns-google-dns-multiple-errors-for-source-7e81a935-5e91-45a5-92fd-3b58c180513b-91c296af.md)
- [Google DNS - Multiple errors to same domain](../content/googlecloudplatformdns-google-dns-multiple-errors-to-same-domain-da04a5d6-e2be-4cba-8cdb-a3f2efa87e9e-a76d7e80.md)
- [Google DNS - Possible data exfiltration](../content/googlecloudplatformdns-google-dns-possible-data-exfiltration-705bed63-668f-4508-9d2d-26faf4010700-4755c5a5.md)
- [Google DNS - Request to dynamic DNS service](../content/googlecloudplatformdns-google-dns-request-to-dynamic-dns-service-09fc03e0-daec-4b22-8afa-4bba30d7e909-53e7965a.md)
- [Google DNS - UNC2452 (Nobelium) APT Group activity](../content/googlecloudplatformdns-google-dns-unc2452-nobelium-apt-group-activity-22a613ea-c338-4f91-bbd3-3be97b00ebf9-74349df9.md)

### Hunting Queries (10)

**In solution [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md):**
- [Google DNS - Domains with rare errors](../content/googlecloudplatformdns-google-dns-domains-with-rare-errors-9e3145ef-f6bf-4dd0-8783-a0847f68cb54-bd1078be.md)
- [Google DNS - Errors](../content/googlecloudplatformdns-google-dns-errors-74267de2-ff2e-415a-9e2a-5a99b471a1e2-c553919c.md)
- [Google DNS - Rare domains](../content/googlecloudplatformdns-google-dns-rare-domains-49d88918-03c8-4e22-9c8b-843e79cad6f5-5826fbc2.md)
- [Google DNS - Requests to IP lookup resources](../content/googlecloudplatformdns-google-dns-requests-to-ip-lookup-resources-8459cf31-9c5d-48a8-88ca-c4b1a6014031-77b1e4f8.md)
- [Google DNS - Requests to TOR resources](../content/googlecloudplatformdns-google-dns-requests-to-tor-resources-53b91d17-f6a7-4439-8d9a-0aebf0abeea2-4663dbdd.md)
- [Google DNS - Requests to online shares](../content/googlecloudplatformdns-google-dns-requests-to-online-shares-e909c48d-7bd4-45d0-bfb9-319b5fdc6332-632d0c96.md)
- [Google DNS - Server latency](../content/googlecloudplatformdns-google-dns-server-latency-3cff73de-8c4a-46f5-85d8-3f1c051876f1-1af26d07.md)
- [Google DNS - Sources with high number of errors](../content/googlecloudplatformdns-google-dns-sources-with-high-number-of-errors-e85a5d94-1f9f-4ce1-b54d-c61bbd24c41f-bf442c7b.md)
- [Google DNS - Unexpected top level domains](../content/googlecloudplatformdns-google-dns-unexpected-top-level-domains-1823db08-2ba4-4624-900f-9be0f950ea57-0a238939.md)
- [Google DNS - Unusual top level domains](../content/googlecloudplatformdns-google-dns-unusual-top-level-domains-2aff9e01-d3bb-4455-94e3-66be758474bd-689a2946.md)

### Workbooks (1)

**In solution [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md):**
- [GCPDNS](../content/googlecloudplatformdns-gcpdns-15de76e5.md)

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Location |
|:-------|:---------|:---------|
| [GCPCloudDNS](../parsers/gcpclouddns.md) | [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md) | Solution |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

