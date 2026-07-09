# Prancer PenSuite AI

*Solution: Prancer PensuiteAI Integration*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Prancer.svg" alt="Prancer PensuiteAI Integration Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Prancer PenSuiteAI Integration |
| **Support Tier** | Partner |
| **Support Link** | [https://www.prancer.io](https://www.prancer.io) |
| **Categories** | Security - Threat Protection,DevOps |
| **Source Vendor** | Prancer *(basis: publisher)* |
| **Version** | 3.0.0 |
| **Author** | Prancer |
| **First Published** | 2023-08-02 |
| **Solution Folder** | [Prancer PenSuiteAI Integration](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Prancer%20PenSuiteAI%20Integration) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/prancerenterprise1600813133757.microsoft-sentinel-solution-prancer) · Popularity: ⚪ Very Low (0%) |

The Prancer solution for Microsoft Sentinel enables you to ingest data from the Prancer portal for PAC and CSPM scans. Refer to [Prancer Documentation Site](https://docs.prancer.io/web/) for more information.

**Underlying Microsoft Technologies used:**

This solution is dependent on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a.  [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) 
 
 b.  [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Prancer Data Connector](../connectors/prancerlogdata.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`prancer_CL`](../tables/prancer-cl.md) 🔶 | [Prancer Data Connector](../connectors/prancerlogdata.md) | Analytics, Hunting, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **14 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 11 |
| Hunting Queries | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Disks Alerts From Prancer](../content/prancer-pensuiteai-integration-disks-alerts-from-prancer-8c484ef9-d758-4827-9920-f4f77158f03e-23416112.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Flow Logs Alerts for Prancer](../content/prancer-pensuiteai-integration-flow-logs-alerts-for-prancer-59336232-1bbc-4f66-90dd-5ac3708e4405-72e2fad9.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [NetworkSecurityGroups Alert From Prancer](../content/prancer-pensuiteai-integration-networksecuritygroups-alert-from-prancer-a8babf91-b844-477c-8abf-d31e3df74933-eb7ac46a.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [PAC high severity](../content/prancer-pensuiteai-integration-pac-high-severity-7caa1c03-d20b-42f2-ac95-5232f6e570da-68b6570f.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Registries Alerts for Prancer](../content/prancer-pensuiteai-integration-registries-alerts-for-prancer-08706063-c15e-4d96-beae-9e8d92ccefbb-24c9cc5e.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Sites Alerts for Prancer](../content/prancer-pensuiteai-integration-sites-alerts-for-prancer-bbeb2f26-cb99-4e4b-900f-24ce9809142d-5b489163.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Storage Accounts Alerts From Prancer](../content/prancer-pensuiteai-integration-storage-accounts-alerts-from-prancer-4adf2b5d-6b88-4b96-8cc2-a3c7fbbee10b-3428feb9.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Subnets Alerts for Prancer](../content/prancer-pensuiteai-integration-subnets-alerts-for-prancer-10be8f37-d83c-4b7e-81c2-1271c51ac09f-e9a03647.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Vaults Alerts for Prancer](../content/prancer-pensuiteai-integration-vaults-alerts-for-prancer-0b76eef3-5dc0-41b1-9f67-fffa7783f5f6-9e72e923.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Virtual Machines Alerts for Prancer](../content/prancer-pensuiteai-integration-virtual-machines-alerts-for-prancer-c13b025c-ea31-4e4b-8e08-955b8fa91fa0-aef7c25d.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [VirtualNetworkPeerings Alerts From Prancer](../content/prancer-pensuiteai-integration-virtualnetworkpeerings-alerts-from-prancer-6bd031cf-78d0-4edd-8191-60f84b6eef7a-31453452.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Hunting Query for Failed CSPM Scan Items](../content/prancer-pensuiteai-integration-hunting-query-for-failed-cspm-scan-items-322591e4-5b68-4574-be00-2e1b618eab7c-f3f9773b.md) | Collection | [`prancer_CL`](../tables/prancer-cl.md) |
| [Hunting Query for High Severity PAC findings](../content/prancer-pensuiteai-integration-hunting-query-for-high-severity-pac-findings-37cb2dea-7a62-4a8d-923b-d588c6372608-27744bcd.md) | Collection | [`prancer_CL`](../tables/prancer-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PrancerSentinelAnalytics](../content/prancer-pensuiteai-integration-prancersentinelanalytics-cba49168.md) | [`prancer_CL`](../tables/prancer-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                           |
|-------------|--------------------------------|----------------------------------------------|
| 3.0.1       | 19-03-2024                     | Updated **Workbook**, **Analytic Rules** and **Hunting Queries**                    |
| 3.0.0       | 20-09-2023                     | Initial Solution Release                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

