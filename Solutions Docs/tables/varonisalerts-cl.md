# VaronisAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (33 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VaronisSaaS%5CData%20Connectors%5CVaronisSaaS_CCF/VaronisSaaS_Table.json)

| Column Name | Type |
|:------------|:-----|
| AbnormalLocations_s | string |
| AccountsHaveFollowUpIndicators_s | string |
| AggregatedExternalIPThreatTypes_s | string |
| AlertCategory_s | string |
| AlertId_g | string |
| AlertSeverity_s | string |
| AlertTime_t | datetime |
| AlertTimeUTC_t | datetime |
| Assets_s | string |
| AssignedtoVaronis_b | bool |
| BlacklistedLocation_b | bool |
| ClosedBy_s | string |
| CloseReason_s | string |
| ContainsMaliciousExternalIPs_b | bool |
| Countries_s | string |
| DataSources_s | string |
| DataSourceTypes_s | string |
| DeviceNames_s | string |
| EscalationType_s | string |
| EventsCount_d | real |
| FlaggedDataExposed_s | string |
| IngestTime_t | datetime |
| InitialEventTime_t | datetime |
| InitialEventTimeUTC_t | datetime |
| MitreTacticName_s | string |
| PrivilegedAccountType_s | string |
| SensitiveDataExposed_s | string |
| States_s | string |
| Status_s | string |
| ThreatDetectionPolicyName_s | string |
| TimeGenerated | datetime |
| UserNames_s | string |
| UserSamAccountNames_s | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [VaronisSaaS](../solutions/varonissaas.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[Deprecated] Varonis SaaS](../connectors/varonissaas.md) |  |
| [Varonis SaaS (Push)](../connectors/varonissaasalertspush.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (4)

**In solution [VaronisSaaS](../solutions/varonissaas.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Varonis - High severity alerts detected](../content/varonissaas-varonis-high-severity-alerts-detected-7d2c9a41-5b8e-4f36-9c1a-2e6b8d4f7a13-4e1d4d3c.md) |  |
| [Varonis - Informational alerts detected](../content/varonissaas-varonis-informational-alerts-detected-e5a7c93b-8d14-42f6-b7c0-3a9e1f6d5b28-0b3681bb.md) |  |
| [Varonis - Low severity alerts detected](../content/varonissaas-varonis-low-severity-alerts-detected-9b1f3e7a-6c42-4d18-a5e9-2b7f8c0d4e61-3ed08cd4.md) |  |
| [Varonis - Medium severity alerts detected](../content/varonissaas-varonis-medium-severity-alerts-detected-c4e8b16f-3a92-4d75-8e21-6f9c0b5d2a84-b5ee29f4.md) |  |

### Workbooks (1)

**In solution [VaronisSaaS](../solutions/varonissaas.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VaronisSaaS](../content/varonissaas-varonissaas-5667e619.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

