# CybersecurityMaturityModelCertification(CMMC)2.0

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="CybersecurityMaturityModelCertification(CMMC)2.0 Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Microsoft Sentinel Cybersecurity Maturity Model Certification (CMMC) 2.0 solution provides a mechanism for viewing log queries aligned to CMMC 2.0 requirements across the Microsoft portfolio. This solution enables governance and compliance teams to design, build, monitor, and respond to CMMC 2.0 requirements across 25+ Microsoft products. While only Microsoft Sentinel is required to get started, the solution is enhanced with numerous Microsoft offerings. This solution enables Security Architects, Engineers, SecOps Analysts, Managers, and IT Pros to gain situational awareness visibility for the security posture of cloud workloads. There are also recommendations for selecting, designing, deploying, and configuring Microsoft offerings for alignment with respective security best practice.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.1.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-01-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CybersecurityMaturityModelCertification%28CMMC%292.0](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CybersecurityMaturityModelCertification%28CMMC%292.0) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **20 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) | Workbooks |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | Workbooks |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | Workbooks |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) | Workbooks |
| [`AuditLogs`](../tables/auditlogs.md) | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`ConfigurationChange`](../tables/configurationchange.md) | Workbooks |
| [`DeviceEvents`](../tables/deviceevents.md) | Workbooks |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Workbooks |
| [`Event`](../tables/event.md) | Workbooks |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | Workbooks |
| [`SecurityBaseline`](../tables/securitybaseline.md) | Workbooks |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) | Workbooks |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) | Analytics, Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`Update`](../tables/update.md) | Workbooks |
| [`Usage`](../tables/usage.md) | Workbooks |
| [`update`](../tables/update.md) | Workbooks |

### Internal Tables

The following **4 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Workbooks |
| [`IdentityInfo`](../tables/identityinfo.md) | Workbooks |
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |

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
| [CMMC 2.0 Level 1 (Foundational) Readiness Posture](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cmmc-2.0-level-1-foundational-readiness-posture-fb127436-e5c4-4e31-85a8-d3507128dd09-3a67e6df.md) | Medium | Discovery | [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) |
| [CMMC 2.0 Level 2 (Advanced) Readiness Posture](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cmmc-2.0-level-2-advanced-readiness-posture-7bfe573b-3069-4e81-98fe-9a4cffbcbc24-0a9527c7.md) | Medium | Discovery | [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) | [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md)<br>[`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AADUserRiskEvents`](../tables/aaduserriskevents.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`ConfigurationChange`](../tables/configurationchange.md)<br>[`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`Event`](../tables/event.md)<br>[`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`SecurityBaseline`](../tables/securitybaseline.md)<br>[`SecurityRecommendation`](../tables/securityrecommendation.md)<br>[`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`Update`](../tables/update.md)<br>[`Usage`](../tables/usage.md)<br>[`update`](../tables/update.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create Jira Issue](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-create-jira-issue-7e686c2d.md) | This playbook will open a Jira Issue when a new incident is opened in Microsoft Sentinel. | - |
| [Create-AzureDevOpsTask](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-create-azuredevopstask-4301bcc7.md) | This playbook will create the Azure DevOps task filled with the Microsoft Sentinel incident details. | - |
| [Notify_GovernanceComplianceTeam](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-notify-governancecomplianceteam-16ba9fc1.md) | This playbook will create the Azure DevOps task filled with the Microsoft Sentinel incident details. | - |

## Additional Documentation

> 📄 *Source: [CybersecurityMaturityModelCertification(CMMC)2.0/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CybersecurityMaturityModelCertification%28CMMC%292.0/README.md)*

# Overview
---
Welcome to the Microsoft Sentinel: Cybersecurity Maturity Model Certification (CMMC) 2.0 Solution. This solution enables Compliance Teams, Architects, SecOps Analysts, and Consultants to gain situational awareness for cloud workload security posture. This solution is designed to augment staffing through automation, visibility, assessment, monitoring and remediation. This solution includes (1) Workbook for build/design/assessment/reporting, (2) Analytics rules for monitoring and (3) Playbooks for response/remediation. CMMC 2.0 model consists of maturity processes and cybersecurity best practices from multiple cybersecurity standards, frameworks, and other references, as well as inputs from the Defense Industrial Base (DIB) and Department of Defense (DoD stakeholders. "CMMC 2.0 is the next iteration of the Department's CMMC cybersecurity model. It streamlines requirements to three levels of cybersecurity - Foundational, Advanced and Expert - and aligns the requirements at each level with well-known and widely accepted NIST cybersecurity standards." For more information, see💡[CMMC 2.0](https://www.acq.osd.mil/cmmc/index.html)

## Try on Portal
You can deploy the solution by clicking on the buttons below:

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCybersecurityMaturityModelCertification(CMMC)2.0%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazurebutton"/></a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCybersecurityMaturityModelCertification(CMMC)2.0%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazuregovbutton"/></a>

![Workbook Overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CybersecurityMaturityModelCertification(CMMC)2.0/Workbooks/Images/CybersecurityMaturityModelCertification(CMMC)Black1.png?raw=true)

## [Recommended Microsoft Sentinel Roles](https://docs.microsoft.com/azure/sentinel/roles) / [Recommended Microsoft Defender for Cloud Roles](https://docs.microsoft.com/azure/defender-for-cloud/permissions#roles-and-allowed-actions)
| <strong> Roles </strong> | <strong> Rights </strong> | 
|:--|:--|
|Security Reader | View Workbooks, Analytics, Hunting, Security Recommendations |
|Security Contributor| Deploy/Modify Workbooks, Analytics, Hunting Queries, Apply Security Recommendations |
|Owner| Assign Regulatory Compliance Initiatives|

## Prerequisites

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                         	|
|-------------|--------------------------------|----------------------------------------------------------------|
| 3.1.0       | 09-09-2025                     | Removed the network map from the **Workbook**            |
| 3.0.0       | 29-01-2024                     | Updated the solution to fix **Analytic Rules** deployment issue|

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

