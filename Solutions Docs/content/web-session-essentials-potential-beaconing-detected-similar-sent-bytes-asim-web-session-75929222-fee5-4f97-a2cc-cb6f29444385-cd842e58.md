# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Potential beaconing detected - Similar sent bytes (ASIM Web Session)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Calculate the number of SrcBytes (Sent bytes) for each unique combination of SrcIpAddress and DstIpAddress within a 24-hour timeframe. The presence of a high count of repetitive identical SrcBytes could potentially indicate beaconing activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `75929222-fee5-4f97-a2cc-cb6f29444385` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071, T1571 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Hunting%20Queries/PotentialBeaconingDetected_SimilarSrcBytes.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_WebSession`](../asim/imwebsession.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Web Session Essentials](../solutions/web-session-essentials.md)

