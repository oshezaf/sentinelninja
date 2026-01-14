# Team Cymru Scout

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/TeamCymruScout.svg" alt="Team Cymru Scout Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Team Cymru Scout brings the most advanced AI-powered real-time intelligence into Microsoft Sentinel. The Microsoft Sentinel Integration allows you to perform LiveInvestigation on Indicators like IP, Domain and perform Correlation of Team Cymru Scout Data with Other Sources. It also leverage the capability to generate incident and notify when malicious ip found. 

## Solution Information

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
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md)

## Tables Used

This solution uses **34 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Communication_Data_CL`](../tables/communication-data-cl.md) | - | Workbooks |
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
| [`Domain_Data_CL`](../tables/domain-data-cl.md) | - | Workbooks |
| [`Event`](../tables/event.md) | - | Workbooks |
| [`Fingerprints_Data_CL`](../tables/fingerprints-data-cl.md) | - | Workbooks |
| [`Identity_Data_CL`](../tables/identity-data-cl.md) | - | Workbooks |
| [`Open_Ports_Data_CL`](../tables/open-ports-data-cl.md) | - | Workbooks |
| [`PDNS_Data_CL`](../tables/pdns-data-cl.md) | - | Workbooks |
| [`Proto_By_IP_Data_CL`](../tables/proto-by-ip-data-cl.md) | - | Workbooks |
| [`Summary_Details_CL`](../tables/summary-details-cl.md) | - | Workbooks |
| [`Summary_Details_Top_Certs_Data_CL`](../tables/summary-details-top-certs-data-cl.md) | - | Workbooks |
| [`Summary_Details_Top_Fingerprints_Data_CL`](../tables/summary-details-top-fingerprints-data-cl.md) | - | Workbooks |
| [`Summary_Details_Top_Open_Ports_Data_CL`](../tables/summary-details-top-open-ports-data-cl.md) | - | Workbooks |
| [`Summary_Details_Top_Pdns_Data_CL`](../tables/summary-details-top-pdns-data-cl.md) | - | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Workbooks |
| [`Top_Asns_By_IP_Data_CL`](../tables/top-asns-by-ip-data-cl.md) | - | Workbooks |
| [`Top_Country_Codes_By_IP_Data_CL`](../tables/top-country-codes-by-ip-data-cl.md) | - | Workbooks |
| [`Top_Services_By_IP_Data_CL`](../tables/top-services-by-ip-data-cl.md) | - | Workbooks |
| [`Top_Tags_By_IP_Data_CL`](../tables/top-tags-by-ip-data-cl.md) | - | Workbooks |
| [`Whois_Data_CL`](../tables/whois-data-cl.md) | - | Workbooks |
| [`X509_Data_CL`](../tables/x509-data-cl.md) | - | Workbooks |

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
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) | [`Communication_Data_CL`](../tables/communication-data-cl.md)<br>[`Cymru_Scout_Account_Usage_Data_CL`](../tables/cymru-scout-account-usage-data-cl.md)<br>[`Cymru_Scout_Domain_Data_CL`](../tables/cymru-scout-domain-data-cl.md)<br>[`Cymru_Scout_IP_Data_Details_CL`](../tables/cymru-scout-ip-data-details-cl.md)<br>[`Cymru_Scout_IP_Data_Foundation_CL`](../tables/cymru-scout-ip-data-foundation-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_Certs_CL`](../tables/cymru-scout-ip-data-summary-certs-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_Details_CL`](../tables/cymru-scout-ip-data-summary-details-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_Fingerprints_CL`](../tables/cymru-scout-ip-data-summary-fingerprints-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_OpenPorts_CL`](../tables/cymru-scout-ip-data-summary-openports-cl.md)<br>[`Cymru_Scout_IP_Data_Summary_PDNS_CL`](../tables/cymru-scout-ip-data-summary-pdns-cl.md)<br>[`Domain_Data_CL`](../tables/domain-data-cl.md)<br>[`Event`](../tables/event.md)<br>[`Fingerprints_Data_CL`](../tables/fingerprints-data-cl.md)<br>[`Identity_Data_CL`](../tables/identity-data-cl.md)<br>[`Open_Ports_Data_CL`](../tables/open-ports-data-cl.md)<br>[`PDNS_Data_CL`](../tables/pdns-data-cl.md)<br>[`Proto_By_IP_Data_CL`](../tables/proto-by-ip-data-cl.md)<br>[`Summary_Details_CL`](../tables/summary-details-cl.md)<br>[`Summary_Details_Top_Certs_Data_CL`](../tables/summary-details-top-certs-data-cl.md)<br>[`Summary_Details_Top_Fingerprints_Data_CL`](../tables/summary-details-top-fingerprints-data-cl.md)<br>[`Summary_Details_Top_Open_Ports_Data_CL`](../tables/summary-details-top-open-ports-data-cl.md)<br>[`Summary_Details_Top_Pdns_Data_CL`](../tables/summary-details-top-pdns-data-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`Top_Asns_By_IP_Data_CL`](../tables/top-asns-by-ip-data-cl.md)<br>[`Top_Country_Codes_By_IP_Data_CL`](../tables/top-country-codes-by-ip-data-cl.md)<br>[`Top_Services_By_IP_Data_CL`](../tables/top-services-by-ip-data-cl.md)<br>[`Top_Tags_By_IP_Data_CL`](../tables/top-tags-by-ip-data-cl.md)<br>[`Whois_Data_CL`](../tables/whois-data-cl.md)<br>[`X509_Data_CL`](../tables/x509-data-cl.md) |

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
| [CymruScoutCorrelate](../content/team-cymru-scout-cymruscoutcorrelate-8ba897dc-dd9f-4d0a-85d6-188b283977e5-cf92c865.md) | - | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) *(read)* |
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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

