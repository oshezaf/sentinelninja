# CommonSecurityLog

Reference for CommonSecurityLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Syslog/CEF |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/commonsecuritylog) |

## Additional Information

- 📖 **Related Documentation:** [CEF and CommonSecurityLog field mapping](https://learn.microsoft.com/azure/sentinel/cef-name-mapping) - Maps CEF field names to CommonSecurityLog column names
- 📖 **Related Documentation:** [CEF collection best practices](https://techcommunity.microsoft.com/blog/microsoftsentinelblog/best-practices-for-common-event-format-cef-collection-in-azure-sentinel/969990) - Performance tuning and collection recommendations
- 📚 **Vendor CEF Guide:** [Palo Alto PAN-OS](https://docs.paloaltonetworks.com/pan-os/11-1/pan-os-admin/monitoring/use-syslog-for-monitoring/syslog-field-descriptions) - Syslog field descriptions
- 📚 **Vendor CEF Guide:** [Fortinet FortiGate](https://docs.fortinet.com/document/fortigate/7.4.0/fortios-log-message-reference/357866/log-message-fields) - Log message fields reference
- 📚 **Vendor CEF Guide:** [Cisco ASA](https://www.cisco.com/c/en/us/td/docs/security/asa/syslog/b_syslog.html) - Syslog messages reference
- 📚 **Vendor CEF Guide:** [Check Point](https://support.checkpoint.com/results/sk/sk144192) - Log fields description
- 📚 **Vendor CEF Guide:** [Barracuda WAF](https://campus.barracuda.com/product/webapplicationfirewall/doc/168300161/how-to-export-logs-from-the-barracuda-web-application-firewall) - How to export logs
- 📚 **Vendor CEF Guide:** [Citrix/NetScaler WAF](https://docs.netscaler.com/en-us/citrix-adc/current-release/application-firewall/logs.html) - Application Firewall logs
- 📚 **Vendor CEF Guide:** [Symantec Endpoint Protection](https://techdocs.broadcom.com/us/en/symantec-security-software/endpoint-security-and-management/endpoint-protection/all/Monitoring-Reporting-and-Enforcing-Compliance/viewing-logs-v7522439-d37e464/about-the-types-of-logs-v8156418-d37e6.html) - Log types reference

## Solutions (77)

This table is used by the following solutions:

- [AI Analyst Darktrace](../solutions/ai-analyst-darktrace.md)
- [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md)
- [Akamai Security Events](../solutions/akamai-security-events.md)
- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [AristaAwakeSecurity](../solutions/aristaawakesecurity.md)
- [Aruba ClearPass](../solutions/aruba-clearpass.md)
- [Barracuda CloudGen Firewall](../solutions/barracuda-cloudgen-firewall.md)
- [Barracuda WAF](../solutions/barracuda-waf.md)
- [Broadcom SymantecDLP](../solutions/broadcom-symantecdlp.md)
- [Check Point](../solutions/check-point.md)
- [Cisco Firepower EStreamer](../solutions/cisco-firepower-estreamer.md)
- [CiscoASA](../solutions/ciscoasa.md)
- [CiscoSEG](../solutions/ciscoseg.md)
- [Citrix Web App Firewall](../solutions/citrix-web-app-firewall.md)
- [Claroty](../solutions/claroty.md)
- [Claroty xDome](../solutions/claroty-xdome.md)
- [Common Event Format](../solutions/common-event-format.md)
- [Contrast Protect](../solutions/contrast-protect.md)
- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [CyberArk Privilege Access Manager (PAM) Events](../solutions/cyberark-privilege-access-manager-pam-events.md)
- [Cyware](../solutions/cyware.md)
- [Delinea Secret Server](../solutions/delinea-secret-server.md)
- [Endace](../solutions/endace.md)
- [ExtraHop Reveal(x)](../solutions/extrahop-reveal-x.md)
- [F5 Networks](../solutions/f5-networks.md)
- [FalconFriday](../solutions/falconfriday.md)
- [FireEye Network Security](../solutions/fireeye-network-security.md)
- [Forcepoint CASB](../solutions/forcepoint-casb.md)
- [Forcepoint CSG](../solutions/forcepoint-csg.md)
- [Forcepoint NGFW](../solutions/forcepoint-ngfw.md)
- [ForgeRock Common Audit for CEF](../solutions/forgerock-common-audit-for-cef.md)
- [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md)
- [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Illumio Core](../solutions/illumio-core.md)
- [Illusive Platform](../solutions/illusive-platform.md)
- [Imperva WAF Gateway](../solutions/imperva-waf-gateway.md)
- [Infoblox](../solutions/infoblox.md)
- [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md)
- [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)
- [IronNet IronDefense](../solutions/ironnet-irondefense.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [Netwrix Auditor](../solutions/netwrix-auditor.md)
- [NozomiNetworks](../solutions/nozominetworks.md)
- [OSSEC](../solutions/ossec.md)
- [Onapsis Platform](../solutions/onapsis-platform.md)
- [OneIdentity](../solutions/oneidentity.md)
- [Palo Alto - XDR (Cortex)](../solutions/palo-alto-xdr-cortex.md)
- [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md)
- [PaloAltoCDL](../solutions/paloaltocdl.md)
- [PingFederate](../solutions/pingfederate.md)
- [Radiflow](../solutions/radiflow.md)
- [RidgeSecurity](../solutions/ridgesecurity.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md)
- [Silverfort](../solutions/silverfort.md)
- [SonicWall Firewall](../solutions/sonicwall-firewall.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Trend Micro Apex One](../solutions/trend-micro-apex-one.md)
- [Vectra AI Detect](../solutions/vectra-ai-detect.md)
- [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)
- [Votiro](../solutions/votiro.md)
- [WireX Network Forensics Platform](../solutions/wirex-network-forensics-platform.md)
- [WithSecureElementsViaConnector](../solutions/withsecureelementsviaconnector.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)
- [Zscaler Internet Access](../solutions/zscaler-internet-access.md)
- [iboss](../solutions/iboss.md)
- [vArmour Application Controller](../solutions/varmour-application-controller.md)

## Connectors (88)

This table is ingested by the following connectors:

- [[Deprecated] Vectra AI Detect via Legacy Agent](../connectors/aivectradetect.md)
- [[Deprecated] Vectra AI Detect via AMA](../connectors/aivectradetectama.md)
- [[Deprecated] Akamai Security Events via Legacy Agent](../connectors/akamaisecurityevents.md)
- [[Deprecated] Akamai Security Events via AMA](../connectors/akamaisecurityeventsama.md)
- [[Deprecated] Awake Security via Legacy Agent](../connectors/aristaawakesecurity.md)
- [[Deprecated] Aruba ClearPass via Legacy Agent](../connectors/arubaclearpass.md)
- [[Deprecated] Aruba ClearPass via AMA](../connectors/arubaclearpassama.md)
- [[Deprecated] Barracuda Web Application Firewall via Legacy Agent](../connectors/barracuda.md)
- [[Deprecated] Broadcom Symantec DLP via Legacy Agent](../connectors/broadcomsymantecdlp.md)
- [[Deprecated] Broadcom Symantec DLP via AMA](../connectors/broadcomsymantecdlpama.md)
- [Common Event Format (CEF)](../connectors/cef.md)
- [Common Event Format (CEF) via AMA](../connectors/cefama.md)
- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md)
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md)
- [[Deprecated] Cisco Firepower eStreamer via Legacy Agent](../connectors/ciscofirepowerestreamer.md)
- [[Deprecated] Cisco Firepower eStreamer via AMA](../connectors/ciscofirepowerestreamerama.md)
- [[Deprecated] Cisco Secure Email Gateway via AMA](../connectors/ciscosegama.md)
- [[Deprecated] Citrix WAF (Web App Firewall) via Legacy Agent](../connectors/citrixwaf.md)
- [[Deprecated] Citrix WAF (Web App Firewall) via AMA](../connectors/citrixwafama.md)
- [[Deprecated] Claroty via AMA](../connectors/clarotyama.md)
- [Claroty xDome](../connectors/clarotyxdome.md)
- [[Deprecated] Contrast Protect via Legacy Agent](../connectors/contrastprotect.md)
- [[Deprecated] Contrast Protect via AMA](../connectors/contrastprotectama.md)
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md)
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md)
- [[Deprecated] CyberArk Enterprise Password Vault (EPV) Events via Legacy Agent](../connectors/cyberark.md)
- [[Deprecated] CyberArk Privilege Access Manager (PAM) Events via AMA](../connectors/cyberarkama.md)
- [[Deprecated] AI Analyst Darktrace via Legacy Agent](../connectors/darktrace.md)
- [[Deprecated] AI Analyst Darktrace via AMA](../connectors/darktraceama.md)
- [[Deprecated] Delinea Secret Server via AMA](../connectors/delineasecretserverama.md)
- [[Deprecated] Delinea Secret Server via Legacy Agent](../connectors/delineasecretserver-cef.md)
- [[Deprecated] ExtraHop Reveal(x) via Legacy Agent](../connectors/extrahopnetworks.md)
- [[Deprecated] ExtraHop Reveal(x) via AMA](../connectors/extrahopnetworksama.md)
- [[Deprecated] F5 Networks via Legacy Agent](../connectors/f5.md)
- [[Deprecated] F5 Networks via AMA](../connectors/f5ama.md)
- [[Deprecated] FireEye Network Security (NX) via AMA](../connectors/fireeyenxama.md)
- [[Deprecated] Forcepoint CSG via Legacy Agent](../connectors/forcepointcsg.md)
- [[Deprecated] Forcepoint CSG via AMA](../connectors/forcepointcsgama.md)
- [[Deprecated] Forcepoint CASB via Legacy Agent](../connectors/forcepointcasb.md)
- [[Deprecated] Forcepoint CASB via AMA](../connectors/forcepointcasbama.md)
- [[Deprecated] Forcepoint NGFW via Legacy Agent](../connectors/forcepointngfw.md)
- [[Deprecated] Forcepoint NGFW via AMA](../connectors/forcepointngfwama.md)
- [[Deprecated] ForgeRock Identity Platform](../connectors/forgerock.md)
- [[Deprecated] Fortinet via Legacy Agent](../connectors/fortinet.md)
- [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md)
- [[Deprecated] Fortinet FortiWeb Web Application Firewall via Legacy Agent](../connectors/fortinetfortiweb.md)
- [Fortinet FortiWeb Web Application Firewall via AMA](../connectors/fortinetfortiwebama.md)
- [[Deprecated] Illumio Core via AMA](../connectors/illumiocoreama.md)
- [Imperva WAF Gateway](../connectors/impervawafgateway.md)
- [[Deprecated] Infoblox Cloud Data Connector via Legacy Agent](../connectors/infobloxclouddataconnector.md)
- [[Deprecated] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md)
- [[Recommended] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md)
- [[Deprecated] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md)
- [[Recommended] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md)
- [[Deprecated] Infoblox SOC Insight Data Connector via Legacy Agent](../connectors/infobloxsocinsightsdataconnector-legacy.md)
- [IronNet IronDefense](../connectors/ironnetirondefense.md)
- [[Deprecated] Netwrix Auditor via AMA](../connectors/netwrixama.md)
- [[Deprecated] Nozomi Networks N2OS via AMA](../connectors/nozominetworksn2osama.md)
- [[Deprecated] OSSEC via AMA](../connectors/ossecama.md)
- [[Deprecated] Onapsis Platform](../connectors/onapsisplatform.md)
- [One Identity Safeguard](../connectors/oneidentity.md)
- [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via AMA](../connectors/paloaltocdlama.md)
- [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md)
- [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md)
- [Palo Alto Networks Cortex XDR](../connectors/paloaltonetworkscortex.md)
- [[Deprecated] PingFederate via AMA](../connectors/pingfederateama.md)
- [Radiflow iSID via AMA](../connectors/radiflowisid.md)
- [[Deprecated] RIDGEBOT - data connector for Microsoft Sentinel](../connectors/ridgebotdataconnector.md)
- [Silverfort Admin Console](../connectors/silverfortama.md)
- [[Deprecated] SonicWall Firewall via Legacy Agent](../connectors/sonicwallfirewall.md)
- [[Deprecated] SonicWall Firewall via AMA](../connectors/sonicwallfirewallama.md)
- [Threat Intelligence Platforms](../connectors/threatintelligence.md)
- [[Deprecated] Trend Micro Apex One via AMA](../connectors/trendmicroapexoneama.md)
- [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md)
- [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md)
- [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md)
- [[Deprecated] Votiro Sanitization Engine Logs](../connectors/votiro.md)
- [[Deprecated] WireX Network Forensics Platform via Legacy Agent](../connectors/wirex-systems-nfp.md)
- [[Deprecated] WireX Network Forensics Platform via AMA](../connectors/wirex-systems-nfpama.md)
- [[Deprecated] WithSecure Elements via Connector](../connectors/withsecureelementsviaconnector.md)
- [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md)
- [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md)
- [[Deprecated] iboss via Legacy Agent](../connectors/iboss.md)
- [iboss via AMA](../connectors/ibossama.md)
- [[Deprecated] Illusive Platform via Legacy Agent](../connectors/illusiveattackmanagementsystem.md)
- [[Deprecated] Illusive Platform via AMA](../connectors/illusiveattackmanagementsystemama.md)
- [[Deprecated] vArmour Application Controller via Legacy Agent](../connectors/varmourac.md)
- [[Deprecated] vArmour Application Controller via AMA](../connectors/varmouracama.md)

## Vendors and Products (55)

The following DeviceVendor/DeviceProduct values are used by connectors ingesting this table:

| Vendor | Product | Connectors |
|:-------|:--------|:-----------|
| * | iSID | [Radiflow iSID via AMA](../connectors/radiflowisid.md) |
| Akamai | akamai_siem | [[Deprecated] Akamai Security Events via Legacy Agent](../connectors/akamaisecurityevents.md), [[Deprecated] Akamai Security Events via AMA](../connectors/akamaisecurityeventsama.md) |
| Arista Networks | Awake Security | [[Deprecated] Awake Security via Legacy Agent](../connectors/aristaawakesecurity.md) |
| Aruba Networks | ClearPass | [[Deprecated] Aruba ClearPass via Legacy Agent](../connectors/arubaclearpass.md), [[Deprecated] Aruba ClearPass via AMA](../connectors/arubaclearpassama.md) |
| Barracuda | * | [[Deprecated] Barracuda Web Application Firewall via Legacy Agent](../connectors/barracuda.md) |
| Cisco | * | [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) |
| Cisco | ASA | [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) |
| Cisco | ESA_CONSOLIDATED_LOG_EVENT | [[Deprecated] Cisco Secure Email Gateway via AMA](../connectors/ciscosegama.md) |
| Cisco | Firepower | [[Deprecated] Cisco Firepower eStreamer via Legacy Agent](../connectors/ciscofirepowerestreamer.md), [[Deprecated] Cisco Firepower eStreamer via AMA](../connectors/ciscofirepowerestreamerama.md) |
| Citrix | NetScaler | [[Deprecated] Citrix WAF (Web App Firewall) via Legacy Agent](../connectors/citrixwaf.md), [[Deprecated] Citrix WAF (Web App Firewall) via AMA](../connectors/citrixwafama.md) |
| Claroty | * | [[Deprecated] Claroty via AMA](../connectors/clarotyama.md) |
| Contrast Security | * | [[Deprecated] Contrast Protect via Legacy Agent](../connectors/contrastprotect.md), [[Deprecated] Contrast Protect via AMA](../connectors/contrastprotectama.md) |
| CrowdStrike | FalconHost | [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md), [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) |
| Cyber-Ark | Vault | [[Deprecated] CyberArk Enterprise Password Vault (EPV) Events via Legacy Agent](../connectors/cyberark.md), [[Deprecated] CyberArk Privilege Access Manager (PAM) Events via AMA](../connectors/cyberarkama.md) |
| Darktrace | * | [[Deprecated] AI Analyst Darktrace via Legacy Agent](../connectors/darktrace.md), [[Deprecated] AI Analyst Darktrace via AMA](../connectors/darktraceama.md) |
| Delinea Software | Secret Server | [[Deprecated] Delinea Secret Server via AMA](../connectors/delineasecretserverama.md), [[Deprecated] Delinea Secret Server via Legacy Agent](../connectors/delineasecretserver-cef.md) |
| ExtraHop | * | [[Deprecated] ExtraHop Reveal(x) via Legacy Agent](../connectors/extrahopnetworks.md), [[Deprecated] ExtraHop Reveal(x) via AMA](../connectors/extrahopnetworksama.md) |
| F5 | * | [[Deprecated] F5 Networks via Legacy Agent](../connectors/f5.md), [[Deprecated] F5 Networks via AMA](../connectors/f5ama.md) |
| FireEye | * | [[Deprecated] FireEye Network Security (NX) via AMA](../connectors/fireeyenxama.md) |
| Forcepoint | NGFW | [[Deprecated] Forcepoint NGFW via Legacy Agent](../connectors/forcepointngfw.md), [[Deprecated] Forcepoint NGFW via AMA](../connectors/forcepointngfwama.md) |
| Forcepoint CASB | * | [[Deprecated] Forcepoint CASB via Legacy Agent](../connectors/forcepointcasb.md), [[Deprecated] Forcepoint CASB via AMA](../connectors/forcepointcasbama.md) |
| Forcepoint CSG | Email | [[Deprecated] Forcepoint CSG via Legacy Agent](../connectors/forcepointcsg.md), [[Deprecated] Forcepoint CSG via AMA](../connectors/forcepointcsgama.md) |
| Forcepoint CSG | Web | [[Deprecated] Forcepoint CSG via Legacy Agent](../connectors/forcepointcsg.md), [[Deprecated] Forcepoint CSG via AMA](../connectors/forcepointcsgama.md) |
| ForgeRock Inc | * | [[Deprecated] ForgeRock Identity Platform](../connectors/forgerock.md) |
| Fortinet | * | [[Deprecated] Fortinet via Legacy Agent](../connectors/fortinet.md) |
| Fortinet | Fortigate | [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md) |
| Fortinet | Fortiweb | [[Deprecated] Fortinet FortiWeb Web Application Firewall via Legacy Agent](../connectors/fortinetfortiweb.md) |
| Illumio | * | [[Deprecated] Illumio Core via AMA](../connectors/illumiocoreama.md) |
| Imperva | WAF Gateway | [Imperva WAF Gateway](../connectors/impervawafgateway.md) |
| Imperva Inc. | WAF Gateway | [Imperva WAF Gateway](../connectors/impervawafgateway.md) |
| Infoblox | Data Connector | [[Deprecated] Infoblox Cloud Data Connector via Legacy Agent](../connectors/infobloxclouddataconnector.md), [[Deprecated] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md), [[Recommended] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md), [[Deprecated] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md), [[Recommended] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md), [[Deprecated] Infoblox SOC Insight Data Connector via Legacy Agent](../connectors/infobloxsocinsightsdataconnector-legacy.md) |
| IronNet | IronDefense | [IronNet IronDefense](../connectors/ironnetirondefense.md) |
| IronNet | IronDome | [IronNet IronDefense](../connectors/ironnetirondefense.md) |
| Netwrix | * | [[Deprecated] Netwrix Auditor via AMA](../connectors/netwrixama.md) |
| OSSEC | * | [[Deprecated] OSSEC via AMA](../connectors/ossecama.md) |
| Onapsis | OSP | [[Deprecated] Onapsis Platform](../connectors/onapsisplatform.md) |
| OneIdentity | SPS | [One Identity Safeguard](../connectors/oneidentity.md) |
| Palo Alto Networks | * | [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md) |
| Palo Alto Networks | Cortex XDR | [Palo Alto Networks Cortex XDR](../connectors/paloaltonetworkscortex.md) |
| Palo Alto Networks | LF | [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via AMA](../connectors/paloaltocdlama.md) |
| Palo Alto Networks | PAN-OS | [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md) |
| RidgeSecurity | * | [[Deprecated] RIDGEBOT - data connector for Microsoft Sentinel](../connectors/ridgebotdataconnector.md) |
| Silverfort | Admin Console | [Silverfort Admin Console](../connectors/silverfortama.md) |
| SonicWall | * | [[Deprecated] SonicWall Firewall via Legacy Agent](../connectors/sonicwallfirewall.md), [[Deprecated] SonicWall Firewall via AMA](../connectors/sonicwallfirewallama.md) |
| Symantec | DLP | [[Deprecated] Broadcom Symantec DLP via Legacy Agent](../connectors/broadcomsymantecdlp.md), [[Deprecated] Broadcom Symantec DLP via AMA](../connectors/broadcomsymantecdlpama.md) |
| Thycotic Software | Secret Server | [[Deprecated] Delinea Secret Server via AMA](../connectors/delineasecretserverama.md), [[Deprecated] Delinea Secret Server via Legacy Agent](../connectors/delineasecretserver-cef.md) |
| Trend Micro | Apex Central | [[Deprecated] Trend Micro Apex One via AMA](../connectors/trendmicroapexoneama.md) |
| Vectra Networks | X Series | [[Deprecated] Vectra AI Detect via Legacy Agent](../connectors/aivectradetect.md), [[Deprecated] Vectra AI Detect via AMA](../connectors/aivectradetectama.md) |
| Votiro | Votiro cloud | [[Deprecated] Votiro Sanitization Engine Logs](../connectors/votiro.md) |
| WireX | WireX NFP | [[Deprecated] WireX Network Forensics Platform via Legacy Agent](../connectors/wirex-systems-nfp.md), [[Deprecated] WireX Network Forensics Platform via AMA](../connectors/wirex-systems-nfpama.md) |
| WithSecure™ | * | [[Deprecated] WithSecure Elements via Connector](../connectors/withsecureelementsviaconnector.md) |
| Zscaler | * | [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md), [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md) |
| iboss | * | [[Deprecated] iboss via Legacy Agent](../connectors/iboss.md), [iboss via AMA](../connectors/ibossama.md) |
| illusive | illusive | [[Deprecated] Illusive Platform via Legacy Agent](../connectors/illusiveattackmanagementsystem.md), [[Deprecated] Illusive Platform via AMA](../connectors/illusiveattackmanagementsystemama.md) |
| vArmour | AC | [[Deprecated] vArmour Application Controller via Legacy Agent](../connectors/varmourac.md), [[Deprecated] vArmour Application Controller via AMA](../connectors/varmouracama.md) |

---

## Content Items Using This Table (127)

### Analytic Rules (58)

**In solution [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md):**
- [Acronis - Login from Abnormal IP - Low Occurrence](../content/acronis-cyber-protect-cloud-acronis-login-from-abnormal-ip-low-occurrence-84037130-a623-46c2-9144-0c0955ac4112-5d101d22.md)
- [Acronis - Multiple Endpoints Accessing Malicious URLs](../content/acronis-cyber-protect-cloud-acronis-multiple-endpoints-accessing-malicious-urls-1385f0ce-69d9-4abf-8039-52080c8c7017-873d8b8f.md)
- [Acronis - Multiple Endpoints Infected by Ransomware](../content/acronis-cyber-protect-cloud-acronis-multiple-endpoints-infected-by-ransomware-a783ade7-bf43-416d-b809-8f5b06d87790-b918ffca.md)
- [Acronis - Multiple Inboxes with Malicious Content Detected](../content/acronis-cyber-protect-cloud-acronis-multiple-inboxes-with-malicious-content-detected-5090ad7b-4b47-4cab-9015-bffb43aecde8-54d81823.md)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md)

**In solution [AristaAwakeSecurity](../solutions/aristaawakesecurity.md):**
- [Awake Security - High Match Counts By Device](../content/aristaawakesecurity-awake-security-high-match-counts-by-device-90b7ac11-dd6c-4ba1-a99b-737061873859-e21f6938.md)
- [Awake Security - High Severity Matches By Device](../content/aristaawakesecurity-awake-security-high-severity-matches-by-device-d5e012c2-29ba-4a02-a813-37b928aafe2d-3c38bc0d.md)
- [Awake Security - Model With Multiple Destinations](../content/aristaawakesecurity-awake-security-model-with-multiple-destinations-dfa3ec92-bdae-410f-b675-fe1814e4d43e-8eda1cfb.md)

**In solution [CiscoASA](../solutions/ciscoasa.md):**
- [Cisco ASA - average attack detection rate increase](../content/ciscoasa-cisco-asa-average-attack-detection-rate-increase-79f29feb-6a9d-4cdf-baaa-2daf480a5da1-4b63ae5b.md)
- [Cisco ASA - threat detection message fired](../content/ciscoasa-cisco-asa-threat-detection-message-fired-795edf2d-cf3e-45b5-8452-fe6c9e6a582e-a934f81d.md)

**In solution [Contrast Protect](../solutions/contrast-protect.md):**
- [Contrast Blocks](../content/contrast-protect-contrast-blocks-4396f8c3-d114-4154-9f4c-048ba522ed04-c10d7a5d.md)
- [Contrast Exploits](../content/contrast-protect-contrast-exploits-e1abb6ed-be18-40fd-be58-3d3d84041daf-470b92cd.md)
- [Contrast Probes](../content/contrast-protect-contrast-probes-297596de-d9ae-4fb8-b6ff-00fc01c9462d-d1e26597.md)
- [Contrast Suspicious](../content/contrast-protect-contrast-suspicious-f713404e-805c-4e0c-91fa-2c149f76a07d-f612944c.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Beacon Traffic Based on Common User Agents Visiting Limited Number of Domains](../content/falconfriday-beacon-traffic-based-on-common-user-agents-visiting-limited-number-of-domains-6345c923-99eb-4a83-b11d-7af0ffa75577-e0e2298a.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI Map IP Entity to CommonSecurityLog](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-commonsecuritylog-e50657d7-8bca-43ff-a647-d407fae440d6-31126886.md)

**In solution [Illusive Platform](../solutions/illusive-platform.md):**
- [Illusive Incidents Analytic Rule](../content/illusive-platform-illusive-incidents-analytic-rule-1a7dbcf6-21a2-4255-84b2-c8dbbdca4630-7fa2b740.md)

**In solution [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md):**
- [Infoblox - TI - CommonSecurityLog Match Found - MalwareC2](../content/infoblox-cloud-data-connector-infoblox-ti-commonsecuritylog-match-found-malwarec2-5b0864a9-4577-4087-b9fa-de3e14a8a999-339e0057.md)

**In solution [IronNet IronDefense](../solutions/ironnet-irondefense.md):**
- [Create Incidents from IronDefense](../content/ironnet-irondefense-create-incidents-from-irondefense-3cf46cb9-99d5-42ee-a43c-7bd88ea394a1-25613242.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in CommonSecurityLog](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-commonsecuritylog-bc8a262a-5db3-4ac1-8757-519ed36ed929-6c2a7f14.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12-631549a4.md)

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**
- [Network endpoint to host executable correlation](../content/network-threat-protection-essentials-network-endpoint-to-host-executable-correlation-01f64465-b1ef-41ea-a7f5-31553a11ad43-f4ed06da.md)

**In solution [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md):**
- [Microsoft COVID-19 file hash indicator matches](../content/paloalto-pan-os-microsoft-covid-19-file-hash-indicator-matches-2be4ef67-a93f-4d8a-981a-88158cb73abd-3ed74bda.md)
- [Palo Alto - possible internal to external port scanning](../content/paloalto-pan-os-palo-alto-possible-internal-to-external-port-scanning-5b72f527-e3f6-4a00-9908-8e4fee14da9f-56e27714.md)
- [Palo Alto - possible nmap scan on with top 100 option](../content/paloalto-pan-os-palo-alto-possible-nmap-scan-on-with-top-100-option-4d61bb9a-7f6d-45b1-ac0e-517e2a92f6fd-008533ce.md)
- [Palo Alto - potential beaconing detected](../content/paloalto-pan-os-palo-alto-potential-beaconing-detected-f0be259a-34ac-4946-aa15-ca2b115d5feb-7815de87.md)
- [Palo Alto Threat signatures from Unusual IP addresses](../content/paloalto-pan-os-palo-alto-threat-signatures-from-unusual-ip-addresses-89a86f70-615f-4a79-9621-6f68c50f365f-44162468.md)

**In solution [RidgeSecurity](../solutions/ridgesecurity.md):**
- [Critical Risks](../content/ridgesecurity-critical-risks-1eebfaf3-40e1-4bc2-9f42-049b7b8ceb60-11ad44c8.md)
- [Vulerabilities](../content/ridgesecurity-vulerabilities-d096643d-6789-4c74-8893-dd3fc8a94069-d1a748f6.md)

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**
- [Threat Essentials - Time series anomaly for data size transferred to public internet](../content/securitythreatessentialsolution-threat-essentials-time-series-anomaly-for-data-size-transferred-to-publi-b49a1093-cbf6-4973-89ac-2eef98f533c6-bc9cced1.md)

**In solution [Silverfort](../solutions/silverfort.md):**
- [Silverfort - Certifried Incident](../content/silverfort-silverfort-certifried-incident-9ae540c9-c926-4100-8f07-1eac22596292-74a2bc0f.md)
- [Silverfort - Log4Shell Incident](../content/silverfort-silverfort-log4shell-incident-d6abed70-4043-46da-9304-a98f3446fa5f-69483854.md)
- [Silverfort - NoPacBreach Incident](../content/silverfort-silverfort-nopacbreach-incident-bdfd2c45-10a0-44e7-a90a-ba7b6bdd9ff2-486f0310.md)
- [Silverfort - UserBruteForce Incident](../content/silverfort-silverfort-userbruteforce-incident-46ff357b-9e98-465b-9e45-cd52fa4a7522-aec505ad.md)

**In solution [SonicWall Firewall](../solutions/sonicwall-firewall.md):**
- [SonicWall - Capture ATP Malicious File Detection](../content/sonicwall-firewall-sonicwall-capture-atp-malicious-file-detection-3db9f99e-a459-41e0-8e02-8b332f5fcb2c-219e6d5b.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map IP Entity to CommonSecurityLog](../content/threat-intelligence-ti-map-ip-entity-to-commonsecuritylog-66c81ae2-1f89-4433-be00-2fbbd9ba5ebe-1afb299b.md)
- [TI Map URL Entity to PaloAlto Data](../content/threat-intelligence-ti-map-url-entity-to-paloalto-data-106813db-679e-4382-a51b-1bfc463befc3-df95f41e.md)
- [TI map Domain entity to PaloAlto](../content/threat-intelligence-ti-map-domain-entity-to-paloalto-ec21493c-2684-4acd-9bc2-696dbad72426-30f0e4c8.md)
- [TI map Domain entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-ti-map-domain-entity-to-paloalto-commonsecuritylog-dd0a6029-ecef-4507-89c4-fc355ac52111-78fcc05f.md)
- [TI map Email entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-ti-map-email-entity-to-paloalto-commonsecuritylog-ffcd575b-3d54-482a-a6d8-d0de13b6ac63-7a9927d1.md)
- [TI map File Hash to CommonSecurityLog Event](../content/threat-intelligence-ti-map-file-hash-to-commonsecuritylog-event-5d33fc63-b83b-4913-b95e-94d13f0d379f-27089def.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map IP Entity to CommonSecurityLog](../content/threat-intelligence-new-ti-map-ip-entity-to-commonsecuritylog-cdd1933b-ef94-48a4-b94a-18d45b902751-8a8093d3.md)
- [TI Map URL Entity to PaloAlto Data](../content/threat-intelligence-new-ti-map-url-entity-to-paloalto-data-32b437c4-dddb-45b3-9aae-5188e80624b0-bf06198a.md)
- [TI map Domain entity to PaloAlto](../content/threat-intelligence-new-ti-map-domain-entity-to-paloalto-418192ba-01b8-4be8-89b7-5b5396a9d062-3c5cbaa4.md)
- [TI map Domain entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-new-ti-map-domain-entity-to-paloalto-commonsecuritylog-094a4e6e-1a0d-4d49-9d64-cfc3b01a0be1-b0f33009.md)
- [TI map Email entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-new-ti-map-email-entity-to-paloalto-commonsecuritylog-17fe80fe-072f-44d4-b62c-97a5bce56a64-3f51c924.md)
- [TI map File Hash to CommonSecurityLog Event](../content/threat-intelligence-new-ti-map-file-hash-to-commonsecuritylog-event-432996e9-8a93-4407-985f-13707b318a0b-a4223a3c.md)

**In solution [Vectra AI Detect](../solutions/vectra-ai-detect.md):**
- [Vectra AI Detect - Detections with High Severity](../content/vectra-ai-detect-vectra-ai-detect-detections-with-high-severity-39e48890-2c02-487e-aa9e-3ba494061798-5f2d3995.md)
- [Vectra AI Detect - New Campaign Detected](../content/vectra-ai-detect-vectra-ai-detect-new-campaign-detected-a34d0338-eda0-42b5-8b93-32aae0d7a501-d435ce1c.md)
- [Vectra AI Detect - Suspected Compromised Account](../content/vectra-ai-detect-vectra-ai-detect-suspected-compromised-account-321f9dbd-64b7-4541-81dc-08cf7732ccb0-540085a2.md)
- [Vectra AI Detect - Suspected Compromised Host](../content/vectra-ai-detect-vectra-ai-detect-suspected-compromised-host-60eb6cf0-3fa1-44c1-b1fe-220fbee23d63-39ca3d55.md)
- [Vectra AI Detect - Suspicious Behaviors by Category](../content/vectra-ai-detect-vectra-ai-detect-suspicious-behaviors-by-category-6cb75f65-231f-46c4-a0b3-50ff21ee6ed3-81fb48ba.md)
- [Vectra Account's Behaviors](../content/vectra-ai-detect-vectra-account's-behaviors-ce54b5d3-4c31-4eaf-a73e-31412270b6ab-45fe2d23.md)
- [Vectra Host's Behaviors](../content/vectra-ai-detect-vectra-host's-behaviors-33e3b6da-2660-4cd7-9032-11be76db88d2-080b319b.md)

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**
- [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md)

**In solution [Zscaler Internet Access](../solutions/zscaler-internet-access.md):**
- [Discord CDN Risky File Download](../content/zscaler-internet-access-discord-cdn-risky-file-download-010bd98c-a6be-498c-bdcd-502308c0fdae-581fe083.md)
- [Request for single resource on domain](../content/zscaler-internet-access-request-for-single-resource-on-domain-4d500e6d-c984-43a3-9f39-7edec8dcc04d-7778e224.md)

**In solution [vArmour Application Controller](../solutions/varmour-application-controller.md):**
- [vArmour AppController - SMB Realm Traversal](../content/varmour-application-controller-varmour-appcontroller-smb-realm-traversal-a36de6c3-3198-4d37-92ae-e19e36712c2e-f56ac1bb.md)

### Hunting Queries (22)

**In solution [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md):**
- [Acronis - ASZ defence: Unauthorized operation is detected and blocked](../content/acronis-cyber-protect-cloud-acronis-asz-defence-unauthorized-operation-is-detected-and-blocked-39310cb8-53bc-47c1-86c4-2ff9f0d3cc5f-bcc0c583.md)
- [Acronis - Agent failed updating more than twice in a day](../content/acronis-cyber-protect-cloud-acronis-agent-failed-updating-more-than-twice-in-a-day-b140b19a-0fcf-40f2-9284-5e0f58e1efd8-f580a535.md)
- [Acronis - Agents offline for 2 days or more](../content/acronis-cyber-protect-cloud-acronis-agents-offline-for-2-days-or-more-7a981151-a648-4ff4-a827-fc98337a95ed-8a6f3996.md)
- [Acronis - Audit Log](../content/acronis-cyber-protect-cloud-acronis-audit-log-ce88b396-db24-44b6-babd-c431ee7a527f-c15182ee.md)
- [Acronis - Cloud Connection Errors](../content/acronis-cyber-protect-cloud-acronis-cloud-connection-errors-98d1abaf-6be8-4d20-8ff3-16b19bc616af-8bfb24e9.md)
- [Acronis - Endpoints Accessing Malicious URLs](../content/acronis-cyber-protect-cloud-acronis-endpoints-accessing-malicious-urls-29c1b194-50d1-418d-82a9-3db5e3dfc3bf-78dba951.md)
- [Acronis - Endpoints Infected by Ransomware](../content/acronis-cyber-protect-cloud-acronis-endpoints-infected-by-ransomware-cc3a2ea1-2dbb-4e5e-acb1-866b9bffb85c-e2e1374f.md)
- [Acronis - Endpoints with Backup issues](../content/acronis-cyber-protect-cloud-acronis-endpoints-with-backup-issues-51ac84a9-5e82-456a-b398-f2e7b9ea8611-a0e4e0d0.md)
- [Acronis - Endpoints with EDR Incidents](../content/acronis-cyber-protect-cloud-acronis-endpoints-with-edr-incidents-55b6da0d-08c1-4af0-af2d-c4d14a1f6c3c-e5dd2a41.md)
- [Acronis - Endpoints with high failed login attempts](../content/acronis-cyber-protect-cloud-acronis-endpoints-with-high-failed-login-attempts-9657f70c-d7df-4232-937c-6045fffe4e3d-cdae21a2.md)
- [Acronis - Inboxes with Malicious Content](../content/acronis-cyber-protect-cloud-acronis-inboxes-with-malicious-content-1de4a0c7-4e72-45f3-b335-ab25f99ace3f-3797908a.md)
- [Acronis - Login from Abnormal IP - Low Occurrence](../content/acronis-cyber-protect-cloud-acronis-login-from-abnormal-ip-low-occurrence-362666d6-5e4f-4f84-958b-6237e766eb6d-752ce66b.md)
- [Acronis - Protection Service Errors](../content/acronis-cyber-protect-cloud-acronis-protection-service-errors-aaf57371-02c0-4bf5-8c03-dfeb6536e397-013c8a42.md)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Network Connection to New External LDAP Server](../content/apache-log4j-vulnerability-detection-network-connection-to-new-external-ldap-server-bf094505-fd2e-484f-b72a-acd79ee00ce8-d9ed48fd.md)

**In solution [Cyware](../solutions/cyware.md):**
- [Match Cyware Intel Watchlist Items With Common Logs](../content/cyware-match-cyware-intel-watchlist-items-with-common-logs-61c99147-b749-4164-80b1-c4bfa4efa704-8cd42456.md)

**In solution [Endace](../solutions/endace.md):**
- [Endace - Pivot-to-Vision](../content/endace-endace-pivot-to-vision-b70b02bd-fe1f-4466-8c4d-64d42adc59b3-2f1bf7f0.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Retrospective hunt for Forest Blizzard IP IOCs](../content/legacy-ioc-based-threat-protection-retrospective-hunt-for-forest-blizzard-ip-iocs-b8b7574f-1cd6-4308-822a-ab07256106f8-95c2528a.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress indicator in CommonSecurityLog](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-indicator-in-commonsecuritylog-4e329d3a-9fc0-4be7-9000-e092e7f68011-8e375221.md)

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**
- [Base64 encoded IPv4 address in request url](../content/network-threat-protection-essentials-base64-encoded-ipv4-address-in-request-url-39156a1d-c9e3-439e-967b-be7dcba918d9-ac55ba03.md)
- [Risky base64 encoded command in URL](../content/network-threat-protection-essentials-risky-base64-encoded-command-in-url-c46eeb45-c324-4a84-9df1-248c6d1507bb-5cdc18f9.md)

**In solution [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md):**
- [Palo Alto - high-risk ports](../content/paloalto-pan-os-palo-alto-high-risk-ports-0a57accf-3548-4e38-a861-99687c958f59-955c29a8.md)
- [Palo Alto - potential beaconing detected](../content/paloalto-pan-os-palo-alto-potential-beaconing-detected-2f8522fc-7807-4f0a-b53d-458296edab8d-02b916be.md)

### Workbooks (46)

**In solution [AI Analyst Darktrace](../solutions/ai-analyst-darktrace.md):**
- [AIA-Darktrace](../content/ai-analyst-darktrace-aia-darktrace-c99f20ad.md)

**In solution [AristaAwakeSecurity](../solutions/aristaawakesecurity.md):**
- [AristaAwakeSecurityWorkbook](../content/aristaawakesecurity-aristaawakesecurityworkbook-9b7c92d9.md)

**In solution [Barracuda CloudGen Firewall](../solutions/barracuda-cloudgen-firewall.md):**
- [Barracuda](../content/barracuda-cloudgen-firewall-barracuda-9d8c6fb5.md)

**In solution [Check Point](../solutions/check-point.md):**
- [CheckPoint](../content/check-point-checkpoint-2a6f42ae.md)

**In solution [CiscoASA](../solutions/ciscoasa.md):**
- [Cisco](../content/ciscoasa-cisco-87e00b58.md)

**In solution [Citrix Web App Firewall](../solutions/citrix-web-app-firewall.md):**
- [CitrixWAF](../content/citrix-web-app-firewall-citrixwaf-f26995f5.md)

**In solution [Common Event Format](../solutions/common-event-format.md):**
- [CEFOverviewWorkbook](../content/common-event-format-cefoverviewworkbook-a335b98c.md)

**In solution [Contrast Protect](../solutions/contrast-protect.md):**
- [ContrastProtect](../content/contrast-protect-contrastprotect-d1bc473e.md)

**In solution [CyberArk Privilege Access Manager (PAM) Events](../solutions/cyberark-privilege-access-manager-pam-events.md):**
- [CyberArkEPV](../content/cyberark-privilege-access-manager-pam-events-cyberarkepv-316d29f3.md)

**In solution [Delinea Secret Server](../solutions/delinea-secret-server.md):**
- [DelineaWorkbook](../content/delinea-secret-server-delineaworkbook-819c816c.md)

**In solution [ExtraHop Reveal(x)](../solutions/extrahop-reveal-x.md):**
- [ExtraHopDetectionSummary](../content/extrahop-reveal-x-extrahopdetectionsummary-e66497f1.md)

**In solution [Forcepoint CASB](../solutions/forcepoint-casb.md):**
- [ForcepointCASB](../content/forcepoint-casb-forcepointcasb-d5d7df21.md)

**In solution [Forcepoint CSG](../solutions/forcepoint-csg.md):**
- [ForcepointCloudSecuirtyGateway](../content/forcepoint-csg-forcepointcloudsecuirtygateway-3685ea15.md)

**In solution [Forcepoint NGFW](../solutions/forcepoint-ngfw.md):**
- [ForcepointNGFW](../content/forcepoint-ngfw-forcepointngfw-6b671d61.md)
- [ForcepointNGFWAdvanced](../content/forcepoint-ngfw-forcepointngfwadvanced-b6a3422e.md)

**In solution [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md):**
- [Fortigate](../content/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel-fortigate-2cb10dce.md)

**In solution [Illusive Platform](../solutions/illusive-platform.md):**
- [IllusiveADS](../content/illusive-platform-illusiveads-5d29048c.md)
- [IllusiveASM](../content/illusive-platform-illusiveasm-bca1238e.md)

**In solution [Infoblox](../solutions/infoblox.md):**
- [Infoblox_Workbook](../content/infoblox-infoblox-workbook-0b2c239e.md)

**In solution [IronNet IronDefense](../solutions/ironnet-irondefense.md):**
- [IronDefenseAlertDashboard](../content/ironnet-irondefense-irondefensealertdashboard-7226985d.md)
- [IronDefenseAlertDetails](../content/ironnet-irondefense-irondefensealertdetails-13051619.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [Onapsis Platform](../solutions/onapsis-platform.md):**
- [OnapsisAlarmsOverview](../content/onapsis-platform-onapsisalarmsoverview-d3ec56a6.md)

**In solution [OneIdentity](../solutions/oneidentity.md):**
- [OneIdentity](../content/oneidentity-oneidentity-732be1d3.md)

**In solution [Palo Alto - XDR (Cortex)](../solutions/palo-alto-xdr-cortex.md):**
- [PaloAltoXDR](../content/palo-alto-xdr-cortex-paloaltoxdr-404625dc.md)

**In solution [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md):**
- [PaloAltoNetworkThreat](../content/paloalto-pan-os-paloaltonetworkthreat-4d4c5438.md)
- [PaloAltoOverview](../content/paloalto-pan-os-paloaltooverview-9f519554.md)

**In solution [PingFederate](../solutions/pingfederate.md):**
- [PingFederate](../content/pingfederate-pingfederate-c26986d3.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md)
- [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md)

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**
- [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md)

**In solution [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md):**
- [SemperisDSPADChanges](../content/semperis-directory-services-protector-semperisdspadchanges-b1c49b5b.md)
- [SemperisDSPNotifications](../content/semperis-directory-services-protector-semperisdspnotifications-fcd6b926.md)
- [SemperisDSPQuickviewDashboard](../content/semperis-directory-services-protector-semperisdspquickviewdashboard-72fd1e27.md)
- [SemperisDSPSecurityIndicators](../content/semperis-directory-services-protector-semperisdspsecurityindicators-a942a3d9.md)

**In solution [Silverfort](../solutions/silverfort.md):**
- [SilverfortWorkbook](../content/silverfort-silverfortworkbook-63b31322.md)

**In solution [SonicWall Firewall](../solutions/sonicwall-firewall.md):**
- [SonicWallFirewall](../content/sonicwall-firewall-sonicwallfirewall-108e460f.md)

**In solution [Vectra AI Detect](../solutions/vectra-ai-detect.md):**
- [AIVectraDetectWorkbook](../content/vectra-ai-detect-aivectradetectworkbook-74fce2d7.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

**In solution [Zscaler Internet Access](../solutions/zscaler-internet-access.md):**
- [ZscalerFirewall](../content/zscaler-internet-access-zscalerfirewall-bc68adf2.md)
- [ZscalerOffice365Apps](../content/zscaler-internet-access-zscaleroffice365apps-bcb66bac.md)
- [ZscalerThreats](../content/zscaler-internet-access-zscalerthreats-c11e0924.md)
- [ZscalerWebOverview](../content/zscaler-internet-access-zscalerweboverview-7e8374eb.md)

**In solution [vArmour Application Controller](../solutions/varmour-application-controller.md):**
- [vArmour_AppContoller_Workbook](../content/varmour-application-controller-varmour-appcontoller-workbook-89c75f45.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/cef`
- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

