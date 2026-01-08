# AV detections related to Zinc actors

'This query looks for Microsoft Defender AV detections related to  Zinc threat actor. In Microsoft Sentinel the SecurityAlerts table includes only the Device Name of the affected device, this query joins the DeviceInfo table to clearly connect other information such as Device group, ip, etc.   This would allow the Microsoft Sentinel analyst to have more context related to the alert, if available.  Reference: https://www.microsoft.com/security/blog/2022/09/29/zinc-weaponizing-open-source-software

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Zinc Open Source](../solutions/zinc-open-source.md) |
| **ID** | `3705158d-e008-49c9-92dd-e538e1549090` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1486 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zinc%20Open%20Source/Analytic%20Rules/ZincOctober2022_AVHits_IOC.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceInfo`](../tables/deviceinfo.md)
- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Zinc Open Source](../solutions/zinc-open-source.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
