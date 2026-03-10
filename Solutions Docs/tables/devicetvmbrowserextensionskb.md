# DeviceTvmBrowserExtensionsKB

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Browser extension details and permission information used in the Microsoft Defender Vulnerability Management browser extensions page

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicetvmbrowserextensionskb-table) |

## Schema (11 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmbrowserextensionskb)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| BrowserName | string | Name of the web browser with the extension |
| ExtensionDescription | string | Description from the publisher about the extension |
| ExtensionId | string | Unique identifier for the browser extension |
| ExtensionName | string | Name of the extension |
| ExtensionRisk | string | Risk level for the extension based on the permissions it has requested |
| ExtensionVersion | dynamic | Version number of the extension |
| IsPermissionRequired | string | Whether the permission is required for the extension to run, or optional |
| PermissionDescription | string | Explanation of what the permission is supposed to do |
| PermissionId | string | Unique identifier for the permission |
| PermissionName | string | Name given to each permission based on what the extension is asking for |
| PermissionRisk | string | Risk level for the permission based on the type of access it would allow |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

