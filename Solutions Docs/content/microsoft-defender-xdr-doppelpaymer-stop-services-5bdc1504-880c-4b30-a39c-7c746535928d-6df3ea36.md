# Doppelpaymer Stop Services

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query was originally published in the threat analytics report, Doppelpaymer: More human-operated ransomware. There is also a related blog. DoppelPaymer is ransomware that is spread manually by human operators. These operators have exhibited extensive knowledge of system administration and common network security misconfigurations. They often use stolen credentials from over-privileged service accounts to turn off security software, run malicious commands, and spread malware throughout an or

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `5bdc1504-880c-4b30-a39c-7c746535928d` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, DefenseEvasion |
| **Techniques** | T1059, T1562 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Analytic%20Rules/Defense%20Evasion/DoppelpaymerStopService.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

