# Trend Micro CAS - DLP violation

Detects when DLP policy violation occurs.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Trend Micro Cloud App Security](../solutions/trend-micro-cloud-app-security.md) |
| **ID** | `1ddeb8ad-cad9-4db4-b074-f9da003ca3ed` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1048 |
| **Required Connectors** | [TrendMicroCAS](../connectors/trendmicrocas.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Cloud%20App%20Security/Analytic%20Rules/TrendMicroCASDLPViolation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`TrendMicroCAS_CL`](../tables/trendmicrocas-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Trend Micro Cloud App Security](../solutions/trend-micro-cloud-app-security.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
