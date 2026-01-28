# CybleVision Alerts Stealer Logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects credential theft and information-stealer malware logs. Extracts stolen credentials, URLs, device info, IPs, domains, and metadata using the Alerts_StealerLogs parser.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **ID** | `e0bf55c2-35ef-47ab-8846-5087618ae805` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Collection, Exfiltration, Reconnaissance, InitialAccess |
| **Techniques** | T1555, T1005, T1041, T1589, T1189 |
| **Required Connectors** | [CybleVisionAlerts](../connectors/cyblevisionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Analytic%20Rules/Alerts_Stealer_Logs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyble Vision](../solutions/cyble-vision.md)

