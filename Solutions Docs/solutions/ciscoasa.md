# CiscoASA

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoASA](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoASA) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md)
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md), [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) | Analytics, Workbooks |

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
| [Cisco ASA - average attack detection rate increase](../content/79f29feb-6a9d-4cdf-baaa-2daf480a5da1.md) | Low | Discovery, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco ASA - threat detection message fired](../content/795edf2d-cf3e-45b5-8452-fe6c9e6a582e.md) | Medium | Discovery, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Cisco](../content/cisco-ciscoasa.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block IP - Cisco ASA](../content/block-ip---cisco-asa-ciscoasa.md) | This playbook allows blocking/allowing of IPs in Cisco ASA, using a Network Object Group. The Networ... | - |
| [Cisco ASA - Create or Inbound Access Rule On Interface](../content/cisco-asa---create-or-inbound-access-rule-on-interface-ciscoasa.md) | This playbook allows blocking/unblocking of IPs in Cisco ASA, using **Access Rules** which will be c... | - |
| [Cisco ASA - Create or remove access rules on an interface for IP Addresses](../content/cisco-asa---create-or-remove-access-rules-on-an-interface-for-ip-addresses-ciscoasa.md) | This playbook allows blocking/unblocking of IPs in Cisco ASA, using **Access Control Entries** which... | - |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
