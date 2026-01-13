# <img src="../images/asim-badge.png" alt="ASIM" height="32"> AzureSecurityBenchmark

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="AzureSecurityBenchmark Logo" width="75" height="75">

The Azure Security Benchmark v3 Solution is designed to enable Cloud Architects, Security Engineers, and Governance Risk Compliance Professionals to gain situational awareness for cloud security posture and hardening. Benchmark recommendations provide a starting point for selecting specific security configuration settings and facilitate risk reduction. The Azure Security Benchmark includes a collection of high-impact security recommendations for improving posture. This workbook provides visibility and situational awareness for security capabilities delivered with Microsoft technologies in predominantly cloud-based environments. Customer experience will vary by user and some panels may require additional configurations for operation.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-17 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **1 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_Im_NetworkSession`](../asim/imnetworksession.md) | Workbooks |

## Tables Used

This solution queries **19 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) | Workbooks |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | Workbooks |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) | Workbooks |
| [`AuditLogs`](../tables/auditlogs.md) | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | Workbooks |
| [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md) | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`Event`](../tables/event.md) | Workbooks |
| [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md) | Workbooks |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) | Workbooks |
| [`ProtectionStatus`](../tables/protectionstatus.md) | Workbooks |
| [`SecurityBaseline`](../tables/securitybaseline.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |
| [`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md) | Workbooks |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) | Analytics |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) | Analytics, Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`Update`](../tables/update.md) | Workbooks |
| [`update`](../tables/update.md) | Workbooks |

### Internal Tables

The following **3 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Workbooks |
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Azure Security Benchmark Posture Changed](../content/azuresecuritybenchmark-azure-security-benchmark-posture-changed-0610e72f-ceaf-42d1-879e-952a1bd8d07a-131c2b8a.md) | Medium | Discovery | [`SecurityRecommendation`](../tables/securityrecommendation.md)<br>[`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>[`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md)<br>[`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADUserRiskEvents`](../tables/aaduserriskevents.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Event`](../tables/event.md)<br>[`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md)<br>[`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md)<br>[`ProtectionStatus`](../tables/protectionstatus.md)<br>[`SecurityBaseline`](../tables/securitybaseline.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md)<br>[`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`Update`](../tables/update.md)<br>[`update`](../tables/update.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create Jira Issue](../content/azuresecuritybenchmark-create-jira-issue-b6b9b0fa.md) | This playbook will open a Jira Issue when a new incident is opened in Microsoft Sentinel. | - |
| [Create-AzureDevOpsTask](../content/azuresecuritybenchmark-create-azuredevopstask-6c3e1f01.md) | This playbook will create the Azure DevOps task filled with the Microsoft Sentinel incident details. | - |
| [Notify-GovernanceComplianceTeam](../content/azuresecuritybenchmark-notify-governancecomplianceteam-b6971016.md) | This Security Orchestration, Automation, & Response (SOAR) capability is designed for configuration ... | - |

## Additional Documentation

> 📄 *Source: [AzureSecurityBenchmark/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark/README.md)*

# Overview
---
## Microsoft Sentinel: Azure Security Benchmark Solution
The Azure Security Benchmark v3 Solution is designed to enable Cloud Architects, Security Engineers, and Governance Risk Compliance Professionals to gain situational awareness for cloud security posture and hardening. Benchmark recommendations provide a starting point for selecting specific security configuration settings and facilitate risk reduction. The Azure Security Benchmark includes a collection of high-impact security recommendations for improving posture. This workbook provides visibility and situational awareness for security capabilities delivered with Microsoft technologies in predominantly cloud-based environments. Customer experience will vary by user and some panels may require additional configurations for operation.

## Try on Portal
You can deploy the workbook by clicking on the buttons below:

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAzureSecurityBenchmark%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazurebutton"/></a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAzureSecurityBenchmark%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazuregovbutton"/></a>

![Workbook Overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark/Workbooks/Images/AzureSecurityBenchmark1.png?raw=true)<br>
![Workbook Overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark/Workbooks/Images/AzureSecurityBenchmark2.png?raw=true)<br>
![Workbook Overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark/Workbooks/Images/AzureSecurityBenchmark3.png?raw=true)<br>

## Getting Started

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                         |
|-------------|--------------------------------|----------------------------------------------------------------------------|
| 3.0.3       | 10-09-2025                     | Removed the network map from the workbook.                      |
| 3.0.2       | 12-04-2024                     | Updated Entity Mappings                                         |
| 3.0.1       | 24-01-2023                     | Updated the solution to fix **Analytic Rules** deployment issue |
| 3.0.0       | 28-11-2023                     | Changes for rebranding from Azure Active Directory to Microsoft Entra ID & MS 365 Defender to MS Defender XDR |
| 3.0.0       | 28-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID & MS 365 Defender to MS Defender XDR |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

