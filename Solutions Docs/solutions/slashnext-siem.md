# SlashNext SIEM

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/SlashNext%20SIEM/Playbook/logo/slashnext-logo.svg" alt="SlashNext SIEM Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Slashnext SIEM logic app retrieves incidents associated with a customer from various sources such as SMS, mobile devices, web extensions, and emails. These incidents are then presented and recorded within the Log Analytic Workspace.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SlashNext |
| **Support Tier** | Partner |
| **Support Link** | [https://slashnext.com/support](https://slashnext.com/support) |
| **Categories** | domains |
| **Version** | 3.1.0 |
| **Author** | SlashNext - support@slashnext.net |
| **First Published** | 2023-05-26 |
| **Last Updated** | 2023-06-16 |
| **Solution Folder** | [SlashNext SIEM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlashNext%20SIEM) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`SlashNext_CL`](../tables/slashnext-cl.md) | Playbooks (writes) |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 1 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SlashNext Security Events for Microsoft Sentinel - Get customer incidents and log](../content/slashnext-siem-slashnext-security-events-for-microsoft-sentinel-get-customer-incidents-and-log-a81ddf6c.md) | The playbook will run after every 3 mintues to get list of events occured to a customer in that time... | [`SlashNext_CL`](../tables/slashnext-cl.md) *(write)* |

## Release Notes

| **Version** | **Date**   | **Change History**               |
|-------------|------------|----------------------------------|
| 3.1.0       | 10-07-2024 | Integrated API for detailed data |
| 3.0.0       | 25-04-2024 | Initial Solution Release         |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

