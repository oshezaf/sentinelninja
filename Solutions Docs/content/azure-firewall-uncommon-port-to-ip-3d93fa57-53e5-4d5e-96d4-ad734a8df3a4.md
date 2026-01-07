# Uncommon Port to IP

Identifies abnormal ports used by machines to connect to a destination IP based on learning period activity. This can indicate exfiltration attack or C2 control from machines in the organization by using new a port that has never been used.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **ID** | `3d93fa57-53e5-4d5e-96d4-ad734a8df3a4` |
| **Tactics** | Exfiltration, CommandAndControl |
| **Required Connectors** | [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Hunting%20Queries/Azure%20Firewall%20-%20Uncommon%20Port%20to%20IP.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Azure Firewall](../solutions/azure-firewall.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
