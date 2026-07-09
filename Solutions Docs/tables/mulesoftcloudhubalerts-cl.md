# MulesoftCloudhubAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | MuleSoft *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (13 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mulesoft%5CData%20Connectors%5CMulesoftCloudHubAlerts_CCF/table_MulesoftCloudhubAlerts.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Actions | dynamic | Alert actions configuration including notification settings |
| Condition | dynamic | Alert condition configuration including type, resources, and resource type |
| CreatedAt | datetime | Timestamp when the alert was created (Unix epoch milliseconds) |
| Enabled | bool | Whether the alert is enabled |
| EnvironmentId | string | Mulesoft environment identifier |
| Id | string | Unique identifier for the alert |
| IsSystem | bool | Whether this is a system-generated alert |
| LastModified | datetime | Timestamp when the alert was last modified (Unix epoch milliseconds) |
| Name | string | Name of the alert |
| OrganizationId | string | Mulesoft organization identifier |
| ProductName | string | Product name (e.g., cloudhub) |
| Severity | string | Alert severity level |
| TimeGenerated | datetime |  |

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
| [Mulesoft CloudHub Alerts Connector (via Codeless Connector Framework)](../connectors/mulesoftcloudhubconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MuleSoftCloudhub](../parsers/mulesoftcloudhub.md) | [Mulesoft](../solutions/mulesoft.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

