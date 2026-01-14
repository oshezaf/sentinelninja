# VMware SD-WAN Edge - Device Congestion Alert - Packet Drops

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

The VMware Edge Cloud Orchestrator reported an edge congestion event, where the Edge is dropping a large number of packets on one of its interfaces. This could indicate an ongoing Denial of Service attack against an appliance. Please make sure that Network Flood Protection is turned on.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware SASE](../solutions/vmware-sase.md) |
| **ID** | `a88ead0a-f022-48d6-8f53-e5a164c4c72e` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498 |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Analytic%20Rules/vmw-sdwan-device-congestion.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to VMware SASE](../solutions/vmware-sase.md)

