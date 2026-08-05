# FireworkV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (41 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Flare%5CData%20Connectors%5CFlareFireworkEventLogs_ccp/FlareFireworkEventLogs_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| actor | string | Actor/threat actor name |
| alert_content | string | Content formatted for alerting |
| asset_uuids | dynamic | List of related asset UUIDs |
| author_id | string | Author identifier |
| category_name | string | Category of the event |
| code | dynamic | Code metadata |
| content | string | Full content of the event |
| content_preview | dynamic | Preview of the content |
| data | dynamic | Additional data payload |
| event_title | string | Title of the event |
| event_type | string | Type of the search item |
| EventOriginalType | string | Original event type (ASIM) |
| EventOriginalUid | string | Original unique identifier (ASIM) |
| EventProduct | string | Event product name (ASIM) |
| EventSchemaVersion | string | Schema version (ASIM) |
| EventSeverity | string | Severity level: Informational, Low, Medium, High, Critical (ASIM) |
| EventVendor | string | Event vendor name - Flare (ASIM) |
| external_url | string | External URL reference |
| first_crawled_at | string | When the item was first crawled |
| highlights | dynamic | Highlighted matches in the content |
| id | string | Unique identifier of the item |
| identifiers | dynamic | Array of matched identifiers [{id, type, name, query, group}] |
| keyword | string | Matched keyword |
| materialized_at | string | When the item was materialized |
| project_name | string | Project name (for code-related events) |
| related | dynamic | List of related URLs |
| risk | dynamic | Risk object containing score |
| RiskScore | int | Extracted risk score (1-5) |
| sha | string | Commit SHA (for code-related events) |
| sort | string |  |
| source | string | Source identifier |
| source_name | string | Human-readable source name |
| tags | dynamic | List of tags |
| TimeGenerated | datetime | Timestamp when the event was ingested (ASIM) |
| timestamp | string | Original timestamp from Flare |
| timestamp_formatted | string | Formatted timestamp string |
| uid | string | Unique identifier (UID format) |
| Url | string | Source URL (ASIM) |
| user_notes | string | User notes on the event |
| user_risk_score | int | User-assigned risk score override |
| victim_name | string | Victim name if applicable |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Flare](../solutions/flare.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Flare Push Connector](../connectors/fireworkpush.md) |  |

---

## Content Items Using This Table (11)

### Analytic Rules (10)

**In solution [Flare](../solutions/flare.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Flare chat results](../content/flare-flare-chat-results-76210211-3ade-47b6-b7f2-c871cd05ec43-5e65d8c7.md) |  |
| [Flare cloud bucket results](../content/flare-flare-cloud-bucket-results-9cb7c337-f172-4af6-b0e8-b6b7552d762d-2b70bb23.md) |  |
| [Flare google dork results](../content/flare-flare-google-dork-results-9cb7c337-f174-4af6-b0e8-b6b7552d762d-298023cb.md) |  |
| [Flare host results](../content/flare-flare-host-results-9cb7c337-f175-4af6-b0e8-b6b7552d762d-ffdb44ac.md) |  |
| [Flare infected device results](../content/flare-flare-infected-device-results-9cb7c337-f176-4af6-b0e8-b6b7552d762d-d6cc2fc5.md) |  |
| [Flare leaked credentials results](../content/flare-flare-leaked-credentials-results-9cb7c337-f170-4af6-b0e8-b6b7552d762d-ae131a18.md) |  |
| [Flare lookalike domain results](../content/flare-flare-lookalike-domain-results-8e5ae0d6-7f2d-475e-ada3-ed33441deeba-8cc368fa.md) |  |
| [Flare marketplace results](../content/flare-flare-marketplace-results-9265ae4d-6bb0-4c18-961d-f7aae67d1546-78fb8e2f.md) |  |
| [Flare paste results](../content/flare-flare-paste-results-9cb7c337-f177-4af6-b0e8-b6b7552d762d-9f498bb5.md) |  |
| [Flare source code results](../content/flare-flare-source-code-results-9cb7c337-f178-4af6-b0e8-b6b7552d762d-c8c5f322.md) |  |

### Workbooks (1)

**In solution [Flare](../solutions/flare.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [FlareSystemsFireworkOverview](../content/flare-flaresystemsfireworkoverview-4ffe81de.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

