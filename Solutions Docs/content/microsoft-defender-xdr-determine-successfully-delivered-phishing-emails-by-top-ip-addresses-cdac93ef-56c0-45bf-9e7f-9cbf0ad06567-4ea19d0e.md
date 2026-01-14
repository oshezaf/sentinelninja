# Determine Successfully Delivered Phishing Emails by top IP Addresses

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies phishing emails sent that were successfully delivered, by top IP addressess. cutoff default value is 5, adjust the value as needed.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `cdac93ef-56c0-45bf-9e7f-9cbf0ad06567` |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [OfficeATP](../connectors/officeatp.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Delivered%20Bad%20Emails%20from%20Top%20bad%20IPv4%20addresses.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`EmailEvents`](../tables/emailevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

