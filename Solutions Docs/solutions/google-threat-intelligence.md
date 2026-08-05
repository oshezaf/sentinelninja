# Google Threat Intelligence Solution (public preview)

*Solution: Google Threat Intelligence*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GoogleThreatIntelligence.svg" alt="Google Threat Intelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Google |
| **Support Tier** | Partner |
| **Support Link** | [https://www.virustotal.com/gui/contact-us](https://www.virustotal.com/gui/contact-us) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.2.3 |
| **Author** | Google |
| **First Published** | 2024-10-26 |
| **Last Updated** | 2024-10-26 |
| **Solution Folder** | [Google Threat Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/virustotalsl1681486227461.azure-sentinel-solution-google) · Popularity: 🔵 Medium (77%) |

This Google Threat Intelligence Solution contains Playbooks that can help enrich incident information with threat information and intelligence for IPs, file hashes and URLs from Google Threat Intelligence. Enriched information can help drive focused investigations in Security Operations.<br><br><b>Important — Custom Connector prerequisite:</b> The Playbooks in this solution depend on the <b>Google Threat Intelligence custom Logic Apps connector</b>, which is <b>not deployed automatically</b> when you install the solution from Content Hub. Before running any of the Playbooks, you must manually deploy the custom connector into the same resource group and region as the Playbooks, using the Deploy to Azure button in the connector's <a href="https://github.com/Azure/Azure-Sentinel/tree/master/Solutions/Google%20Threat%20Intelligence/Playbooks/CustomConnector/GTICustomConnector">readme</a>. Without it, the Playbooks will fail to authenticate to the Google Threat Intelligence API.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Google Threat Intelligence Relevance System Alerts](../connectors/googlethreatintelligencerelevancesystemalertsapi.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) | [Google Threat Intelligence Relevance System Alerts](../connectors/googlethreatintelligencerelevancesystemalertsapi.md) | Analytics |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | - | Analytics, Hunting |

## Content Items

This solution includes **23 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Playbooks | 8 |
| Hunting Queries | 4 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [GTI - Data Leak Alert Detected](../content/google-threat-intelligence-gti-data-leak-alert-detected-d4e5f6a7-b8c9-0123-defa-234567890124-c47c0531.md) | High | Exfiltration, Impact, CredentialAccess, Collection | [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) |
| [GTI - High Relevance Alert Detected](../content/google-threat-intelligence-gti-high-relevance-alert-detected-f6a7b8c9-d0e1-2345-fabc-456789012345-8fc2e3f3.md) | High | InitialAccess, Exfiltration, Impact, CredentialAccess, PrivilegeEscalation | [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) |
| [GTI - High and Critical Priority Alerts](../content/google-threat-intelligence-gti-high-and-critical-priority-alerts-b2c3d4e5-f6a7-8901-bcde-f12345678902-eac20a8f.md) | High | InitialAccess, Impact, CredentialAccess, Exfiltration | [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) |
| [GTI - Initial Access Broker Alert Detected](../content/google-threat-intelligence-gti-initial-access-broker-alert-detected-c3d4e5f6-a7b8-9012-cdef-123456789013-8ea823e9.md) | High | InitialAccess, CredentialAccess | [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) |
| [GTI - Insider Threat Alert Detected](../content/google-threat-intelligence-gti-insider-threat-alert-detected-e5f6a7b8-c9d0-1234-efab-345678901234-1ae6bfc8.md) | High | PrivilegeEscalation, Exfiltration, CredentialAccess, Impact | [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) |
| [GTI Relevance System Alert - Incident by Alert ID](../content/google-threat-intelligence-gti-relevance-system-alert-incident-by-alert-id-a1b2c3d4-e5f6-7890-abcd-ef1234567891-4ca388b2.md) | Medium | InitialAccess, Reconnaissance, Impact, CredentialAccess | [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) |
| [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-domain-d9e1646c-dc17-4150-ac85-581f5c9cb41f-473cd3b4.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-8f9cd0e5-b4ab-4821-95e2-1082fcd784c7-681b75ff.md) | Medium | Execution | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-7edb2abb-7ef7-4685-92eb-a628703ccf9f-694732dc.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Google Threat Intelligence - Threat Hunting Url](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-url-89290690-54c4-4196-91c5-d32b1df5d873-c5fc6b01.md) | Medium | InitialAccess | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-domain-34288e97-5194-4f2e-abf2-c2783189f6ae-2dfdacdc.md) | - | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-0051a0d9-684f-4317-abbd-c1e5c24b39cb-5660b61d.md) | - | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-faa83502-2763-49ae-9216-e576fa1fdccb-c11a3364.md) | - | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Google Threat Intelligence - Threat Hunting Url](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-url-a1705fa5-c904-4f1b-9e2d-a4ccb30377a2-b18588af.md) | - | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Google Threat Intelligence - Domain Enrichment](../content/google-threat-intelligence-google-threat-intelligence-domain-enrichment-4dd0e649.md) | This playbook will enrich Domain entities. | - |
| [Google Threat Intelligence - FileHash Enrichment](../content/google-threat-intelligence-google-threat-intelligence-filehash-enrichment-2c6963ed.md) | This playbook will enrich FileHash entities. | - |
| [Google Threat Intelligence - IOC Enrichment](../content/google-threat-intelligence-google-threat-intelligence-ioc-enrichment-6804cb8a.md) | This playbook will enrich IP, Hash, URL & Domain entities found in alerts. | - |
| [Google Threat Intelligence - IOC Enrichment](../content/google-threat-intelligence-google-threat-intelligence-ioc-enrichment-37b5ea42.md) | This playbook will enrich IP, Hash, URL & Domain entities found in incidents. | - |
| [Google Threat Intelligence - IP Enrichment](../content/google-threat-intelligence-google-threat-intelligence-ip-enrichment-e58dcaa4.md) | This playbook will enrich IP entities. | - |
| [Google Threat Intelligence - IoC Stream](../content/google-threat-intelligence-google-threat-intelligence-ioc-stream-01fc772a.md) | This playbook will ingest Google Threat Intelligence from your IoC Streams into Threat Intelligence ... | - |
| [Google Threat Intelligence - Threat List](../content/google-threat-intelligence-google-threat-intelligence-threat-list-c6635a88.md) | This playbook will ingest Google Threat Intelligence into Threat Intelligence Sentinel. | - |
| [Google Threat Intelligence - URL Enrichment](../content/google-threat-intelligence-google-threat-intelligence-url-enrichment-70256210.md) | This playbook will enrich URL entities. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GTIRelevanceSystemAlerts](../parsers/gtirelevancesystemalerts.md) | - | [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [Google Threat Intelligence/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/README.md)*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GoogleThreatIntelligence.svg" alt="Google Threat Intelligence" style="width:150px; height:150px"/>

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.2.3       | 04-06-2026                     | - Added **Data Connector** *GTI Relevance System Alerts* (Azure Function App, Log Ingestion API). <br/>- Added **Parser** *GTIRelevanceSystemAlerts*. <br/>- Added **Analytics Rules**: GTI High Relevance Alerts, GTI High & Critical Priority Alerts, GTI Data Leak Alerts, GTI Initial Access Broker Alerts, GTI Insider Threat Alerts, GTI Relevance System Alerts Incident by Alert ID. <br/>- Added Custom **Connector** manual prerequisite for Playbooks. |
| 3.2.2       | 02-12-2025                     | - Included new Analytics Rules and Hunting Queries to improve detection capabilities and support proactive investigation. <br/>- Filtering threat lists<br/>- Migrating to Upload STIX Objects |
| 3.2.1       | 25-08-2025                     | Fix IoC Stream ingestion bug for results with more than 40 items due to a cursor iteration error. |
| 3.2.0       | 20-05-2025                     | New **Playbook** added *IoC Stream Threat Intelligence*.<br/> Added x-tool header in **Playbook** Customer Connector. |
| 3.1.0       | 29-01-2025                     | New *Threat Intelligence Ingestion* **Playbook** added. |
| 3.0.0       | 05-12-2024                     | Initial Solution Release.                       |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

