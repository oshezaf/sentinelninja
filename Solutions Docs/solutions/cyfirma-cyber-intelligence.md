# Cyfirma Cyber Intelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cyfirma_logo.svg" alt="Cyfirma Cyber Intelligence Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The CYFIRMA Cyber Intelligence solution integrates with Microsoft Sentinel to provide actionable intelligence on IOCs, threat actors, malicious campaigns, and malware. This integration enables security teams to detect, analyze, and respond to emerging threats by correlating external threat data with internal telemetry. By ingesting enriched threat intelligence into Sentinel, organizations gain visibility into malicious activity, track threat actor tactics, and automate defense mechanisms to mitigate risks proactively.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CYFIRMA |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyfirma.com/contact-us/](https://www.cyfirma.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft |
| **First Published** | 2025-05-15 |
| **Solution Folder** | [Cyfirma Cyber Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CYFIRMA Cyber Intelligence](../connectors/cyfirmacyberintelligencedc.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyfirmaCampaigns_CL`](../tables/cyfirmacampaigns-cl.md) | [CYFIRMA Cyber Intelligence](../connectors/cyfirmacyberintelligencedc.md) | - |
| [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) | [CYFIRMA Cyber Intelligence](../connectors/cyfirmacyberintelligencedc.md) | Analytics |
| [`CyfirmaMalware_CL`](../tables/cyfirmamalware-cl.md) | [CYFIRMA Cyber Intelligence](../connectors/cyfirmacyberintelligencedc.md) | - |
| [`CyfirmaThreatActors_CL`](../tables/cyfirmathreatactors-cl.md) | [CYFIRMA Cyber Intelligence](../connectors/cyfirmacyberintelligencedc.md) | - |

## Content Items

This solution includes **36 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 36 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CYFIRMA - High severity Command & Control Network Indicators with Block Recommendation Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-command-&-control-network-indicators-with-block-recomme-6b61b716-afd9-4f6c-ad00-965d5987cafd-8651de1a.md) | High | CommandAndControl, InitialAccess, Exfiltration | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Command & Control Network Indicators with Monitor Recommendation Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-command-&-control-network-indicators-with-monitor-recom-6d8fb3fe-2501-4103-8137-34261fa3a596-cb3b99b5.md) | High | CommandAndControl, InitialAccess, Exfiltration | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity File Hash Indicators with Block Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-file-hash-indicators-with-block-action-rule-7cb829b2-915a-42c2-adb9-725e9ce9bf43-4d6aa010.md) | High | Execution, InitialAccess, DefenseEvasion, Impact | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity File Hash Indicators with Block Action and Malware](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-file-hash-indicators-with-block-action-and-malware-990fc0dc-e7a5-4f6d-bc24-8569652cd773-b680f8fe.md) | High | InitialAccess, Execution, Persistence, PrivilegeEscalation, DefenseEvasion, CredentialAccess, Discovery, LateralMovement, Collection, Impact | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity File Hash Indicators with Monitor Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-file-hash-indicators-with-monitor-action-rule-952b7d77-a848-4888-a638-62fe877eb55d-982dfcaa.md) | High | Execution, InitialAccess, DefenseEvasion, Impact | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity File Hash Indicators with Monitor Action and Malware](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-file-hash-indicators-with-monitor-action-and-malware-c919c911-8b01-44f8-9c3b-60b1edfc417f-ef55efec.md) | High | DefenseEvasion, InitialAccess, Impact, Execution | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Malicious Network Indicators Associated with Malware - Block Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-malicious-network-indicators-associated-with-malware-bl-c7c02bbf-b775-4e85-a3c7-7f8a9318fd2f-58e56c9d.md) | High | InitialAccess, Execution, CommandAndControl | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Malicious Network Indicators Associated with Malware - Monitor Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-malicious-network-indicators-associated-with-malware-mo-c7b0b6da-e9dc-405d-ad71-37661f56d40a-8a422296.md) | High | InitialAccess, Execution, CommandAndControl | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Malicious Network Indicators with Block Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-malicious-network-indicators-with-block-action-rule-58ae2c87-fc07-434b-aacf-f66d25b25e7e-72ea88b0.md) | High | InitialAccess, Execution, Reconnaissance, Impact | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Malicious Network Indicators with Monitor Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-malicious-network-indicators-with-monitor-action-rule-8317de44-09e4-4a04-8fae-c38c1b72064b-db9b947f.md) | High | InitialAccess, Execution, Reconnaissance, Impact | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Malicious Phishing Network Indicators - Block Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-malicious-phishing-network-indicators-block-recommended-6f053867-dbd8-4755-924d-577e3db7f5a6-67f3de56.md) | High | InitialAccess, Execution, CredentialAccess, Exfiltration | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Malicious Phishing Network Indicators - Monitor Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-malicious-phishing-network-indicators-monitor-recommend-359e2afb-b6d4-45db-90aa-c89ce7234d72-efa9ff68.md) | High | InitialAccess, Execution, CredentialAccess, Exfiltration | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity TOR Node Network Indicators - Block Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-tor-node-network-indicators-block-recommended-rule-fa53ac37-a646-4106-91b6-ce478a1b5323-b6a57255.md) | High | CommandAndControl, Exfiltration, InitialAccess, Persistence, Reconnaissance | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity TOR Node Network Indicators - Monitor Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-tor-node-network-indicators-monitor-recommended-rule-6f107cf8-02f9-4440-b5d8-1235293e5ad7-24c98f8c.md) | High | CommandAndControl, Exfiltration, InitialAccess, Persistence, Reconnaissance | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Trojan File Hash Indicators with Block Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-trojan-file-hash-indicators-with-block-action-rule-649f525a-1f92-412d-bfc2-ce642e7a7f1f-4a4775c9.md) | High | InitialAccess, Execution, Persistence, DefenseEvasion, CommandAndControl, CredentialAccess | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Trojan File Hash Indicators with Monitor Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-trojan-file-hash-indicators-with-monitor-action-rule-4afd8960-8bee-4cac-bb5e-a4f200b1f9f3-d2b16439.md) | High | InitialAccess, Execution, Persistence, DefenseEvasion, CommandAndControl, CredentialAccess | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Trojan Network Indicators - Block Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-trojan-network-indicators-block-recommended-rule-441204ca-274f-43d2-aeda-53409b94f447-14b60923.md) | High | Impact, Persistence, DefenseEvasion, CredentialAccess, CommandAndControl, Execution, InitialAccess | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - High severity Trojan Network Indicators - Monitor Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-high-severity-trojan-network-indicators-monitor-recommended-rule-89fd02b8-3c21-492c-a8de-b3e728d39119-2f9b19be.md) | High | Impact, Persistence, DefenseEvasion, CredentialAccess, CommandAndControl, Execution, InitialAccess | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Command & Control Network Indicators with Block Recommendation Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-command-&-control-network-indicators-with-block-recom-b278be0f-0662-47b4-9ab5-71a0f1435c3f-37db5e60.md) | Medium | CommandAndControl, InitialAccess, Exfiltration | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Command & Control Network Indicators with Monitor Recommendation Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-command-&-control-network-indicators-with-monitor-rec-75931755-27cd-4e4b-a51c-efcca452e2ff-0ad8276f.md) | Medium | CommandAndControl, InitialAccess, Exfiltration | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity File Hash Indicators with Block Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-file-hash-indicators-with-block-action-rule-cd06dae8-7b79-436b-b1a6-9d256830f9dd-e453f351.md) | Medium | Execution, InitialAccess, DefenseEvasion, Impact | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity File Hash Indicators with Block Action and Malware](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-file-hash-indicators-with-block-action-and-malware-24dcff02-123c-4e10-a531-2a22a609120a-7829324e.md) | Medium | InitialAccess, Execution, Persistence, PrivilegeEscalation, DefenseEvasion, CredentialAccess, Discovery, LateralMovement, Collection, Impact | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity File Hash Indicators with Monitor Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-file-hash-indicators-with-monitor-action-rule-5347c581-eb36-4bf5-a7e5-be1fb2d617f5-c6fc3388.md) | Medium | Execution, InitialAccess, DefenseEvasion, Impact | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity File Hash Indicators with Monitor Action and Malware](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-file-hash-indicators-with-monitor-action-and-malware-ca16daff-28dd-499d-93fe-0bb232d76d4f-d50a3566.md) | Medium | DefenseEvasion, InitialAccess, Impact, Execution | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Malicious Network Indicators Associated with Malware - Block Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-malicious-network-indicators-associated-with-malware--77226d6e-1263-42b1-a40d-8a756407ad4c-d1842c16.md) | Medium | InitialAccess, Execution, CommandAndControl | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Malicious Network Indicators Associated with Malware - Monitor Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-malicious-network-indicators-associated-with-malware--ee2325cc-f5ba-49ac-b4d9-58ef0766e168-20db2883.md) | Medium | InitialAccess, Execution, CommandAndControl | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Malicious Network Indicators with Block Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-malicious-network-indicators-with-block-action-rule-4e7d1851-5aab-478d-b348-4b83dc2b03d9-0f35b5ff.md) | Medium | InitialAccess, Execution, Reconnaissance, Impact | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Malicious Network Indicators with Monitor Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-malicious-network-indicators-with-monitor-action-rule-52c2f8d4-1dc8-4141-9152-614c036390a0-26502123.md) | Medium | InitialAccess, Execution, Reconnaissance, Impact | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Malicious Phishing Network Indicators - Block Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-malicious-phishing-network-indicators-block-recommend-5468e012-6681-44fb-be2d-b1cd58b62ac7-1a49ef2b.md) | Medium | InitialAccess, Execution, CredentialAccess, Exfiltration | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Malicious Phishing Network Indicators - Monitor Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-malicious-phishing-network-indicators-monitor-recomme-1b9603dd-4787-403e-8a35-387c554bd15b-8ad39c9a.md) | Medium | InitialAccess, Execution, CredentialAccess, Exfiltration | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity TOR Node Network Indicators - Block Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-tor-node-network-indicators-block-recommended-rule-aba36dc3-af43-4ab6-9349-3d1e37f1d4f3-fbd56735.md) | Medium | CommandAndControl, Exfiltration, InitialAccess, Persistence, Reconnaissance | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity TOR Node Network Indicators - Monitor Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-tor-node-network-indicators-monitor-recommended-rule-e41b7640-9ba6-42d6-a4c9-1ab6932a0b14-28f0d22b.md) | Medium | CommandAndControl, Exfiltration, InitialAccess, Persistence, Reconnaissance | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Trojan File Hash Indicators with Block Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-trojan-file-hash-indicators-with-block-action-rule-25686f44-5f5f-4388-95e2-eea244481438-0215c704.md) | Medium | InitialAccess, Execution, Persistence, DefenseEvasion, CommandAndControl, CredentialAccess | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Trojan File Hash Indicators with Monitor Action Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-trojan-file-hash-indicators-with-monitor-action-rule-b89c893e-650f-4569-afc3-c487efee2472-6a453012.md) | Medium | InitialAccess, Execution, Persistence, DefenseEvasion, CommandAndControl, CredentialAccess | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Trojan Network Indicators - Block Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-trojan-network-indicators-block-recommended-rule-baa63d52-285d-43bf-a34e-8ed2fa260f9e-30108c29.md) | Medium | Impact, Persistence, DefenseEvasion, CredentialAccess, CommandAndControl, Execution, InitialAccess | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |
| [CYFIRMA - Medium severity Trojan Network Indicators - Monitor Recommended Rule](../content/cyfirma-cyber-intelligence-cyfirma-medium-severity-trojan-network-indicators-monitor-recommended-rule-104f4574-fc95-4f38-8aa2-02f0b78eba9b-4299cd5d.md) | Medium | Impact, Persistence, DefenseEvasion, CredentialAccess, CommandAndControl, Execution, InitialAccess | [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                     |
|-------------|--------------------------------|------------------------------------------------------------------------|
| 3.0.2       | 04-09-2025                     | Bugs fixes to **CCF Data Connector**.                                  |
| 3.0.1       | 24-07-2025                     | Minor changes and New analytics rules added to **CCF Data Connector**. |
| 3.0.0       | 17-06-2025                     | Initial Solution Release.                                              |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

