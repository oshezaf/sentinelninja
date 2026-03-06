# DeviceBaselineComplianceAssessment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Baseline compliance assessment snapshot, which indicates the status of various security configurations related to baseline profiles on devices

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicebaselinecomplianceassessment-table) |

## Schema (12 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicebaselinecomplianceassessment)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ConfigurationId | string | Unique identifier for a specific configuration |
| CurrentValue | dynamic | Set of detected values found on the device |
| DeviceId | string | Unique identifier for the device in the service |
| DeviceName | string | Fully qualified domain name (FQDN) of the device |
| IsApplicable | boolean | Indicates whether the configuration or policy is applicable |
| IsCompliant | nullable bool | Indicates whether the device that initiated the event is compliant or not |
| IsExempt | boolean | Indicates whether the device is exempt from having the baseline configuration |
| OSPlatform | string | Platform of the operating system running on the device. This indicates specific operating systems, including variations within the same family, such as Windows 11, Windows 10 and Windows 7. |
| OSVersion | string | Version of the operating system running on the device |
| ProfileId | string | Unique identifier for the profile |
| RecommendedValue | dynamic | Set of expected values for the current device setting to be compliant |
| Source | dynamic | The registry path or other location used to determine the current device setting |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

