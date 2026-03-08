# Acronis - Endpoints Infected by Ransomware

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detected and blocked ransomware.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md) |
| **ID** | `cc3a2ea1-2dbb-4e5e-acb1-866b9bffb85c` |
| **Tactics** | Impact |
| **Techniques** | T1486 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Acronis%20Cyber%20Protect%20Cloud/Hunting%20Queries/AcronisEndpointsInfectedByRansomware.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID == "ActiveProtectionBlocksSuspiciousActivity"`<br>`DeviceVendor == "Acronis"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md)

