# Netcraft

*Solution: NetcraftIntegrationGateway*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/netcraft.svg" alt="NetcraftIntegrationGateway Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Netcraft |
| **Support Tier** | Partner |
| **Support Link** | [https://www.netcraft.com/contact](https://www.netcraft.com/contact) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Netcraft - info@netcraft.com |
| **First Published** | 2026-10-02 |
| **Last Updated** | 2026-10-26 |
| **Solution Folder** | [NetcraftIntegrationGateway](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetcraftIntegrationGateway) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/netcraft.azure-sentinel-solution-netcraft-igw) · Popularity: 🟡 Low (18%) |

Netcraft is a global leader in cybercrime detection and takedown, protecting the world's biggest brands and their customers from phishing, scams and online fraud.

This solution brings that intelligence directly into Microsoft Sentinel. Takedown activity, domain detection results, Social (Fraud Detection) findings across social media, advertising platforms and mobile app stores, and deep and dark web matches all flow into dedicated tables, where pre-built analytics rules turn them into incidents in your existing queue. Workbooks give operational dashboards per product area, and hunting queries support proactive investigation. Your SOC can triage external threats in the same place as everything else, without leaving the Defender portal.

Connection takes a single API key. No Azure Functions, no additional infrastructure.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Netcraft Integration Gateway](../connectors/netcraftintegrationgatewaydefinition.md)

## Tables Used

This solution uses **7 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NetcraftAdvertResult_CL`](../tables/netcraftadvertresult-cl.md) | [Netcraft Integration Gateway](../connectors/netcraftintegrationgatewaydefinition.md) | Analytics, Hunting, Workbooks |
| [`NetcraftAppResult_CL`](../tables/netcraftappresult-cl.md) | [Netcraft Integration Gateway](../connectors/netcraftintegrationgatewaydefinition.md) | Analytics, Hunting, Workbooks |
| [`NetcraftDdwIntelligence_CL`](../tables/netcraftddwintelligence-cl.md) | [Netcraft Integration Gateway](../connectors/netcraftintegrationgatewaydefinition.md) | Analytics, Hunting, Workbooks |
| [`NetcraftDomainDetection_CL`](../tables/netcraftdomaindetection-cl.md) | [Netcraft Integration Gateway](../connectors/netcraftintegrationgatewaydefinition.md) | Analytics, Hunting, Workbooks |
| [`NetcraftSearchTask_CL`](../tables/netcraftsearchtask-cl.md) | [Netcraft Integration Gateway](../connectors/netcraftintegrationgatewaydefinition.md) | - |
| [`NetcraftSocialResult_CL`](../tables/netcraftsocialresult-cl.md) | [Netcraft Integration Gateway](../connectors/netcraftintegrationgatewaydefinition.md) | Analytics, Hunting, Workbooks |
| [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) | [Netcraft Integration Gateway](../connectors/netcraftintegrationgatewaydefinition.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **43 content item(s)** (42 in solution, 1 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Analytic Rules | 16 | 16 | - |
| Parsers | 14 | 14 | - |
| Workbooks | 7 | 6 | 1 |
| Hunting Queries | 6 | 6 | - |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Netcraft Advert - High risk result](../content/netcraftintegrationgateway-netcraft-advert-high-risk-result-a4b5c6d7-e8f9-4012-abcd-ef1234567e03-23301556.md) | High | ResourceDevelopment, InitialAccess | [`NetcraftAdvertResult_CL`](../tables/netcraftadvertresult-cl.md) |
| [Netcraft Advert - Pending client input](../content/netcraftintegrationgateway-netcraft-advert-pending-client-input-b5c6d7e8-f901-4123-bcde-f1234567e103-c5137515.md) | Medium | ResourceDevelopment, InitialAccess | [`NetcraftAdvertResult_CL`](../tables/netcraftadvertresult-cl.md) |
| [Netcraft App - High risk result](../content/netcraftintegrationgateway-netcraft-app-high-risk-result-a4b5c6d7-e8f9-4012-abcd-ef1234567e02-87c4a1a4.md) | High | ResourceDevelopment, InitialAccess | [`NetcraftAppResult_CL`](../tables/netcraftappresult-cl.md) |
| [Netcraft App - Pending client input](../content/netcraftintegrationgateway-netcraft-app-pending-client-input-b5c6d7e8-f901-4123-bcde-f1234567e102-d0a0a39a.md) | Medium | ResourceDevelopment, InitialAccess | [`NetcraftAppResult_CL`](../tables/netcraftappresult-cl.md) |
| [Netcraft DDW Intelligence - High priority match](../content/netcraftintegrationgateway-netcraft-ddw-intelligence-high-priority-match-114e0c34-5e32-42a8-a0fc-3e3c8291bee9-20946a0b.md) | High | Reconnaissance, CredentialAccess | [`NetcraftDdwIntelligence_CL`](../tables/netcraftddwintelligence-cl.md) |
| [Netcraft DDW Intelligence - Takedown eligible match](../content/netcraftintegrationgateway-netcraft-ddw-intelligence-takedown-eligible-match-8da040d4-bd02-47ae-86b5-db527a8b4f18-b38d7cec.md) | Medium | Reconnaissance, ResourceDevelopment | [`NetcraftDdwIntelligence_CL`](../tables/netcraftddwintelligence-cl.md) |
| [Netcraft DDW Intelligence - Unacknowledged high priority](../content/netcraftintegrationgateway-netcraft-ddw-intelligence-unacknowledged-high-priority-f788b740-86af-46b2-b986-c059c5e5b908-1f3b7b73.md) | High | Reconnaissance, CredentialAccess | [`NetcraftDdwIntelligence_CL`](../tables/netcraftddwintelligence-cl.md) |
| [Netcraft Domain Detection - High risk result](../content/netcraftintegrationgateway-netcraft-domain-detection-high-risk-result-3eb13794-d9a5-44c0-a633-09ee5a5dd6b5-3e773d3d.md) | High | ResourceDevelopment, InitialAccess | [`NetcraftDomainDetection_CL`](../tables/netcraftdomaindetection-cl.md) |
| [Netcraft Domain Detection - Newly registered high risk](../content/netcraftintegrationgateway-netcraft-domain-detection-newly-registered-high-risk-56ea5c80-8dd5-4c7c-a656-5f7af0c64429-2d48ec73.md) | High | ResourceDevelopment, InitialAccess | [`NetcraftDomainDetection_CL`](../tables/netcraftdomaindetection-cl.md) |
| [Netcraft Domain Detection - Preemptive disruption](../content/netcraftintegrationgateway-netcraft-domain-detection-preemptive-disruption-9284825d-3f0f-4ca2-a2f3-44a2a229909e-701d9226.md) | Medium | ResourceDevelopment, InitialAccess | [`NetcraftDomainDetection_CL`](../tables/netcraftdomaindetection-cl.md) |
| [Netcraft Social - High risk result](../content/netcraftintegrationgateway-netcraft-social-high-risk-result-a4b5c6d7-e8f9-4012-abcd-ef1234567e01-7dbcb893.md) | High | ResourceDevelopment, InitialAccess | [`NetcraftSocialResult_CL`](../tables/netcraftsocialresult-cl.md) |
| [Netcraft Social - Pending client input](../content/netcraftintegrationgateway-netcraft-social-pending-client-input-b5c6d7e8-f901-4123-bcde-f1234567e101-c025787f.md) | Medium | ResourceDevelopment, InitialAccess | [`NetcraftSocialResult_CL`](../tables/netcraftsocialresult-cl.md) |
| [Netcraft Takedown - Important note changed](../content/netcraftintegrationgateway-netcraft-takedown-important-note-changed-0a0416c5-277a-4a2b-9815-7b457fdffd81-38972724.md) | Medium | ResourceDevelopment | [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) |
| [Netcraft Takedown - New takedown](../content/netcraftintegrationgateway-netcraft-takedown-new-takedown-68ff493b-de53-472b-9a34-15b1453060a1-d1d7dc1a.md) | High | ResourceDevelopment, InitialAccess | [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) |
| [Netcraft Takedown - Resolved](../content/netcraftintegrationgateway-netcraft-takedown-resolved-6de7eb0b-693c-4d4a-a263-d047f88f167f-0f536dfa.md) | Informational | ResourceDevelopment | [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) |
| [Netcraft Takedown - Waiting for customer](../content/netcraftintegrationgateway-netcraft-takedown-waiting-for-customer-f2cd0583-da5f-4edc-a4ad-1a237643c228-83999f7c.md) | High | ResourceDevelopment, DefenseEvasion | [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Netcraft Advert - Result inventory](../content/netcraftintegrationgateway-netcraft-advert-result-inventory-b5c6d7e8-f9a0-4123-bcde-f12345678903-3bbd8876.md) | ResourceDevelopment, Reconnaissance | [`NetcraftAdvertResult_CL`](../tables/netcraftadvertresult-cl.md) |
| [Netcraft App - Result inventory](../content/netcraftintegrationgateway-netcraft-app-result-inventory-b5c6d7e8-f9a0-4123-bcde-f12345678902-c6454b9f.md) | ResourceDevelopment, Reconnaissance | [`NetcraftAppResult_CL`](../tables/netcraftappresult-cl.md) |
| [Netcraft DDW Intelligence - Match inventory](../content/netcraftintegrationgateway-netcraft-ddw-intelligence-match-inventory-51b52e04-30b4-4ff1-b5ea-e875a5c5808b-6fd7b5ee.md) | Reconnaissance | [`NetcraftDdwIntelligence_CL`](../tables/netcraftddwintelligence-cl.md) |
| [Netcraft Domain Detection - Result inventory](../content/netcraftintegrationgateway-netcraft-domain-detection-result-inventory-21a97101-ac38-43fc-874c-36d8e6b96169-e89df150.md) | ResourceDevelopment, Reconnaissance | [`NetcraftDomainDetection_CL`](../tables/netcraftdomaindetection-cl.md) |
| [Netcraft Social - Result inventory](../content/netcraftintegrationgateway-netcraft-social-result-inventory-b5c6d7e8-f9a0-4123-bcde-f12345678901-acda5d00.md) | ResourceDevelopment, Reconnaissance | [`NetcraftSocialResult_CL`](../tables/netcraftsocialresult-cl.md) |
| [Netcraft Takedown - Latest record inventory](../content/netcraftintegrationgateway-netcraft-takedown-latest-record-inventory-d945aaaf-39a1-46b2-8046-4f982eaa9839-55b3e3d8.md) | ResourceDevelopment, InitialAccess | [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NetcraftAdvertResultOperations](../content/netcraftintegrationgateway-netcraftadvertresultoperations-3d43ca25.md) | [`NetcraftAdvertResult_CL`](../tables/netcraftadvertresult-cl.md) |
| [NetcraftAppResultOperations](../content/netcraftintegrationgateway-netcraftappresultoperations-9d14d9c5.md) | [`NetcraftAppResult_CL`](../tables/netcraftappresult-cl.md) |
| [NetcraftDdwIntelligenceOperations](../content/netcraftintegrationgateway-netcraftddwintelligenceoperations-a47033fe.md) | [`NetcraftDdwIntelligence_CL`](../tables/netcraftddwintelligence-cl.md) |
| [NetcraftDomainDetectionOperations](../content/netcraftintegrationgateway-netcraftdomaindetectionoperations-e4a0b68e.md) | [`NetcraftDomainDetection_CL`](../tables/netcraftdomaindetection-cl.md) |
| [NetcraftSocialResultOperations](../content/netcraftintegrationgateway-netcraftsocialresultoperations-f55f478f.md) | [`NetcraftSocialResult_CL`](../tables/netcraftsocialresult-cl.md) |
| [NetcraftTakedownOperations](../content/netcraftintegrationgateway-netcrafttakedownoperations-0b55219f.md) | [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) |
| [WorkbooksMetadata](../content/netcraftintegrationgateway-workbooksmetadata-5750a626.md) ⚠️ | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NetcraftAdvertResult_Latest](../parsers/netcraftadvertresult-latest.md) | - | [`NetcraftAdvertResult_CL`](../tables/netcraftadvertresult-cl.md) *(read)* |
| [NetcraftAdvertResult_Unique](../parsers/netcraftadvertresult-unique.md) | - | [`NetcraftAdvertResult_CL`](../tables/netcraftadvertresult-cl.md) *(read)* |
| [NetcraftAppResult_Latest](../parsers/netcraftappresult-latest.md) | - | [`NetcraftAppResult_CL`](../tables/netcraftappresult-cl.md) *(read)* |
| [NetcraftAppResult_Unique](../parsers/netcraftappresult-unique.md) | - | [`NetcraftAppResult_CL`](../tables/netcraftappresult-cl.md) *(read)* |
| [NetcraftDdwIntelligence_Latest](../parsers/netcraftddwintelligence-latest.md) | - | [`NetcraftDdwIntelligence_CL`](../tables/netcraftddwintelligence-cl.md) *(read)* |
| [NetcraftDdwIntelligence_Unique](../parsers/netcraftddwintelligence-unique.md) | - | [`NetcraftDdwIntelligence_CL`](../tables/netcraftddwintelligence-cl.md) *(read)* |
| [NetcraftDomainDetection_Latest](../parsers/netcraftdomaindetection-latest.md) | - | [`NetcraftDomainDetection_CL`](../tables/netcraftdomaindetection-cl.md) *(read)* |
| [NetcraftDomainDetection_Unique](../parsers/netcraftdomaindetection-unique.md) | - | [`NetcraftDomainDetection_CL`](../tables/netcraftdomaindetection-cl.md) *(read)* |
| [NetcraftSearchTask_Latest](../parsers/netcraftsearchtask-latest.md) | - | [`NetcraftSearchTask_CL`](../tables/netcraftsearchtask-cl.md) *(read)* |
| [NetcraftSearchTask_Unique](../parsers/netcraftsearchtask-unique.md) | - | [`NetcraftSearchTask_CL`](../tables/netcraftsearchtask-cl.md) *(read)* |
| [NetcraftSocialResult_Latest](../parsers/netcraftsocialresult-latest.md) | - | [`NetcraftSocialResult_CL`](../tables/netcraftsocialresult-cl.md) *(read)* |
| [NetcraftSocialResult_Unique](../parsers/netcraftsocialresult-unique.md) | - | [`NetcraftSocialResult_CL`](../tables/netcraftsocialresult-cl.md) *(read)* |
| [NetcraftTakedown_Latest](../parsers/netcrafttakedown-latest.md) | - | [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) *(read)* |
| [NetcraftTakedown_Unique](../parsers/netcrafttakedown-unique.md) | - | [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 02-10-2026 | Initial release. CCF RestApiPoller connector for the Netcraft Integration Gateway, with parsers, workbooks, analytic rules, and hunting queries for Takedown, Domain Detection, Deep & Dark Web, Social, App, and Advert. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

