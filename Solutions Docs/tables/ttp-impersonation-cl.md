# Ttp_Impersonation_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Mimecast_TTP_Impersonation_CL.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| definition | string |
| eventTime | datetime |
| hits | real |
| id | string |
| identifiers | dynamic |
| impersonationResults | string |
| messageId | string |
| recipientAddress | string |
| senderAddress | string |
| senderIpAddress | string |
| subject | string |
| taggedExternal | bool |
| taggedMalicious | bool |
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
| [Mimecast Targeted Threat Protection - Impersonation Protect](../content/mimecast-mimecast-targeted-threat-protection-impersonation-protect-c048fa06-0d50-4626-ae82-a6cea812d9c4-4b305002.md) |  |

### Workbooks (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast_TTP_Workbook](../content/mimecast-mimecast-ttp-workbook-c40cabd0.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MimecastTTPImpersonation](../parsers/mimecastttpimpersonation.md) | [Mimecast](../solutions/mimecast.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

