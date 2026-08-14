# panorays-solution-for-azure-sentinel

*Solution: Panorays*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Panorays Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Panorays |
| **Support Tier** | Partner |
| **Support Link** | [https://support.panoraysapp.com/](https://support.panoraysapp.com/) |
| **Categories** | Security - Vulnerability Management |
| **Version** | 3.0.1 |
| **Author** | Panorays - support@panorays.com |
| **First Published** | 2026-04-01 |
| **Last Updated** | 2026-08-12 |
| **Solution Folder** | [Panorays](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Panorays) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/panorays.panorays-solution-for-azure-sentinel) · Popularity: 🔵 Medium (70%) |

The [Panorays](https://panorays.com/) solution provides the capability to ingest company findings from the Panorays API into Microsoft Sentinel using the Codeless Connector Framework (CCF).

**Underlying Microsoft Technologies used:**

  a. [Codeless Connector Framework](https://learn.microsoft.com/en-us/azure/sentinel/create-codeless-connector)

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Panorays](../connectors/panorays-connectordefinition.md)
- [Panorays (Manual)](../connectors/[resourceid-'microsoft.operationalinsights-workspaces-providers-dataconnectordefinitions',-parameters-'workspacename'-,-'microsoft.securityinsights',-variables-'connectordefinitionname'-].md) ⚠️

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PanoraysCompanyFindingPOC_CL`](../tables/panorayscompanyfindingpoc-cl.md) | [Panorays](../connectors/panorays-connectordefinition.md), [Panorays (Manual)](../connectors/[resourceid-'microsoft.operationalinsights-workspaces-providers-dataconnectordefinitions',-parameters-'workspacename'-,-'microsoft.securityinsights',-variables-'connectordefinitionname'-].md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|------------|-------------------------------|--------------------|
| 3.0.1      | 05-08-2026                    | Fixed offer name mismatch between Partner Center and SolutionMetadata.json.<br>Fixed dcrConfig parameter reference chain in mainTemplate.json.<br>Updated connector definition and poller config per Microsoft Support guidance.<br>Converted required field from string to boolean in connector validations.<br>Bumped package version to 3.0.1 per Partner Center versioning requirement. |
| 3.0.0      | 03-03-2026                    | Includes all CCF connector definitions and configurations. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

