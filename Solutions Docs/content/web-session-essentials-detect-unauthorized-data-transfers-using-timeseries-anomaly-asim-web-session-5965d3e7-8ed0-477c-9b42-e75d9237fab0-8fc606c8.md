# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Detect unauthorized data transfers using timeseries anomaly (ASIM Web Session)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This query utilizes built-in KQL anomaly detection algorithms to identify anomalous data transfers to public networks. It detects significant deviations from a baseline pattern, allowing the detection of sudden increases in data transferred to unknown public networks, which may indicate data exfiltration attempts. Investigating such anomalies is crucial. The score indicates the degree to which the data transfer deviates from the baseline value. A higher score indicates a greater deviation. The

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **ID** | `5965d3e7-8ed0-477c-9b42-e75d9237fab0` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1030 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Analytic%20Rules/DataExfiltrationTimeSeriesAnomaly.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_WebSession`](../asim/imwebsession.md)

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Anomalies`](../tables/anomalies.md) | ✓ | ✓ |
| [`WebSession_Summarized_SrcIP_CL`](../tables/websession-summarized-srcip-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Web Session Essentials](../solutions/web-session-essentials.md)

