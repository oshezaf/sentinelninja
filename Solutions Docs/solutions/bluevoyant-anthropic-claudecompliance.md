# BlueVoyant Anthropic ClaudeCompliance

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/BlueVoyant.svg" alt="BlueVoyant Anthropic ClaudeCompliance Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | BlueVoyant |
| **Support Tier** | Partner |
| **Support Link** | [https://www.bluevoyant.com/](https://www.bluevoyant.com/) |
| **Categories** | Security - Threat Protection,Security - Threat Intelligence |
| **Source Vendor** | BlueVoyant *(basis: publisher)* |
| **Version** | 3.0.0 |
| **Author** | BlueVoyant - soc@bluevoyant.com |
| **First Published** | 2026-06-09 |
| **Last Updated** | 2026-06-24 |
| **Solution Folder** | [BlueVoyant Anthropic ClaudeCompliance](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlueVoyant%20Anthropic%20ClaudeCompliance) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/bluevoyant1583844909747.azure-sentinel-solution-bv-claudecompliance) · Popularity: ⚪ Very Low (0%) |

The BlueVoyant Anthropic Claude Compliance solution for Microsoft Sentinel ingests compliance activity data from the Anthropic Claude Compliance API into your workspace. Using a Codeless Connector Framework (CCF) data connector, it continuously collects compliance events into the BV_ClaudeCompliance_ComplianceActivities_CL table for monitoring, hunting, and detection.

<p><span style="color:#FF0000;">Underlying Microsoft Technologies used:</span></p><p>This solution takes a dependency on the following technologies, and some of these dependencies either may be in <a href="https://azure.microsoft.com/support/legal/preview-supplemental-terms/">Preview</a> state or might result in additional ingestion or operational costs:</p><ul><li><a href="https://learn.microsoft.com/azure/sentinel/create-codeless-connector">Codeless Connector Framework (CCF) data connector</a></li><li><a href="https://learn.microsoft.com/azure/azure-monitor/data-collection/data-collection-rule-overview">Azure Monitor Data Collection Rules (DCR)</a></li><li><a href="https://learn.microsoft.com/azure/azure-monitor/data-collection/data-collection-endpoint-overview">Azure Monitor Data Collection Endpoints (DCE)</a></li><li><a href="https://learn.microsoft.com/azure/azure-monitor/logs/create-custom-table">Log Analytics custom tables</a></li></ul>

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [BV-ClaudeCompliance (via Codeless Connector Framework)](../connectors/bv-claudecompliance.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BV_ClaudeCompliance_ComplianceActivities_CL`](../tables/bv-claudecompliance-complianceactivities-cl.md) | [BV-ClaudeCompliance (via Codeless Connector Framework)](../connectors/bv-claudecompliance.md) | - |

## Additional Documentation

> 📄 *Source: [BlueVoyant Anthropic ClaudeCompliance/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlueVoyant%20Anthropic%20ClaudeCompliance/README.md)*

The BlueVoyant Anthropic Claude Compliance solution for Microsoft Sentinel ingests compliance activity data from the Anthropic Claude Compliance API into your workspace. Using a Codeless Connector Framework (CCF) data connector, it continuously collects compliance events into the BV_ClaudeCompliance_ComplianceActivities_CL table for monitoring, hunting, and detection.

## Support

- **Provider:** BlueVoyant
- **Email:** soc@bluevoyant.com
- **Link:** https://www.bluevoyant.com/

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.0       | 15-06-2026                     | Initial release of the BlueVoyant Anthropic Claude Compliance solution for Microsoft Sentinel, including a Codeless Connector Framework (CCF) data connector that ingests Claude Compliance API activity into the BV_ClaudeCompliance_ComplianceActivities_CL table. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

