# Prancer PenSuiteAI Integration

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Prancer PenSuiteAI Integration |
| **Support Tier** | Partner |
| **Support Link** | [https://www.prancer.io](https://www.prancer.io) |
| **Categories** | domains |
| **First Published** | 2023-08-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Prancer%20PenSuiteAI%20Integration](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Prancer%20PenSuiteAI%20Integration) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [Prancer Data Connector](../connectors/prancerlogdata.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`prancer_CL`](../tables/prancer-cl.md) | [Prancer Data Connector](../connectors/prancerlogdata.md) | Analytics, Hunting, Workbooks |

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
| [Disks Alerts From Prancer](../content/prancer-pensuiteai-integration-disks-alerts-from-prancer-8c484ef9-d758-4827-9920-f4f77158f03e-68b007b3.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Flow Logs Alerts for Prancer](../content/prancer-pensuiteai-integration-flow-logs-alerts-for-prancer-59336232-1bbc-4f66-90dd-5ac3708e4405-d4069eb4.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [NetworkSecurityGroups Alert From Prancer](../content/prancer-pensuiteai-integration-networksecuritygroups-alert-from-prancer-a8babf91-b844-477c-8abf-d31e3df74933-55e376e3.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [PAC high severity](../content/prancer-pensuiteai-integration-pac-high-severity-7caa1c03-d20b-42f2-ac95-5232f6e570da-633aead8.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Registries Alerts for Prancer](../content/prancer-pensuiteai-integration-registries-alerts-for-prancer-08706063-c15e-4d96-beae-9e8d92ccefbb-f9077415.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Sites Alerts for Prancer](../content/prancer-pensuiteai-integration-sites-alerts-for-prancer-bbeb2f26-cb99-4e4b-900f-24ce9809142d-a31ca03e.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Storage Accounts Alerts From Prancer](../content/prancer-pensuiteai-integration-storage-accounts-alerts-from-prancer-4adf2b5d-6b88-4b96-8cc2-a3c7fbbee10b-bd7c3258.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Subnets Alerts for Prancer](../content/prancer-pensuiteai-integration-subnets-alerts-for-prancer-10be8f37-d83c-4b7e-81c2-1271c51ac09f-bc56763f.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Vaults Alerts for Prancer](../content/prancer-pensuiteai-integration-vaults-alerts-for-prancer-0b76eef3-5dc0-41b1-9f67-fffa7783f5f6-72954fb5.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Virtual Machines Alerts for Prancer](../content/prancer-pensuiteai-integration-virtual-machines-alerts-for-prancer-c13b025c-ea31-4e4b-8e08-955b8fa91fa0-cecfef04.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [VirtualNetworkPeerings Alerts From Prancer](../content/prancer-pensuiteai-integration-virtualnetworkpeerings-alerts-from-prancer-6bd031cf-78d0-4edd-8191-60f84b6eef7a-4bd81a33.md) ⚠️ | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Hunting Query for Failed CSPM Scan Items](../content/prancer-pensuiteai-integration-hunting-query-for-failed-cspm-scan-items-322591e4-5b68-4574-be00-2e1b618eab7c-0f2f8db3.md) ⚠️ | Collection | [`prancer_CL`](../tables/prancer-cl.md) |
| [Hunting Query for High Severity PAC findings](../content/prancer-pensuiteai-integration-hunting-query-for-high-severity-pac-findings-37cb2dea-7a62-4a8d-923b-d588c6372608-4b151227.md) ⚠️ | Collection | [`prancer_CL`](../tables/prancer-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PrancerSentinelAnalytics](../content/prancer-pensuiteai-integration-prancersentinelanalytics-90750e32.md) ⚠️ | [`prancer_CL`](../tables/prancer-cl.md) |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                           |
|-------------|--------------------------------|----------------------------------------------|
| 3.0.1       | 19-03-2024                     | Updated **Workbook**, **Analytic Rules** and **Hunting Queries**                    |
| 3.0.0       | 20-09-2023                     | Initial Solution Release                    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
