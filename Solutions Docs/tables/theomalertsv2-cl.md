# TheomAlertsV2_CL

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

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Theom%5CData%20Connectors%5CTheomConnector_CCF/table_TheomAlertsV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccountId | string | Theom account identifier |
| AlertType | string | Alert type (e.g., Issue) |
| CloudProvider | string | Cloud provider associated with the alert |
| DeepLink | string | Deep link to Theom UI |
| Details | string | Alert details |
| Id | string | Alert identifier |
| LastTriggered | datetime | Time the alert was last triggered |
| NumTriggered | string | Number of times the alert was triggered |
| Priority | string | Alert priority (P1-P5) |
| Region | string | Region associated with the alert |
| RemediationSteps | dynamic | Recommended remediation steps |
| Risk | string | Risk category associated with the alert |
| RuleName | string | Name of the rule that triggered the alert |
| Scopes | dynamic | Scopes associated with the alert |
| Summary | string | Alert summary |
| Tags | dynamic | Tags associated with the alert |
| TimeGenerated | datetime | Time the alert was last triggered |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Theom](../solutions/theom.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Theom (via Codeless Connector Framework)](../connectors/theomconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

