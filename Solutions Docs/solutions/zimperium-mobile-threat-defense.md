# Zimperium MTD for Sentinel

*Solution: Zimperium Mobile Threat Defense*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ZIMPERIUM-logo_orange.svg" alt="Zimperium Mobile Threat Defense Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Zimperium |
| **Support Tier** | Partner |
| **Support Link** | [https://www.zimperium.com/support/](https://www.zimperium.com/support/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Zimperium |
| **First Published** | 2022-05-02 |
| **Last Updated** | 2026-04-28 |
| **Solution Folder** | [Zimperium Mobile Threat Defense](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zimperium%20Mobile%20Threat%20Defense) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/zimperiuminc.zimperium_mobile_threat_defense_mss) · Popularity: 🔵 Medium (59%) |

The [Zimperium](https://www.zimperium.com/) Mobile Threat Defense solution gives you the ability to connect the [Zimperium Mobile Threat Defense](https://www.zimperium.com/mtd-maturity-model/) log with Microsoft Sentinel to view dashboards, create custom alerts, and improve investigation.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Codeless Connector Framework (CCF) Push](https://learn.microsoft.com/en-us/azure/sentinel/create-push-codeless-connector)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Zimperium Mobile Threat Defense CCF](../connectors/zimperiummtdpush.md)
- [Zimperium Mobile Threat Defense](../connectors/zimperiummtdalerts.md) ⚠️ 🔶

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ZimperiumMitigationLogV2_CL`](../tables/zimperiummitigationlogv2-cl.md) | [Zimperium Mobile Threat Defense CCF](../connectors/zimperiummtdpush.md) | - |
| [`ZimperiumMitigationLog_CL`](../tables/zimperiummitigationlog-cl.md) 🔶 | [Zimperium Mobile Threat Defense](../connectors/zimperiummtdalerts.md) | - |
| [`ZimperiumThreatLogV2_CL`](../tables/zimperiumthreatlogv2-cl.md) | [Zimperium Mobile Threat Defense CCF](../connectors/zimperiummtdpush.md) | Workbooks |
| [`ZimperiumThreatLog_CL`](../tables/zimperiumthreatlog-cl.md) 🔶 | [Zimperium Mobile Threat Defense](../connectors/zimperiummtdalerts.md) | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **2 content item(s)** (1 in solution, 1 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Workbooks | 2 | 1 | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ZimperiumMTDCCFWorkbooks](../content/zimperium-mobile-threat-defense-zimperiummtdccfworkbooks-2bb0d331.md) | [`ZimperiumThreatLogV2_CL`](../tables/zimperiumthreatlogv2-cl.md) |
| [ZimperiumWorkbooks](../content/zimperium-mobile-threat-defense-zimperiumworkbooks-53cb70da.md) ⚠️ | [`ZimperiumThreatLog_CL`](../tables/zimperiumthreatlog-cl.md) |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 28-04-2026                     | Added data ingestion support using CCF (Codeless Connector Framework) **Push connector**.|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

