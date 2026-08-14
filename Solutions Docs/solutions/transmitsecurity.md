# ⚠️ Transmit Security Data Connector for Microsoft Sentinel

*Solution: TransmitSecurity*

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://github.com/Azure/Azure-Sentinel/raw/refs/heads/master/Logos/Transmit_Security_Logo.svg" alt="TransmitSecurity Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Transmit Security |
| **Support Tier** | Partner |
| **Support Link** | [https://transmitsecurity.com/support](https://transmitsecurity.com/support) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.2 |
| **Author** | Transmit Security |
| **First Published** | 2024-06-10 |
| **Last Updated** | 2026-08-10 |
| **Solution Folder** | [TransmitSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TransmitSecurity) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/transmitsecurity.microsoft-sentinel-solution-transmitsecurity) · Popularity: 🟡 Low (40%) |

The [Transmit Security] data connector provides the capability to ingest common Transmit Security API events into Microsoft Sentinel through the REST API. [Refer to API documentation for more information](https://developer.transmitsecurity.com/). The connector provides ability to get events which helps to examine potential security risks, analyze your team's use of collaboration, diagnose configuration problems and more.

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Transmit Security Connector](../connectors/transmitsecurity.md) ⚠️ 🔶
- [Transmit Security Data Connector (via Codeless Connector Framework)](../connectors/transmitsecurityconnectordefinition.md)

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`TransmitSecurityActivity_CL`](../tables/transmitsecurityactivity-cl.md) 🔶 | [Transmit Security Connector](../connectors/transmitsecurity.md) | - |
| [`TransmitSecurityActivity_V2_CL`](../tables/transmitsecurityactivity-v2-cl.md) | [Transmit Security Data Connector (via Codeless Connector Framework)](../connectors/transmitsecurityconnectordefinition.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** |                 **Change History**                  |
|-------------|--------------------------------|-----------------------------------------------------|
| 3.0.2       | 13-07-2026                     | Update data connector from the deprecated Azure Function connector to CCF | 
| 3.0.1       | 03-09-2024                     | Updated the python runtime version to 3.11          |
| 3.0.0       | 11-07-2024                     | Initial Solution Release                            |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

