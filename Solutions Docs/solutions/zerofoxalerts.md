# ZeroFox Alerts Connector

*Solution: ZeroFoxAlerts*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/foxy-mark.svg" alt="ZeroFoxAlerts Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ZeroFox |
| **Support Tier** | Partner |
| **Support Link** | [https://www.zerofox.com/contact-us/](https://www.zerofox.com/contact-us/) |
| **Categories** | Security - Threat Protection,Security - Automation (SOAR) |
| **Version** | 3.0.0 |
| **Author** | ZeroFox - integration-support@zerofox.com |
| **First Published** | 2026-04-01 |
| **Last Updated** | 2026-06-10 |
| **Solution Folder** | [ZeroFoxAlerts](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroFoxAlerts) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/zerofoxinc1695922129370.zerofox-alerts-sentinel-connector) · Popularity: ⚪ Very Low (1%) |

The [ZeroFox](https://www.zerofox.com/) solution for Microsoft Sentinel enables you to ingest [ZeroFox Alerts](https://www.zerofox.com/platform/) into Microsoft Sentinel using the ZeroFox API. 

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api).

## Data Connectors

This solution provides **1 data connector(s)**:

- [ZeroFox Alerts](../connectors/zerofoxalertsdefinition.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ZeroFoxAlertPoller_CL`](../tables/zerofoxalertpoller-cl.md) 🔶 | [ZeroFox Alerts](../connectors/zerofoxalertsdefinition.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.0.0       | 01-04-2026                     | Added **Data Connectors** for ZeroFox's Alerts.              |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

