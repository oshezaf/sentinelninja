# MimecastTTPImpersonation_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (18 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MimecastTTPImpersonation_CL.json)

| Column Name | Type |
|:------------|:-----|
| action_s | string |
| definition_s | string |
| eventTime_t | datetime |
| hits_s | string |
| id_s | string |
| identifiers_s | string |
| impersonationResults_s | string |
| messageId_s | string |
| mimecastEventCategory_s | string |
| mimecastEventId_s | string |
| recipientAddress_s | string |
| senderAddress_s | string |
| senderIpAddress_s | string |
| subject_s | string |
| taggedExternal_b | bool |
| taggedMalicious_b | bool |
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
| [Mimecast Targeted Threat Protection - Impersonation Protect](../content/mimecastttp-mimecast-targeted-threat-protection-impersonation-protect-d8e7eca6-4b59-4069-a31e-a022b2a12ea4-d8d320d6.md) |  |

### Workbooks (1)

**In solution [MimecastTTP](../solutions/mimecastttp.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MimecastTTPWorkbook](../content/mimecastttp-mimecastttpworkbook-22b40acb.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

