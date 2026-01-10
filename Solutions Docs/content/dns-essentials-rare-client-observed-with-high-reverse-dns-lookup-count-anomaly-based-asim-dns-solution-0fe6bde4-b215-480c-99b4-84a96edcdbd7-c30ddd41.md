# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Rare client observed with high reverse DNS lookup count - Anomaly based (ASIM DNS Solution)

This rule makes use of the series decompose anomaly method to identify clients with high reverse DNS counts. This helps in detecting the possible initial phases of an attack, like discovery and reconnaissance. It utilizes [ASIM](https://aka.ms/AboutASIM) normalization and is applied to any source that supports the ASIM DNS schema.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `0fe6bde4-b215-480c-99b4-84a96edcdbd7` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance |
| **Techniques** | T1590 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Analytic%20Rules/RareClientObservedWithHighReverseDNSLookupCountAnomalyBased.yaml) |

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

