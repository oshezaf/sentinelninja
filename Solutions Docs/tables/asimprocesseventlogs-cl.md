# ASimProcessEventLogs_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (121 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ASimProcessEventLogs_CL.json)

| Column Name | Type |
|:------------|:-----|
| ActingProcessCommandLine | string |
| ActingProcessCreationTime | datetime |
| ActingProcessFileCompany | string |
| ActingProcessFileDescription | string |
| ActingProcessFileInternalName | string |
| ActingProcessFilename | string |
| ActingProcessFileOriginalName | string |
| ActingProcessFileProduct | string |
| ActingProcessFileSize | long |
| ActingProcessFileVersion | string |
| ActingProcessGuid | string |
| ActingProcessId | string |
| ActingProcessIMPHASH | string |
| ActingProcessInjectedAddress | string |
| ActingProcessIntegrityLevel | string |
| ActingProcessIsHidden | bool |
| ActingProcessMD5 | string |
| ActingProcessName | string |
| ActingProcessSHA1 | string |
| ActingProcessSHA256 | string |
| ActingProcessSHA512 | string |
| ActingProcessTokenElevation | string |
| ActorOriginalUserType | string |
| ActorScope | string |
| ActorScopeId | string |
| ActorSessionId | string |
| ActorUserId | string |
| ActorUserIdType | string |
| ActorUsername | string |
| ActorUsernameType | string |
| ActorUserType | string |
| AdditionalFields | dynamic |
| DvcAction | string |
| DvcDescription | string |
| DvcDomain | string |
| DvcDomainType | string |
| DvcFQDN | string |
| DvcHostname | string |
| DvcId | string |
| DvcIdType | string |
| DvcInterface | string |
| DvcIpAddr | string |
| DvcMacAddr | string |
| DvcOriginalAction | string |
| DvcOs | string |
| DvcOsVersion | string |
| DvcScope | string |
| DvcScopeId | string |
| DvcZone | string |
| EventCount | int |
| EventEndTime | datetime |
| EventMessage | string |
| EventOriginalResultDetails | string |
| EventOriginalSeverity | string |
| EventOriginalSubType | string |
| EventOriginalType | string |
| EventOriginalUid | string |
| EventOwner | string |
| EventProduct | string |
| EventProductVersion | string |
| EventReportUrl | string |
| EventResult | string |
| EventResultDetails | string |
| EventSchemaVersion | string |
| EventSeverity | string |
| EventStartTime | datetime |
| EventSubType | string |
| EventType | string |
| EventVendor | string |
| ParentProcessCreationTime | datetime |
| ParentProcessFileCompany | string |
| ParentProcessFileDescription | string |
| ParentProcessFileProduct | string |
| ParentProcessFileVersion | string |
| ParentProcessGuid | string |
| ParentProcessId | string |
| ParentProcessIMPHASH | string |
| ParentProcessInjectedAddress | string |
| ParentProcessIntegrityLevel | string |
| ParentProcessIsHidden | bool |
| ParentProcessMD5 | string |
| ParentProcessName | string |
| ParentProcessSHA1 | string |
| ParentProcessSHA256 | string |
| ParentProcessSHA512 | string |
| ParentProcessTokenElevation | string |
| TargetOriginalUserType | string |
| TargetProcessCommandLine | string |
| TargetProcessCreationTime | datetime |
| TargetProcessCurrentDirectory | string |
| TargetProcessFileCompany | string |
| TargetProcessFileDescription | string |
| TargetProcessFileInternalName | string |
| TargetProcessFilename | string |
| TargetProcessFileOriginalName | string |
| TargetProcessFileProduct | string |
| TargetProcessFileSize | long |
| TargetProcessFileVersion | string |
| TargetProcessGuid | string |
| TargetProcessId | string |
| TargetProcessIMPHASH | string |
| TargetProcessInjectedAddress | string |
| TargetProcessIntegrityLevel | string |
| TargetProcessIsHidden | bool |
| TargetProcessMD5 | string |
| TargetProcessName | string |
| TargetProcessSHA1 | string |
| TargetProcessSHA256 | string |
| TargetProcessSHA512 | string |
| TargetProcessStatusCode | string |
| TargetProcessTokenElevation | string |
| TargetScope | string |
| TargetScopeId | string |
| TargetUserId | string |
| TargetUserIdType | string |
| TargetUsername | string |
| TargetUsernameType | string |
| TargetUserSessionGuid | string |
| TargetUserSessionId | string |
| TargetUserType | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrikeReplicatorV2](../parsers/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

