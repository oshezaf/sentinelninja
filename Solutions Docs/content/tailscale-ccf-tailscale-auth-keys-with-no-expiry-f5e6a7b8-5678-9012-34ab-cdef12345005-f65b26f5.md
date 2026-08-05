# Tailscale: Auth keys with no expiry

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies tailnet auth keys that have no expiry timestamp set. Non-expiring keys grant unattended enrollment in perpetuity and should be rotated or replaced with ephemeral, time-bounded keys.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Tailscale (CCF)](../solutions/tailscale-ccf.md) |
| **ID** | `f5e6a7b8-5678-9012-34ab-cdef12345005` |
| **Tactics** | Persistence, CredentialAccess |
| **Techniques** | T1098, T1136 |
| **Required Connectors** | [TailscaleCCF](../connectors/tailscaleccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Hunting%20Queries/TailscaleAuthKeysNoExpiry.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Tailscale_Keys_CL`](../tables/tailscale-keys-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Tailscale (CCF)](../solutions/tailscale-ccf.md)

