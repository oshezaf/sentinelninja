# Mimecast Audit - Logon Authentication Failed

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects threat when logon authentication failure found in audit

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Mimecast](../solutions/mimecast.md) |
| **ID** | `f00197ab-491f-41e7-9e22-a7003a4c1e54` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Discovery, InitialAccess, CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [MimecastAuditAPI](../connectors/mimecastauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mimecast/Analytic%20Rules/MimecastAudit/Mimecast_Audit.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Audit_CL`](../tables/audit-cl.md)
- [`Event`](../tables/event.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Mimecast](../solutions/mimecast.md)

