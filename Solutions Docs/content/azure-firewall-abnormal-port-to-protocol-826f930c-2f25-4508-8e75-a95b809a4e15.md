# Abnormal Port to Protocol

Identifies communication for well known protocol over a non-standard port based on learning period activity. This can indicate malicious communication (C2) or exfiltration by attackers trying to communicate over known ports (22:SSH, 80:HTTP) but dont use the known protocol headers to match the port number.  Configurable Parameters:  - Learning period time - learning period for protocol learning in days. Default is set to 7.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **ID** | `826f930c-2f25-4508-8e75-a95b809a4e15` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, CommandAndControl |
| **Techniques** | T1041, T1571 |
| **Required Connectors** | [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Analytic%20Rules/Azure%20Firewall%20-%20Abnormal%20Port%20to%20Protocol.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure Firewall](../solutions/azure-firewall.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
