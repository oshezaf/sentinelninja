# HalcyonFileActivity_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (105 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon%5CData%20Connectors%5CHalcyon_ccp/Halcyon_table_FileActivity.json)

| Column Name | Type |
|:------------|:-----|
| ActingProcessCommandLine | string |
| ActingProcessCreationTime | datetime |
| ActingProcessFileCompany | string |
| ActingProcessFileDescription | string |
| ActingProcessFileProduct | string |
| ActingProcessFileSize | long |
| ActingProcessFileVersion | string |
| ActingProcessGuid | string |
| ActingProcessId | string |
| ActingProcessIMPHASH | string |
| ActingProcessIntegrityLevel | string |
| ActingProcessMD5 | string |
| ActingProcessName | string |
| ActingProcessSHA1 | string |
| ActingProcessSHA256 | string |
| ActingProcessSHA512 | string |
| ActingProcessTokenElevation | string |
| ActorScope | string |
| ActorScopeId | string |
| ActorSessionId | string |
| ActorUserId | string |
| ActorUserIdType | string |
| ActorUsername | string |
| ActorUsernameType | string |
| ActorUserType | string |
| AdditionalFields | dynamic |
| Dvc | string |
| DvcAction | string |
| DvcDomain | string |
| DvcDomainType | string |
| DvcFQDN | string |
| DvcHostname | string |
| DvcId | string |
| DvcIdType | string |
| DvcIpAddr | string |
| DvcMacAddr | string |
| DvcOriginalAction | string |
| DvcOs | string |
| DvcOsVersion | string |
| DvcScope | string |
| DvcScopeId | string |
| EventCount | int |
| EventEndTime | datetime |
| EventMessage | string |
| EventOriginalResultDetails | string |
| EventOriginalSeverity | string |
| EventOriginalType | string |
| EventOriginalUid | string |
| EventProduct | string |
| EventProductVersion | string |
| EventResult | string |
| EventResultDetails | string |
| EventSchema | string |
| EventSchemaVersion | string |
| EventSeverity | string |
| EventStartTime | datetime |
| EventSubType | string |
| EventType | string |
| EventVendor | string |
| FileContentType | string |
| FileMD5 | string |
| FileName | string |
| FileSHA1 | string |
| FileSHA256 | string |
| FileSHA512 | string |
| FileSize | int |
| HashType | string |
| SourceSystem | string |
| SrcFileCreationTime | datetime |
| SrcFileDirectory | string |
| SrcFileExtension | string |
| SrcFileMD5 | string |
| SrcFileMimeType | string |
| SrcFileName | string |
| SrcFilePath | string |
| SrcFilePathType | string |
| SrcFileSHA1 | string |
| SrcFileSHA256 | string |
| SrcFileSHA512 | string |
| SrcFileSize | long |
| TargetFileCreationTime | datetime |
| TargetFileDirectory | string |
| TargetFileExtension | string |
| TargetFileMD5 | string |
| TargetFileMimeType | string |
| TargetFileName | string |
| TargetFilePath | string |
| TargetFilePathType | string |
| TargetFileSHA1 | string |
| TargetFileSHA256 | string |
| TargetFileSHA512 | string |
| TargetFileSize | long |
| ThreatCategory | string |
| ThreatConfidence | int |
| ThreatField | string |
| ThreatFilePath | string |
| ThreatFirstReportedTime | datetime |
| ThreatId | string |
| ThreatIsActive | bool |
| ThreatLastReportedTime | datetime |
| ThreatName | string |
| ThreatOriginalConfidence | string |
| ThreatOriginalRiskLevel | string |
| ThreatRiskLevel | int |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Halcyon](../solutions/halcyon.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Halcyon Connector](../connectors/halcyonpush.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ASimFileEventHalcyon](../parsers/asimfileeventhalcyon.md) | [Halcyon](../solutions/halcyon.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

