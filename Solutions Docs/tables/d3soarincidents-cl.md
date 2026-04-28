# D3SOARIncidents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (23 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/D3SmartSOAR%5CData%20Connectors%5CD3SOAR_CCF/D3SOAR_Table.json)

| Column Name | Type |
|:------------|:-----|
| DateCreated | datetime |
| DateModified | datetime |
| EventRawData | dynamic |
| IncidentConclusion | string |
| IncidentCreator | string |
| IncidentDescription | string |
| IncidentDisposition | string |
| IncidentNumber | string |
| IncidentOwner | string |
| IncidentPlaybook | string |
| IncidentPriority | string |
| IncidentRawData | dynamic |
| IncidentSeverity | string |
| IncidentStage | string |
| IncidentStatus | string |
| IncidentTags | string |
| IncidentTimezone | string |
| IncidentTitle | string |
| IncidentType | string |
| InvestigationTeam | string |
| LinkedIncidents | dynamic |
| RawRecord | dynamic |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [D3SmartSOAR](../solutions/d3smartsoar.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [D3 Smart SOAR Incidents](../connectors/d3soarconnectordefinition.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [D3SmartSOAR](../solutions/d3smartsoar.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [D3 Smart SOAR - High or critical severity incident detected](../content/d3smartsoar-d3-smart-soar-high-or-critical-severity-incident-detected-48ef0be4-8240-4a03-bbb9-320b562d6ce4-a012d8d0.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

