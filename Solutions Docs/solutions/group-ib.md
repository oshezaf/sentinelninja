# Group-IB

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** |  |
| **Support Tier** |  |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

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
| [GIBIndicatorProcessor](../content/group-ib-gibindicatorprocessor.md) | Author: Hesham Saad | - |
| [GIBTIA_APT_ThreatActor](../content/group-ib-gibtia-apt-threatactor.md) | Author: Hesham Saad | [`GIBTIAAPTThreatActor_CL`](../tables/gibtiaaptthreatactor-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_APT_Threats](../content/group-ib-gibtia-apt-threats.md) | Author: Hesham Saad | [`GIBTIAAPTThreatReports_CL`](../tables/gibtiaaptthreatreports-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_ddos](../content/group-ib-gibtia-attacks-ddos.md) | Author: Hesham Saad | [`GIBTIAAttacksDDoS_CL`](../tables/gibtiaattacksddos-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_deface](../content/group-ib-gibtia-attacks-deface.md) | Author: Hesham Saad | [`GIBTIAAttacksDeface_CL`](../tables/gibtiaattacksdeface-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_phishing](../content/group-ib-gibtia-attacks-phishing.md) | Author: Hesham Saad | [`GIBTIAAttacksPhishingKit_CL`](../tables/gibtiaattacksphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_phishing_kit](../content/group-ib-gibtia-attacks-phishing-kit.md) | Author: Hesham Saad | [`GIBTIAAttacksPhishingKit_CL`](../tables/gibtiaattacksphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_BP_phishing](../content/group-ib-gibtia-bp-phishing.md) | Author: Hesham Saad | [`GIBTIABPPhishing_CL`](../tables/gibtiabpphishing-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_BP_phishing_kit](../content/group-ib-gibtia-bp-phishing-kit.md) | Author: Hesham Saad | [`GIBTIABPPhishingKit_CL`](../tables/gibtiabpphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_account](../content/group-ib-gibtia-compromised-account.md) | Author: Hesham Saad | [`GIBTIABPPhishingKit_CL`](../tables/gibtiabpphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_card](../content/group-ib-gibtia-compromised-card.md) | Author: Hesham Saad | [`GIBTIACompromisedCard_CL`](../tables/gibtiacompromisedcard-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_imei](../content/group-ib-gibtia-compromised-imei.md) | Author: Hesham Saad | [`GIBTIACompromisedIMEI_CL`](../tables/gibtiacompromisedimei-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_mule](../content/group-ib-gibtia-compromised-mule.md) | Author: Hesham Saad | [`GIBTIACompromisedMule_CL`](../tables/gibtiacompromisedmule-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_HI_Threat](../content/group-ib-gibtia-hi-threat.md) | Author: Hesham Saad | [`GIBTIAHIThreatReports_CL`](../tables/gibtiahithreatreports-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_HI_Threat_Actor](../content/group-ib-gibtia-hi-threat-actor.md) | Author: Hesham Saad | [`GIBTIAHIThreatActor_CL`](../tables/gibtiahithreatactor-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Malware_Targeted_Malware](../content/group-ib-gibtia-malware-targeted-malware.md) | Author: Hesham Saad | [`GIBTIATargetedMalware_CL`](../tables/gibtiatargetedmalware-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Malware_cnc](../content/group-ib-gibtia-malware-cnc.md) | Author: Hesham Saad | [`GIBTIAMalwareCNC_CL`](../tables/gibtiamalwarecnc-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_OSI_GitLeak](../content/group-ib-gibtia-osi-gitleak.md) | Author: Hesham Saad | [`GIBTIAOSIGitLeak_CL`](../tables/gibtiaosigitleak-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_OSI_PublicLeak](../content/group-ib-gibtia-osi-publicleak.md) | Author: Hesham Saad | [`GIBTIAOSIPublicLeak_CL`](../tables/gibtiaosipublicleak-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_OSI_Vulnerability](../content/group-ib-gibtia-osi-vulnerability.md) | Author: Hesham Saad | [`GIBTIAOSIVulnerability_CL`](../tables/gibtiaosivulnerability-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Suspicious_ip_open_proxy](../content/group-ib-gibtia-suspicious-ip-open-proxy.md) | Author: Hesham Saad | [`GIBTIASuspiciousIPOpenProxy_CL`](../tables/gibtiasuspiciousipopenproxy-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Suspicious_ip_socks_proxy](../content/group-ib-gibtia-suspicious-ip-socks-proxy.md) | Author: Hesham Saad | [`GIBTIASuspiciousIPSocksProxy_CL`](../tables/gibtiasuspiciousipsocksproxy-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Suspicious_ip_tor_node](../content/group-ib-gibtia-suspicious-ip-tor-node.md) | Author: Hesham Saad | [`GIBTIASuspiciousIPTorNode_CL`](../tables/gibtiasuspiciousiptornode-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
