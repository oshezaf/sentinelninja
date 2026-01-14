# VMware Edge Cloud Orchestrator - New LAN-Side Client Device Detected

This analytics rule creates notifications of newly connected devices. These clients are connected to the LAN interface of the Edge.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware SASE](../solutions/vmware-sase.md) |
| **ID** | `69c0644f-4ad5-41b6-9e09-a94c072ab80e` |
| **Severity** | Informational |
| **Kind** | Scheduled |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Analytic%20Rules/vmw-sdwan-lanside-devicedetect.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to VMware SASE](../solutions/vmware-sase.md)

