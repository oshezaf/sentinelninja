# MuleSoftCloudhubLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | MuleSoft *(basis: projected)* |
| **Source Product** | CloudHub *(basis: projected)* |
| **Event Type** | Logs |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (13 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mulesoft%5CData%20Connectors%5CMulesoftLogs_CCF/table_MuleSoftCloudhubLogs.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ApplicationData | dynamic | Customer-specific application data in JSON format |
| ApplicationDomainName | string | MuleSoft CloudHub application domain name |
| Environment | string | MuleSoft environment name |
| EventTime | datetime | Timestamp when the log was generated |
| Exception | string | Exception stack trace if present |
| InstanceId | string | CloudHub worker instance ID |
| Level | string | Log level (INFO, WARN, ERROR, DEBUG, FATAL) |
| Logger | string | Logger name (Java class or component) |
| Message | string | Log message content |
| Region | string | CloudHub region |
| Thread | string | Thread name that generated the log |
| TimeGenerated | datetime |  |
| WorkerId | string | Worker identifier (e.g., worker-0) |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Mulesoft](../solutions/mulesoft.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [MuleSoft CloudHub Logs (Push Connector via Codeless Connector Framework)](../connectors/mulesoftcloudhubpushconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MuleSoftCloudhub](../parsers/mulesoftcloudhub.md) | [Mulesoft](../solutions/mulesoft.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

