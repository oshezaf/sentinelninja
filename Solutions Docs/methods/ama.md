# Azure Monitor Agent (AMA)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

---

The Azure Monitor Agent (AMA) is the recommended agent for collecting logs from Azure VMs, on-premises servers, and multi-cloud environments. It replaces the legacy Log Analytics agent (MMA) and provides improved performance, security, and manageability.

## Documentation

- [📖 Azure Monitor Agent overview](https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-overview)
- [📖 Install and manage the Azure Monitor Agent](https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-manage)
- [📖 Connect via Windows agent-based connectors](https://learn.microsoft.com/azure/sentinel/connect-services-windows-based)
- [📖 Migrate to Azure Monitor Agent from Log Analytics agent](https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-migration)
- [📖 AMA migration for Microsoft Sentinel](https://learn.microsoft.com/azure/sentinel/ama-migrate)
- [📖 Data collection rules in Azure Monitor](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)
- [📖 CEF and Syslog via AMA overview](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-overview)
- [📖 Connect CEF and Syslog via AMA](https://learn.microsoft.com/azure/sentinel/connect-cef-syslog-ama)
- [📖 Device configuration for CEF via AMA](https://learn.microsoft.com/azure/sentinel/unified-connector-cef-device)
- [📖 Syslog device configuration](https://learn.microsoft.com/azure/sentinel/unified-connector-syslog-device)
- [📖 Troubleshoot CEF and Syslog via AMA](https://learn.microsoft.com/azure/sentinel/cef-syslog-ama-troubleshooting)
- [📖 Collect logs from text files via AMA](https://learn.microsoft.com/azure/sentinel/connect-custom-logs-ama)
- [📖 Custom logs device configuration](https://learn.microsoft.com/azure/sentinel/unified-connector-custom-device)
- [📖 DNS via AMA](https://learn.microsoft.com/azure/sentinel/connect-dns-ama)

## Statistics

| Metric | Count |
|:-------|------:|
| Total Connectors | **59** |
| Active | 25 |
| Deprecated 🚫 | 34 |
| Unpublished ⚠️ | 0 |

## Connectors Using This Method

### Active Connectors

| Connector | Publisher | Tables | Solution |
|:----------|:----------|:------:|:---------|
| [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [[Recommended] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md) | Infoblox | 1 | [Infoblox](../solutions/infoblox.md) |
| [[Recommended] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md) | Infoblox | 1 | [Infoblox](../solutions/infoblox.md) |
| [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | Vectra AI | 17 | [Vectra AI Stream](../solutions/vectra-ai-stream.md) |
| [Automated Logic WebCTRL ](../connectors/automatedlogicwebctrl.md) | AutomatedLogic | 1 | [ALC-WebCTRL](../solutions/alc-webctrl.md) |
| [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) ➕ | Microsoft | 2 | [CiscoASA](../solutions/ciscoasa.md) |
| [Cisco Software Defined WAN](../connectors/ciscosdwan.md) | Cisco | 2 | [Cisco SD-WAN](../solutions/cisco-sd-wan.md) |
| [Common Event Format (CEF) via AMA](../connectors/cefama.md) ➕ | Microsoft | 1 | [Common Event Format](../solutions/common-event-format.md) |
| [CTERA Syslog](../connectors/ctera.md) | CTERA Networks Ltd | 1 | [CTERA](../solutions/ctera.md) |
| [Custom logs via AMA](../connectors/customlogsviaama.md) | Microsoft | 16 | [CustomLogsAma](../solutions/customlogsama.md) |
| [Cyborg Security HUNTER Hunt Packages](../connectors/cyborgsecurity-hunter.md) | Cyborg Security | 1 | [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md) |
| [Fortinet FortiWeb Web Application Firewall via AMA](../connectors/fortinetfortiwebama.md) | Microsoft | 1 | [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md) |
| [iboss via AMA](../connectors/ibossama.md) ➕ | iboss | 1 | [iboss](../solutions/iboss.md) |
| [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [Radiflow iSID via AMA](../connectors/radiflowisid.md) | Radiflow | 1 | [Radiflow](../solutions/radiflow.md) |
| [Silverfort Admin Console](../connectors/silverfortama.md) | Silverfort | 1 | [Silverfort](../solutions/silverfort.md) |
| [Syslog via AMA](../connectors/syslogama.md) | Microsoft | 1 | [Syslog](../solutions/syslog.md) |
| [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) | VirtualMetric | 1 | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) | VirtualMetric | 1 | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) | Microsoft | 1 | [Windows Server DNS](../solutions/windows-server-dns.md) |
| [Windows Firewall Events via AMA](../connectors/windowsfirewallama.md) | Microsoft | 1 | [Windows Firewall](../solutions/windows-firewall.md) |
| [Windows Forwarded Events](../connectors/windowsforwardedevents.md) | Microsoft | 1 | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| [Windows Security Events via AMA](../connectors/windowssecurityevents.md) ➕ | Microsoft | 1 | [Windows Security Events](../solutions/windows-security-events.md) |

### Deprecated Connectors 🚫

| Connector | Publisher | Tables | Solution |
|:----------|:----------|:------:|:---------|
| 🚫 [[Deprecated] AI Analyst Darktrace via AMA](../connectors/darktraceama.md) | Darktrace | 1 | [AI Analyst Darktrace](../solutions/ai-analyst-darktrace.md) |
| 🚫 [[Deprecated] Akamai Security Events via AMA](../connectors/akamaisecurityeventsama.md) | Akamai | 1 | [Akamai Security Events](../solutions/akamai-security-events.md) |
| 🚫 [[Deprecated] Aruba ClearPass via AMA](../connectors/arubaclearpassama.md) | Aruba Networks | 1 | [Aruba ClearPass](../solutions/aruba-clearpass.md) |
| 🚫 [[Deprecated] Broadcom Symantec DLP via AMA](../connectors/broadcomsymantecdlpama.md) | Broadcom | 1 | [Broadcom SymantecDLP](../solutions/broadcom-symantecdlp.md) |
| 🚫 [[Deprecated] Cisco Firepower eStreamer via AMA](../connectors/ciscofirepowerestreamerama.md) | Cisco | 1 | [Cisco Firepower EStreamer](../solutions/cisco-firepower-estreamer.md) |
| 🚫 [[Deprecated] Cisco Secure Email Gateway via AMA](../connectors/ciscosegama.md) | Cisco | 1 | [CiscoSEG](../solutions/ciscoseg.md) |
| 🚫 [[Deprecated] Citrix WAF (Web App Firewall) via AMA](../connectors/citrixwafama.md) | Citrix Systems Inc. | 1 | [Citrix Web App Firewall](../solutions/citrix-web-app-firewall.md) |
| 🚫 [[Deprecated] Claroty via AMA](../connectors/clarotyama.md) | Claroty | 1 | [Claroty](../solutions/claroty.md) |
| 🚫 [[Deprecated] Contrast Protect via AMA](../connectors/contrastprotectama.md) | Contrast Security | 1 | [Contrast Protect](../solutions/contrast-protect.md) |
| 🚫 [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) | CrowdStrike | 1 | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| 🚫 [[Deprecated] CyberArk Privilege Access Manager (PAM) Events via AMA](../connectors/cyberarkama.md) | Cyber-Ark | 1 | [CyberArk Privilege Access Manager (PAM) Events](../solutions/cyberark-privilege-access-manager-pam-events.md) |
| 🚫 [[Deprecated] Delinea Secret Server via AMA](../connectors/delineasecretserverama.md) | Delinea, Inc | 1 | [Delinea Secret Server](../solutions/delinea-secret-server.md) |
| 🚫 [[Deprecated] ExtraHop Reveal(x) via AMA](../connectors/extrahopnetworksama.md) | ExtraHop Networks | 1 | [ExtraHop Reveal(x)](../solutions/extrahop-reveal-x.md) |
| 🚫 [[Deprecated] F5 Networks via AMA](../connectors/f5ama.md) | F5 Networks | 1 | [F5 Networks](../solutions/f5-networks.md) |
| 🚫 [[Deprecated] FireEye Network Security (NX) via AMA](../connectors/fireeyenxama.md) | FireEye | 1 | [FireEye Network Security](../solutions/fireeye-network-security.md) |
| 🚫 [[Deprecated] Forcepoint CASB via AMA](../connectors/forcepointcasbama.md) | Forcepoint CASB | 1 | [Forcepoint CASB](../solutions/forcepoint-casb.md) |
| 🚫 [[Deprecated] Forcepoint CSG via AMA](../connectors/forcepointcsgama.md) | Forcepoint | 1 | [Forcepoint CSG](../solutions/forcepoint-csg.md) |
| 🚫 [[Deprecated] Forcepoint NGFW via AMA](../connectors/forcepointngfwama.md) | Forcepoint | 1 | [Forcepoint NGFW](../solutions/forcepoint-ngfw.md) |
| 🚫 [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md) | Fortinet | 1 | [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) |
| 🚫 [[Deprecated] Illumio Core via AMA](../connectors/illumiocoreama.md) | Illumio | 1 | [Illumio Core](../solutions/illumio-core.md) |
| 🚫 [[Deprecated] Illusive Platform via AMA](../connectors/illusiveattackmanagementsystemama.md) | illusive | 1 | [Illusive Platform](../solutions/illusive-platform.md) |
| 🚫 [[Deprecated] Netwrix Auditor via AMA](../connectors/netwrixama.md) | Netwrix | 1 | [Netwrix Auditor](../solutions/netwrix-auditor.md) |
| 🚫 [[Deprecated] Nozomi Networks N2OS via AMA](../connectors/nozominetworksn2osama.md) | Nozomi Networks | 1 | [NozomiNetworks](../solutions/nozominetworks.md) |
| 🚫 [[Deprecated] OSSEC via AMA](../connectors/ossecama.md) | OSSEC | 1 | [OSSEC](../solutions/ossec.md) |
| 🚫 [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md) | Palo Alto Networks | 1 | [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md) |
| 🚫 [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via AMA](../connectors/paloaltocdlama.md) | Palo Alto Networks | 1 | [PaloAltoCDL](../solutions/paloaltocdl.md) |
| 🚫 [[Deprecated] PingFederate via AMA](../connectors/pingfederateama.md) | Ping Identity | 1 | [PingFederate](../solutions/pingfederate.md) |
| 🚫 [[Deprecated] RIDGEBOT - data connector for Microsoft Sentinel](../connectors/ridgebotdataconnector.md) | RidgeSecurity | 1 | [RidgeSecurity](../solutions/ridgesecurity.md) |
| 🚫 [[Deprecated] SonicWall Firewall via AMA](../connectors/sonicwallfirewallama.md) | SonicWall | 1 | [SonicWall Firewall](../solutions/sonicwall-firewall.md) |
| 🚫 [[Deprecated] Trend Micro Apex One via AMA](../connectors/trendmicroapexoneama.md) | Trend Micro | 1 | [Trend Micro Apex One](../solutions/trend-micro-apex-one.md) |
| 🚫 [[Deprecated] vArmour Application Controller via AMA](../connectors/varmouracama.md) | vArmour | 1 | [vArmour Application Controller](../solutions/varmour-application-controller.md) |
| 🚫 [[Deprecated] Vectra AI Detect via AMA](../connectors/aivectradetectama.md) | Vectra AI | 1 | [Vectra AI Detect](../solutions/vectra-ai-detect.md) |
| 🚫 [[Deprecated] WireX Network Forensics Platform via AMA](../connectors/wirex-systems-nfpama.md) | WireX_Systems | 1 | [WireX Network Forensics Platform](../solutions/wirex-network-forensics-platform.md) |
| 🚫 [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |

---

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

