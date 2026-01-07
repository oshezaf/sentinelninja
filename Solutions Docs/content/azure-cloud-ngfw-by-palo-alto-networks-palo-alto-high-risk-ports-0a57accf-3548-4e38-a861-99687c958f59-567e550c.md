# Palo Alto - high-risk ports

Identifies network connections whose ports are frequent targets of attacks and should not cross network boundaries or reach untrusted public networks. Consider updating the firewall policies to block the connections.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md) |
| **ID** | `0a57accf-3548-4e38-a861-99687c958f59` |
| **Tactics** | InitialAccess, Discovery |
| **Required Connectors** | [CloudNgfwByPAN](../connectors/cloudngfwbypan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cloud%20NGFW%20by%20Palo%20Alto%20Networks/Hunting%20Queries/CloudNGFW-HighRiskPorts.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`fluentbit_CL`](../tables/fluentbit-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
