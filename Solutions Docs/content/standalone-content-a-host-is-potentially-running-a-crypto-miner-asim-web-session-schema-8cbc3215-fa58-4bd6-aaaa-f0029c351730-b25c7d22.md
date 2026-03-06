# A host is potentially running a crypto miner (ASIM Web Session schema)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'This rule identifies a web request with a user agent header known to belong to a crypto miner. This indicates a crypto miner may have infected the client machine.<br>You can add custom crypto mining indicating User-Agent headers using a watchlist, for more information refer to the [UnusualUserAgents Watchlist](https://aka.ms/ASimUnusualUserAgentsWatchlist).<br><br>   This analytic rule uses [ASIM](https://aka.ms/AboutASIM) and supports any built-in or custom source that supports the ASIM WebSes

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `8cbc3215-fa58-4bd6-aaaa-f0029c351730` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1496 |
| **Required Connectors** | [SquidProxy](../connectors/squidproxy.md), [Zscaler](../connectors/zscaler.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/ASimWebSession/UnusualUACryptoMiners.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

