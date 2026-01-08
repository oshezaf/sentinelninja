# Beyond Security beSECURE

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Beyond%20Security%20Logo.svg" alt="Beyond Security beSECURE Logo" width="75" height="75">

The [Beyond Security beSECURE](https://www.beyondsecurity.com/) Solution for Microsoft Sentinel allows you to easily connect your Beyond Security beSECURE scan events, scan results and audit trail with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization's network and improves your security operation capabilities.

**Underlying Microsoft Technologies used: **

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:  

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Beyond Security |
| **Support Tier** | Partner |
| **Support Link** | [https://beyondsecurity.freshdesk.com/support/home](https://beyondsecurity.freshdesk.com/support/home) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Beyond Security - isv@email.com |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Beyond%20Security%20beSECURE](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Beyond%20Security%20beSECURE) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [Beyond Security beSECURE](../connectors/beyondsecuritybesecure.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`beSECURE_Audit_CL`](../tables/besecure-audit-cl.md) | [Beyond Security beSECURE](../connectors/beyondsecuritybesecure.md) | - |
| [`beSECURE_ScanEvent_CL`](../tables/besecure-scanevent-cl.md) | [Beyond Security beSECURE](../connectors/beyondsecuritybesecure.md) | - |
| [`beSECURE_ScanResults_CL`](../tables/besecure-scanresults-cl.md) | [Beyond Security beSECURE](../connectors/beyondsecuritybesecure.md) | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
