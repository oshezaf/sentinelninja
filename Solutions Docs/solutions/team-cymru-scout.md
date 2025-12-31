# Team Cymru Scout

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Team Cymru |
| **Support Tier** | Partner |
| **Support Link** | [http://team-cymru.com](http://team-cymru.com) |
| **Categories** | domains |
| **First Published** | 2024-07-16 |
| **Last Updated** | 2025-05-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md)

## Tables Reference

This solution uses **23 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Cymru_Scout_Account_Usage_Data_CL`](../tables/cymru-scout-account-usage-data-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_Domain_Data_CL`](../tables/cymru-scout-domain-data-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Communications_CL`](../tables/cymru-scout-ip-data-communications-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Details_CL`](../tables/cymru-scout-ip-data-details-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Fingerprints_CL`](../tables/cymru-scout-ip-data-fingerprints-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Foundation_CL`](../tables/cymru-scout-ip-data-foundation-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_OpenPorts_CL`](../tables/cymru-scout-ip-data-openports-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_PDNS_CL`](../tables/cymru-scout-ip-data-pdns-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Summary_Certs_CL`](../tables/cymru-scout-ip-data-summary-certs-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Summary_Details_CL`](../tables/cymru-scout-ip-data-summary-details-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Summary_Fingerprints_CL`](../tables/cymru-scout-ip-data-summary-fingerprints-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Summary_OpenPorts_CL`](../tables/cymru-scout-ip-data-summary-openports-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_Summary_PDNS_CL`](../tables/cymru-scout-ip-data-summary-pdns-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Cymru_Scout_IP_Data_x509_CL`](../tables/cymru-scout-ip-data-x509-cl.md) | [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) | - |
| [`Domain_Data_CL`](../tables/domain-data-cl.md) | - | Workbooks |
| [`InsightsMessageTable`](../tables/insightsmessagetable.md) | - | Workbooks |
| [`Open_Ports_Data_CL`](../tables/open-ports-data-cl.md) | - | Workbooks |
| [`Proto_By_IP_Data_CL`](../tables/proto-by-ip-data-cl.md) | - | Workbooks |
| [`Summary_Details_CL`](../tables/summary-details-cl.md) | - | Workbooks |
| [`Summary_Details_Top_Certs_Data_CL`](../tables/summary-details-top-certs-data-cl.md) | - | Workbooks |
| [`insights_table_name`](../tables/insights-table-name.md) | - | Playbooks |
| [`ip_indicators_table_name`](../tables/ip-indicators-table-name.md) | - | Playbooks |
| [`pdns_table_name`](../tables/pdns-table-name.md) | - | Playbooks |

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
| [TeamCymruScout](../content/teamcymruscout-team-cymru-scout.md) | [`Cymru_Scout_Account_Usage_Data_CL`](../tables/cymru-scout-account-usage-data-cl.md)<br>[`Cymru_Scout_Domain_Data_CL`](../tables/cymru-scout-domain-data-cl.md)<br>[`Domain_Data_CL`](../tables/domain-data-cl.md)<br>[`InsightsMessageTable`](../tables/insightsmessagetable.md)<br>[`Open_Ports_Data_CL`](../tables/open-ports-data-cl.md)<br>[`Proto_By_IP_Data_CL`](../tables/proto-by-ip-data-cl.md)<br>[`Summary_Details_CL`](../tables/summary-details-cl.md)<br>[`Summary_Details_Top_Certs_Data_CL`](../tables/summary-details-top-certs-data-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Team Cymru Scout Create Incident And Notify](../content/team-cymru-scout-create-incident-and-notify-team-cymru-scout.md) | This playbook will create an incident for suspicious or malicious ip and notify to pre-defined or us... | [`insights_table_name`](../tables/insights-table-name.md) *(read)* |
| [Team Cymru Scout Enrich Incident](../content/team-cymru-scout-enrich-incident-team-cymru-scout.md) | This playbook will fetch and ingest IP or Domain Indicator data based on Entity mapped in Microsoft ... | [`pdns_table_name`](../tables/pdns-table-name.md) *(read)* |
| [Team Cymru Scout Live Investigation](../content/team-cymru-scout-live-investigation-team-cymru-scout.md) | This playbook will fetch and ingest IP or Domain Indicator data based on input parameters given in t... | [`ip_indicators_table_name`](../tables/ip-indicators-table-name.md) *(read)* |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CymruScoutAccountUsage](../content/de724888-764f-4cfb-9882-804269dea40b.md) | - | - |
| [CymruScoutCommunicationsData](../content/8154d22b-f208-49ce-b9b6-277ace05d53c.md) | - | - |
| [CymruScoutCorrelate](../content/8ba897dc-dd9f-4d0a-85d6-188b283977e5.md) | - | - |
| [CymruScoutDomain](../content/a2997f81-3d9e-4940-b6c8-7a9d6446c037.md) | - | - |
| [CymruScoutDomainData](../content/485531cb-8f2a-47b0-9448-2120c90ac4ee.md) | - | - |
| [CymruScoutFingerprintsData](../content/0b1f65a2-a886-45f6-beeb-6cb58c86ef69.md) | - | - |
| [CymruScoutIP](../content/ba3b1d75-544c-43ff-9969-9ff753e3e3dc.md) | - | - |
| [CymruScoutIdentity](../content/ba3b1d75-544c-43ff-9969-9ff753e3e3db.md) | - | - |
| [CymruScoutOpenPortsData](../content/d7bf5cbf-b9a9-40fa-ba1f-101f70d7e3ba.md) | - | - |
| [CymruScoutPdnsData](../content/a5abd926-e56e-4ac8-a9b5-22658e6a9876.md) | - | - |
| [CymruScoutProtoByIP](../content/ba3b1d75-544c-43ff-9969-9ff753e3e3dw.md) | - | - |
| [CymruScoutSummary](../content/de724888-764f-4cfb-9882-804269dea78b.md) | - | - |
| [CymruScoutSummaryTopCerts](../content/de724888-764f-4cfb-9882-804269asa40b.md) | - | - |
| [CymruScoutSummaryTopFingerprints](../content/de724888-764f-4cfb-9882-804269aba40b.md) | - | - |
| [CymruScoutSummaryTopOpenPorts](../content/de724888-764f-4cfb-9882-804269dea40q.md) | - | - |
| [CymruScoutSummaryTopPdns](../content/de724888-764f-4cfb-9882-804269dea30b.md) | - | - |
| [CymruScoutTopAsnsByIP](../content/de724888-764f-4cfb-9882-804269dea50b.md) | - | - |
| [CymruScoutTopCountryCodesByIP](../content/de724888-764f-4cfb-1234-804269dea40b.md) | - | - |
| [CymruScoutTopServicesByIP](../content/de724888-764f-4cfb-9882-804269dea40r.md) | - | - |
| [CymruScoutTopTagsByIP](../content/ae724888-764f-4cfb-9882-804269dea40b.md) | - | - |
| [CymruScoutWhois](../content/de724888-764f-4cfb-9882-804269deb40b.md) | - | - |
| [CymruScoutX509Data](../content/651666db-1368-4c42-a72c-f3307e45b67c.md) | - | - |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TeamCymruScoutDomainData](../content/teamcymruscoutdomaindata-team-cymru-scout.md) | - | - |
| [TeamCymruScoutIPData](../content/teamcymruscoutipdata-team-cymru-scout.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.1       | 25-09-2025                     | Fixed bug in TeamCymruScoutEnrichIncident playbook. |
| 3.1.0       | 16-05-2025                     | Updated Workbook, Parser, Data Connector and created new playbook. |
| 3.0.0       | 07-08-2024                     | Added Solution for Team Cymru Scout. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
