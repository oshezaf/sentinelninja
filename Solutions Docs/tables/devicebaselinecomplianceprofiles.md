# DeviceBaselineComplianceProfiles

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Baseline profiles used for monitoring device baseline compliance

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicebaselinecomplianceprofiles-table) |

## Schema (13 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicebaselinecomplianceprofiles)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| BaseBenchmark | string | Industry benchmark on top of which the profile was created |
| BenchmarkProfileLevel | string | Benchmark compliance level set for the profile |
| BenchmarkVersion | string | Version of the industry benchmark on top of which the profile was created |
| CreatedBy | string | Identity of the user account who created the profile |
| CreatedOn | datetime | Date and time when the profile was created |
| LastUpdatedBy | string | Identity of the user account who last updated the profile |
| LastUpdatedOn | datetime | Date and time when the profile was last updated |
| OSPlatform | dynamic | Platform of the operating system running on the device. This indicates specific operating systems, including variations within the same family, such as Windows 11, Windows 10 and Windows 7. |
| OSVersion | string | Version of the operating system running on the device |
| ProfileDescription | string | Optional description providing additional information related to the profile |
| ProfileId | string | Unique identifier for the profile |
| ProfileName | string | Display name of the profile |
| Status | boolean | Indicator of the profile status - can be Enabled or Disabled |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

