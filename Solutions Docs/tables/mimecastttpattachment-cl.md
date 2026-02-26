# MimecastTTPAttachment_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (17 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MimecastTTPAttachment_CL.json)

| Column Name | Type |
|:------------|:-----|
| actionTriggered_s | string |
| date_t | datetime |
| definition_s | string |
| details_s | string |
| fileHash_s | string |
| fileName_s | string |
| fileType_s | string |
| messageId_s | string |
| mimecastEventCategory_s | string |
| mimecastEventId_s | string |
| recipientAddress_s | string |
| result_s | string |
| route_s | string |
| senderAddress_s | string |
| subject_s | string |
| time_generated | datetime |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [MimecastTTP](../solutions/mimecastttp.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [MimecastTTP](../solutions/mimecastttp.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast Targeted Threat Protection - Attachment Protect](../content/mimecastttp-mimecast-targeted-threat-protection-attachment-protect-aa75944c-a663-4901-969e-7b55bfa49a73-ccc92056.md) |  |

### Workbooks (1)

**In solution [MimecastTTP](../solutions/mimecastttp.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MimecastTTPWorkbook](../content/mimecastttp-mimecastttpworkbook-22b40acb.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

