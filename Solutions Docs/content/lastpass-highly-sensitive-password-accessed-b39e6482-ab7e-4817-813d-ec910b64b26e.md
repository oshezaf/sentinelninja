# Highly Sensitive Password Accessed

This rule will monitor access to highly sensitive passwords. Within the Watchlist called 'LastPass' define passwords which are deemed highly sensitive (such as password to a high privileged application). When an activity is observed against such password, an incident is created.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [LastPass](../solutions/lastpass.md) |
| **ID** | `b39e6482-ab7e-4817-813d-ec910b64b26e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Discovery |
| **Techniques** | T1555, T1087 |
| **Required Connectors** | [LastPass](../connectors/lastpass.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/LastPass/Analytic%20Rules/HighlySensitivePasswordAccessed.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to LastPass](../solutions/lastpass.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
