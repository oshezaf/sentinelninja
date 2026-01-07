# Squid proxy events for ToR proxies

Check for Squid proxy events associated with common ToR proxies. This query presumes the default squid log format is being used. http://www.squid-cache.org/Doc/config/access_log/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Syslog](../solutions/syslog.md) |
| **ID** | `90d3f6ec-80fb-48e0-9937-2c70c9df9bad` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1090, T1008 |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog/Analytic%20Rules/squid_tor_proxies.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Syslog](../solutions/syslog.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
