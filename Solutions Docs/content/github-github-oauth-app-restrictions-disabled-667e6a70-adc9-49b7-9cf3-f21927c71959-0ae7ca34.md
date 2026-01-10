# GitHub OAuth App Restrictions Disabled

This hunting query identifies GitHub OAuth Apps that have restrictions disabled that may be a sign of compromise. Attacker will want to disable such security tools in order to go undetected. 

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GitHub](../solutions/github.md) |
| **ID** | `667e6a70-adc9-49b7-9cf3-f21927c71959` |
| **Tactics** | Persistence, DefenseEvasion |
| **Techniques** | T1505, T1562 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Hunting%20Queries/Oauth%20App%20Restrictions%20Disabled.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to GitHub](../solutions/github.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

