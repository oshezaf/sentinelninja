# Probable AdFind Recon Tool Usage

This query identifies the host and account that executed AdFind, by hash and filename, in addition to the flags commonly utilized by various threat actors during the reconnaissance phase.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md) |
| **ID** | `c63ae777-d5e0-4113-8c9a-c2c9d3d09fcd` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1016, T1018, T1069.002, T1087.002, T1482 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Attacker%20Tools%20Threat%20Protection%20Essentials/Analytic%20Rules/AdFind_Usage.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)

