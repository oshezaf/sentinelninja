# MimecastSIEM_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (18 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MimecastSIEM_CL.json)

| Column Name | Type |
|:------------|:-----|
| acc_s | string |
| aCode_s | string |
| Act_s | string |
| AttCnt_s | string |
| AttNames_s | string |
| AttSize_s | string |
| datetime_d | datetime |
| Hld_s | string |
| logType_s | string |
| mimecastEventCategory_s | string |
| mimecastEventId_s | string |
| MsgId_s | string |
| MsgSize_s | string |
| reason_s | string |
| Sender_s | string |
| Subject_s | string |
| time_generated | datetime |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [MimecastSEG](../solutions/mimecastseg.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Secure Email Gateway](../connectors/mimecastsiemapi.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (7)

**In solution [MimecastSEG](../solutions/mimecastseg.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast Secure Email Gateway - AV](../content/mimecastseg-mimecast-secure-email-gateway-av-0f0dc725-29dc-48c3-bf10-bd2f34fd1cbb-b6da5aa5.md) |  |
| [Mimecast Secure Email Gateway - Attachment Protect](../content/mimecastseg-mimecast-secure-email-gateway-attachment-protect-72264f4f-61fb-4f4f-96c4-635571a376c2-c674cc1a.md) |  |
| [Mimecast Secure Email Gateway - Impersonation Protect](../content/mimecastseg-mimecast-secure-email-gateway-impersonation-protect-7034abc9-6b66-4533-9bf3-056672fd9d9e-b1e81453.md) |  |
| [Mimecast Secure Email Gateway - Internal Email Protect](../content/mimecastseg-mimecast-secure-email-gateway-internal-email-protect-5b66d176-e344-4abf-b915-e5f09a6430ef-0c1bbd94.md) |  |
| [Mimecast Secure Email Gateway - Spam Event Thread](../content/mimecastseg-mimecast-secure-email-gateway-spam-event-thread-df1b9377-5c29-4928-872f-9934a6b4f611-66673cf6.md) |  |
| [Mimecast Secure Email Gateway - URL Protect](../content/mimecastseg-mimecast-secure-email-gateway-url-protect-ea19dae6-bbb3-4444-a1b8-8e9ae6064aab-c57aa8c4.md) |  |
| [Mimecast Secure Email Gateway - Virus](../content/mimecastseg-mimecast-secure-email-gateway-virus-30f73baa-602c-4373-8f02-04ff5e51fc7f-9020a6da.md) |  |

### Workbooks (1)

**In solution [MimecastSEG](../solutions/mimecastseg.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MimecastSEGworkbook](../content/mimecastseg-mimecastsegworkbook-d46e4786.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

