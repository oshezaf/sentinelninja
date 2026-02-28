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
| Total Connectors | **47** |
| Active | 27 |
| Deprecated 🚫 | 0 |
| Unpublished ⚠️ | 20 |

### By Collection Method

| Collection Method | Count |
|:-----------------|------:|
| [Azure Function](../methods/azure-function.md) | 36 |
| [CCF Push](../methods/ccf-push.md) | 11 |
| **Total** | **47** |

## Connectors Using This API

### Active Connectors

| Connector | Collection Method | Publisher | Tables | Solution |
|:----------|:------------------|:----------|:------:|:---------|
| [Bitsight data connector](../connectors/bitsight.md) | [Azure Function](../methods/azure-function.md) | BitSight Technologies, Inc. | 11 | [BitSight](../solutions/bitsight.md) |
| [CyberArkAudit](../connectors/cyberarkaudit.md) | [Azure Function](../methods/azure-function.md) | CyberArk | 1 | [CyberArkAudit](../solutions/cyberarkaudit.md) |
| [Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](../connectors/cyerafunctionsconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | Cyera Inc | 5 | [CyeraDSPM](../solutions/cyeradspm.md) |
| [Dataminr Pulse Alerts Data Connector](../connectors/dataminrpulsealerts.md) | [Azure Function](../methods/azure-function.md) | Dataminr | 1 | [Dataminr Pulse](../solutions/dataminr-pulse.md) |
| [ESET Protect Platform](../connectors/esetprotectplatform.md) ⚠️ | [Azure Function](../methods/azure-function.md) | ESET | 2 | [ESET Protect Platform](../solutions/eset-protect-platform.md) |
| [Feedly](../connectors/feedly.md) � | [Azure Function](../methods/azure-function.md) | Feedly | 1 | [Feedly](../solutions/feedly.md) |
| [Flare Push Connector](../connectors/fireworkpush.md) | [CCF Push](../methods/ccf-push.md) | Flare Systems | 1 | [Flare](../solutions/flare.md) |
| [Halcyon Connector](../connectors/halcyonpush.md) | [CCF Push](../methods/ccf-push.md) | Halcyon | 5 | [Halcyon](../solutions/halcyon.md) |
| [Illumio SaaS](../connectors/illumiosaasdataconnector.md) | [Azure Function](../methods/azure-function.md) | Illumio | 2 | [IllumioSaaS](../solutions/illumiosaas.md) |
| [IPinfo Abuse Data Connector](../connectors/ipinfoabusedataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo ASN Data Connector](../connectors/ipinfoasndataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Carrier Data Connector](../connectors/ipinfocarrierdataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Company Data Connector](../connectors/ipinfocompanydataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Country ASN Data Connector](../connectors/ipinfocountrydataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Domain Data Connector](../connectors/ipinfodomaindataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Iplocation Data Connector](../connectors/ipinfoiplocationdataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Iplocation Extended Data Connector](../connectors/ipinfoiplocationextendeddataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Privacy Data Connector](../connectors/ipinfoprivacydataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo Privacy Extended Data Connector](../connectors/ipinfoprivacyextendeddataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo RIRWHOIS Data Connector](../connectors/ipinforirwhoisdataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo RWHOIS Data Connector](../connectors/ipinforwhoisdataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo WHOIS ASN Data Connector](../connectors/ipinfowhoisasndataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo WHOIS MNT Data Connector](../connectors/ipinfowhoismntdataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo WHOIS NET Data Connector](../connectors/ipinfowhoisnetdataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo WHOIS ORG Data Connector](../connectors/ipinfowhoisorgdataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [IPinfo WHOIS POC Data Connector](../connectors/ipinfowhoispocdataconnector.md) ⚠️ | [Azure Function](../methods/azure-function.md) | IPinfo | 1 | [IPinfo](../solutions/ipinfo.md) |
| [Jamf Protect Push Connector](../connectors/jamfprotectpush.md) | [CCF Push](../methods/ccf-push.md) | Jamf | 3 | [Jamf Protect](../solutions/jamf-protect.md) |
| [Keeper Security Push Connector](../connectors/keepersecuritypush2.md) | [CCF Push](../methods/ccf-push.md) | Keeper Security | 1 | [Keeper Security](../solutions/keeper-security.md) |
| [Mimecast Audit](../connectors/mimecastauditapi.md) � | [Azure Function](../methods/azure-function.md) | Mimecast | 2 | [Mimecast](../solutions/mimecast.md) |
| [Mimecast Awareness Training](../connectors/mimecastatapi.md) | [Azure Function](../methods/azure-function.md) | Mimecast | 4 | [Mimecast](../solutions/mimecast.md) |
| [Mimecast Cloud Integrated](../connectors/mimecastciapi.md) | [Azure Function](../methods/azure-function.md) | Mimecast | 1 | [Mimecast](../solutions/mimecast.md) |
| [Mimecast Secure Email Gateway](../connectors/mimecastsegapi.md) | [Azure Function](../methods/azure-function.md) | Mimecast | 2 | [Mimecast](../solutions/mimecast.md) |
| [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) � | [Azure Function](../methods/azure-function.md) | Mimecast | 6 | [Mimecast](../solutions/mimecast.md) |
| [MongoDB Atlas Logs](../connectors/mongodbatlaslogsazurefunctions.md) | [Azure Function](../methods/azure-function.md) | MongoDB | 1 | [MongoDBAtlas](../solutions/mongodbatlas.md) |
| [NordPass](../connectors/nordpass.md) | [Azure Function](../methods/azure-function.md) | NordPass | 1 | [NordPass](../solutions/nordpass.md) |
| [Obsidian Datasharing Connector](../connectors/obsidiandatasharing.md) | [CCF Push](../methods/ccf-push.md) | Obsidian Security | 2 | [Obsidian Datasharing](../solutions/obsidian-datasharing.md) |
| [Onapsis Defend Integration](../connectors/onapsis.md) 🔍 | [CCF Push](../methods/ccf-push.md) | Onapsis Platform | 2 | [Onapsis Defend](../solutions/onapsis-defend.md) |
| [OneTrust](../connectors/onetrustpush.md) | [CCF Push](../methods/ccf-push.md) | OneTrust | 1 | [OneTrust](../solutions/onetrust.md) |
| [Pathlock Inc.: Threat Detection and Response for SAP](../connectors/pathlock-tdnr.md) | [CCF Push](../methods/ccf-push.md) | Pathlock Inc. | 2 | [Pathlock_TDnR](../solutions/pathlock-tdnr.md) |
| [SAP LogServ (RISE), S/4HANA Cloud private edition](../connectors/saplogserv.md) | [CCF Push](../methods/ccf-push.md) | SAP SE | 1 | [SAP LogServ](../solutions/sap-logserv.md) |
| [SecurityBridge Solution for SAP](../connectors/securitybridge.md) | [CCF Push](../methods/ccf-push.md) | SecurityBridge Group GmbH | 2 | [SecurityBridge App](../solutions/securitybridge-app.md) |
| [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | [Azure Function](../methods/azure-function.md) | Team Cymru Scout | 14 | [Team Cymru Scout](../solutions/team-cymru-scout.md) |
| [Tenable Vulnerability Management](../connectors/tenablevm.md) | [Azure Function](../methods/azure-function.md) | Tenable | 5 | [Tenable App](../solutions/tenable-app.md) |
| [Varonis Purview Push Connector](../connectors/varonispurviewpush.md) | [CCF Push](../methods/ccf-push.md) | Varonis | 1 | [Varonis Purview](../solutions/varonis-purview.md) |
| [Vectra XDR](../connectors/vectraxdr.md) | [Azure Function](../methods/azure-function.md) | Vectra | 6 | [Vectra XDR](../solutions/vectra-xdr.md) |
| [VMware SD-WAN and SASE Connector](../connectors/vmwaresdwan.md) ⚠️ | [Azure Function](../methods/azure-function.md) | VMware by Broadcom | 4 | [VMware SASE](../solutions/vmware-sase.md) |
| [WithSecure Elements API (Azure Function)](../connectors/withsecureelementsviafunction.md) | [Azure Function](../methods/azure-function.md) | WithSecure | 1 | [WithSecureElementsViaFunction](../solutions/withsecureelementsviafunction.md) |

---

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

