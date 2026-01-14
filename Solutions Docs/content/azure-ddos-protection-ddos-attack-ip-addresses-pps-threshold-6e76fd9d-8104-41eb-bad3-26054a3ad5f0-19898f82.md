# DDoS Attack IP Addresses - PPS Threshold

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies IP addresses that generates maximal traffic rate over 10k PPS during DDoS attack mitigation

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure DDoS Protection](../solutions/azure-ddos-protection.md) |
| **ID** | `6e76fd9d-8104-41eb-bad3-26054a3ad5f0` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498 |
| **Required Connectors** | [DDOS](../connectors/ddos.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20DDoS%20Protection/Analytic%20Rules/AttackSourcesPPSThreshold.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Azure DDoS Protection](../solutions/azure-ddos-protection.md)

