# ⚠️ Group-IB

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** |  |
| **Support Tier** |  |
| **Solution Folder** | [Group-IB](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **21 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`GIBTIAAPTThreatActor_CL`](../tables/gibtiaaptthreatactor-cl.md) | Playbooks (writes) |
| [`GIBTIAAPTThreatReports_CL`](../tables/gibtiaaptthreatreports-cl.md) | Playbooks (writes) |
| [`GIBTIAAttacksDDoS_CL`](../tables/gibtiaattacksddos-cl.md) | Playbooks (writes) |
| [`GIBTIAAttacksDeface_CL`](../tables/gibtiaattacksdeface-cl.md) | Playbooks (writes) |
| [`GIBTIAAttacksPhishingKit_CL`](../tables/gibtiaattacksphishingkit-cl.md) | Playbooks (writes) |
| [`GIBTIABPPhishingKit_CL`](../tables/gibtiabpphishingkit-cl.md) | Playbooks (writes) |
| [`GIBTIABPPhishing_CL`](../tables/gibtiabpphishing-cl.md) | Playbooks (writes) |
| [`GIBTIACompromisedCard_CL`](../tables/gibtiacompromisedcard-cl.md) | Playbooks (writes) |
| [`GIBTIACompromisedIMEI_CL`](../tables/gibtiacompromisedimei-cl.md) | Playbooks (writes) |
| [`GIBTIACompromisedMule_CL`](../tables/gibtiacompromisedmule-cl.md) | Playbooks (writes) |
| [`GIBTIAHIThreatActor_CL`](../tables/gibtiahithreatactor-cl.md) | Playbooks (writes) |
| [`GIBTIAHIThreatReports_CL`](../tables/gibtiahithreatreports-cl.md) | Playbooks (writes) |
| [`GIBTIAMalwareCNC_CL`](../tables/gibtiamalwarecnc-cl.md) | Playbooks (writes) |
| [`GIBTIAOSIGitLeak_CL`](../tables/gibtiaosigitleak-cl.md) | Playbooks (writes) |
| [`GIBTIAOSIPublicLeak_CL`](../tables/gibtiaosipublicleak-cl.md) | Playbooks (writes) |
| [`GIBTIAOSIVulnerability_CL`](../tables/gibtiaosivulnerability-cl.md) | Playbooks (writes) |
| [`GIBTIASuspiciousIPOpenProxy_CL`](../tables/gibtiasuspiciousipopenproxy-cl.md) | Playbooks (writes) |
| [`GIBTIASuspiciousIPSocksProxy_CL`](../tables/gibtiasuspiciousipsocksproxy-cl.md) | Playbooks (writes) |
| [`GIBTIASuspiciousIPTorNode_CL`](../tables/gibtiasuspiciousiptornode-cl.md) | Playbooks (writes) |
| [`GIBTIATargetedMalware_CL`](../tables/gibtiatargetedmalware-cl.md) | Playbooks (writes) |
| [`GIBTechTable_CL`](../tables/gibtechtable-cl.md) | Playbooks (writes) |

## Content Items

This solution includes **23 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 23 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GIBIndicatorProcessor](../content/group-ib-gibindicatorprocessor-0fa780b9.md) ⚠️ | Author: Hesham Saad | - |
| [GIBTIA_APT_ThreatActor](../content/group-ib-gibtia-apt-threatactor-190ca81b.md) ⚠️ | Author: Hesham Saad | [`GIBTIAAPTThreatActor_CL`](../tables/gibtiaaptthreatactor-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_APT_Threats](../content/group-ib-gibtia-apt-threats-0bf2e06a.md) ⚠️ | Author: Hesham Saad | [`GIBTIAAPTThreatReports_CL`](../tables/gibtiaaptthreatreports-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_ddos](../content/group-ib-gibtia-attacks-ddos-676a7f45.md) ⚠️ | Author: Hesham Saad | [`GIBTIAAttacksDDoS_CL`](../tables/gibtiaattacksddos-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_deface](../content/group-ib-gibtia-attacks-deface-0571809a.md) ⚠️ | Author: Hesham Saad | [`GIBTIAAttacksDeface_CL`](../tables/gibtiaattacksdeface-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_phishing](../content/group-ib-gibtia-attacks-phishing-05e0bef0.md) ⚠️ | Author: Hesham Saad | [`GIBTIAAttacksPhishingKit_CL`](../tables/gibtiaattacksphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_phishing_kit](../content/group-ib-gibtia-attacks-phishing-kit-176cf63b.md) ⚠️ | Author: Hesham Saad | [`GIBTIAAttacksPhishingKit_CL`](../tables/gibtiaattacksphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_BP_phishing](../content/group-ib-gibtia-bp-phishing-1f9bfeff.md) ⚠️ | Author: Hesham Saad | [`GIBTIABPPhishing_CL`](../tables/gibtiabpphishing-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_BP_phishing_kit](../content/group-ib-gibtia-bp-phishing-kit-0f993020.md) ⚠️ | Author: Hesham Saad | [`GIBTIABPPhishingKit_CL`](../tables/gibtiabpphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_account](../content/group-ib-gibtia-compromised-account-12e40e7c.md) ⚠️ | Author: Hesham Saad | [`GIBTIABPPhishingKit_CL`](../tables/gibtiabpphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_card](../content/group-ib-gibtia-compromised-card-4873e37b.md) ⚠️ | Author: Hesham Saad | [`GIBTIACompromisedCard_CL`](../tables/gibtiacompromisedcard-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_imei](../content/group-ib-gibtia-compromised-imei-1e238983.md) ⚠️ | Author: Hesham Saad | [`GIBTIACompromisedIMEI_CL`](../tables/gibtiacompromisedimei-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_mule](../content/group-ib-gibtia-compromised-mule-500b5f08.md) ⚠️ | Author: Hesham Saad | [`GIBTIACompromisedMule_CL`](../tables/gibtiacompromisedmule-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_HI_Threat](../content/group-ib-gibtia-hi-threat-bfac31e2.md) ⚠️ | Author: Hesham Saad | [`GIBTIAHIThreatReports_CL`](../tables/gibtiahithreatreports-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_HI_Threat_Actor](../content/group-ib-gibtia-hi-threat-actor-2c1acd08.md) ⚠️ | Author: Hesham Saad | [`GIBTIAHIThreatActor_CL`](../tables/gibtiahithreatactor-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Malware_Targeted_Malware](../content/group-ib-gibtia-malware-targeted-malware-ece0af42.md) ⚠️ | Author: Hesham Saad | [`GIBTIATargetedMalware_CL`](../tables/gibtiatargetedmalware-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Malware_cnc](../content/group-ib-gibtia-malware-cnc-4702dbee.md) ⚠️ | Author: Hesham Saad | [`GIBTIAMalwareCNC_CL`](../tables/gibtiamalwarecnc-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_OSI_GitLeak](../content/group-ib-gibtia-osi-gitleak-631460d0.md) ⚠️ | Author: Hesham Saad | [`GIBTIAOSIGitLeak_CL`](../tables/gibtiaosigitleak-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_OSI_PublicLeak](../content/group-ib-gibtia-osi-publicleak-70bc2712.md) ⚠️ | Author: Hesham Saad | [`GIBTIAOSIPublicLeak_CL`](../tables/gibtiaosipublicleak-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_OSI_Vulnerability](../content/group-ib-gibtia-osi-vulnerability-abc46184.md) ⚠️ | Author: Hesham Saad | [`GIBTIAOSIVulnerability_CL`](../tables/gibtiaosivulnerability-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Suspicious_ip_open_proxy](../content/group-ib-gibtia-suspicious-ip-open-proxy-74ec79d9.md) ⚠️ | Author: Hesham Saad | [`GIBTIASuspiciousIPOpenProxy_CL`](../tables/gibtiasuspiciousipopenproxy-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Suspicious_ip_socks_proxy](../content/group-ib-gibtia-suspicious-ip-socks-proxy-872abe00.md) ⚠️ | Author: Hesham Saad | [`GIBTIASuspiciousIPSocksProxy_CL`](../tables/gibtiasuspiciousipsocksproxy-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Suspicious_ip_tor_node](../content/group-ib-gibtia-suspicious-ip-tor-node-48dd5935.md) ⚠️ | Author: Hesham Saad | [`GIBTIASuspiciousIPTorNode_CL`](../tables/gibtiasuspiciousiptornode-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

