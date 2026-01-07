# First Time Source IP to Destination Using Port

Identifies the first time a source IP communicates with a destination using a specific port based on learning period activity.  Configurable Parameters: - Learning period time - learning period for threshold calculation in days. Default is set to 7.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **ID** | `932fe71a-7a8c-4f35-bf88-321ab68ff562` |
| **Tactics** | Exfiltration, CommandAndControl |
| **Required Connectors** | [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Hunting%20Queries/Azure%20Firewall%20-%20First%20Time%20Source%20IP%20to%20Destination%20Using%20Port.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Azure Firewall](../solutions/azure-firewall.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
