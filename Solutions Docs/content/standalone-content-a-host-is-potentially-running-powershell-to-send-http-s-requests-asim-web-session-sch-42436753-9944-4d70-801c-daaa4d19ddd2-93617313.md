# A host is potentially running PowerShell to send HTTP(S) requests (ASIM Web Session schema)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This rule identifies a web request with a user agent header known to belong PowerShell. <br>You can add custom Powershell indicating User-Agent headers using a watchlist, for more information refer to the [UnusualUserAgents Watchlist](https://aka.ms/ASimUnusualUserAgentsWatchlist).<br><br>  This analytic rule uses [ASIM](https://aka.ms/AboutASIM) and supports any built-in or custom source that supports the ASIM WebSession schema (ASIM WebSession Schema)

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `42436753-9944-4d70-801c-daaa4d19ddd2` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, DefenseEvasion, Execution |
| **Techniques** | T1132, T1140, T1059.001 |
| **Required Connectors** | [SquidProxy](../connectors/squidproxy.md), [Zscaler](../connectors/zscaler.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/ASimWebSession/UnusualUAPowershell.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

