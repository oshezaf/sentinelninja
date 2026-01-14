# DnsEvents

Reference for DnsEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Network |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dnsevents) |

## Solutions (15)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [Dataminr Pulse](../solutions/dataminr-pulse.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [Windows Server DNS](../solutions/windows-server-dns.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

- [DNS](../connectors/dns.md)

---

## Content Items Using This Table (33)

### Analytic Rules (14)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI Map IP Entity to DnsEvents](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-dnsevents-ddf47b6f-870c-5712-a296-1383acb13c82-ac046e7e.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI domain in DnsEvents](../content/lumen-defender-threat-feed-lumen-ti-domain-in-dnsevents-29bf5bcd-6795-4c79-a91f-aaef5a618bab-3483c267.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map IP Entity to DnsEvents](../content/threat-intelligence-ti-map-ip-entity-to-dnsevents-69b7723c-2889-469f-8b55-a2d355ed9c87-bb4a4c77.md)
- [TI map Domain entity to DnsEvents](../content/threat-intelligence-ti-map-domain-entity-to-dnsevents-85aca4d1-5d15-4001-abd9-acb86ca1786a-1658942e.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map IP Entity to DnsEvents](../content/threat-intelligence-new-ti-map-ip-entity-to-dnsevents-6418fd33-92f2-407b-bd61-91c0d4bbcb8a-5cae9331.md)
- [TI map Domain entity to DnsEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-dnsevents-03a8e294-3fc7-4d65-9da2-cff91fb5b6dc-1b58bbc8.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [Threat Connect TI map Domain entity to DnsEvents](../content/threatconnect-threat-connect-ti-map-domain-entity-to-dnsevents-f8960f1c-07d2-512b-9c41-952772d40c84-e3919e52.md)

**In solution [Windows Server DNS](../solutions/windows-server-dns.md):**
- [DNS events related to ToR proxies](../content/windows-server-dns-dns-events-related-to-tor-proxies-a83ef0f4-dace-4767-bce3-ebd32599d2a0-144d141a.md)
- [DNS events related to mining pools](../content/windows-server-dns-dns-events-related-to-mining-pools-0d76e9cf-788d-4a69-ac7d-f234826b5bed-54471aa6.md)
- [NRT DNS events related to mining pools](../content/windows-server-dns-nrt-dns-events-related-to-mining-pools-d5b32cd4-2328-43da-ab47-cd289c1f5efc-8dd1a5ad.md)
- [Potential DGA detected](../content/windows-server-dns-potential-dga-detected-a0907abe-6925-4d90-af2b-c7e89dc201a6-678f161d.md)
- [Rare client observed with high reverse DNS lookup count](../content/windows-server-dns-rare-client-observed-with-high-reverse-dns-lookup-count-15ae38a2-2e29-48f7-883f-863fb25a5a06-e3f85e2d.md)

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**
- [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md)

### Hunting Queries (9)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Cobalt Strike DNS Beaconing](../content/attacker-tools-threat-protection-essentials-cobalt-strike-dns-beaconing-dde206fc-3f0b-4175-bb5d-42d2aae9d4c9-35f15bcd.md)

**In solution [Windows Server DNS](../solutions/windows-server-dns.md):**
- [Abnormally long DNS URI queries](../content/windows-server-dns-abnormally-long-dns-uri-queries-a0954a17-cc66-4d47-9651-8bf524bbdcc8-2ac71219.md)
- [DNS - domain anomalous lookup increase](../content/windows-server-dns-dns-domain-anomalous-lookup-increase-1d9951b7-51f0-4aa7-af0c-654359aadfff-26eb2bc8.md)
- [DNS Domains linked to WannaCry ransomware campaign](../content/windows-server-dns-dns-domains-linked-to-wannacry-ransomware-campaign-aaf84b80-7764-420c-98eb-239b5e194b3d-74157fd9.md)
- [DNS Full Name anomalous lookup increase](../content/windows-server-dns-dns-full-name-anomalous-lookup-increase-81b478a7-46e2-4f7f-a1aa-aba5e541232b-21ae26d6.md)
- [DNS lookups for commonly abused TLDs](../content/windows-server-dns-dns-lookups-for-commonly-abused-tlds-8e9c4680-8c0b-4885-b183-3b09efd8fc2c-5cb006c9.md)
- [High reverse DNS count by host](../content/windows-server-dns-high-reverse-dns-count-by-host-fda90754-4e22-4bb1-8b99-2bb49a991eae-98bb4c25.md)
- [Potential DGA detected](../content/windows-server-dns-potential-dga-detected-543e1ec6-ee5e-4368-aaa6-405f0551ba5c-d483d155.md)
- [Solorigate DNS Pattern](../content/windows-server-dns-solorigate-dns-pattern-0fb54a5c-5599-4ff9-80a2-f788c3ed285e-42e0ed66.md)

### Workbooks (10)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [Dataminr Pulse](../solutions/dataminr-pulse.md):**
- [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-d5436210.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)
- [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md)
- [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md)

**In solution [Windows Server DNS](../solutions/windows-server-dns.md):**
- [Dns](../content/windows-server-dns-dns-ed7f9abb.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimDnsMicrosoftOMS](../asim/asimdnsmicrosoftoms.md) | Dns |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

