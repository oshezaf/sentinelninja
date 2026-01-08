# NIST SP 800-53 Posture Changed

This alert is desinged to monitor Azure policies aligned with the NIST SP 800-53 Regulatory Compliance initative. The alert triggers when policy compliance falls below 70% within a 1 week timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NISTSP80053](../solutions/nistsp80053.md) |
| **ID** | `dd834c97-4638-4bb3-a4e3-807e8b0580dc` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1082 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NISTSP80053/Analytic%20Rules/NISTSP80053PostureChanged.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityRecommendation`](../tables/securityrecommendation.md)
- [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to NISTSP80053](../solutions/nistsp80053.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
