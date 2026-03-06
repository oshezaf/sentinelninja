# Tor

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for Tor client, or for a common Tor plugin called Meek. We query for active Tor connections, but could have alternatively looked for active Tor runs (ProcessCreateEvents) or Tor downloads (DeviceFileEvents). To read more about this technique, see:. Tor: https://attack.mitre.org/wiki/Software/S0183#Techniques_Used. Meek plugin: https://attack.mitre.org/wiki/Software/S0175. Multi-hop proxy technique: https://attack.mitre.org/wiki/Technique/T1188. Tags: #Tor, #MultiHopProxy, #CnC.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `a0b19966-3b4d-45de-969c-ee5f1ef8c18a` |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Command%20and%20Control/Tor.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Hunting Queries](hunting-queries.md)

