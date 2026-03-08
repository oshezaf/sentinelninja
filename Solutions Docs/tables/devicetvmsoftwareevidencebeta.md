# DeviceTvmSoftwareEvidenceBeta

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Evidence info about where a specific software was detected on a device

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicetvmsoftwareevidencebeta-table) |

## Schema (7 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmsoftwareevidencebeta)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| DeviceId | string | Unique identifier for the device in the service |
| DiskPaths | dynamic | Disk paths where file-level evidence indicating the existence of the software on a device was detected |
| LastSeenTime | string | Date and time when the device was last seen by this service |
| RegistryPaths | dynamic | Registry paths where evidence indicating the existence of the software on a device was detected |
| SoftwareName | string | Name of the software product |
| SoftwareVendor | string | Name of the software publisher |
| SoftwareVersion | string | Version number of the software product |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

