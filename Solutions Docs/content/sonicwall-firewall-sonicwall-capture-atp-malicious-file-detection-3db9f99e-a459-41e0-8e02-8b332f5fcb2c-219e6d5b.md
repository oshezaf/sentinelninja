# SonicWall - Capture ATP Malicious File Detection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule identifies malicious file verdicts from the SonicWall Capture ATP service. This analytic rule leverages the SonicWall Firewall ASIM Network Session parser (ASimNetworkSessionSonicWallFirewall).   Ref: https://www.sonicwall.com/products/capture-advanced-threat-protection/   Ref: https://www.sonicwall.com/support/knowledge-base/how-to-view-threat-reports-capture-atp/170505384715913/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SonicWall Firewall](../solutions/sonicwall-firewall.md) |
| **ID** | `3db9f99e-a459-41e0-8e02-8b332f5fcb2c` |
| **Severity** | Medium |
| **Status** | Experimental |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonicWall%20Firewall/Analytic%20Rules/CaptureATPMaliciousFileDetection.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SonicWall Firewall](../solutions/sonicwall-firewall.md)

