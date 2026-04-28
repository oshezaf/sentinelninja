# Datawiza Sentinel Solution

*Solution: Datawiza*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/datawiza_logo.svg" alt="Datawiza Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Datawiza Technology Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.datawiza.com/contact-us/](https://www.datawiza.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Datawiza Technology Inc. - support@datawiza.com |
| **First Published** | 2025-11-10 |
| **Last Updated** | 2026-01-15 |
| **Solution Folder** | [Datawiza](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datawiza) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/datawiza.datawiza-sentinel-solution-dap) · Popularity: ⚪ Very Low (0%) |

Send Datawiza Access Proxy access and MFA logs to Microsoft Sentinel for real-time security insights and analytics. Improve visibility, accelerate investigations, and meet audit/compliance requirements.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Datawiza DAP](../connectors/datawizadapsolution.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`datawizaserveraccess_CL`](../tables/datawizaserveraccess-cl.md) 🔶 | [Datawiza DAP](../connectors/datawizadapsolution.md) | Analytics |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Datawiza - massive errors detected](../content/datawiza-datawiza-massive-errors-detected-ddee1398-cf0b-46af-b583-78c3c29156dc-f782246e.md) | Medium | Discovery | [`datawizaserveraccess_CL`](../tables/datawizaserveraccess-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                     |
|-------------|--------------------------------|----------------------------------------|
| 3.0.1       | 03-05-2026                     | Added new analytics rules.             |
| 3.0.0       | 10-11-2025                     | Initial Solution Release.              |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

