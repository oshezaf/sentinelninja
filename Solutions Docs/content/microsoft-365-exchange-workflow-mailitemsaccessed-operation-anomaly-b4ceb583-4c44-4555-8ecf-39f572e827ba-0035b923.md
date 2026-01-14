# Exchange workflow MailItemsAccessed operation anomaly

'Identifies anomalous increases in Exchange mail items accessed operations. The query leverages KQL built-in anomaly detection algorithms to find large deviations from baseline patterns. Sudden increases in execution frequency of sensitive actions should be further investigated for malicious activity. Manually change scorethreshold from 1.5 to 3 or higher to reduce the noise based on outliers flagged from the query criteria. Read more about MailItemsAccessed- https://learn.microsoft.com/en-us/pu

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft 365](../solutions/microsoft-365.md) |
| **ID** | `b4ceb583-4c44-4555-8ecf-39f572e827ba` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1114 |
| **Required Connectors** | [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365/Analytic%20Rules/MailItemsAccessedTimeSeries.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OfficeActivity`](../tables/officeactivity.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft 365](../solutions/microsoft-365.md)

