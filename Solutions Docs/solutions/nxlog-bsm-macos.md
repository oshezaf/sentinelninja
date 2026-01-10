# NXLog BSM macOS

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NXLog.svg" alt="NXLog BSM macOS Logo" width="75" height="75">

The [NXLog BSM](https://docs.nxlog.co/refman/current/im/bsm.html) macOS data connector uses Sun's Basic Security Module (BSM) Auditing API to read events directly from the kernel for capturing audit events on the macOS platform. This REST API connector can efficiently export macOS audit events to Microsoft Sentinel in real-time.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | NXLog |
| **Support Tier** | Partner |
| **Support Link** | [https://nxlog.co/support-tickets/add/support-ticket](https://nxlog.co/support-tickets/add/support-ticket) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | NXLog |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLog%20BSM%20macOS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLog%20BSM%20macOS) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [NXLog BSM macOS](../connectors/nxlogbsmmacos.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BSMmacOS_CL`](../tables/bsmmacos-cl.md) | [NXLog BSM macOS](../connectors/nxlogbsmmacos.md) | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

