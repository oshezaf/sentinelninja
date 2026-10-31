# Cisco ASA Solution

*Solution: CiscoASA*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="CiscoASA Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | Security - Automation (SOAR) |
| **Version** | 3.2.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-23 |
| **Last Updated** | 2026-10-16 |
| **Solution Folder** | [CiscoASA](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoASA) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-ciscoasa) · Rating: ★★☆☆☆ 1.5/5 (2 ratings) · Popularity: 🔵 Medium (77%) |

The [Cisco ASA](https://www.cisco.com/c/en_in/products/security/adaptive-security-appliance-asa-software/index.html) solution for Microsoft Sentinel enables you to ingest [Cisco ASA logs](https://www.cisco.com/c/en/us/td/docs/security/asa/syslog/b_syslog/messages-listed-by-severity-level.html) into Microsoft Sentinel. 

**Cisco ASA/FTD via AMA** - This data connector helps in ingesting Cisco ASA logs into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here](https://learn.microsoft.com/azure/sentinel/connect-cef-ama). 

</p>

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 a. [Agent-based log collection (Syslog)](https://docs.microsoft.com/azure/sentinel/connect-syslog)

**Additional Information**

📖 **Setup Guide:** [Cisco firewalls connector](https://learn.microsoft.com/azure/sentinel/cisco-ftd-firewall) - Connect Cisco ASA and Firepower firewalls to Microsoft Sentinel

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) ⚠️
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md)

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md), [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) | Analytics, Workbooks |
| [`Heartbeat`](../tables/heartbeat.md) | [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) | - |

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Playbooks | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cisco ASA - Possible Data Exfiltration Detection](../content/ciscoasa-cisco-asa-possible-data-exfiltration-detection-f3a8c2d0-7b41-4e9a-9f6a-2d8a1c4e5b72-6a33c590.md) | Medium | Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco ASA - average attack detection rate increase](../content/ciscoasa-cisco-asa-average-attack-detection-rate-increase-79f29feb-6a9d-4cdf-baaa-2daf480a5da1-4b63ae5b.md) | Low | Discovery, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco ASA - threat detection message fired](../content/ciscoasa-cisco-asa-threat-detection-message-fired-795edf2d-cf3e-45b5-8452-fe6c9e6a582e-a934f81d.md) | Medium | Discovery, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Cisco](../content/ciscoasa-cisco-87e00b58.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block IP - Cisco ASA](../content/ciscoasa-block-ip-cisco-asa-6d53c04c.md) | This playbook allows blocking/allowing of IPs in Cisco ASA, using a Network Object Group. The Networ... | - |
| [Cisco ASA - Create or Inbound Access Rule On Interface](../content/ciscoasa-cisco-asa-create-or-inbound-access-rule-on-interface-a9375e8d.md) | This playbook allows blocking/unblocking of IPs in Cisco ASA, using **Access Rules** which will be c... | - |
| [Cisco ASA - Create or remove access rules on an interface for IP Addresses](../content/ciscoasa-cisco-asa-create-or-remove-access-rules-on-an-interface-for-ip-addresses-f8241584.md) | This playbook allows blocking/unblocking of IPs in Cisco ASA, using **Access Control Entries** which... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                           |
|-------------|--------------------------------|------------------------------------------------------------------------------|
| 3.2.1 | 14-10-2026 | Updated three disabled **Defender XDR Custom Detections** with preserved entity-mapping approvals and added one converted **Defender Workbook** (`Cisco.json`) bound to `CommonSecurityLog` (`CiscoAsaAma`). Offline content validation passed; runtime, alert parity, workbook UI, and provider acceptance remain unverified. |
| 3.1.3 | 13-10-2026 | Added workload, data-type, and connector prerequisite records to all three disabled XDR Custom Detections. Updated XDR content versions to 3.1.3 and V3.1 packaging to include resolved package/content provenance in installation and Content Hub registration records. |
| 3.1.2 | 12-10-2026 | Refreshed the V3.1 hybrid package for three disabled Defender XDR Custom Detections with reviewed Host mappings and source-rule provenance. |
| 3.1.1       | 11-10-2026                     | Added a reviewed Host mapping to the threat-message Custom Detection and recorded accepted Host-mapping assumptions while preserving original host values in alert details. |
| 3.1.0       | 11-10-2026                     | Added three disabled Defender XDR Custom Detections with source-rule provenance and V3.1 hybrid packaging support. |
| 3.0.9       | 15-09-2026                     |Updated the CiscoASA workbook and analytic rules to incorporate FTD logs alongside ASA logs.                       |
| 3.0.8       | 22-08-2026                     | Added new detection rule for Possible Data Exfilteration  			  				  |
| 3.0.7       | 01-09-2025                     | Updates to the `template_CiscoAsaAma.json` file to reflect the general availability of the Cisco ASA/FTD via AMA connector  					  				  |
| 3.0.6       | 10-07-2025                     | Preview tag removed from Connector title  					  				  |
| 3.0.5       | 25-04-2025                     | Removed Legacy **Data Connector**   					  					  |
| 3.0.4       | 22-05-2024                     | Updated connectivity criteria for **Data Connector**   					  |
| 3.0.3       | 14-03-2024                     | Change the connectivity criteria to use the resource graph and not LA data   |
| 3.0.2       | 07-03-2024                     | New AMA based connector is now in public preview							  |
| 3.0.1       | 31-01-2023                     | Added new **Data Connector** Cisco ASA/FTD via AMA (Preview) to the solution |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

