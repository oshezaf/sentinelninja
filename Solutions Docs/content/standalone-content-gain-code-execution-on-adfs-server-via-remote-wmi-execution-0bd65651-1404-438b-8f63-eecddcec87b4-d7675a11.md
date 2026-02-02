# Gain Code Execution on ADFS Server via Remote WMI Execution

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This query detects instances where an attacker has gained the ability to execute code on an ADFS Server through remote WMI Execution. In order to use this query you need to be collecting Sysmon EventIDs 19, 20, and 21. If you do not have Sysmon data in your workspace this query will raise an error stating:      Failed to resolve scalar expression named "[@Name]" For more on how WMI was used in Solorigate see https://www.microsoft.com/security/blog/2021/01/20/deep-dive-into-the-solorigate-second

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `0bd65651-1404-438b-8f63-eecddcec87b4` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement |
| **Techniques** | T1210 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/GainCodeExecutionADFSviaWMI.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

