# NXLog LinuxAudit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NXLog.svg" alt="NXLog LinuxAudit Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | NXLog |
| **Support Tier** | Partner |
| **Support Link** | [https://nxlog.co/support-tickets/add/support-ticket](https://nxlog.co/support-tickets/add/support-ticket) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | NXLog |
| **First Published** | 2022-05-05 |
| **Solution Folder** | [NXLog LinuxAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLog%20LinuxAudit) |

The [NXLog LinuxAudit](https://docs.nxlog.co/refman/current/im/linuxaudit.html) solution for Microsoft Sentinel enables you to ingest Linux security events. NXLog LinuxAudit supports custom audit rules and collects logs without auditd or any other user-space software. IP addresses and group/user IDs are resolved to their respective names making [Linux audit](https://docs.nxlog.co/userguide/integrate/linux-audit.html) logs more intelligible to security analysts.

## Data Connectors

This solution provides **1 data connector(s)**:

- [NXLog LinuxAudit](../connectors/nxloglinuxaudit.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`LinuxAudit_CL`](../tables/linuxaudit-cl.md) 🔶 | [NXLog LinuxAudit](../connectors/nxloglinuxaudit.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

