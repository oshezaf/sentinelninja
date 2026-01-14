# <img src="../images/asim-badge.png" alt="ASIM" height="32"> MaturityModelForEventLogManagementM2131

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="MaturityModelForEventLogManagementM2131 Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

This solution is designed to enable Cloud Architects, Security Engineers, and Governance Risk Compliance Professionals to increase visibility before, during, and after a cybersecurity incident. The solution includes (1) workbook, (4) hunting queries, (8) analytics rules, and (3) playbooks providing a comprehensive approach to design, build, monitoring, and response in logging architectures. Information from logs on information systems1 (for both on-premises systems and connections hosted by third parties, such as cloud services providers (CSPs) is invaluable in the detection, investigation, and remediation of cyber threats. Executive Order 14028, Improving the Nation's Cybersecurity, directs decisive action to improve the Federal Government’s investigative and remediation capabilities. This memorandum was developed in accordance with and addresses the requirements in section 8 of the Executive Order for logging, log retention, and log management, with a focus on ensuring centralized access and visibility for the highest-level enterprise security operations center (SOC) of each agency. In addition, this memorandum establishes requirements for agencies3 to increase the sharing of such information, as needed and appropriate, to accelerate incident response efforts and to enable more effective defense of Federal information and executive branch departments and agencies. For more information, see (💡[Improving the Federal Government’s Investigative and Remediation Capabilities Related to Cybersecurity Incidents (M-21-31)](https://www.whitehouse.gov/wp-content/uploads/2021/08/M-21-31-Improving-the-Federal-Governments-Investigative-and-Remediation-Capabilities-Related-to-Cybersecurity-Incidents.pdf)).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-12-05 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MaturityModelForEventLogManagementM2131](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MaturityModelForEventLogManagementM2131) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **2 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_Im_Dns`](../asim/imdns.md) | Workbooks |
| [`_Im_NetworkSession`](../asim/imnetworksession.md) | Workbooks |

## Tables Used

This solution queries **83 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) | Workbooks |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | Workbooks |
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | Workbooks |
| [`AWSGuardDuty`](../tables/awsguardduty.md) | Workbooks |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | Workbooks |
| [`AuditLogs`](../tables/auditlogs.md) | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | Analytics, Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`AzureMetrics`](../tables/azuremetrics.md) | Workbooks |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) | Workbooks |
| [`CloudAppEvents`](../tables/cloudappevents.md) | Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Workbooks |
| [`ConfigurationChange`](../tables/configurationchange.md) | Workbooks |
| [`ConfigurationData`](../tables/configurationdata.md) | Workbooks |
| [`ContainerEvent_CL`](../tables/containerevent-cl.md) | Workbooks |
| [`ContainerInstanceLog_CL`](../tables/containerinstancelog-cl.md) | Workbooks |
| [`ContainerInventory`](../tables/containerinventory.md) | Workbooks |
| [`DeviceEvents`](../tables/deviceevents.md) | Workbooks |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Workbooks |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) | Workbooks |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | Workbooks |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) | Workbooks |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Workbooks |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) | Workbooks |
| [`DnsEvents`](../tables/dnsevents.md) | Workbooks |
| [`Dynamics365Activity`](../tables/dynamics365activity.md) | Workbooks |
| [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) | Workbooks |
| [`EmailEvents`](../tables/emailevents.md) | Workbooks |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) | Workbooks |
| [`Event`](../tables/event.md) | Workbooks |
| [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_access_transparency_CL`](../tables/gworkspace-reportsapi-access-transparency-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_admin_CL`](../tables/gworkspace-reportsapi-admin-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_calendar_CL`](../tables/gworkspace-reportsapi-calendar-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_chat_CL`](../tables/gworkspace-reportsapi-chat-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_chrome_CL`](../tables/gworkspace-reportsapi-chrome-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_context_aware_access_CL`](../tables/gworkspace-reportsapi-context-aware-access-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_data_studio_CL`](../tables/gworkspace-reportsapi-data-studio-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_drive_CL`](../tables/gworkspace-reportsapi-drive-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_gcp_CL`](../tables/gworkspace-reportsapi-gcp-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_gplus_CL`](../tables/gworkspace-reportsapi-gplus-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_groups_CL`](../tables/gworkspace-reportsapi-groups-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_groups_enterprise_CL`](../tables/gworkspace-reportsapi-groups-enterprise-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_jamboard_CL`](../tables/gworkspace-reportsapi-jamboard-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_keep_CL`](../tables/gworkspace-reportsapi-keep-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_login_CL`](../tables/gworkspace-reportsapi-login-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_meet_CL`](../tables/gworkspace-reportsapi-meet-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_mobile_CL`](../tables/gworkspace-reportsapi-mobile-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_rules_CL`](../tables/gworkspace-reportsapi-rules-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_saml_CL`](../tables/gworkspace-reportsapi-saml-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_token_CL`](../tables/gworkspace-reportsapi-token-cl.md) | Workbooks |
| [`GWorkspace_ReportsAPI_user_accounts_CL`](../tables/gworkspace-reportsapi-user-accounts-cl.md) | Workbooks |
| [`GoogleWorkspaceReports_CL`](../tables/googleworkspacereports-cl.md) | Workbooks |
| [`Heartbeat`](../tables/heartbeat.md) | Analytics, Workbooks |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) | Workbooks |
| [`InsightsMetrics`](../tables/insightsmetrics.md) | Workbooks |
| [`IntuneAuditLogs`](../tables/intuneauditlogs.md) | Workbooks |
| [`IntuneDeviceComplianceOrg`](../tables/intunedevicecomplianceorg.md) | Workbooks |
| [`IntuneDevices`](../tables/intunedevices.md) | Workbooks |
| [`IntuneOperationalLogs`](../tables/intuneoperationallogs.md) | Workbooks |
| [`KubeEvents_CL`](../tables/kubeevents-cl.md) | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | Workbooks |
| [`Operation`](../tables/operation.md) | Workbooks |
| [`Perf`](../tables/perf.md) | Workbooks |
| [`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |
| [`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md) | Workbooks |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) | Analytics, Workbooks |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) | Workbooks |
| [`SentinelHealth`](../tables/sentinelhealth.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`SqlAtpStatus`](../tables/sqlatpstatus.md) | Workbooks |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | Workbooks |
| [`StorageFileLogs`](../tables/storagefilelogs.md) | Workbooks |
| [`Syslog`](../tables/syslog.md) | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | Workbooks |
| [`Update`](../tables/update.md) | Workbooks |
| [`Usage`](../tables/usage.md) | Analytics, Hunting, Workbooks |
| [`VMComputer`](../tables/vmcomputer.md) | Workbooks |
| [`VMConnection`](../tables/vmconnection.md) | Workbooks |
| [`VMProcess`](../tables/vmprocess.md) | Workbooks |
| [`WindowsFirewall`](../tables/windowsfirewall.md) | Workbooks |
| [`update`](../tables/update.md) | Workbooks |

### Internal Tables

The following **6 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`AlertEvidence`](../tables/alertevidence.md) | Workbooks |
| [`Anomalies`](../tables/anomalies.md) | Workbooks |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Workbooks |
| [`IdentityInfo`](../tables/identityinfo.md) | Workbooks |
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |

## Content Items

This solution includes **16 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 8 |
| Hunting Queries | 4 |
| Playbooks | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [M2131_AssetStoppedLogging](../content/maturitymodelforeventlogmanagementm2131-m2131-assetstoppedlogging-4be5b645-1d08-49e4-b58d-07294ff19223-416aad3a.md) | Medium | Discovery | [`Heartbeat`](../tables/heartbeat.md) |
| [M2131_DataConnectorAddedChangedRemoved](../content/maturitymodelforeventlogmanagementm2131-m2131-dataconnectoraddedchangedremoved-eeb11b6b-e626-4228-b74d-3e730dca8999-c8fea928.md) | Medium | Discovery | [`AzureActivity`](../tables/azureactivity.md) |
| [M2131_EventLogManagementPostureChanged_EL0](../content/maturitymodelforeventlogmanagementm2131-m2131-eventlogmanagementposturechanged-el0-1f8fcca5-47ed-409d-a8fa-d49ef821feaf-6de8bcbb.md) | Medium | Discovery | [`SecurityRecommendation`](../tables/securityrecommendation.md) |
| [M2131_EventLogManagementPostureChanged_EL1](../content/maturitymodelforeventlogmanagementm2131-m2131-eventlogmanagementposturechanged-el1-036ce0a8-a1ff-4731-a078-02b3207fa4f3-889efbd3.md) | Medium | Discovery | [`SecurityRecommendation`](../tables/securityrecommendation.md) |
| [M2131_EventLogManagementPostureChanged_EL2](../content/maturitymodelforeventlogmanagementm2131-m2131-eventlogmanagementposturechanged-el2-e1bb07c4-066b-4069-9b8e-f5275c592b6d-cf655906.md) | Medium | Discovery | [`SecurityRecommendation`](../tables/securityrecommendation.md) |
| [M2131_EventLogManagementPostureChanged_EL3](../content/maturitymodelforeventlogmanagementm2131-m2131-eventlogmanagementposturechanged-el3-672bfd77-4542-4ef1-acf9-e006dcd70c51-555b450e.md) | Medium | Discovery | [`SecurityRecommendation`](../tables/securityrecommendation.md) |
| [M2131_LogRetentionLessThan1Year](../content/maturitymodelforeventlogmanagementm2131-m2131-logretentionlessthan1year-8178a514-1270-4e31-a1d9-aaafeb40122f-78766cd3.md) | Medium | Discovery | [`SecurityRecommendation`](../tables/securityrecommendation.md) |
| [M2131_RecommendedDatatableUnhealthy](../content/maturitymodelforeventlogmanagementm2131-m2131-recommendeddatatableunhealthy-c61b167a-59ae-42af-bc98-36c78c5acb5c-492ca648.md) | Medium | Discovery | [`Usage`](../tables/usage.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [M2131_RecommendedDatatableNotLogged_EL0](../content/maturitymodelforeventlogmanagementm2131-m2131-recommendeddatatablenotlogged-el0-b3e0bfd4-52d2-4684-9514-716035cdbff2-0b7d3adf.md) | Discovery | [`Usage`](../tables/usage.md) |
| [M2131_RecommendedDatatableNotLogged_EL1](../content/maturitymodelforeventlogmanagementm2131-m2131-recommendeddatatablenotlogged-el1-f9e0ae98-6828-4d5a-b596-7c4586bb14f6-b18b3bbb.md) | Discovery | [`Usage`](../tables/usage.md) |
| [M2131_RecommendedDatatableNotLogged_EL2](../content/maturitymodelforeventlogmanagementm2131-m2131-recommendeddatatablenotlogged-el2-76326a24-1223-4066-88a3-3826e3768932-869d983c.md) | Discovery | [`Usage`](../tables/usage.md) |
| [M2131_RecommendedDatatableNotLogged_EL3](../content/maturitymodelforeventlogmanagementm2131-m2131-recommendeddatatablenotlogged-el3-8b415f2d-44c1-4edb-8ca6-ddf7d2d28b20-0cceb968.md) | Discovery | [`Usage`](../tables/usage.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>[`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md)<br>[`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`AWSGuardDuty`](../tables/awsguardduty.md)<br>[`AWSVPCFlow`](../tables/awsvpcflow.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureMetrics`](../tables/azuremetrics.md)<br>[`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md)<br>[`CloudAppEvents`](../tables/cloudappevents.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ConfigurationChange`](../tables/configurationchange.md)<br>[`ConfigurationData`](../tables/configurationdata.md)<br>[`ContainerEvent_CL`](../tables/containerevent-cl.md)<br>[`ContainerInstanceLog_CL`](../tables/containerinstancelog-cl.md)<br>[`ContainerInventory`](../tables/containerinventory.md)<br>[`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceLogonEvents`](../tables/devicelogonevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceNetworkInfo`](../tables/devicenetworkinfo.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`DeviceRegistryEvents`](../tables/deviceregistryevents.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Dynamics365Activity`](../tables/dynamics365activity.md)<br>[`EmailAttachmentInfo`](../tables/emailattachmentinfo.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md)<br>[`Event`](../tables/event.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md)<br>[`GWorkspace_ReportsAPI_access_transparency_CL`](../tables/gworkspace-reportsapi-access-transparency-cl.md)<br>[`GWorkspace_ReportsAPI_admin_CL`](../tables/gworkspace-reportsapi-admin-cl.md)<br>[`GWorkspace_ReportsAPI_calendar_CL`](../tables/gworkspace-reportsapi-calendar-cl.md)<br>[`GWorkspace_ReportsAPI_chat_CL`](../tables/gworkspace-reportsapi-chat-cl.md)<br>[`GWorkspace_ReportsAPI_chrome_CL`](../tables/gworkspace-reportsapi-chrome-cl.md)<br>[`GWorkspace_ReportsAPI_context_aware_access_CL`](../tables/gworkspace-reportsapi-context-aware-access-cl.md)<br>[`GWorkspace_ReportsAPI_data_studio_CL`](../tables/gworkspace-reportsapi-data-studio-cl.md)<br>[`GWorkspace_ReportsAPI_drive_CL`](../tables/gworkspace-reportsapi-drive-cl.md)<br>[`GWorkspace_ReportsAPI_gcp_CL`](../tables/gworkspace-reportsapi-gcp-cl.md)<br>[`GWorkspace_ReportsAPI_gplus_CL`](../tables/gworkspace-reportsapi-gplus-cl.md)<br>[`GWorkspace_ReportsAPI_groups_CL`](../tables/gworkspace-reportsapi-groups-cl.md)<br>[`GWorkspace_ReportsAPI_groups_enterprise_CL`](../tables/gworkspace-reportsapi-groups-enterprise-cl.md)<br>[`GWorkspace_ReportsAPI_jamboard_CL`](../tables/gworkspace-reportsapi-jamboard-cl.md)<br>[`GWorkspace_ReportsAPI_keep_CL`](../tables/gworkspace-reportsapi-keep-cl.md)<br>[`GWorkspace_ReportsAPI_login_CL`](../tables/gworkspace-reportsapi-login-cl.md)<br>[`GWorkspace_ReportsAPI_meet_CL`](../tables/gworkspace-reportsapi-meet-cl.md)<br>[`GWorkspace_ReportsAPI_mobile_CL`](../tables/gworkspace-reportsapi-mobile-cl.md)<br>[`GWorkspace_ReportsAPI_rules_CL`](../tables/gworkspace-reportsapi-rules-cl.md)<br>[`GWorkspace_ReportsAPI_saml_CL`](../tables/gworkspace-reportsapi-saml-cl.md)<br>[`GWorkspace_ReportsAPI_token_CL`](../tables/gworkspace-reportsapi-token-cl.md)<br>[`GWorkspace_ReportsAPI_user_accounts_CL`](../tables/gworkspace-reportsapi-user-accounts-cl.md)<br>[`GoogleWorkspaceReports_CL`](../tables/googleworkspacereports-cl.md)<br>[`Heartbeat`](../tables/heartbeat.md)<br>[`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md)<br>[`InsightsMetrics`](../tables/insightsmetrics.md)<br>[`IntuneAuditLogs`](../tables/intuneauditlogs.md)<br>[`IntuneDeviceComplianceOrg`](../tables/intunedevicecomplianceorg.md)<br>[`IntuneDevices`](../tables/intunedevices.md)<br>[`IntuneOperationalLogs`](../tables/intuneoperationallogs.md)<br>[`KubeEvents_CL`](../tables/kubeevents-cl.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`Operation`](../tables/operation.md)<br>[`Perf`](../tables/perf.md)<br>[`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md)<br>[`SecurityRecommendation`](../tables/securityrecommendation.md)<br>[`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md)<br>[`SentinelHealth`](../tables/sentinelhealth.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`SqlAtpStatus`](../tables/sqlatpstatus.md)<br>[`StorageBlobLogs`](../tables/storagebloblogs.md)<br>[`StorageFileLogs`](../tables/storagefilelogs.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`Update`](../tables/update.md)<br>[`Usage`](../tables/usage.md)<br>[`VMComputer`](../tables/vmcomputer.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`VMProcess`](../tables/vmprocess.md)<br>[`WindowsFirewall`](../tables/windowsfirewall.md)<br>[`update`](../tables/update.md)<br>*Internal use:*<br>[`AlertEvidence`](../tables/alertevidence.md)<br>[`Anomalies`](../tables/anomalies.md)<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create Jira Issue](../content/maturitymodelforeventlogmanagementm2131-create-jira-issue-02d48e74.md) | This playbook will open a Jira Issue when a new incident is opened in Microsoft Sentinel. | - |
| [Create-AzureDevOpsTask](../content/maturitymodelforeventlogmanagementm2131-create-azuredevopstask-410499f4.md) | This playbook will create the Azure DevOps task filled with the Microsoft Sentinel incident details. | - |
| [Notify-LogManagementTeam](../content/maturitymodelforeventlogmanagementm2131-notify-logmanagementteam-5e7b07e3.md) | This Security Orchestration, Automation, & Response (SOAR) capability is designed for configuration ... | - |

## Additional Documentation

> 📄 *Source: [MaturityModelForEventLogManagementM2131/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MaturityModelForEventLogManagementM2131/README.md)*

# Overview
---
## Microsoft Sentinel: Maturity Model for Event Log Management (M-21-31) Solution
This solution is designed to enable Cloud Architects, Security Engineers, and Governance Risk Compliance Professionals to increase visibility before, during, and after a cybersecurity incident. The solution includes (1) workbook, (4) hunting queries, (8) analytics rules, and (3) playbooks providing a comprehensive approach to design, build, monitoring, and response in logging architectures. Information from logs on information systems1 (for both on-premises systems and connections hosted by third parties, such as cloud services providers (CSPs) is invaluable in the detection, investigation, and remediation of cyber threats. "Executive Order 14028, Improving the Nation's Cybersecurity, directs decisive action to improve the Federal Government’s investigative and remediation capabilities. This memorandum was developed in accordance with and addresses the requirements in section 8 of the Executive Order for logging, log retention, and log management, with a focus on ensuring centralized access and visibility for the highest-level enterprise security operations center (SOC) of each agency. In addition, this memorandum establishes requirements for agencies3 to increase the sharing of such information, as needed and appropriate, to accelerate incident response efforts and to enable more effective defense of Federal information and executive branch departments and agencies." For more information, see 💡[Improving the Federal Government’s Investigative and Remediation Capabilities Related to Cybersecurity Incidents (M-21-31)](https://www.whitehouse.gov/wp-content/uploads/2021/08/M-21-31-Improving-the-Federal-Governments-Investigative-and-Remediation-Capabilities-Related-to-Cybersecurity-Incidents.pdf).

## Try on Portal
You can deploy the solution by clicking on the buttons below:

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FMaturityModelForEventLogManagementM2131%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazurebutton"/></a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FMaturityModelForEventLogManagementM2131%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazuregovbutton"/></a>

![Workbook Overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MaturityModelForEventLogManagementM2131/Workbooks/Images/MaturityModelForEventLogManagement_M2131Black.png?raw=true)

## Getting Started

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**    |
|-------------|--------------------------------|-----------------------|
| 3.0.3       | 26-09-2025                     | Updated the broken metrics in the workbook                      |
| 3.0.2       | 31-01-2024                     | Updated the solution to fix Analytic Rules deployment issue     |
| 3.0.1       | 09-11-2023                     | Changes for rebranding from Azure Active Directory Identity Protection to Microsoft Entra ID Protection    |
| 3.0.0       | 20-07-2023                     | Updated **Workbook** template to remove unused variables.      |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

