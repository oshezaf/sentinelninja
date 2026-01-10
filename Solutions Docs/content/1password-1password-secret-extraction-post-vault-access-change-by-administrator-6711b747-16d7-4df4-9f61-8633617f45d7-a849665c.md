# 1Password - Secret extraction post vault access change by administrator

This will alert when a secret extraction has occurred after an administrator has changed their own vault access permissions within that same vault. Ref: https://1password.com/ Ref: https://github.com/securehats/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [1Password](../solutions/1password.md) |
| **ID** | `6711b747-16d7-4df4-9f61-8633617f45d7` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1555 |
| **Required Connectors** | [1Password](../connectors/1password.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/Analytics%20Rules/1Password%20-%20Secret%20Extraction%20Post%20Vault%20Access%20Change%20By%20Administrator.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to 1Password](../solutions/1password.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

