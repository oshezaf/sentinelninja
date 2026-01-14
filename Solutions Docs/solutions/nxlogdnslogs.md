# ⚠️ NXLogDNSLogs

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NXLog.svg" alt="NXLogDNSLogs Logo" width="75" height="75">

The [NXLog DNSLogs](https://docs.nxlog.co/refman/current/im/etw.html) solution for Microsoft Sentinel enables you to ingest DNS server events. NXLog DNSLogs uses Event Tracing for Windows [(ETW)](https://docs.microsoft.com/windows/apps/trace-processing/overview?WT.mc_id=Portal-fx) for collecting both Audit and Analytical DNS server events.[The NXLog im_etw module](https://docs.nxlog.co/refman/current/im/etw.html) reads event tracing data directly for maximum efficiency, without the need to capture the event trace into an .etl file. 
 
 **Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | NXLog |
| **Support Tier** | Partner |
| **Support Link** | [https://nxlog.co/support-tickets/add/support-ticket](https://nxlog.co/support-tickets/add/support-ticket) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | NXLog |
| **First Published** | 2022-05-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLogDnsLogs](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NXLogDnsLogs) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [NXLog DNS Logs](../connectors/nxlogdnslogs.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) | [NXLog DNS Logs](../connectors/nxlogdnslogs.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [ASimDnsMicrosoftNXLog](../content/nxlogdnslogs-asimdnsmicrosoftnxlog-274a2fc6-eda0-430d-9e02-7a7c0850eb0e-d0a2aace.md) | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md) *(read)* |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

