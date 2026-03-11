# Identify instances where a single source is observed using multiple user agents (ASIM Web Session)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection mechanism identifies requests originating from a single source within a brief time period that exhibit multiple user agents. Such behavior could indicate unusual web browsing activities performed by unconventional processes

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `813ccf3b-0321-4622-b0bc-63518fd14454` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1190, T1133, T1528 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Analytic%20Rules/MultipleUAsFromSingleIP.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Web Session Essentials](../solutions/web-session-essentials.md)

