# Detect .NET runtime being loaded in JScript for code execution

This query detects .NET being loaded from wscript or cscript to run .NET code, such as cactustorch and sharpshooter. All based on the DotNetToJScript by James Foreshaw documented here https://github.com/tyranid/DotNetToJScript.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [FalconFriday](../solutions/falconfriday.md) |
| **ID** | `9f921513-65f3-48a2-ae7d-326c5901c55e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday/Analytic%20Rules/DotNetToJScript.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to FalconFriday](../solutions/falconfriday.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
