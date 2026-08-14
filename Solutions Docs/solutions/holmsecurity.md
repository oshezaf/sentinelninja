# Holm Security for Microsoft Sentinel

*Solution: HolmSecurity*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/HolmSecurity.svg" alt="HolmSecurity Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Holm Security |
| **Support Tier** | Partner |
| **Support Link** | [https://support.holmsecurity.com/](https://support.holmsecurity.com/) |
| **Categories** | Security - Vulnerability Management |
| **Version** | 3.0.2 |
| **Author** | Holm Security - support@holmsecurity.com |
| **First Published** | 2022-07-18 |
| **Last Updated** | 2026-05-19 |
| **Solution Folder** | [HolmSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HolmSecurity) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/holmsecurityswedenab1639511288603.holmsecurity_sc_sentinel) · Popularity: 🟡 Low (46%) |

The [Holm Security](https://www.holmsecurity.com/) solution for Microsoft Sentinel provides the capability to ingest network and web asset data from the [Holm Security Vulnerability Management Platform (VMP)](https://www.holmsecurity.com/) into Microsoft Sentinel through the [REST API](https://se-api.holmsecurity.com/docs/v2/).

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[DEPRECATED] Holm Security Asset Data (using Azure Function)](../connectors/holmsecurityassets.md) ⚠️ 🔶
- [Holm Security Data Connector](../connectors/holmsecurityccf.md) 🔶

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`net_assets_CL`](../tables/net-assets-cl.md) 🔶 | [Holm Security Data Connector](../connectors/holmsecurityccf.md), [[DEPRECATED] Holm Security Asset Data (using Azure Function)](../connectors/holmsecurityassets.md) | - |
| [`web_assets_CL`](../tables/web-assets-cl.md) 🔶 | [Holm Security Data Connector](../connectors/holmsecurityccf.md), [[DEPRECATED] Holm Security Asset Data (using Azure Function)](../connectors/holmsecurityassets.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.2       | 30-03-2026                     | Initial release of the **Data Connector** for Holm Security using CCF; ingests network and web assets from the Holm Security VMP API, supports pagination, daily polling, and configurable regional API base URLs. |
| 3.0.1       | 05-10-2023                     | Minor fixes. |
| 3.0.0       | 28-09-2023                     | Repackaged with V3. |
| 2.0.0       | 17-02-2022                     | Initial Solution Release. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

