# Audit policy manipulation using auditpol utility

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This detects attempts to manipulate audit policies using auditpol command. This technique was seen in relation to Solorigate attack but the results can indicate potential malicious activity used in different attacks. The process name in each data source is commented out as an adversary could rename it. It is advisable to keep process name commented but if the results show unrelated false positives, users may want to uncomment it. Refer to auditpol syntax: https://docs.microsoft.com/windows-serve

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `66276b14-32c5-4226-88e3-080dacc31ce1` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/AuditPolicyManipulation_using_auditpol.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

