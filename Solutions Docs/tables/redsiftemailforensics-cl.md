# RedSiftEmailForensics_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (28 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Sift%5CData%20Connectors%5CRedSift_ccp/RedSift_EmailForensics_table.json)

| Column Name | Type |
|:------------|:-----|
| ActivityId | int |
| ActivityName | string |
| CategoryName | string |
| CategoryUid | int |
| ClassName | string |
| ClassUid | int |
| CorrelationUid | string |
| Direction | string |
| DkimResult | string |
| DstHostname | string |
| EmailFrom | string |
| EmailMessageUid | string |
| EmailReturnPath | string |
| EmailSubject | string |
| EmailUrls | dynamic |
| Enrichments | dynamic |
| EventTime | datetime |
| LogName | string |
| Message | string |
| Observables | dynamic |
| ProductName | string |
| ProtocolName | string |
| Severity | string |
| SeverityId | int |
| SpfResult | string |
| SrcIp | string |
| TimeGenerated | datetime |
| TypeUid | int |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Red Sift](../solutions/red-sift.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Red Sift Events (CCP Push)](../connectors/redsiftpush.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [Red Sift](../solutions/red-sift.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Red Sift - Email with URL to previously unseen domain](../content/red-sift-red-sift-email-with-url-to-previously-unseen-domain-8972b513-12a2-4b46-8263-3f091d88a8bc-3eb79665.md) |  |
| [Red Sift - New email with URL from previously unseen sender](../content/red-sift-red-sift-new-email-with-url-from-previously-unseen-sender-6e0b70d4-0ab8-480e-9707-8ad45fc21a65-b32b0a35.md) |  |
| [Red Sift - New email with URL from previously unseen source](../content/red-sift-red-sift-new-email-with-url-from-previously-unseen-source-6084dfd8-830b-4839-9a9c-5f08cc984729-91610c56.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

