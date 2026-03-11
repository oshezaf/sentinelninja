# Possible DNS Tunneling or Data Exfiltration Activity (ASIM DNS Solution)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Typical domain name lengths are short, whereas domain name queries used for data exfiltration or tunneling can often be very large in size. The hunting query looks for DNS queries that are more than 150 characters long.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `74e8773c-dfa9-45ca-bb60-5d767303e5b3` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1568, T1008, T1048 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Hunting%20Queries/PossibleDNSTunnelingOrDataExfiltrationActivity.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to DNS Essentials](../solutions/dns-essentials.md)

