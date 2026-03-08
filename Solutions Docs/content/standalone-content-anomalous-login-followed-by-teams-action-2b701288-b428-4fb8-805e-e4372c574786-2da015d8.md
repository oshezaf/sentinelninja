# Anomalous login followed by Teams action

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'Detects anomalous IP address usage by user accounts and then checks to see if a suspicious Teams action is performed. Query calculates IP usage Delta for each user account and selects accounts where a delta >= 90% is observed between the most and least used IP. To further reduce results the query performs a prevalence check on the lowest used IP's country, only keeping IP's where the country is unusual for the tenant (dynamic ranges).  Please note,  if the initial logic of prevalence to find su

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `2b701288-b428-4fb8-805e-e4372c574786` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence |
| **Techniques** | T1199, T1136, T1078, T1098 |
| **Required Connectors** | [Office365](../connectors/office365.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/AnomalousIPUsageFollowedByTeamsAction.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

