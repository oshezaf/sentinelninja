# Theom - Unencrypted public data stores

Creates Sentinel incidents for critical/high Theom risks, associated with ruleId TRIS0005 (Theom has observed data stores that are both unencrypted and publicly accessible. Review if the data store and the data within should be publicly accessible. Additionally, encrypt the data at rest to comply with these CIS requirements)

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Theom](../solutions/theom.md) |
| **ID** | `6b93d8b1-40cf-4973-adaa-6f240df21ff1` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1213, T1530 |
| **Required Connectors** | [Theom](../connectors/theom.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Theom/Analytic%20Rules/TRIS0005_Unencrypted_public_data_stores.yaml) |

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
