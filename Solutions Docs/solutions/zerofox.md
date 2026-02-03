# ZeroFox

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/foxy-mark.svg" alt="ZeroFox Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [ZeroFox](https://www.zerofox.com/) solution for Microsoft Sentinel enables you to ingest [ZeroFox Alerts](https://www.zerofox.com/platform/) and [ZeroFox CTI events](https://www.zerofox.com/threat-intelligence/) into Microsoft Sentinel using the ZeroFox API. 

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ZeroFox |
| **Support Tier** | Partner |
| **Support Link** | [https://www.zerofox.com/contact-us/](https://www.zerofox.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.2.2 |
| **Author** | ZeroFox - integration-support@zerofox.com |
| **First Published** | 2023-07-28 |
| **Solution Folder** | [ZeroFox](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroFox) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [ZeroFox Enterprise - Alerts (Polling CCF)](../connectors/zerofoxalertsdefinition.md)
- [ZeroFox CTI](../connectors/zerofoxctidataconnector.md)

## Tables Used

This solution uses **21 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ZeroFoxAlertPoller_CL`](../tables/zerofoxalertpoller-cl.md) | [ZeroFox Enterprise - Alerts (Polling CCF)](../connectors/zerofoxalertsdefinition.md) | Analytics |
| [`ZeroFox_CTI_C2_CL`](../tables/zerofox-cti-c2-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_advanced_dark_web_CL`](../tables/zerofox-cti-advanced-dark-web-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_botnet_CL`](../tables/zerofox-cti-botnet-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_breaches_CL`](../tables/zerofox-cti-breaches-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_compromised_credentials_CL`](../tables/zerofox-cti-compromised-credentials-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_credit_cards_CL`](../tables/zerofox-cti-credit-cards-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_dark_web_CL`](../tables/zerofox-cti-dark-web-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_discord_CL`](../tables/zerofox-cti-discord-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_disruption_CL`](../tables/zerofox-cti-disruption-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_email_addresses_CL`](../tables/zerofox-cti-email-addresses-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_exploits_CL`](../tables/zerofox-cti-exploits-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_irc_CL`](../tables/zerofox-cti-irc-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_malware_CL`](../tables/zerofox-cti-malware-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_national_ids_CL`](../tables/zerofox-cti-national-ids-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_phishing_CL`](../tables/zerofox-cti-phishing-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_phone_numbers_CL`](../tables/zerofox-cti-phone-numbers-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_ransomware_CL`](../tables/zerofox-cti-ransomware-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_telegram_CL`](../tables/zerofox-cti-telegram-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_threat_actors_CL`](../tables/zerofox-cti-threat-actors-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |
| [`ZeroFox_CTI_vulnerabilities_CL`](../tables/zerofox-cti-vulnerabilities-cl.md) | [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) | - |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [ZeroFox Alerts - High Severity Alerts](../content/zerofox-zerofox-alerts-high-severity-alerts-deb45e6d-892f-40bf-9118-e2a6f26b788d-c9abb77d.md) | High | ResourceDevelopment, InitialAccess | [`ZeroFoxAlertPoller_CL`](../tables/zerofoxalertpoller-cl.md) |
| [ZeroFox Alerts - Informational Severity Alerts](../content/zerofox-zerofox-alerts-informational-severity-alerts-6f7a7413-b72f-4361-84ee-897baeb9c6d4-18c9cec2.md) | Informational | ResourceDevelopment, InitialAccess | [`ZeroFoxAlertPoller_CL`](../tables/zerofoxalertpoller-cl.md) |
| [ZeroFox Alerts - Low Severity Alerts](../content/zerofox-zerofox-alerts-low-severity-alerts-e0c7a91a-7aa1-498a-9c20-cd6c721f9345-7087702f.md) | Low | ResourceDevelopment, InitialAccess | [`ZeroFoxAlertPoller_CL`](../tables/zerofoxalertpoller-cl.md) |
| [ZeroFox Alerts - Medium Severity Alerts](../content/zerofox-zerofox-alerts-medium-severity-alerts-a6496de5-911b-4199-b7db-d34ac9d70df3-2805ff18.md) | Medium | ResourceDevelopment, InitialAccess | [`ZeroFoxAlertPoller_CL`](../tables/zerofoxalertpoller-cl.md) |

## Release Notes

| **Version**   | **Date Modified (DD-MM-YYYY)**   | **Change History**                                                                                  |
|---------------|----------------------------------|-----------------------------------------------------------------------------------------------------|
| 3.2.2         | 17-11-2025                       | Added **New CCF connector**.                                                                                   |
| 3.2.1         | 26-12-2024                       | Update alerts data connector version that fix issues in fetching updates                            |
| 3.2.0         | 26-09-2024                       | Changed query parameter in alerts connector for fetching updates                                    |
| 3.1.0         | 26-07-2024                       | Updated ZeroFox connector to generate result batches and implemented async Sentinel connector logic |
| 3.0.1         | 30-04-2024                       | Fixed Solution Metadata for deployment                                                              |
| 3.0.0         | 04-08-2023                       | Added **Data Connectors** for ZeroFox's Alerts and CTI feeds                                        |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

