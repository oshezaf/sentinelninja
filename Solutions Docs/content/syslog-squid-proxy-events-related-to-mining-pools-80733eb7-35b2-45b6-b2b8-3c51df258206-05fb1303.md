# Squid proxy events related to mining pools

Checks for Squid proxy events in Syslog associated with common mining pools. This query presumes the default Squid log format is being used.  http://www.squid-cache.org/Doc/config/access_log/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Syslog](../solutions/syslog.md) |
| **ID** | `80733eb7-35b2-45b6-b2b8-3c51df258206` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1102 |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog/Analytic%20Rules/squid_cryptomining_pools.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Syslog](../solutions/syslog.md)

