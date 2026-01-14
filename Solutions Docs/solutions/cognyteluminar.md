# CognyteLuminar

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CognyteLuminar.svg" alt="CognyteLuminar Logo" width="75" height="75">

Luminar IOCs and Leaked Credentials connector allows integration of intelligence-based IOC data and customer-related leaked records identified by Luminar.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cognyte Luminar |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cognyte.com/contact/](https://www.cognyte.com/contact/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Cognyte |
| **First Published** | 2023-09-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CognyteLuminar](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CognyteLuminar) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Luminar IOCs and Leaked Credentials](../connectors/cognyteluminar.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [Luminar IOCs and Leaked Credentials](../connectors/cognyteluminar.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 15-04-2025                     | Added Cognyte Luminar Taxii Server          |
| 3.0.1       | 07-08-2024                     | Updated the python runtime version to 3.11  |
| 3.0.0       | 15-09-2023                     | Initial Solution Release                    |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

