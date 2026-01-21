# Infoblox

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/infoblox_logo.svg" alt="Infoblox Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Infoblox Solution for Microsoft Sentinel is designed to enhance the capabilities of Security Operations Centers (SOC) by integrating actionable intelligence and contextual network data derived from DNS data into Microsoft Sentinel. This integration provides SOC analysts with the tools they need to quickly identify and respond to potential threats such as malware and data exfiltration, improving overall security posture. With seamless configuration and intuitive dashboards, the solution ensures that critical security events are monitored and correlated, offering actionable insights that streamline threat detection and response. 
SOC analysts will benefit from the app’s ability to provide contextual network data, including user and device attribution, through various lookups and visualizations. By leveraging unique DNS-based threat intelligence, audit logs and other data sources, analysts can conduct faster and more effective investigations. The solution’s functionalities, such as SOC Insights Overview and DNS Events, empower analysts to reduce alert fatigue by focusing on correlated events, ultimately leading to improved efficiency and protection against emerging threats.

**Benefits**
1. **Reduce alert fatigue with actionable insights through SOC Insights**: Focus on the most critical alerts and insights to streamline threat detection and response. 
2. **Faster investigations with contextual network data**: Quickly correlate network activities with potential threats using detailed lookups and visualizations. 
3. **Unique DNS-based Infoblox Threat Intel**: Access unparalleled DNS-based threat intelligence to enhance security decision-making and threat mitigation. 

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Infoblox |
| **Support Tier** | Partner |
| **Support Link** | [https://support.infoblox.com/](https://support.infoblox.com/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Infoblox |
| **First Published** | 2024-07-15 |
| **Last Updated** | 2024-07-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox) |

## Data Connectors

This solution provides **5 data connector(s)**:

- [[Recommended] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md)
- [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md)
- [[Recommended] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md)
- [Infoblox SOC Insight Data Connector via REST API](../connectors/infobloxsocinsightsdataconnector-api.md)
- [[Deprecated] Infoblox SOC Insight Data Connector via Legacy Agent](../connectors/infobloxsocinsightsdataconnector-legacy.md)

## Tables Used

This solution uses **22 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Infoblox SOC Insight Data Connector via Legacy Agent](../connectors/infobloxsocinsightsdataconnector-legacy.md), [[Recommended] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md), [[Recommended] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md) | Analytics, Playbooks, Workbooks |
| [`Failed_Range_To_Ingest_CL`](../tables/failed-range-to-ingest-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | - |
| [`Host_Name_Info_CL`](../tables/host-name-info-cl.md) | - | Workbooks |
| [`IP_Space_Info_CL`](../tables/ip-space-info-cl.md) | - | Workbooks |
| [`Infoblox_Failed_Indicators_CL`](../tables/infoblox-failed-indicators-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | - |
| [`Service_Name_Info_CL`](../tables/service-name-info-cl.md) | - | Workbooks |
| [`dossier_atp_CL`](../tables/dossier-atp-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_atp_threat_CL`](../tables/dossier-atp-threat-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_dns_CL`](../tables/dossier-dns-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_geo_CL`](../tables/dossier-geo-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_infoblox_web_cat_CL`](../tables/dossier-infoblox-web-cat-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_inforank_CL`](../tables/dossier-inforank-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_malware_analysis_v3_CL`](../tables/dossier-malware-analysis-v3-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_nameserver_CL`](../tables/dossier-nameserver-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_nameserver_matches_CL`](../tables/dossier-nameserver-matches-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_ptr_CL`](../tables/dossier-ptr-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_rpz_feeds_CL`](../tables/dossier-rpz-feeds-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_rpz_feeds_records_CL`](../tables/dossier-rpz-feeds-records-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_threat_actor_CL`](../tables/dossier-threat-actor-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_tld_risk_CL`](../tables/dossier-tld-risk-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_whitelist_CL`](../tables/dossier-whitelist-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |
| [`dossier_whois_CL`](../tables/dossier-whois-cl.md) | [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) | Workbooks |

### Internal Tables

The following **8 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md) | - | Playbooks (writes), Workbooks |
| [`InfobloxInsightComments_CL`](../tables/infobloxinsightcomments-cl.md) | - | Playbooks (writes) |
| [`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md) | - | Playbooks (writes), Workbooks |
| [`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md) | - | Playbooks (writes), Workbooks |
| [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) | [Infoblox SOC Insight Data Connector via REST API](../connectors/infobloxsocinsightsdataconnector-api.md) | Analytics, Playbooks (writes), Workbooks |
| [`SecurityAlert`](../tables/securityalert.md) | - | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |
| [`tide_lookup_data_CL`](../tables/tide-lookup-data-cl.md) | - | Playbooks (writes), Workbooks |

## Content Items

This solution includes **27 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 17 |
| Parsers | 6 |
| Analytic Rules | 2 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Infoblox - SOC Insight Detected - API Source](../content/infoblox-infoblox-soc-insight-detected-api-source-a5e2df87-f0c9-4540-8715-96e71b608986-05c34879.md) | Medium | Impact | *Internal use:*<br>[`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) |
| [Infoblox - SOC Insight Detected - CDC Source](../content/infoblox-infoblox-soc-insight-detected-cdc-source-d04f1963-df27-4127-b1ec-3d37148d65be-80d9956d.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Infoblox_Lookup_Workbook](../content/infoblox-infoblox-lookup-workbook-5d6a67bf.md) | [`dossier_atp_CL`](../tables/dossier-atp-cl.md)<br>[`dossier_atp_threat_CL`](../tables/dossier-atp-threat-cl.md)<br>[`dossier_dns_CL`](../tables/dossier-dns-cl.md)<br>[`dossier_geo_CL`](../tables/dossier-geo-cl.md)<br>[`dossier_infoblox_web_cat_CL`](../tables/dossier-infoblox-web-cat-cl.md)<br>[`dossier_inforank_CL`](../tables/dossier-inforank-cl.md)<br>[`dossier_malware_analysis_v3_CL`](../tables/dossier-malware-analysis-v3-cl.md)<br>[`dossier_nameserver_CL`](../tables/dossier-nameserver-cl.md)<br>[`dossier_nameserver_matches_CL`](../tables/dossier-nameserver-matches-cl.md)<br>[`dossier_ptr_CL`](../tables/dossier-ptr-cl.md)<br>[`dossier_rpz_feeds_CL`](../tables/dossier-rpz-feeds-cl.md)<br>[`dossier_rpz_feeds_records_CL`](../tables/dossier-rpz-feeds-records-cl.md)<br>[`dossier_threat_actor_CL`](../tables/dossier-threat-actor-cl.md)<br>[`dossier_tld_risk_CL`](../tables/dossier-tld-risk-cl.md)<br>[`dossier_whitelist_CL`](../tables/dossier-whitelist-cl.md)<br>[`dossier_whois_CL`](../tables/dossier-whois-cl.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md)<br>[`tide_lookup_data_CL`](../tables/tide-lookup-data-cl.md) |
| [Infoblox_Workbook](../content/infoblox-infoblox-workbook-0b2c239e.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Host_Name_Info_CL`](../tables/host-name-info-cl.md)<br>[`IP_Space_Info_CL`](../tables/ip-space-info-cl.md)<br>[`Service_Name_Info_CL`](../tables/service-name-info-cl.md)<br>*Internal use:*<br>[`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md)<br>[`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md)<br>[`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md)<br>[`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Infoblox-Block-Allow-IP-Domain](../content/infoblox-infoblox-block-allow-ip-domain-5b83787c.md) | The playbook will add/remove IP or Domain value in Named List of Infoblox. | - |
| [Infoblox-Block-Allow-IP-Domain-Incident-Based](../content/infoblox-infoblox-block-allow-ip-domain-incident-based-92e85e82.md) | The playbook will add / remove IP or Domain values in Named List that available in incidents of Info... | - |
| [Infoblox-Config-Insight-Details](../content/infoblox-infoblox-config-insight-details-7dc4fbab.md) | The playbook retrieves Config Insight Details Data and ingests it into a custom table within the Log... | - |
| [Infoblox-Config-Insights](../content/infoblox-infoblox-config-insights-43be35ed.md) | The playbook retrieves Config Insight Data and ingests it into a custom table within the Log Analyti... | - |
| [Infoblox-DHCP-Lookup](../content/infoblox-infoblox-dhcp-lookup-385c2260.md) | The playbook will retrieve IP entities from an incident, search for related DHCP data in a table, an... | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |
| [Infoblox-Data-Connector-Trigger-Sync](../content/infoblox-infoblox-data-connector-trigger-sync-8afe4e5a.md) | Playbook to sync timer trigger of all Infoblox data connectors. | - |
| [Infoblox-Get-Host-Name](../content/infoblox-infoblox-get-host-name-3ad74de0.md) | The playbook will fetch the data from 'Hosts' API and ingest it into custom table | - |
| [Infoblox-Get-IP-Space-Data](../content/infoblox-infoblox-get-ip-space-data-9ff604c0.md) | The playbook will fetch the data from 'IP Space' API and ingest it into custom table | - |
| [Infoblox-Get-Service-Name](../content/infoblox-infoblox-get-service-name-0adc147e.md) | This playbook will fetch the data from 'Services' API and ingest it into custom table | - |
| [Infoblox-IPAM-Lookup](../content/infoblox-infoblox-ipam-lookup-794a7a4f.md) | The playbook will retrieve IP entities from an incident, call an API to obtain IPAM lookup data, and... | - |
| [Infoblox-SOC-Get-Insight-Details](../content/infoblox-infoblox-soc-get-insight-details-7be7a13e.md) | Leverages the Infoblox SOC Insights API to enrich a Microsoft Sentinel Incident triggered by an Info... | *Internal use:*<br>[`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md) *(write)*<br>[`InfobloxInsightComments_CL`](../tables/infobloxinsightcomments-cl.md) *(write)*<br>[`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md) *(write)*<br>[`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md) *(write)*<br>[`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) *(write)* |
| [Infoblox-SOC-Get-Open-Insights-API](../content/infoblox-infoblox-soc-get-open-insights-api-5c2cae50.md) | Leverages the Infoblox SOC Insights API to ingest all Open/Active SOC Insights at time of run into t... | *Internal use:*<br>[`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) *(write)* |
| [Infoblox-SOC-Import-Indicators-TI](../content/infoblox-infoblox-soc-import-indicators-ti-ed3ee6e8.md) | Imports each Indicator of a Microsoft Sentinel Incident triggered by an Infoblox SOC Insight into th... | - |
| [Infoblox-TIDE-Lookup](../content/infoblox-infoblox-tide-lookup-c25e9a83.md) | The playbook fetches TIDE lookup data for the provided entity type and value. | *Internal use:*<br>[`tide_lookup_data_CL`](../tables/tide-lookup-data-cl.md) *(read/write)* |
| [Infoblox-TIDE-Lookup-Comment-Enrichment](../content/infoblox-infoblox-tide-lookup-comment-enrichment-2943be82.md) | The playbook enrich an incident by adding TIDE Lookup information as comment on an incident. | - |
| [Infoblox-TIDE-Lookup-Via-Incident](../content/infoblox-infoblox-tide-lookup-via-incident-90b154ca.md) | The playbook takes entity type and value from incident available in Workbook and ingests TIDE Lookup... | - |
| [Infoblox-TimeRangeBased-DHCP-Lookup](../content/infoblox-infoblox-timerangebased-dhcp-lookup-7af6b4a9.md) | The playbook will retrieve IP entities from an incident, search for related DHCP data in a table for... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [InfobloxCDC_SOCInsights](../content/infoblox-infobloxcdc-socinsights-f18321d5-f146-4df5-81c3-f0ba660efc48-ffb25b37.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |
| [InfobloxInsight](../content/infoblox-infobloxinsight-4d8838cb-cdf6-4a38-b30f-fdd2fd50b50b-29ea7432.md) | - | *Internal use:*<br>[`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) *(read)* |
| [InfobloxInsightAssets](../content/infoblox-infobloxinsightassets-30f0087f-6c91-48ce-89a4-fd59b1dde95a-2df48204.md) | - | *Internal use:*<br>[`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md) *(read)* |
| [InfobloxInsightComments](../content/infoblox-infobloxinsightcomments-e62fa1e8-d157-4ee5-bb43-4fe6ea504f2d-c71ee303.md) | - | *Internal use:*<br>[`InfobloxInsightComments_CL`](../tables/infobloxinsightcomments-cl.md) *(read)* |
| [InfobloxInsightEvents](../content/infoblox-infobloxinsightevents-3bf27a0c-7335-42d5-bc41-330456b4eec2-f11b48d8.md) | - | *Internal use:*<br>[`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md) *(read)* |
| [InfobloxInsightIndicators](../content/infoblox-infobloxinsightindicators-f58f77a5-c803-444a-a836-fae65880ec5e-d88d7747.md) | - | *Internal use:*<br>[`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       |   19-06-2025                   | Added flags for Asset, Indicator, Event and Comment in InfobloxSOCGetInsightDetails playbook. Updated Workbook, Parser and Analytic rule.           |
| 3.0.1       |   07-11-2024                   | Bug fix in Infoblox_Workbook **Workbook**   |
| 3.0.0       |   15-07-2024                   | Initial Solution Release                    |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

