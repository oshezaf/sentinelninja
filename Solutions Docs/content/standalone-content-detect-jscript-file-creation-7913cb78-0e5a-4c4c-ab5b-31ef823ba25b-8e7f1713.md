# detect-jscript-file-creation

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query was originally published in the threat analytics report, Emulation-evading JavaScripts. Attackers in several ransomware campaigns have employed heavily obfuscated JavaScript code, in order to implant malware or execute malicious commands. The obfuscation is intended to help the code evade security systems and potentially escape sandbox environments. The following query detects the creation of files with a .jse extension. Certain ransomware campaigns, such as Emotet, are known to emplo

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `7913cb78-0e5a-4c4c-ab5b-31ef823ba25b` |
| **Tactics** | Execution, Defense evasion |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Delivery/detect-jscript-file-creation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceFileEvents`](../tables/devicefileevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

