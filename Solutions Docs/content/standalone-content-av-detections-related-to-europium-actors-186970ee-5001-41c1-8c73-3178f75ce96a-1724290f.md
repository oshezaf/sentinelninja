# AV detections related to Europium actors

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'This query looks for Microsoft Defender AV detections related to  Europium actor.  In Microsoft Sentinel the SecurityAlerts table includes only the Device Name of the affected device, this query joins the DeviceInfo table to clearly connect other information such as Device group, ip, etc. This would allow the Microsoft Sentinel analyst to have more context related to the alert, if available.  Reference: https://www.microsoft.com/security/blog/2022/09/08/microsoft-investigates-iranian-attacks-ag

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `186970ee-5001-41c1-8c73-3178f75ce96a` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1486 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityAlert/EuropiumAVHits.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

