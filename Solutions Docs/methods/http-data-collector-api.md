# HTTP Data Collector API (Legacy)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Methods Index](../methods-index.md)

---

The HTTP Data Collector API (also known as the Log Analytics Data Collector API) is the legacy method for sending custom log data to Azure Monitor Logs. It uses workspace shared keys for authentication and writes to custom log tables with the `_CL` suffix. **Note:** This API is deprecated in favor of the Logs Ingestion API and will be retired on September 14, 2026.

## Documentation

- [⚠️ HTTP Data Collector API retirement](https://learn.microsoft.com/azure/azure-monitor/logs/custom-logs-migrate)
- [📖 HTTP Data Collector API reference](https://learn.microsoft.com/azure/azure-monitor/logs/data-collector-api)
- [📖 Migrate to Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/custom-logs-migrate)

## Statistics

| Metric | Count |
|:-------|------:|
| Total Connectors | **144** |
| Active | 114 |
| Deprecated 🚫 | 20 |
| Unpublished ⚠️ | 10 |

### By Collection Method

| Collection Method | Count |
|:-----------------|------:|
| [Azure Function](../methods/azure-function.md) | 89 |
| [REST API](../methods/rest-api.md) | 55 |
| **Total** | **144** |

## Connectors Using This API

### Active Connectors

| Connector | Collection Method | Publisher | Tables | Solution |
|:----------|:------------------|:----------|:------:|:---------|
| [AbnormalSecurity ](../connectors/abnormalsecurity.md) 🔶 | [Azure Function](../methods/azure-function.md) | AbnormalSecurity | 2 | [AbnormalSecurity](../solutions/abnormalsecurity.md) |
| [Agari Phishing Defense and Brand Protection](../connectors/agari.md) ⚠️ 🔶 | [Azure Function](../methods/azure-function.md) | Agari | 3 | [Agari](../solutions/agari.md) |
| [AIShield](../connectors/boschaishield.md) 🔶 | [REST API](../methods/rest-api.md) | Bosch | 1 | [AIShield AI Security Monitoring](../solutions/aishield-ai-security-monitoring.md) |
| [AliCloud](../connectors/alicloud.md) 🔶 | [Azure Function](../methods/azure-function.md) | AliCloud | 1 | [Alibaba Cloud](../solutions/alibaba-cloud.md) |
| [API Protection](../connectors/42crunchapiprotection.md) 🔶 | [REST API](../methods/rest-api.md) | 42Crunch | 1 | [42Crunch API Protection](../solutions/42crunch-api-protection.md) |
| [ARGOS Cloud Security](../connectors/argoscloudsecurity.md) 🔶 | [REST API](../methods/rest-api.md) | ARGOS Cloud Security | 1 | [ARGOSCloudSecurity](../solutions/argoscloudsecurity.md) |
| [Armorblox](../connectors/armorblox.md) 🔶 | [Azure Function](../methods/azure-function.md) | Armorblox | 1 | [Armorblox](../solutions/armorblox.md) |
| [Atlassian Beacon Alerts](../connectors/atlassianbeaconalerts.md) 🔶 | [REST API](../methods/rest-api.md) | DEFEND Ltd. | 1 | [Integration for Atlassian Beacon](../solutions/integration-for-atlassian-beacon.md) |
| [Atlassian Jira Audit](../connectors/jiraauditapi.md) 🔶 | [Azure Function](../methods/azure-function.md) | Atlassian | 2 | [AtlassianJiraAudit](../solutions/atlassianjiraaudit.md) |
| [Auth0 Access Management](../connectors/auth0.md) 🔶 | [Azure Function](../methods/azure-function.md) | Auth0 | 1 | [Auth0](../solutions/auth0.md) |
| [Authomize Data Connector](../connectors/authomize.md) ⚠️ 🔶 | [REST API](../methods/rest-api.md) | Authomize | 1 | [Authomize](../solutions/authomize.md) |
| [Azure CloudNGFW By Palo Alto Networks](../connectors/azurecloudngfwbypaloaltonetworks.md) 🔶 | [REST API](../methods/rest-api.md) | Palo Alto Networks | 1 | [Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md) |
| [BETTER Mobile Threat Defense (MTD)](../connectors/bettermtd.md) 🔶 | [REST API](../methods/rest-api.md) | BETTER Mobile | 4 | [BETTER Mobile Threat Defense (MTD)](../solutions/better-mobile-threat-defense-mtd.md) |
| [Beyond Security beSECURE](../connectors/beyondsecuritybesecure.md) ⚠️ 🔍 🔶 | [REST API](../methods/rest-api.md) | Beyond Security | 3 | [Beyond Security beSECURE](../solutions/beyond-security-besecure.md) |
| [BeyondTrust PM Cloud](../connectors/beyondtrustpmcloud.md) ⚠️ 🔶 | [Azure Function](../methods/azure-function.md) | BeyondTrust | 2 | [BeyondTrustPMCloud](../solutions/beyondtrustpmcloud.md) |
| [Bitglass](../connectors/bitglass.md) 🔶 | [Azure Function](../methods/azure-function.md) | Bitglass | 1 | [Bitglass](../solutions/bitglass.md) |
| [Bloodhound Enterprise](../connectors/bloodhoundenterprise.md) 🔶 | [Azure Function](../methods/azure-function.md) | SpecterOps | 1 | [BloodHound Enterprise](../solutions/bloodhound-enterprise.md) |
| [Box](../connectors/boxdataconnector.md) 🔶 | [Azure Function](../methods/azure-function.md) | Box | 2 | [Box](../solutions/box.md) |
| [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) 🔶 | [Azure Function](../methods/azure-function.md) | Cisco | 12 | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) 🔶 | [Azure Function](../methods/azure-function.md) | Cisco | 12 | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| [Cisco Duo Security](../connectors/ciscoduosecurity.md) 🔶 | [Azure Function](../methods/azure-function.md) | Cisco | 1 | [CiscoDuoSecurity](../solutions/ciscoduosecurity.md) |
| [Cisco ETD](../connectors/ciscoetd.md) 🔶 | [Azure Function](../methods/azure-function.md) | Cisco | 1 | [Cisco ETD](../solutions/cisco-etd.md) |
| [CITRIX SECURITY ANALYTICS](../connectors/citrix.md) 🔶 | [REST API](../methods/rest-api.md) | CITRIX | 4 | [Citrix Analytics for Security](../solutions/citrix-analytics-for-security.md) |
| [Cofense Intelligence Threat Indicators Ingestion](../connectors/cofenseintelligence.md) ⚠️ 🔶 | [Azure Function](../methods/azure-function.md) | Cofense | 2 | [CofenseIntelligence](../solutions/cofenseintelligence.md) |
| [Cofense Triage Threat Indicators Ingestion](../connectors/cofensetriage.md) ⚠️ 🔶 | [Azure Function](../methods/azure-function.md) | Cofense | 3 | [CofenseTriage](../solutions/cofensetriage.md) |
| [Cognni](../connectors/cognnisentineldataconnector.md) 🔶 | [REST API](../methods/rest-api.md) | Cognni | 1 | [Cognni](../solutions/cognni.md) |
| [Cohesity](../connectors/cohesitydataconnector.md) 🔶 | [Azure Function](../methods/azure-function.md) | Cohesity | 1 | [CohesitySecurity](../solutions/cohesitysecurity.md) |
| [CommvaultSecurityIQ](../connectors/commvaultsecurityiq-cl.md) 🔶 | [Azure Function](../methods/azure-function.md) | Commvault | 1 | [Commvault Security IQ](../solutions/commvault-security-iq.md) |
| [ContrastADR](../connectors/contrastadr.md) 🔶 | [Azure Function](../methods/azure-function.md) | Contrast Security | 2 | [ContrastADR](../solutions/contrastadr.md) |
| [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) 🔶 | [REST API](../methods/rest-api.md) | Corelight | 108 | [Corelight](../solutions/corelight.md) |
| [Cribl](../connectors/cribl.md) 🔶 | [REST API](../methods/rest-api.md) | Cribl | 4 | [Cribl](../solutions/cribl.md) |
| [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) | [Azure Function](../methods/azure-function.md) | CrowdStrike | 1 | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) 🔶 | [Azure Function](../methods/azure-function.md) | Crowdstrike | 15 | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| [Cyber Blind Spot Integration](../connectors/cbspollingidazurefunctions.md) 🔍 🔶 | [Azure Function](../methods/azure-function.md) | CTM360 | 1 | [CTM360](../solutions/ctm360.md) |
| [CyberArkEPM](../connectors/cyberarkepm.md) 🔶 | [Azure Function](../methods/azure-function.md) | CyberArk | 1 | [CyberArkEPM](../solutions/cyberarkepm.md) |
| [Cybersixgill Actionable Alerts](../connectors/cybersixgillactionablealerts.md) 🔶 | [Azure Function](../methods/azure-function.md) | Cybersixgill | 1 | [Cybersixgill-Actionable-Alerts](../solutions/cybersixgill-actionable-alerts.md) |
| [Cynerio Security Events](../connectors/cyneriosecurityevents.md) 🔶 | [REST API](../methods/rest-api.md) | Cynerio | 1 | [Cynerio](../solutions/cynerio.md) |
| [Darktrace Connector for Microsoft Sentinel REST API](../connectors/darktracerestconnector.md) 🔶 | [REST API](../methods/rest-api.md) | Darktrace | 1 | [Darktrace](../solutions/darktrace.md) |
| [Datawiza DAP](../connectors/datawizadapsolution.md) ⚠️ 🔶 | [REST API](../methods/rest-api.md) | Datawiza | 1 | [Datawiza](../solutions/datawiza.md) |
| [Derdack SIGNL4](../connectors/derdacksignl4.md) 🔶 | [REST API](../methods/rest-api.md) | Derdack | 2 | [SIGNL4](../solutions/signl4.md) |
| [Digital Shadows Searchlight](../connectors/digitalshadowssearchlightazurefunctions.md) 🔶 | [Azure Function](../methods/azure-function.md) | Digital Shadows | 1 | [Digital Shadows](../solutions/digital-shadows.md) |
| [Doppel Data Connector](../connectors/doppel-dataconnector.md) 🔶 | [REST API](../methods/rest-api.md) | Doppel | 1 | [Doppel](../solutions/doppel.md) |
| [ESET Inspect](../connectors/esetinspect.md) 🔶 | [Azure Function](../methods/azure-function.md) | ESET Netherlands | 1 | [ESET Inspect](../solutions/eset-inspect.md) |
| [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) 🔶 | [REST API](../methods/rest-api.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [Exchange Security Insights Online Collector](../connectors/esi-exchangeonlinecollector.md) 🔶 | [Azure Function](../methods/azure-function.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) |
| [ExtraHop Detections Data Connector](../connectors/extrahop.md) 🔶 | [Azure Function](../methods/azure-function.md) | ExtraHop | 1 | [ExtraHop](../solutions/extrahop.md) |
| [F5 BIG-IP](../connectors/f5bigip.md) 🔶 | [REST API](../methods/rest-api.md) | F5 Networks | 3 | [F5 Big-IP](../solutions/f5-big-ip.md) |
| [Forcepoint DLP](../connectors/forcepoint-dlp.md) 🔍 🔶 | [REST API](../methods/rest-api.md) | Forcepoint | 1 | [Forcepoint DLP](../solutions/forcepoint-dlp.md) |
| [Forescout eyeInspect for OT Security](../connectors/forescout-eyeinspect-for-ot-security.md) ⚠️ 🔍 🔶 | [REST API](../methods/rest-api.md) | Forescout | 2 | [Forescout eyeInspect for OT Security](../solutions/forescout-eyeinspect-for-ot-security.md) |
| [Forescout Host Property Monitor](../connectors/forescouthostpropertymonitor.md) 🔶 | [REST API](../methods/rest-api.md) | Forescout | 3 | [ForescoutHostPropertyMonitor](../solutions/forescouthostpropertymonitor.md) |
| [Fortinet FortiNDR Cloud](../connectors/fortinetfortindrclouddataconnector.md) 🔶 | [Azure Function](../methods/azure-function.md) | Fortinet | 3 | [Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md) |
| [Garrison ULTRA Remote Logs](../connectors/garrisonultraremotelogs.md) 🔶 | [REST API](../methods/rest-api.md) | Garrison | 1 | [Garrison ULTRA](../solutions/garrison-ultra.md) |
| [Gigamon AMX Data Connector](../connectors/gigamondataconnector.md) 🔶 | [REST API](../methods/rest-api.md) | Gigamon | 1 | [Gigamon Connector](../solutions/gigamon-connector.md) |
| [GitHub (using Webhooks)](../connectors/githubwebhook.md) 🔶 | [Azure Function](../methods/azure-function.md) | Microsoft | 1 | [GitHub](../solutions/github.md) |
| [HackerView Intergration](../connectors/hvpollingidazurefunctions.md) 🔍 🔶 | [Azure Function](../methods/azure-function.md) | CTM360 | 1 | [CTM360](../solutions/ctm360.md) |
| [Holm Security Asset Data](../connectors/holmsecurityassets.md) 🔶 | [Azure Function](../methods/azure-function.md) | Holm Security | 2 | [HolmSecurity](../solutions/holmsecurity.md) |
| [HYAS Protect](../connectors/hyasprotect.md) 🔶 | [Azure Function](../methods/azure-function.md) | HYAS | 1 | [HYAS Protect](../solutions/hyas-protect.md) |
| [Imperva Cloud WAF](../connectors/impervawafcloudapi.md) 🔶 | [Azure Function](../methods/azure-function.md) | Imperva | 2 | [ImpervaCloudWAF](../solutions/impervacloudwaf.md) |
| [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) 🔶 | [Azure Function](../methods/azure-function.md) | Infoblox | 18 | [Infoblox](../solutions/infoblox.md) |
| [Infoblox SOC Insight Data Connector via REST API](../connectors/infobloxsocinsightsdataconnector-api.md) 🔶 | [REST API](../methods/rest-api.md) | Infoblox | 1 | [Infoblox](../solutions/infoblox.md) |
| [InfoSecGlobal Data Connector](../connectors/infosecdataconnector.md) 🔶 | [REST API](../methods/rest-api.md) | InfoSecGlobal | 1 | [AgileSec Analytics Connector](../solutions/agilesec-analytics-connector.md) |
| [IONIX Security Logs](../connectors/cyberpionsecuritylogs.md) 🔶 | [REST API](../methods/rest-api.md) | IONIX | 1 | [IONIX](../solutions/ionix.md) |
| [JoeSandboxThreatIntelligence](../connectors/joesandbox.md) | [Azure Function](../methods/azure-function.md) | Joe Security LLC | 1 | [JoeSandbox](../solutions/joesandbox.md) |
| [Lookout Cloud Security for Microsoft Sentinel](../connectors/lookoutcloudsecuritydataconnector.md) 🔶 | [Azure Function](../methods/azure-function.md) | Lookout | 1 | [Lookout Cloud Security Platform for Microsoft Sentinel](../solutions/lookout-cloud-security-platform-for-microsoft-sentinel.md) |
| [Luminar IOCs and Leaked Credentials](../connectors/cognyteluminar.md) | [Azure Function](../methods/azure-function.md) | Cognyte Technologies Israel Ltd | 1 | [CognyteLuminar](../solutions/cognyteluminar.md) |
| [MailGuard 365](../connectors/mailguard365.md) 🔍 🔶 | [REST API](../methods/rest-api.md) | MailGuard365 | 1 | [MailGuard 365](../solutions/mailguard-365.md) |
| [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) 🔶 | [REST API](../methods/rest-api.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) 🔶 | [REST API](../methods/rest-api.md) | Microsoft | 1 | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [MuleSoft Cloudhub](../connectors/mulesoft.md) 🔶 | [Azure Function](../methods/azure-function.md) | MuleSoft | 1 | [Mulesoft](../solutions/mulesoft.md) |
| [NC Protect](../connectors/nucleuscyberncprotect.md) 🔶 | [REST API](../methods/rest-api.md) | archTIS | 1 | [NC Protect Data Connector](../solutions/nc-protect-data-connector.md) |
| [Netclean ProActive Incidents](../connectors/netclean-proactive-incidents.md) 🔶 | [REST API](../methods/rest-api.md) | NetClean Technologies | 1 | [NetClean ProActive](../solutions/netclean-proactive.md) |
| [Netskope](../connectors/netskope.md) 🔶 | [Azure Function](../methods/azure-function.md) | Netskope | 1 | [Netskope](../solutions/netskope.md) |
| [Netskope Data Connector](../connectors/netskopedataconnector.md) 🔶 | [Azure Function](../methods/azure-function.md) | Netskope | 17 | [Netskopev2](../solutions/netskopev2.md) |
| [Netskope Web Transactions Data Connector](../connectors/netskopewebtransactionsdataconnector.md) 🔶 | [Azure Function](../methods/azure-function.md) | Netskope | 2 | [Netskopev2](../solutions/netskopev2.md) |
| [Noname Security for Microsoft Sentinel](../connectors/nonamesecuritymicrosoftsentinel.md) 🔶 | [REST API](../methods/rest-api.md) | Noname Security | 1 | [Noname API Security Solution for Microsoft Sentinel](../solutions/noname-api-security-solution-for-microsoft-sentinel.md) |
| [NXLog AIX Audit](../connectors/nxlogaixaudit.md) 🔶 | [REST API](../methods/rest-api.md) | NXLog | 1 | [NXLogAixAudit](../solutions/nxlogaixaudit.md) |
| [NXLog BSM macOS](../connectors/nxlogbsmmacos.md) 🔶 | [REST API](../methods/rest-api.md) | NXLog | 1 | [NXLog BSM macOS](../solutions/nxlog-bsm-macos.md) |
| [NXLog DNS Logs](../connectors/nxlogdnslogs.md) 🔶 | [REST API](../methods/rest-api.md) | NXLog | 1 | [NXLogDNSLogs](../solutions/nxlogdnslogs.md) |
| [NXLog FIM](../connectors/nxlogfim.md) 🔶 | [REST API](../methods/rest-api.md) | NXLog | 1 | [NXLog FIM](../solutions/nxlog-fim.md) |
| [NXLog LinuxAudit](../connectors/nxloglinuxaudit.md) 🔶 | [REST API](../methods/rest-api.md) | NXLog | 1 | [NXLog LinuxAudit](../solutions/nxlog-linuxaudit.md) |
| [Okta Single Sign-On](../connectors/oktasso.md) 🔶 | [Azure Function](../methods/azure-function.md) | Okta | 1 | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| [Open Systems Data Connector](../connectors/opensystems.md) 🔍 🔶 | [Azure Function](../methods/azure-function.md) | Open Systems | 4 | [Open Systems](../solutions/open-systems.md) |
| [Orca Security Alerts](../connectors/orcasecurityalerts.md) 🔶 | [REST API](../methods/rest-api.md) | Orca Security | 1 | [Orca Security Alerts](../solutions/orca-security-alerts.md) |
| [Palo Alto Prisma Cloud CWPP (using REST API)](../connectors/prismacloudcomputenativepoller.md) 🔍 🔶 | [REST API](../methods/rest-api.md) | Microsoft | 1 | [Palo Alto Prisma Cloud CWPP](../solutions/palo-alto-prisma-cloud-cwpp.md) |
| [PDNS Block Data Connector](../connectors/pdnsblockdataconnector.md) ⚠️ 🔍 🔶 | [Azure Function](../methods/azure-function.md) | Nominet | 1 | [PDNS Block Data Connector](../solutions/pdns-block-data-connector.md) |
| [Perimeter 81 Activity Logs](../connectors/perimeter81activitylogs.md) 🔶 | [REST API](../methods/rest-api.md) | Perimeter 81 | 1 | [Perimeter 81](../solutions/perimeter-81.md) |
| [Prancer Data Connector](../connectors/prancerlogdata.md) 🔍 🔶 | [REST API](../methods/rest-api.md) | Prancer | 1 | [Prancer PenSuiteAI Integration](../solutions/prancer-pensuiteai-integration.md) |
| [Qualys VM KnowledgeBase](../connectors/qualyskb.md) 🔶 | [Azure Function](../methods/azure-function.md) | Qualys | 1 | [Qualys VM Knowledgebase](../solutions/qualys-vm-knowledgebase.md) |
| [Rapid7 Insight Platform Vulnerability Management Reports](../connectors/insightvmcloudapi.md) 🔶 | [Azure Function](../methods/azure-function.md) | Rapid7 | 2 | [Rapid7InsightVM](../solutions/rapid7insightvm.md) |
| [Red Canary Threat Detection](../connectors/redcanarydataconnector.md) 🔍 🔶 | [REST API](../methods/rest-api.md) | Red Canary | 1 | [Red Canary](../solutions/red-canary.md) |
| [Rubrik Security Cloud data connector](../connectors/rubriksecuritycloudazurefunctions.md) 🔶 | [Azure Function](../methods/azure-function.md) | Rubrik, Inc | 4 | [RubrikSecurityCloud](../solutions/rubriksecuritycloud.md) |
| [SaaS Security](../connectors/valencesecurity.md) 🔶 | [REST API](../methods/rest-api.md) | Valence Security | 1 | [Valence Security](../solutions/valence-security.md) |
| [SailPoint IdentityNow](../connectors/sailpointidentitynow.md) 🔶 | [Azure Function](../methods/azure-function.md) | SailPoint | 2 | [SailPointIdentityNow](../solutions/sailpointidentitynow.md) |
| [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md) 🔶 | [REST API](../methods/rest-api.md) | Samsung | 6 | [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md) |
| [SecurityScorecard Cybersecurity Ratings](../connectors/securityscorecardratingsazurefunctions.md) 🔶 | [Azure Function](../methods/azure-function.md) | SecurityScorecard | 1 | [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md) |
| [SecurityScorecard Factor](../connectors/securityscorecardfactorazurefunctions.md) 🔶 | [Azure Function](../methods/azure-function.md) | SecurityScorecard | 1 | [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md) |
| [SecurityScorecard Issue](../connectors/securityscorecardissueazurefunctions.md) 🔶 | [Azure Function](../methods/azure-function.md) | SecurityScorecard | 1 | [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md) |
| [SenservaPro (Preview)](../connectors/senservapro.md) 🔶 | [REST API](../methods/rest-api.md) | Senserva | 1 | [SenservaPro](../solutions/senservapro.md) |
| [SentinelOne](../connectors/sentinelone.md) 🔶 | [Azure Function](../methods/azure-function.md) | SentinelOne | 6 | [SentinelOne](../solutions/sentinelone.md) |
| [Sevco Platform - Devices](../connectors/sevcodevices.md) ⚠️ 🔶 | [REST API](../methods/rest-api.md) | Sevco Security | 1 | [SevcoSecurity](../solutions/sevcosecurity.md) |
| [SINEC Security Guard](../connectors/ssg.md) 🔶 | [REST API](../methods/rest-api.md) | Siemens AG | 1 | [SINEC Security Guard](../solutions/sinec-security-guard.md) |
| [SlashNext Function App](../connectors/slashnextfunctionapp.md) 🔶 | [Azure Function](../methods/azure-function.md) | SlashNext | 2 | [SlashNext](../solutions/slashnext.md) |
| [Sonrai Data Connector](../connectors/sonraidataconnector.md) 🔶 | [REST API](../methods/rest-api.md) | Sonrai | 1 | [SonraiSecurity](../solutions/sonraisecurity.md) |
| [Sophos Cloud Optix](../connectors/sophoscloudoptix.md) 🔶 | [REST API](../methods/rest-api.md) | Sophos | 1 | [Sophos Cloud Optix](../solutions/sophos-cloud-optix.md) |
| [Sophos Endpoint Protection](../connectors/sophosep.md) 🔶 | [Azure Function](../methods/azure-function.md) | Sophos | 1 | [Sophos Endpoint Protection](../solutions/sophos-endpoint-protection.md) |
| [Squadra Technologies secRMM](../connectors/squadratechnologiessecrmm.md) 🔶 | [REST API](../methods/rest-api.md) | Squadra Technologies | 1 | [Squadra Technologies SecRmm](../solutions/squadra-technologies-secrmm.md) |
| [Symantec Integrated Cyber Defense Exchange](../connectors/symantec.md) 🔶 | [REST API](../methods/rest-api.md) | Symantec | 1 | [Symantec Integrated Cyber Defense](../solutions/symantec-integrated-cyber-defense.md) |
| [Talon Insights](../connectors/talonlogs.md) 🔶 | [REST API](../methods/rest-api.md) | Talon Security | 1 | [Talon](../solutions/talon.md) |
| [Tenable.io Vulnerability Management](../connectors/tenableioapi.md) 🔶 | [Azure Function](../methods/azure-function.md) | Tenable | 2 | [TenableIO](../solutions/tenableio.md) |
| [TheHive Project - TheHive](../connectors/thehiveprojectthehive.md) 🔶 | [Azure Function](../methods/azure-function.md) | TheHive Project | 1 | [TheHive](../solutions/thehive.md) |
| [Theom](../connectors/theom.md) 🔶 | [REST API](../methods/rest-api.md) | Theom | 1 | [Theom](../solutions/theom.md) |
| [Transmit Security Connector](../connectors/transmitsecurity.md) 🔶 | [Azure Function](../methods/azure-function.md) | TransmitSecurity | 1 | [TransmitSecurity](../solutions/transmitsecurity.md) |
| [Trend Micro Cloud App Security](../connectors/trendmicrocas.md) 🔶 | [Azure Function](../methods/azure-function.md) | Trend Micro | 1 | [Trend Micro Cloud App Security](../solutions/trend-micro-cloud-app-security.md) |
| [Trend Vision One](../connectors/trendmicroxdr.md) 🔶 | [Azure Function](../methods/azure-function.md) | Trend Micro | 4 | [Trend Micro Vision One](../solutions/trend-micro-vision-one.md) |
| [Varonis SaaS](../connectors/varonissaas.md) 🔶 | [Azure Function](../methods/azure-function.md) | Varonis | 1 | [VaronisSaaS](../solutions/varonissaas.md) |
| [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) 🔶 | [Azure Function](../methods/azure-function.md) | Veeam | 6 | [Veeam](../solutions/veeam.md) |
| [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) | [Azure Function](../methods/azure-function.md) | VirtualMetric | 1 | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VMRayThreatIntelligence](../connectors/vmray.md) | [Azure Function](../methods/azure-function.md) | VMRay | 1 | [VMRay](../solutions/vmray.md) |
| [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) 🔶 | [Azure Function](../methods/azure-function.md) | VMware | 3 | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| [Wiz](../connectors/wiz.md) 🔶 | [Azure Function](../methods/azure-function.md) | Wiz | 6 | [Wiz](../solutions/wiz.md) |
| [Workplace from Facebook](../connectors/workplacefacebook.md) 🔶 | [Azure Function](../methods/azure-function.md) | Facebook | 1 | [Workplace from Facebook](../solutions/workplace-from-facebook.md) |
| [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) 🔶 | [Azure Function](../methods/azure-function.md) | ZeroFox | 20 | [ZeroFox](../solutions/zerofox.md) |
| [Zimperium Mobile Threat Defense](../connectors/zimperiummtdalerts.md) 🔍 🔶 | [REST API](../methods/rest-api.md) | Zimperium | 2 | [Zimperium Mobile Threat Defense](../solutions/zimperium-mobile-threat-defense.md) |
| [Zoom Reports](../connectors/zoom.md) 🔶 | [Azure Function](../methods/azure-function.md) | Zoom | 1 | [ZoomReports](../solutions/zoomreports.md) |

### Deprecated Connectors 🚫

| Connector | Collection Method | Publisher | Tables | Solution |
|:----------|:------------------|:----------|:------:|:---------|
| 🚫 [[Deprecated] Atlassian Confluence Audit](../connectors/confluenceauditapi.md) | [Azure Function](../methods/azure-function.md) | Atlassian | 1 | [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md) |
| 🚫 [[DEPRECATED] Cisco Secure Endpoint (AMP)](../connectors/ciscosecureendpoint.md) | [Azure Function](../methods/azure-function.md) | Cisco | 1 | [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md) |
| 🚫 [[DEPRECATED] Cloudflare](../connectors/cloudflaredataconnector.md) | [Azure Function](../methods/azure-function.md) | Cloudflare | 1 | [Cloudflare](../solutions/cloudflare.md) |
| 🚫 [[DEPRECATED] Google ApigeeX](../connectors/apigeexdataconnector.md) | [Azure Function](../methods/azure-function.md) | Google | 1 | [Google Apigee](../solutions/google-apigee.md) |
| 🚫 [[DEPRECATED] Google Cloud Platform Cloud Monitoring](../connectors/gcpmonitordataconnector.md) | [Azure Function](../methods/azure-function.md) | Google | 1 | [Google Cloud Platform Cloud Monitoring](../solutions/google-cloud-platform-cloud-monitoring.md) |
| 🚫 [[DEPRECATED] Google Cloud Platform DNS](../connectors/gcpdnsdataconnector.md) | [Azure Function](../methods/azure-function.md) | Google | 1 | [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md) |
| 🚫 [[DEPRECATED] Google Cloud Platform IAM](../connectors/gcpiamdataconnector.md) | [Azure Function](../methods/azure-function.md) | Google | 1 | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |
| 🚫 [[DEPRECATED] Google Workspace (G Suite)](../connectors/googleworkspacereportsapi.md) | [Azure Function](../methods/azure-function.md) | Google | 22 | [GoogleWorkspaceReports](../solutions/googleworkspacereports.md) |
| 🚫 [[DEPRECATED] Lookout](../connectors/lookoutapi.md) | [Azure Function](../methods/azure-function.md) | Lookout | 1 | [Lookout](../solutions/lookout.md) |
| 🚫 [[DEPRECATED] OneLogin IAM Platform](../connectors/onelogin.md) | [Azure Function](../methods/azure-function.md) | OneLogin | 3 | [OneLoginIAM](../solutions/oneloginiam.md) |
| 🚫 [[DEPRECATED] Oracle Cloud Infrastructure](../connectors/oraclecloudinfrastructurelogsconnector.md) | [Azure Function](../methods/azure-function.md) | Oracle | 1 | [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md) |
| 🚫 [[DEPRECATED] Palo Alto Prisma Cloud CSPM](../connectors/paloaltoprismacloud.md) | [Azure Function](../methods/azure-function.md) | Palo Alto | 2 | [PaloAltoPrismaCloud](../solutions/paloaltoprismacloud.md) |
| 🚫 [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | [Azure Function](../methods/azure-function.md) | Proofpoint | 6 | [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md) |
| 🚫 [[Deprecated] Proofpoint TAP](../connectors/proofpointtap.md) | [Azure Function](../methods/azure-function.md) | Proofpoint | 4 | [ProofPointTap](../solutions/proofpointtap.md) |
| 🚫 [[DEPRECATED] Qualys Vulnerability Management](../connectors/qualysvulnerabilitymanagement.md) | [Azure Function](../methods/azure-function.md) | Qualys | 2 | [QualysVM](../solutions/qualysvm.md) |
| 🚫 [[DEPRECATED] Salesforce Service Cloud](../connectors/salesforceservicecloud.md) | [Azure Function](../methods/azure-function.md) | Salesforce | 2 | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |
| 🚫 [[DEPRECATED] Slack Audit](../connectors/slackauditapi.md) | [Azure Function](../methods/azure-function.md) | Slack | 3 | [SlackAudit](../solutions/slackaudit.md) |
| 🚫 [[DEPRECATED] Snowflake](../connectors/snowflakedataconnector.md) | [Azure Function](../methods/azure-function.md) | Snowflake | 1 | [Snowflake](../solutions/snowflake.md) |
| 🚫 [Mimecast Intelligence for Microsoft - Microsoft Sentinel](../connectors/mimecasttiregionalconnectorazurefunctions.md) | [Azure Function](../methods/azure-function.md) | Mimecast | 1 | [MimecastTIRegional](../solutions/mimecasttiregional.md) |
| 🚫 [Mimecast Secure Email Gateway](../connectors/mimecastsiemapi.md) | [Azure Function](../methods/azure-function.md) | Mimecast | 2 | [MimecastSEG](../solutions/mimecastseg.md) |

---

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Methods Index](../methods-index.md)

