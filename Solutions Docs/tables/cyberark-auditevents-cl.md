# CyberArk_AuditEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

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

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CyberArkAudit](../connectors/cyberarkaudit.md) |  |
| [CyberArk Audit](../connectors/cyberarkauditccpdefinition.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [CyberArkAudit](../solutions/cyberarkaudit.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [CyberArk - High-Risk Actions Outside Business Hours](../content/cyberarkaudit-cyberark-high-risk-actions-outside-business-hours-3733e1ac-991b-4504-99e8-24ff4fbaf6e4-f02b1466.md) |  |
| [CyberArk - Multiple Failed Actions Followed by Success (15m)](../content/cyberarkaudit-cyberark-multiple-failed-actions-followed-by-success-15m-bdf3cf98-d64f-4c55-97e4-43483d6d3237-7585ad5d.md) |  |
| [CyberArk - Sensitive Safe/Permission/Entitlement Changes (with customData)](../content/cyberarkaudit-cyberark-sensitive-safe-permission-entitlement-changes-with-customdata-30938118-8812-4b5f-afa4-a8d4ba2b5d86-5cd42d25.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

