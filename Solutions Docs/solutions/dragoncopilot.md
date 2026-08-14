# DragonCopilot solution for Sentinel

*Solution: DragonCopilot*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DragonCopilot_logo.svg" alt="DragonCopilot Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Application,Healthcare |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-07-30 |
| **Last Updated** | 2026-08-14 |
| **Solution Folder** | [DragonCopilot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DragonCopilot) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-dragoncopilot) · Popularity: ⚪ Very Low (0%) |

Microsoft Dragon Copilot is an AI-powered clinical assistant that captures and processes clinician interactions to generate structured clinical documentation and activity records. It leverages conversational, ambient, and generative AI to streamline clinical workflows, improve documentation efficiency, and surface actionable insights for healthcare professionals—including clinicians, nurses, and radiologists. Dragon Copilot activity logs represent administrative and user-level events (e.g., interactions, generated outputs, and system actions), making this connector the central ingestion point for admin, audit, and operational logs for the Dragon Copilot workload. Within the Microsoft Sentinel integration context, Dragon Copilot emits audit and activity signals representing user interactions and system-generated outputs. These signals enable security monitoring, compliance auditing, and operational visibility across healthcare workflows.

## Data Connectors

This solution provides **1 data connector(s)**:

- [Dragon Copilot](../connectors/dragoncopilotnative.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DragonCopilot`](../tables/dragoncopilot.md) | [Dragon Copilot](../connectors/dragoncopilotnative.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 30-07-2026                     | Releasing a new Microsoft Dragon Copilot solution in Content Hub with a **Data Connector** that ingests Dragon Copilot audit and activity logs into the standard **DragonCopilot** table |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

