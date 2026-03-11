# The download of potentially risky files from the Discord Content Delivery Network (CDN) (ASIM Web Session)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This detection mechanism identifies instances where requests are made to Discord CDN addresses for file extensions that are considered risky.   It triggers when a callout is made to a Discord server that has only been encountered once in your environment. The uniqueness of Discord servers is determined based on the server ID present in the request URL (DiscordServerId in the query).   Discord CDN has been utilized in numerous campaigns to download additional payloads, highlighting the importanc

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `b7fe8f27-7010-404b-aec5-6e5245cea580` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071.001 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Analytic%20Rules/DiscordCDNRiskyFileDownload.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Watchlist`](../tables/watchlist.md) | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Web Session Essentials](../solutions/web-session-essentials.md)

