# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Rare client observed with high reverse DNS lookup count - Static threshold based (ASIM DNS Solution)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule identifies clients with high reverse DNS counts, which could be carrying out reconnaissance or discovery activity. This helps in detecting the possible initial phases of an attack, like discovery and reconnaissance. It utilizes [ASIM](https://aka.ms/AboutASIM) normalization and is applied to any source that supports the ASIM DNS schema.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `77b7c820-5f60-4779-8bdb-f06e21add5f1` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance |
| **Techniques** | T1590 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Analytic%20Rules/RareClientObservedWithHighReverseDNSLookupCountStaticThresholdBased.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_Dns`](../asim/imdns.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to DNS Essentials](../solutions/dns-essentials.md)

