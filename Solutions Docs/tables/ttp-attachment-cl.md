# Ttp_Attachment_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Mimecast_TTP_Attachment.json)

| Column Name | Type |
|:------------|:-----|
| actionTriggered | string |
| Date | string |
| definition | string |
| details | string |
| fileHash | string |
| fileName | string |
| fileType | string |
| messageId | string |
| recipientAddress | string |
| result | string |
| route | string |
| senderAddress | string |
| subject | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Mimecast](../solutions/mimecast.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast Targeted Threat Protection - Attachment Protect](../content/mimecast-mimecast-targeted-threat-protection-attachment-protect-617a55be-a8d8-49c1-8687-d19a0231056f-075f1f5f.md) |  |

### Workbooks (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast_TTP_Workbook](../content/mimecast-mimecast-ttp-workbook-c40cabd0.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MimecastTTPAttachment](../parsers/mimecastttpattachment.md) | [Mimecast](../solutions/mimecast.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

