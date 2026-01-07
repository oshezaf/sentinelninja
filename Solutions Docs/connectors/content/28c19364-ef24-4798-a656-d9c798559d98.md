# Azure secure score sign in risk policy

This query searches for an active Azure Premium P2 license is required to use and edit this policy.   You will be required to have setup the MFA Policy before activating this policy

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SenservaPro](../solutions/senservapro.md) |
| **ID** | `28C19364-EF24-4798-A656-D9C798559D98` |
| **Tactics** | Impact |
| **Techniques** | T1529 |
| **Required Connectors** | [SenservaPro](../connectors/senservapro.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro/Hunting%20Queries/AzureSecureScoreSigninRiskPolicy.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SenservaPro_CL`](../tables/senservapro-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to SenservaPro](../solutions/senservapro.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
