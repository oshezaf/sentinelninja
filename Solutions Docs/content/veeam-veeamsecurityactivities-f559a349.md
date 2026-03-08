# VeeamSecurityActivities

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Workbooks/VeeamSecurityActivities.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Event`](../tables/event.md) |  | ✓ | ✗ | ✗ |
| [`Syslog`](../tables/syslog.md) | `SyslogMessage has "instanceId"`<br>`SyslogMessage has "predefined_alarm_id"`<br>`SyslogMessage has "predefined_alarm_id"` | ✓ | ✓ | ✓ |
| [`VeeamAuthorizationEvents_CL`](../tables/veeamauthorizationevents-cl.md) 🔶 |  | ✓ | ✓ | ✓ |
| [`VeeamMalwareEvents_CL`](../tables/veeammalwareevents-cl.md) 🔶 |  | ✓ | ✓ | ✓ |
| [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) 🔶 |  | ✓ | ✓ | ✓ |
| [`VeeamSecurityComplianceAnalyzer_CL`](../tables/veeamsecuritycomplianceanalyzer-cl.md) 🔶 |  | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Workbooks](workbooks.md) · [Back to Veeam](../solutions/veeam.md)

