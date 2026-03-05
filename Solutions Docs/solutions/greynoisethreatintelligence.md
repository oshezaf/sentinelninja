# <img src="../images/asim-badge.png" alt="ASIM" height="32"> GreyNoiseThreatIntelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/greynoise_logomark_black.svg" alt="GreyNoiseThreatIntelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | GreyNoise |
| **Support Tier** | Partner |
| **Support Link** | [https://www.greynoise.io/contact/general](https://www.greynoise.io/contact/general) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | JP Bourget jp@bluecycle.net |
| **First Published** | 2023-09-05 |
| **Last Updated** | 2025-07-28 |
| **Solution Folder** | [GreyNoiseThreatIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GreyNoiseThreatIntelligence) |

The [GreyNoise Threat Intelligence](https://www.greynoise.io/) solution for Microsoft Sentinel provides context to IP addresses seen in your environment by querying the GreyNoise API. GreyNoise collects, analyzes, and labels data on IPs that scan the internet and saturate security tools with noise. We provides near real time, actionable threat intelligence from our proprietary network of over 3,100 sensors running worldwide. This unique perspective helps analysts spend less time on irrelevant or harmless activity, and more time on targeted and emerging threats. 
 [Learn More about GreyNoise Threat Intelligence](https://www.greynoise.io/) | [GreyNoise Docs](https://docs.greynoise.io)

## Contents

- [ASIM Pre-requisites](#asim-pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## <a id="asim-pre-requisites"></a><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Pre-requisites

This solution uses the [`_Im_NetworkSession`](../asim/imnetworksession.md) [ASIM (Advanced Security Information Model)](https://learn.microsoft.com/azure/sentinel/normalization) parser to provide normalized, source-agnostic data access, expanding detection coverage without modifying queries.

### Supported Products

| Product | Dependency Solution |
|:--------|:--------------------|
| [AWS VPC](../asim/asim-products-index.md#aws-vpc) | [AWS VPC Flow Logs](aws-vpc-flow-logs.md) |
| [AppGate SDP](../asim/asim-products-index.md#appgate-sdp) | [Syslog](syslog.md) |
| [Azure Firewall](../asim/asim-products-index.md#azure-firewall) | [Azure Firewall](azure-firewall.md) |
| [Azure NSG flows](../asim/asim-products-index.md#azure-nsg-flows) | - |
| [Azure NTANetAnalytics](../asim/asim-products-index.md#azure-ntanetanalytics) | - |
| [Barracuda WAF](../asim/asim-products-index.md#barracuda-waf) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [CheckPointFirewall](../asim/asim-products-index.md#checkpointfirewall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Cisco Firepower](../asim/asim-products-index.md#cisco-firepower) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Cisco ISE](../asim/asim-products-index.md#cisco-ise) | [Syslog](syslog.md) |
| [Cisco Meraki](../asim/asim-products-index.md#cisco-meraki) | [CiscoMeraki](ciscomeraki.md)<br>[CustomLogsAma](customlogsama.md)<br>[Syslog](syslog.md) |
| [CiscoASA](../asim/asim-products-index.md#ciscoasa) | [CiscoASA](ciscoasa.md)<br>[Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [CrowdStrike Falcon Endpoint Protection](../asim/asim-products-index.md#crowdstrike-falcon-endpoint-protection) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [ForcePointFirewall](../asim/asim-products-index.md#forcepointfirewall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Fortinet FortiGate](../asim/asim-products-index.md#fortinet-fortigate) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Illumio SaaS Core](../asim/asim-products-index.md#illumio-saas-core) | [IllumioSaaS](illumiosaas.md) |
| [M365 Defender for Endpoint](../asim/asim-products-index.md#m365-defender-for-endpoint) | - |
| [Microsoft Defender for IoT](../asim/asim-products-index.md#microsoft-defender-for-iot) | - |
| [Native](../asim/asim-products-index.md#native) | [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) |
| [Palo Alto Cortex Data Lake](../asim/asim-products-index.md#palo-alto-cortex-data-lake) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Palo Alto PanOS](../asim/asim-products-index.md#palo-alto-panos) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [SentinelOne](../asim/asim-products-index.md#sentinelone) | [SentinelOne](sentinelone.md) |
| [SonicWall](../asim/asim-products-index.md#sonicwall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Sysmon for Linux](../asim/asim-products-index.md#sysmon-for-linux) | [Syslog](syslog.md) |
| [VMConnection](../asim/asim-products-index.md#vmconnection) | - |
| [VMware Carbon Black Cloud](../asim/asim-products-index.md#vmware-carbon-black-cloud) | [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) |
| [Vectra AI Streams](../asim/asim-products-index.md#vectra-ai-streams) | [CustomLogsAma](customlogsama.md)<br>[Vectra AI Stream](vectra-ai-stream.md) |
| [WatchGuard Fireware OS](../asim/asim-products-index.md#watchguard-fireware-os) | [Syslog](syslog.md) |
| [Windows Firewall](../asim/asim-products-index.md#windows-firewall) | [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Forwarded Events](windows-forwarded-events.md)<br>[Windows Security Events](windows-security-events.md) |
| [Windows Sysmon](../asim/asim-products-index.md#windows-sysmon) | [Windows Forwarded Events](windows-forwarded-events.md) |
| [Zscaler ZIA Firewall](../asim/asim-products-index.md#zscaler-zia-firewall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| - | [Corelight](corelight.md) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [GreyNoise Threat Intelligence](../connectors/greynoise2sentinelapi.md)

Connectors from dependency solutions:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) 🔶 *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) *(dependency on [AWS VPC Flow Logs](aws-vpc-flow-logs.md))*
- [Azure Firewall](../connectors/azurefirewall.md) 🔶 *(dependency on [Azure Firewall](azure-firewall.md))*
- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) 🔶 *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) 🔶 *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) *(dependency on [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) 🔶 *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) 🔶 *(dependency on [Corelight](corelight.md))*
- [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) 🔶 *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) 🔶 *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [Custom logs via AMA](../connectors/customlogsviaama.md) 🔶 *(dependency on [CustomLogsAma](customlogsama.md))*
- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) 🔶 *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) 🔶 *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) 🔶 *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) 🔶 *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Illumio SaaS](../connectors/illumiosaasdataconnector.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [Illumio Saas](../connectors/illumiosaasccfdefinition.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [Security Events via Legacy Agent](../connectors/securityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [SentinelOne](../connectors/sentinelone.md) 🔶 *(dependency on [SentinelOne](sentinelone.md))*
- [SentinelOne](../connectors/sentineloneccp.md) 🔶 *(dependency on [SentinelOne](sentinelone.md))*
- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*
- [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) 🔶 *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) 🔶 *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **209 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimAuthenticationEventLogs_CL`](../tables/asimauthenticationeventlogs-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimFileEventLogs`](../tables/asimfileeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimFileEventLogs_CL`](../tables/asimfileeventlogs-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimProcessEventLogs_CL`](../tables/asimprocesseventlogs-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimRegistryEventLogs`](../tables/asimregistryeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimRegistryEventLogs_CL`](../tables/asimregistryeventlogs-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimUserManagementActivityLogs`](../tables/asimusermanagementactivitylogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimUserManagementLogs_CL`](../tables/asimusermanagementlogs-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) (dependency) | - |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) (dependency) | - |
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWFatFlow`](../tables/azfwfatflow.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWFlowTrace`](../tables/azfwflowtrace.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWInternalFqdnResolutionFailure`](../tables/azfwinternalfqdnresolutionfailure.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWNatRule`](../tables/azfwnatrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md) 🔶 | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | - |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) 🔶 | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | - |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) 🔶 | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | - |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`CarbonBlack_Watchlist_CL`](../tables/carbonblack-watchlist-cl.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`CiscoMerakiNativePoller_CL`](../tables/ciscomerakinativepoller-cl.md) | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | - |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) (dependency), [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) (dependency), [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) (dependency), [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) (dependency), [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) (dependency), [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) (dependency), [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) (dependency) | Analytics |
| [`Corelight_CL`](../tables/corelight-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_bacnet_CL`](../tables/corelight-v2-bacnet-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_capture_loss_CL`](../tables/corelight-v2-capture-loss-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_cip_CL`](../tables/corelight-v2-cip-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_conn_CL`](../tables/corelight-v2-conn-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_conn_long_CL`](../tables/corelight-v2-conn-long-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_conn_red_CL`](../tables/corelight-v2-conn-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_corelight_burst_CL`](../tables/corelight-v2-corelight-burst-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_corelight_overall_capture_loss_CL`](../tables/corelight-v2-corelight-overall-capture-loss-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_corelight_profiling_CL`](../tables/corelight-v2-corelight-profiling-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_datared_CL`](../tables/corelight-v2-datared-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dce_rpc_CL`](../tables/corelight-v2-dce-rpc-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dga_CL`](../tables/corelight-v2-dga-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dhcp_CL`](../tables/corelight-v2-dhcp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dnp3_CL`](../tables/corelight-v2-dnp3-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dns_CL`](../tables/corelight-v2-dns-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dns_red_CL`](../tables/corelight-v2-dns-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dpd_CL`](../tables/corelight-v2-dpd-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_encrypted_dns_CL`](../tables/corelight-v2-encrypted-dns-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_enip_CL`](../tables/corelight-v2-enip-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_enip_debug_CL`](../tables/corelight-v2-enip-debug-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_enip_list_identity_CL`](../tables/corelight-v2-enip-list-identity-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_etc_viz_CL`](../tables/corelight-v2-etc-viz-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_files_CL`](../tables/corelight-v2-files-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_files_red_CL`](../tables/corelight-v2-files-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ftp_CL`](../tables/corelight-v2-ftp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_generic_dns_tunnels_CL`](../tables/corelight-v2-generic-dns-tunnels-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_generic_icmp_tunnels_CL`](../tables/corelight-v2-generic-icmp-tunnels-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_http2_CL`](../tables/corelight-v2-http2-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_http_CL`](../tables/corelight-v2-http-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_http_red_CL`](../tables/corelight-v2-http-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_icmp_specific_tunnels_CL`](../tables/corelight-v2-icmp-specific-tunnels-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_intel_CL`](../tables/corelight-v2-intel-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ipsec_CL`](../tables/corelight-v2-ipsec-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_irc_CL`](../tables/corelight-v2-irc-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_iso_cotp_CL`](../tables/corelight-v2-iso-cotp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_kerberos_CL`](../tables/corelight-v2-kerberos-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_certs_CL`](../tables/corelight-v2-known-certs-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_devices_CL`](../tables/corelight-v2-known-devices-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_domains_CL`](../tables/corelight-v2-known-domains-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_hosts_CL`](../tables/corelight-v2-known-hosts-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_names_CL`](../tables/corelight-v2-known-names-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_remotes_CL`](../tables/corelight-v2-known-remotes-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_services_CL`](../tables/corelight-v2-known-services-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_users_CL`](../tables/corelight-v2-known-users-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_local_subnets_CL`](../tables/corelight-v2-local-subnets-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_local_subnets_dj_CL`](../tables/corelight-v2-local-subnets-dj-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_local_subnets_graphs_CL`](../tables/corelight-v2-local-subnets-graphs-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_log4shell_CL`](../tables/corelight-v2-log4shell-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_modbus_CL`](../tables/corelight-v2-modbus-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mqtt_connect_CL`](../tables/corelight-v2-mqtt-connect-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mqtt_publish_CL`](../tables/corelight-v2-mqtt-publish-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mqtt_subscribe_CL`](../tables/corelight-v2-mqtt-subscribe-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mysql_CL`](../tables/corelight-v2-mysql-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_notice_CL`](../tables/corelight-v2-notice-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ntlm_CL`](../tables/corelight-v2-ntlm-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ntp_CL`](../tables/corelight-v2-ntp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ocsp_CL`](../tables/corelight-v2-ocsp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_openflow_CL`](../tables/corelight-v2-openflow-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_packet_filter_CL`](../tables/corelight-v2-packet-filter-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_pe_CL`](../tables/corelight-v2-pe-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_profinet_CL`](../tables/corelight-v2-profinet-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_profinet_dce_rpc_CL`](../tables/corelight-v2-profinet-dce-rpc-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_profinet_debug_CL`](../tables/corelight-v2-profinet-debug-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_radius_CL`](../tables/corelight-v2-radius-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_rdp_CL`](../tables/corelight-v2-rdp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_reporter_CL`](../tables/corelight-v2-reporter-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_rfb_CL`](../tables/corelight-v2-rfb-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_s7comm_CL`](../tables/corelight-v2-s7comm-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_signatures_CL`](../tables/corelight-v2-signatures-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_sip_CL`](../tables/corelight-v2-sip-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smartpcap_CL`](../tables/corelight-v2-smartpcap-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smartpcap_stats_CL`](../tables/corelight-v2-smartpcap-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smb_files_CL`](../tables/corelight-v2-smb-files-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smb_mapping_CL`](../tables/corelight-v2-smb-mapping-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smtp_CL`](../tables/corelight-v2-smtp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smtp_links_CL`](../tables/corelight-v2-smtp-links-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_snmp_CL`](../tables/corelight-v2-snmp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_socks_CL`](../tables/corelight-v2-socks-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_software_CL`](../tables/corelight-v2-software-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_specific_dns_tunnels_CL`](../tables/corelight-v2-specific-dns-tunnels-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ssh_CL`](../tables/corelight-v2-ssh-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ssl_CL`](../tables/corelight-v2-ssl-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ssl_red_CL`](../tables/corelight-v2-ssl-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stats_CL`](../tables/corelight-v2-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stepping_CL`](../tables/corelight-v2-stepping-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stun_CL`](../tables/corelight-v2-stun-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stun_nat_CL`](../tables/corelight-v2-stun-nat-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_corelight_CL`](../tables/corelight-v2-suricata-corelight-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_eve_CL`](../tables/corelight-v2-suricata-eve-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_stats_CL`](../tables/corelight-v2-suricata-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_zeek_stats_CL`](../tables/corelight-v2-suricata-zeek-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_syslog_CL`](../tables/corelight-v2-syslog-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tds_CL`](../tables/corelight-v2-tds-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tds_rpc_CL`](../tables/corelight-v2-tds-rpc-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tds_sql_batch_CL`](../tables/corelight-v2-tds-sql-batch-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_traceroute_CL`](../tables/corelight-v2-traceroute-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tunnel_CL`](../tables/corelight-v2-tunnel-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_unknown_smartpcap_CL`](../tables/corelight-v2-unknown-smartpcap-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_util_stats_CL`](../tables/corelight-v2-util-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_vpn_CL`](../tables/corelight-v2-vpn-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_weird_CL`](../tables/corelight-v2-weird-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_weird_red_CL`](../tables/corelight-v2-weird-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_weird_stats_CL`](../tables/corelight-v2-weird-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_wireguard_CL`](../tables/corelight-v2-wireguard-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_x509_CL`](../tables/corelight-v2-x509-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_x509_red_CL`](../tables/corelight-v2-x509-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_zeek_doctor_CL`](../tables/corelight-v2-zeek-doctor-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`CrowdStrikeAlerts`](../tables/crowdstrikealerts.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeCases`](../tables/crowdstrikecases.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeDetections`](../tables/crowdstrikedetections.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeHosts`](../tables/crowdstrikehosts.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeVulnerabilities`](../tables/crowdstrikevulnerabilities.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrike_Additional_Events_CL`](../tables/crowdstrike-additional-events-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`CrowdStrike_Audit_Events_CL`](../tables/crowdstrike-audit-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Auth_Events_CL`](../tables/crowdstrike-auth-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_DNS_Events_CL`](../tables/crowdstrike-dns-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_File_Events_CL`](../tables/crowdstrike-file-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Network_Events_CL`](../tables/crowdstrike-network-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Process_Events_CL`](../tables/crowdstrike-process-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Registry_Events_CL`](../tables/crowdstrike-registry-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Secondary_Data_CL`](../tables/crowdstrike-secondary-data-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`CrowdStrike_User_Events_CL`](../tables/crowdstrike-user-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`DnsEvents`](../tables/dnsevents.md) | - | Analytics |
| [`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md) 🔶 | [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) (dependency) | - |
| [`Event`](../tables/event.md) | [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) (dependency), [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`ExchangeHttpProxy_CL`](../tables/exchangehttpproxy-cl.md) 🔶 | [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`Heartbeat`](../tables/heartbeat.md) | [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) (dependency) | - |
| [`IllumioFlowEventsV2_CL`](../tables/illumiofloweventsv2-cl.md) | [Illumio Saas](../connectors/illumiosaasccfdefinition.md) (dependency) | - |
| [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) (dependency) | - |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) (dependency) | - |
| [`JBossEvent_CL`](../tables/jbossevent-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`JuniperIDP_CL`](../tables/juniperidp-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MarkLogicAudit_CL`](../tables/marklogicaudit-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MessageTrackingLog_CL`](../tables/messagetrackinglog-cl.md) 🔶 | [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`MongoDBAudit_CL`](../tables/mongodbaudit-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`NGINX_CL`](../tables/nginx-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Analytics |
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SecurityBridgeLogs_CL`](../tables/securitybridgelogs-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SecurityEvent`](../tables/securityevent.md) | [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) (dependency), [Security Events via Legacy Agent](../connectors/securityevents.md) (dependency), [Windows Security Events via AMA](../connectors/windowssecurityevents.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) 🔶 | [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Syslog`](../tables/syslog.md) | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [Syslog via AMA](../connectors/syslogama.md) (dependency), [Syslog via Legacy Agent](../connectors/syslog.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | - |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [GreyNoise Threat Intelligence](../connectors/greynoise2sentinelapi.md) | Analytics, Workbooks |
| [`Tomcat_CL`](../tables/tomcat-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) (dependency), [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`W3CIISLog`](../tables/w3ciislog.md) | [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`WindowsEvent`](../tables/windowsevent.md) | [Windows Forwarded Events](../connectors/windowsforwardedevents.md) (dependency) | - |
| [`ZPA_CL`](../tables/zpa-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`meraki_CL`](../tables/meraki-cl.md) 🔶 | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | - |
| [`vcenter_CL`](../tables/vcenter-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`vectra_beacon_CL`](../tables/vectra-beacon-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_dcerpc_CL`](../tables/vectra-dcerpc-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_dhcp_CL`](../tables/vectra-dhcp-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_dns_CL`](../tables/vectra-dns-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_http_CL`](../tables/vectra-http-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_isession_CL`](../tables/vectra-isession-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_kerberos_CL`](../tables/vectra-kerberos-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ldap_CL`](../tables/vectra-ldap-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ntlm_CL`](../tables/vectra-ntlm-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_radius_CL`](../tables/vectra-radius-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_rdp_CL`](../tables/vectra-rdp-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_smbfiles_CL`](../tables/vectra-smbfiles-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_smbmapping_CL`](../tables/vectra-smbmapping-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_smtp_CL`](../tables/vectra-smtp-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ssh_CL`](../tables/vectra-ssh-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ssl_CL`](../tables/vectra-ssl-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_x509_CL`](../tables/vectra-x509-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |

### Internal Tables

The following **3 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) (dependency) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 5 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [GreyNoise TI Map IP Entity to CommonSecurityLog](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-commonsecuritylog-e50657d7-8bca-43ff-a647-d407fae440d6-31126886.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [GreyNoise TI Map IP Entity to DnsEvents](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-dnsevents-ddf47b6f-870c-5712-a296-1383acb13c82-ac046e7e.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [GreyNoise TI Map IP Entity to SigninLogs](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-signinlogs-f6c76cc9-218c-5b76-9b82-8607f09ea1b4-318921fb.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-network-session-events-asim-network-session-sc-536e8e5c-ce0e-575e-bcc9-aba8e7bf9316-294d0914.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [GreyNoise TI map IP entity to OfficeActivity](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-officeactivity-c51628fe-999c-5150-9fd7-660fc4f58ed2-a0b3d699.md) | Medium | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [GreyNoiseOverview](../content/greynoisethreatintelligence-greynoiseoverview-879c7a2d.md) | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.3      | 17-07-2025                     | Updated to use GreyNoise Python SDK v3.0.1, use new Threat Intel API, updated requirements.txt, updated Data Connector instructions |
| 3.0.2       | 30-05-2024                     | Added missing AMA **Data Connector** reference in **Analytic rules**  |
| 3.0.1       | 29-11-2023                     | Updated the **Data Connector** Instructions, Fixed a Data Connector bug with Benign Indicator Ingest|
| 3.0.0       | 21-09-2023                     | Initial Solution Release                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

