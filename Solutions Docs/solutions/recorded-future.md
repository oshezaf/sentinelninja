# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Recorded Future

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/RecordedFuture.svg" alt="Recorded Future Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[Recorded Future](https://www.recordedfuture.com/) is the worlds largest provider of intelligence for enterprise security. By combining persistent and pervasive automated data collection and analytics with human analysis, Recorded Future delivers intelligence that is timely, accurate, and actionable.

Underlying Microsoft Technologies used:
This solution depends on underlying Microsoft technologies. Some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs:
* [Log Analytics](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/workspace-design)
* [Logic apps](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-pricing)
* [Threat Indicators](https://learn.microsoft.com/en-us/azure/sentinel/upload-indicators-api)


## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Recorded Future Support Team |
| **Support Tier** | Partner |
| **Support Link** | [http://support.recordedfuture.com/](http://support.recordedfuture.com/) |
| **Categories** | domains |
| **Version** | 3.2.17 |
| **Author** | Recorded Future Premier Integrations - support@recordedfuture.com |
| **First Published** | 2021-11-01 |
| **Last Updated** | 2023-09-19 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **4 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_Im_Dns`](../asim/imdns.md) | Analytics, Hunting |
| [`_Im_NetworkSession`](../asim/imnetworksession.md) | Analytics, Hunting |
| [`_Im_WebSession`](../asim/imwebsession.md) | Analytics, Hunting |
| [`imFileEvent`](../asim/imfileevent.md) | Analytics, Hunting |

## Tables Used

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`RecordedFuturePlaybookAlerts_CL`](../tables/recordedfutureplaybookalerts-cl.md) | Playbooks (writes) |
| [`RecordedFuturePortalAlerts_CL`](../tables/recordedfutureportalalerts-cl.md) | Playbooks (writes) |

### Internal Tables

The following **3 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`RecordedFutureThreatMapMalware_CL`](../tables/recordedfuturethreatmapmalware-cl.md) | Playbooks (writes), Workbooks |
| [`RecordedFutureThreatMap_CL`](../tables/recordedfuturethreatmap-cl.md) | Playbooks (writes), Workbooks |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **37 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 21 |
| Workbooks | 8 |
| Analytic Rules | 4 |
| Hunting Queries | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-acbf7ef6-f964-44c3-9031-7834ec68175f-9002c0d5.md) | Medium | InitialAccess, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting Hash All Actors](../content/recorded-future-recordedfuture-threat-hunting-hash-all-actors-6db6a8e6-2959-440b-ba57-a505875fcb37-f0b99a01.md) | Medium | InitialAccess, Execution, Persistence | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imFileEvent`](../asim/imfileevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-e31bc14e-2b4c-42a4-af34-5bfd7d768aea-57f811e9.md) | Medium | Exfiltration, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting Url All Actors](../content/recorded-future-recordedfuture-threat-hunting-url-all-actors-3f6f0d1a-f2f9-4e01-881a-c55a4a71905b-8b23fa82.md) | Medium | Persistence, PrivilegeEscalation, DefenseEvasion | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-d641a534-ead8-41aa-a7c8-2b35e6b64c9f-095de712.md) ⚠️ | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting Hash All Actors](../content/recorded-future-recordedfuture-threat-hunting-hash-all-actors-905da21a-c7d2-4f5b-b8fc-c8321da3ee83-003a7b7a.md) ⚠️ | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imFileEvent`](../asim/imfileevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-7b5eb44d-3533-440e-9774-73a4d99bc2b2-0bac2271.md) ⚠️ | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting URL All Actors](../content/recorded-future-recordedfuture-threat-hunting-url-all-actors-dbc2438a-0d16-4890-aaae-cbe0dc433b08-1c8d9da1.md) ⚠️ | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [RecordedFutureAlertOverview](../content/recorded-future-recordedfuturealertoverview-51eb79fd.md) | - |
| [RecordedFutureDomainCorrelation](../content/recorded-future-recordedfuturedomaincorrelation-be3669be.md) | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [RecordedFutureHashCorrelation](../content/recorded-future-recordedfuturehashcorrelation-1e41d39d.md) | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [RecordedFutureIPCorrelation](../content/recorded-future-recordedfutureipcorrelation-65ad70f0.md) | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [RecordedFutureMalwareThreatHunting](../content/recorded-future-recordedfuturemalwarethreathunting-8c8ddaa1.md) | *Internal use:*<br>[`RecordedFutureThreatMapMalware_CL`](../tables/recordedfuturethreatmapmalware-cl.md) |
| [RecordedFuturePlaybookAlertOverview](../content/recorded-future-recordedfutureplaybookalertoverview-60ee4c91.md) | - |
| [RecordedFutureThreatActorHunting](../content/recorded-future-recordedfuturethreatactorhunting-26a6d59e.md) | *Internal use:*<br>[`RecordedFutureThreatMap_CL`](../tables/recordedfuturethreatmap-cl.md) |
| [RecordedFutureURLCorrelation](../content/recorded-future-recordedfutureurlcorrelation-7c307c28.md) | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [RecordedFuture-ActorThreatHunt-IndicatorImport](../content/recorded-future-recordedfuture-actorthreathunt-indicatorimport-9d175248.md) | This playbook will write Recorded Future threat hunting indicators to ThreatIntelligenceIndicator lo... | - |
| [RecordedFuture-Alert-Importer](../content/recorded-future-recordedfuture-alert-importer-744ed2e2.md) | This playbook imports alerts from Recorded Future and stores them in a custom log in the log analyti... | [`RecordedFuturePortalAlerts_CL`](../tables/recordedfutureportalalerts-cl.md) *(read/write)* |
| [RecordedFuture-DOMAIN-C2_DNS_Name-TIProcessor](../content/recorded-future-recordedfuture-domain-c2-dns-name-tiprocessor-fa1b7c55.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |
| [RecordedFuture-Domain-IndicatorImport](../content/recorded-future-recordedfuture-domain-indicatorimport-6bac2a40.md) | This playbook imports Domain risk lists from Recorded Future and stores them as Threat Intelligence ... | - |
| [RecordedFuture-HASH-Obs_in_Underground-TIProcessor](../content/recorded-future-recordedfuture-hash-obs-in-underground-tiprocessor-bc84e786.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |
| [RecordedFuture-Hash-IndicatorImport](../content/recorded-future-recordedfuture-hash-indicatorimport-a3134338.md) | This playbook imports Hash risk lists from Recorded Future and stores them as Threat Intelligence In... | - |
| [RecordedFuture-IOC_Enrichment](../content/recorded-future-recordedfuture-ioc-enrichment-dda73772.md) | This playbook leverages the Recorded Future API to enrich IP, Domain, Url & Hash indicators, found i... | - |
| [RecordedFuture-IP-Actively_Comm_C2_Server-TIProcessor](../content/recorded-future-recordedfuture-ip-actively-comm-c2-server-tiprocessor-5ba5fd7f.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |
| [RecordedFuture-IP-IndicatorImport](../content/recorded-future-recordedfuture-ip-indicatorimport-12100b20.md) | This playbook imports IP risk lists from Recorded Future and stores them as Threat Intelligence Indi... | - |
| [RecordedFuture-ImportToSentinel](../content/recorded-future-recordedfuture-importtosentinel-375c16d8.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |
| [RecordedFuture-MalwareThreatHunt-IndicatorImport](../content/recorded-future-recordedfuture-malwarethreathunt-indicatorimport-557fcc9b.md) | This playbook will write Recorded Future threat hunting indicators to ThreatIntelligenceIndicator lo... | - |
| [RecordedFuture-Playbook-Alert-Importer](../content/recorded-future-recordedfuture-playbook-alert-importer-3166bf69.md) | This playbook imports alerts from Recorded Future and stores them in a custom log in the log analyti... | [`RecordedFuturePlaybookAlerts_CL`](../tables/recordedfutureplaybookalerts-cl.md) *(write)* |
| [RecordedFuture-Sandbox_Enrichment-Url](../content/recorded-future-recordedfuture-sandbox-enrichment-url-500e284d.md) | This playbook will enrich url entities in an incident and send them to Recorded Future Sandbox. The ... | - |
| [RecordedFuture-Sandbox_Outlook_Attachment](../content/recorded-future-recordedfuture-sandbox-outlook-attachment-124e2932.md) | This playbook will trigger on emails with attachmets and send them to Recorded Future Sandbox. The r... | - |
| [RecordedFuture-Sandbox_StorageAccount](../content/recorded-future-recordedfuture-sandbox-storageaccount-9566f274.md) | This playbook will trigger on files in a Storage Account and send them to Recorded Future Sandbox. T... | - |
| [RecordedFuture-ThreatIntelligenceImport](../content/recorded-future-recordedfuture-threatintelligenceimport-ef10c4ab.md) | This playbook will write indicators in batch to ThreatIntelligenceIndicator log analytics table. | - |
| [RecordedFuture-ThreatMap-Importer](../content/recorded-future-recordedfuture-threatmap-importer-58b1d1a3.md) | This playbook will import Threat Map data from Recorded Future and store it in a custom log. | *Internal use:*<br>[`RecordedFutureThreatMap_CL`](../tables/recordedfuturethreatmap-cl.md) *(write)* |
| [RecordedFuture-ThreatMapMalware-Importer](../content/recorded-future-recordedfuture-threatmapmalware-importer-001905e9.md) | This playbook will import Threat Map data from Recorded Future and store it in a custom log. | *Internal use:*<br>[`RecordedFutureThreatMapMalware_CL`](../tables/recordedfuturethreatmapmalware-cl.md) *(write)* |
| [RecordedFuture-URL-IndicatorImport](../content/recorded-future-recordedfuture-url-indicatorimport-6e39cf42.md) | This playbook imports URL risk lists from Recorded Future and stores them as Threat Intelligence Ind... | - |
| [RecordedFuture-URL-Recent_Rep_by_Insikt-TIProcessor](../content/recorded-future-recordedfuture-url-recent-rep-by-insikt-tiprocessor-0e7085c0.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |
| [RecordedFuture-Ukraine-IndicatorProcessor](../content/recorded-future-recordedfuture-ukraine-indicatorprocessor-803dc885.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [Recorded Future/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/README.md)*

[<img alt="Recorded Future" src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Enrichment/RecordedFuture-IOC_Enrichment/images/RecordedFuture.png"  />](https://www.recordedfuture.com/)
# Recorded Future Intelligence for Microsoft Sentinel

Instructions how to install and use Recorded Future Solution for Microsoft Sentinel or how to install individual playbooks can be found in the main [readme.md](Playbooks/readme.md) in the Playbook sub directory in this repository.

Recorded Future also provide standalone Playbooks in this repository for EntraID (identity) and Defender for endpoints.

**Recorded Future Intelligence Solution**
- [Installation guide](Playbooks/readme.md)

**Recorded Future Defender Integrations**
- [Recorded Future Defender playbooks](../../Playbooks/RecordedFuture-Block-IPs-and-Domains-on-Microsoft-Defender-for-Endpoint/)
- [Recorded Future Defender SCF playbooks](../../Playbooks/RecordedFuture_IP_SCF/)

**Recorded Future for Identity**
- [Recorded Future Identity](../Recorded%20Future%20Identity/Playbooks/readme.md)

# About Recorded Future

Recorded Future is the world's largest provider of intelligence for enterprise security. By seamlessly combining automated data collection, pervasive analytics, and expert human analysis, Recorded Future delivers timely, accurate, and actionable intelligence.

**Benefits of Recorded Future integrations** 
- Detect indicators of compromise (IOCs) in your environment.
- Triage alerts faster with elite, real-time intelligence.
- Respond quickly with transparency and context around internal telemetry data.
- Maximize your investment in Microsoft Sentinel.

[Learn more about Recorded Future for Microsoft Sentinel](https://www.recordedfuture.com/microsoft-azure-sentinel-integration)

[Start a 30-day free trial of Recorded Future for Microsoft Sentinel from here!](https://go.recordedfuture.com/microsoft-azure-sentinel-free-trial?utm_campaign=&utm_source=microsoft&utm_medium=gta)

<a id="keyfeatures"></a>
# Key Features
Recorded Future for Microsoft Sentinel offers a range of powerful intelligence capabilities, some of the key features include:
## **IOC Detection (Detect)**

The TI-IndicatorImport playbooks pulls risk lists from Recorded Future and writes the contained indicators to the Microsoft Sentinel ThreatIntelligenceIndicator table via the RecordedFuture-ThreatIntelligenceImport playbook. 
![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Images/2023-04-19-17-08-46.png)\
Microsoft Sentinel analytic rules correlates threat intelligence indicators with logs provided to Microsoft Sentinel and creates alerts/incidents for matches found.\
![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Images/2023-04-19-17-46-32.png)

## **IOC Enrichment (Respond)**

Automation rules triggers on each incident and enriches incidents with Recorded Future intelligence. 

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
3.2.17       |  12-08-2025                    | Updated **Indicator imports** with deterministic **STIX ID** that should reduce the number duplicate IOCs. Updated `RecordedFuture-Playbook-Alert-Importer` to improve the description formatting. Updated documentation with typo fixes and clarifications.	|
3.2.16       |  08-05-2025                    | Updated **workbooks**, **analytic rules** and **hunting queries** to new `ThreatIntelIndicators` schema. Removed deprecated **analytic rules**. Updated documentation to reflect changes.	|
| 3.2.15       |  12-03-2025                    | Fixed description of **Playbooks**.	|
| 3.2.14       |  30-01-2025                    | Fix the name of `IntelligenceCloud` parameter in `RecordedFuture-CustomConnector` + other minor renames.	|
| 3.2.13       |  08-01-2025                    | Removed Custom Entity mappings from **Analytic rules**.	|
| 3.2.12       |  28-11-2024                    | Fix API connection bug in RecordedFuture-AlertImporter **Playbook**. |
| 3.2.11       |  31-10-2024                    | Fix API connection bug in RecordedFuture-ThreatMap-Importer **Playbook**, documentation improvements. |
| 3.2.10       |  01-10-2024                    | Updated install README for multiple **Playbooks**, added protocol check for URL enrichments in RecordedFuture-IOC_Enrichment **Playbook**, moved parameters from important to advanced and internal in RecordedFuture-CustomConnector.|
| 3.2.9       |  23-09-2024                    | Updated RecordedFuture-Alert-Importer **Playbook** improved text encoding and added utm links.  |
| 3.2.8       |  23-08-2024                    | Updated RecordedFuture-Alert-Importer **Playbook** added text encoding and latest_event_date bugfix.  |
| 3.2.7       |  01-08-2024                    | Updated **Analytic rules** for entity mappings.  |
| 3.2.6       |  03-08-2024                     | Added incident creation to RecordedFuture-Alert-Importer **Playbook**.<br/> Update concurrency in RecordedFuture-IOC_Enrichment **Playbook**.  |
| 3.2.5       |  24-06-2024                    | Added missing AMA **Data Connector** reference in **Analytic rules**.  |
| 3.2.4       |  08-03-2024                     | Change default Recurrence for pulling data in Fix parse json in RecordedFuture-ThreatMap-Importer **Playbook**.<br/> Update solution description, referencing release notes.  |
| 3.2.3       |  27-02-2024                     | Fix parsing in RecordedFuture-PlaybookAlert-Importer **Playbook**.<br/> Added Recorded Future AI Summary to Alert **workbook**.<br/> Added Statues to **Playbook** alert **Workbook**. |
| 3.2.1       |  08-02-2024                     | Fix parse json in RecordedFuture-Alert-Importer **Playbook**.<br/> Fixed broken links in readme.md |
| 3.2.0       |  27-12-2023                    | Added (Recorded Future Malware Threat Map) **Workbook**<br/> Added (ThreatMapMalware-Importer) **Playbook**.<br/> Added (MalwareThreatHunt-IndicatorImport) **Playbook**.<br/> Fix defaults on RecordedFuture-ActorThreatHunt-IndicatorImport **Playbook** <br/> Fixed description on RecordedFutureThreatHuntingDomainAllActors **Analytic Rules**.<br/> Fixed description on RecordedFutureThreatHuntingHashAllActors **Analytic Rules**. <br/> Added Malware endpoints to RecordedFuture-CustomConnector **Playbook**. <br/> Fixed defaults on Playbook-Alert-Importer **Playbook**.<br/> Updated API connection names for all **Playbooks** to ease API connection configuration. <br>Changed connectorId for Hunting **Analytic Rules**. <br/>Updated documentation. <br/> |
| 3.1.1       |  27-12-2023                    | Minor fix, added Release Notes to Solution description. |
| 3.1.0       |  01-12-2023                    | Added (Recorded Future Threat Actor Map) **Workbook**.<br/> Added (RecordedFuture-ThreatMap-Importer) **Playbook**.<br/> Added (RecordedFuture-ActorThreatHunt-IndicatorImport) **Playbook**.<br/> Added 4 **Analytic Rules** to be used for Recorded Future Threat Hunt. <br/> Documentation update.<br/> Removed 6 deprecated **Playbooks** from Solution package. |
| 3.0.2       | 02-11-2023                     | Encoding Fix to the (RecordedFuture-Alert-Importer) **Playbook**.<br/> Changed defaults in (RecordedFuture-Playbook-Alert-Importer). |
| 3.0.1       | 26-10-2023                     | Fix to the (RecordedFuture-ThreatIntelligenceImport) **Playbook**.  |
| 3.0.0       | 20-09-2023                     | Added **Workbooks** for correlating Recorded Future and logs containing IoC of type IP, DNS, URL and Hash <br/> Generate Markdown/HTML response for enrichment comments.<br/> (Recorded Future Playbook Alerts) **Playbook** and  **Workbook** for visualization.<br/> (Recorded Future Classic Alerts) **Playbook** and **Workbook** for visualization.<br/> Leveraging new API for importing threat indicators and deprecating old **Playbooks**. |
| 2.4.0       | 29-05-2023                     | (Sandbox URL enrichment) **Playbook** included in the solution. <br/> Sandbox( of outlook attachment Playbook) provided as an example outside the solution. <br/> Sandbox of files in Azure storage accounts provided as example outside the solution. <br/> Fix to (IOC enrichment playbook) don’t report 404 (not found) as an error. |
| 2.3.0       | 13-02-2023                     | Layout improvements to the (incident enrichment Playbook). <br/>Added **Detections** from collective insights to enrichment playbooks.<br/>IncidentId and MITRE Att&ck code added to collective insights.<br/>Fix for image in incident comment. |
| 2.2.2       | 23-01-2023                     | Fixes for all risk list import **Playbooks**. |
| 2.2.1       | 23-12-2022                     | Display severity for risk rules in enrichment of IOCs.<br/>Sorting of risk rules, showing very malicious rules first. |
| 2.2.0       | 14-12-2022                     | Improvements to the (incident enrichment playbook).<br/>Added Recorded Future links to enrichment comment.<br/> Improved layout of the enrichment, adding Recorded Future logo, table layout. |
| 2.1.0       | 20-09-2022                     | Updated all **Playbooks** to use RecordedFutureV2 connector, which requires new API keys. <br/>Added **Playbooks** for importing Ukraine Russia conflict risk lists. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

