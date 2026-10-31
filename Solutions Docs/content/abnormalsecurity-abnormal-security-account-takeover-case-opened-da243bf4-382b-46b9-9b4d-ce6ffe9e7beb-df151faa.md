# Abnormal Security - Account Takeover case opened

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates an incident when Abnormal Security opens an Account Takeover (ATO) case, indicating a mailbox or user account is suspected to be compromised. The ATO case severity, status, and observed indicators are surfaced for triage.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AbnormalSecurity](../solutions/abnormalsecurity.md) |
| **ID** | `da243bf4-382b-46b9-9b4d-ce6ffe9e7beb` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1078, T1110 |
| **Required Connectors** | [AbnormalSecurityPush](../connectors/abnormalsecuritypush.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity/Analytic%20Rules/AbnormalSecurity_AccountTakeover.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ABNORMAL_SECURITY_ATO_CASE_CL`](../tables/abnormal-security-ato-case-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AbnormalSecurity](../solutions/abnormalsecurity.md)

