# Outbound SSH/SCP Connections

This query looks for outbound SSH/SCP connections identified by the expected port number (22) or by the SonicWall Deep Packet Inspection services. This query leverages the SonicWall Firewall ASIM Network Session parser.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SonicWall Firewall](../solutions/sonicwall-firewall.md) |
| **ID** | `dedb8fb9-3caa-4b00-ae88-1898eed78917` |
| **Tactics** | Exfiltration |
| **Techniques** | T1020, T1048 |
| **Required Connectors** | [SonicWallFirewall](../connectors/sonicwallfirewall.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonicWall%20Firewall/Hunting%20Queries/OutboundSSHConnections.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to SonicWall Firewall](../solutions/sonicwall-firewall.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

