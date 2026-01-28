# EatonForeseer

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="EatonForeseer Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[Eaton Foreseer](https://www.eaton.com/in/en-us/catalog/services/foreseer.html) OT application generates logs into Microsoft Sentinel using MMA or AMA, use the Analytics template for creating Analytic Rules on unauthorized login attempts into the application and gain insights into login activity using the provided workbooks.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-28 |
| **Solution Folder** | [EatonForeseer](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/EatonForeseer) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`SecurityEvent`](../tables/securityevent.md) | Analytics, Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [EatonForeseer - Unauthorized Logins](../content/eatonforeseer-eatonforeseer-unauthorized-logins-5a7fccb8-3ed0-44f2-8477-540af3ef4d92-5a9d46ba.md) | High | InitialAccess | [`SecurityEvent`](../tables/securityevent.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [EatonForeseerHealthAndAccess](../content/eatonforeseer-eatonforeseerhealthandaccess-aeaee6f8.md) | [`SecurityEvent`](../tables/securityevent.md) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

