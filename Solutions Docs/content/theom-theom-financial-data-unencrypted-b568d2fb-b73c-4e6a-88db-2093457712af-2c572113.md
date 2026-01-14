# Theom - Financial data unencrypted

Creates Sentinel incidents for critical/high Theom risks, associated with ruleId TRIS0003 (Financial data has been observed in unencrypted data stores. Encrypt data at rest to comply with this CIS requirement)

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Theom](../solutions/theom.md) |
| **ID** | `b568d2fb-b73c-4e6a-88db-2093457712af` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1213, T1530 |
| **Required Connectors** | [Theom](../connectors/theom.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Theom/Analytic%20Rules/TRIS0003_Financial_data_unencrypted.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`TheomAlerts_CL`](../tables/theomalerts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Theom](../solutions/theom.md)

