# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Team Cymru Scout

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/TeamCymruScout.svg" alt="Team Cymru Scout Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Team Cymru |
| **Support Tier** | Partner |
| **Support Link** | [http://team-cymru.com](http://team-cymru.com) |
| **Categories** | domains |
| **Version** | 3.1.1 |
| **Author** | Team Cymru - support@cymru.com |
| **First Published** | 2024-07-16 |
| **Last Updated** | 2025-05-16 |
| **Solution Folder** | [Team Cymru Scout](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout) |

Team Cymru Scout brings the most advanced AI-powered real-time intelligence into Microsoft Sentinel. The Microsoft Sentinel Integration allows you to perform LiveInvestigation on Indicators like IP, Domain and perform Correlation of Team Cymru Scout Data with Other Sources. It also leverage the capability to generate incident and notify when malicious ip found. 

## Contents

- [ASIM Pre-requisites](#asim-pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## <a id="asim-pre-requisites"></a><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Pre-requisites

This solution uses [ASIM (Advanced Security Information Model)](https://learn.microsoft.com/azure/sentinel/normalization) parsers to provide normalized, source-agnostic data access, expanding detection coverage without modifying queries.

### Supported Products

| Product | Dependency Solution |
|:--------|:--------------------|
| [Microsoft Defender for IoT](../asim/asim-products-index.md#microsoft-defender-for-iot) | - |
| - | [AWS VPC Flow Logs](aws-vpc-flow-logs.md) |
| - | [Azure Firewall](azure-firewall.md) |
| - | [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md) |
| - | [CiscoASA](ciscoasa.md) |
| - | [CiscoMeraki](ciscomeraki.md) |
| - | [Common Event Format](common-event-format.md) |
| - | [Corelight](corelight.md) |
| - | [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md) |
| - | [CustomLogsAma](customlogsama.md) |
| - | [IllumioSaaS](illumiosaas.md) |
| - | [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md) |
| - | [SentinelOne](sentinelone.md) |
| - | [Syslog](syslog.md) |
| - | [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) |
| - | [Vectra AI Stream](vectra-ai-stream.md) |
| - | [VirtualMetric DataStream](virtualmetric-datastream.md) |
| - | [Windows Forwarded Events](windows-forwarded-events.md) |
| - | [Windows Security Events](windows-security-events.md) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md)

Connectors from dependency solutions:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) � *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) *(dependency on [AWS VPC Flow Logs](aws-vpc-flow-logs.md))*
- [Azure Firewall](../connectors/azurefirewall.md) � *(dependency on [Azure Firewall](azure-firewall.md))*
- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) � *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) � *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) *(dependency on [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) � *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) � *(dependency on [Corelight](corelight.md))*
- [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) � *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) � *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [Custom logs via AMA](../connectors/customlogsviaama.md) � *(dependency on [CustomLogsAma](customlogsama.md))*
- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) � *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) � *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) � *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) � *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Illumio SaaS](../connectors/illumiosaasdataconnector.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [Illumio Saas](../connectors/illumiosaasccfdefinition.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [Security Events via Legacy Agent](../connectors/securityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [SentinelOne](../connectors/sentinelone.md) � *(dependency on [SentinelOne](sentinelone.md))*
- [SentinelOne](../connectors/sentineloneccp.md) � *(dependency on [SentinelOne](sentinelone.md))*
- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*
- [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) � *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) � *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*

> � **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **266 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) | - | Workbooks |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | - | Workbooks |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | - | Workbooks |
| [`ASIMParsers`](../tables/asimparsers.md) | - | Workbooks |
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | Workbooks |
| [`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | Workbooks |
| [`ASimAuthenticationEventLogs_CL`](../tables/asimauthenticationeventlogs-cl.md) � | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimDhcpEventLogs`](../tables/asimdhcpeventlogs.md) | - | Workbooks |
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | Workbooks |
| [`ASimFileEventLogs`](../tables/asimfileeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimFileEventLogs_CL`](../tables/asimfileeventlogs-cl.md) � | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | Workbooks |
| [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimProcessEventLogs_CL`](../tables/asimprocesseventlogs-cl.md) � | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimRegistryEventLogs`](../tables/asimregistryeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimRegistryEventLogs_CL`](../tables/asimregistryeventlogs-cl.md) � | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimUserManagementActivityLogs`](../tables/asimusermanagementactivitylogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimUserManagementLogs_CL`](../tables/asimusermanagementlogs-cl.md) � | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) (dependency) | Workbooks |
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | - | Workbooks |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) (dependency) | Workbooks |
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | Workbooks |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | Workbooks |
| [`AZFWFatFlow`](../tables/azfwfatflow.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWFlowTrace`](../tables/azfwflowtrace.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | Workbooks |
| [`AZFWInternalFqdnResolutionFailure`](../tables/azfwinternalfqdnresolutionfailure.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWNatRule`](../tables/azfwnatrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | Workbooks |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | Workbooks |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | Workbooks |
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | Workbooks |
| [`AsimParsersData`](../tables/asimparsersdata.md) | - | Workbooks |
| [`Audits_Data_CL`](../tables/audits-data-cl.md) | - | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | - | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) � | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | Workbooks |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) � | - | Workbooks |
| [`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md) � | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | Workbooks |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) � | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | Workbooks |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) � | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | Workbooks |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`CarbonBlack_Watchlist_CL`](../tables/carbonblack-watchlist-cl.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`CiscoMerakiNativePoller_CL`](../tables/ciscomerakinativepoller-cl.md) | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | - |
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) � | - | Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) (dependency), [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) (dependency), [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) (dependency), [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) (dependency), [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) (dependency), [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) (dependency), [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) (dependency) | Workbooks |
| [`Communication_Data_CL`](../tables/communication-data-cl.md) � | - | Workbooks |
| [`Corelight_CL`](../tables/corelight-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | Workbooks |
| [`Corelight_v2_bacnet_CL`](../tables/corelight-v2-bacnet-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_capture_loss_CL`](../tables/corelight-v2-capture-loss-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_cip_CL`](../tables/corelight-v2-cip-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_conn_CL`](../tables/corelight-v2-conn-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_conn_long_CL`](../tables/corelight-v2-conn-long-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_conn_red_CL`](../tables/corelight-v2-conn-red-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_corelight_burst_CL`](../tables/corelight-v2-corelight-burst-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_corelight_overall_capture_loss_CL`](../tables/corelight-v2-corelight-overall-capture-loss-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_corelight_profiling_CL`](../tables/corelight-v2-corelight-profiling-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_datared_CL`](../tables/corelight-v2-datared-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dce_rpc_CL`](../tables/corelight-v2-dce-rpc-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dga_CL`](../tables/corelight-v2-dga-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dhcp_CL`](../tables/corelight-v2-dhcp-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dnp3_CL`](../tables/corelight-v2-dnp3-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dns_CL`](../tables/corelight-v2-dns-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dns_red_CL`](../tables/corelight-v2-dns-red-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dpd_CL`](../tables/corelight-v2-dpd-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_encrypted_dns_CL`](../tables/corelight-v2-encrypted-dns-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_enip_CL`](../tables/corelight-v2-enip-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_enip_debug_CL`](../tables/corelight-v2-enip-debug-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_enip_list_identity_CL`](../tables/corelight-v2-enip-list-identity-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_etc_viz_CL`](../tables/corelight-v2-etc-viz-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_files_CL`](../tables/corelight-v2-files-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_files_red_CL`](../tables/corelight-v2-files-red-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ftp_CL`](../tables/corelight-v2-ftp-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_generic_dns_tunnels_CL`](../tables/corelight-v2-generic-dns-tunnels-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_generic_icmp_tunnels_CL`](../tables/corelight-v2-generic-icmp-tunnels-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_http2_CL`](../tables/corelight-v2-http2-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_http_CL`](../tables/corelight-v2-http-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_http_red_CL`](../tables/corelight-v2-http-red-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_icmp_specific_tunnels_CL`](../tables/corelight-v2-icmp-specific-tunnels-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_intel_CL`](../tables/corelight-v2-intel-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ipsec_CL`](../tables/corelight-v2-ipsec-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_irc_CL`](../tables/corelight-v2-irc-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_iso_cotp_CL`](../tables/corelight-v2-iso-cotp-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_kerberos_CL`](../tables/corelight-v2-kerberos-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_certs_CL`](../tables/corelight-v2-known-certs-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_devices_CL`](../tables/corelight-v2-known-devices-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_domains_CL`](../tables/corelight-v2-known-domains-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_hosts_CL`](../tables/corelight-v2-known-hosts-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_names_CL`](../tables/corelight-v2-known-names-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_remotes_CL`](../tables/corelight-v2-known-remotes-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_services_CL`](../tables/corelight-v2-known-services-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_users_CL`](../tables/corelight-v2-known-users-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_local_subnets_CL`](../tables/corelight-v2-local-subnets-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_local_subnets_dj_CL`](../tables/corelight-v2-local-subnets-dj-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_local_subnets_graphs_CL`](../tables/corelight-v2-local-subnets-graphs-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_log4shell_CL`](../tables/corelight-v2-log4shell-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_modbus_CL`](../tables/corelight-v2-modbus-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mqtt_connect_CL`](../tables/corelight-v2-mqtt-connect-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mqtt_publish_CL`](../tables/corelight-v2-mqtt-publish-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mqtt_subscribe_CL`](../tables/corelight-v2-mqtt-subscribe-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mysql_CL`](../tables/corelight-v2-mysql-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_notice_CL`](../tables/corelight-v2-notice-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ntlm_CL`](../tables/corelight-v2-ntlm-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ntp_CL`](../tables/corelight-v2-ntp-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ocsp_CL`](../tables/corelight-v2-ocsp-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_openflow_CL`](../tables/corelight-v2-openflow-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_packet_filter_CL`](../tables/corelight-v2-packet-filter-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_pe_CL`](../tables/corelight-v2-pe-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_profinet_CL`](../tables/corelight-v2-profinet-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_profinet_dce_rpc_CL`](../tables/corelight-v2-profinet-dce-rpc-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_profinet_debug_CL`](../tables/corelight-v2-profinet-debug-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_radius_CL`](../tables/corelight-v2-radius-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_rdp_CL`](../tables/corelight-v2-rdp-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_reporter_CL`](../tables/corelight-v2-reporter-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_rfb_CL`](../tables/corelight-v2-rfb-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_s7comm_CL`](../tables/corelight-v2-s7comm-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_signatures_CL`](../tables/corelight-v2-signatures-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_sip_CL`](../tables/corelight-v2-sip-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smartpcap_CL`](../tables/corelight-v2-smartpcap-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smartpcap_stats_CL`](../tables/corelight-v2-smartpcap-stats-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smb_files_CL`](../tables/corelight-v2-smb-files-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smb_mapping_CL`](../tables/corelight-v2-smb-mapping-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smtp_CL`](../tables/corelight-v2-smtp-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smtp_links_CL`](../tables/corelight-v2-smtp-links-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_snmp_CL`](../tables/corelight-v2-snmp-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_socks_CL`](../tables/corelight-v2-socks-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_software_CL`](../tables/corelight-v2-software-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_specific_dns_tunnels_CL`](../tables/corelight-v2-specific-dns-tunnels-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ssh_CL`](../tables/corelight-v2-ssh-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ssl_CL`](../tables/corelight-v2-ssl-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ssl_red_CL`](../tables/corelight-v2-ssl-red-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stats_CL`](../tables/corelight-v2-stats-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stepping_CL`](../tables/corelight-v2-stepping-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stun_CL`](../tables/corelight-v2-stun-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stun_nat_CL`](../tables/corelight-v2-stun-nat-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_corelight_CL`](../tables/corelight-v2-suricata-corelight-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_eve_CL`](../tables/corelight-v2-suricata-eve-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_stats_CL`](../tables/corelight-v2-suricata-stats-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_zeek_stats_CL`](../tables/corelight-v2-suricata-zeek-stats-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_syslog_CL`](../tables/corelight-v2-syslog-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tds_CL`](../tables/corelight-v2-tds-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tds_rpc_CL`](../tables/corelight-v2-tds-rpc-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tds_sql_batch_CL`](../tables/corelight-v2-tds-sql-batch-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_traceroute_CL`](../tables/corelight-v2-traceroute-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tunnel_CL`](../tables/corelight-v2-tunnel-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_unknown_smartpcap_CL`](../tables/corelight-v2-unknown-smartpcap-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_util_stats_CL`](../tables/corelight-v2-util-stats-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_vpn_CL`](../tables/corelight-v2-vpn-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_weird_CL`](../tables/corelight-v2-weird-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_weird_red_CL`](../tables/corelight-v2-weird-red-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_weird_stats_CL`](../tables/corelight-v2-weird-stats-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_wireguard_CL`](../tables/corelight-v2-wireguard-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_x509_CL`](../tables/corelight-v2-x509-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_x509_red_CL`](../tables/corelight-v2-x509-red-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_zeek_doctor_CL`](../tables/corelight-v2-zeek-doctor-cl.md) � | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`CrowdStrikeAlerts`](../tables/crowdstrikealerts.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeCases`](../tables/crowdstrikecases.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeDetections`](../tables/crowdstrikedetections.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeHosts`](../tables/crowdstrikehosts.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeVulnerabilities`](../tables/crowdstrikevulnerabilities.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrike_Additional_Events_CL`](../tables/crowdstrike-additional-events-cl.md) � | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`CrowdStrike_Audit_Events_CL`](../tables/crowdstrike-audit-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Auth_Events_CL`](../tables/crowdstrike-auth-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_DNS_Events_CL`](../tables/crowdstrike-dns-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_File_Events_CL`](../tables/crowdstrike-file-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Network_Events_CL`](../tables/crowdstrike-network-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Process_Events_CL`](../tables/crowdstrike-process-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Registry_Events_CL`](../tables/crowdstrike-registry-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Secondary_Data_CL`](../tables/crowdstrike-secondary-data-cl.md) � | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`CrowdStrike_User_Events_CL`](../tables/crowdstrike-user-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`Cymru_Scout_Account_Usage_Data_CL`](../tables/cymru-scout-account-usage-data-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_Domain_Data_CL`](../tables/cymru-scout-domain-data-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Communications_CL`](../tables/cymru-scout-ip-data-communications-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Details_CL`](../tables/cymru-scout-ip-data-details-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Fingerprints_CL`](../tables/cymru-scout-ip-data-fingerprints-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Foundation_CL`](../tables/cymru-scout-ip-data-foundation-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_OpenPorts_CL`](../tables/cymru-scout-ip-data-openports-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_PDNS_CL`](../tables/cymru-scout-ip-data-pdns-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Summary_Certs_CL`](../tables/cymru-scout-ip-data-summary-certs-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_Details_CL`](../tables/cymru-scout-ip-data-summary-details-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_Fingerprints_CL`](../tables/cymru-scout-ip-data-summary-fingerprints-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_OpenPorts_CL`](../tables/cymru-scout-ip-data-summary-openports-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_PDNS_CL`](../tables/cymru-scout-ip-data-summary-pdns-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_x509_CL`](../tables/cymru-scout-ip-data-x509-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) | - | Workbooks |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | - | Workbooks |
| [`DnsEvents`](../tables/dnsevents.md) | - | Workbooks |
| [`Domain_Data_CL`](../tables/domain-data-cl.md) � | - | Workbooks |
| [`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md) � | [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) (dependency) | - |
| [`Event`](../tables/event.md) | [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) (dependency), [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | Workbooks |
| [`ExchangeHttpProxy_CL`](../tables/exchangehttpproxy-cl.md) � | [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`Fingerprints_Data_CL`](../tables/fingerprints-data-cl.md) � | - | Workbooks |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) � | - | Workbooks |
| [`GWorkspace_ReportsAPI_login_CL`](../tables/gworkspace-reportsapi-login-cl.md) � | - | Workbooks |
| [`Heartbeat`](../tables/heartbeat.md) | [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) (dependency) | - |
| [`Identity_Data_CL`](../tables/identity-data-cl.md) � | - | Workbooks |
| [`IllumioFlowEventsV2_CL`](../tables/illumiofloweventsv2-cl.md) | [Illumio Saas](../connectors/illumiosaasccfdefinition.md) (dependency) | - |
| [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) (dependency) | Workbooks |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) (dependency) | Workbooks |
| [`JBossEvent_CL`](../tables/jbossevent-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`JuniperIDP_CL`](../tables/juniperidp-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MarkLogicAudit_CL`](../tables/marklogicaudit-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MessageTrackingLog_CL`](../tables/messagetrackinglog-cl.md) � | [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`MongoDBAudit_CL`](../tables/mongodbaudit-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`NGINX_CL`](../tables/nginx-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`NTANetAnalytics`](../tables/ntanetanalytics.md) | - | Workbooks |
| [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) � | - | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Workbooks |
| [`OktaV2_CL`](../tables/oktav2-cl.md) | - | Workbooks |
| [`Okta_CL`](../tables/okta-cl.md) � | - | Workbooks |
| [`Open_Ports_Data_CL`](../tables/open-ports-data-cl.md) � | - | Workbooks |
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`PDNS_Data_CL`](../tables/pdns-data-cl.md) � | - | Workbooks |
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | Workbooks |
| [`Proto_By_IP_Data_CL`](../tables/proto-by-ip-data-cl.md) � | - | Workbooks |
| [`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md) � | - | Workbooks |
| [`SecurityBridgeLogs_CL`](../tables/securitybridgelogs-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SecurityEvent`](../tables/securityevent.md) | [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) (dependency), [Security Events via Legacy Agent](../connectors/securityevents.md) (dependency), [Windows Security Events via AMA](../connectors/windowssecurityevents.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | Workbooks |
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | - | Workbooks |
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) � | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) � | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) � | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) � | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) � | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) � | [SentinelOne](../connectors/sentinelone.md) (dependency) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | - | Workbooks |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | Workbooks |
| [`Summary_Details_CL`](../tables/summary-details-cl.md) � | - | Workbooks |
| [`Summary_Details_Top_Certs_Data_CL`](../tables/summary-details-top-certs-data-cl.md) � | - | Workbooks |
| [`Summary_Details_Top_Fingerprints_Data_CL`](../tables/summary-details-top-fingerprints-data-cl.md) � | - | Workbooks |
| [`Summary_Details_Top_Open_Ports_Data_CL`](../tables/summary-details-top-open-ports-data-cl.md) � | - | Workbooks |
| [`Summary_Details_Top_Pdns_Data_CL`](../tables/summary-details-top-pdns-data-cl.md) � | - | Workbooks |
| [`Syslog`](../tables/syslog.md) | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [Syslog via AMA](../connectors/syslogama.md) (dependency), [Syslog via Legacy Agent](../connectors/syslog.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Workbooks |
| [`Tomcat_CL`](../tables/tomcat-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Top_Asns_By_IP_Data_CL`](../tables/top-asns-by-ip-data-cl.md) � | - | Workbooks |
| [`Top_Country_Codes_By_IP_Data_CL`](../tables/top-country-codes-by-ip-data-cl.md) � | - | Workbooks |
| [`Top_Services_By_IP_Data_CL`](../tables/top-services-by-ip-data-cl.md) � | - | Workbooks |
| [`Top_Tags_By_IP_Data_CL`](../tables/top-tags-by-ip-data-cl.md) � | - | Workbooks |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`VMConnection`](../tables/vmconnection.md) | - | Workbooks |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) � | [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) (dependency), [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | Workbooks |
| [`W3CIISLog`](../tables/w3ciislog.md) | [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | Workbooks |
| [`Whois_Data_CL`](../tables/whois-data-cl.md) � | - | Workbooks |
| [`WindowsEvent`](../tables/windowsevent.md) | [Windows Forwarded Events](../connectors/windowsforwardedevents.md) (dependency) | Workbooks |
| [`X509_Data_CL`](../tables/x509-data-cl.md) � | - | Workbooks |
| [`ZPA_CL`](../tables/zpa-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`asimParsers`](../tables/asimparsers.md) | - | Workbooks |
| [`barracuda_CL`](../tables/barracuda-cl.md) � | - | Workbooks |
| [`meraki_CL`](../tables/meraki-cl.md) � | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | Workbooks |
| [`vcenter_CL`](../tables/vcenter-cl.md) � | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`vectra_beacon_CL`](../tables/vectra-beacon-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_dcerpc_CL`](../tables/vectra-dcerpc-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_dhcp_CL`](../tables/vectra-dhcp-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_dns_CL`](../tables/vectra-dns-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_http_CL`](../tables/vectra-http-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_isession_CL`](../tables/vectra-isession-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_kerberos_CL`](../tables/vectra-kerberos-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ldap_CL`](../tables/vectra-ldap-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ntlm_CL`](../tables/vectra-ntlm-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_radius_CL`](../tables/vectra-radius-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_rdp_CL`](../tables/vectra-rdp-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_smbfiles_CL`](../tables/vectra-smbfiles-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_smbmapping_CL`](../tables/vectra-smbmapping-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_smtp_CL`](../tables/vectra-smtp-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ssh_CL`](../tables/vectra-ssh-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ssl_CL`](../tables/vectra-ssl-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_x509_CL`](../tables/vectra-x509-cl.md) � | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) (dependency) | - |


> � **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **28 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 22 |
| Playbooks | 3 |
| Watchlists | 2 |
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimNetworkSessionMD4IoTSensor`](../asim/asimnetworksessionmd4iotsensor.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_ASim_Authentication_MicrosoftSecurityEvents`](../asim/asim-authentication-microsoftsecurityevents.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_ASim_NetworkSession_MD4IoTSensor`](../asim/asimnetworksessionmd4iotsensor.md)<br>[`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md)<br>[`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`ASIMParsers`](../tables/asimparsers.md)<br>[`ASimAuditEventLogs`](../tables/asimauditeventlogs.md)<br>[`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md)<br>[`ASimDhcpEventLogs`](../tables/asimdhcpeventlogs.md)<br>[`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md)<br>[`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md)<br>[`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`AWSVPCFlow`](../tables/awsvpcflow.md)<br>[`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AZFWIdpsSignature`](../tables/azfwidpssignature.md)<br>[`AZFWNatRule`](../tables/azfwnatrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AZFWThreatIntel`](../tables/azfwthreatintel.md)<br>[`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)<br>[`AsimParsersData`](../tables/asimparsersdata.md)<br>[`Audits_Data_CL`](../tables/audits-data-cl.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md)<br>[`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)<br>[`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Communication_Data_CL`](../tables/communication-data-cl.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`Cymru_Scout_Account_Usage_Data_CL`](../tables/cymru-scout-account-usage-data-cl.md)<br>[`Cymru_Scout_Domain_Data_CL`](../tables/cymru-scout-domain-data-cl.md)<br>[`Cymru_Scout_IP_Data_Details_CL`](../tables/cymru-scout-ip-data-details-cl.md)<br>[`Cymru_Scout_IP_Data_Foundation_CL`](../tables/cymru-scout-ip-data-foundation-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_Certs_CL`](../tables/cymru-scout-ip-data-summary-certs-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_Details_CL`](../tables/cymru-scout-ip-data-summary-details-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_Fingerprints_CL`](../tables/cymru-scout-ip-data-summary-fingerprints-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_OpenPorts_CL`](../tables/cymru-scout-ip-data-summary-openports-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_PDNS_CL`](../tables/cymru-scout-ip-data-summary-pdns-cl.md)<br>[`DeviceLogonEvents`](../tables/devicelogonevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Domain_Data_CL`](../tables/domain-data-cl.md)<br>[`Event`](../tables/event.md)<br>[`Fingerprints_Data_CL`](../tables/fingerprints-data-cl.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`GWorkspace_ReportsAPI_login_CL`](../tables/gworkspace-reportsapi-login-cl.md)<br>[`Identity_Data_CL`](../tables/identity-data-cl.md)<br>[`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)<br>[`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)<br>[`NTANetAnalytics`](../tables/ntanetanalytics.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md)<br>[`Open_Ports_Data_CL`](../tables/open-ports-data-cl.md)<br>[`PDNS_Data_CL`](../tables/pdns-data-cl.md)<br>[`PostgreSQL_CL`](../tables/postgresql-cl.md)<br>[`Proto_By_IP_Data_CL`](../tables/proto-by-ip-data-cl.md)<br>[`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`SquidProxy_CL`](../tables/squidproxy-cl.md)<br>[`Summary_Details_CL`](../tables/summary-details-cl.md)<br>[`Summary_Details_Top_Certs_Data_CL`](../tables/summary-details-top-certs-data-cl.md)<br>[`Summary_Details_Top_Fingerprints_Data_CL`](../tables/summary-details-top-fingerprints-data-cl.md)<br>[`Summary_Details_Top_Open_Ports_Data_CL`](../tables/summary-details-top-open-ports-data-cl.md)<br>[`Summary_Details_Top_Pdns_Data_CL`](../tables/summary-details-top-pdns-data-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`Top_Asns_By_IP_Data_CL`](../tables/top-asns-by-ip-data-cl.md)<br>[`Top_Country_Codes_By_IP_Data_CL`](../tables/top-country-codes-by-ip-data-cl.md)<br>[`Top_Services_By_IP_Data_CL`](../tables/top-services-by-ip-data-cl.md)<br>[`Top_Tags_By_IP_Data_CL`](../tables/top-tags-by-ip-data-cl.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`W3CIISLog`](../tables/w3ciislog.md)<br>[`Whois_Data_CL`](../tables/whois-data-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>[`X509_Data_CL`](../tables/x509-data-cl.md)<br>[`asimParsers`](../tables/asimparsers.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Team Cymru Scout Create Incident And Notify](../content/team-cymru-scout-team-cymru-scout-create-incident-and-notify-42341b2c.md) | This playbook will create an incident for suspicious or malicious ip and notify to pre-defined or us... | - |
| [Team Cymru Scout Enrich Incident](../content/team-cymru-scout-team-cymru-scout-enrich-incident-e6d90c68.md) | This playbook will fetch and ingest IP or Domain Indicator data based on Entity mapped in Microsoft ... | - |
| [Team Cymru Scout Live Investigation](../content/team-cymru-scout-team-cymru-scout-live-investigation-9c215d68.md) | This playbook will fetch and ingest IP or Domain Indicator data based on input parameters given in t... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CymruScoutAccountUsage](../content/team-cymru-scout-cymruscoutaccountusage-de724888-764f-4cfb-9882-804269dea40b-3161c5fb.md) | - | [`Cymru_Scout_Account_Usage_Data_CL`](../tables/cymru-scout-account-usage-data-cl.md) *(read)* |
| [CymruScoutCommunicationsData](../content/team-cymru-scout-cymruscoutcommunicationsdata-8154d22b-f208-49ce-b9b6-277ace05d53c-d5b1141e.md) | - | [`Communication_Data_CL`](../tables/communication-data-cl.md) *(read)* |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [CymruScoutCorrelate](../content/team-cymru-scout-cymruscoutcorrelate-8ba897dc-dd9f-4d0a-85d6-188b283977e5-cf92c865.md) | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimAuditEvent`](../asim/asimauditevent.md) *(read)*<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimAuthentication`](../asim/asimauthentication.md) *(read)*<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimDhcpEvent`](../asim/asimdhcpevent.md) *(read)*<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimDns`](../asim/asimdns.md) *(read)*<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimNetworkSession`](../asim/asimnetworksession.md) *(read)*<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimWebSession`](../asim/asimwebsession.md) *(read)*<br>[`AsimParsersData`](../tables/asimparsersdata.md) *(read)*<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) *(read)*<br>[`asimParsers`](../tables/asimparsers.md) *(read)* |
| [CymruScoutDomain](../content/team-cymru-scout-cymruscoutdomain-a2997f81-3d9e-4940-b6c8-7a9d6446c037-283db180.md) | - | [`Cymru_Scout_Domain_Data_CL`](../tables/cymru-scout-domain-data-cl.md) *(read)* |
| [CymruScoutDomainData](../content/team-cymru-scout-cymruscoutdomaindata-485531cb-8f2a-47b0-9448-2120c90ac4ee-e6d23619.md) | - | [`Domain_Data_CL`](../tables/domain-data-cl.md) *(read)* |
| [CymruScoutFingerprintsData](../content/team-cymru-scout-cymruscoutfingerprintsdata-0b1f65a2-a886-45f6-beeb-6cb58c86ef69-c0bb4b71.md) | - | [`Fingerprints_Data_CL`](../tables/fingerprints-data-cl.md) *(read)* |
| [CymruScoutIP](../content/team-cymru-scout-cymruscoutip-ba3b1d75-544c-43ff-9969-9ff753e3e3dc-898e13c6.md) | - | [`Cymru_Scout_IP_Data_Details_CL`](../tables/cymru-scout-ip-data-details-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Foundation_CL`](../tables/cymru-scout-ip-data-foundation-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Summary_Certs_CL`](../tables/cymru-scout-ip-data-summary-certs-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Summary_Details_CL`](../tables/cymru-scout-ip-data-summary-details-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Summary_Fingerprints_CL`](../tables/cymru-scout-ip-data-summary-fingerprints-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Summary_OpenPorts_CL`](../tables/cymru-scout-ip-data-summary-openports-cl.md) *(read)*<br>[`Cymru_Scout_IP_Data_Summary_PDNS_CL`](../tables/cymru-scout-ip-data-summary-pdns-cl.md) *(read)* |
| [CymruScoutIdentity](../content/team-cymru-scout-cymruscoutidentity-ba3b1d75-544c-43ff-9969-9ff753e3e3db-c81ceb44.md) | - | [`Identity_Data_CL`](../tables/identity-data-cl.md) *(read)* |
| [CymruScoutOpenPortsData](../content/team-cymru-scout-cymruscoutopenportsdata-d7bf5cbf-b9a9-40fa-ba1f-101f70d7e3ba-dfd3f63a.md) | - | [`Open_Ports_Data_CL`](../tables/open-ports-data-cl.md) *(read)* |
| [CymruScoutPdnsData](../content/team-cymru-scout-cymruscoutpdnsdata-a5abd926-e56e-4ac8-a9b5-22658e6a9876-8008046b.md) | - | [`PDNS_Data_CL`](../tables/pdns-data-cl.md) *(read)* |
| [CymruScoutProtoByIP](../content/team-cymru-scout-cymruscoutprotobyip-ba3b1d75-544c-43ff-9969-9ff753e3e3dw-3d5e7618.md) | - | [`Proto_By_IP_Data_CL`](../tables/proto-by-ip-data-cl.md) *(read)* |
| [CymruScoutSummary](../content/team-cymru-scout-cymruscoutsummary-de724888-764f-4cfb-9882-804269dea78b-952ecb1c.md) | - | [`Summary_Details_CL`](../tables/summary-details-cl.md) *(read)* |
| [CymruScoutSummaryTopCerts](../content/team-cymru-scout-cymruscoutsummarytopcerts-de724888-764f-4cfb-9882-804269asa40b-5dc9a03b.md) | - | [`Summary_Details_Top_Certs_Data_CL`](../tables/summary-details-top-certs-data-cl.md) *(read)* |
| [CymruScoutSummaryTopFingerprints](../content/team-cymru-scout-cymruscoutsummarytopfingerprints-de724888-764f-4cfb-9882-804269aba40b-d3a4acb1.md) | - | [`Summary_Details_Top_Fingerprints_Data_CL`](../tables/summary-details-top-fingerprints-data-cl.md) *(read)* |
| [CymruScoutSummaryTopOpenPorts](../content/team-cymru-scout-cymruscoutsummarytopopenports-de724888-764f-4cfb-9882-804269dea40q-74eda9df.md) | - | [`Summary_Details_Top_Open_Ports_Data_CL`](../tables/summary-details-top-open-ports-data-cl.md) *(read)* |
| [CymruScoutSummaryTopPdns](../content/team-cymru-scout-cymruscoutsummarytoppdns-de724888-764f-4cfb-9882-804269dea30b-e47c82f1.md) | - | [`Summary_Details_Top_Pdns_Data_CL`](../tables/summary-details-top-pdns-data-cl.md) *(read)* |
| [CymruScoutTopAsnsByIP](../content/team-cymru-scout-cymruscouttopasnsbyip-de724888-764f-4cfb-9882-804269dea50b-f34ca2d6.md) | - | [`Top_Asns_By_IP_Data_CL`](../tables/top-asns-by-ip-data-cl.md) *(read)* |
| [CymruScoutTopCountryCodesByIP](../content/team-cymru-scout-cymruscouttopcountrycodesbyip-de724888-764f-4cfb-1234-804269dea40b-fdc6b1c6.md) | - | [`Top_Country_Codes_By_IP_Data_CL`](../tables/top-country-codes-by-ip-data-cl.md) *(read)* |
| [CymruScoutTopServicesByIP](../content/team-cymru-scout-cymruscouttopservicesbyip-de724888-764f-4cfb-9882-804269dea40r-97fd1843.md) | - | [`Top_Services_By_IP_Data_CL`](../tables/top-services-by-ip-data-cl.md) *(read)* |
| [CymruScoutTopTagsByIP](../content/team-cymru-scout-cymruscouttoptagsbyip-ae724888-764f-4cfb-9882-804269dea40b-a7939aae.md) | - | [`Top_Tags_By_IP_Data_CL`](../tables/top-tags-by-ip-data-cl.md) *(read)* |
| [CymruScoutWhois](../content/team-cymru-scout-cymruscoutwhois-de724888-764f-4cfb-9882-804269deb40b-275f0f2b.md) | - | [`Whois_Data_CL`](../tables/whois-data-cl.md) *(read)* |
| [CymruScoutX509Data](../content/team-cymru-scout-cymruscoutx509data-651666db-1368-4c42-a72c-f3307e45b67c-d92c0e46.md) | - | [`X509_Data_CL`](../tables/x509-data-cl.md) *(read)* |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TeamCymruScoutDomainData](../content/team-cymru-scout-teamcymruscoutdomaindata-17b10d52.md) | - | - |
| [TeamCymruScoutIPData](../content/team-cymru-scout-teamcymruscoutipdata-71f47feb.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.1       | 25-09-2025                     | Fixed bug in TeamCymruScoutEnrichIncident playbook. |
| 3.1.0       | 16-05-2025                     | Updated Workbook, Parser, Data Connector and created new playbook. |
| 3.0.0       | 07-08-2024                     | Added Solution for Team Cymru Scout. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

