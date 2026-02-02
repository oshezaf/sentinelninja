# New EXE deployed via Default Domain or Default Domain Controller Policies (ASIM Version)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection highlights executables deployed to hosts via either the Default Domain or Default Domain Controller Policies. These policies apply to all hosts or Domain Controllers and best practice is that these policies should not be used for deployment of files.   A threat actor may use these policies to deploy files or scripts to all hosts in a domain.   This query uses the ASIM parsers and will need them deployed before usage - https://docs.microsoft.com/azure/sentinel/normalization

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `0dd2a343-4bf9-4c93-a547-adf3658ddaec` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Execution, LateralMovement |
| **Techniques** | T1072, T1570 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/ASimProcess/NewEXEdeployedviaDefaultDomainorDefaultDomainControllerPolicies%28ASIMVersion%29.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

