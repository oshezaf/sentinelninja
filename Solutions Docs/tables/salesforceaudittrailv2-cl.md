# SalesforceAuditTrailV2_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (14 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud%5CData%20Connectors%5CSalesforceAuditLogsConnector_CCF/SalesforceAuditLogs_SalesforceAuditTrailV2_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Action | string | The action performed. |
| CreatedByContext | string | The context in which the user made the change. |
| CreatedByEmail | string | The email of the user who made the change. |
| CreatedById | string | The ID of the user who made the change. |
| CreatedByIssuer | string | The issuer of the user's identity. |
| CreatedByName | string | The name of the user who made the change. |
| CreatedByUsername | string | The username of the user who made the change. |
| CreatedDate | datetime | The date and time when the change was made. |
| DelegateUser | string | The user who delegated the change. |
| Display | string | A user-friendly display name for the change. |
| Id | string | The unique identifier for the audit trail entry. |
| SalesforceDomain | string | Salesforce host/domain configured for this connection; hard-coded on every record so hosts can be differentiated. |
| Section | string | The section of the Salesforce setup that was changed. |
| TimeGenerated | datetime | The timestamp (in UTC) when the log entry was generated. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Salesforce Audit Logs (via Codeless Connector Framework)](../connectors/salesforceauditlogsconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [SalesforceAuditLogs](../parsers/salesforceauditlogs.md) | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

