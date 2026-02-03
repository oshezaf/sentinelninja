# Anvilogic

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Anvilogic.svg" alt="Anvilogic Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Anvilogic](https://www.anvilogic.com/) solution for Microsoft Sentinel enables you to ingest Anvilogic Alerts into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs:

a. [Codeless Connector Framework (CCF)](https://learn.microsoft.com/en-us/azure/sentinel/create-custom-connector)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Anvilogic |
| **Support Tier** | Partner |
| **Support Link** | [https://www.anvilogic.com/](https://www.anvilogic.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Anvilogic |
| **First Published** | 2025-06-20 |
| **Solution Folder** | [Anvilogic](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Anvilogic) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Anvilogic](../connectors/anvilogicccfdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Anvilogic_Alerts_CL`](../tables/anvilogic-alerts-cl.md) | [Anvilogic](../connectors/anvilogicccfdefinition.md) | Analytics |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Anvilogic Alert](../content/anvilogic-anvilogic-alert-6ccc187a-42ee-4635-8bcc-3b299f8570df-47d0e3ed.md) | Medium | - | [`Anvilogic_Alerts_CL`](../tables/anvilogic-alerts-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.0.0       | 20-06-2025                     | Initial Solution Release.                                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

