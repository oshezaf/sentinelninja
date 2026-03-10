# ThreatAnalysis&Response

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="ThreatAnalysis&Response Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [ThreatAnalysis&Response](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatAnalysis%26Response) |

MITRE ATT&CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community. The MITRE ATT&CK Cloud Matrix provides tactics and techniques representing the MITRE ATT&CK® Matrix for Enterprise covering cloud-based techniques. The Matrix contains information for the following platforms: Microsoft Entra ID, Office 365, SaaS, IaaS. For more information, see the 💡 [MITRE ATT&CK: Cloud Matrix](https://attack.mitre.org/matrices/enterprise/cloud/)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **6 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureActivity`](../tables/azureactivity.md) | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`SecurityBaseline`](../tables/securitybaseline.md) | Workbooks |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`Usage`](../tables/usage.md) | Workbooks |

### Internal Tables

The following **2 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 2 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DynamicThreatModeling&Response](../content/threatanalysis&response-dynamicthreatmodeling&response-54123c47.md) | [`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`SecurityBaseline`](../tables/securitybaseline.md)<br>[`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [ThreatAnalysis&Response](../content/threatanalysis&response-threatanalysis&response-56e66291.md) | [`Usage`](../tables/usage.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

## Additional Documentation

> 📄 *Source: [ThreatAnalysis&Response/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatAnalysis%26Response/README.md)*

# Overview
---
This solution enables SecOps Analysts, Threat Intelligence Professional, and Threat Hunters to gain situational awareness for threats in cloud environment. The Solution includes (2) Workbooks  designed to enable threat hunting programs. Threat modeling is an advanced discipline requiring a detailed understanding of adversary actions. Threat analysis provides an understanding of where the attacker is in the cycle which often drives both a historic lens of where the threat may have progressed, but also predictive analytics on the threat’s objectives. This approach is adversarial as understanding of the threat’s attack cycle drives defense actions in a red versus blue model. The Threat Analysis & Response Solution augments the customer burden of building threat hunting programs. <br>
<br>

## Try on Portal
You can deploy the solution by clicking on the buttons below:

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FThreatAnalysis%26Response%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazurebutton"/></a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FThreatAnalysis%26Response%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazuregovbutton"/></a>

![Workbook Overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatAnalysis%26Response/Workbooks/Images/ThreatAnalysis%26ResponseWhite1.png?raw=true)

## Getting Started Prerequisites
1️⃣ [Configure Analytics & Hunting with Microsoft Sentinel: MITRE Blade](https://docs.microsoft.com/azure/sentinel/mitre-coverage)<br>
2️⃣ [Onboard Microsoft Defender for Cloud](https://docs.microsoft.com/azure/defender-for-cloud/get-started)<br>
3️⃣ [Add the NIST SP 800-53 R4 Assessment to Your Dashboard](https://docs.microsoft.com/azure/security-center/update-regulatory-compliance-packages#add-a-regulatory-standard-to-your-dashboard)<br>
4️⃣ [Continuously Export Security Center Data: SecurityRegulatoryCompliance & SecurityRecommendation Data Tables](https://docs.microsoft.com/azure/security-center/continuous-export)<br>
5️⃣ [Review Security Coverage by the MITRE ATT&CK® Framework](https://docs.microsoft.com/azure/sentinel/mitre-coverage)<br>

## Print/Export Reports
1️⃣ Set Background Theme: Settings > Appearance > Theme: Azure > Apply<br>
2️⃣ Print/Export Report: More Content Actions (...) > Print Content<br>
3️⃣ Settings: Layout (Landscape), Pages (All), Print (One Sided), Scale (60), Pages Per Sheet (1), Quality (1,200 DPI), Margins (None) > Print<br>

## Workbooks
### 1) Threat Analysis & Response Workbook

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**    |
|-------------|--------------------------------|-----------------------|
| 3.0.1       | 01-09-2025                     | Updated the Threat Analysis & Response workbook to view in graphical view.  |
| 3.0.0       | 11-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

