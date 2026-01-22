# Rare Domains in External Teams Messages

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects rare domains (seen in fewer than 3 Teams messages) appearing in external Microsoft Teams threads within the last 24 hours.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `d4dd8c3f-d62b-4078-9dc7-8520c3adf1d5` |
| **Tactics** | InitialAccess, Execution |
| **Techniques** | T1566, T1204 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Email%20and%20Collaboration%20Queries/Microsoft%20Teams%20protection/Rare%20Domains%20in%20External%20Teams%20Messages.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`MessageEvents`](../tables/messageevents.md)
- [`MessageUrlInfo`](../tables/messageurlinfo.md)
- [`UrlClickEvents`](../tables/urlclickevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

