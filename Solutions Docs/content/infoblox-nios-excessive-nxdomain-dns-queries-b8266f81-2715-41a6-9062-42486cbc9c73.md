# Excessive NXDOMAIN DNS Queries

This creates an incident in the event a client generates excessive amounts of DNS queries for non-existent domains.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Infoblox NIOS](../solutions/infoblox-nios.md) |
| **ID** | `b8266f81-2715-41a6-9062-42486cbc9c73` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1568, T1008 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20NIOS/Analytic%20Rules/ExcessiveNXDOMAINDNSQueries.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Infoblox NIOS](../solutions/infoblox-nios.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
