# Multiple Sources Affected by the Same TI Destination

Identifies multiple machines trying to reach out to the same destination blocked by TI in Azure Firewall. This can indicate attack on the organization by the same attack group.  Configurable Parameters:  - Minimum affected threshold - alert only if more than this number of hosts affected. Default is set to 5. - Recommendation is to use the new resource specific logs. If you are using both, the TiTraffic Count will be duplicated.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **ID** | `4644baf7-3464-45dd-bd9d-e07687e25f81` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, CommandAndControl |
| **Techniques** | T1041, T1071 |
| **Required Connectors** | [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Analytic%20Rules/Azure%20Firewall%20-%20Multiple%20Sources%20Affected%20by%20the%20Same%20TI%20Destination.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure Firewall](../solutions/azure-firewall.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
