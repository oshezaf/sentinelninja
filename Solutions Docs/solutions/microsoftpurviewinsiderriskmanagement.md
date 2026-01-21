# MicrosoftPurviewInsiderRiskManagement

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="MicrosoftPurviewInsiderRiskManagement Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

This solution enables insider risk management teams to investigate risk-based behavior across 25+ Microsoft products. This solution is a better-together story between Microsoft Sentinel and Microsoft Purview Insider Risk Management. The solution includes the Insider Risk Management Workbook, (5) Hunting Queries, (1) Data Connector, (5) Analytics Rules, (1) Playbook automation and the Microsoft Purview Insider Risk Management connector. While only Microsoft Sentinel is required to get started, the solution is enhanced with numerous Microsoft offerings, including, but not limited to:

- [Microsoft Purview Insider Risk Management](https://docs.microsoft.com/microsoft-365/compliance/insider-risk-management-solution-overview?view=o365-worldwide)
- [Microsoft Purview Communications Compliance](https://docs.microsoft.com/microsoft-365/compliance/communication-compliance-solution-overview?view=o365-worldwide)
- [Microsoft Purview Advanced eDiscovery](https://docs.microsoft.com/microsoft-365/compliance/ediscovery?view=o365-worldwide)
- [Microsoft Purview Defender](https://www.microsoft.com/security/business/threat-protection/microsoft-365-defender?rtc=1)
- [Microsoft Information Protection](https://docs.microsoft.com/microsoft-365/compliance/information-protection?view=o365-worldwide)
- [Microsoft Entra ID](https://azure.microsoft.com/services/active-directory/)
- [Microsoft Defender for Cloud](https://azure.microsoft.com/services/security-center/)
- [Microsoft Sentinel Notebooks](https://docs.microsoft.com/azure/sentinel/notebooks) [(Bring Your Own Machine Learning)](https://docs.microsoft.com/azure/sentinel/bring-your-own-ml)
- [Microsoft Defender for Endpoint](https://www.microsoft.com/security/business/threat-protection/endpoint-defender?rtc=1)
- [Microsoft Defender for Identity](https://www.microsoft.com/security/business/threat-protection/identity-defender?rtc=1)
- [Microsoft Defender for Cloud Apps](https://www.microsoft.com/security/business/cloud-apps-defender?rtc=1)
- [Microsoft Defender for Office 365](https://www.microsoft.com/security/business/threat-protection/office-365-defender?rtc=1)

Microsoft Sentinel Solutions provide a consolidated way to acquire Microsoft Sentinel content like data connectors, workbooks, analytics, and automations in your workspace with a single deployment step.

[Learn more about Microsoft Sentinel](https://aka.ms/azuresentinel) | [Learn more about Solutions](https://aka.ms/azuresentinelsolutionsdoc)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [MicrosoftPurviewInsiderRiskManagement](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft 365 Insider Risk Management](../connectors/officeirm.md)

## Tables Used

This solution uses **15 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | - | Workbooks |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) | - | Workbooks |
| [`AuditLogs`](../tables/auditlogs.md) | - | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | - | Hunting, Workbooks |
| [`EmailEvents`](../tables/emailevents.md) | - | Workbooks |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) | - | Analytics, Hunting |
| [`LAQueryLogs`](../tables/laquerylogs.md) | - | Workbooks |
| [`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md) | - | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Workbooks |
| [`Operation`](../tables/operation.md) | - | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | - | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | - | Analytics, Hunting, Workbooks |
| [`Syslog`](../tables/syslog.md) | - | Workbooks |
| [`Update`](../tables/update.md) | - | Workbooks |
| [`operation`](../tables/operation.md) | - | Workbooks |

### Internal Tables

The following **6 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | - | Hunting, Workbooks |
| [`IdentityInfo`](../tables/identityinfo.md) | - | Workbooks |
| [`SecurityAlert`](../tables/securityalert.md) | [Microsoft 365 Insider Risk Management](../connectors/officeirm.md) | Analytics, Hunting, Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Analytics, Workbooks |
| [`Watchlist`](../tables/watchlist.md) | - | Workbooks |
| [`anomalies`](../tables/anomalies.md) | - | Workbooks |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 5 |
| Hunting Queries | 5 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Insider Risk_High User Security Alert Correlations](../content/microsoftpurviewinsiderriskmanagement-insider-risk-high-user-security-alert-correlations-a4fb4255-f55b-4c24-b396-976ee075d406-d76ca4d2.md) | Medium | Execution | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [Insider Risk_High User Security Incidents Correlation](../content/microsoftpurviewinsiderriskmanagement-insider-risk-high-user-security-incidents-correlation-28a75d10-9b75-4192-9863-e452c3ad24db-6bbae8c7.md) | High | Execution | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |
| [Insider Risk_Microsoft Purview Insider Risk Management Alert Observed](../content/microsoftpurviewinsiderriskmanagement-insider-risk-microsoft-purview-insider-risk-management-alert-obser-69660e65-0e5c-4700-8b99-5caf59786606-3217bb57.md) | High | Execution | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Insider Risk_Risky User Access By Application](../content/microsoftpurviewinsiderriskmanagement-insider-risk-risky-user-access-by-application-15386bba-dc70-463f-a09f-d392e7731c63-dfb68560.md) | Medium | Execution | [`SigninLogs`](../tables/signinlogs.md) |
| [Insider Risk_Sensitive Data Access Outside Organizational Geo-location](../content/microsoftpurviewinsiderriskmanagement-insider-risk-sensitive-data-access-outside-organizational-geo-loca-b81ed294-28cf-48c3-bac8-ac60dcef293b-93531af5.md) | High | Exfiltration | [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Insider Risk_Entity Anomaly Followed by IRM Alert](../content/microsoftpurviewinsiderriskmanagement-insider-risk-entity-anomaly-followed-by-irm-alert-ea5d043f-80ef-452c-a31a-b584e485b2be-9c9a3b63.md) | PrivilegeEscalation | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Insider Risk_ISP Anomaly to Exfil](../content/microsoftpurviewinsiderriskmanagement-insider-risk-isp-anomaly-to-exfil-12b6582f-b715-4f91-98e1-1582ebad348a-a6296594.md) | Exfiltration | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Insider Risk_Multiple Entity-Based Anomalies](../content/microsoftpurviewinsiderriskmanagement-insider-risk-multiple-entity-based-anomalies-3bc01058-ce23-45ba-a7e9-409d844b12dc-2bc6a4d7.md) | PrivilegeEscalation | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Insider Risk_Possible Sabotage](../content/microsoftpurviewinsiderriskmanagement-insider-risk-possible-sabotage-3201b17a-06e1-4a8d-8157-c69345baa808-cead04e6.md) | Impact | [`AzureActivity`](../tables/azureactivity.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Insider Risk_Sign In Risk Followed By Sensitive Data Access](../content/microsoftpurviewinsiderriskmanagement-insider-risk-sign-in-risk-followed-by-sensitive-data-access-45ec52c2-99e1-4de1-9adc-bae0f79d4e23-f2037089.md) | Exfiltration | [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md)<br>[`SigninLogs`](../tables/signinlogs.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADUserRiskEvents`](../tables/aaduserriskevents.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`LAQueryLogs`](../tables/laquerylogs.md)<br>[`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`Operation`](../tables/operation.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`Syslog`](../tables/syslog.md)<br>[`Update`](../tables/update.md)<br>[`operation`](../tables/operation.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md)<br>[`Watchlist`](../tables/watchlist.md)<br>[`anomalies`](../tables/anomalies.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Notify-InsiderRiskTeam](../content/microsoftpurviewinsiderriskmanagement-notify-insiderriskteam-e199601a.md) | This playbook should be configured as an automation action with the Insider Risk Management Analytic... | - |

## Additional Documentation

> 📄 *Source: [MicrosoftPurviewInsiderRiskManagement/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/README.md)*

## Overview
The Microsoft Sentinel: Insider Risk Management Solution demonstrates the “better together” story between Microsoft Purview Insider Risk Management and Microsoft Sentinel. The solution includes (1) Workbook, (5) Hunting Queries, (5) Analytics Rules, and (1) Playbook. Insider risk management helps minimize internal risks by enabling you to detect, investigate, and act on malicious and inadvertent activities in your organization. Insider risk policies allow you to define the types of risks to identify and detect in your organization, including acting on cases and act on cases including the ability to escalate cases to Microsoft Advanced eDiscovery. Risk analysts in your organization can quickly take appropriate actions to make sure users are compliant with your organization's compliance standards. Insider risks come in various forms including both witting (intentional) and unwitting (unintentional).This workbook provides an automated visualization of Insider risk behavior cross walked to Microsoft security offerings. This solution is enhanced when integrated with complimentary Microsoft Offerings such as💡 [Microsoft Purview Insider Risk Management](https://docs.microsoft.com/microsoft-365/compliance/insider-risk-management-solution-overview), 💡 [Communications Compliance](https://docs.microsoft.com/microsoft-365/compliance/communication-compliance-solution-overview), 💡 [Microsoft Information Protection](https://docs.microsoft.com/microsoft-365/compliance/information-protection), 💡 [Advanced eDiscovery](https://docs.microsoft.com/microsoft-365/compliance/ediscovery), and 💡 [Microsoft Sentinel Notebooks](https://docs.microsoft.com/azure/sentinel/notebooks). This workbook enables Insider Risk Teams, SecOps Analysts, and MSSPs to gain situational awareness for insider risk management, UEBA, device indicators, physical access, and HR signals. This workbook is designed to augment staffing through automation, artificial intelligence, machine learning, query/alerting generation, and visualizations. For more information, see 💡 [Microsoft Purview Insider Risk Management](https://docs.microsoft.com/microsoft-365/compliance/insider-risk-management-solution-overview).

## Try on Portal
You can deploy the solution by clicking on the buttons below:

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FMicrosoftPurviewInsiderRiskManagement%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazurebutton"/></a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FMicrosoftPurviewInsiderRiskManagement%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazuregovbutton"/></a>


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.6       | 07-04-2025                     | Updated ConnectivityCriteria Type in **Data Connector**.				   |
| 3.0.5       | 10-04-2024                     | Updated Entity Mappings InsiderRiskyAccessByApplication.yaml             |
| 3.0.4       | 07-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID. |
| 3.0.3       | 10-10-2023                     | Updated **Workbook** template to replace the datatype InformationProtectionLogs_CL to MicrosoftPurviewInformationProtection                                                                                     |
| 3.0.2       | 04-10-2023                     | Updated **Workbook** template to fix Signinlogs datatype                 |
| 3.0.1       | 20-09-2023                     | Updated **Workbook** template to fix the invaild json issue              |
| 3.0.0       | 17-07-2023                     | Updating **Analytic Rules** with grouping configuration(Single Alert)    |
|             |                                |                                                                          |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

