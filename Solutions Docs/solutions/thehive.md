# TheHive

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="TheHive Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[TheHive](http://thehive-project.org/) solution provides the capability to ingest common The Hive events into Microsoft Sentinel through Webhooks. The Hive can notify external system of modification events (case creation, alert update, task assignment) in real time. When a change occurs in The Hive, an HTTPS POST request with event information is sent to a callback data connector URL.  Refer to [Webhooks documentation](https://docs.thehive-project.org/thehive/legacy/thehive3/admin/webhooks/) for more information.
 
**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 
 
 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) b. [Azure Functions ](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-23 |
| **Solution Folder** | [TheHive](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TheHive) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [TheHive Project - TheHive](../connectors/thehiveprojectthehive.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`TheHive_CL`](../tables/thehive-cl.md) | [TheHive Project - TheHive](../connectors/thehiveprojectthehive.md) | - |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Parsers | 1 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [The Hive - Create alert](../content/thehive-the-hive-create-alert-8e031e26.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [The Hive - Create case](../content/thehive-the-hive-create-case-b237f99e.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [The Hive - Lock user](../content/thehive-the-hive-lock-user-7287740c.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TheHive](../content/thehive-thehive-407fa318-596b-4d69-b154-46a56d2117a0-600fc60f.md) | - | [`TheHive_CL`](../tables/thehive-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.0       | 05-09-2023                     | Manual deployment instructions updated for **Data Connector**		|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

