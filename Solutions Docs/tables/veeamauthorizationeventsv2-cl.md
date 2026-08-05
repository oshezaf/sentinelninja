# VeeamAuthorizationEventsV2_CL

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

## Schema (11 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam%5CData%20Connectors%5CVeeam_CCF/table_VeeamAuthorizationEventsV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| CreatedBy | string | User who created the authorization request |
| CreationTime | datetime | Timestamp when authorization was created |
| Description | string | Description of authorization request |
| ExpirationTime | datetime | Timestamp when authorization expires |
| Id | string | Unique authorization event identifier |
| Name | string | Name of authorization request |
| ProcessedBy | string | User who processed the authorization |
| ProcessedTime | datetime | Timestamp when authorization was processed |
| State | string | Current authorization state |
| TimeGenerated | datetime |  |
| VbrHostName | string | Veeam Backup & Replication server hostname |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Veeam](../solutions/veeam.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Veeam Data Connector (via Codeless Connector Framework)](../connectors/veeamconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

