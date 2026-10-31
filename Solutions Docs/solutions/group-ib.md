# ⚠️ Group-IB

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GIB_Logo.svg" alt="Group-IB Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Group-IB |
| **Support Tier** | Partner |
| **Support Link** | [https://tap.group-ib.com/hc/api](https://tap.group-ib.com/hc/api) |
| **Categories** | Security - Threat Intelligence,Security - Automation (SOAR) |
| **Version** | 3.0.0 |
| **Author** | Group-IB - integration@group-ib.com |
| **First Published** | 2026-10-01 |
| **Solution Folder** | [Group-IB](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB) |

The [Group-IB Threat Intelligence](https://www.group-ib.com/products/threat-intelligence/) solution for Microsoft Sentinel connects the Group-IB Threat Intelligence platform to Microsoft Sentinel with Azure Logic Apps playbooks. Scheduled collector playbooks poll the Group-IB TI collections and deliver two kinds of content: threat indicators (IP addresses, domains, URLs and file hashes) uploaded to Microsoft Sentinel Threat Intelligence as STIX 2.1 objects, and context records (threat actor profiles, APT and hacktivist reports, malware intelligence, vulnerabilities, leaked credentials, compromised cards and public leaks) written to Log Analytics custom tables through the Logs Ingestion API. Enrichment playbooks, triggered from an incident or an entity, add Group-IB IOC search, WHOIS and IP scoring results as incident comments.

**Playbooks:** 26 scheduled collectors, 1 indicator-processor playbook that all indicator collectors batch into (deploy it first), 3 incident-triggered and 7 entity-triggered enrichment playbooks.

**Prerequisites:** a Group-IB Threat Intelligence subscription with API access (username and API key).

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **74 content item(s)** (37 in solution, 37 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Playbooks | 74 | 37 | 37 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Group-IB TI - APT threat actor collector](../content/group-ib-group-ib-ti-apt-threat-actor-collector-412ec4d2.md) | Polls the Group-IB Threat Intelligence apt/threat_actor collection hourly using incremental seqUpdat... | - |
| [Group-IB TI - APT threat report collector](../content/group-ib-group-ib-ti-apt-threat-report-collector-41971843.md) | Polls the Group-IB Threat Intelligence apt/threat collection hourly using incremental seqUpdate pagi... | - |
| [Group-IB TI - Breached database collector](../content/group-ib-group-ib-ti-breached-database-collector-0bd302b2.md) | Polls the Group-IB Threat Intelligence compromised/breacheddb collection hourly using incremental se... | - |
| [Group-IB TI - Compromised account collector](../content/group-ib-group-ib-ti-compromised-account-collector-ef89becc.md) | Polls the Group-IB Threat Intelligence compromised/account_group collection hourly using incremental... | - |
| [Group-IB TI - Compromised bank card collector](../content/group-ib-group-ib-ti-compromised-bank-card-collector-0b46c8f4.md) | Polls the Group-IB Threat Intelligence compromised/bank_card_group collection hourly using increment... | - |
| [Group-IB TI - Compromised personal data collector](../content/group-ib-group-ib-ti-compromised-personal-data-collector-4502a858.md) | Polls the Group-IB Threat Intelligence compromised/spd collection hourly using incremental seqUpdate... | - |
| [Group-IB TI - DDoS indicator collector](../content/group-ib-group-ib-ti-ddos-indicator-collector-1ba50221.md) | Polls the Group-IB Threat Intelligence attacks/ddos collection hourly using incremental seqUpdate pa... | - |
| [Group-IB TI - Defacement indicator collector](../content/group-ib-group-ib-ti-defacement-indicator-collector-68fe642a.md) | Polls the Group-IB Threat Intelligence attacks/deface collection hourly using incremental seqUpdate ... | - |
| [Group-IB TI - Enrich incident with IOC context](../content/group-ib-group-ib-ti-enrich-incident-with-ioc-context-6eba8145.md) | Triggered by a Microsoft Sentinel incident. Searches Group-IB Threat Intelligence for every IP, doma... | - |
| [Group-IB TI - Enrich incident with WHOIS data](../content/group-ib-group-ib-ti-enrich-incident-with-whois-data-c983f2c6.md) | Triggered by a Microsoft Sentinel incident. Runs a Group-IB WHOIS lookup for every IP and domain ent... | - |
| [Group-IB TI - Enrich single IP entity with IOC context](../content/group-ib-group-ib-ti-enrich-single-ip-entity-with-ioc-context-1806f7b7.md) | Entity-triggered playbook. Run it against a single IP address entity from the incident investigation... | - |
| [Group-IB TI - Enrich single URL entity with IOC context](../content/group-ib-group-ib-ti-enrich-single-url-entity-with-ioc-context-3ccc57e4.md) | Entity-triggered playbook. Run it against a single URL entity from the incident investigation graph ... | - |
| [Group-IB TI - Enrich single domain entity with IOC context](../content/group-ib-group-ib-ti-enrich-single-domain-entity-with-ioc-context-a3032bca.md) | Entity-triggered playbook. Run it against a single domain entity from the incident investigation gra... | - |
| [Group-IB TI - Enrich single file hash entity with IOC context](../content/group-ib-group-ib-ti-enrich-single-file-hash-entity-with-ioc-context-7b257dd4.md) | Entity-triggered playbook. Run it against a single file hash entity from the incident investigation ... | - |
| [Group-IB TI - Git repository leak collector](../content/group-ib-group-ib-ti-git-repository-leak-collector-de7684d8.md) | Polls the Group-IB Threat Intelligence osi/git_repository collection hourly using incremental seqUpd... | - |
| [Group-IB TI - Hacker intelligence threat actor collector](../content/group-ib-group-ib-ti-hacker-intelligence-threat-actor-collector-cf0c8722.md) | Polls the Group-IB Threat Intelligence hi/threat_actor collection hourly using incremental seqUpdate... | - |
| [Group-IB TI - Hacker intelligence threat collector](../content/group-ib-group-ib-ti-hacker-intelligence-threat-collector-d9f670a3.md) | Polls the Group-IB Threat Intelligence hi/threat collection hourly using incremental seqUpdate pagin... | - |
| [Group-IB TI - Indicator processor (required adapter)](../content/group-ib-group-ib-ti-indicator-processor-required-adapter-4692ecb4.md) | Required adapter for the Group-IB collector playbooks. Receives batched STIX 2.1 indicators from the... | - |
| [Group-IB TI - Malware C2 indicator collector](../content/group-ib-group-ib-ti-malware-c2-indicator-collector-ebf2ee2e.md) | Polls the Group-IB Threat Intelligence malware/cnc collection hourly using incremental seqUpdate pag... | - |
| [Group-IB TI - Malware configuration indicator collector](../content/group-ib-group-ib-ti-malware-configuration-indicator-collector-9e7b6546.md) | Polls the Group-IB Threat Intelligence malware/config collection hourly using incremental seqUpdate ... | - |
| [Group-IB TI - Masked card collector](../content/group-ib-group-ib-ti-masked-card-collector-c497904e.md) | Polls the Group-IB Threat Intelligence compromised/masked_card collection hourly using incremental s... | - |
| [Group-IB TI - Open proxy indicator collector](../content/group-ib-group-ib-ti-open-proxy-indicator-collector-0337e2d1.md) | Polls the Group-IB Threat Intelligence suspicious_ip/open_proxy collection hourly using incremental ... | - |
| [Group-IB TI - Open threats collector](../content/group-ib-group-ib-ti-open-threats-collector-ee483c55.md) | Polls the Group-IB Threat Intelligence hi/open_threats collection hourly using incremental seqUpdate... | - |
| [Group-IB TI - Phishing indicator collector](../content/group-ib-group-ib-ti-phishing-indicator-collector-a628e258.md) | Polls the Group-IB Threat Intelligence attacks/phishing_group collection hourly using incremental se... | - |
| [Group-IB TI - Phishing kit indicator collector](../content/group-ib-group-ib-ti-phishing-kit-indicator-collector-30c509a7.md) | Polls the Group-IB Threat Intelligence attacks/phishing_kit collection hourly using incremental seqU... | - |
| [Group-IB TI - Primary IOC collector](../content/group-ib-group-ib-ti-primary-ioc-collector-a1d55ae5.md) | Polls the Group-IB Threat Intelligence ioc/primary collection hourly using incremental seqUpdate pag... | - |
| [Group-IB TI - Public leak collector](../content/group-ib-group-ib-ti-public-leak-collector-ffa38a05.md) | Polls the Group-IB Threat Intelligence osi/public_leak collection hourly using incremental seqUpdate... | - |
| [Group-IB TI - SOCKS proxy indicator collector](../content/group-ib-group-ib-ti-socks-proxy-indicator-collector-9207a1ca.md) | Polls the Group-IB Threat Intelligence suspicious_ip/socks_proxy collection hourly using incremental... | - |
| [Group-IB TI - Scanner indicator collector](../content/group-ib-group-ib-ti-scanner-indicator-collector-226cbf96.md) | Polls the Group-IB Threat Intelligence suspicious_ip/scanner collection hourly using incremental seq... | - |
| [Group-IB TI - Score a single IP entity](../content/group-ib-group-ib-ti-score-a-single-ip-entity-ed3c7eb3.md) | Entity-triggered playbook. Run it against a single IP address entity from the incident investigation... | - |
| [Group-IB TI - Score incident IP addresses](../content/group-ib-group-ib-ti-score-incident-ip-addresses-16ea5229.md) | Triggered by a Microsoft Sentinel incident. Retrieves the Group-IB risk score and associated categor... | - |
| [Group-IB TI - Targeted malware collector](../content/group-ib-group-ib-ti-targeted-malware-collector-61a1f026.md) | Polls the Group-IB Threat Intelligence malware/malware collection hourly using incremental seqUpdate... | - |
| [Group-IB TI - Tor node indicator collector](../content/group-ib-group-ib-ti-tor-node-indicator-collector-9ec32614.md) | Polls the Group-IB Threat Intelligence suspicious_ip/tor_node collection hourly using incremental se... | - |
| [Group-IB TI - VPN indicator collector](../content/group-ib-group-ib-ti-vpn-indicator-collector-1471577d.md) | Polls the Group-IB Threat Intelligence suspicious_ip/vpn collection hourly using incremental seqUpda... | - |
| [Group-IB TI - Vulnerability collector](../content/group-ib-group-ib-ti-vulnerability-collector-250664cb.md) | Polls the Group-IB Threat Intelligence osi/vulnerability collection hourly using incremental seqUpda... | - |
| [Group-IB TI - WHOIS lookup for a single IP entity](../content/group-ib-group-ib-ti-whois-lookup-for-a-single-ip-entity-c670f284.md) | Entity-triggered playbook. Run it against a single IP address entity from the incident investigation... | - |
| [Group-IB TI - WHOIS lookup for a single domain entity](../content/group-ib-group-ib-ti-whois-lookup-for-a-single-domain-entity-5ca6b2b6.md) | Entity-triggered playbook. Run it against a single domain entity from the incident investigation gra... | - |
| [workflow](../content/group-ib-workflow-3aa5960e.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-6c121767.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-0d34dd4b.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-9f2b770f.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-3cd7a8a7.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-54537823.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-ba1e2db8.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-44643bf5.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-ec73ab37.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-fe8656b4.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-0bd85cab.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-4054d138.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-43b129a4.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-64a91589.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-68403aed.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-75f04dbb.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-ab5b6ff1.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-d060ef46.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-1b6e9c0c.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-26b92ce7.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-ba077bd7.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-8ee96f2d.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-38cb684e.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-b37ab530.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-cd905e7e.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-de672ca8.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-b6047034.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-950e0818.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-4499a861.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-364d5544.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-751fce10.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-fc7a60be.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-2bd9db91.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-a5b55ad6.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-4e7911e4.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-d24db843.md) ⚠️ | - | - |
| [workflow](../content/group-ib-workflow-71c2e698.md) ⚠️ | - | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 01-10-2026                     | Initial solution package: 37 playbooks (26 scheduled Group-IB TI collectors, the indicator-processor playbook, 10 enrichment playbooks) using the Logs Ingestion API and the Microsoft Sentinel threat intelligence upload API. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

