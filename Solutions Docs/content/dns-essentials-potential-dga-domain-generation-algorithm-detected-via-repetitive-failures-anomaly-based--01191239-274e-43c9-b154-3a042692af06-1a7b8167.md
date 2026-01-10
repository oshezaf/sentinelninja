# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Anomaly based (ASIM DNS Solution)

This rule makes use of the series decompose anomaly method to detect clients with a high NXDomain response count, which could be indicative of a DGA (cycling through possible C2 domains where most C2s are not live). An alert is generated when new IP address DNS activity is identified as an outlier when compared to the baseline, indicating a recurring pattern. It utilizes [ASIM](https://aka.ms/AboutASIM) normalization and is applied to any source that supports the ASIM DNS schema.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `01191239-274e-43c9-b154-3a042692af06` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1568, T1008 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Analytic%20Rules/PotentialDGADetectedviaRepetitiveFailuresAnomalyBased.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_Dns`](../asim/imdns.md)

## Tables Used

This content item queries data from the following tables:

- [`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md)
- [`anomalies`](../tables/anomalies.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to DNS Essentials](../solutions/dns-essentials.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

