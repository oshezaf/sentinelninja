# 1Password - Vault export prior to account suspension or deletion

This will alert when a successful vault export has occurred within the last 14 days prior to an account being suspended or deleted from 1Password.  Ref: https://1password.com/ Ref: https://github.com/securehats/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [1Password](../solutions/1password.md) |
| **ID** | `51617533-cf51-4415-9020-b15bd47d69d2` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1555 |
| **Required Connectors** | [1Password](../connectors/1password.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/Analytics%20Rules/1Password%20-%20Vault%20export%20prior%20to%20account%20suspension%20or%20deletion.yaml) |

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
