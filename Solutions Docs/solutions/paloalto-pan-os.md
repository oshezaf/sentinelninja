# PaloAlto-PAN-OS

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-08-09 |
| **Last Updated** | 2021-09-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md)
- [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md), [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **16 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 7 |
| Analytic Rules | 5 |
| Hunting Queries | 2 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Microsoft COVID-19 file hash indicator matches](../content/2be4ef67-a93f-4d8a-981a-88158cb73abd.md) | Medium | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Palo Alto - possible internal to external port scanning](../content/5b72f527-e3f6-4a00-9908-8e4fee14da9f.md) | Low | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [Palo Alto - possible nmap scan on with top 100 option](../content/4d61bb9a-7f6d-45b1-ac0e-517e2a92f6fd.md) | Medium | Reconnaissance | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Palo Alto - potential beaconing detected](../content/f0be259a-34ac-4946-aa15-ca2b115d5feb.md) | Low | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [Palo Alto Threat signatures from Unusual IP addresses](../content/89a86f70-615f-4a79-9621-6f68c50f365f.md) | Medium | Discovery, Exfiltration, CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Palo Alto - high-risk ports](../content/0a57accf-3548-4e38-a861-99687c958f59.md) | InitialAccess, Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |
| [Palo Alto - potential beaconing detected](../content/2f8522fc-7807-4f0a-b53d-458296edab8d.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`fluentbit_CL`](../tables/fluentbit-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PaloAltoNetworkThreat](../content/paloaltonetworkthreat-paloalto-pan-os.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAltoOverview](../content/paloaltooverview-paloalto-pan-os.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block IP - Palo Alto PAN-OS - Entity trigger](../content/block-ip---palo-alto-pan-os---entity-trigger-paloalto-pan-os.md) | This playbook interacts with relevant stakeholders, such incident response team, to approve blocking... | - |
| [Get System Info - Palo Alto PAN-OS XML API](../content/get-system-info---palo-alto-pan-os-xml-api-paloalto-pan-os.md) | This playbook allows us to get System Info of a Palo Alto device for a Microsoft Sentinel alert. | - |
| [Get Threat PCAP - Palo Alto PAN-OS XML API](../content/get-threat-pcap---palo-alto-pan-os-xml-api-paloalto-pan-os.md) | This playbook allows us to get a threat PCAP for a given PCAP ID. | - |
| [PaloAlto-PAN-OS-BlockIP](../content/paloalto-pan-os-blockip-paloalto-pan-os.md) | This playbook allows blocking/unblocking IPs in PaloAlto, using **Address Object Groups**. This allo... | - |
| [PaloAlto-PAN-OS-BlockURL](../content/paloalto-pan-os-blockurl-paloalto-pan-os.md) | This playbook allows blocking/unblocking URLs in PaloAlto, using **predefined address group**. This ... | - |
| [PaloAlto-PAN-OS-BlockURL-EntityTrigger](../content/paloalto-pan-os-blockurl-entitytrigger-paloalto-pan-os.md) | This playbook allows blocking/unblocking URLs in PaloAlto, using **predefined address group**. This ... | - |
| [PaloAlto-PAN-OS-GetURLCategoryInfo](../content/paloalto-pan-os-geturlcategoryinfo-paloalto-pan-os.md) | When a new sentinal incident is created, this playbook gets triggered and performs below actions: | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.10      | 13-11-2025                     |   Adding New Detection Rule for Nmap Top 100 Port Scan             |
| 3.0.9       | 06-01-2025                     |   Removing Custom Entity mappings from **Analytic Rule**           |
| 3.0.8       | 15-11-2024                     |   Corrected **Data Connector** count in CreateUiDefinition         |
| 3.0.7 	  | 11-11-2024 					   |   Removed Deprecated **Data Connector**                            |
|             |                                |   Updated **Analytic Rule** for entity mappings                    |
| 3.0.6 	  | 12-07-2024 					   |   Deprecated **Data Connector** 									|
| 3.0.5       | 30-04-2024                     |   Updated the **Data Connector** to fix conectivity criteria query |
| 3.0.4       | 16-04-2024                     |   Fixed existing rule for sites with private IP addresses other than 10/8 |
| 3.0.3       | 11-04-2024                     |   Enhanced the existing **Workbook** as per requirement            |
| 3.0.2       | 12-02-2024                     |   Addition of new PaloAlto-PAN-OS AMA **Data Connector**           |
| 3.0.1       | 22-01-2024                     |   Added subTechniques in Template                                  |
| 3.0.0       | 12-12-2023                     |   Fixed **Playbooks** issue                                        |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
