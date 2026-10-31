# CyberArk_AuditEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (34 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyberArk_AuditEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| _ResourceId | string |
| accessMethod | string |
| accountName | string |
| action | string |
| actionType | string |
| applicationCode | string |
| auditCode | string |
| auditType | string |
| cloudAssets | string |
| cloudIdentities | string |
| cloudProvider | string |
| cloudWorkspacesAndRoles | string |
| command | string |
| component | string |
| correlationId | string |
| customData | string |
| CyberArkTenantId | string |
| identityType | string |
| message | string |
| safe | string |
| serviceName | string |
| sessionId | string |
| source | string |
| target | string |
| targetAccount | string |
| targetPlatform | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp | int |
| Type | string |
| userId | string |
| username | string |
| uuid | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [CyberArkAudit](../solutions/cyberarkaudit.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CyberArkAudit](../connectors/cyberarkaudit.md) |  |
| [Idira Audit](../connectors/cyberarkauditccpdefinition.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [CyberArkAudit](../solutions/cyberarkaudit.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Idira - High-Risk Actions Outside Business Hours](../content/cyberarkaudit-idira-high-risk-actions-outside-business-hours-3733e1ac-991b-4504-99e8-24ff4fbaf6e4-69d24d43.md) |  |
| [Idira - Multiple Failed Actions Followed by Success (15m)](../content/cyberarkaudit-idira-multiple-failed-actions-followed-by-success-15m-bdf3cf98-d64f-4c55-97e4-43483d6d3237-6009c78d.md) |  |
| [Idira - Sensitive Safe/Permission/Entitlement Changes (with customData)](../content/cyberarkaudit-idira-sensitive-safe-permission-entitlement-changes-with-customdata-30938118-8812-4b5f-afa4-a8d4ba2b5d86-a246971b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationCyberArkAudit](../asim/asimauthenticationcyberarkaudit.md) | Authentication | CyberArk Audit |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

