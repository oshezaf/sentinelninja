# CitrixDaaSConfigOps_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (12 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20DaaS%5CData%20Connectors%5CCitrixDaaS_CCF/CitrixDaaS_table_ConfigOps.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AdminMachineIp | string | IP of the admin machine |
| CitrixCustomerId | string | Citrix Cloud Customer ID of the connection that produced this record; enables multi-tenant differentiation. |
| EndTime | datetime | Operation end time |
| IsSuccessful | bool | Whether the operation succeeded |
| OperationId | string | Unique operation identifier |
| OperationText | string | Human-readable operation description |
| OperationType | string | Type of operation performed |
| Source | string | Operation source (Studio, SDK, etc.) |
| StartTime | datetime | Operation start time |
| TimeGenerated | datetime |  |
| User | string | User who performed the operation |
| UserIdentity | string | User identity GUID |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Citrix DaaS](../solutions/citrix-daas.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Citrix DaaS Audit & Sessions (via Codeless Connector Framework)](../connectors/citrixdaasactionsconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

