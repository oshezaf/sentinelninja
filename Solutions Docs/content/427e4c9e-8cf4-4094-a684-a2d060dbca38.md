# Port Scan Detected

This alert creates an incident when a source IP addresses attempt to communicate with a large amount of distinct ports within a short period.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Sophos XG Firewall](../solutions/sophos-xg-firewall.md) |
| **ID** | `427e4c9e-8cf4-4094-a684-a2d060dbca38` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1046 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Sophos%20XG%20Firewall/Analytic%20Rules/PortScanDetected.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Sophos XG Firewall](../solutions/sophos-xg-firewall.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
