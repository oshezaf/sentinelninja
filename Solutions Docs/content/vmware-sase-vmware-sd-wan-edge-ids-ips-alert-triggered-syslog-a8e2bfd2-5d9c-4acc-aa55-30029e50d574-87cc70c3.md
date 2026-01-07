# VMware SD-WAN Edge - IDS/IPS Alert triggered (Syslog)

The VMware SD-WAN Edge appliance captured a potentially malicious traffic flow. Please investigate the IOC information available.  This analytics rule analyzes Syslog streams.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware SASE](../solutions/vmware-sase.md) |
| **ID** | `a8e2bfd2-5d9c-4acc-aa55-30029e50d574` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement |
| **Techniques** | T1210 |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Analytic%20Rules/vmw-sdwan-idps-alert-syslog.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to VMware SASE](../solutions/vmware-sase.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
