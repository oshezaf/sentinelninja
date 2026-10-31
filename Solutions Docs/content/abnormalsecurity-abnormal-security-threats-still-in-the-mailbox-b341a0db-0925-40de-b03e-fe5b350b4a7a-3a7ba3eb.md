# Abnormal Security - Threats still in the mailbox

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Surfaces Abnormal Security threats whose remediation status indicates the message has not been removed from the mailbox (not auto-remediated and not post-remediated). Hunt for attacks that may still be reachable by recipients.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AbnormalSecurity](../solutions/abnormalsecurity.md) |
| **ID** | `b341a0db-0925-40de-b03e-fe5b350b4a7a` |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [AbnormalSecurityPush](../connectors/abnormalsecuritypush.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity/Hunting%20Queries/AbnormalSecurity_UnremediatedThreats.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to AbnormalSecurity](../solutions/abnormalsecurity.md)

