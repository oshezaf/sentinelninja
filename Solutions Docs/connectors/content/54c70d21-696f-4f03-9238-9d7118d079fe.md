# Rubrik Critical Anomaly

Rubrik Critical Anomaly rule matches Severity and if Critical severity found then generate the incident for each object.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [RubrikSecurityCloud](../solutions/rubriksecuritycloud.md) |
| **ID** | `54c70d21-696f-4f03-9238-9d7118d079fe` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1546 |
| **Required Connectors** | [RubrikSecurityCloudAzureFunctions](../connectors/rubriksecuritycloudazurefunctions.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud/Analytic%20Rules/RubrikCriticalAnomaly.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Rubrik_Anomaly_Data_CL`](../tables/rubrik-anomaly-data-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to RubrikSecurityCloud](../solutions/rubriksecuritycloud.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
