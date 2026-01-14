# Potential Impacket Execution

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query identifies execution of Impacket tool. Impacket is a popular tool used by attackers for remote service execution,     Kerberos   manipulation and Windows credential dumping.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md) |
| **ID** | `24ae555c-5e33-4b5d-827a-44206e39f6b4` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1557.001, T1040, T1003.001, T1003.002, T1003.003, T1003.004, T1558.003 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Attacker%20Tools%20Threat%20Protection%20Essentials/Hunting%20Queries/PotentialImpacketExecution.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)
- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)

