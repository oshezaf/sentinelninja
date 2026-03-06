# DeviceTvmBrowserExtensions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Browser extension installations found on devices from Microsoft Defender Vulnerability Management

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicetvmbrowserextensions-table) |

## Schema (10 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmbrowserextensions)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| BrowserName | string | Name of the web browser with the extension |
| DeviceId | string | Unique identifier for the device in the service |
| ExtensionDescription | string | Description from the publisher about the extension |
| ExtensionId | string | Unique identifier for the browser extension |
| ExtensionName | string | Name of the extension |
| ExtensionRisk | string | Risk level for the extension based on the permissions it has requested |
| ExtensionVendor | string | Name of the vendor offering the extension |
| ExtensionVersion | string | Version number of the extension |
| InstallationTime | datetime | Date and time when the browser extension was first installed |
| IsActivated | string | Whether the extension is turned on or off on the devices |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

