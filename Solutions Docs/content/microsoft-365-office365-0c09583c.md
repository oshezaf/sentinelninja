# Office365

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Microsoft 365](../solutions/microsoft-365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365/Workbooks/Office365.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`OfficeActivity`](../tables/officeactivity.md) | `ExternalAccess == "True"`<br>`OfficeWorkload in "Exchange,OneDrive,SharePoint"`<br>`Operation in "FileDownloaded,FileUploaded,MailboxLogin"`<br>`Operation contains "File"`<br>`Operation contains "Folder"`<br>`Operation contains "add"`<br>`Operation contains "create"`<br>`Operation contains "delete"`<br>`Operation contains "group"`<br>`Operation contains "update"`<br>`Operation contains "user"`<br>`UserType == "Admin"` | ✓ | ✗ | ? |
| [`Operation`](../tables/operation.md) |  | ? | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Microsoft 365](../solutions/microsoft-365.md)

