# IntegrationTableIncidentsV2_CL

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

## Schema (18 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Protect%20Platform%5CData%20Connectors%5CESETProtectPlatform_CCF/table_IntegrationTableIncidentsV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AssigneeUuid | string | UUID of the user assigned to the incident |
| ConnectorName | string | Connector Friendly Name assigned during connector setup |
| CreateTime | datetime | Timestamp when the incident was created |
| Description | string | Detailed description of the incident |
| DetectionUuids | dynamic | Array of detection UUIDs associated with this incident |
| DeviceUuids | dynamic | Array of device UUIDs affected by this incident |
| DisplayName | string | Display name of the incident |
| Metrics | dynamic | Incident metrics including device, executable, and process counts |
| ProductIds | string | ESET product selected for this connector instance (EP, EI, or ECOS) |
| ResolveReason | string | Reason for resolving the incident |
| ResponseDuration | string | ISO 8601 duration of the response process |
| Severity | string | Severity level of the incident |
| Status | string | Current status of the incident |
| Tags | dynamic | Array of tags associated with the incident |
| TimeGenerated | datetime | The time when the log entry was generated |
| TriageDuration | string | ISO 8601 duration of the triage process |
| UpdateTime | datetime | Timestamp when the incident was last updated |
| Uuid | string | Unique identifier for the incident |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [ESET Protect Platform](../solutions/eset-protect-platform.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ESET Connect Data Connector (via Codeless Connector Framework)](../connectors/esetconnectconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

