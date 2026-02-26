# MimecastDLP_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (12 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MimecastDLP_CL.json)

| Column Name | Type |
|:------------|:-----|
| action_s | string |
| eventTime_d | datetime |
| messageId_s | string |
| mimecastEventCategory_s | string |
| mimecastEventId_s | string |
| policy_s | string |
| recipientAddress_s | string |
| route_s | string |
| senderAddress_s | string |
| subject_s | string |
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

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [MimecastSEG](../solutions/mimecastseg.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast Data Leak Prevention - Hold](../content/mimecastseg-mimecast-data-leak-prevention-hold-3e12b7b1-75e5-497c-ba01-b6cb30b60d7f-ff090522.md) |  |
| [Mimecast Data Leak Prevention - Notifications](../content/mimecastseg-mimecast-data-leak-prevention-notifications-1818aeaa-4cc8-426b-ba54-539de896d299-b39fc5bc.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

