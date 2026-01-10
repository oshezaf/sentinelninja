# NXLogAixAudit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NXLog.svg" alt="NXLogAixAudit Logo" width="75" height="75">

The [NXLog AIX Audit](https://docs.nxlog.co/refman/current/im/aixaudit.html) solution uses the AIX Audit subsystem to read events directly from the kernel for capturing audit events into Microsoft Sentinel on the AIX platform.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs

 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

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
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLogAixAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLogAixAudit) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [NXLog AIX Audit](../connectors/nxlogaixaudit.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AIX_Audit_CL`](../tables/aix-audit-cl.md) | [NXLog AIX Audit](../connectors/nxlogaixaudit.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NXLog_parsed_AIX_Audit_view](../content/nxlogaixaudit-nxlog-parsed-aix-audit-view-1bae8e14-6819-4d26-b91d-019b078a80a9-75e181f4.md) ⚠️ | - | - |

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

