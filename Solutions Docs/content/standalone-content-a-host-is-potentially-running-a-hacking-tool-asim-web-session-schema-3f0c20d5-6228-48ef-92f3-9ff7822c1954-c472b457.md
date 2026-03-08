# A host is potentially running a hacking tool (ASIM Web Session schema)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'This rule identifies a web request with a user agent header known to belong to a hacking tool. This indicates a hacking tool is used on the host.<br>You can add custom hacking tool indicating User-Agent headers using a watchlist, for more information refer to the [UnusualUserAgents Watchlist](https://aka.ms/ASimUnusualUserAgentsWatchlist).  This analytic rule uses [ASIM](https://aka.ms/AboutASIM) and supports any built-in or custom source that supports the ASIM WebSession schema (ASIM WebSessio

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `3f0c20d5-6228-48ef-92f3-9ff7822c1954` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration |
| **Techniques** | T1059, T1046, T1021, T1557, T1102, T1020 |
| **Required Connectors** | [SquidProxy](../connectors/squidproxy.md), [Zscaler](../connectors/zscaler.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/ASimWebSession/UnusualUAHackTool.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

