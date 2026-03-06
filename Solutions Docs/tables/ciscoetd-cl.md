# CiscoETD_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (41 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CiscoETD_CL.json)

| Column Name | Type |
|:------------|:-----|
| action_folder_s | string |
| action_isAutoRemediated_b | bool |
| action_publicApiClientId_s | string |
| action_timestamp_t | datetime |
| action_type_s | string |
| attachments_s | string |
| clientIP_s | string |
| Computer | string |
| deliveredTo_s | string |
| direction_s | string |
| domain_s | string |
| envelopeTo_s | string |
| fromAddress_s | string |
| id_g | guid |
| internetMessageId_s | string |
| mailboxes_s | string |
| ManagementGroupName | string |
| MG | guid |
| RawData | string |
| returnPath_s | string |
| secureEmailGateway_headerName_s | string |
| secureEmailGateway_originalCIP_s | string |
| senderName_s | string |
| serverIP_s | string |
| SourceSystem | string |
| subject_s | string |
| TenantId | guid |
| TimeGenerated | datetime |
| timestamp_t | datetime |
| toAddresses_s | string |
| urls_s | string |
| verdict_businessRisk_s | string |
| verdict_category_s | string |
| verdict_isManualVerdict_b | bool |
| verdict_isRetroVerdict_b | bool |
| verdict_latestVerdict_s | string |
| verdict_originalVerdict_s | string |
| verdict_publicApiClientId_s | string |
| verdict_techniques_s | string |
| verdict_timestamp_t | datetime |
| verdict_userId_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Cisco ETD](../solutions/cisco-etd.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco ETD](../connectors/ciscoetd.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Cisco ETD](../solutions/cisco-etd.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CiscoETD](../content/cisco-etd-ciscoetd-5508b27c.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

