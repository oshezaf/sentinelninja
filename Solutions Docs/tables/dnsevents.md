# DnsEvents

Reference for DnsEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Network |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dnsevents) |

## Solutions (12)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [DNS Essentials](../solutions/dns-essentials.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Recorded Future](../solutions/recorded-future.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [Windows Server DNS](../solutions/windows-server-dns.md)

## Connectors (1)

This table is ingested by the following connectors:

- [DNS](../connectors/dns.md)

---

## Content Items Using This Table (53)

### Analytic Rules (28)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [Detect DNS queries reporting multiple errors from different clients - Anomaly Based (ASIM DNS Solution)](../content/dns-essentials-detect-dns-queries-reporting-multiple-errors-from-different-clients---anomaly-based-%28asim-dns-solution%29-cf687598-5a2c-46f8-81c8-06b15ed489b1.md)
- [Detect DNS queries reporting multiple errors from different clients - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-detect-dns-queries-reporting-multiple-errors-from-different-clients---static-threshold-based-%28asim-dns-solution%29-5b8344eb-fa28-4ac3-bcff-bc19d5d63089.md)
- [Detect excessive NXDOMAIN DNS queries - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-detect-excessive-nxdomain-dns-queries---anomaly-based-%28asim-dns-solution%29-02f23312-1a33-4390-8b80-f7cd4df4dea0.md)
- [Detect excessive NXDOMAIN DNS queries - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-detect-excessive-nxdomain-dns-queries---static-threshold-based-%28asim-dns-solution%29-4ab8b09e-3c23-4974-afbe-7e653779eb2b.md)
- [Ngrok Reverse Proxy on Network (ASIM DNS Solution)](../content/dns-essentials-ngrok-reverse-proxy-on-network-%28asim-dns-solution%29-50b0dfb7-2c94-4eaf-a332-a5936d78c263.md)
- [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-potential-dga%28domain-generation-algorithm%29-detected-via-repetitive-failures---anomaly-based-%28asim-dns-solution%29-01191239-274e-43c9-b154-3a042692af06.md)
- [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-potential-dga%28domain-generation-algorithm%29-detected-via-repetitive-failures---static-threshold-based-%28asim-dns-solution%29-89ba52fa-96a7-4653-829a-ca49bb13336c.md)
- [Rare client observed with high reverse DNS lookup count - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-rare-client-observed-with-high-reverse-dns-lookup-count---anomaly-based-%28asim-dns-solution%29-0fe6bde4-b215-480c-99b4-84a96edcdbd7.md)
- [Rare client observed with high reverse DNS lookup count - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-rare-client-observed-with-high-reverse-dns-lookup-count---static-threshold-based-%28asim-dns-solution%29-77b7c820-5f60-4779-8bdb-f06e21add5f1.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence---threat-hunting-domain-d9e1646c-dc17-4150-ac85-581f5c9cb41f.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI Map IP Entity to DnsEvents](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-dnsevents-ddf47b6f-870c-5712-a296-1383acb13c82.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI domain in DnsEvents](../content/lumen-defender-threat-feed-lumen-ti-domain-in-dnsevents-29bf5bcd-6795-4c79-a91f-aaef5a618bab.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-acbf7ef6-f964-44c3-9031-7834ec68175f.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map IP Entity to DnsEvents](../content/threat-intelligence-ti-map-ip-entity-to-dnsevents-69b7723c-2889-469f-8b55-a2d355ed9c87.md)
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-ti-map-domain-entity-to-dns-events-%28asim-dns-schema%29-999e9f5d-db4a-4b07-a206-29c4e667b7e8.md)
- [TI map Domain entity to DnsEvents](../content/threat-intelligence-ti-map-domain-entity-to-dnsevents-85aca4d1-5d15-4001-abd9-acb86ca1786a.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-ti-map-ip-entity-to-dns-events-%28asim-dns-schema%29-67775878-7f8b-4380-ac54-115e1e828901.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI Map IP Entity to DnsEvents](../content/threat-intelligence-%28new%29-ti-map-ip-entity-to-dnsevents-6418fd33-92f2-407b-bd61-91c0d4bbcb8a.md)
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-%28new%29-ti-map-domain-entity-to-dns-events-%28asim-dns-schema%29-7c1ea2e6-6210-412c-92e4-180803a741b4.md)
- [TI map Domain entity to DnsEvents](../content/threat-intelligence-%28new%29-ti-map-domain-entity-to-dnsevents-03a8e294-3fc7-4d65-9da2-cff91fb5b6dc.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-%28new%29-ti-map-ip-entity-to-dns-events-%28asim-dns-schema%29-b306fba8-1a28-449f-aa24-30362e16d4f5.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [Threat Connect TI map Domain entity to DnsEvents](../content/threatconnect-threat-connect-ti-map-domain-entity-to-dnsevents-f8960f1c-07d2-512b-9c41-952772d40c84.md)

**In solution [Windows Server DNS](../solutions/windows-server-dns.md):**
- [DNS events related to ToR proxies](../content/windows-server-dns-dns-events-related-to-tor-proxies-a83ef0f4-dace-4767-bce3-ebd32599d2a0.md)
- [DNS events related to mining pools](../content/windows-server-dns-dns-events-related-to-mining-pools-0d76e9cf-788d-4a69-ac7d-f234826b5bed.md)
- [NRT DNS events related to mining pools](../content/windows-server-dns-nrt-dns-events-related-to-mining-pools-d5b32cd4-2328-43da-ab47-cd289c1f5efc.md)
- [Potential DGA detected](../content/windows-server-dns-potential-dga-detected-a0907abe-6925-4d90-af2b-c7e89dc201a6.md)
- [Rare client observed with high reverse DNS lookup count](../content/windows-server-dns-rare-client-observed-with-high-reverse-dns-lookup-count-15ae38a2-2e29-48f7-883f-863fb25a5a06.md)

### Hunting Queries (20)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [CVE-2020-1350 (SIGRED) exploitation pattern (ASIM DNS Solution)](../content/dns-essentials-cve-2020-1350-%28sigred%29-exploitation-pattern-%28asim-dns-solution%29-0a8f5777-f38a-4c37-b531-411bdecef976.md)
- [Connection to Unpopular Website Detected (ASIM DNS Solution)](../content/dns-essentials-connection-to-unpopular-website-detected-%28asim-dns-solution%29-83e70a34-d96f-419d-815b-43d1499e88ed.md)
- [Increase in DNS Requests by client than the daily average count (ASIM DNS Solution)](../content/dns-essentials-increase-in-dns-requests-by-client-than-the-daily-average-count-%28asim-dns-solution%29-b31b5d70-4c75-4a5f-8af7-6a83f6eb372c.md)
- [Possible DNS Tunneling or Data Exfiltration Activity (ASIM DNS Solution)](../content/dns-essentials-possible-dns-tunneling-or-data-exfiltration-activity-%28asim-dns-solution%29-74e8773c-dfa9-45ca-bb60-5d767303e5b3.md)
- [Potential beaconing activity (ASIM DNS Solution)](../content/dns-essentials-potential-beaconing-activity-%28asim-dns-solution%29-c4956c0b-4527-406c-b135-ef44002e1e70.md)
- [Top 25 DNS queries with most failures in last 24 hours (ASIM DNS Solution)](../content/dns-essentials-top-25-dns-queries-with-most-failures-in-last-24-hours-%28asim-dns-solution%29-4717929b-121d-4d90-b7ba-e3259ef16aca.md)
- [Top 25 Domains with large number of Subdomains (ASIM DNS Solution)](../content/dns-essentials-top-25-domains-with-large-number-of-subdomains-%28asim-dns-solution%29-5366b848-0886-439f-b312-0b94bb687d06.md)
- [Top 25 Sources(Clients) with high number of errors in last 24hours (ASIM DNS Solution)](../content/dns-essentials-top-25-sources%28clients%29-with-high-number-of-errors-in-last-24hours-%28asim-dns-solution%29-b35f6633-0d18-494c-a5e4-2828daf442bf.md)
- [Unexpected top level domains (ASIM DNS Solution)](../content/dns-essentials-unexpected-top-level-domains-%28asim-dns-solution%29-4c8d6412-5a48-42c3-8b5e-1f29fb15c749.md)
- [[Anomaly] Anomalous Increase in DNS activity by clients (ASIM DNS Solution)](../content/dns-essentials-[anomaly]-anomalous-increase-in-dns-activity-by-clients-%28asim-dns-solution%29-50f0cdfb-8b01-4eca-823d-2bbe6b8a5b95.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence---threat-hunting-domain-34288e97-5194-4f2e-abf2-c2783189f6ae.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-d641a534-ead8-41aa-a7c8-2b35e6b64c9f.md)

**In solution [Windows Server DNS](../solutions/windows-server-dns.md):**
- [Abnormally long DNS URI queries](../content/windows-server-dns-abnormally-long-dns-uri-queries-a0954a17-cc66-4d47-9651-8bf524bbdcc8.md)
- [DNS - domain anomalous lookup increase](../content/windows-server-dns-dns---domain-anomalous-lookup-increase-1d9951b7-51f0-4aa7-af0c-654359aadfff.md)
- [DNS Domains linked to WannaCry ransomware campaign](../content/windows-server-dns-dns-domains-linked-to-wannacry-ransomware-campaign-aaf84b80-7764-420c-98eb-239b5e194b3d.md)
- [DNS Full Name anomalous lookup increase](../content/windows-server-dns-dns-full-name-anomalous-lookup-increase-81b478a7-46e2-4f7f-a1aa-aba5e541232b.md)
- [DNS lookups for commonly abused TLDs](../content/windows-server-dns-dns-lookups-for-commonly-abused-tlds-8e9c4680-8c0b-4885-b183-3b09efd8fc2c.md)
- [High reverse DNS count by host](../content/windows-server-dns-high-reverse-dns-count-by-host-fda90754-4e22-4bb1-8b99-2bb49a991eae.md)
- [Potential DGA detected](../content/windows-server-dns-potential-dga-detected-543e1ec6-ee5e-4368-aaa6-405f0551ba5c.md)
- [Solorigate DNS Pattern](../content/windows-server-dns-solorigate-dns-pattern-0fb54a5c-5599-4ff9-80a2-f788c3ed285e.md)

### Workbooks (4)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [DNSSolutionWorkbook](../content/dns-essentials-dnssolutionworkbook.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [InvestigationInsights](../content/soc-handbook-investigationinsights.md)

**In solution [Windows Server DNS](../solutions/windows-server-dns.md):**
- [Dns](../content/windows-server-dns-dns.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
