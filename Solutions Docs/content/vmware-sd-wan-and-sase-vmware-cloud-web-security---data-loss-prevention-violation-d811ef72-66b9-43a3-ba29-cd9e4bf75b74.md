# VMware Cloud Web Security - Data Loss Prevention Violation

This Analytics rule receives VMware CWS DLP alerts and combines them with their respective Web Log events. Each Data Loss Prevention event is an alert of policy violations and should be investigated.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware SD-WAN and SASE](../solutions/vmware-sd-wan-and-sase.md) |
| **ID** | `d811ef72-66b9-43a3-ba29-cd9e4bf75b74` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Analytic%20Rules/vmw-sase-cwsdlp-violation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`VMware_CWS_DLPLogs_CL`](../tables/vmware-cws-dlplogs-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to VMware SD-WAN and SASE](../solutions/vmware-sd-wan-and-sase.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
