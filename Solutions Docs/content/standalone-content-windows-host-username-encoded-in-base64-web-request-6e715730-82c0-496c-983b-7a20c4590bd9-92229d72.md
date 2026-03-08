# Windows host username encoded in base64 web request

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This detection will identify network requests in HTTP proxy data that contains Base64 encoded usernames from machines in the DeviceEvents table. This technique was seen usee by POLONIUM in their RunningRAT tool.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `6e715730-82c0-496c-983b-7a20c4590bd9` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, CommandAndControl |
| **Techniques** | T1041, T1071.001 |
| **Required Connectors** | [Zscaler](../connectors/zscaler.md), [Fortinet](../connectors/fortinet.md), [CheckPoint](../connectors/checkpoint.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/B64UserInWebURIFromMDE.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

