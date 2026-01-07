# 1Password - Vault export

This will alert when a successful vault export has occurred within 1Password. Ref: https://1password.com/ Ref: https://github.com/securehats/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [1Password](../solutions/1password.md) |
| **ID** | `dae4c601-51c9-47f5-83d3-e6eaef929cf6` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1555 |
| **Required Connectors** | [1Password](../connectors/1password.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/Analytics%20Rules/1Password%20-%20Vault%20Export.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to 1Password](../solutions/1password.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
