# FireworkV2_CL

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

## Solutions (1)

This table is used by the following solutions:

- [Flare](../solutions/flare.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Flare Push Connector](../connectors/fireworkpush.md) |  |

---

## Content Items Using This Table (9)

### Analytic Rules (8)

**In solution [Flare](../solutions/flare.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Flare Cloud bucket result](../content/flare-flare-cloud-bucket-result-9cb7c337-f172-4af6-b0e8-b6b7552d762d-271a57e6.md) |  |
| [Flare Google Dork result found](../content/flare-flare-google-dork-result-found-9cb7c337-f174-4af6-b0e8-b6b7552d762d-840d1848.md) |  |
| [Flare Host result](../content/flare-flare-host-result-9cb7c337-f175-4af6-b0e8-b6b7552d762d-ff5f9a5f.md) |  |
| [Flare Infected Device](../content/flare-flare-infected-device-9cb7c337-f176-4af6-b0e8-b6b7552d762d-3c772b70.md) |  |
| [Flare Leaked Credentials](../content/flare-flare-leaked-credentials-9cb7c337-f170-4af6-b0e8-b6b7552d762d-a455dcf6.md) |  |
| [Flare Paste result](../content/flare-flare-paste-result-9cb7c337-f177-4af6-b0e8-b6b7552d762d-18a2af71.md) |  |
| [Flare SSL Certificate result](../content/flare-flare-ssl-certificate-result-9cb7c337-f179-4af6-b0e8-b6b7552d762d-0725723f.md) |  |
| [Flare Source Code found](../content/flare-flare-source-code-found-9cb7c337-f178-4af6-b0e8-b6b7552d762d-4e606f91.md) |  |

### Workbooks (1)

**In solution [Flare](../solutions/flare.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [FlareSystemsFireworkOverview](../content/flare-flaresystemsfireworkoverview-4ffe81de.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

