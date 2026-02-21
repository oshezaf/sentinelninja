# <img src="../images/asim-badge.png" alt="ASIM" height="32"> AzureSecurityBenchmark

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="AzureSecurityBenchmark Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

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
| **Solution Folder** | [AzureSecurityBenchmark](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark) |

## Dependencies

This solution depends on **19 other solution(s)**:

| Solution | Dependency Type | Details |
|:---------|:----------------|:--------|
| [AWS VPC Flow Logs](aws-vpc-flow-logs.md) | ASIM | ASIM schemas: NetworkSession |
| [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md) | ASIM | ASIM schemas: NetworkSession |
| [CiscoASA](ciscoasa.md) | ASIM | ASIM schemas: NetworkSession |
| [CiscoMeraki](ciscomeraki.md) | ASIM | ASIM schemas: NetworkSession |
| [Common Event Format](common-event-format.md) | ASIM | ASIM schemas: NetworkSession |
| [Corelight](corelight.md) | ASIM | ASIM schemas: NetworkSession |
| [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md) | ASIM | ASIM schemas: NetworkSession |
| [CustomLogsAma](customlogsama.md) | ASIM | ASIM schemas: NetworkSession |
| [IllumioSaaS](illumiosaas.md) | ASIM | ASIM schemas: NetworkSession |
| [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md) | ASIM | ASIM schemas: NetworkSession |
| [MimecastTIRegional](mimecasttiregional.md) | ASIM | ASIM schemas: NetworkSession |
| [SentinelOne](sentinelone.md) | ASIM | ASIM schemas: NetworkSession |
| [SlashNext](slashnext.md) | ASIM | ASIM schemas: NetworkSession |
| [Syslog](syslog.md) | ASIM | ASIM schemas: NetworkSession |
| [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) | ASIM | ASIM schemas: NetworkSession |
| [Vectra AI Stream](vectra-ai-stream.md) | ASIM | ASIM schemas: NetworkSession |
| [VirtualMetric DataStream](virtualmetric-datastream.md) | ASIM | ASIM schemas: NetworkSession |
| [Windows Forwarded Events](windows-forwarded-events.md) | ASIM | ASIM schemas: NetworkSession |
| [Windows Security Events](windows-security-events.md) | ASIM | ASIM schemas: NetworkSession |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> Supported Products

This solution uses ASIM parsers and supports the following products:

| Product |
|:--------|
| [AWS VPC](../asim/asim-products-index.md#aws-vpc) |
| [AppGate SDP](../asim/asim-products-index.md#appgate-sdp) |
| [Azure Firewall](../asim/asim-products-index.md#azure-firewall) |
| [Azure NSG flows](../asim/asim-products-index.md#azure-nsg-flows) |
| [Azure NTANetAnalytics](../asim/asim-products-index.md#azure-ntanetanalytics) |
| [Barracuda WAF](../asim/asim-products-index.md#barracuda-waf) |
| [CheckPointFirewall](../asim/asim-products-index.md#checkpointfirewall) |
| [Cisco Firepower](../asim/asim-products-index.md#cisco-firepower) |
| [Cisco ISE](../asim/asim-products-index.md#cisco-ise) |
| [Cisco Meraki](../asim/asim-products-index.md#cisco-meraki) |
| [CiscoASA](../asim/asim-products-index.md#ciscoasa) |
| [CrowdStrike Falcon Endpoint Protection](../asim/asim-products-index.md#crowdstrike-falcon-endpoint-protection) |
| [ForcePointFirewall](../asim/asim-products-index.md#forcepointfirewall) |
| [Fortinet FortiGate](../asim/asim-products-index.md#fortinet-fortigate) |
| [Illumio SaaS Core](../asim/asim-products-index.md#illumio-saas-core) |
| [M365 Defender for Endpoint](../asim/asim-products-index.md#m365-defender-for-endpoint) |
| [Microsoft Defender for IoT](../asim/asim-products-index.md#microsoft-defender-for-iot) |
| [Native](../asim/asim-products-index.md#native) |
| [Palo Alto Cortex Data Lake](../asim/asim-products-index.md#palo-alto-cortex-data-lake) |
| [Palo Alto PanOS](../asim/asim-products-index.md#palo-alto-panos) |
| [SentinelOne](../asim/asim-products-index.md#sentinelone) |
| [SonicWall](../asim/asim-products-index.md#sonicwall) |
| [Sysmon for Linux](../asim/asim-products-index.md#sysmon-for-linux) |
| [VMConnection](../asim/asim-products-index.md#vmconnection) |
| [VMware Carbon Black Cloud](../asim/asim-products-index.md#vmware-carbon-black-cloud) |
| [Vectra AI Streams](../asim/asim-products-index.md#vectra-ai-streams) |
| [WatchGuard Fireware OS](../asim/asim-products-index.md#watchguard-fireware-os) |
| [Windows Firewall](../asim/asim-products-index.md#windows-firewall) |
| [Windows Sysmon](../asim/asim-products-index.md#windows-sysmon) |
| [Zscaler ZIA Firewall](../asim/asim-products-index.md#zscaler-zia-firewall) |

## Data Connectors

**This solution does not include its own data connectors** but uses connectors from dependency solutions:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) *(dependency on [AWS VPC Flow Logs](aws-vpc-flow-logs.md))*
- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) *(dependency on [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) *(dependency on [Corelight](corelight.md))*
- [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [Custom logs via AMA](../connectors/customlogsviaama.md) *(dependency on [CustomLogsAma](customlogsama.md))*
- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Illumio SaaS](../connectors/illumiosaasdataconnector.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [Illumio Saas](../connectors/illumiosaasccfdefinition.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [Mimecast Intelligence for Microsoft - Microsoft Sentinel](../connectors/mimecasttiregionalconnectorazurefunctions.md) *(dependency on [MimecastTIRegional](mimecasttiregional.md))*
- [Security Events via Legacy Agent](../connectors/securityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [SentinelOne](../connectors/sentinelone.md) *(dependency on [SentinelOne](sentinelone.md))*
- [SentinelOne](../connectors/sentineloneccp.md) *(dependency on [SentinelOne](sentinelone.md))*
- [SlashNext Function App](../connectors/slashnextfunctionapp.md) *(dependency on [SlashNext](slashnext.md))*
- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*
- [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **1 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_Im_NetworkSession`](../asim/imnetworksession.md) | Workbooks |

## Tables Used

This solution queries **18 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) | Workbooks |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | Workbooks |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | Workbooks |
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

### Internal Tables

The following **4 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Workbooks |
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
| [Azure Security Benchmark Posture Changed](../content/azuresecuritybenchmark-azure-security-benchmark-posture-changed-0610e72f-ceaf-42d1-879e-952a1bd8d07a-131c2b8a.md) | Medium | Discovery | [`SecurityRecommendation`](../tables/securityrecommendation.md)<br>[`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>[`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md)<br>[`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AADUserRiskEvents`](../tables/aaduserriskevents.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Event`](../tables/event.md)<br>[`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md)<br>[`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md)<br>[`ProtectionStatus`](../tables/protectionstatus.md)<br>[`SecurityBaseline`](../tables/securitybaseline.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md)<br>[`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

