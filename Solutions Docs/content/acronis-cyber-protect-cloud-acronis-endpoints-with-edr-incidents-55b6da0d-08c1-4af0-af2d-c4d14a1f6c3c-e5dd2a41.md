# Acronis - Endpoints with EDR Incidents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

A high number of endpoints with multiple incidents could indicate an ongoing attack.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md) |
| **ID** | `55b6da0d-08c1-4af0-af2d-c4d14a1f6c3c` |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Acronis%20Cyber%20Protect%20Cloud/Hunting%20Queries/AcronisEndpointsWithEDRIncidents.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID in "EDRIOCDetected,EDRIncidentDetected"`<br>`DeviceVendor == "Acronis"` | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md)

