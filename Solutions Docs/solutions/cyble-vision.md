# Cyble Threat Intel

*Solution: Cyble Vision*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CybleLogo.svg" alt="Cyble Vision Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyble Support |
| **Support Tier** | Partner |
| **Support Link** | [https://cyble.com/talk-to-sales/](https://cyble.com/talk-to-sales/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Cyble Inc |
| **First Published** | 2025-05-05 |
| **Solution Folder** | [Cyble Vision](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/cybleinc1737472004964.cybleinc1737472004964-azure-sentinel-offerid) |
| **Popularity** | 🟡 Low (13%) |

This Solution provides Playbooks for Cyble Vision Threat Intelligence ingestion and IOC enrichment, integrating Cyble APIs.

 This Solution also includes a CCF Conenctor which enables Alerts ingestion from Cyble Platform to Microsoft Sentinel Workspace.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cyble Vision Alerts](../connectors/cyblevisionalerts.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) | [Cyble Vision Alerts](../connectors/cyblevisionalerts.md) | Analytics, Workbooks |

## Content Items

This solution includes **93 content item(s)** (92 in solution, 1 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Parsers | 45 | 45 | - |
| Analytic Rules | 44 | 43 | 1 |
| Playbooks | 3 | 3 | - |
| Workbooks | 1 | 1 | - |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cyble Advisory Alerts Advisory](../content/cyble-vision-cyble-advisory-alerts-advisory-1932dcfd-a32e-49f9-a212-5bcd084fbd78-26eb1bc8.md) ⚠️ | Low | Reconnaissance, ResourceDevelopment | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Assets](../content/cyble-vision-cyble-vision-alerts-assets-0012714c-c595-4dcd-8949-4a5c1d49aaa8-26bf60ce.md) | Low | Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Bitbucket](../content/cyble-vision-cyble-vision-alerts-bitbucket-f3c25011-4509-41c8-be27-35d891531c39-c74f9461.md) | Low | CredentialAccess, Exfiltration, Discovery | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Cloud Storage](../content/cyble-vision-cyble-vision-alerts-cloud-storage-db417cee-529c-4eac-b7b9-36eb0166800a-3cda9e05.md) | Low | Exfiltration, Discovery | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Compromised Endpoint Cookies](../content/cyble-vision-cyble-vision-alerts-compromised-endpoint-cookies-33b07eaa-f451-4c38-ac9f-8af3f7e99f0e-7e05ad5c.md) | Low | CredentialAccess, DefenseEvasion | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Compromised Files](../content/cyble-vision-cyble-vision-alerts-compromised-files-0f6a8287-09ee-4f82-b8c3-e35c4ac6212e-ae3415ac.md) | Low | CredentialAccess, Exfiltration | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Cyble Web Applications](../content/cyble-vision-cyble-vision-alerts-cyble-web-applications-359ddb25-eab1-4ef5-8303-ed3a9b680690-08dbc3e5.md) | Low | Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Darkweb Data Breaches](../content/cyble-vision-cyble-vision-alerts-darkweb-data-breaches-588a2ee5-978a-43f7-9c10-6d76d82026ef-749403d3.md) | Low | Reconnaissance, InitialAccess, Exfiltration, Collection | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Darkweb Ransomware Leak](../content/cyble-vision-cyble-vision-alerts-darkweb-ransomware-leak-6deaf986-a25b-47b4-afbe-667901aa313b-a2e643ed.md) | Low | Impact, Exfiltration, Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Discord Keyword](../content/cyble-vision-cyble-vision-alerts-discord-keyword-601a5859-0dc2-452d-8d1e-66dc651c16d5-84832e8f.md) | Low | Reconnaissance, InitialAccess | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Discovered Subdomain](../content/cyble-vision-cyble-vision-alerts-discovered-subdomain-7a0f79cc-8d28-44b5-ac1e-6176565bb7b8-096887f5.md) | Low | Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Docker](../content/cyble-vision-cyble-vision-alerts-docker-47dee28d-fa74-49cd-b5fb-397b047a73c0-3df16c04.md) | Low | Exfiltration, Execution, Discovery | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Domain Expiry Alert](../content/cyble-vision-cyble-vision-alerts-domain-expiry-alert-81404e99-ce27-45aa-aa19-a276a3d4c645-4595fecd.md) | Low | Impact | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Domain Watchlist](../content/cyble-vision-cyble-vision-alerts-domain-watchlist-0a54dc90-9a9d-4300-af21-feb5136e81da-cd7a6ca0.md) | Low | ResourceDevelopment | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Flash Report](../content/cyble-vision-cyble-vision-alerts-flash-report-2c86652a-bbbe-4a32-8b1c-4b53aad0750e-d85748ba.md) | Low | Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Github](../content/cyble-vision-cyble-vision-alerts-github-117e8f7c-8f44-4061-bcc2-b444b98a3838-99ff8bbb.md) | Low | Collection, CredentialAccess | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Hacktivism](../content/cyble-vision-cyble-vision-alerts-hacktivism-6649e5a0-0365-452f-84b3-448a0aec7a59-5af83ab3.md) | Low | Reconnaissance, Impact, ResourceDevelopment | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts I2P Monitoring](../content/cyble-vision-cyble-vision-alerts-i2p-monitoring-d1cdfb8d-12cd-4a29-8caf-ef4a35ad67ed-2e5987a6.md) | Low | ResourceDevelopment | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts IOC'S](../content/cyble-vision-cyble-vision-alerts-ioc's-c8cf42d5-8684-435f-9c4d-9dd0cc47eaec-8e2a1467.md) | Low | Reconnaissance, InitialAccess, Discovery, CommandAndControl, Impact | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts IP Risk Score](../content/cyble-vision-cyble-vision-alerts-ip-risk-score-1e7c8d9f-1d42-42b3-b6ce-12a637e05f16-8948bd79.md) | Low | Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Leaked Credentials](../content/cyble-vision-cyble-vision-alerts-leaked-credentials-224a63ae-e278-4a11-b7c2-02ec3e17b56c-f76bc441.md) | Low | CredentialAccess, Discovery, Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Malicious Ads Detected](../content/cyble-vision-cyble-vision-alerts-malicious-ads-detected-cf0a9691-5716-42e0-bfa1-49b35d3a7892-f0396176.md) | Low | InitialAccess, Execution | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts New Vulnerability Detected](../content/cyble-vision-cyble-vision-alerts-new-vulnerability-detected-e52f36dd-7d4f-4aa8-a095-3b6fa2b28b8d-860d840c.md) | Low | InitialAccess | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts News Feed Alert](../content/cyble-vision-cyble-vision-alerts-news-feed-alert-d205a93f-b2e3-4708-a359-5e0c88ee3e59-a37b4b35.md) | Low | Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts OSINT Mention Detected](../content/cyble-vision-cyble-vision-alerts-osint-mention-detected-9ff985d8-57a8-4302-a8e6-34fa96c3c505-996cd01e.md) | Low | Reconnaissance, ResourceDevelopment | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts OT/ICS Threat Activity Detected](../content/cyble-vision-cyble-vision-alerts-ot-ics-threat-activity-detected-c1ebc79d-7f46-429e-bf2c-8bb0b75ba6b2-902af595.md) | Low | Discovery, Collection | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Pastebin](../content/cyble-vision-cyble-vision-alerts-pastebin-dd37e041-3973-482a-aa8c-f484b4178940-7bf81a45.md) | Low | Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Phishing Domain Detected](../content/cyble-vision-cyble-vision-alerts-phishing-domain-detected-eb1d45fe-1b19-4b54-b146-971f282a6fd9-a9a6a0ac.md) | Low | Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Physical Threat Alert](../content/cyble-vision-cyble-vision-alerts-physical-threat-alert-88db8505-1889-46aa-a4e2-4e866262dcb9-96d4ee49.md) | Low | Impact | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Postman API Exposure Detection](../content/cyble-vision-cyble-vision-alerts-postman-api-exposure-detection-99ca8956-5aad-4542-9fbc-8254182b424d-3efc8967.md) | Low | Reconnaissance, CredentialAccess, Exfiltration | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Product Vulnerability Detected](../content/cyble-vision-cyble-vision-alerts-product-vulnerability-detected-c360341e-6ba6-472a-ae00-7be85967e240-c9e759b7.md) | Low | InitialAccess, ResourceDevelopment | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts SSL Certificate Expiry](../content/cyble-vision-cyble-vision-alerts-ssl-certificate-expiry-a667d635-d2a7-47e7-8827-8fb243af2afd-e55aa2d1.md) | Low | InitialAccess, Impact | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Social Media Monitoring](../content/cyble-vision-cyble-vision-alerts-social-media-monitoring-231c2c16-3742-4cfb-a8e1-c1a7d09f080a-bd25bcf4.md) | Low | Reconnaissance, ResourceDevelopment | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Suspicious Domain](../content/cyble-vision-cyble-vision-alerts-suspicious-domain-c56fcb78-b708-4a92-bad4-d50b1e15c42c-f5c309bb.md) | Low | Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts TOR Links](../content/cyble-vision-cyble-vision-alerts-tor-links-b9df1ec4-a572-4448-8da1-1bc4b7e1687f-03073849.md) | Low | ResourceDevelopment, Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Vulnerability](../content/cyble-vision-cyble-vision-alerts-vulnerability-0e0cdda9-4536-4cc9-91cf-736e8957ed26-911ba36d.md) | Low | Reconnaissance, Execution, Discovery | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Website Defacement Content](../content/cyble-vision-cyble-vision-alerts-website-defacement-content-91a00e4f-3edb-49e9-ba6f-cec87a5bd2f8-1133b5f4.md) | Low | Impact | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Website Defacement Keyword](../content/cyble-vision-cyble-vision-alerts-website-defacement-keyword-754dbb50-8dc2-4b8b-86d8-a890a020ddc3-df3d89c9.md) | Low | Impact, Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [Cyble Vision Alerts Website Defacement URL](../content/cyble-vision-cyble-vision-alerts-website-defacement-url-1dabe566-a0f1-4c27-8307-aea5a79eb5e9-70d79aa3.md) | Low | Impact | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [CybleVision Alerts Cyber Crime Forum Alerts](../content/cyble-vision-cyblevision-alerts-cyber-crime-forum-alerts-b78c4641-cc16-48e0-9d05-c9b36a55d214-09be5ef2.md) | Low | Reconnaissance, ResourceDevelopment, Exfiltration | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [CybleVision Alerts Darkweb Marketplace Alerts](../content/cyble-vision-cyblevision-alerts-darkweb-marketplace-alerts-e80eedb4-cbae-45cc-b1be-a2a8dc31af3b-f7d09bed.md) | Low | CredentialAccess, Collection, Exfiltration, Reconnaissance | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [CybleVision Alerts Mobile Apps](../content/cyble-vision-cyblevision-alerts-mobile-apps-6d55fefc-b334-4b79-b11c-667746b5bdde-f89c687f.md) | Low | Reconnaissance, ResourceDevelopment, InitialAccess | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [CybleVision Alerts Stealer Logs](../content/cyble-vision-cyblevision-alerts-stealer-logs-e0bf55c2-35ef-47ab-8846-5087618ae805-88412cf5.md) | Low | CredentialAccess, Collection, Exfiltration, Reconnaissance, InitialAccess | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |
| [CybleVision Alerts Telegram Mentions](../content/cyble-vision-cyblevision-alerts-telegram-mentions-4238f545-8b6f-4f7c-80b5-14cca2cebc99-dd4959ca.md) | Low | Reconnaissance, ResourceDevelopment, InitialAccess, CommandAndControl | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CybleVisionAlertsWorkbook](../content/cyble-vision-cyblevisionalertsworkbook-ccdef358.md) | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Cyble-IOC_Enrichment-Playbook](../content/cyble-vision-cyble-ioc-enrichment-playbook-351608f8.md) | This playbook leverages the Cyble API to enrich IP, Domain, Url & Hash indicators, found in Microsof... | - |
| [Cyble-ThreatIntelligence-Ingest-Playbook](../content/cyble-vision-cyble-threatintelligence-ingest-playbook-63c46da3.md) | This playbook imports IoC lists from Cyble and stores them as Threat Intelligence Indicators in Micr... | - |
| [CybleVisionAlert_Status_Update](../content/cyble-vision-cyblevisionalert-status-update-6da41a7a.md) | This Logic App updates Cyble alert status and severity based on Microsoft Sentinel incident changes.... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Alerts_advisory](../parsers/alerts-advisory.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_assets](../parsers/alerts-assets.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_bit_bucket](../parsers/alerts-bit-bucket.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_cloud_storage](../parsers/alerts-cloud-storage.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_compromised_endpoints_cookies](../parsers/alerts-compromised-endpoints-cookies.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_compromised_files](../parsers/alerts-compromised-files.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_cyber_crime_forums](../parsers/alerts-cyber-crime-forums.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_darkweb_data_breaches](../parsers/alerts-darkweb-data-breaches.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_darkweb_marketplaces](../parsers/alerts-darkweb-marketplaces.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_darkweb_ransomware](../parsers/alerts-darkweb-ransomware.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_defacement_content](../parsers/alerts-defacement-content.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_defacement_keyword](../parsers/alerts-defacement-keyword.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_defacement_url](../parsers/alerts-defacement-url.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_discord](../parsers/alerts-discord.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_docker](../parsers/alerts-docker.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_domain_expiry](../parsers/alerts-domain-expiry.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_domain_watchlist](../parsers/alerts-domain-watchlist.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_flash_report](../parsers/alerts-flash-report.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_github](../parsers/alerts-github.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_hacktivism](../parsers/alerts-hacktivism.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_i2p](../parsers/alerts-i2p.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_iocs](../parsers/alerts-iocs.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_ip_risk_score](../parsers/alerts-ip-risk-score.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_leaked_credentials](../parsers/alerts-leaked-credentials.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_malicious_ads](../parsers/alerts-malicious-ads.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_mobile_apps](../parsers/alerts-mobile-apps.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_new_vulnerability](../parsers/alerts-new-vulnerability.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_news_feed](../parsers/alerts-news-feed.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_osint](../parsers/alerts-osint.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_ot_ics](../parsers/alerts-ot-ics.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_pastebin](../parsers/alerts-pastebin.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_phishing](../parsers/alerts-phishing.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_physical_threats](../parsers/alerts-physical-threats.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_postman](../parsers/alerts-postman.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_product_vulnerability](../parsers/alerts-product-vulnerability.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_ransomware_updates](../parsers/alerts-ransomware-updates.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_social_media_monitoring](../parsers/alerts-social-media-monitoring.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_ssl_expiry](../parsers/alerts-ssl-expiry.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_stealer_logs](../parsers/alerts-stealer-logs.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_subdomains](../parsers/alerts-subdomains.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_suspicious_domains](../parsers/alerts-suspicious-domains.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_telegram_mentions](../parsers/alerts-telegram-mentions.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_tor_links](../parsers/alerts-tor-links.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_vulnerability](../parsers/alerts-vulnerability.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |
| [Alerts_web_applications](../parsers/alerts-web-applications.md) | - | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
| 3.0.3       | 12-01-2026                     | Updated API endpoint for **CCF Data Connector**.<br/> Minor descriptive changes to **Analytic Rule** and **Playbook**.Updated **Playbook** API Body. |
| 3.0.2       | 14-12-2025                     | Added new **CCF data connector**.<br/> Added new **Parsers** to Parse data message of each service.<br/> Added **Analytic Rules** to generate incidents based on Services.                      |
| 3.0.1       | 10-06-2025                     | *Cyble-ThreatIntelligence-Ingest* **Playbook**, including fixes for de-duplication of IoCs, optimized KQL query load, and pagination support. |
| 3.0.0       | 20-05-2025                     | Initial Solution Release.                              |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

