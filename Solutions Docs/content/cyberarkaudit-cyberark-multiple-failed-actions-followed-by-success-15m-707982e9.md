# CyberArk - Multiple Failed Actions Followed by Success (15m)

Detects 3+ failed actions against an account followed by a success in a short window, indicating brute-force or credential guessing.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CyberArkAudit](../solutions/cyberarkaudit.md) |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkAudit/Analytics%20Rules/CyberArkAuditMultiFailedAndSuccess.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to CyberArkAudit](../solutions/cyberarkaudit.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

