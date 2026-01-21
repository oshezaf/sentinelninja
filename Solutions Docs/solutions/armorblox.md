# ⚠️ Armorblox

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Armorblox/Data%20Connectors/Logo/armorblox.svg" alt="Armorblox Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Armorblox](https://www.armorblox.com/) solution provides the capability to ingest incidents from your Armorblox instance into Microsoft Sentinel through the REST API.
  
  **Underlying Microsoft Technologies used:** 

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

 

  b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Armorblox |
| **Support Tier** | Partner |
| **Support Link** | [https://www.armorblox.com/contact/](https://www.armorblox.com/contact/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Armorblox - support@armorblox.com |
| **First Published** | 2021-10-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Armorblox](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Armorblox) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Armorblox](../connectors/armorblox.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Armorblox_CL`](../tables/armorblox-cl.md) | [Armorblox](../connectors/armorblox.md) | Analytics, Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Armorblox Needs Review Alert](../content/armorblox-armorblox-needs-review-alert-322d4765-be6b-4868-9e3f-138a4f339dd6-4344e5d8.md) | Medium | - | [`Armorblox_CL`](../tables/armorblox-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ArmorbloxOverview](../content/armorblox-armorbloxoverview-181ded5b.md) | [`Armorblox_CL`](../tables/armorblox-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Needs-Review-Incident-Email-Notification](../content/armorblox-needs-review-incident-email-notification-0bf41abc.md) | This playbook will send an email notification when a new incident is created in Microsoft Sentinel. | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       |     11-09-2024                 | Updated the python runtime version to 3.11  |
| 3.0.0       |     23-11-2023                 | Added entity mapping in **Analytical Rule** [Armorblox Needs Review Alert] |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

