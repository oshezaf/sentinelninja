# Office365 Sharepoint File transfer above threshold

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies Office365 Sharepoint File Transfers above certain threshold in a 15min time period.  Please note that entity mapping for arrays is not supported, so when there is a single value in an array, we will pull that value from the array as a single string to populate the entity to support entity mapping features within Sentinel. Additionally, if the array is multivalued, we will input a string to indicate this with a unique hash so that matching will not occur.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft 365](../solutions/microsoft-365.md) |
| **ID** | `8b4f03e7-3460-4401-824d-e65a8dd464f0` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1020 |
| **Required Connectors** | [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365/Analytic%20Rules/sharepoint_file_transfer_above_threshold.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`OfficeActivity`](../tables/officeactivity.md) | `OfficeWorkload has_any "OneDrive,SharePoint"` | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft 365](../solutions/microsoft-365.md)

