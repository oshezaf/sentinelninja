# Abnormal Security - High-risk email attack detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies email attacks detected by Abnormal Security whose attack type maps to a high-risk category (credential phishing, Business Email Compromise, invoice/payment fraud, malware, extortion, sensitive-data phishing, internal account-takeover attacks, or scams). Lower-risk categories such as Spam, Graymail, and Reconnaissance are intentionally excluded. Use this to triage targeted email threats that reached a mailbox.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AbnormalSecurity](../solutions/abnormalsecurity.md) |
| **ID** | `8effd19a-abab-433a-9184-ae67ac51e6d0` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [AbnormalSecurityPush](../connectors/abnormalsecuritypush.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity/Analytic%20Rules/AbnormalSecurity_HighRiskEmailAttack.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AbnormalSecurity](../solutions/abnormalsecurity.md)

