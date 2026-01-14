# Threat Essentials - Mass Cloud resource deletions Time Series Anomaly

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query generates baseline pattern of cloud resource deletions by an user and generated anomaly when any unusual spike is detected. These anomalies from unusual or privileged users could be an indication of cloud infrastructure take-down by an adversary 

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md) |
| **ID** | `fa2658fe-3714-4c55-bb12-2b7275c628e8` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityThreatEssentialSolution/Analytic%20Rules/Threat_Essentials_TimeSeriesAnomaly_Mass_Cloud_Resource_Deletions.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)

