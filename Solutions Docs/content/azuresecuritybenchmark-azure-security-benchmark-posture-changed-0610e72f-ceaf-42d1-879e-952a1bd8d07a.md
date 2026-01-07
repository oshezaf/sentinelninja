# Azure Security Benchmark Posture Changed

This alert is designed to monitor Azure policies aligned with the Azure Security Benchmark Regulatory Compliance initiative. The alert triggers when policy compliance falls below 70% within a 1 week time-frame.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md) |
| **ID** | `0610e72f-ceaf-42d1-879e-952a1bd8d07a` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1082 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark/Analytic%20Rules/AzureSecurityBenchmarkPostureChanged.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityRecommendation`](../tables/securityrecommendation.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
