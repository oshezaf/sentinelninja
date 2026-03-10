# GreyNoise TI Map IP Entity to DnsEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query maps any IP indicators of compromise (IOCs) from GreyNoise Threat Intelligence (TI), by searching for matches in DnsEvents.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md) |
| **ID** | `ddf47b6f-870c-5712-a296-1383acb13c82` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [DNS](../connectors/dns.md), [ASimDnsActivityLogs](../connectors/asimdnsactivitylogs.md), [GreyNoise2SentinelAPI](../connectors/greynoise2sentinelapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GreyNoiseThreatIntelligence/Analytic%20Rules/GreyNoise_IPEntity_DnsEvents.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DnsEvents`](../tables/dnsevents.md) | ✓ | ✗ | ✓ |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | ✓ | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)

