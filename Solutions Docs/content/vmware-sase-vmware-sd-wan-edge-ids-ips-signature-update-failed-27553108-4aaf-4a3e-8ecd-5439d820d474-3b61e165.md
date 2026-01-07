# VMware SD-WAN Edge - IDS/IPS Signature Update Failed

The VMware SD-WAN Edge Management Plane reported a failed IDS/IPS signature update. This can indicate a potential management plane issue, an Edge OS version mismatch (IDS/IPS has been introduced in release 5.2.0.0), or a software issue.  If the Edge was able to download signature files before, this error means that the IPS/IDS engine can still provide a level of protection, however, signatures might be missing or inaccurate. If the Edge has no valid signature file, this error could indicate that

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware SASE](../solutions/vmware-sase.md) |
| **ID** | `27553108-4aaf-4a3e-8ecd-5439d820d474` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Analytic%20Rules/vmw-sdwan-idps-updatefailed.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`VMware_VECO_EventLogs_CL`](../tables/vmware-veco-eventlogs-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to VMware SASE](../solutions/vmware-sase.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
