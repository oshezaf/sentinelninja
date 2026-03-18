# jamfprotectalerts_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (55 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Jamf%20Protect%5CData%20Connectors%5CJamfProtect_ccp/table.json)

| Column Name | Type |
|:------------|:-----|
| ActingProcessGuid | dynamic |
| ActingProcessId | int |
| ActingProcessName | dynamic |
| DvcHostname | dynamic |
| DvcId | dynamic |
| DvcIpAddr | dynamic |
| DvcOs | string |
| DvcOsVersion | dynamic |
| DvcSerial | dynamic |
| EventMessage | dynamic |
| EventOriginalType | dynamic |
| EventOriginalUid | dynamic |
| EventProduct | string |
| EventProductVersion | dynamic |
| EventResult | string |
| EventResultMessage | dynamic |
| EventSeverity | string |
| EventType | string |
| EventVendor | string |
| input | dynamic |
| ParentProcessGuid | dynamic |
| ParentProcessId | int |
| ParentProcessName | dynamic |
| ProcessEventSubType | string |
| ProcessEventType | string |
| SrcDeviceType | string |
| TargetBinaryFilePath | dynamic |
| TargetBinarySHA1 | dynamic |
| TargetBinarySHA256 | dynamic |
| TargetbinarySignerType | string |
| TargetBinarySigningAppID | dynamic |
| TargetBinarySigningInfoMessage | dynamic |
| TargetBinarySigningTeamID | dynamic |
| TargetFileExtendedAttributes | dynamic |
| TargetFileIsAppBundle | bool |
| TargetFileIsDirectory | bool |
| TargetFileIsDownload | bool |
| TargetFileIsScreenshot | bool |
| TargetFilePath | dynamic |
| TargetFileSHA1 | dynamic |
| TargetFileSHA256 | dynamic |
| TargetFileSignerType | string |
| TargetFileSigningInfoMessage | dynamic |
| TargetFileSigningTeamID | dynamic |
| TargetFileSize | dynamic |
| TargetHostname | dynamic |
| TargetProcessCommandLine | dynamic |
| TargetProcessCurrentDirectory | dynamic |
| TargetProcessGuid | dynamic |
| TargetProcessId | dynamic |
| TargetProcessName | dynamic |
| TargetProcessSHA1 | dynamic |
| TargetProcessSHA256 | dynamic |
| TargetProcessStatusCode | dynamic |
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
| [Jamf Protect - Alerts](../content/jamf-protect-jamf-protect-alerts-6098daa0-f05e-44d5-b5a0-913e63ba3179-38dbdadd.md) |  |

### Workbooks (1)

**In solution [Jamf Protect](../solutions/jamf-protect.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [JamfProtectDashboard](../content/jamf-protect-jamfprotectdashboard-b0beeadb.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [JamfProtectAlerts](../parsers/jamfprotectalerts.md) | [Jamf Protect](../solutions/jamf-protect.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

