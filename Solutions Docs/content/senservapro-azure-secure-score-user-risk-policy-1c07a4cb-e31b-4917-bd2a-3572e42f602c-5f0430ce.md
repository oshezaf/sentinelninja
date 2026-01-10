# Azure secure score user risk policy

This query searches for an active Azure Premium P2 license is required to use and edit this policy.   You will be required to have setup the MFA Policy before activating this policy

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SenservaPro](../solutions/senservapro.md) |
| **ID** | `1C07A4CB-E31B-4917-BD2A-3572E42F602C` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1529 |
| **Required Connectors** | [SenservaPro](../connectors/senservapro.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro/Analytic%20Rules/UserRiskPolicy.yaml) |

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

