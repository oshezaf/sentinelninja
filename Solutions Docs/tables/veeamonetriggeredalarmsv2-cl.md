# VeeamOneTriggeredAlarmsV2_CL

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

## Schema (17 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam%5CData%20Connectors%5CVeeam_CCF/table_VeeamOneTriggeredAlarmsV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AlarmTemplateId | int | Template identifier for alarm type |
| ChildAlarmsCount | int | Number of child alarms |
| Comment | string | Additional comments or notes |
| Description | string | Detailed alarm description |
| Name | string | Name of the alarm |
| ObjectId | int | Identifier of object that triggered alarm |
| ObjectName | string | Name of object that triggered alarm |
| ObjectType | string | Type of object that triggered alarm |
| PredefinedAlarmId | int | Predefined alarm rule identifier |
| RemediationDescription | string | Detailed description of the alarm event |
| RemediationMode | string | Recommended remediation mode for the alarm event |
| RepeatCount | int | Number of times alarm has repeated |
| Status | string | Current alarm status |
| TimeGenerated | datetime |  |
| TriggeredAlarmId | int | Unique identifier for triggered alarm |
| TriggeredTime | datetime | Timestamp when alarm was triggered |
| VoneHostName | string | Veeam ONE server hostname |

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

