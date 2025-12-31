# Votiro - File Blocked in Email

'The analytic rule is designed to identify when an email is blocked by Votiro Sanitization Engine policy. The rule generates an alert when an email is blocked after Sanitization process which is not password protected and has a from field meaning its a valid email. More information in terms of details about the blocked attachment, such as the file name and hash, and information about the email, such as the sender and recipient(s). The alert also includes information about the Votiro policy that

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Votiro](../solutions/votiro.md) |
| **ID** | `0b8b91de-c63e-4bc2-b5f4-b15d3b379ec9` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, DefenseEvasion, Impact, InitialAccess |
| **Techniques** | T0885, T1036, T1027, T1486, T1566 |
| **Required Connectors** | [Votiro](../connectors/votiro.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Votiro/Analytic%20Rules/VotiroFileBlockedInEmail.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Votiro](../solutions/votiro.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
