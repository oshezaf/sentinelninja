# WithSecure™ Elements via CCF for Microsoft Sentinel

*Solution: WithSecureElementsCCF*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/WithSecure.svg" alt="WithSecureElementsCCF Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | WithSecure |
| **Support Tier** | Partner |
| **Support Link** | [https://www.withsecure.com/en/support](https://www.withsecure.com/en/support) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | WithSecure - project-msp-integrations@withsecure.com |
| **First Published** | 2026-06-08 |
| **Last Updated** | 2026-07-10 |
| **Solution Folder** | [WithSecureElementsCCF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WithSecureElementsCCF) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/withsecurecorporation.sentinel-solution-withsecure-elements-ccf) · Popularity: 🟡 Low (47%) |

WithSecure Elements is the unified cloud-based cyber security platform designed to reduce risk, complexity, and inefficiency.
Elevate your security from your endpoints to your cloud applications. Arm yourself against every type of cyber threat, from targeted attacks to zero-day ransomware.
WithSecure Elements combines powerful predictive, preventive, and responsive security capabilities - all managed and monitored through a single security center. Our modular structure and flexible pricing models give you the freedom to evolve. With our expertise and insight, you'll always be empowered - and you'll never be alone.
With Microsoft Sentinel integration, you can correlate [security events](https://connect.withsecure.com/api-reference/security-events#overview) data from the WithSecure Elements solution with data from other sources, enabling a rich overview of your entire environment and faster reaction to threats.
This solution uses the Codeless Connector Framework (CCF) to natively poll the WithSecure Elements security-events API — no Azure Function, Storage Account or Key Vault required.
For more information visit our website at: [https://www.withsecure.com](https://www.withsecure.com).

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [WithSecure Elements (CCF)](../connectors/withsecureelementsccf.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`WsSecurityEvents_CL`](../tables/wssecurityevents-cl.md) | [WithSecure Elements (CCF)](../connectors/withsecureelementsccf.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [WithSecureTopComputersByInfections](../content/withsecureelementsccf-withsecuretopcomputersbyinfections-3b140dfe.md) | [`WsSecurityEvents_CL`](../tables/wssecurityevents-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                                           |
|-------------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| 3.0.0       | 08-06-2026                     | Initial release. WithSecure Elements data connector built on the Codeless Connector Framework (CCF) and the "Top computers by infections" workbook. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

