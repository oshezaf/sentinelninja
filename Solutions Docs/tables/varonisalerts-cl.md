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

## Schema (33 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VaronisAlerts_CL.json)

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

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[Deprecated] Varonis SaaS](../connectors/varonissaas.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

