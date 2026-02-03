# AbuseIPDB

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="AbuseIPDB Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [AbuseIPDB](https://www.abuseipdb.com/about) solution for Microsoft Sentinel allows you to check the reputation of IP addresses in log data and perform automated actions like enriching a Microsoft Sentinel incident by IP reputation information, add blacklisted IP addresses to ThreatIntelligenceIndicator table and reporting IPs to Abuse IPDB based on a user response in Teams.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [AbuseIPDB](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbuseIPDB) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AbuseIPDB Blacklist Ip To Threat Intelligence](../content/abuseipdb-abuseipdb-blacklist-ip-to-threat-intelligence-f3279435.md) | By every day reccurence, this playbook gets triggered and performs the following actions: 1. Gets [l... | - |
| [AbuseIPDB Enrich Incident By IP Info](../content/abuseipdb-abuseipdb-enrich-incident-by-ip-info-ec814639.md) | Once a new sentinal incident is created, this playbook gets triggered and performs the following act... | - |
| [AbuseIPDB Report IPs To AbuseIPDB After User Response In MSTeams](../content/abuseipdb-abuseipdb-report-ips-to-abuseipdb-after-user-response-in-msteams-1d81545b.md) | When a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                               |
|-------------|--------------------------------|----------------------------------------------------------------------------------|
| 3.0.2       | 09-12-2025                     | Fix typos and update img Source in AbuseIPDB **Playbook** Solutions	      |
| 3.0.1       | 29-03-2024                     | Updated **playbook** description and corrected sentense formatting			      |
| 3.0.0       | 31-07-2023                     | Updated prerequisites for  AbuseIPDB-BlacklistIpToThreatIntelligence **playbook**    |
|             |                                | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.         |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

