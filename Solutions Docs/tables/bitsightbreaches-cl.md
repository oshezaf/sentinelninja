# BitSightBreaches_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Microsoft *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (14 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight%5CData%20Connectors%5CBitSight_Events_CCF/table_BitSightBreaches.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| BreachDate | string | Date the breach event was recorded (YYYY-MM-DD). |
| BreachedCompanies | dynamic | Array of companies directly affected by the breach. |
| CompanyGuid | string | GUID of the company that experienced the breach (enriched). |
| CompanyName | string | Name of the company that experienced the breach (enriched). |
| ConnectorName | string | Connection name assigned during connector setup. |
| DateCreated | string | Date this breach record was created in BitSight. |
| DependentCompanies | dynamic | Array of dependent companies impacted by this breach. |
| EventType | string | Breach event category (e.g., Human Error, Hacking). |
| EventTypeDescription | string | Detailed description of the breach event type. |
| Guid | string | Unique identifier of the breach event. |
| PreviewUrl | string | URL to a preview article about the breach. |
| Severity | int | Numeric severity level of the breach. |
| Text | string | Description of the breach event. |
| TimeGenerated | datetime |  |

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
| [BitSight - new breach found](../content/bitsight-bitsight-new-breach-found-a5526ba9-5997-47c6-bf2e-60a08b681e9b-ce9a2a1e.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightBreaches](../parsers/bitsightbreaches.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

