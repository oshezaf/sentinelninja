# ShadowByte Aria

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/aria-logo.svg" alt="ShadowByte Aria Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Shadowbytes ARIA Threat Intelligence](https://shadowbyte.com/products/aria/) solution allows you to easily connect your Shadowbytes ARIA Threat Intelligence logs with Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Shadowbyte |
| **Support Tier** | Partner |
| **Support Link** | [https://shadowbyte.com/products/aria/](https://shadowbyte.com/products/aria/) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Shadowbyte |
| **First Published** | 2021-12-24 |
| **Solution Folder** | [ShadowByte Aria](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ShadowByte%20Aria) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`ShadowByteAriaForums_CL`](../tables/shadowbyteariaforums-cl.md) | Playbooks (writes) |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 2 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Enrich Incidents - ShadowByte Aria](../content/shadowbyte-aria-enrich-incidents-shadowbyte-aria-8de6b88b.md) | This playbook updates the Incident with the brach details if an account has been compromised. | - |
| [Search for Breaches - ShadowByte Aria](../content/shadowbyte-aria-search-for-breaches-shadowbyte-aria-1984dbe7.md) | This playbook updates the Incident with the brach details if an account has been compromised. | [`ShadowByteAriaForums_CL`](../tables/shadowbyteariaforums-cl.md) *(write)* |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

