# Cyble Vision Alerts IOC'S

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects malicious Indicators of Compromise such as IPs, domains, URLs, and hashes. Extracts IOC type, behaviour tags, risk rating, and timestamps using Alerts_IOCs parser. Triggers an incident with mapped entities, severity, and details.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **ID** | `c8cf42d5-8684-435f-9c4d-9dd0cc47eaec` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance, InitialAccess, Discovery, CommandAndControl, Impact |
| **Techniques** | T1595, T1133, T1046, T1071, T1486 |
| **Required Connectors** | [CybleVisionAlerts](../connectors/cyblevisionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Analytic%20Rules/Alerts_IOC%27S.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyble Vision](../solutions/cyble-vision.md)

