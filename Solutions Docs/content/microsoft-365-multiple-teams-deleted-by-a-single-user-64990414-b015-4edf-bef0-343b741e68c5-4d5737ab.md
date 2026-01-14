# Multiple Teams deleted by a single user

This hunting query identifies where multiple Teams have been deleted by a single user in a short timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft 365](../solutions/microsoft-365.md) |
| **ID** | `64990414-b015-4edf-bef0-343b741e68c5` |
| **Tactics** | Impact |
| **Techniques** | T1485, T1489 |
| **Required Connectors** | [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365/Hunting%20Queries/MultipleTeamsDeletes.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OfficeActivity`](../tables/officeactivity.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Microsoft 365](../solutions/microsoft-365.md)

