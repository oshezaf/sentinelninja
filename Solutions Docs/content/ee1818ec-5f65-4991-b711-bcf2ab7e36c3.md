# Cisco Cloud Security - URI contains IP address

Malware can use IP address to communicate with C2.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| **ID** | `ee1818ec-5f65-4991-b711-bcf2ab7e36c3` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1071, T1567 |
| **Required Connectors** | [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Analytic%20Rules/CiscoUmbrellaURIContainsIPAddress.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to CiscoUmbrella](../solutions/ciscoumbrella.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
