# SonicWall - Allowed SSH, Telnet, and RDP Connections

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule identifies allowed inbound SSH, Telnet, and RDP connections. This analytic rule leverages the SonicWall Firewall ASIM Network Session parser (ASimNetworkSessionSonicWallFirewall).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SonicWall Firewall](../solutions/sonicwall-firewall.md) |
| **ID** | `27f1a570-5f20-496b-88f6-a9aa2c5c9534` |
| **Severity** | Medium |
| **Status** | Experimental |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, Persistence, CredentialAccess, Discovery, LateralMovement, Collection, Exfiltration, Impact |
| **Techniques** | T1190, T1133, T1059, T1133, T1110, T1003, T1087, T1018, T1021, T1005, T1048, T1041, T1011, T1567, T1490 |
| **Required Connectors** | [CEF](../connectors/cef.md), [SonicWallFirewall](../connectors/sonicwallfirewall.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonicWall%20Firewall/Analytic%20Rules/AllowedInboundSSHTelnetRDPConnections.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SonicWall Firewall](../solutions/sonicwall-firewall.md)

