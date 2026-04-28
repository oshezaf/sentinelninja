# Log Ingestion API

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

---

The Log Ingestion API is the modern, recommended method for sending custom data to Azure Monitor Logs (and Microsoft Sentinel). It uses Data Collection Rules (DCRs) and Data Collection Endpoints (DCEs) to define the data pipeline, providing schema validation, transformation, and routing capabilities.

## Documentation

- [📖 Logs Ingestion API overview](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)
- [📖 Logs Ingestion API tutorial](https://learn.microsoft.com/azure/azure-monitor/logs/tutorial-logs-ingestion-api)
- [📖 Data Collection Rules overview](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)
- [📖 Data Collection Endpoints overview](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-endpoint-overview)

## Statistics

| Metric | Count |
|:-------|------:|
| Total Connectors | **76** |
| Active | 72 |
| Deprecated 🚫 | 0 |
| Unpublished ⚠️ | 4 |

### By Collection Method

| Collection Method | Count |
|:-----------------|------:|
| [Azure Function](../methods/azure-function.md) | 42 |
| [CCF Push](../methods/ccf-push.md) | 34 |
| **Total** | **76** |

## Connectors Using This API

### Active Connectors

| Connector | Collection Method | Publisher | Tables | Solution |
|:----------|:------------------|:----------|:------:|:---------|
| [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | [CCF Push](../methods/ccf-push.md) | Abnormal Security | 9 | [AbnormalSecurity](../solutions/abnormalsecurity.md) |
| [Bitsight data connector](../connectors/bitsight.md) | [Azure Function](../methods/azure-function.md) | BitSight Technologies, Inc. | 11 | [BitSight](../solutions/bitsight.md) |
| [Citrix Analytics (via Codeless Connector Framework)](../connectors/citrixanalyticsdefinition.md) ⚠️ | [CCF Push](../methods/ccf-push.md) | Citrix | 6 | [Citrix Analytics CCF](../solutions/citrix-analytics-ccf.md) |
| [CommvaultSecurityIQ](../connectors/commvaultsecurityiq-cl.md) | [Azure Function](../methods/azure-function.md) | Commvault | 1 | [Commvault Security IQ](../solutions/commvault-security-iq.md) |
| [Contrast ADR Push Connector](../connectors/contrastadrccf.md) | [CCF Push](../methods/ccf-push.md) | Contrast Security | 2 | [ContrastADR](../solutions/contrastadr.md) |
| [CyberArkAudit](../connectors/cyberarkaudit.md) | [Azure Function](../methods/azure-function.md) | CyberArk | 1 | [CyberArkAudit](../solutions/cyberarkaudit.md) |
| [DataBahn](../connectors/databahnpush.md) | [CCF Push](../methods/ccf-push.md) | DataBahn | 3 | [Databahn](../solutions/databahn.md) |
| [Dataminr Pulse Alerts Data Connector](../connectors/dataminrpulsealerts.md) | [Azure Function](../methods/azure-function.md) | Dataminr | 1 | [Dataminr Pulse](../solutions/dataminr-pulse.md) |
| [ESET Protect Platform](../connectors/esetprotectplatform.md) ⚠️ | [Azure Function](../methods/azure-function.md) | ESET | 2 | [ESET Protect Platform](../solutions/eset-protect-platform.md) |
| [ExtraHop Detections Data Connector](../connectors/extrahop.md) | [Azure Function](../methods/azure-function.md) | ExtraHop | 1 | [ExtraHop](../solutions/extrahop.md) |
| [Flare Push Connector](../connectors/fireworkpush.md) | [CCF Push](../methods/ccf-push.md) | Flare Systems | 1 | [Flare](../solutions/flare.md) |
| [Gigamon AMX Connector](../connectors/gigamondefinition.md) | [CCF Push](../methods/ccf-push.md) | GigamonDefinition | 1 | [Gigamon Connector](../solutions/gigamon-connector.md) |
| [Halcyon Connector](../connectors/halcyonpush.md) | [CCF Push](../methods/ccf-push.md) | Halcyon | 1 | [Halcyon](../solutions/halcyon.md) |
| [Illumio SaaS](../connectors/illumiosaasdataconnector.md) | [Azure Function](../methods/azure-function.md) | Illumio | 2 | [IllumioSaaS](../solutions/illumiosaas.md) |
| [IPinfo Abuse Data Connector](../connectors/ipinfoabusedataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo ASN Data Connector](../connectors/ipinfoasndataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Carrier Data Connector](../connectors/ipinfocarrierdataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Company Data Connector](../connectors/ipinfocompanydataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Core Data Connector](../connectors/ipinfocoredataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Country ASN Data Connector](../connectors/ipinfocountrydataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Domain Data Connector](../connectors/ipinfodomaindataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Iplocation Data Connector](../connectors/ipinfoiplocationdataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Iplocation Extended Data Connector](../connectors/ipinfoiplocationextendeddataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Plus Data Connector](../connectors/ipinfoplusdataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Privacy Data Connector](../connectors/ipinfoprivacydataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Privacy Extended Data Connector](../connectors/ipinfoprivacyextendeddataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo ResProxy Data Connector](../connectors/ipinforesproxydataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo RIRWHOIS Data Connector](../connectors/ipinforirwhoisdataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo RWHOIS Data Connector](../connectors/ipinforwhoisdataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo WHOIS ASN Data Connector](../connectors/ipinfowhoisasndataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo WHOIS MNT Data Connector](../connectors/ipinfowhoismntdataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo WHOIS NET Data Connector](../connectors/ipinfowhoisnetdataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo WHOIS ORG Data Connector](../connectors/ipinfowhoisorgdataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo WHOIS POC Data Connector](../connectors/ipinfowhoispocdataconnector.md) | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [Jamf Protect Push Connector](../connectors/jamfprotectpush.md) | [CCF Push](../methods/ccf-push.md) | Jamf | 3 | [Jamf Protect](../solutions/jamf-protect.md) |
| [Keeper Security Push Connector](../connectors/keepersecuritypush2.md) | [CCF Push](../methods/ccf-push.md) | Keeper Security | 1 | [Keeper Security](../solutions/keeper-security.md) |
| [Mimecast Audit](../connectors/mimecastauditapi.md) 🔶 | [Azure Function](../methods/azure-function.md) | Mimecast | 2 | [Mimecast](../solutions/mimecast.md) |
| [Mimecast Awareness Training](../connectors/mimecastatapi.md) | [Azure Function](../methods/azure-function.md) | Mimecast | 4 | [Mimecast](../solutions/mimecast.md) |
| [Mimecast Cloud Integrated](../connectors/mimecastciapi.md) | [Azure Function](../methods/azure-function.md) | Mimecast | 1 | [Mimecast](../solutions/mimecast.md) |
| [Mimecast Secure Email Gateway](../connectors/mimecastsegapi.md) | [Azure Function](../methods/azure-function.md) | Mimecast | 2 | [Mimecast](../solutions/mimecast.md) |
| [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) 🔶 | [Azure Function](../methods/azure-function.md) | Mimecast | 6 | [Mimecast](../solutions/mimecast.md) |
| [MongoDB Atlas Logs](../connectors/mongodbatlaslogsazurefunctions.md) | [Azure Function](../methods/azure-function.md) | MongoDB | 1 | [MongoDBAtlas](../solutions/mongodbatlas.md) |
| [NordPass](../connectors/nordpass.md) | [Azure Function](../methods/azure-function.md) | NordPass | 1 | [NordPass](../solutions/nordpass.md) |
| [Obsidian Datasharing Connector](../connectors/obsidiandatasharing.md) | [CCF Push](../methods/ccf-push.md) | Obsidian Security | 2 | [Obsidian Datasharing](../solutions/obsidian-datasharing.md) |
| [Onapsis Defend Integration](../connectors/onapsis.md) 🔍 | [CCF Push](../methods/ccf-push.md) | Onapsis Platform | 2 | [Onapsis Defend](../solutions/onapsis-defend.md) |
| [OneTrust](../connectors/onetrustpush.md) | [CCF Push](../methods/ccf-push.md) | OneTrust | 1 | [OneTrust](../solutions/onetrust.md) |
| [Pathlock Inc.: Threat Detection and Response for SAP](../connectors/pathlock-tdnr.md) | [CCF Push](../methods/ccf-push.md) | Pathlock Inc. | 2 | [Pathlock_TDnR](../solutions/pathlock-tdnr.md) |
| [SAP LogServ (RISE), S/4HANA Cloud private edition](../connectors/saplogserv.md) 🔍 | [CCF Push](../methods/ccf-push.md) | SAP SE | 1 | [SAP LogServ](../solutions/sap-logserv.md) |
| [SecurityBridge Solution for SAP](../connectors/securitybridge.md) | [CCF Push](../methods/ccf-push.md) | SecurityBridge Group GmbH | 2 | [SecurityBridge App](../solutions/securitybridge-app.md) |
| [Semperis Lightning Logs](../connectors/semperislightninglogsazurefunctions.md) | [Azure Function](../methods/azure-function.md) | Semperis | 7 | [SemperisLightning](../solutions/semperislightning.md) |
| [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | [CCF Push](../methods/ccf-push.md) | Synqly | 10 | [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md) |
| [Tanium's CCF Push Connector](../connectors/taniumconnector.md) 🔶 | [CCF Push](../methods/ccf-push.md) | Tanium Inc. | 10 | [Tanium](../solutions/tanium.md) |
| [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | [Azure Function](../methods/azure-function.md) | Team Cymru Scout | 14 | [Team Cymru Scout](../solutions/team-cymru-scout.md) |
| [Tenable Vulnerability Management](../connectors/tenablevm.md) | [Azure Function](../methods/azure-function.md) | Tenable | 5 | [Tenable App](../solutions/tenable-app.md) |
| [Upwind Logs Loader (Ingestion API)](../connectors/upwindlogsloader.md) ⚠️ | [Azure Function](../methods/azure-function.md) | Upwind | 1 | [Upwind](../solutions/upwind.md) |
| [Varonis Purview Push Connector](../connectors/varonispurviewpush.md) | [CCF Push](../methods/ccf-push.md) | Varonis | 1 | [Varonis Purview](../solutions/varonis-purview.md) |
| [Vectra XDR](../connectors/vectraxdr.md) | [Azure Function](../methods/azure-function.md) | Vectra | 6 | [Vectra XDR](../solutions/vectra-xdr.md) |
| [VMware SD-WAN and SASE Connector](../connectors/vmwaresdwan.md) ⚠️ | [Azure Function](../methods/azure-function.md) | VMware by Broadcom | 4 | [VMware SASE](../solutions/vmware-sase.md) |
| [WithSecure Elements API (Azure Function)](../connectors/withsecureelementsviafunction.md) | [Azure Function](../methods/azure-function.md) | WithSecure | 1 | [WithSecureElementsViaFunction](../solutions/withsecureelementsviafunction.md) |
| [XBOW Security Platform (via Azure Function)](../connectors/xbowsecurityconnector.md) | [Azure Function](../methods/azure-function.md) | XBOW | 3 | [XBOW](../solutions/xbow.md) |
| [Zero Networks Segment (Push)](../connectors/znsegmentpushccpdefinition.md) | [CCF Push](../methods/ccf-push.md) | Zero Networks | 4 | [ZeroNetworks](../solutions/zeronetworks.md) |
| [Zscaler Internet Access Cloud NSS Audit Log Push Connector](../connectors/cloudnssauditlogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB Activity Log Push Connector](../connectors/cloudnsscasbactivitylogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB Cloud Storage Log Push Connector](../connectors/cloudnsscasbcloudstoragelogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB Collaboration Log Push Connector](../connectors/cloudnsscasbcollablogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB CRM Log Push Connector](../connectors/cloudnsscasbcrmlogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB Email Log Push Connector](../connectors/cloudnsscasbemaillogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB File Sharing Log Push Connector](../connectors/cloudnsscasbfilesharinglogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB ITSM Log Push Connector](../connectors/cloudnsscasbitsmlogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB Repo Log Push Connector](../connectors/cloudnsscasbrepologs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS DNS Log Push Connector](../connectors/cloudnssdnslogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS Email DLP Log Push Connector](../connectors/cloudnssemaildlplogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS Endpoint DLP Log Push Connector](../connectors/cloudnssendpointdlplogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS Firewall Log Push Connector](../connectors/cloudnssfwlogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS Tunnel Log Push Connector](../connectors/cloudnsstunnellogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS Web Log Push Connector](../connectors/cloudnssweblogs-ccp.md) | [CCF Push](../methods/ccf-push.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |

---

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

