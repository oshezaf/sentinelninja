# Aqua Blizzard AV hits - Feb 2022

Identifies a match in the Security Alert table for MDATP hits related to the Aqua Blizzard actor

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |
| **ID** | `18dbdc22-b69f-4109-9e39-723d9465f45f` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1137 |
| **Required Connectors** | [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftDefenderForEndpoint/Analytic%20Rules/AquaBlizzardAVHits.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

