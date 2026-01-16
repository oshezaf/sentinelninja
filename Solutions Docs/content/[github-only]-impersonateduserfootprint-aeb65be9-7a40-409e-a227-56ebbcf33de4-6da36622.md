# ImpersonatedUserFootprint

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Microsoft Defender for Identity raises alert on suspicious Kerberos ticket, pointing to a potential overpass-the-hash attack. Once attackers gain credentials for a user with higher privileges, they will use the stolen credentials to sign into other devices and move laterally. This query finds related sign-in events following overpass-the-hash attack to trace the footprint of the impersonated user.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `aeb65be9-7a40-409e-a227-56ebbcf33de4` |
| **Tactics** | Lateral movement |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |

## Tables Used

This content item queries data from the following tables:

- [`AlertEvidence`](../tables/alertevidence.md)
- [`AlertInfo`](../tables/alertinfo.md)
- [`DeviceLogonEvents`](../tables/devicelogonevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

