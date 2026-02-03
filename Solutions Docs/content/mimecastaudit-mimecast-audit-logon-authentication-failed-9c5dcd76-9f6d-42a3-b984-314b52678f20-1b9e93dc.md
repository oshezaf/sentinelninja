# Mimecast Audit - Logon Authentication Failed

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects threat when logon authentication failure found in audit

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MimecastAudit](../solutions/mimecastaudit.md) |
| **ID** | `9c5dcd76-9f6d-42a3-b984-314b52678f20` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Discovery, InitialAccess, CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [MimecastAuditAPI](../connectors/mimecastauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastAudit/Analytic%20Rules/MimecastAudit.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`MimecastAudit_CL`](../tables/mimecastaudit-cl.md) | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to MimecastAudit](../solutions/mimecastaudit.md)

