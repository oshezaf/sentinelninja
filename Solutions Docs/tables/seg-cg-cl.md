# Seg_Cg_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (59 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Mimecast_Seg_Cg_CL.json)

| Column Name | Type |
|:------------|:-----|
| accountId | string |
| action | string |
| aggregateId | string |
| attachments | string |
| customNameMatch | string |
| customThreatDictionary | string |
| delivered | string |
| deliveryAttempts | string |
| deliveryErrors | string |
| destinationIp | string |
| direction | string |
| emailSize | string |
| fileExtension | string |
| fileName | string |
| holdReason | string |
| Hostname | string |
| internalUserName | string |
| itemsDetected | string |
| Logtype | string |
| md5 | string |
| messageId | string |
| mimecastThreatDictionary | string |
| monitoredDomainSource | string |
| newDomain | string |
| numberAttachments | string |
| offset | real |
| partition | real |
| processingId | string |
| recipients | string |
| rejectionCode | string |
| rejectionInfo | string |
| rejectionType | string |
| replyMismatch | string |
| route | string |
| scanResults | string |
| senderDomain | string |
| senderEnvelope | string |
| senderHeader | string |
| senderIp | string |
| sha1 | string |
| sha256 | string |
| similarCustomExternalDomain | string |
| similarDomain | string |
| similarInternalDomain | string |
| similarMimecastExternalDomain | string |
| spamInfo | string |
| spamProcessingDetail | string |
| subject | string |
| subtype | string |
| taggedExternal | string |
| taggedMalicious | string |
| TimeGenerated | datetime |
| timestamp | real |
| tlsCipher | string |
| tlsUsed | string |
| tlsVersion | string |
| totalSizeAttachments | string |
| urlCategory | string |
| virusFound | string |

## Solutions (1)

This table is used by the following solutions:

- [Mimecast](../solutions/mimecast.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Secure Email Gateway](../connectors/mimecastsegapi.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (7)

**In solution [Mimecast](../solutions/mimecast.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast Secure Email Gateway - AV](../content/mimecast-mimecast-secure-email-gateway-av-33bf0cc9-e568-42bf-9571-c22adf7be66d-a67c05af.md) |  |
| [Mimecast Secure Email Gateway - Attachment Protect](../content/mimecast-mimecast-secure-email-gateway-attachment-protect-72bd7b0c-493c-4fa5-8a95-7f6376b6cfb2-e2569fc9.md) |  |
| [Mimecast Secure Email Gateway - Impersonation Protect](../content/mimecast-mimecast-secure-email-gateway-impersonation-protect-2ef77cef-439f-4d94-848f-3eca67510d2f-6b6e10df.md) |  |
| [Mimecast Secure Email Gateway - Internal Email Protect](../content/mimecast-mimecast-secure-email-gateway-internal-email-protect-d3bd7640-3600-49f9-8d10-6fe312e68b4f-be669a3d.md) |  |
| [Mimecast Secure Email Gateway - Spam Event Thread](../content/mimecast-mimecast-secure-email-gateway-spam-event-thread-0cda82c8-e8f0-4117-896e-a10f1b43e64a-0143cdf0.md) |  |
| [Mimecast Secure Email Gateway - URL Protect](../content/mimecast-mimecast-secure-email-gateway-url-protect-80f244cd-b0d6-404e-9aed-37f7a66eda9f-f7c07f28.md) |  |
| [Mimecast Secure Email Gateway - Virus](../content/mimecast-mimecast-secure-email-gateway-virus-d78d7352-fa5a-47d4-b48f-cb2c3252c0eb-2e268db1.md) |  |

### Workbooks (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast_SEG_Workbook](../content/mimecast-mimecast-seg-workbook-c2026bf1.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MimecastCG](../parsers/mimecastcg.md) | [Mimecast](../solutions/mimecast.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

