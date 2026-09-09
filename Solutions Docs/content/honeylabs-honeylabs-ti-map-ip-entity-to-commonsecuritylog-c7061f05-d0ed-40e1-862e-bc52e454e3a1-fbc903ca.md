# HoneyLabs TI Map IP Entity to CommonSecurityLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies source-IP matches in CommonSecurityLog (firewall, proxy and other CEF sources) against IP indicators from HoneyLabs honeypot telemetry. A match means a source IP that ran exploit or loader commands against HoneyLabs sensors also appeared as a source in your own logs. Only the structured SourceIP field is matched; destination IPs and IPs merely mentioned inside the free-text Message are ignored, because those are frequently unrelated and generate false positives. Indicator Confidence

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [HoneyLabs](../solutions/honeylabs.md) |
| **ID** | `c7061f05-d0ed-40e1-862e-bc52e454e3a1` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl |
| **Techniques** | T1190, T1071 |
| **Required Connectors** | [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [CEF](../connectors/cef.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyLabs/Analytic%20Rules/HoneyLabsTIMapIPEntityCommonSecurityLog.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ | ✓ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to HoneyLabs](../solutions/honeylabs.md)

