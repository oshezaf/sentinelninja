# BitSightAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | BitSight *(basis: projected)* |
| **Event Type** | Security Events |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (15 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight%5CData%20Connectors%5CBitSight_Events_CCF/table_BitSightAlerts.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AlertDate | string | The date the alert was triggered (YYYY-MM-DD). |
| AlertSetGuid | string | GUID of the alert set. |
| AlertSetName | string | Name of the alert set. |
| AlertType | string | The type of alert (e.g., THIRD_PARTY_INTEL). |
| CompanyGuid | string | GUID of the company associated with the alert. |
| CompanyName | string | Name of the company associated with the alert. |
| CompanyUrl | string | URL of the company associated with the alert. |
| ConnectorName | string | Connection name assigned during connector setup. |
| FolderGuid | string | Folder GUID associated with the alert. |
| FolderName | string | Folder name associated with the alert. |
| Guid | string | Unique identifier of the alert. |
| Severity | string | Alert severity level (e.g., INFORMATIONAL). |
| StartDate | string | The start date of the alert (YYYY-MM-DD). |
| TimeGenerated | datetime |  |
| Trigger | string | What triggered the alert. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [BitSight](../solutions/bitsight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [BitSight Security Events (via Codeless Connector Framework)](../connectors/bitsighteventsconnector.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [BitSight](../solutions/bitsight.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [BitSight - new alert found](../content/bitsight-bitsight-new-alert-found-a1275c5e-0ff4-4d15-a7b7-96018cd979f5-773a55bf.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightAlerts](../parsers/bitsightalerts.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

