# Cyble Vision

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyble Support |
| **Support Tier** | Partner |
| **Support Link** | [https://cyble.com/talk-to-sales/](https://cyble.com/talk-to-sales/) |
| **Categories** | domains |
| **First Published** | 2025-05-05 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cyble Vision Alerts](../connectors/cyblevisionalerts.md)

## Tables Reference

This solution uses **45 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Alerts_advisory`](../tables/alerts-advisory.md) | - | Analytics |
| [`Alerts_assets`](../tables/alerts-assets.md) | - | Analytics |
| [`Alerts_bit_bucket`](../tables/alerts-bit-bucket.md) | - | Analytics |
| [`Alerts_cloud_storage`](../tables/alerts-cloud-storage.md) | - | Analytics |
| [`Alerts_compromised_endpoints_cookies`](../tables/alerts-compromised-endpoints-cookies.md) | - | Analytics |
| [`Alerts_compromised_files`](../tables/alerts-compromised-files.md) | - | Analytics |
| [`Alerts_cyber_crime_forums`](../tables/alerts-cyber-crime-forums.md) | - | Analytics |
| [`Alerts_darkweb_data_breaches`](../tables/alerts-darkweb-data-breaches.md) | - | Analytics |
| [`Alerts_darkweb_marketplaces`](../tables/alerts-darkweb-marketplaces.md) | - | Analytics |
| [`Alerts_darkweb_ransomware`](../tables/alerts-darkweb-ransomware.md) | - | Analytics |
| [`Alerts_defacement_content`](../tables/alerts-defacement-content.md) | - | Analytics |
| [`Alerts_defacement_keyword`](../tables/alerts-defacement-keyword.md) | - | Analytics |
| [`Alerts_defacement_url`](../tables/alerts-defacement-url.md) | - | Analytics |
| [`Alerts_discord`](../tables/alerts-discord.md) | - | Analytics |
| [`Alerts_docker`](../tables/alerts-docker.md) | - | Analytics |
| [`Alerts_domain_expiry`](../tables/alerts-domain-expiry.md) | - | Analytics |
| [`Alerts_domain_watchlist`](../tables/alerts-domain-watchlist.md) | - | Analytics |
| [`Alerts_flash_report`](../tables/alerts-flash-report.md) | - | Analytics |
| [`Alerts_github`](../tables/alerts-github.md) | - | Analytics |
| [`Alerts_hacktivism`](../tables/alerts-hacktivism.md) | - | Analytics |
| [`Alerts_i2p`](../tables/alerts-i2p.md) | - | Analytics |
| [`Alerts_iocs`](../tables/alerts-iocs.md) | - | Analytics |
| [`Alerts_ip_risk_score`](../tables/alerts-ip-risk-score.md) | - | Analytics |
| [`Alerts_leaked_credentials`](../tables/alerts-leaked-credentials.md) | - | Analytics |
| [`Alerts_malicious_ads`](../tables/alerts-malicious-ads.md) | - | Analytics |
| [`Alerts_mobile_apps`](../tables/alerts-mobile-apps.md) | - | Analytics |
| [`Alerts_new_vulnerability`](../tables/alerts-new-vulnerability.md) | - | Analytics |
| [`Alerts_news_feed`](../tables/alerts-news-feed.md) | - | Analytics |
| [`Alerts_osint`](../tables/alerts-osint.md) | - | Analytics |
| [`Alerts_ot_ics`](../tables/alerts-ot-ics.md) | - | Analytics |
| [`Alerts_pastebin`](../tables/alerts-pastebin.md) | - | Analytics |
| [`Alerts_phishing`](../tables/alerts-phishing.md) | - | Analytics |
| [`Alerts_physical_threats`](../tables/alerts-physical-threats.md) | - | Analytics |
| [`Alerts_postman`](../tables/alerts-postman.md) | - | Analytics |
| [`Alerts_product_vulnerability`](../tables/alerts-product-vulnerability.md) | - | Analytics |
| [`Alerts_social_media_monitoring`](../tables/alerts-social-media-monitoring.md) | - | Analytics |
| [`Alerts_ssl_expiry`](../tables/alerts-ssl-expiry.md) | - | Analytics |
| [`Alerts_stealer_logs`](../tables/alerts-stealer-logs.md) | - | Analytics |
| [`Alerts_subdomains`](../tables/alerts-subdomains.md) | - | Analytics |
| [`Alerts_suspicious_domains`](../tables/alerts-suspicious-domains.md) | - | Analytics |
| [`Alerts_telegram_mentions`](../tables/alerts-telegram-mentions.md) | - | Analytics |
| [`Alerts_tor_links`](../tables/alerts-tor-links.md) | - | Analytics |
| [`Alerts_vulnerability`](../tables/alerts-vulnerability.md) | - | Analytics |
| [`Alerts_web_applications`](../tables/alerts-web-applications.md) | - | Analytics |
| [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) | [Cyble Vision Alerts](../connectors/cyblevisionalerts.md) | Workbooks |

## Content Items

This solution includes **94 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 45 |
| Analytic Rules | 44 |
| Playbooks | 4 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cyble Advisory Alerts Advisory](../content/1932dcfd-a32e-49f9-a212-5bcd084fbd78.md) | Low | Reconnaissance, ResourceDevelopment | [`Alerts_advisory`](../tables/alerts-advisory.md) |
| [Cyble Vision Alerts Assets](../content/0012714c-c595-4dcd-8949-4a5c1d49aaa8.md) | Low | Reconnaissance | [`Alerts_assets`](../tables/alerts-assets.md) |
| [Cyble Vision Alerts Bitbucket](../content/f3c25011-4509-41c8-be27-35d891531c39.md) | Low | CredentialAccess, Exfiltration, Discovery | [`Alerts_bit_bucket`](../tables/alerts-bit-bucket.md) |
| [Cyble Vision Alerts Cloud Storage](../content/db417cee-529c-4eac-b7b9-36eb0166800a.md) | Low | Exfiltration, Discovery | [`Alerts_cloud_storage`](../tables/alerts-cloud-storage.md) |
| [Cyble Vision Alerts Compromised Endpoint Cookies](../content/33b07eaa-f451-4c38-ac9f-8af3f7e99f0e.md) | Low | CredentialAccess, DefenseEvasion | [`Alerts_compromised_endpoints_cookies`](../tables/alerts-compromised-endpoints-cookies.md) |
| [Cyble Vision Alerts Compromised Files](../content/0f6a8287-09ee-4f82-b8c3-e35c4ac6212e.md) | Low | CredentialAccess, Exfiltration | [`Alerts_compromised_files`](../tables/alerts-compromised-files.md) |
| [Cyble Vision Alerts Cyble Web Applications](../content/359ddb25-eab1-4ef5-8303-ed3a9b680690.md) | Low | Reconnaissance | [`Alerts_web_applications`](../tables/alerts-web-applications.md) |
| [Cyble Vision Alerts Darkweb Data Breaches](../content/588a2ee5-978a-43f7-9c10-6d76d82026ef.md) | Low | Reconnaissance, InitialAccess, Exfiltration, Collection | [`Alerts_darkweb_data_breaches`](../tables/alerts-darkweb-data-breaches.md) |
| [Cyble Vision Alerts Darkweb Ransomware Leak](../content/6deaf986-a25b-47b4-afbe-667901aa313b.md) | Low | Impact, Exfiltration, Reconnaissance | [`Alerts_darkweb_ransomware`](../tables/alerts-darkweb-ransomware.md) |
| [Cyble Vision Alerts Discord Keyword](../content/601a5859-0dc2-452d-8d1e-66dc651c16d5.md) | Low | Reconnaissance, InitialAccess | [`Alerts_discord`](../tables/alerts-discord.md) |
| [Cyble Vision Alerts Discovered Subdomain](../content/7a0f79cc-8d28-44b5-ac1e-6176565bb7b8.md) | Low | Reconnaissance | [`Alerts_subdomains`](../tables/alerts-subdomains.md) |
| [Cyble Vision Alerts Docker](../content/47dee28d-fa74-49cd-b5fb-397b047a73c0.md) | Low | Exfiltration, Execution, Discovery | [`Alerts_docker`](../tables/alerts-docker.md) |
| [Cyble Vision Alerts Domain Expiry Alert](../content/81404e99-ce27-45aa-aa19-a276a3d4c645.md) | Low | Impact | [`Alerts_domain_expiry`](../tables/alerts-domain-expiry.md) |
| [Cyble Vision Alerts Domain Watchlist](../content/0a54dc90-9a9d-4300-af21-feb5136e81da.md) | Low | ResourceDevelopment | [`Alerts_domain_watchlist`](../tables/alerts-domain-watchlist.md) |
| [Cyble Vision Alerts Flash Report](../content/2c86652a-bbbe-4a32-8b1c-4b53aad0750e.md) | Low | Reconnaissance | [`Alerts_flash_report`](../tables/alerts-flash-report.md) |
| [Cyble Vision Alerts Github](../content/117e8f7c-8f44-4061-bcc2-b444b98a3838.md) | Low | Collection, CredentialAccess | [`Alerts_github`](../tables/alerts-github.md) |
| [Cyble Vision Alerts Hacktivism](../content/6649e5a0-0365-452f-84b3-448a0aec7a59.md) | Low | Reconnaissance, Impact, ResourceDevelopment | [`Alerts_hacktivism`](../tables/alerts-hacktivism.md) |
| [Cyble Vision Alerts I2P Monitoring](../content/d1cdfb8d-12cd-4a29-8caf-ef4a35ad67ed.md) | Low | ResourceDevelopment | [`Alerts_i2p`](../tables/alerts-i2p.md) |
| [Cyble Vision Alerts IOC'S](../content/c8cf42d5-8684-435f-9c4d-9dd0cc47eaec.md) | Low | Reconnaissance, InitialAccess, Discovery, CommandAndControl, Impact | [`Alerts_iocs`](../tables/alerts-iocs.md) |
| [Cyble Vision Alerts IP Risk Score](../content/1e7c8d9f-1d42-42b3-b6ce-12a637e05f16.md) | Low | Reconnaissance | [`Alerts_ip_risk_score`](../tables/alerts-ip-risk-score.md) |
| [Cyble Vision Alerts Leaked Credentials](../content/224a63ae-e278-4a11-b7c2-02ec3e17b56c.md) | Low | CredentialAccess, Discovery, Reconnaissance | [`Alerts_leaked_credentials`](../tables/alerts-leaked-credentials.md) |
| [Cyble Vision Alerts Malicious Ads Detected](../content/cf0a9691-5716-42e0-bfa1-49b35d3a7892.md) | Low | InitialAccess, Execution | [`Alerts_malicious_ads`](../tables/alerts-malicious-ads.md) |
| [Cyble Vision Alerts New Vulnerability Detected](../content/e52f36dd-7d4f-4aa8-a095-3b6fa2b28b8d.md) | Low | InitialAccess | [`Alerts_new_vulnerability`](../tables/alerts-new-vulnerability.md) |
| [Cyble Vision Alerts News Feed Alert](../content/d205a93f-b2e3-4708-a359-5e0c88ee3e59.md) | Low | Reconnaissance | [`Alerts_news_feed`](../tables/alerts-news-feed.md) |
| [Cyble Vision Alerts OSINT Mention Detected](../content/9ff985d8-57a8-4302-a8e6-34fa96c3c505.md) | Low | Reconnaissance, ResourceDevelopment | [`Alerts_osint`](../tables/alerts-osint.md) |
| [Cyble Vision Alerts OT/ICS Threat Activity Detected](../content/c1ebc79d-7f46-429e-bf2c-8bb0b75ba6b2.md) | Low | Discovery, Collection | [`Alerts_ot_ics`](../tables/alerts-ot-ics.md) |
| [Cyble Vision Alerts Pastebin](../content/dd37e041-3973-482a-aa8c-f484b4178940.md) | Low | Reconnaissance | [`Alerts_pastebin`](../tables/alerts-pastebin.md) |
| [Cyble Vision Alerts Phishing Domain Detected](../content/eb1d45fe-1b19-4b54-b146-971f282a6fd9.md) | Low | Reconnaissance | [`Alerts_phishing`](../tables/alerts-phishing.md) |
| [Cyble Vision Alerts Physical Threat Alert](../content/88db8505-1889-46aa-a4e2-4e866262dcb9.md) | Low | Impact | [`Alerts_physical_threats`](../tables/alerts-physical-threats.md) |
| [Cyble Vision Alerts Postman API Exposure Detection](../content/99ca8956-5aad-4542-9fbc-8254182b424d.md) | Low | Reconnaissance, CredentialAccess, Exfiltration | [`Alerts_postman`](../tables/alerts-postman.md) |
| [Cyble Vision Alerts Product Vulnerability Detected](../content/c360341e-6ba6-472a-ae00-7be85967e240.md) | Low | InitialAccess, ResourceDevelopment | [`Alerts_product_vulnerability`](../tables/alerts-product-vulnerability.md) |
| [Cyble Vision Alerts SSL Certificate Expiry](../content/a667d635-d2a7-47e7-8827-8fb243af2afd.md) | Low | InitialAccess, Impact | [`Alerts_ssl_expiry`](../tables/alerts-ssl-expiry.md) |
| [Cyble Vision Alerts Social Media Monitoring](../content/231c2c16-3742-4cfb-a8e1-c1a7d09f080a.md) | Low | Reconnaissance, ResourceDevelopment | [`Alerts_social_media_monitoring`](../tables/alerts-social-media-monitoring.md) |
| [Cyble Vision Alerts Suspicious Domain](../content/c56fcb78-b708-4a92-bad4-d50b1e15c42c.md) | Low | Reconnaissance | [`Alerts_suspicious_domains`](../tables/alerts-suspicious-domains.md) |
| [Cyble Vision Alerts TOR Links](../content/b9df1ec4-a572-4448-8da1-1bc4b7e1687f.md) | Low | ResourceDevelopment, Reconnaissance | [`Alerts_tor_links`](../tables/alerts-tor-links.md) |
| [Cyble Vision Alerts Vulnerability](../content/0e0cdda9-4536-4cc9-91cf-736e8957ed26.md) | Low | Reconnaissance, Execution, Discovery | [`Alerts_vulnerability`](../tables/alerts-vulnerability.md) |
| [Cyble Vision Alerts Website Defacement Content](../content/91a00e4f-3edb-49e9-ba6f-cec87a5bd2f8.md) | Low | Impact | [`Alerts_defacement_content`](../tables/alerts-defacement-content.md) |
| [Cyble Vision Alerts Website Defacement Keyword](../content/754dbb50-8dc2-4b8b-86d8-a890a020ddc3.md) | Low | Impact, Reconnaissance | [`Alerts_defacement_keyword`](../tables/alerts-defacement-keyword.md) |
| [Cyble Vision Alerts Website Defacement URL](../content/1dabe566-a0f1-4c27-8307-aea5a79eb5e9.md) | Low | Impact | [`Alerts_defacement_url`](../tables/alerts-defacement-url.md) |
| [CybleVision Alerts Cyber Crime Forum Alerts](../content/b78c4641-cc16-48e0-9d05-c9b36a55d214.md) | Low | Reconnaissance, ResourceDevelopment, Exfiltration | [`Alerts_cyber_crime_forums`](../tables/alerts-cyber-crime-forums.md) |
| [CybleVision Alerts Darkweb Marketplace Alerts](../content/e80eedb4-cbae-45cc-b1be-a2a8dc31af3b.md) | Low | CredentialAccess, Collection, Exfiltration, Reconnaissance | [`Alerts_darkweb_marketplaces`](../tables/alerts-darkweb-marketplaces.md) |
| [CybleVision Alerts Mobile Apps](../content/6d55fefc-b334-4b79-b11c-667746b5bdde.md) | Low | Reconnaissance, ResourceDevelopment, InitialAccess | [`Alerts_mobile_apps`](../tables/alerts-mobile-apps.md) |
| [CybleVision Alerts Stealer Logs](../content/e0bf55c2-35ef-47ab-8846-5087618ae805.md) | Low | CredentialAccess, Collection, Exfiltration, Reconnaissance, InitialAccess | [`Alerts_stealer_logs`](../tables/alerts-stealer-logs.md) |
| [CybleVision Alerts Telegram Mentions](../content/4238f545-8b6f-4f7c-80b5-14cca2cebc99.md) | Low | Reconnaissance, ResourceDevelopment, InitialAccess, CommandAndControl | [`Alerts_telegram_mentions`](../tables/alerts-telegram-mentions.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CybleVisionAlertsWorkbook](../content/cyblevisionalertsworkbook-cyble-vision.md) | [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Azure_Sentinel_automation_rules](../content/azure-sentinel-automation-rules-cyble-vision.md) | - | - |
| [Cyble-IOC_Enrichment-Playbook](../content/cyble-ioc-enrichment-playbook-cyble-vision.md) | This playbook leverages the Cyble API to enrich IP, Domain, Url & Hash indicators, found in Microsof... | - |
| [Cyble-ThreatIntelligence-Ingest-Playbook](../content/cyble-threatintelligence-ingest-playbook-cyble-vision.md) | This playbook imports IoC lists from Cyble and stores them as Threat Intelligence Indicators in Micr... | - |
| [CybleVisionAlert_Status_Update](../content/cyblevisionalert-status-update-cyble-vision.md) | This Logic App updates Cyble alert status and severity based on Sentinel incident changes. It suppor... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Alerts_advisory](../content/c702d399-a18f-40ec-8021-620fe670e45e.md) | - | - |
| [Alerts_assets](../content/211f42b8-835a-4fde-acb9-9eb1092ae22e.md) | - | - |
| [Alerts_bit_bucket](../content/e885bc44-af9a-47fe-9026-cb22a92bd821.md) | - | - |
| [Alerts_cloud_storage](../content/9f3e7b8c-2c61-4d55-8601-2e7f90a4b3c2.md) | - | - |
| [Alerts_compromised_endpoints_cookies](../content/b6a1b312-df16-4c82-872e-9dbb520f5900.md) | - | - |
| [Alerts_compromised_files](../content/fd94c2ab-0b7b-4f89-9c74-5a6f1e2d9c31.md) | - | - |
| [Alerts_cyber_crime_forums](../content/b3af08d4-363d-44b0-854f-9f3229610877.md) | - | - |
| [Alerts_darkweb_data_breaches](../content/49e9a088-b96e-4743-8106-676fdb48de4a.md) | - | - |
| [Alerts_darkweb_marketplaces](../content/8c60e9db-e89a-4943-ae48-05a1e187f640.md) | - | - |
| [Alerts_darkweb_ransomware](../content/3b7e2c91-4df0-4f0c-8c9a-923a0e5e2fd2.md) | - | - |
| [Alerts_defacement_content](../content/b7d1f9e6-9a34-4414-912f-6af35db1f8c4.md) | - | - |
| [Alerts_defacement_keyword](../content/317263d6-8a3c-4890-9955-0ed850111bd4.md) | - | - |
| [Alerts_defacement_url](../content/a0791061-513b-4bd7-9d09-3a7a367373be.md) | - | - |
| [Alerts_discord](../content/6ce5518f-7f50-4774-b4d0-93882933be3a.md) | - | - |
| [Alerts_docker](../content/170ff367-7767-46b5-9041-0704a8d36e87.md) | - | - |
| [Alerts_domain_expiry](../content/e6846b75-3e50-4a97-bf31-86edc4a860c7.md) | - | - |
| [Alerts_domain_watchlist](../content/68ed8105-d7bd-42fb-b2cb-2ebf7f4c4242.md) | - | - |
| [Alerts_flash_report](../content/68563f2c-7c06-4d1d-ac1c-39f99e1a5d03.md) | - | - |
| [Alerts_github](../content/6d3af3e2-0f3b-4c8c-94cb-2c6117dd59aa.md) | - | - |
| [Alerts_hacktivism](../content/856e5d88-cff6-4081-b0a2-eb0994f9919e.md) | - | - |
| [Alerts_i2p](../content/66b3b83b-d3ef-448c-93cc-63ac3cda48f0.md) | - | - |
| [Alerts_iocs](../content/cf0b71c2-1ad2-4b0e-9f7b-6d28b593e3da.md) | - | - |
| [Alerts_ip_risk_score](../content/4e8c2f51-b1ab-4d32-8c8f-2f83c71b4cd0.md) | - | - |
| [Alerts_leaked_credentials](../content/cceef0b7-c69b-4665-b357-4036b2b02cff.md) | - | - |
| [Alerts_malicious_ads](../content/a13d52d9-4cf8-46a2-9e3c-5b241b8a9277.md) | - | - |
| [Alerts_mobile_apps](../content/3b52baeb-0cdb-40a2-90b0-49ec949e9baa.md) | - | - |
| [Alerts_new_vulnerability](../content/ada5fd51-7245-4cce-8d1f-4ebb62b8b244.md) | - | - |
| [Alerts_news_feed](../content/9436eae0-b638-46c3-a399-11a55488c4fe.md) | - | - |
| [Alerts_osint](../content/c0b6d8e4-2a9a-4df1-9ad4-9e57f5c8d1a3.md) | - | - |
| [Alerts_ot_ics](../content/c130d2c6-ce85-4de7-86d8-3eda4b7b8f82.md) | - | - |
| [Alerts_pastebin](../content/d8c1f6c4-3e72-4c76-9b9d-2a4e3b1a9f6e.md) | - | - |
| [Alerts_phishing](../content/f23df96d-b2a7-47b3-ac88-85e5ae2903b0.md) | - | - |
| [Alerts_physical_threats](../content/52b85596-1010-4d93-9401-b0c27fe708bb.md) | - | - |
| [Alerts_postman](../content/d3e98c57-0c41-4c0f-9f7d-1b38fd74ac92.md) | - | - |
| [Alerts_product_vulnerability](../content/e9325ea2-f1ae-499b-b9f9-d365a11e9e84.md) | - | - |
| [Alerts_ransomware_updates](../content/5f7b03d2-6c2d-4f12-9a5b-0cfaea9c44e0.md) | - | - |
| [Alerts_social_media_monitoring](../content/3579af97-d2e3-4e4e-9b9f-99a76f255c29.md) | - | - |
| [Alerts_ssl_expiry](../content/8c2bfa74-7f21-4a0e-9e5f-5bb3d632c445.md) | - | - |
| [Alerts_stealer_logs](../content/72c0f4b9-6ef4-4f3c-8bb2-5e18c6a3bf10.md) | - | - |
| [Alerts_subdomains](../content/0a4c7e92-3b5e-4f2a-b2c7-6d2ebf4d1f25.md) | - | - |
| [Alerts_suspicious_domains](../content/c9d6d764-f283-4529-bbce-97f9ee042845.md) | - | - |
| [Alerts_telegram_mentions](../content/e2c4b19a-3c41-4c90-ae7b-9b16c44df0a7.md) | - | - |
| [Alerts_tor_links](../content/3c6f4c11-9fb2-4e6a-b3e9-0ae3df64b72e.md) | - | - |
| [Alerts_vulnerability](../content/669c275d-f729-4582-9f48-64a73f73fe12.md) | - | - |
| [Alerts_web_applications](../content/0f94fa3c-7e4c-4c3f-9e49-2ce7c3441f0c.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
| 3.0.2       | 14-12-2025                     | Added new **CCF data connector**.<br/> Added new **Parsers** to Parse data message of each service.<br/> Added **Analytic Rules** to generate incidents based on Services.                      |
| 3.0.1       | 10-06-2025                     | *Cyble-ThreatIntelligence-Ingest* **Playbook**, including fixes for de-duplication of IoCs, optimized KQL query load, and pagination support. |
| 3.0.0       | 20-05-2025                     | Initial Solution Release.                              |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
