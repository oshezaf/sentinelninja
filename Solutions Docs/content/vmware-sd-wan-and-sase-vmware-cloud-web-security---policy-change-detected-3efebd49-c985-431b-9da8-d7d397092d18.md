# VMware Cloud Web Security - Policy Change Detected

This Analytics rule provides notifications when a VMware CWS policy has been modified. These alerts serve audit purposes. Policy changes might lower the level of security controls.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware SD-WAN and SASE](../solutions/vmware-sd-wan-and-sase.md) |
| **ID** | `3efebd49-c985-431b-9da8-d7d397092d18` |
| **Severity** | Informational |
| **Kind** | Scheduled |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Analytic%20Rules/vmw-sase-cws-policychange.yaml) |

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
