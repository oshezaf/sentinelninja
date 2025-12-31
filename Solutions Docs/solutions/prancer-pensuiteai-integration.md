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

This solution provides **1 data connector(s)**:

- [Prancer Data Connector](../connectors/prancerlogdata.md)

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
| [Disks Alerts From Prancer](../content/8c484ef9-d758-4827-9920-f4f77158f03e.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Flow Logs Alerts for Prancer](../content/59336232-1bbc-4f66-90dd-5ac3708e4405.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [NetworkSecurityGroups Alert From Prancer](../content/a8babf91-b844-477c-8abf-d31e3df74933.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [PAC high severity](../content/7caa1c03-d20b-42f2-ac95-5232f6e570da.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Registries Alerts for Prancer](../content/08706063-c15e-4d96-beae-9e8d92ccefbb.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Sites Alerts for Prancer](../content/bbeb2f26-cb99-4e4b-900f-24ce9809142d.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Storage Accounts Alerts From Prancer](../content/4adf2b5d-6b88-4b96-8cc2-a3c7fbbee10b.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Subnets Alerts for Prancer](../content/10be8f37-d83c-4b7e-81c2-1271c51ac09f.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Vaults Alerts for Prancer](../content/0b76eef3-5dc0-41b1-9f67-fffa7783f5f6.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [Virtual Machines Alerts for Prancer](../content/c13b025c-ea31-4e4b-8e08-955b8fa91fa0.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |
| [VirtualNetworkPeerings Alerts From Prancer](../content/6bd031cf-78d0-4edd-8191-60f84b6eef7a.md) | High | Reconnaissance | [`prancer_CL`](../tables/prancer-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Hunting Query for Failed CSPM Scan Items](../content/322591e4-5b68-4574-be00-2e1b618eab7c.md) | Collection | [`prancer_CL`](../tables/prancer-cl.md) |
| [Hunting Query for High Severity PAC findings](../content/37cb2dea-7a62-4a8d-923b-d588c6372608.md) | Collection | [`prancer_CL`](../tables/prancer-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PrancerSentinelAnalytics](../content/prancersentinelanalytics-prancer-pensuiteai-integration.md) | [`prancer_CL`](../tables/prancer-cl.md) |

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
- [Content Index](../content-index.md)
