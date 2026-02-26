# CyberArk_AuditEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (17 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyberArk_AuditEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| actionType | string |
| applicationCode | string |
| auditCode | string |
| auditType | string |
| command | string |
| component | string |
| CyberArkTenantId | string |
| message | string |
| serviceName | string |
| sessionId | string |
| source | string |
| target | string |
| TimeGenerated | datetime |
| timestamp | int |
| userId | string |
| username | string |

## Solutions (1)

This table is used by the following solutions:

- [CyberArkAudit](../solutions/cyberarkaudit.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CyberArkAudit](../connectors/cyberarkaudit.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [CyberArkAudit](../solutions/cyberarkaudit.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CyberArk - High-Risk Actions Outside Business Hours](../content/cyberarkaudit-cyberark-high-risk-actions-outside-business-hours-3c9ee3ae.md) |  |
| [CyberArk - Multiple Failed Actions Followed by Success (15m)](../content/cyberarkaudit-cyberark-multiple-failed-actions-followed-by-success-15m-707982e9.md) |  |
| [CyberArk - Sensitive Safe/Permission/Entitlement Changes (with customData)](../content/cyberarkaudit-cyberark-sensitive-safe-permission-entitlement-changes-with-customdata-8af89ccf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

