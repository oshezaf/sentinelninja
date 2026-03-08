# VMwareSASESOCDashboard

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [VMware SASE](../solutions/vmware-sase.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Workbooks/VMwareSASESOCDashboard.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Heartbeat`](../tables/heartbeat.md) |  | ✗ | ✗ | ? |
| [`Syslog`](../tables/syslog.md) | `SyslogMessage contains "ACTION=VCF"`<br>`SyslogMessage contains "VCF Alert"` | ✓ | ✓ | ✓ |
| [`VMware_CWS_Health_CL`](../tables/vmware-cws-health-cl.md) |  | ? | ✓ | ? |
| [`VMware_CWS_Weblogs_CL`](../tables/vmware-cws-weblogs-cl.md) |  | ? | ✓ | ? |
| [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Workbooks](workbooks.md) · [Back to VMware SASE](../solutions/vmware-sase.md)

