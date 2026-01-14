# Cyfirma Digital Risk

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cyfirma_logo.svg" alt="Cyfirma Digital Risk Logo" width="75" height="75">

The CYFIRMA Digital Risk solution integrates with Microsoft Sentinel to provide real-time intelligence on data exposures across dark web forums, ransomware groups, public sources, and code repositories. It enables organizations to detect leaked credentials, internal documents, source code, and PII/CIIs that could be exploited by threat actors. Enriched intelligence is ingested into Microsoft Sentinel, helping security teams correlate external threats with internal activity, detect compromised accounts, and automate incident response.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CYFIRMA |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyfirma.com/contact-us/](https://www.cyfirma.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft |
| **First Published** | 2025-03-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CYFIRMA Digital Risk](../connectors/cyfirmadigitalriskalertsconnector.md)

## Tables Used

This solution uses **7 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyfirmaDBWMDarkWebAlerts_CL`](../tables/cyfirmadbwmdarkwebalerts-cl.md) | [CYFIRMA Digital Risk](../connectors/cyfirmadigitalriskalertsconnector.md) | Analytics |
| [`CyfirmaDBWMPhishingAlerts_CL`](../tables/cyfirmadbwmphishingalerts-cl.md) | [CYFIRMA Digital Risk](../connectors/cyfirmadigitalriskalertsconnector.md) | Analytics |
| [`CyfirmaDBWMRansomwareAlerts_CL`](../tables/cyfirmadbwmransomwarealerts-cl.md) | [CYFIRMA Digital Risk](../connectors/cyfirmadigitalriskalertsconnector.md) | Analytics |
| [`CyfirmaSPEConfidentialFilesAlerts_CL`](../tables/cyfirmaspeconfidentialfilesalerts-cl.md) | [CYFIRMA Digital Risk](../connectors/cyfirmadigitalriskalertsconnector.md) | Analytics |
| [`CyfirmaSPEPIIAndCIIAlerts_CL`](../tables/cyfirmaspepiiandciialerts-cl.md) | [CYFIRMA Digital Risk](../connectors/cyfirmadigitalriskalertsconnector.md) | Analytics |
| [`CyfirmaSPESocialThreatAlerts_CL`](../tables/cyfirmaspesocialthreatalerts-cl.md) | [CYFIRMA Digital Risk](../connectors/cyfirmadigitalriskalertsconnector.md) | Analytics |
| [`CyfirmaSPESourceCodeAlerts_CL`](../tables/cyfirmaspesourcecodealerts-cl.md) | [CYFIRMA Digital Risk](../connectors/cyfirmadigitalriskalertsconnector.md) | Analytics |

## Content Items

This solution includes **14 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 14 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CYFIRMA - Data Breach and Web Monitoring - Dark Web High Rule](../content/cyfirma-digital-risk-cyfirma-data-breach-and-web-monitoring-dark-web-high-rule-c3f1f55b-7e54-4416-8afc-7d7876b29b0f-0108f021.md) | High | CredentialAccess, Collection, Exfiltration, Impact | [`CyfirmaDBWMDarkWebAlerts_CL`](../tables/cyfirmadbwmdarkwebalerts-cl.md) |
| [CYFIRMA - Data Breach and Web Monitoring - Dark Web Medium Rule](../content/cyfirma-digital-risk-cyfirma-data-breach-and-web-monitoring-dark-web-medium-rule-c0afeda7-4832-49a6-8d03-a5d137d513b5-9e7f4602.md) | Medium | CredentialAccess, Collection, Exfiltration, Impact | [`CyfirmaDBWMDarkWebAlerts_CL`](../tables/cyfirmadbwmdarkwebalerts-cl.md) |
| [CYFIRMA - Data Breach and Web Monitoring - Phishing Campaign Detection Rule](../content/cyfirma-digital-risk-cyfirma-data-breach-and-web-monitoring-phishing-campaign-detection-rule-17cce4fc-9b4c-4eef-a4c7-083b44545e6e-cee99da3.md) | High | InitialAccess, Exfiltration | [`CyfirmaDBWMPhishingAlerts_CL`](../tables/cyfirmadbwmphishingalerts-cl.md) |
| [CYFIRMA - Data Breach and Web Monitoring - Phishing Campaign Detection Rule](../content/cyfirma-digital-risk-cyfirma-data-breach-and-web-monitoring-phishing-campaign-detection-rule-00c7b41c-ddeb-4c49-acd7-2f7897e27fb4-eae6c1a8.md) | Medium | InitialAccess, Exfiltration | [`CyfirmaDBWMPhishingAlerts_CL`](../tables/cyfirmadbwmphishingalerts-cl.md) |
| [CYFIRMA - Data Breach and Web Monitoring - Ransomware Exposure Detected Rule](../content/cyfirma-digital-risk-cyfirma-data-breach-and-web-monitoring-ransomware-exposure-detected-rule-ed1aabc1-e1c1-42f4-abac-fd5637730f13-b632239e.md) | High | InitialAccess, Exfiltration | [`CyfirmaDBWMRansomwareAlerts_CL`](../tables/cyfirmadbwmransomwarealerts-cl.md) |
| [CYFIRMA - Data Breach and Web Monitoring - Ransomware Exposure Detected Rule](../content/cyfirma-digital-risk-cyfirma-data-breach-and-web-monitoring-ransomware-exposure-detected-rule-d5f9a6fe-7fd2-488c-8690-0ca24fba43dc-2e4543c4.md) | Medium | InitialAccess, Exfiltration | [`CyfirmaDBWMRansomwareAlerts_CL`](../tables/cyfirmadbwmransomwarealerts-cl.md) |
| [CYFIRMA - Social and Public Exposure -  Social Media Threats  Activity Detected Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-social-media-threats-activity-detected-rule-4fe04459-13f1-4ff7-9b7c-f9be0c2aad6d-2e67b8fc.md) | High | ResourceDevelopment, Reconnaissance, InitialAccess, Impact | [`CyfirmaSPESocialThreatAlerts_CL`](../tables/cyfirmaspesocialthreatalerts-cl.md) |
| [CYFIRMA - Social and Public Exposure -  Social Media Threats  Activity Detected Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-social-media-threats-activity-detected-rule-b8149f2f-54da-4f7b-98e1-c01ca47e1e55-2aa4324a.md) | Medium | ResourceDevelopment, Reconnaissance, InitialAccess, Impact | [`CyfirmaSPESocialThreatAlerts_CL`](../tables/cyfirmaspesocialthreatalerts-cl.md) |
| [CYFIRMA - Social and Public Exposure - Confidential Files Information Exposure Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-confidential-files-information-exposure-rule-67e9c4aa-a2fa-4e4e-9272-1a8da41475c6-3f32254f.md) | High | InitialAccess, Exfiltration, Collection, Reconnaissance | [`CyfirmaSPEConfidentialFilesAlerts_CL`](../tables/cyfirmaspeconfidentialfilesalerts-cl.md) |
| [CYFIRMA - Social and Public Exposure - Confidential Files Information Exposure Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-confidential-files-information-exposure-rule-a2984be5-8d69-4139-b98f-e89c9c421c27-d4335323.md) | Medium | InitialAccess, Exfiltration, Collection, Reconnaissance | [`CyfirmaSPEConfidentialFilesAlerts_CL`](../tables/cyfirmaspeconfidentialfilesalerts-cl.md) |
| [CYFIRMA - Social and Public Exposure - Exposure of PII/CII in Public Domain Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-exposure-of-pii-cii-in-public-domain-rule-52d71822-41e4-4c21-b36f-400294f2b43a-b233ea7b.md) | High | InitialAccess, Exfiltration, Collection, CredentialAccess | [`CyfirmaSPEPIIAndCIIAlerts_CL`](../tables/cyfirmaspepiiandciialerts-cl.md) |
| [CYFIRMA - Social and Public Exposure - Exposure of PII/CII in Public Domain Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-exposure-of-pii-cii-in-public-domain-rule-b484f224-687f-4406-af8a-ff019f9f2c24-d3be53cc.md) | Medium | InitialAccess, Exfiltration, Collection, CredentialAccess | [`CyfirmaSPEPIIAndCIIAlerts_CL`](../tables/cyfirmaspepiiandciialerts-cl.md) |
| [CYFIRMA - Social and Public Exposure - Source Code Exposure on Public Repositories Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-source-code-exposure-on-public-repositories-rule-42e6f16a-7773-44cc-8668-8f648bd1aa4f-0dbc3dd5.md) | High | ResourceDevelopment, CredentialAccess, Discovery | [`CyfirmaSPESourceCodeAlerts_CL`](../tables/cyfirmaspesourcecodealerts-cl.md) |
| [CYFIRMA - Social and Public Exposure - Source Code Exposure on Public Repositories Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-source-code-exposure-on-public-repositories-rule-28e315a3-725d-4261-a6c2-e597d51541f4-fb2ff371.md) | Medium | ResourceDevelopment, CredentialAccess, Discovery | [`CyfirmaSPESourceCodeAlerts_CL`](../tables/cyfirmaspesourcecodealerts-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                     |
|-------------|--------------------------------|------------------------------------------------------------------------|
| 3.0.3       | 04-09-2025                     | Bugs fixes to **CCF Data Connector**.                                  |
| 3.0.2       | 24-07-2025                     | Minor changes and New analytics rules added to **CCF Data Connector**. |
| 3.0.1       | 17-06-2025                     | Minor changes to **CCF Data Connector**.                               |
| 3.0.0       | 14-04-2025                     | Initial Solution Release.                                              |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

