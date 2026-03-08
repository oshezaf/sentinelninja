# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Outbound SSH/SCP Connections

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

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

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`ASimNetworkSessionSonicWallFirewall`](../asim/asimnetworksessionsonicwallfirewall.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to SonicWall Firewall](../solutions/sonicwall-firewall.md)

