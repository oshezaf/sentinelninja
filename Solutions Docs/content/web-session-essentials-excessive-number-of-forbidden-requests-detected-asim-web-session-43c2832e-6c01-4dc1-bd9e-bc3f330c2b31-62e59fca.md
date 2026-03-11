# Excessive number of forbidden requests detected (ASIM Web Session)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule detects abnormal number of 403 errors from clients. HTTP 403 is returned when the client is not permitted access to the resource despite providing authentication in case such as when authenticated account not having sufficient permissions

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `43c2832e-6c01-4dc1-bd9e-bc3f330c2b31` |
| **Tactics** | Persistence, CredentialAccess |
| **Techniques** | T1110, T1556 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Hunting%20Queries/ExcessiveForbiddenRequestsDetected.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Web Session Essentials](../solutions/web-session-essentials.md)

