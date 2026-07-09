# ⚠️ ZeroFox Threat Intelligence

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/foxy-mark.svg" alt="ZeroFox Threat Intelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ZeroFox |
| **Support Tier** | Partner |
| **Support Link** | [https://www.zerofox.com/contact-us/](https://www.zerofox.com/contact-us/) |
| **Categories** | Security - Threat Protection,Security - Automation (SOAR) |
| **Source Vendor** | ZeroFox *(basis: publisher)* |
| **Version** | 3.0.0 |
| **Author** | ZeroFox - integration-support@zerofox.com |
| **First Published** | 2026-02-18 |
| **Solution Folder** | [ZeroFox Threat Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroFox%20Threat%20Intelligence) |

The [ZeroFox](https://www.zerofox.com/) solution for Microsoft Sentinel enables you to ingest [ZeroFox Threat Intelligence](https://www.zerofox.com/threat-intelligence/) into Microsoft Sentinel using the ZeroFox API. 

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-ingestion-api-overview).

## Data Connectors

This solution provides **17 data connector(s)**:

- [ZeroFox Enterprise - Advanced Dark Web](../connectors/zerofoxadvanceddarkwebdefinition.md)
- [ZeroFox Enterprise - Botnet Compromised Credentials](../connectors/zerofoxbotnetccdefinition.md)
- [ZeroFox Enterprise - Botnet](../connectors/zerofoxbotnetdefinition.md)
- [ZeroFox Enterprise - Breaches](../connectors/zerofoxbreachesdefinition.md)
- [ZeroFox Enterprise - Compromised Credentials](../connectors/zerofoxcompromisedcredentialsdefinition.md)
- [ZeroFox Enterprise - Credit Cards](../connectors/zerofoxcreditcardsdefinition.md)
- [ZeroFox Enterprise - Dark Web](../connectors/zerofoxdarkwebdefinition.md)
- [ZeroFox Enterprise - Discord](../connectors/zerofoxdiscorddefinition.md)
- [ZeroFox Enterprise - Disruption](../connectors/zerofoxdisruptiondefinition.md)
- [ZeroFox Enterprise - Email Addresses](../connectors/zerofoxemailaddressesdefinition.md)
- [ZeroFox Enterprise - Exploits](../connectors/zerofoxexploitsdefinition.md)
- [ZeroFox Enterprise - Indicators](../connectors/zerofoxindicatorsdefinition.md)
- [ZeroFox Enterprise - Key Incidents](../connectors/zerofoxkeyincidentsdefinition.md)
- [ZeroFox Enterprise - National IDs](../connectors/zerofoxnationalidsdefinition.md)
- [ZeroFox Enterprise - Physical Threats](../connectors/zerofoxphysicalthreatsdefinition.md)
- [ZeroFox Enterprise - Telegram](../connectors/zerofoxtelegramdefinition.md)
- [ZeroFox Enterprise - Vulnerabilities](../connectors/zerofoxvulnerabilitiesdefinition.md)

## Tables Used

This solution uses **17 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ZeroFoxAdvancedDarkWeb_CL`](../tables/zerofoxadvanceddarkweb-cl.md) | [ZeroFox Enterprise - Advanced Dark Web](../connectors/zerofoxadvanceddarkwebdefinition.md) | - |
| [`ZeroFoxBotnetCC_CL`](../tables/zerofoxbotnetcc-cl.md) | [ZeroFox Enterprise - Botnet Compromised Credentials](../connectors/zerofoxbotnetccdefinition.md) | - |
| [`ZeroFoxBotnet_CL`](../tables/zerofoxbotnet-cl.md) | [ZeroFox Enterprise - Botnet](../connectors/zerofoxbotnetdefinition.md) | - |
| [`ZeroFoxBreaches_CL`](../tables/zerofoxbreaches-cl.md) | [ZeroFox Enterprise - Breaches](../connectors/zerofoxbreachesdefinition.md) | - |
| [`ZeroFoxCompromisedCredentials_CL`](../tables/zerofoxcompromisedcredentials-cl.md) | [ZeroFox Enterprise - Compromised Credentials](../connectors/zerofoxcompromisedcredentialsdefinition.md) | - |
| [`ZeroFoxCreditCards_CL`](../tables/zerofoxcreditcards-cl.md) | [ZeroFox Enterprise - Credit Cards](../connectors/zerofoxcreditcardsdefinition.md) | - |
| [`ZeroFoxDarkWeb_CL`](../tables/zerofoxdarkweb-cl.md) | [ZeroFox Enterprise - Dark Web](../connectors/zerofoxdarkwebdefinition.md) | - |
| [`ZeroFoxDiscord_CL`](../tables/zerofoxdiscord-cl.md) | [ZeroFox Enterprise - Discord](../connectors/zerofoxdiscorddefinition.md) | - |
| [`ZeroFoxDisruption_CL`](../tables/zerofoxdisruption-cl.md) | [ZeroFox Enterprise - Disruption](../connectors/zerofoxdisruptiondefinition.md) | - |
| [`ZeroFoxEmailAddresses_CL`](../tables/zerofoxemailaddresses-cl.md) | [ZeroFox Enterprise - Email Addresses](../connectors/zerofoxemailaddressesdefinition.md) | - |
| [`ZeroFoxExploits_CL`](../tables/zerofoxexploits-cl.md) | [ZeroFox Enterprise - Exploits](../connectors/zerofoxexploitsdefinition.md) | - |
| [`ZeroFoxIndicators_CL`](../tables/zerofoxindicators-cl.md) | [ZeroFox Enterprise - Indicators](../connectors/zerofoxindicatorsdefinition.md) | - |
| [`ZeroFoxKeyIncidents_CL`](../tables/zerofoxkeyincidents-cl.md) | [ZeroFox Enterprise - Key Incidents](../connectors/zerofoxkeyincidentsdefinition.md) | - |
| [`ZeroFoxNationalIds_CL`](../tables/zerofoxnationalids-cl.md) | [ZeroFox Enterprise - National IDs](../connectors/zerofoxnationalidsdefinition.md) | - |
| [`ZeroFoxPhysicalThreats_CL`](../tables/zerofoxphysicalthreats-cl.md) | [ZeroFox Enterprise - Physical Threats](../connectors/zerofoxphysicalthreatsdefinition.md) | - |
| [`ZeroFoxTelegram_CL`](../tables/zerofoxtelegram-cl.md) | [ZeroFox Enterprise - Telegram](../connectors/zerofoxtelegramdefinition.md) | - |
| [`ZeroFoxVulnerabilities_CL`](../tables/zerofoxvulnerabilities-cl.md) | [ZeroFox Enterprise - Vulnerabilities](../connectors/zerofoxvulnerabilitiesdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.0.0       | 01-04-2026                     | Added **Data Connectors** for ZeroFox's Threat Intelligence. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

