# Azure secure score role overlap

This query searches for accounts that have been assigned Global Administrator do not need other roles assigned.    Global Administrators have access to all aspects of Azure

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SenservaPro](../solutions/senservapro.md) |
| **ID** | `8E6D9A66-F1B0-463D-BA90-11A5AEC0E15A` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1529 |
| **Required Connectors** | [SenservaPro](../connectors/senservapro.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro/Analytic%20Rules/GlobaAdminRoleOverlap.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SenservaPro_CL`](../tables/senservapro-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to SenservaPro](../solutions/senservapro.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

