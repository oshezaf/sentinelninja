# MimecastTTPUrl_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (25 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MimecastTTPUrl_CL.json)

| Column Name | Type |
|:------------|:-----|
| action_s | string |
| actions_s | string |
| adminOverride_s | string |
| advancedPhishingResult_CredentialTheftBrands_s | string |
| advancedPhishingResult_CredentialTheftEvidence_s | string |
| advancedPhishingResult_CredentialTheftTags_s | string |
| category_s | string |
| creationMethod_s | string |
| date_t | datetime |
| emailPartsDescription_s | string |
| fromUserEmailAddress_s | string |
| messageId_s | string |
| mimecastEventCategory_s | string |
| mimecastEventId_s | string |
| route_s | string |
| scanResult_s | string |
| sendingIp_s | string |
| subject_s | string |
| time_generated | datetime |
| TimeGenerated | datetime |
| ttpDefinition_s | string |
| url_s | string |
| userAwarenessAction_s | string |
| userEmailAddress_s | string |
| userOverride_s | string |

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
| [Mimecast Targeted Threat Protection - URL Protect](../content/mimecastttp-mimecast-targeted-threat-protection-url-protect-9d5545bd-1450-4086-935c-62f15fc4a4c9-81f30fac.md) |  |

### Workbooks (1)

**In solution [MimecastTTP](../solutions/mimecastttp.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MimecastTTPWorkbook](../content/mimecastttp-mimecastttpworkbook-22b40acb.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

