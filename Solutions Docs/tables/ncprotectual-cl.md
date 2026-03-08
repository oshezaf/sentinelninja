# NCProtectUAL_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NCProtectUAL_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| _SubscriptionId | string |
| Application_s | string |
| Browser_s | string |
| Computer_s | string |
| DocumentProtectionId_g | string |
| DocumentUrl_s | string |
| Id_s | string |
| JSONExtra_s | string |
| OS_s | string |
| RawData | string |
| RuleName_s | string |
| RuleUrl_s | string |
| Sender_s | string |
| SHA512Hash_s | string |
| Status_s | string |
| TimeGenerated | datetime |
| Type | string |
| Type_s | string |
| UserDisplayName_s | string |
| UserEmail_s | string |
| UserLoginName_s | string |

## Solutions (1)

This table is used by the following solutions:

- [NC Protect Data Connector](../solutions/nc-protect-data-connector.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [NC Protect](../connectors/nucleuscyberncprotect.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [NC Protect Data Connector](../solutions/nc-protect-data-connector.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NucleusCyber_NCProtect_Workbook](../content/nc-protect-data-connector-nucleuscyber-ncprotect-workbook-14169a8f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

