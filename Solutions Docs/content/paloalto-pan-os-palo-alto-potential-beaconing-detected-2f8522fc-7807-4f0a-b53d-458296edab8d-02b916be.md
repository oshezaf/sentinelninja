# Palo Alto - potential beaconing detected

Identifies beaconing patterns from PAN traffic logs based on recurrent timedelta patterns.  Reference Blog:https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/detect-network-beaconing-via-intra-request-time-delta-patterns/ba-p/779586

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md) |
| **ID** | `2f8522fc-7807-4f0a-b53d-458296edab8d` |
| **Severity** | Low |
| **Status** | Available |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071, T1571 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Event Vendor** | Palo Alto Networks |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Hunting%20Queries/Palo%20Alto%20-%20potential%20beaconing%20detected.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`fluentbit_CL`](../tables/fluentbit-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md)

