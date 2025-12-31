# DDoS Attack IP Addresses - Percent Threshold

Identifies IP addresses that generate over 5% of traffic during DDoS attack mitigation

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure DDoS Protection](../solutions/azure-ddos-protection.md) |
| **ID** | `402a42ad-f31c-48d1-8f80-0200846b7f25` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498 |
| **Required Connectors** | [DDOS](../connectors/ddos.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20DDoS%20Protection/Analytic%20Rules/AttackSourcesPercentThreshold.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure DDoS Protection](../solutions/azure-ddos-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
