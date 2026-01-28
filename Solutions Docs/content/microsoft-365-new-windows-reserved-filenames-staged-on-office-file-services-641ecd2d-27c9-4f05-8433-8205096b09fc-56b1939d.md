# New Windows Reserved Filenames staged on Office file services

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This identifies new Windows Reserved Filenames on Office services like SharePoint and OneDrive in the past 7 days. It also detects when a user uploads these files to another user's workspace, which may indicate malicious activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft 365](../solutions/microsoft-365.md) |
| **ID** | `641ecd2d-27c9-4f05-8433-8205096b09fc` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1105 |
| **Required Connectors** | [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365/Hunting%20Queries/New_WindowsReservedFileNamesOnOfficeFileServices.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`OfficeActivity`](../tables/officeactivity.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Microsoft 365](../solutions/microsoft-365.md)

