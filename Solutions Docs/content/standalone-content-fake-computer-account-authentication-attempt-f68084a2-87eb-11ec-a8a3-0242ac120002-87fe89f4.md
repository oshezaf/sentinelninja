# Fake computer account authentication attempt

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query detects authentication attempt from a fake computer account(username ends with $).  Computer accounts are normally not authenticating via interactive logon or remote desktop neither they are unlocking the systems. Ref: https://blog.menasec.net/2019/02/threat-hunting-6-hiding-in-plain-sights.html

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `f68084a2-87eb-11ec-a8a3-0242ac120002` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1564 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/SecurityEvent/FakeComputerAccountAuthenticationAttempt.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

