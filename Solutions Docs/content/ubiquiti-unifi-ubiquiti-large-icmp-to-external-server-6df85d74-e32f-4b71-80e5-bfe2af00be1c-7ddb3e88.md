# Ubiquiti - Large ICMP to external server

Detects large ICMP packets to external host.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Ubiquiti UniFi](../solutions/ubiquiti-unifi.md) |
| **ID** | `6df85d74-e32f-4b71-80e5-bfe2af00be1c` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, CommandAndControl |
| **Techniques** | T1041, T1572 |
| **Required Connectors** | [CustomLogsAma](../connectors/customlogsama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Ubiquiti%20UniFi/Analytic%20Rules/UbiquitiL2RLargeIcmp.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Ubiquiti_CL`](../tables/ubiquiti-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Ubiquiti UniFi](../solutions/ubiquiti-unifi.md)

