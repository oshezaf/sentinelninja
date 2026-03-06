# Egress Iris

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Egress-logo.svg" alt="Egress Iris Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Egress Software Technologies Ltd |
| **Support Tier** | Partner |
| **Support Link** | [https://support.egress.com](https://support.egress.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Egress - support@egress.com |
| **First Published** | 2024-03-11 |
| **Solution Folder** | [Egress Iris](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Iris) |

Egress SIEM Connector for Microsoft Sentinel

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Egress Iris Connector](../connectors/egresssiempolling.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`EgressDefend_CL`](../tables/egressdefend-cl.md) 🔶 | [Egress Iris Connector](../connectors/egresssiempolling.md) | - |
| [`EgressEvents_CL`](../tables/egressevents-cl.md) | [Egress Iris Connector](../connectors/egresssiempolling.md) | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PreventWorkbook](../content/egress-iris-preventworkbook-e3444c6a.md) | [`EgressEvents_CL`](../tables/egressevents-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 17-04-2024                     | Initial Solution Release                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

