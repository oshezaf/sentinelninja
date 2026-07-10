# ⚠️ Agari Solution

*Solution: Agari*

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/agari_logo.svg" alt="Agari Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Security - Threat Protection |
| **Source Vendor** | Agari *(basis: publisher)* |
| **Source Product** | Phishing Defense and Brand Protection |
| **Version** | 3.0.0 |
| **Author** | Agari - support@agari.com |
| **First Published** | 2026-05-14 |
| **Last Updated** | 2026-05-22 |
| **Solution Folder** | [Agari](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-agari) · Popularity: 🔵 Medium (64%) |

Agari Phishing Defense and Brand Protection Solution for Microsoft Sentinel makes it easy to connect Agari email threat data to the Microsoft Sentinel SOAR, improving visibility into email threats, accelerating incident response, and driving SOC efficiency. The Agari Data Connector included in the solution supports every Agari product: [Agari Brand Protection](https://www.agari.com/insights/solution-briefs/agari-brand-protection/), [Agari Phishing Defense](https://www.agari.com/products/phishing-defense/), and [Agari Phishing Response](https://www.agari.com/products/phishing-response/). Leveraging Agari data to enrich and share threat intelligence across multiple applications helps safeguard your entire infrastructure against email threats. For more details about this solution refer to [https://www.agari.com/insights/solution-briefs/microsoft-azure-sentinel-integration/](https://www.agari.com/insights/solution-briefs/microsoft-azure-sentinel-integration/)

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Codeless Connector Framework (CCF)](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)

b. [Log Ingestion API](https://docs.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

c. [Data Collection Rules (DCR)](https://docs.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Agari Phishing Defense and Brand Protection](../connectors/agari.md) ⚠️ 🔶
- [Fortra Agari Data Connector (via Codeless Connector Framework)](../connectors/agariconnector.md)

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **8 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AgariAPDPolicyLog_CL`](../tables/agariapdpolicylog-cl.md) | [Fortra Agari Data Connector (via Codeless Connector Framework)](../connectors/agariconnector.md) | - |
| [`AgariAPDTCLog_CL`](../tables/agariapdtclog-cl.md) | [Fortra Agari Data Connector (via Codeless Connector Framework)](../connectors/agariconnector.md) | - |
| [`AgariAPRInvestigationsLog_CL`](../tables/agariaprinvestigationslog-cl.md) | [Fortra Agari Data Connector (via Codeless Connector Framework)](../connectors/agariconnector.md) | - |
| [`AgariBPAlertsLog_CL`](../tables/agaribpalertslog-cl.md) | [Fortra Agari Data Connector (via Codeless Connector Framework)](../connectors/agariconnector.md) | - |
| [`AgariBPThreatFeedSubs_CL`](../tables/agaribpthreatfeedsubs-cl.md) | [Fortra Agari Data Connector (via Codeless Connector Framework)](../connectors/agariconnector.md) | - |
| [`agari_apdpolicy_log_CL`](../tables/agari-apdpolicy-log-cl.md) 🔶 | [Agari Phishing Defense and Brand Protection](../connectors/agari.md) | - |
| [`agari_apdtc_log_CL`](../tables/agari-apdtc-log-cl.md) 🔶 | [Agari Phishing Defense and Brand Protection](../connectors/agari.md) | - |
| [`agari_bpalerts_log_CL`](../tables/agari-bpalerts-log-cl.md) | [Agari Phishing Defense and Brand Protection](../connectors/agari.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.0.0       | 14-05-2026                     | Created a Data Connector for Agari CCF Container.            |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

