# XBOW Sentinel Connector

*Solution: XBOW*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/XBOW.svg" alt="XBOW Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | XBOW |
| **Support Tier** | Partner |
| **Support Link** | [https://docs.xbow.com](https://docs.xbow.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | XBOW - support@xbow.com |
| **First Published** | 2026-03-04 |
| **Last Updated** | 2026-03-23 |
| **Solution Folder** | [XBOW](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/XBOW) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/xbowinc.xbow-sentinel-connector) · Popularity: ⚪ Very Low (0%) |

The **XBOW** solution ingests assets, assessment activity, and vulnerability findings from the [XBOW Security Platform](https://console.xbow.com) into Microsoft Sentinel. XBOW is an AI-powered autonomous penetration testing platform that continuously discovers and validates vulnerabilities in your web applications. This connector surfaces enriched findings — including proof-of-concept evidence, reproduction recipes, impact assessments, and mitigation guidance — directly in your Microsoft Sentinel workspace.

  **Data tables:**

  - `XbowFindings_CL` — Vulnerability findings with full detail (severity, evidence, PoC, impact, mitigations)

  - `XbowAssessments_CL` — Pentest assessment lifecycle and progress

  **Underlying Microsoft Technologies used:**

  This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor Ingestion API (DCE/DCR)](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

  b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)



## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [XBOW Security Platform (via Azure Function)](../connectors/xbowsecurityconnector.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`XbowAssessments_CL`](../tables/xbowassessments-cl.md) | [XBOW Security Platform (via Azure Function)](../connectors/xbowsecurityconnector.md) | - |
| [`XbowAssets_CL`](../tables/xbowassets-cl.md) | [XBOW Security Platform (via Azure Function)](../connectors/xbowsecurityconnector.md) | Analytics |
| [`XbowFindings_CL`](../tables/xbowfindings-cl.md) | [XBOW Security Platform (via Azure Function)](../connectors/xbowsecurityconnector.md) | Analytics |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [XbowCriticalHighFindings](../content/xbow-xbowcriticalhighfindings-f8e7d6c5-4b3a-4912-8f0e-2d1c3b4a5678-cfec1e39.md) | High | InitialAccess, Execution, PrivilegeEscalation, DefenseEvasion, Impact | [`XbowAssets_CL`](../tables/xbowassets-cl.md)<br>[`XbowFindings_CL`](../tables/xbowfindings-cl.md) |
| [XbowLowFindings](../content/xbow-xbowlowfindings-d2e4f1a8-7c9b-4356-8e0d-5a2b7c8e9f01-be196e24.md) | Low | Discovery | [`XbowAssets_CL`](../tables/xbowassets-cl.md)<br>[`XbowFindings_CL`](../tables/xbowfindings-cl.md) |
| [XbowMediumFindings](../content/xbow-xbowmediumfindings-b3c5e2f9-6a8d-4127-9b2e-4f6a8c9d0e12-25358c30.md) | Medium | Discovery, Reconnaissance, CredentialAccess | [`XbowAssets_CL`](../tables/xbowassets-cl.md)<br>[`XbowFindings_CL`](../tables/xbowfindings-cl.md) |
| [XbowNewAssetDiscovered](../content/xbow-xbownewassetdiscovered-e4c6a8b2-9d7f-4285-a1e3-6b9c2e4f1a85-196d4b10.md) | Medium | Reconnaissance, Discovery | [`XbowAssets_CL`](../tables/xbowassets-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 17-03-2026                     | Initial Solution Release. Added XBOW Function App Data Connector. Added Analytic Rules for Critical/High, Medium, Low findings, and Asset Discovery.<br> Updated short link. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

