# Web Shell Activity

This query detects web shells by analyzing the distribution of commonly-used scripts against regular scripts for public client IPs with no W3CIIS activity in a fixed lookback period.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md) |
| **ID** | `e0c947c3-fe83-46ff-bbda-a43224a785fd` |
| **Tactics** | Persistence, InitialAccess |
| **Techniques** | T1505 |
| **Required Connectors** | [AzureMonitor(IIS)](../connectors/azuremonitor%28iis%29.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection/Hunting%20Queries/WebShellActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`W3CIISLog`](../tables/w3ciislog.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
