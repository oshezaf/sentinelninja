# CDM_ContinuousDiagnostics&Mitigation_PostureChanged

This alert is designed to monitor Azure policies aligned with the Continuous Diagnostics & Mitigation (CDM) Program. The alert triggers when policy compliance falls below 70% within a 1 week timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md) |
| **ID** | `fd950af9-d9db-4879-a60a-7267cc041beb` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1082 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContinuousDiagnostics%26Mitigation/Analytic%20Rules/ContinuousDiagnostics%26MitigationPostureChanged.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityRecommendation`](../tables/securityrecommendation.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

