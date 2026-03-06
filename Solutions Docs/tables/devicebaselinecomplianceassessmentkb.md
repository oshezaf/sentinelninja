# DeviceBaselineComplianceAssessmentKB

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Information about various security configurations used by baseline compliance to assess devices

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicebaselinecomplianceassessmentkb-table) |

## Schema (11 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicebaselinecomplianceassessmentkb)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| BenchmarkProfileLevels | dynamic | List of benchmark compliance levels for which the configuration is applicable |
| CCEReference | string | Unique Common Configuration Enumeration (CCE) identifier for the configuration |
| ConfigurationBenchmark | string | Industry benchmark recommending the configuration |
| ConfigurationCategory | string | Category or grouping to which the configuration belongs |
| ConfigurationDescription | string | Description of the configuration |
| ConfigurationId | string | Unique identifier for a specific configuration |
| ConfigurationName | string | Display name of the configuration |
| ConfigurationRationale | string | Description of any associated risks and rationale behind the configuration |
| RecommendedValue | dynamic | Set of expected values for the current device setting to be compliant |
| RemediationOptions | string | Recommended actions to reduce or address any associated risks |
| Source | dynamic | The registry path or other location used to determine the current device setting |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

