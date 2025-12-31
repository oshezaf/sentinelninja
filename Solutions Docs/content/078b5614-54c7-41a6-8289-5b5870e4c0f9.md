# Theom - Healthcare data exposed

Creates Sentinel incidents for critical/high Theom risks, associated with ruleId TRIS0015 (Theom has observed healthcare data in a data store that is publicly exposed. As per this requirement, use this information to apply data access control lists or access permissions to secure your data)

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Theom](../solutions/theom.md) |
| **ID** | `078b5614-54c7-41a6-8289-5b5870e4c0f9` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1213, T1530 |
| **Required Connectors** | [Theom](../connectors/theom.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Theom/Analytic%20Rules/TRIS0015_Healthcare_data_exposed.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`TheomAlerts_CL`](../tables/theomalerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Theom](../solutions/theom.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
