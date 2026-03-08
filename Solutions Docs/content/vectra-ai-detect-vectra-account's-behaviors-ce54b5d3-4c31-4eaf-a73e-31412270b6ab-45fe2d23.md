# Vectra Account's Behaviors

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This analytic rule is looking for new attacker behaviors observed by the Vectra Platform. This rule is focused on account's detections.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vectra AI Detect](../solutions/vectra-ai-detect.md) |
| **ID** | `ce54b5d3-4c31-4eaf-a73e-31412270b6ab` |
| **Severity** | Informational |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact |
| **Techniques** | T1003, T1087, T1021, T1119, T1071, T1041, T1499 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Detect/Analytic%20Rules/VectraDetect-Account-Detections.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID != "asc"`<br>`DeviceEventClassID != "audit"`<br>`DeviceEventClassID != "campaigns"`<br>`DeviceEventClassID != "health"`<br>`DeviceEventClassID != "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Vectra AI Detect](../solutions/vectra-ai-detect.md)

