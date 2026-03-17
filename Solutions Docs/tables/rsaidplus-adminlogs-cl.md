# RSAIDPlus_AdminLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (23 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RSAIDPlus_AdminLogs_Connector%5CData%20Connectors%5CRSIDPlus_AdminLogs_Connector_CCP/RSAIDPlus_AdminLogs_Table.json)

| Column Name | Type |
|:------------|:-----|
| activityCode | int |
| activityKey | string |
| adminUserName | string |
| adminUserRole | string |
| application | string |
| customerId | int |
| customerName | string |
| eventId | long |
| eventType | string |
| message | string |
| reasonKey | string |
| requiresPublish | bool |
| result | string |
| serverIPAddress | string |
| serverURL | string |
| sourceIPAddress | string |
| targetObject1Id | dynamic |
| targetObject1Name | dynamic |
| targetObject1Type | dynamic |
| targetObject2Id | dynamic |
| targetObject2Name | dynamic |
| targetObject2Type | dynamic |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [RSAIDPlus_AdminLogs_Connector](../solutions/rsaidplus-adminlogs-connector.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [RSA ID Plus Admin Logs Connector](../connectors/rsaidplus-adminglogs-connector.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [RSAIDPlus_AdminLogs_Connector](../solutions/rsaidplus-adminlogs-connector.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [RSA ID Plus - Locked Administrator Account Detected](../content/rsaidplus-adminlogs-connector-rsa-id-plus-locked-administrator-account-detected-488c759d-a82e-44cd-91bb-d766573918d7-9266bd29.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

