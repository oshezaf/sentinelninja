# Palo Alto - XDR (Cortex)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** |  |
| **Support Tier** |  |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Palo%20Alto%20-%20XDR%20%28Cortex%29](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Palo%20Alto%20-%20XDR%20%28Cortex%29) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [Palo Alto Networks Cortex XDR](../connectors/paloaltonetworkscortex.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Palo Alto Networks Cortex XDR](../connectors/paloaltonetworkscortex.md) | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |
| Playbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PaloAltoXDR](../content/palo-alto-xdr-cortex-paloaltoxdr-404625dc.md) ⚠️ | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PaloAltoXDR](../content/palo-alto-xdr-cortex-paloaltoxdr-ca954375.md) ⚠️ | 1. Overview 1. Prerequisites 1. Deploy Palo Alot XDR playbook 1. Deployment Instructions 1. Post-Dep... | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

