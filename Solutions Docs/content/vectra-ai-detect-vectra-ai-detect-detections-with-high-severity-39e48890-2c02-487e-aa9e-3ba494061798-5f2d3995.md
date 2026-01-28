# Vectra AI Detect - Detections with High Severity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Create an incident for high severity malicious behavior detected by Vectra AI (Threat score superior to 7.0).  The Severity is a mapping with the Threat score assigned to a detection. It ranges between 0 and 10.  The severity_threshold variable can be adjusted as desired.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vectra AI Detect](../solutions/vectra-ai-detect.md) |
| **ID** | `39e48890-2c02-487e-aa9e-3ba494061798` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact |
| **Techniques** | T1003, T1087, T1021, T1119, T1071, T1041, T1499 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Detect/Analytic%20Rules/VectraDetect-HighSeverityDetection-by-Tactics.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID != "asc"`<br>`DeviceEventClassID != "audit"`<br>`DeviceEventClassID != "campaigns"`<br>`DeviceEventClassID != "health"`<br>`DeviceEventClassID != "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Vectra AI Detect](../solutions/vectra-ai-detect.md)

