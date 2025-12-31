# VMware SD-WAN Edge - IDS/IPS Alert triggered (Search API)

The VMware SD-WAN Edge appliance captured a potentially malicious traffic flow. Please investigate the IOC information available.  This analytics rule analyses Search API streams. Search API queries report only IDS/IPS Alerts. In case you would also need Network Flood Protection, please enable Syslog collection using AMA.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware SD-WAN and SASE](../solutions/vmware-sd-wan-and-sase.md) |
| **ID** | `44f78dbf-9f29-4ec0-aaca-ab5bf0b559af` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement |
| **Techniques** | T1210 |
| **Required Connectors** | [VMwareSDWAN](../connectors/vmwaresdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20SD-WAN%20and%20SASE/Analytic%20Rules/vmw-sdwan-idps-alert-api.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`VMware_SDWAN_FirewallLogs_CL`](../tables/vmware-sdwan-firewalllogs-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](../analytic-rules.md)
- [← Back to VMware SD-WAN and SASE](../solutions/vmware-sd-wan-and-sase.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
