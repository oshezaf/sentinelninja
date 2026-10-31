# AirlockDigitalServerActivities_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (7 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital%5CData%20Connectors%5CAirlockDigital_CCF/table_AirlockDigitalServerActivities.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Checkpoint | string | Event checkpoint identifier for incremental retrieval |
| ConnectorName | string | Connector Friendly Name assigned during connector setup |
| Description | string | Detailed description of the server activity |
| EventDateTime | string | Event timestamp (when server activity occurred) |
| Task | string | Type of server task performed |
| TimeGenerated | datetime |  |
| User | string | User associated with the task |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [AirlockDigital](../solutions/airlockdigital.md)

## Connectors (4)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Airlock Digital connector (via Codeless Connector Framework)](../connectors/airlockdigitalconnector.md) |  |
| [Airlock Digital (Poll)](../connectors/airlockdigitalpoll.md) |  |
| [Airlock Digital (Push)](../connectors/airlockdigitalpush.md) |  |
| [Airlock Digital (Poll - SaaS)](../connectors/airlockdigitalsaas.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ASimAuditEventAirlockDigital](../parsers/asimauditeventairlockdigital.md) | [AirlockDigital](../solutions/airlockdigital.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

