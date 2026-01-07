# Critical Threat Detected

This creates an incident in the event a critical threat was identified on a Carbon Black managed endpoint.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| **ID** | `2ca4e7fc-c61a-49e5-9736-5da8035c47e0` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement |
| **Techniques** | T1210 |
| **Required Connectors** | [VMwareCarbonBlack](../connectors/vmwarecarbonblack.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Carbon%20Black%20Cloud/Analytic%20Rules/CriticalThreatDetected.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
