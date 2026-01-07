# Obsidian Datasharing

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/obsidian_security_logo.svg" alt="Obsidian Datasharing Logo" width="75" height="75">

The Obsidian Datasharing solution for Microsoft Sentinel enables you to ingest Obsidian events into your Microsoft Sentinel Analytics Workspace.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Obsidian Security |
| **Support Tier** | Partner |
| **Support Link** | [https://obsidiansecurity.com/contact](https://obsidiansecurity.com/contact) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Timothy Zhou - tzhou@obsidiansecurity.com |
| **First Published** | 2024-01-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Obsidian%20Datasharing](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Obsidian%20Datasharing) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Obsidian Datasharing Connector](../connectors/obsidiandatasharing.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ObsidianActivity_CL`](../tables/obsidianactivity-cl.md) | [Obsidian Datasharing Connector](../connectors/obsidiandatasharing.md) | - |
| [`ObsidianThreat_CL`](../tables/obsidianthreat-cl.md) | [Obsidian Datasharing Connector](../connectors/obsidiandatasharing.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 25-09-2025                     | Initial Solution Release.                   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
