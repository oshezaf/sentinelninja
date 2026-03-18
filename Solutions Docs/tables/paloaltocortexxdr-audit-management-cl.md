# PaloAltoCortexXDR_Audit_Management_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (19 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cortex%20XDR%5CData%20Connectors%5CCortexXDR_ccp/table_managment.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AuditAssetJSON | dynamic | JSON object containing the audit asset details |
| AuditAssetNames | string | Names of the assets involved in the audit |
| AuditCaseId | int | Case ID related to the audit event |
| AuditDescription | string | Description of the audit event |
| AuditEntity | string | Entity type associated with the audit event |
| AuditEntitySubtype | string | Subtype of the audit entity (e.g., Login) |
| AuditHostName | string | Host name associated with the audit event |
| AuditId | int | Unique identifier for the audit event |
| AuditInsertTime | datetime | Time when the audit record was inserted into the system. |
| AuditOwnerEmail | string | Email address of the audit owner |
| AuditOwnerName | string | Name of the owner who initiated the audit event |
| AuditReason | string | Reason for the audit event |
| AuditResult | string | Result of the audit event (e.g., SUCCESS) |
| AuditSessionId | int | Session ID related to the audit event |
| AuditSeverity | string | The Severity of the Audit log. |
| AuditSourceIp | string | The source Ip of the audit log. |
| AuditUserAgent | string | The User Agent of the audit user. |
| AuditUserRoles | dynamic | The roles of the audit user. |
| TimeGenerated | datetime | The time when the record was generated |

## Solutions (2)

This table is used by the following solutions:

- [Cortex XDR](../solutions/cortex-xdr.md)
- [Palo Alto Cortex XDR CCP](../solutions/palo-alto-cortex-xdr-ccp.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

