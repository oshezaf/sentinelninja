# ESETPROTECT

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ESET Netherlands |
| **Support Tier** | Partner |
| **Support Link** | [https://techcenter.eset.nl/en/](https://techcenter.eset.nl/en/) |
| **Categories** | domains |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESETPROTECT](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESETPROTECT) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] ESET PROTECT](../connectors/esetprotect.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] ESET PROTECT](../connectors/esetprotect.md) | - |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Threats detected by ESET](../content/64badfab-1dd8-4491-927b-3ca206fa9a17.md) | Low | Execution | - |
| [Website blocked by ESET](../content/7b84fc5b-9ffb-4e9b-945b-5d480e330b3f.md) | Low | Exfiltration, CommandAndControl, InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ESETPROTECT](../content/esetprotect-esetprotect.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ESETPROTECT](../content/f54b254b-6ec6-4509-be49-e1df76e323c1.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 19-07-2024                     | Deprecating data connectors                   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
