# NXLog LinuxAudit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NXLog.svg" alt="NXLog LinuxAudit Logo" width="75" height="75">

The [NXLog LinuxAudit](https://docs.nxlog.co/refman/current/im/linuxaudit.html) solution for Microsoft Sentinel enables you to ingest Linux security events. NXLog LinuxAudit supports custom audit rules and collects logs without auditd or any other user-space software. IP addresses and group/user IDs are resolved to their respective names making [Linux audit](https://docs.nxlog.co/userguide/integrate/linux-audit.html) logs more intelligible to security analysts.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | NXLog |
| **Support Tier** | Partner |
| **Support Link** | [https://nxlog.co/support-tickets/add/support-ticket](https://nxlog.co/support-tickets/add/support-ticket) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | NXLog |
| **First Published** | 2022-05-05 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLog%20LinuxAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLog%20LinuxAudit) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [NXLog LinuxAudit](../connectors/nxloglinuxaudit.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`LinuxAudit_CL`](../tables/linuxaudit-cl.md) | [NXLog LinuxAudit](../connectors/nxloglinuxaudit.md) | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

