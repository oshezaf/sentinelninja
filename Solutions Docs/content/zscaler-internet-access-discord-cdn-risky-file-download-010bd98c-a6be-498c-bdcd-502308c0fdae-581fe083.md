# Discord CDN Risky File Download

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies callouts to Discord CDN addresses for risky file extensions. This detection will trigger when a callout for a risky file is made to a discord server that has only been seen once in your environment. Unique discord servers are identified using the server ID that is included in the request URL (DiscordServerId in query). Discord CDN has been used in multiple campaigns to download additional payloads

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| **ID** | `010bd98c-a6be-498c-bdcd-502308c0fdae` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071.001 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Event Vendor** | ZScaler |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zscaler%20Internet%20Access/Analytic%20Rules/DiscordCDNRiskyDownload.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Zscaler Internet Access](../solutions/zscaler-internet-access.md)

