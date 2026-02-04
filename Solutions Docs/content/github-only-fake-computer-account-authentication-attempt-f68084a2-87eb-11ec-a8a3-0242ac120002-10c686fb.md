# Fake computer account authentication attempt

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query detects authentication attempt from a fake computer account(username ends with $).  Computer accounts are normally not authenticating via interactive logon or remote desktop neither they are unlocking the systems. Ref: https://blog.menasec.net/2019/02/threat-hunting-6-hiding-in-plain-sights.html

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `f68084a2-87eb-11ec-a8a3-0242ac120002` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1564 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/SecurityEvent/FakeComputerAccountAuthenticationAttempt.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

