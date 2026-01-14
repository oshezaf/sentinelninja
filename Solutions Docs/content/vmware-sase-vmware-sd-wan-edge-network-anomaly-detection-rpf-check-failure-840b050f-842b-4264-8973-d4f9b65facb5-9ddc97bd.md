# VMware SD-WAN Edge - Network Anomaly Detection - RPF Check Failure

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

The VMware SD-WAN Edge appliance received packets that failed a Reverse Path Forwarding (RPF) Check.  Reverse path forwarding (RPF) check is a network security mechanism that verifies whether the source IP address of a packet is reachable through the incoming interface on which the packet is received. The packet is dropped if the source IP address is not reachable through the incoming interface.  RPF checks prevent spoofing attacks, in which an attacker uses a forged source IP address to make it

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware SASE](../solutions/vmware-sase.md) |
| **ID** | `840b050f-842b-4264-8973-d4f9b65facb5` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498 |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Analytic%20Rules/vmw-sdwan-rpfcheck.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to VMware SASE](../solutions/vmware-sase.md)

