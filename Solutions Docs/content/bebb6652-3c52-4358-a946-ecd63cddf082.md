# Top 10 sender domains - Teams user submissions FN or FP

This query visualises Teams messages submitted by users as false negatives or false positives, summarizing the data by top 10 sender domains of those messages

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `bebb6652-3c52-4358-a946-ecd63cddf082` |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Email%20and%20Collaboration%20Queries/Microsoft%20Teams%20protection/Top%2010%20sender%20domains%20-%20Teams%20user%20submissions%20FN%20or%20FP.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CloudAppEvents`](../tables/cloudappevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
