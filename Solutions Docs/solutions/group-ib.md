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
| [GIBIndicatorProcessor](../content/gibindicatorprocessor-group-ib.md) | - | - |
| [GIBTIA_APT_ThreatActor](../content/gibtia-apt-threatactor-group-ib.md) | - | [`GIBTIAAPTThreatActor_CL`](../tables/gibtiaaptthreatactor-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_APT_Threats](../content/gibtia-apt-threats-group-ib.md) | - | [`GIBTIAAPTThreatReports_CL`](../tables/gibtiaaptthreatreports-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_ddos](../content/gibtia-attacks-ddos-group-ib.md) | - | [`GIBTIAAttacksDDoS_CL`](../tables/gibtiaattacksddos-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_deface](../content/gibtia-attacks-deface-group-ib.md) | - | [`GIBTIAAttacksDeface_CL`](../tables/gibtiaattacksdeface-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_phishing](../content/gibtia-attacks-phishing-group-ib.md) | - | [`GIBTIAAttacksPhishingKit_CL`](../tables/gibtiaattacksphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Attacks_phishing_kit](../content/gibtia-attacks-phishing-kit-group-ib.md) | - | [`GIBTIAAttacksPhishingKit_CL`](../tables/gibtiaattacksphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_BP_phishing](../content/gibtia-bp-phishing-group-ib.md) | - | [`GIBTIABPPhishing_CL`](../tables/gibtiabpphishing-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_BP_phishing_kit](../content/gibtia-bp-phishing-kit-group-ib.md) | - | [`GIBTIABPPhishingKit_CL`](../tables/gibtiabpphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_account](../content/gibtia-compromised-account-group-ib.md) | - | [`GIBTIABPPhishingKit_CL`](../tables/gibtiabpphishingkit-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_card](../content/gibtia-compromised-card-group-ib.md) | - | [`GIBTIACompromisedCard_CL`](../tables/gibtiacompromisedcard-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_imei](../content/gibtia-compromised-imei-group-ib.md) | - | [`GIBTIACompromisedIMEI_CL`](../tables/gibtiacompromisedimei-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Compromised_mule](../content/gibtia-compromised-mule-group-ib.md) | - | [`GIBTIACompromisedMule_CL`](../tables/gibtiacompromisedmule-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_HI_Threat](../content/gibtia-hi-threat-group-ib.md) | - | [`GIBTIAHIThreatReports_CL`](../tables/gibtiahithreatreports-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_HI_Threat_Actor](../content/gibtia-hi-threat-actor-group-ib.md) | - | [`GIBTIAHIThreatActor_CL`](../tables/gibtiahithreatactor-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Malware_Targeted_Malware](../content/gibtia-malware-targeted-malware-group-ib.md) | - | [`GIBTIATargetedMalware_CL`](../tables/gibtiatargetedmalware-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Malware_cnc](../content/gibtia-malware-cnc-group-ib.md) | - | [`GIBTIAMalwareCNC_CL`](../tables/gibtiamalwarecnc-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_OSI_GitLeak](../content/gibtia-osi-gitleak-group-ib.md) | - | [`GIBTIAOSIGitLeak_CL`](../tables/gibtiaosigitleak-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_OSI_PublicLeak](../content/gibtia-osi-publicleak-group-ib.md) | - | [`GIBTIAOSIPublicLeak_CL`](../tables/gibtiaosipublicleak-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_OSI_Vulnerability](../content/gibtia-osi-vulnerability-group-ib.md) | - | [`GIBTIAOSIVulnerability_CL`](../tables/gibtiaosivulnerability-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Suspicious_ip_open_proxy](../content/gibtia-suspicious-ip-open-proxy-group-ib.md) | - | [`GIBTIASuspiciousIPOpenProxy_CL`](../tables/gibtiasuspiciousipopenproxy-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Suspicious_ip_socks_proxy](../content/gibtia-suspicious-ip-socks-proxy-group-ib.md) | - | [`GIBTIASuspiciousIPSocksProxy_CL`](../tables/gibtiasuspiciousipsocksproxy-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |
| [GIBTIA_Suspicious_ip_tor_node](../content/gibtia-suspicious-ip-tor-node-group-ib.md) | - | [`GIBTIASuspiciousIPTorNode_CL`](../tables/gibtiasuspiciousiptornode-cl.md) *(write)*<br>[`GIBTechTable_CL`](../tables/gibtechtable-cl.md) *(read/write)* |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
