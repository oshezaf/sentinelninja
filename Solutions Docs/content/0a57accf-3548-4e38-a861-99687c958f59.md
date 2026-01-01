# Palo Alto - high-risk ports

Identifies network connections whose ports are frequent targets of attacks and should not cross network boundaries or reach untrusted public networks. Consider updating the firewall policies to block the connections.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md) |
| **ID** | `0a57accf-3548-4e38-a861-99687c958f59` |
| **Tactics** | InitialAccess, Discovery |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Event Vendor** | Palo Alto Networks |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Hunting%20Queries/PaloAlto-HighRiskPorts.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`fluentbit_CL`](../tables/fluentbit-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
