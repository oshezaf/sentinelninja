# Australian Cyber Security Centre

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ACSClogo.svg" alt="Australian Cyber Security Centre Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

This solution allows customers to share threat intelligence with the Australian Cyber Security Centre (ACSC) through the Cyber Threat Intelligence Sharing (CTIS) program. This solution contains a playbook that can be used to get indicators from Microsoft Sentinel and convert them into STIX bundles to be posted to the CTIS TAXII 2.1 server as a Contributing Partner. This solution is only available to deeded ACSC partners that have completed onboarding to the CTIS program. Credentials will be provided during the onboarding process. For more information please contact community@ctis-au.org or visit the [ACSC Partner Portal](https://partners.cyber.gov.au/login?ec=302&startURL=%2Fs%2F).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-11-23 |
| **Solution Folder** | [Australian Cyber Security Centre](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Australian%20Cyber%20Security%20Centre) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 1 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AusCtisExportTaggedIndicators](../content/australian-cyber-security-centre-ausctisexporttaggedindicators-3aa6557f.md) | This playbook gets triggered every hour and perform the following actions: 1. Get all the threat int... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.2       | 08-01-2024                     | Added support for Organization Unique Identifier in **Playbook**           				   |
| 3.0.1       | 24-11-2023                     | Re-developed **Playbook** according to new requirements.  				   |
| 3.0.0       | 15-11-2023                     | Updated the **Playbook** to align with the new requirements.   		   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

