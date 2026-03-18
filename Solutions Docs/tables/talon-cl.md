# Talon_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (44 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Talon_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| action_s | string |
| browserVersion_s | string |
| Computer | string |
| description_s | string |
| deviceHostname_s | string |
| eventCategory_s | string |
| eventDetails_activity_s | string |
| eventDetails_categories_s | string |
| eventDetails_engine_s | string |
| eventDetails_failedAttempts_d | real |
| eventDetails_fromURL_s | string |
| eventDetails_id_s | string |
| eventDetails_installSource_s | string |
| eventDetails_loginUsername_s | string |
| eventDetails_matchedURL_s | string |
| eventDetails_method_s | string |
| eventDetails_name_s | string |
| eventDetails_path_s | string |
| eventDetails_printerName_s | string |
| eventDetails_protocol_s | string |
| eventDetails_reasons_s | string |
| eventDetails_type_s | string |
| eventDetails_version_s | string |
| eventType_s | string |
| id_s | string |
| IPAddress | string |
| ManagementGroupName | string |
| MG | string |
| mitreTechniques_s | string |
| osPlatform_s | string |
| osVersion_s | string |
| policyRule_s | string |
| RawData | string |
| severity_s | string |
| SourceSystem | string |
| TenantId | string |
| time_s | string |
| TimeGenerated | datetime |
| Type | string |
| type_s | string |
| url_s | string |
| userAgent_s | string |
| userEmail_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Talon](../solutions/talon.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Talon Insights](../connectors/talonlogs.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Talon](../solutions/talon.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TalonInsights](../content/talon-taloninsights-a46f557d.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TalonInsights](../content/github-only-taloninsights-c91cfb4a.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

