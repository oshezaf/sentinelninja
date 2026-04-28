# Codeless Connector Framework - Push Mode (CCF Push)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

---

CCF Push connectors use the Codeless Connector Framework in push mode, where the data source pushes events to Microsoft Sentinel via a DCR/DCE (Data Collection Rule / Data Collection Endpoint) pipeline. Unlike polling-based CCF connectors, CCF Push connectors do not actively pull data — the partner or data source sends data to the ingestion endpoint.

## Documentation

- [📖 Create a codeless connector](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)
- [📖 Codeless Connector Platform reference](https://learn.microsoft.com/azure/sentinel/data-connector-connection-rules-reference)
- [📖 Logs Ingestion API overview](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

## Statistics

| Metric | Count |
|:-------|------:|
| Total Connectors | **34** |
| Active | 33 |
| Deprecated 🚫 | 0 |
| Unpublished ⚠️ | 1 |

## Connectors Using This Method

### Active Connectors

| Connector | Publisher | Tables | Solution |
|:----------|:----------|:------:|:---------|
| [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | Abnormal Security | 9 | [AbnormalSecurity](../solutions/abnormalsecurity.md) |
| [Citrix Analytics (via Codeless Connector Framework)](../connectors/citrixanalyticsdefinition.md) ⚠️ | Citrix | 6 | [Citrix Analytics CCF](../solutions/citrix-analytics-ccf.md) |
| [Contrast ADR Push Connector](../connectors/contrastadrccf.md) | Contrast Security | 2 | [ContrastADR](../solutions/contrastadr.md) |
| [DataBahn](../connectors/databahnpush.md) | DataBahn | 3 | [Databahn](../solutions/databahn.md) |
| [Flare Push Connector](../connectors/fireworkpush.md) | Flare Systems | 1 | [Flare](../solutions/flare.md) |
| [Gigamon AMX Connector](../connectors/gigamondefinition.md) | GigamonDefinition | 1 | [Gigamon Connector](../solutions/gigamon-connector.md) |
| [Halcyon Connector](../connectors/halcyonpush.md) | Halcyon | 1 | [Halcyon](../solutions/halcyon.md) |
| [Jamf Protect Push Connector](../connectors/jamfprotectpush.md) | Jamf | 3 | [Jamf Protect](../solutions/jamf-protect.md) |
| [Keeper Security Push Connector](../connectors/keepersecuritypush2.md) | Keeper Security | 1 | [Keeper Security](../solutions/keeper-security.md) |
| [Obsidian Datasharing Connector](../connectors/obsidiandatasharing.md) | Obsidian Security | 2 | [Obsidian Datasharing](../solutions/obsidian-datasharing.md) |
| [Onapsis Defend Integration](../connectors/onapsis.md) | Onapsis Platform | 2 | [Onapsis Defend](../solutions/onapsis-defend.md) |
| [OneTrust](../connectors/onetrustpush.md) | OneTrust | 1 | [OneTrust](../solutions/onetrust.md) |
| [Pathlock Inc.: Threat Detection and Response for SAP](../connectors/pathlock-tdnr.md) | Pathlock Inc. | 2 | [Pathlock_TDnR](../solutions/pathlock-tdnr.md) |
| [SAP LogServ (RISE), S/4HANA Cloud private edition](../connectors/saplogserv.md) | SAP SE | 1 | [SAP LogServ](../solutions/sap-logserv.md) |
| [SecurityBridge Solution for SAP](../connectors/securitybridge.md) ➕ | SecurityBridge Group GmbH | 2 | [SecurityBridge App](../solutions/securitybridge-app.md) |
| [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | Synqly | 10 | [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md) |
| [Tanium's CCF Push Connector](../connectors/taniumconnector.md) 🔶 | Tanium Inc. | 10 | [Tanium](../solutions/tanium.md) |
| [Varonis Purview Push Connector](../connectors/varonispurviewpush.md) | Varonis | 1 | [Varonis Purview](../solutions/varonis-purview.md) |
| [Zero Networks Segment (Push)](../connectors/znsegmentpushccpdefinition.md) | Zero Networks | 4 | [ZeroNetworks](../solutions/zeronetworks.md) |
| [Zscaler Internet Access Cloud NSS Audit Log Push Connector](../connectors/cloudnssauditlogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB Activity Log Push Connector](../connectors/cloudnsscasbactivitylogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB Cloud Storage Log Push Connector](../connectors/cloudnsscasbcloudstoragelogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB Collaboration Log Push Connector](../connectors/cloudnsscasbcollablogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB CRM Log Push Connector](../connectors/cloudnsscasbcrmlogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB Email Log Push Connector](../connectors/cloudnsscasbemaillogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB File Sharing Log Push Connector](../connectors/cloudnsscasbfilesharinglogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB ITSM Log Push Connector](../connectors/cloudnsscasbitsmlogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS CASB Repo Log Push Connector](../connectors/cloudnsscasbrepologs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS DNS Log Push Connector](../connectors/cloudnssdnslogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS Email DLP Log Push Connector](../connectors/cloudnssemaildlplogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS Endpoint DLP Log Push Connector](../connectors/cloudnssendpointdlplogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS Firewall Log Push Connector](../connectors/cloudnssfwlogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS Tunnel Log Push Connector](../connectors/cloudnsstunnellogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [Zscaler Internet Access Cloud NSS Web Log Push Connector](../connectors/cloudnssweblogs-ccp.md) | Zscaler | 1 | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |

---

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

