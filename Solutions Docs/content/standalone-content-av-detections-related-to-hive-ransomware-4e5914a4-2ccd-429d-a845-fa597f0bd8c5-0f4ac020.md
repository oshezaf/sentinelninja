# AV detections related to Hive Ransomware

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for Microsoft Defender AV detections related to Hive Ransomware. In Microsoft Sentinel the SecurityAlerts table includes only the Device Name of the affected device, this query joins the DeviceInfo table to clearly connect other information such as Device group, ip, logged on users etc. This would allow the Microsoft Sentinel analyst to have more context related to the alert, if available.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `4e5914a4-2ccd-429d-a845-fa597f0bd8c5` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1486 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/SecurityAlert/HiveRansomwareAVHits.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceInfo`](../tables/deviceinfo.md)
- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

