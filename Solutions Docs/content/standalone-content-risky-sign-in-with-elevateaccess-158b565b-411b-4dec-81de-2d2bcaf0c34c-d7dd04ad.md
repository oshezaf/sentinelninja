# Risky Sign-in with ElevateAccess

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Looks for users who had a risky sign in (based on Entra ID Identity Protection risk score) and then performed and ElevateAccess action. ElevateAccess operations can be used by Global Admins to obtain permissions over Azure resources.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `158b565b-411b-4dec-81de-2d2bcaf0c34c` |
| **Tactics** | PrivilegeEscalation |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Privilege%20escalation/riskySignInToElevateAccess.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md)
- [`CloudAppEvents`](../tables/cloudappevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

