# Acronis - ASZ defence: Unauthorized operation is detected and blocked

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

An attempt to modify the protected Acronis Secure Zone partition was blocked.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md) |
| **ID** | `39310cb8-53bc-47c1-86c4-2ff9f0d3cc5f` |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Acronis%20Cyber%20Protect%20Cloud/Hunting%20Queries/AcronisUnauthorizedOperationIsDetected.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID == "ActiveProtectionDetectedAszPartitionAccessed"`<br>`DeviceVendor == "Acronis"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md)

