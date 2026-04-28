# jamfprotectunifiedlogs_CL

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

## Schema (25 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Jamf%20Protect%5CData%20Connectors%5CJamfProtect_ccp/table4.json)

| Column Name | Type |
|:------------|:-----|
| DvcHostname | dynamic |
| DvcId | dynamic |
| DvcIpAddr | dynamic |
| DvcOs | string |
| DvcOsVersion | dynamic |
| DvcSerial | dynamic |
| EventMessage | dynamic |
| EventOriginalType | dynamic |
| EventOriginalUid | dynamic |
| EventProductVersion | dynamic |
| EventResult | string |
| EventResultMessage | dynamic |
| EventSeverity | string |
| EventType | string |
| input | dynamic |
| ProcessEventSubType | string |
| ProcessEventType | string |
| SrcDeviceType | string |
| TargetHostname | dynamic |
| TargetProcessCommandLine | dynamic |
| TargetProcessCurrentDirectory | dynamic |
| TargetProcessGuid | dynamic |
| TargetProcessId | dynamic |
| TargetProcessName | dynamic |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Jamf Protect](../solutions/jamf-protect.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Jamf Protect Push Connector](../connectors/jamfprotectpush.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Jamf Protect](../solutions/jamf-protect.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Jamf Protect - Unified Logs](../content/jamf-protect-jamf-protect-unified-logs-9eb2f758-003b-4303-83c6-97aed4c03e41-73a1260b.md) |  |

### Workbooks (1)

**In solution [Jamf Protect](../solutions/jamf-protect.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [JamfProtectDashboard](../content/jamf-protect-jamfprotectdashboard-b0beeadb.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [JamfProtectUnifiedLogs](../parsers/jamfprotectunifiedlogs.md) | [Jamf Protect](../solutions/jamf-protect.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

