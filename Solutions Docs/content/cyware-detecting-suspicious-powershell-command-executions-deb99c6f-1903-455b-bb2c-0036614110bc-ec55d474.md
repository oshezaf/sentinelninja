# Detecting Suspicious PowerShell Command Executions

Spot connections to rarely accessed external domains that are present in your watchlist, which could signify data exfiltration attempts or C2 communication.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cyware](../solutions/cyware.md) |
| **ID** | `deb99c6f-1903-455b-bb2c-0036614110bc` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1102 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyware/Hunting%20Queries/UnusualNetworkConnectionsToRareExternalDomains.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Cyware](../solutions/cyware.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

