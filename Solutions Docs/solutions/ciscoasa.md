# CiscoASA

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="CiscoASA Logo" width="75" height="75">

The [Cisco ASA](https://www.cisco.com/c/en_in/products/security/adaptive-security-appliance-asa-software/index.html) solution for Microsoft Sentinel enables you to ingest [Cisco ASA logs](https://www.cisco.com/c/en/us/td/docs/security/asa/syslog/b_syslog/messages-listed-by-severity-level.html) into Microsoft Sentinel. 

**Cisco ASA/FTD via AMA** - This data connector helps in ingesting Cisco ASA logs into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here](https://learn.microsoft.com/azure/sentinel/connect-cef-ama). 

</p>

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 a. [Agent-based log collection (Syslog)](https://docs.microsoft.com/azure/sentinel/connect-syslog)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoASA](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoASA) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) ⚠️
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md), [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) | Analytics, Workbooks |
| [`Heartbeat`](../tables/heartbeat.md) | [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) | - |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
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
| 3.0.7       | 01-09-2025                     | Updates to the `template_CiscoAsaAma.json` file to reflect the general availability of the Cisco ASA/FTD via AMA connector  					  				  |
| 3.0.6       | 10-07-2025                     | Preview tag removed from Connector title  					  				  |
| 3.0.5       | 25-04-2025                     | Removed Legacy **Data Connector**   					  					  |
| 3.0.4       | 22-05-2024                     | Updated connectivity criteria for **Data Connector**   					  |
| 3.0.3       | 14-03-2024                     | Change the connectivity criteria to use the resource graph and not LA data   |
| 3.0.2       | 07-03-2024                     | New AMA based connector is now in public preview							  |
| 3.0.1       | 31-01-2023                     | Added new **Data Connector** Cisco ASA/FTD via AMA (Preview) to the solution |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

