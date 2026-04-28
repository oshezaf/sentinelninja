# D3Security Sentinel Solution

*Solution: D3SmartSOAR*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/D3SOAR.svg" alt="D3SmartSOAR Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | D3 Security |
| **Support Tier** | Partner |
| **Support Link** | [https://d3security.com/company/contact/](https://d3security.com/company/contact/) |
| **Categories** | domains |
| **Version** | 3.3.0 |
| **Author** | D3 Security - support@d3security.com |
| **First Published** | 2026-02-18 |
| **Last Updated** | 2026-04-17 |
| **Solution Folder** | [D3SmartSOAR](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/D3SmartSOAR) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/d3securitymanagementsystemsinc1599258630765.azure-sentinel-solution-d3smartsoar) · Popularity: ⚪ Very Low (0%) |

The D3 Smart SOAR solution for Microsoft Sentinel enables ingestion of D3 Smart SOAR alerts and events into Microsoft Sentinel via a codeless connector.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [D3 Smart SOAR Incidents](../connectors/d3soarconnectordefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`D3SOARIncidents_CL`](../tables/d3soarincidents-cl.md) | [D3 Smart SOAR Incidents](../connectors/d3soarconnectordefinition.md) | Analytics |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [D3 Smart SOAR - High or critical severity incident detected](../content/d3smartsoar-d3-smart-soar-high-or-critical-severity-incident-detected-48ef0be4-8240-4a03-bbb9-320b562d6ce4-a012d8d0.md) | High | Impact | [`D3SOARIncidents_CL`](../tables/d3soarincidents-cl.md) |

## Additional Documentation

> 📄 *Source: [D3SmartSOAR/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/D3SmartSOAR/README.md)*

# D3 Smart SOAR — Microsoft Sentinel Connector

## Prerequisites

Before connecting, configure the Time Zone of your D3 Smart SOAR site:

1. In D3 Smart SOAR, go to **Organization Management → Sites**.
2. Select the site you are connecting to Microsoft Sentinel.
3. Set the **Time Zone** to **(UTC+00:00) Coordinated Universal Time**.

This ensures incident timestamps align correctly with Microsoft Sentinel's polling window.

## Resources

- Privacy Policy: https://d3security.com/privacy-policy/
- Support: https://d3security.com/company/contact/

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.3.0       | 13-04-2026                     | Added analytics rule for High and Critical severity incident detection. |
| 3.2.0       | 01-04-2026                     | Changed to Solution Template plan type. Updated offer ID to azure-sentinel-solution-d3smartsoar. |
| 3.1.0       | 26-03-2026                     | Fixed pagination using CountBasedPaging with nested JSON path paging (`$.CommandParams.PageIndex`). Updated publisher ID to match Partner Center registration. Updated branding to Microsoft Sentinel. |
| 3.0.0       | 27-02-2026                     | Initial release of D3 Smart SOAR data connector. Polls incidents every 5 minutes into D3SOARIncidents_CL with IncidentRawData and EventRawData dynamic fields via PollFromSentinel parameter. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

