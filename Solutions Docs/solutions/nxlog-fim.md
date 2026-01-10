# NXLog FIM

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NXLog.svg" alt="NXLog FIM Logo" width="75" height="75">

The [NXLog FIM](https://docs.nxlog.co/refman/current/im/fim.html) module allows for the scanning of files and directories, reporting detected additions, changes, renames and deletions on the designated paths through calculated checksums during successive scans. This REST API connector can efficiently export the configured FIM events to Microsoft Sentinel in real time.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | NXLog |
| **Support Tier** | Partner |
| **Support Link** | [https://nxlog.co/support-tickets/add/support-ticket](https://nxlog.co/support-tickets/add/support-ticket) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | NXLog - support@nxlog.org |
| **First Published** | 2022-08-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLog%20FIM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLog%20FIM) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [NXLog FIM](../connectors/nxlogfim.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NXLogFIM_CL`](../tables/nxlogfim-cl.md) | [NXLog FIM](../connectors/nxlogfim.md) | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

