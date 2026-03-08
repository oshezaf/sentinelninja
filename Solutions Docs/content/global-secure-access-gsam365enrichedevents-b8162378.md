# GSAM365EnrichedEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Global Secure Access](../solutions/global-secure-access.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Global%20Secure%20Access/Workbooks/GSAM365EnrichedEvents.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`EnrichedMicrosoft365AuditLogs`](../tables/enrichedmicrosoft365auditlogs.md) |  | ✓ | ✗ | ? |
| [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md) |  | ✓ | ✗ | ✓ |
| [`OfficeActivity`](../tables/officeactivity.md) | `OfficeWorkload in "Exchange,OneDrive,SPO/OneDrive,SharePoint,Teams"` | ✓ | ✗ | ✓ |
| [`Operation`](../tables/operation.md) |  | ✗ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Workbooks](workbooks.md) · [Back to Global Secure Access](../solutions/global-secure-access.md)

