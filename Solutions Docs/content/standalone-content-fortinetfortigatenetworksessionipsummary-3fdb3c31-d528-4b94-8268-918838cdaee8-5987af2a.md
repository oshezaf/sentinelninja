# FortinetFortigateNetworkSessionIPSummary

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This summary rule aggregates network session logs from Fortinet Fortigate devices, providing hourly insights into session count, data sent and data received by device actions, destination port, protocol, source and destination IP addresses.

| Attribute | Value |
|:----------|:------|
| **Type** | Summary Rule |
| **Solution** | Standalone Content |
| **ID** | `3fdb3c31-d528-4b94-8268-918838cdaee8` |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Summary rules/Network/FortinetFortigateNetworkSessionIPSummary.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct startswith "FortiGate"`<br>`DeviceVendor == "Fortinet"` | ✓ | ✓ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Summary Rules](summary-rules.md)

