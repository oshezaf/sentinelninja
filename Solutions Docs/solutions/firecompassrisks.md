# FireCompass Risks for Microsoft Sentinel

*Solution: FireCompassRisks*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/firecompass.svg" alt="FireCompassRisks Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | FireCompass |
| **Support Tier** | Partner |
| **Support Link** | [https://www.firecompass.com/](https://www.firecompass.com/) |
| **Categories** | Security - Threat Protection,Security - Vulnerability Management |
| **Version** | 3.0.0 |
| **Author** | FireCompass - support@firecompass.com |
| **First Published** | 2026-08-05 |
| **Last Updated** | 2026-10-05 |
| **Solution Folder** | [FireCompassRisks](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FireCompassRisks) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/firecompass.firecompass-risks) · Popularity: 🟡 Low (48%) |

The **FireCompass Risks** solution provides a Codeless Connector Framework (CCF) data connector that pulls risk findings from the FireCompass platform REST API into Microsoft Sentinel. Risk records are ingested into the FCRisks_CL custom table for analysis, correlation with endpoint telemetry, and closed-loop remediation.

## Data Connectors

This solution provides **1 data connector(s)**:

- [FireCompass Risks](../connectors/firecompassrisksconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`FCRisks_CL`](../tables/fcrisks-cl.md) | [FireCompass Risks](../connectors/firecompassrisksconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 05-08-2026                     | Initial CCF pull connector for FireCompass risk findings |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

