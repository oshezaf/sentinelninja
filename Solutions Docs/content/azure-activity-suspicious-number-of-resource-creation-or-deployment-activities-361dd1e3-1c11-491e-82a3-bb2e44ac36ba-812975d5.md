# Suspicious number of resource creation or deployment activities

Indicates when an anomalous number of VM creations or deployment activities occur in Azure via the AzureActivity log. This query generates the baseline pattern of cloud resource creation by an individual and generates an anomaly when any unusual spike is detected. These anomalies from unusual or privileged users could be an indication of a cloud infrastructure takedown by an adversary.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Activity](../solutions/azure-activity.md) |
| **ID** | `361dd1e3-1c11-491e-82a3-bb2e44ac36ba` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1496 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity/Analytic%20Rules/Creating_Anomalous_Number_Of_Resources_detection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure Activity](../solutions/azure-activity.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

