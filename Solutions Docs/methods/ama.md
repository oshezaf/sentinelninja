# Azure Monitor Agent (AMA)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

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
| Total Connectors | **166** |
| Active | 36 |
| Deprecated 🚫 | 122 |
| Unpublished ⚠️ | 8 |

## Connectors Using This Method

### Active Connectors

| Connector | Publisher | Tables | Solution |
|:----------|:----------|:------:|:---------|
| [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [[Recommended] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md) | Infoblox | 1 | [Infoblox](../solutions/infoblox.md) |
| [[Recommended] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md) | Infoblox | 1 | [Infoblox](../solutions/infoblox.md) |
| [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) | Vectra AI | 17 | [Vectra AI Stream](../solutions/vectra-ai-stream.md) |
| [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) 🔶 | Vectra AI | 1 | [Vectra AI Stream](../solutions/vectra-ai-stream.md) |
| [Alsid for Active Directory](../connectors/alsidforad.md) ⚠️ | Alsid | 1 | [Alsid For AD](../solutions/alsid-for-ad.md) |
| [Automated Logic WebCTRL ](../connectors/automatedlogicwebctrl.md) | AutomatedLogic | 1 | [ALC-WebCTRL](../solutions/alc-webctrl.md) |
| [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) ⚠️ ➕ | Cisco | 1 | [CiscoASA](../solutions/ciscoasa.md) |
| [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) ➕ | Microsoft | 2 | [CiscoASA](../solutions/ciscoasa.md) |
| [Cisco Software Defined WAN](../connectors/ciscosdwan.md) 🔶 | Cisco | 2 | [Cisco SD-WAN](../solutions/cisco-sd-wan.md) |
| [Claroty xDome](../connectors/clarotyxdome.md) | Claroty | 1 | [Claroty xDome](../solutions/claroty-xdome.md) |
| [Common Event Format (CEF)](../connectors/cef.md) ➕ | Any | 1 | [Common Event Format](../solutions/common-event-format.md) |
| [Common Event Format (CEF) via AMA](../connectors/cefama.md) ➕ | Microsoft | 1 | [Common Event Format](../solutions/common-event-format.md) |
| [CTERA Syslog](../connectors/ctera.md) | CTERA Networks Ltd | 1 | [CTERA](../solutions/ctera.md) |
| [Custom logs via AMA](../connectors/customlogsviaama.md) 🔶 | Microsoft | 16 | [CustomLogsAma](../solutions/customlogsama.md) |
| [Cyborg Security HUNTER Hunt Packages](../connectors/cyborgsecurity-hunter.md) | Cyborg Security | 1 | [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md) |
| [DNS](../connectors/dns.md) | Microsoft | 2 | [Windows Server DNS](../solutions/windows-server-dns.md) |
| [Elastic Agent](../connectors/elasticagent.md) | Elastic | 1 | [ElasticAgent](../solutions/elasticagent.md) |
| [Eset Security Management Center](../connectors/esetsmc.md) ⚠️ 🔶 | Eset | 1 | [Eset Security Management Center](../solutions/eset-security-management-center.md) |
| [Forescout](../connectors/forescout.md) | Forescout | 1 | [Forescout (Legacy)](../solutions/forescout-legacy.md) |
| [Fortinet FortiWeb Web Application Firewall via AMA](../connectors/fortinetfortiwebama.md) | Microsoft | 1 | [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md) |
| [iboss via AMA](../connectors/ibossama.md) ➕ | iboss | 1 | [iboss](../solutions/iboss.md) |
| [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [Imperva WAF Gateway](../connectors/impervawafgateway.md) ⚠️ | Imperva | 1 | [Imperva WAF Gateway](../solutions/imperva-waf-gateway.md) |
| [IronNet IronDefense](../connectors/ironnetirondefense.md) ⚠️ | IronNet | 1 | [IronNet IronDefense](../solutions/ironnet-irondefense.md) |
| [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [One Identity Safeguard](../connectors/oneidentity.md) | One Identity LLC. | 1 | [OneIdentity](../solutions/oneidentity.md) |
| [Palo Alto Networks Cortex XDR](../connectors/paloaltonetworkscortex.md) ⚠️ | Palo Alto Networks | 1 | [Palo Alto - XDR (Cortex)](../solutions/palo-alto-xdr-cortex.md) |
| [Radiflow iSID via AMA](../connectors/radiflowisid.md) | Radiflow | 1 | [Radiflow](../solutions/radiflow.md) |
| [Security Events via Legacy Agent](../connectors/securityevents.md) ➕ | Microsoft | 1 | [Windows Security Events](../solutions/windows-security-events.md) |
| [SecurityBridge Threat Detection for SAP](../connectors/securitybridgesap.md) ⚠️ ➕ | SecurityBridge | 1 | [SecurityBridge App](../solutions/securitybridge-app.md) |
| [Semperis Directory Services Protector](../connectors/semperisdsp.md) | SEMPERIS | 1 | [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md) |
| [Silverfort Admin Console](../connectors/silverfortama.md) | Silverfort | 1 | [Silverfort](../solutions/silverfort.md) |
| [Syslog via AMA](../connectors/syslogama.md) | Microsoft | 1 | [Syslog](../solutions/syslog.md) |
| [Syslog via Legacy Agent](../connectors/syslog.md) | Microsoft | 1 | [Syslog](../solutions/syslog.md) |
| [Tenable Identity Exposure](../connectors/tenableie.md) | Tenable | 2 | [Tenable App](../solutions/tenable-app.md) |
| [Tenable.ad](../connectors/tenable.ad.md) ⚠️ | Tenable | 2 | [TenableAD](../solutions/tenablead.md) |
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
| 🚫 [[Deprecated] AI Analyst Darktrace via Legacy Agent](../connectors/darktrace.md) | Darktrace | 1 | [AI Analyst Darktrace](../solutions/ai-analyst-darktrace.md) |
| 🚫 [[Deprecated] Akamai Security Events via AMA](../connectors/akamaisecurityeventsama.md) | Akamai | 1 | [Akamai Security Events](../solutions/akamai-security-events.md) |
| 🚫 [[Deprecated] Akamai Security Events via Legacy Agent](../connectors/akamaisecurityevents.md) | Akamai | 1 | [Akamai Security Events](../solutions/akamai-security-events.md) |
| 🚫 [[Deprecated] Apache HTTP Server](../connectors/apachehttpserver.md) | Apache | 1 | [ApacheHTTPServer](../solutions/apachehttpserver.md) |
| 🚫 [[Deprecated] Apache Tomcat](../connectors/apachetomcat.md) | Apache | 1 | [Tomcat](../solutions/tomcat.md) |
| 🚫 [[Deprecated] Aruba ClearPass via AMA](../connectors/arubaclearpassama.md) | Aruba Networks | 1 | [Aruba ClearPass](../solutions/aruba-clearpass.md) |
| 🚫 [[Deprecated] Aruba ClearPass via Legacy Agent](../connectors/arubaclearpass.md) | Aruba Networks | 1 | [Aruba ClearPass](../solutions/aruba-clearpass.md) |
| 🚫 [[Deprecated] Awake Security via Legacy Agent](../connectors/aristaawakesecurity.md) | Arista Networks | 1 | [AristaAwakeSecurity](../solutions/aristaawakesecurity.md) |
| 🚫 [[Deprecated] Barracuda CloudGen Firewall](../connectors/barracudacloudfirewall.md) | Barracuda | 1 | [Barracuda CloudGen Firewall](../solutions/barracuda-cloudgen-firewall.md) |
| 🚫 [[Deprecated] Barracuda Web Application Firewall via Legacy Agent](../connectors/barracuda.md) | Barracuda | 3 | [Barracuda WAF](../solutions/barracuda-waf.md) |
| 🚫 [[Deprecated] Blackberry CylancePROTECT](../connectors/blackberrycylanceprotect.md) | Blackberry | 1 | [Blackberry CylancePROTECT](../solutions/blackberry-cylanceprotect.md) |
| 🚫 [[Deprecated] Broadcom Symantec DLP via AMA](../connectors/broadcomsymantecdlpama.md) | Broadcom | 1 | [Broadcom SymantecDLP](../solutions/broadcom-symantecdlp.md) |
| 🚫 [[Deprecated] Broadcom Symantec DLP via Legacy Agent](../connectors/broadcomsymantecdlp.md) | Broadcom | 1 | [Broadcom SymantecDLP](../solutions/broadcom-symantecdlp.md) |
| 🚫 [[Deprecated] Cisco Application Centric Infrastructure](../connectors/ciscoaci.md) | Cisco | 1 | [Cisco ACI](../solutions/cisco-aci.md) |
| 🚫 [[Deprecated] Cisco Firepower eStreamer via AMA](../connectors/ciscofirepowerestreamerama.md) | Cisco | 1 | [Cisco Firepower EStreamer](../solutions/cisco-firepower-estreamer.md) |
| 🚫 [[Deprecated] Cisco Firepower eStreamer via Legacy Agent](../connectors/ciscofirepowerestreamer.md) | Cisco | 1 | [Cisco Firepower EStreamer](../solutions/cisco-firepower-estreamer.md) |
| 🚫 [[Deprecated] Cisco Identity Services Engine](../connectors/ciscoise.md) | Cisco | 1 | [Cisco ISE](../solutions/cisco-ise.md) |
| 🚫 [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) | Cisco | 3 | [CiscoMeraki](../solutions/ciscomeraki.md) |
| 🚫 [[Deprecated] Cisco Secure Cloud Analytics](../connectors/stealthwatch.md) | Cisco | 1 | [Cisco Secure Cloud Analytics](../solutions/cisco-secure-cloud-analytics.md) |
| 🚫 [[Deprecated] Cisco Secure Email Gateway via AMA](../connectors/ciscosegama.md) | Cisco | 1 | [CiscoSEG](../solutions/ciscoseg.md) |
| 🚫 [[Deprecated] Cisco Secure Email Gateway via Legacy Agent](../connectors/ciscoseg.md) | Cisco | 1 | [CiscoSEG](../solutions/ciscoseg.md) |
| 🚫 [[Deprecated] Cisco UCS](../connectors/ciscoucs.md) | Cisco | 1 | [Cisco UCS](../solutions/cisco-ucs.md) |
| 🚫 [[Deprecated] Cisco Web Security Appliance](../connectors/ciscowsa.md) | Cisco | 1 | [CiscoWSA](../solutions/ciscowsa.md) |
| 🚫 [[Deprecated] Citrix ADC (former NetScaler)](../connectors/citrixadc.md) | Citrix | 1 | [Citrix ADC](../solutions/citrix-adc.md) |
| 🚫 [[Deprecated] Citrix WAF (Web App Firewall) via AMA](../connectors/citrixwafama.md) | Citrix Systems Inc. | 1 | [Citrix Web App Firewall](../solutions/citrix-web-app-firewall.md) |
| 🚫 [[Deprecated] Citrix WAF (Web App Firewall) via Legacy Agent](../connectors/citrixwaf.md) | Citrix Systems Inc. | 1 | [Citrix Web App Firewall](../solutions/citrix-web-app-firewall.md) |
| 🚫 [[Deprecated] Claroty via AMA](../connectors/clarotyama.md) | Claroty | 1 | [Claroty](../solutions/claroty.md) |
| 🚫 [[Deprecated] Claroty via Legacy Agent](../connectors/claroty.md) | Claroty | 1 | [Claroty](../solutions/claroty.md) |
| 🚫 [[Deprecated] Contrast Protect via AMA](../connectors/contrastprotectama.md) | Contrast Security | 1 | [Contrast Protect](../solutions/contrast-protect.md) |
| 🚫 [[Deprecated] Contrast Protect via Legacy Agent](../connectors/contrastprotect.md) | Contrast Security | 1 | [Contrast Protect](../solutions/contrast-protect.md) |
| 🚫 [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) | CrowdStrike | 1 | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| 🚫 [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) | CrowdStrike | 1 | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| 🚫 [[Deprecated] CyberArk Enterprise Password Vault (EPV) Events via Legacy Agent](../connectors/cyberark.md) | Cyber-Ark | 1 | [CyberArk Privilege Access Manager (PAM) Events](../solutions/cyberark-privilege-access-manager-pam-events.md) |
| 🚫 [[Deprecated] CyberArk Privilege Access Manager (PAM) Events via AMA](../connectors/cyberarkama.md) | Cyber-Ark | 1 | [CyberArk Privilege Access Manager (PAM) Events](../solutions/cyberark-privilege-access-manager-pam-events.md) |
| 🚫 [[Deprecated] Delinea Secret Server via AMA](../connectors/delineasecretserverama.md) | Delinea, Inc | 1 | [Delinea Secret Server](../solutions/delinea-secret-server.md) |
| 🚫 [[Deprecated] Delinea Secret Server via Legacy Agent](../connectors/delineasecretserver-cef.md) | Delinea, Inc | 1 | [Delinea Secret Server](../solutions/delinea-secret-server.md) |
| 🚫 [[Deprecated] Digital Guardian Data Loss Prevention](../connectors/digitalguardiandlp.md) | Digital Guardian | 1 | [Digital Guardian Data Loss Prevention](../solutions/digital-guardian-data-loss-prevention.md) |
| 🚫 [[Deprecated] ESET PROTECT](../connectors/esetprotect.md) | ESET | 1 | [ESETPROTECT](../solutions/esetprotect.md) |
| 🚫 [[Deprecated] Exabeam Advanced Analytics](../connectors/exabeam.md) | Exabeam | 1 | [Exabeam Advanced Analytics](../solutions/exabeam-advanced-analytics.md) |
| 🚫 [[Deprecated] ExtraHop Reveal(x) via AMA](../connectors/extrahopnetworksama.md) | ExtraHop Networks | 1 | [ExtraHop Reveal(x)](../solutions/extrahop-reveal-x.md) |
| 🚫 [[Deprecated] ExtraHop Reveal(x) via Legacy Agent](../connectors/extrahopnetworks.md) | ExtraHop Networks | 1 | [ExtraHop Reveal(x)](../solutions/extrahop-reveal-x.md) |
| 🚫 [[Deprecated] F5 Networks via AMA](../connectors/f5ama.md) | F5 Networks | 1 | [F5 Networks](../solutions/f5-networks.md) |
| 🚫 [[Deprecated] F5 Networks via Legacy Agent](../connectors/f5.md) | F5 Networks | 1 | [F5 Networks](../solutions/f5-networks.md) |
| 🚫 [[Deprecated] FireEye Network Security (NX) via AMA](../connectors/fireeyenxama.md) | FireEye | 1 | [FireEye Network Security](../solutions/fireeye-network-security.md) |
| 🚫 [[Deprecated] FireEye Network Security (NX) via Legacy Agent](../connectors/fireeyenx.md) | FireEye | 1 | [FireEye Network Security](../solutions/fireeye-network-security.md) |
| 🚫 [[Deprecated] Forcepoint CASB via AMA](../connectors/forcepointcasbama.md) | Forcepoint CASB | 1 | [Forcepoint CASB](../solutions/forcepoint-casb.md) |
| 🚫 [[Deprecated] Forcepoint CASB via Legacy Agent](../connectors/forcepointcasb.md) | Forcepoint CASB | 1 | [Forcepoint CASB](../solutions/forcepoint-casb.md) |
| 🚫 [[Deprecated] Forcepoint CSG via AMA](../connectors/forcepointcsgama.md) | Forcepoint | 1 | [Forcepoint CSG](../solutions/forcepoint-csg.md) |
| 🚫 [[Deprecated] Forcepoint CSG via Legacy Agent](../connectors/forcepointcsg.md) | Forcepoint | 1 | [Forcepoint CSG](../solutions/forcepoint-csg.md) |
| 🚫 [[Deprecated] Forcepoint NGFW via AMA](../connectors/forcepointngfwama.md) | Forcepoint | 1 | [Forcepoint NGFW](../solutions/forcepoint-ngfw.md) |
| 🚫 [[Deprecated] Forcepoint NGFW via Legacy Agent](../connectors/forcepointngfw.md) | Forcepoint | 1 | [Forcepoint NGFW](../solutions/forcepoint-ngfw.md) |
| 🚫 [[Deprecated] ForgeRock Identity Platform](../connectors/forgerock.md) | ForgeRock Inc | 1 | [ForgeRock Common Audit for CEF](../solutions/forgerock-common-audit-for-cef.md) |
| 🚫 [[Deprecated] Fortinet FortiWeb Web Application Firewall via Legacy Agent](../connectors/fortinetfortiweb.md) | Microsoft | 1 | [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md) |
| 🚫 [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md) | Fortinet | 1 | [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) |
| 🚫 [[Deprecated] Fortinet via Legacy Agent](../connectors/fortinet.md) | Fortinet | 1 | [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) |
| 🚫 [[Deprecated] GitLab](../connectors/gitlab.md) | Microsoft | 1 | [GitLab](../solutions/gitlab.md) |
| 🚫 [[Deprecated] iboss via Legacy Agent](../connectors/iboss.md) | iboss | 1 | [iboss](../solutions/iboss.md) |
| 🚫 [[Deprecated] Illumio Core via AMA](../connectors/illumiocoreama.md) | Illumio | 1 | [Illumio Core](../solutions/illumio-core.md) |
| 🚫 [[Deprecated] Illumio Core via Legacy Agent](../connectors/illumiocore.md) | Illumio | 1 | [Illumio Core](../solutions/illumio-core.md) |
| 🚫 [[Deprecated] Illusive Platform via AMA](../connectors/illusiveattackmanagementsystemama.md) | illusive | 1 | [Illusive Platform](../solutions/illusive-platform.md) |
| 🚫 [[Deprecated] Illusive Platform via Legacy Agent](../connectors/illusiveattackmanagementsystem.md) | illusive | 1 | [Illusive Platform](../solutions/illusive-platform.md) |
| 🚫 [[Deprecated] Infoblox Cloud Data Connector via Legacy Agent](../connectors/infobloxclouddataconnector.md) | Infoblox | 1 | [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md) |
| 🚫 [[Deprecated] Infoblox NIOS](../connectors/infobloxnios.md) | Infoblox | 1 | [Infoblox NIOS](../solutions/infoblox-nios.md) |
| 🚫 [[Deprecated] Infoblox SOC Insight Data Connector via Legacy Agent](../connectors/infobloxsocinsightsdataconnector-legacy.md) | Infoblox | 1 | [Infoblox](../solutions/infoblox.md) |
| 🚫 [[Deprecated] ISC Bind](../connectors/iscbind.md) | ISC | 1 | [ISC Bind](../solutions/isc-bind.md) |
| 🚫 [[Deprecated] Ivanti Unified Endpoint Management](../connectors/ivantiuem.md) | Ivanti | 1 | [Ivanti Unified Endpoint Management](../solutions/ivanti-unified-endpoint-management.md) |
| 🚫 [[Deprecated] JBoss Enterprise Application Platform](../connectors/jbosseap.md) | Red Hat | 1 | [JBoss](../solutions/jboss.md) |
| 🚫 [[Deprecated] Juniper IDP](../connectors/juniperidp.md) | Juniper | 1 | [JuniperIDP](../solutions/juniperidp.md) |
| 🚫 [[Deprecated] Juniper SRX](../connectors/junipersrx.md) | Juniper | 1 | [Juniper SRX](../solutions/juniper-srx.md) |
| 🚫 [[Deprecated] MarkLogic Audit](../connectors/marklogic.md) | MarkLogic | 1 | [MarkLogicAudit](../solutions/marklogicaudit.md) |
| 🚫 [[Deprecated] McAfee ePolicy Orchestrator (ePO)](../connectors/mcafeeepo.md) | McAfee | 1 | [McAfee ePolicy Orchestrator](../solutions/mcafee-epolicy-orchestrator.md) |
| 🚫 [[Deprecated] McAfee Network Security Platform](../connectors/mcafeensp.md) | McAfee | 1 | [McAfee Network Security Platform](../solutions/mcafee-network-security-platform.md) |
| 🚫 [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | Microsoft | 5 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| 🚫 [[Deprecated] Microsoft Sysmon For Linux](../connectors/microsoftsysmonforlinux.md) | Microsoft | 1 | [Microsoft Sysmon For Linux](../solutions/microsoft-sysmon-for-linux.md) |
| 🚫 [[Deprecated] MongoDB Audit](../connectors/mongodb.md) | MongoDB | 1 | [MongoDBAudit](../solutions/mongodbaudit.md) |
| 🚫 [[Deprecated] Nasuni Edge Appliance](../connectors/nasuniedgeappliance.md) | Nasuni | 1 | [Nasuni](../solutions/nasuni.md) |
| 🚫 [[Deprecated] Netwrix Auditor via AMA](../connectors/netwrixama.md) | Netwrix | 1 | [Netwrix Auditor](../solutions/netwrix-auditor.md) |
| 🚫 [[Deprecated] Netwrix Auditor via Legacy Agent](../connectors/netwrix.md) | Netwrix | 1 | [Netwrix Auditor](../solutions/netwrix-auditor.md) |
| 🚫 [[Deprecated] NGINX HTTP Server](../connectors/nginxhttpserver.md) | Nginx | 1 | [NGINX HTTP Server](../solutions/nginx-http-server.md) |
| 🚫 [[Deprecated] Nozomi Networks N2OS via AMA](../connectors/nozominetworksn2osama.md) | Nozomi Networks | 1 | [NozomiNetworks](../solutions/nozominetworks.md) |
| 🚫 [[Deprecated] Nozomi Networks N2OS via Legacy Agent](../connectors/nozominetworksn2os.md) | Nozomi Networks | 1 | [NozomiNetworks](../solutions/nozominetworks.md) |
| 🚫 [[Deprecated] Onapsis Platform](../connectors/onapsisplatform.md) | Onapsis | 1 | [Onapsis Platform](../solutions/onapsis-platform.md) |
| 🚫 [[Deprecated] OpenVPN Server](../connectors/openvpn.md) | OpenVPN | 1 | [OpenVPN](../solutions/openvpn.md) |
| 🚫 [[Deprecated] Oracle Database Audit](../connectors/oracledatabaseaudit.md) | Oracle | 1 | [OracleDatabaseAudit](../solutions/oracledatabaseaudit.md) |
| 🚫 [[Deprecated] Oracle WebLogic Server](../connectors/oracleweblogicserver.md) | Oracle | 1 | [OracleWebLogicServer](../solutions/oracleweblogicserver.md) |
| 🚫 [[Deprecated] OSSEC via AMA](../connectors/ossecama.md) | OSSEC | 1 | [OSSEC](../solutions/ossec.md) |
| 🚫 [[Deprecated] OSSEC via Legacy Agent](../connectors/ossec.md) | OSSEC | 1 | [OSSEC](../solutions/ossec.md) |
| 🚫 [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md) | Palo Alto Networks | 1 | [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md) |
| 🚫 [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md) | Palo Alto Networks | 1 | [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md) |
| 🚫 [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via AMA](../connectors/paloaltocdlama.md) | Palo Alto Networks | 1 | [PaloAltoCDL](../solutions/paloaltocdl.md) |
| 🚫 [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via Legacy Agent](../connectors/paloaltocdl.md) | Palo Alto Networks | 1 | [PaloAltoCDL](../solutions/paloaltocdl.md) |
| 🚫 [[Deprecated] PingFederate via AMA](../connectors/pingfederateama.md) | Ping Identity | 1 | [PingFederate](../solutions/pingfederate.md) |
| 🚫 [[Deprecated] PingFederate via Legacy Agent](../connectors/pingfederate.md) | Ping Identity | 1 | [PingFederate](../solutions/pingfederate.md) |
| 🚫 [[Deprecated] PostgreSQL Events](../connectors/postgresql.md) | PostgreSQL | 1 | [PostgreSQL](../solutions/postgresql.md) |
| 🚫 [[Deprecated] Pulse Connect Secure](../connectors/pulseconnectsecure.md) | Pulse Secure | 1 | [Pulse Connect Secure](../solutions/pulse-connect-secure.md) |
| 🚫 [[Deprecated] RIDGEBOT - data connector for Microsoft Sentinel](../connectors/ridgebotdataconnector.md) | RidgeSecurity | 1 | [RidgeSecurity](../solutions/ridgesecurity.md) |
| 🚫 [[Deprecated] RSA® SecurID (Authentication Manager)](../connectors/rsasecuridam.md) | RSA | 1 | [RSA SecurID](../solutions/rsa-securid.md) |
| 🚫 [[Deprecated] SonicWall Firewall via AMA](../connectors/sonicwallfirewallama.md) | SonicWall | 1 | [SonicWall Firewall](../solutions/sonicwall-firewall.md) |
| 🚫 [[Deprecated] SonicWall Firewall via Legacy Agent](../connectors/sonicwallfirewall.md) | SonicWall | 1 | [SonicWall Firewall](../solutions/sonicwall-firewall.md) |
| 🚫 [[Deprecated] Sophos XG Firewall](../connectors/sophosxgfirewall.md) | Sophos | 1 | [Sophos XG Firewall](../solutions/sophos-xg-firewall.md) |
| 🚫 [[Deprecated] Squid Proxy](../connectors/squidproxy.md) | Squid | 1 | [SquidProxy](../solutions/squidproxy.md) |
| 🚫 [[Deprecated] Symantec Endpoint Protection](../connectors/symantecendpointprotection.md) | Broadcom | 1 | [Symantec Endpoint Protection](../solutions/symantec-endpoint-protection.md) |
| 🚫 [[Deprecated] Symantec ProxySG](../connectors/symantecproxysg.md) | Symantec | 1 | [SymantecProxySG](../solutions/symantecproxysg.md) |
| 🚫 [[Deprecated] Symantec VIP](../connectors/symantecvip.md) | Symantec | 1 | [Symantec VIP](../solutions/symantec-vip.md) |
| 🚫 [[Deprecated] Trend Micro Apex One via AMA](../connectors/trendmicroapexoneama.md) | Trend Micro | 1 | [Trend Micro Apex One](../solutions/trend-micro-apex-one.md) |
| 🚫 [[Deprecated] Trend Micro Apex One via Legacy Agent](../connectors/trendmicroapexone.md) | Trend Micro | 1 | [Trend Micro Apex One](../solutions/trend-micro-apex-one.md) |
| 🚫 [[Deprecated] Trend Micro Deep Security via Legacy](../connectors/trendmicro.md) | Trend Micro | 1 | [Trend Micro Deep Security](../solutions/trend-micro-deep-security.md) |
| 🚫 [[Deprecated] Trend Micro TippingPoint via Legacy](../connectors/trendmicrotippingpoint.md) | Trend Micro | 1 | [Trend Micro TippingPoint](../solutions/trend-micro-tippingpoint.md) |
| 🚫 [[Deprecated] Ubiquiti UniFi](../connectors/ubiquitiunifi.md) | Ubiquiti | 1 | [Ubiquiti UniFi](../solutions/ubiquiti-unifi.md) |
| 🚫 [[Deprecated] vArmour Application Controller via AMA](../connectors/varmouracama.md) | vArmour | 1 | [vArmour Application Controller](../solutions/varmour-application-controller.md) |
| 🚫 [[Deprecated] vArmour Application Controller via Legacy Agent](../connectors/varmourac.md) | vArmour | 1 | [vArmour Application Controller](../solutions/varmour-application-controller.md) |
| 🚫 [[Deprecated] Vectra AI Detect via AMA](../connectors/aivectradetectama.md) | Vectra AI | 1 | [Vectra AI Detect](../solutions/vectra-ai-detect.md) |
| 🚫 [[Deprecated] Vectra AI Detect via Legacy Agent](../connectors/aivectradetect.md) | Vectra AI | 1 | [Vectra AI Detect](../solutions/vectra-ai-detect.md) |
| 🚫 [[Deprecated] VMware ESXi](../connectors/vmwareesxi.md) | VMWare | 1 | [VMWareESXi](../solutions/vmwareesxi.md) |
| 🚫 [[Deprecated] VMware vCenter](../connectors/vmwarevcenter.md) | VMware | 1 | [VMware vCenter](../solutions/vmware-vcenter.md) |
| 🚫 [[Deprecated] Votiro Sanitization Engine Logs](../connectors/votiro.md) | Votiro | 1 | [Votiro](../solutions/votiro.md) |
| 🚫 [[Deprecated] WatchGuard Firebox](../connectors/watchguardfirebox.md) | WatchGuard Technologies | 1 | [Watchguard Firebox](../solutions/watchguard-firebox.md) |
| 🚫 [[Deprecated] WireX Network Forensics Platform via AMA](../connectors/wirex-systems-nfpama.md) | WireX_Systems | 1 | [WireX Network Forensics Platform](../solutions/wirex-network-forensics-platform.md) |
| 🚫 [[Deprecated] WireX Network Forensics Platform via Legacy Agent](../connectors/wirex-systems-nfp.md) | WireX_Systems | 1 | [WireX Network Forensics Platform](../solutions/wirex-network-forensics-platform.md) |
| 🚫 [[Deprecated] WithSecure Elements via Connector](../connectors/withsecureelementsviaconnector.md) | WithSecure | 1 | [WithSecureElementsViaConnector](../solutions/withsecureelementsviaconnector.md) |
| 🚫 [[Deprecated] Zscaler Private Access](../connectors/zscalerprivateaccess.md) | Zscaler | 1 | [Zscaler Private Access (ZPA)](../solutions/zscaler-private-access-zpa.md) |

---

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

