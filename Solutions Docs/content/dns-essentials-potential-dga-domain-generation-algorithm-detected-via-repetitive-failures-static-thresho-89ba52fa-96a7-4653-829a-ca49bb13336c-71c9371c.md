# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Static threshold based (ASIM DNS Solution)

This rule identifies clients with a high NXDomain count, which could be indicative of a DGA (cycling through possible C2 domains where most C2s are not live). An alert is generated when a new IP address is seen (based on not being seen associated with NXDomain records in prior 10-day baseline period). It utilizes [ASIM](https://aka.ms/AboutASIM) normalization and is applied to any source that supports the ASIM DNS schema.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `89ba52fa-96a7-4653-829a-ca49bb13336c` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1568, T1008 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Analytic%20Rules/PotentialDGADetectedviaRepetitiveFailuresStaticThresholdBased.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_Dns`](../asim/imdns.md)

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

