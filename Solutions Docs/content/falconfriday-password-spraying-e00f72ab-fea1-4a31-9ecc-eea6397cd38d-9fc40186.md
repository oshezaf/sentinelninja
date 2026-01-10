# Password Spraying

This query detects a password spraying attack, where a single machine has performed a large number of failed login attempts, with a large number of different accounts.  For each account, the attacker uses just a few attempts to prevent account lockout. This query uses the DeviceLogonEvents per machine to detect a password spraying attacks.  The machine against which the password spraying is performed (can be DC, a server or even an endpoint) needs to be enrolled in Microsoft Defender for Endpoin

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [FalconFriday](../solutions/falconfriday.md) |
| **ID** | `e00f72ab-fea1-4a31-9ecc-eea6397cd38d` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110.003 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday/Analytic%20Rules/PasswordSprayingWithMDE.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceLogonEvents`](../tables/devicelogonevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to FalconFriday](../solutions/falconfriday.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

