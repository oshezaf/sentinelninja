# Tropico

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Tropico.svg" alt="Tropico Logo" width="75" height="75">

The [Tropico](https://www.tropicosecurity.com/) solution for Microsoft Sentinel enables you to ingest Tropico Security Events, Alerts and Incidents to the Microsoft Sentinel platform.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | TROPICO Security |
| **Support Tier** | Partner |
| **Support Link** | [https://tropicosecurity.com/](https://tropicosecurity.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Tropico Security - dev@tropicosecurity.com |
| **First Published** | 2025-12-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tropico](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tropico) |

## Data Connectors

This solution provides **3 data connector(s)**:

- [Tropico Security - Alerts](../connectors/tropicoalertsdefinition.md)
- [Tropico Security - Events](../connectors/tropicoeventsdefinition.md)
- [Tropico Security - Incidents](../connectors/tropicoincidentsdefinition.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Tropico_Alerts_CL`](../tables/tropico-alerts-cl.md) | [Tropico Security - Alerts](../connectors/tropicoalertsdefinition.md) | - |
| [`Tropico_Events_CL`](../tables/tropico-events-cl.md) | [Tropico Security - Events](../connectors/tropicoeventsdefinition.md) | - |
| [`Tropico_Incidents_CL`](../tables/tropico-incidents-cl.md) | [Tropico Security - Incidents](../connectors/tropicoincidentsdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 02-12-2025                     | Initial release  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

