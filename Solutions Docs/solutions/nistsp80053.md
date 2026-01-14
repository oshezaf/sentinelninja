# NISTSP80053

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="NISTSP80053 Logo" width="75" height="75">

This solution enables Compliance Teams, Architects, SecOps Analysts, and Consultants to gain situational awareness for cloud workload security posture. This workbook is designed to augment staffing through automation, visibility, assessment, monitoring and remediation. The Microsoft Sentinel: NIST SP 800-53 R4 solution demonstrates best practice guidance, but Microsoft does not guarantee nor imply compliance. All requirements, validations, and controls are governed by the 💡[National Institute of Standards and Technology (NIST)](https://csrc.nist.gov/publications/detail/sp/800-53/rev-4/archive/2015-01-22). This workbook provides visibility and situational awareness for security capabilities delivered with Microsoft technologies in predominantly cloud-based environments. Customer experience will vary by user and some panels may require additional configurations for operation. Recommendations do not imply coverage of respective controls as they are often one of several courses of action for approaching requirements which is unique to each customer. Recommendations should be considered a starting point for planning full or partial coverage of respective requirements. This workbook does not address all controls within the framework. It should be considered a supplemental tool to gain visibility of technical controls within cloud, multi-cloud, and hybrid networks. For the full listing of respective controls, see the💡[Microsoft Cloud Service Trust Portal](https://servicetrust.microsoft.com/)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-02-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NISTSP80053](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NISTSP80053) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **32 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) | Workbooks |
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | Workbooks |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | Workbooks |
| [`Alert`](../tables/alert.md) | Workbooks |
| [`AuditLogs`](../tables/auditlogs.md) | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) | Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Workbooks |
| [`ConfigurationChange`](../tables/configurationchange.md) | Workbooks |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Workbooks |
| [`DnsEvents`](../tables/dnsevents.md) | Workbooks |
| [`Dynamics365Activity`](../tables/dynamics365activity.md) | Workbooks |
| [`EmailEvents`](../tables/emailevents.md) | Workbooks |
| [`Event`](../tables/event.md) | Workbooks |
| [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) | Workbooks |
| [`Heartbeat`](../tables/heartbeat.md) | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | Workbooks |
| [`Operation`](../tables/operation.md) | Workbooks |
| [`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md) | Workbooks |
| [`SecureScores`](../tables/securescores.md) | Workbooks |
| [`SecurityBaseline`](../tables/securitybaseline.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) | Analytics, Workbooks |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) | Analytics, Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | Workbooks |
| [`Syslog`](../tables/syslog.md) | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | Workbooks |
| [`Usage`](../tables/usage.md) | Workbooks |
| [`WindowsFirewall`](../tables/windowsfirewall.md) | Workbooks |
| [`alert`](../tables/alert.md) | Workbooks |

### Internal Tables

The following **4 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`AlertEvidence`](../tables/alertevidence.md) | Workbooks |
| [`IdentityInfo`](../tables/identityinfo.md) | Workbooks |
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
| [NIST SP 800-53 Posture Changed](../content/nistsp80053-nist-sp-800-53-posture-changed-dd834c97-4638-4bb3-a4e3-807e8b0580dc-3c44ad7b.md) | Medium | Discovery | [`SecurityRecommendation`](../tables/securityrecommendation.md)<br>[`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) | [`AADUserRiskEvents`](../tables/aaduserriskevents.md)<br>[`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`AWSVPCFlow`](../tables/awsvpcflow.md)<br>[`Alert`](../tables/alert.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ConfigurationChange`](../tables/configurationchange.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Dynamics365Activity`](../tables/dynamics365activity.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md)<br>[`Heartbeat`](../tables/heartbeat.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`Operation`](../tables/operation.md)<br>[`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md)<br>[`SecureScores`](../tables/securescores.md)<br>[`SecurityBaseline`](../tables/securitybaseline.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityRecommendation`](../tables/securityrecommendation.md)<br>[`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`StorageBlobLogs`](../tables/storagebloblogs.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`Usage`](../tables/usage.md)<br>[`WindowsFirewall`](../tables/windowsfirewall.md)<br>[`alert`](../tables/alert.md)<br>*Internal use:*<br>[`AlertEvidence`](../tables/alertevidence.md)<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create Jira Issue](../content/nistsp80053-create-jira-issue-32e7c46a.md) | This playbook will open a Jira Issue when a new incident is opened in Microsoft Sentinel. | - |
| [Create-AzureDevOpsTask](../content/nistsp80053-create-azuredevopstask-acaee95e.md) | This playbook will create the Azure DevOps task filled with the Microsoft Sentinel incident details. | - |
| [Notify_GovernanceComplianceTeam](../content/nistsp80053-notify-governancecomplianceteam-64744e2e.md) | This playbook will create the Azure DevOps task filled with the Microsoft Sentinel incident details. | - |

## Additional Documentation

> 📄 *Source: [NISTSP80053/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NISTSP80053/README.md)*

# Overview
---
## Microsoft Sentinel: NIST SP 800-53 Solution
This Solution enables Compliance Teams, Architects, SecOps Analysts, and Consultants to gain situational awareness for cloud workload security posture. This Solution is designed to augment staffing through automation, visibility, assessment, monitoring and remediation. The Microsoft Sentinel: NIST SP 800-53 Solution demonstrates best practice guidance, but Microsoft does not guarantee nor imply compliance. All requirements, validations, and controls are governed by the 💡[National Institute of Standards and Technology (NIST)](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final)

## Try on Portal
You can deploy the solution by clicking on the buttons below:

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNISTSP80053%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazurebutton"/></a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNISTSP80053%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazuregovbutton"/></a>

![Workbook Overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NISTSP80053/Workbooks/Images/NISTSP80053Black.png?raw=true)

## Getting Started
This solution is designed to augment staffing through automation, machine learning, query/alerting generation, and visualizations. This workbook leverages Azure Policy, Azure Resource Graph, and Azure Log Analytics to align with NIST SP 800-53 control requirements. A filter set is available for custom reporting by guides, subscriptions, workspaces, time-filtering, control family, and controls. This offering telemetry from 25+ Microsoft Security products (1P/3P/Multi-Cloud/Hybrid/On-Premises), while only Microsoft Sentinel/Microsoft Defender for Cloud are required to get started, each offering provides additional enrichment for aligning with control requirements. Each NIST SP 800-53 control includes a Control Card detailing an overview of requirements, primary/secondary controls, deep-links to referenced product pages/portals, recommendations, implementation guides, compliance cross-walks and tooling telemetry for building situational awareness of cloud workloads.

### [Recommended Microsoft Sentinel Roles](https://docs.microsoft.com/azure/sentinel/roles) / [Recommended Microsoft Defender for Cloud Roles](https://docs.microsoft.com/azure/defender-for-cloud/permissions#roles-and-allowed-actions)
| <strong> Roles </strong> | <strong> Rights </strong> | 
|:--|:--|
|Security Reader | View Workbooks, Analytics, Hunting, Security Recommendations |
|Security Contributor| Deploy/Modify Workbooks, Analytics, Hunting Queries, Apply Security Recommendations |
|Automation Contributor| Deploy/Modify Playbooks & Automation Rules |

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                            |
|-------------|--------------------------------|-----------------------------------------------------------------------------------------------|
| 3.0.2       | 23-09-2025                     | Updated the workbook with new links and fixed broken metrics.   |
| 3.0.1       | 31-01-2024                     | Updated the solution to fix Analytic Rules deployment issue     |
| 3.0.0       | 09-11-2023                     |	Changes for rebranding from Azure Active Directory Identity Protection to Microsoft Entra ID Protection |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

