# VMware Edge Cloud Orchestrator - New LAN-Side Client Device Detected

This analytics rule creates notifications of newly connected devices. These clients are connected to the LAN interface of the Edge.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware SD-WAN and SASE](../solutions/vmware-sd-wan-and-sase.md) |
| **ID** | `69c0644f-4ad5-41b6-9e09-a94c072ab80e` |
| **Severity** | Informational |
| **Kind** | Scheduled |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Analytic%20Rules/vmw-sdwan-lanside-devicedetect.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to VMware SD-WAN and SASE](../solutions/vmware-sd-wan-and-sase.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
