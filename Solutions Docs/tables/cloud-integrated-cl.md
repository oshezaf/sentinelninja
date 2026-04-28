# Cloud_Integrated_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (24 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Mimecast_Cloud_Integrated_CL.json)

| Column Name | Type |
|:------------|:-----|
| accountId | string |
| aggregateId | string |
| attachments | string |
| category | string |
| direction | string |
| historicalMail | bool |
| messageId | string |
| offset | real |
| partition | real |
| policiesApplied | string |
| processingId | string |
| recipients | string |
| senderEnvelope | string |
| senderHeader | string |
| senderIp | string |
| source | string |
| subject | string |
| subtype | string |
| tags | string |
| threatState | string |
| threatType | string |
| TimeGenerated | datetime |
| timestamp | real |
| type_ | string |

## Solutions (1)

This table is used by the following solutions:

- [Mimecast](../solutions/mimecast.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Cloud Integrated](../connectors/mimecastciapi.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast_Cloud_Integrated_Workbook](../content/mimecast-mimecast-cloud-integrated-workbook-5bb9e2b3.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MimecastCloudIntegrated](../parsers/mimecastcloudintegrated.md) | [Mimecast](../solutions/mimecast.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

