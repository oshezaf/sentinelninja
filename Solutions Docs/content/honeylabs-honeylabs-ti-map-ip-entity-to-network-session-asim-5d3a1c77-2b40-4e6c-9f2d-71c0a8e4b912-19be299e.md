# HoneyLabs TI Map IP Entity to Network Session (ASIM)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies network sessions whose source IP addresses HoneyLabs honeypot telemetry has observed running exploit or loader commands. Uses the ASIM NetworkSession parser, so it works across any normalised network source (firewalls, VPN, cloud NSG flow logs) without requiring CEF. Only the structured source IP is matched; destination IPs are intentionally excluded. Indicator Confidence reflects how much evidence HoneyLabs holds (90 = 100+ observed attacks, 60 = a single sighting); raise the thresh

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [HoneyLabs](../solutions/honeylabs.md) |
| **ID** | `5d3a1c77-2b40-4e6c-9f2d-71c0a8e4b912` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl |
| **Techniques** | T1190, T1071 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyLabs/Analytic%20Rules/HoneyLabsTIMapIPEntityAsimNetworkSession.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to HoneyLabs](../solutions/honeylabs.md)

