# VMware SD-WAN Edge - IDS/IPS Signature Update Succeeded

The VMware SD-WAN Edge Management Plane reported a successful IDS/IPS signature update. New signatures might impact Data Plane traffic, therefore an audit event is generated.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware SD-WAN and SASE](../solutions/vmware-sd-wan-and-sase.md) |
| **ID** | `6364be84-9f13-4fd8-8b4a-8ccb43a89376` |
| **Severity** | Informational |
| **Kind** | Scheduled |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Analytic%20Rules/vmw-sdwan-idps-update-success.yaml) |

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
