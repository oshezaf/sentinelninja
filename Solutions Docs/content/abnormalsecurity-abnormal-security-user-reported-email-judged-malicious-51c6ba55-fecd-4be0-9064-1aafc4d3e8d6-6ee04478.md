# Abnormal Security - User-reported email judged malicious

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates an incident when an email a user reported to the Abnormal Security Abuse Mailbox is judged malicious. Surfaces the reporter, the original recipient, and the campaign so analysts can scope and remediate look-alike messages. Spam- and safe-judged reports are intentionally excluded.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AbnormalSecurity](../solutions/abnormalsecurity.md) |
| **ID** | `51c6ba55-fecd-4be0-9064-1aafc4d3e8d6` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [AbnormalSecurityPush](../connectors/abnormalsecuritypush.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity/Analytic%20Rules/AbnormalSecurity_AbuseMailboxMalicious.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ABNORMAL_SECURITY_ABUSE_MAILBOX_CL`](../tables/abnormal-security-abuse-mailbox-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AbnormalSecurity](../solutions/abnormalsecurity.md)

