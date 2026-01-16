# Discord download invoked from cmd line (ASIM Version)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query looks for hosts that have attempted to interact with the Discord CDN. This activity is not normally invoked from the command line and could indicate C2, exfiltration, or malware delivery activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `3169dc83-9e97-452c-afcc-baebdb0ddf7c` |
| **Tactics** | Execution, CommandAndControl, Exfiltration |
| **Techniques** | T1204, T1102, T1567 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/ASimProcess/Discorddownloadinvokedfromcmdline%28ASIMVersion%29.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`imProcess`](../tables/improcess.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

