# PaloAltoCortexXDR_Incidents_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (37 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cortex%20XDR%5CData%20Connectors%5CCortexXDR_ccp/table_incidents.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AlertCategories | dynamic | The alert grouping status. |
| AlertCount | int | The number of alerts regarding the incident. |
| AlertsGroupingStatus | string | The alert grouping status. |
| AssignedUserMail | string | The assigned user mail address. |
| assignedUserPrettyName | string | The assign user display name. |
| CreationTime | datetime | The time which the incident was created. |
| CriticalSeverityAlertCount | int | The number of critical severity alerts regarding the incident. |
| Description | string | The description of the incident. |
| DetectionTime | datetime | The time which the incident was detected. |
| HighSeverityAlertCount | int | The number of high severity alerts regarding the incident. |
| HostCount | int | The host count regarding the incident. |
| Hosts | dynamic | The hosts regarding the incident. |
| IncidentId | string | The unique identifier for the incident. |
| IncidentName | string | The name of the incident |
| IncidentSources | dynamic | The sources regarding the incident. |
| LowSeverityAlertCount | int | The number of low severity alerts regarding the incident. |
| ManualDescription | string | Any comments associated with the event. |
| ManualScore | int | The manual score of the incident. |
| ManualSeverity | string | The severity applied manually regarding the incident. |
| MedSeverityAlertCount | int | The number of medium severity alerts regarding the incident. |
| MitreTacticsIdsAndNames | dynamic | Mitre tactics ids and names. |
| MitreTechniquesIdsAndNames | dynamic | Mitre techniques ids and names. |
| ModificationTime | datetime | The time which the incident was updated. |
| Notes | string | The notes regarding the incident. |
| OriginalTags | dynamic | The original tags of the incident. |
| ResolveComment | string | The resolve comment writen in the incident. |
| ResolvedTimestamp | datetime | The timestemp when the incident has been resolved. |
| RuleBasedScore | int | The rule base score of the incident. |
| Severity | string | The severity of the incident. |
| Starred | bool | Is the incident starred. |
| Status | string | The status of the incident. |
| Tags | dynamic | The tags of the incident. |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| UserCount | int | The user count regarding the incident. |
| Users | dynamic | Any comments associated with the event. |
| WildfireHits | int | The wild fire hits. |
| XdrUrl | string | The link of the incident. |

## Solutions (2)

This table is used by the following solutions:

- [Cortex XDR](../solutions/cortex-xdr.md)
- [Palo Alto Cortex XDR CCP](../solutions/palo-alto-cortex-xdr-ccp.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) |  |
| [Cortex XDR - Incidents](../connectors/cortexxdrincidents.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [Cortex XDR](../solutions/cortex-xdr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Cortex XDR Incident - High](../content/cortex-xdr-cortex-xdr-incident-high-f96728eb-9802-4522-b715-47fb66c2ecf5-bb6320e4.md) |  |
| [Cortex XDR Incident - Low](../content/cortex-xdr-cortex-xdr-incident-low-1426bbcf-a9ae-4aa5-9da6-abbf48f04115-5efdbb9e.md) |  |
| [Cortex XDR Incident - Medium](../content/cortex-xdr-cortex-xdr-incident-medium-2b05823b-ee15-4b92-a642-b13170e37c35-674c5fb1.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CortexXDR_Incidents_CL](../parsers/cortexxdr-incidents-cl.md) | [Cortex XDR](../solutions/cortex-xdr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

