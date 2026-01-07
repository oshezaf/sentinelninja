# Non-admin guest

This query searches for guest is not an admin in Azure

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SenservaPro](../solutions/senservapro.md) |
| **ID** | `9B6558C4-BA23-40AC-B95F-42F8A29A3B35` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [SenservaPro](../connectors/senservapro.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro/Analytic%20Rules/NonAdminGuest.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SenservaPro_CL`](../tables/senservapro-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to SenservaPro](../solutions/senservapro.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
