# GCP_DNS_CL

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |

## Solutions (7)

This table is used by the following solutions:

- [DNS Essentials](../solutions/dns-essentials.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Recorded Future](../solutions/recorded-future.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)

## Connectors (1)

This table is ingested by the following connectors:

- [[DEPRECATED] Google Cloud Platform DNS](../connectors/gcpdnsdataconnector.md)

---

## Content Items Using This Table (52)

### Analytic Rules (26)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [Detect DNS queries reporting multiple errors from different clients - Anomaly Based (ASIM DNS Solution)](../content/cf687598-5a2c-46f8-81c8-06b15ed489b1.md)
- [Detect DNS queries reporting multiple errors from different clients - Static threshold based (ASIM DNS Solution)](../content/5b8344eb-fa28-4ac3-bcff-bc19d5d63089.md)
- [Detect excessive NXDOMAIN DNS queries - Anomaly based (ASIM DNS Solution)](../content/02f23312-1a33-4390-8b80-f7cd4df4dea0.md)
- [Detect excessive NXDOMAIN DNS queries - Static threshold based (ASIM DNS Solution)](../content/4ab8b09e-3c23-4974-afbe-7e653779eb2b.md)
- [Ngrok Reverse Proxy on Network (ASIM DNS Solution)](../content/50b0dfb7-2c94-4eaf-a332-a5936d78c263.md)
- [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Anomaly based (ASIM DNS Solution)](../content/01191239-274e-43c9-b154-3a042692af06.md)
- [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Static threshold based (ASIM DNS Solution)](../content/89ba52fa-96a7-4653-829a-ca49bb13336c.md)
- [Rare client observed with high reverse DNS lookup count - Anomaly based (ASIM DNS Solution)](../content/0fe6bde4-b215-480c-99b4-84a96edcdbd7.md)
- [Rare client observed with high reverse DNS lookup count - Static threshold based (ASIM DNS Solution)](../content/77b7c820-5f60-4779-8bdb-f06e21add5f1.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/d9e1646c-dc17-4150-ac85-581f5c9cb41f.md)

**In solution [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md):**
- [Google DNS - CVE-2020-1350 (SIGRED) exploitation pattern](../content/1267d53d-f5fd-418b-b8da-34453a5994c2.md)
- [Google DNS - CVE-2021-34527 (PrintNightmare) external exploit](../content/e632e73a-06c4-47f6-8bed-b2498aa6e30f.md)
- [Google DNS - CVE-2021-40444 exploitation](../content/6758c671-e9ee-495d-b6b0-92ffd08a8c3b.md)
- [Google DNS - Exchange online autodiscover abuse](../content/424c2aca-5367-4247-917a-5d0f7035e40e.md)
- [Google DNS - IP check activity](../content/35221a58-cacb-4174-9bb4-ee777784fbce.md)
- [Google DNS - Malicous Python packages](../content/75491db8-eaf7-40bb-a46a-279872cc82f5.md)
- [Google DNS - Multiple errors for source](../content/7e81a935-5e91-45a5-92fd-3b58c180513b.md)
- [Google DNS - Multiple errors to same domain](../content/da04a5d6-e2be-4cba-8cdb-a3f2efa87e9e.md)
- [Google DNS - Possible data exfiltration](../content/705bed63-668f-4508-9d2d-26faf4010700.md)
- [Google DNS - Request to dynamic DNS service](../content/09fc03e0-daec-4b22-8afa-4bba30d7e909.md)
- [Google DNS - UNC2452 (Nobelium) APT Group activity](../content/22a613ea-c338-4f91-bbd3-3be97b00ebf9.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/acbf7ef6-f964-44c3-9031-7834ec68175f.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/999e9f5d-db4a-4b07-a206-29c4e667b7e8.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/67775878-7f8b-4380-ac54-115e1e828901.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/7c1ea2e6-6210-412c-92e4-180803a741b4.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/b306fba8-1a28-449f-aa24-30362e16d4f5.md)

### Hunting Queries (22)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [CVE-2020-1350 (SIGRED) exploitation pattern (ASIM DNS Solution)](../content/0a8f5777-f38a-4c37-b531-411bdecef976.md)
- [Connection to Unpopular Website Detected (ASIM DNS Solution)](../content/83e70a34-d96f-419d-815b-43d1499e88ed.md)
- [Increase in DNS Requests by client than the daily average count (ASIM DNS Solution)](../content/b31b5d70-4c75-4a5f-8af7-6a83f6eb372c.md)
- [Possible DNS Tunneling or Data Exfiltration Activity (ASIM DNS Solution)](../content/74e8773c-dfa9-45ca-bb60-5d767303e5b3.md)
- [Potential beaconing activity (ASIM DNS Solution)](../content/c4956c0b-4527-406c-b135-ef44002e1e70.md)
- [Top 25 DNS queries with most failures in last 24 hours (ASIM DNS Solution)](../content/4717929b-121d-4d90-b7ba-e3259ef16aca.md)
- [Top 25 Domains with large number of Subdomains (ASIM DNS Solution)](../content/5366b848-0886-439f-b312-0b94bb687d06.md)
- [Top 25 Sources(Clients) with high number of errors in last 24hours (ASIM DNS Solution)](../content/b35f6633-0d18-494c-a5e4-2828daf442bf.md)
- [Unexpected top level domains (ASIM DNS Solution)](../content/4c8d6412-5a48-42c3-8b5e-1f29fb15c749.md)
- [[Anomaly] Anomalous Increase in DNS activity by clients (ASIM DNS Solution)](../content/50f0cdfb-8b01-4eca-823d-2bbe6b8a5b95.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/34288e97-5194-4f2e-abf2-c2783189f6ae.md)

**In solution [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md):**
- [Google DNS - Domains with rare errors](../content/9e3145ef-f6bf-4dd0-8783-a0847f68cb54.md)
- [Google DNS - Errors](../content/74267de2-ff2e-415a-9e2a-5a99b471a1e2.md)
- [Google DNS - Rare domains](../content/49d88918-03c8-4e22-9c8b-843e79cad6f5.md)
- [Google DNS - Requests to IP lookup resources](../content/8459cf31-9c5d-48a8-88ca-c4b1a6014031.md)
- [Google DNS - Requests to TOR resources](../content/53b91d17-f6a7-4439-8d9a-0aebf0abeea2.md)
- [Google DNS - Requests to online shares](../content/e909c48d-7bd4-45d0-bfb9-319b5fdc6332.md)
- [Google DNS - Server latency](../content/3cff73de-8c4a-46f5-85d8-3f1c051876f1.md)
- [Google DNS - Sources with high number of errors](../content/e85a5d94-1f9f-4ce1-b54d-c61bbd24c41f.md)
- [Google DNS - Unexpected top level domains](../content/1823db08-2ba4-4624-900f-9be0f950ea57.md)
- [Google DNS - Unusual top level domains](../content/2aff9e01-d3bb-4455-94e3-66be758474bd.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/d641a534-ead8-41aa-a7c8-2b35e6b64c9f.md)

### Workbooks (3)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [DNSSolutionWorkbook](../content/dnssolutionworkbook-dns-essentials.md)

**In solution [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md):**
- [GCPDNS](../content/gcpdns-googlecloudplatformdns.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
