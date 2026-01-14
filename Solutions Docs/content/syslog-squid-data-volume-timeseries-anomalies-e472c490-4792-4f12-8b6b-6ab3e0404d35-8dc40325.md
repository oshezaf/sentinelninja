# Squid data volume timeseries anomalies

Malware or data exfiltration can cause network data volume anomalies. This query detects such anomalies in volume of bytes traversing a squid proxy. Anomalies require further investigation. Assumes default squid log format.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Syslog](../solutions/syslog.md) |
| **ID** | `e472c490-4792-4f12-8b6b-6ab3e0404d35` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1071, T1030 |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog/Hunting%20Queries/squid_volume_anomalies.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Syslog](../solutions/syslog.md)

