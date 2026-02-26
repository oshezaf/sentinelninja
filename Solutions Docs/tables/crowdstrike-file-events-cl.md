# CrowdStrike_File_Events_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Ingestion API Supported** | ✓ Yes |

## Schema (71 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CrowdStrike_File_Events_CL.json)

| Column Name | Type |
|:------------|:-----|
| AdditionalFields | dynamic |
| aid | string |
| aip | string |
| AuthenticationId | string |
| BoundingLimitCount | long |
| BoundingLimitDuration | string |
| cid | string |
| ClientId | string |
| CommandLine | string |
| ConfigBuild | string |
| ConfigStateHash | string |
| ContextProcessId | string |
| ContextThreadId | string |
| ContextTimeStamp | real |
| CrowdStrikeId | string |
| DesiredAccess | string |
| DiskParentDeviceInstanceId | string |
| EffectiveTransmissionClass | string |
| ELFSubType | string |
| Entitlements | string |
| event_platform | string |
| event_simpleName | string |
| EventOrigin | string |
| FileAttributes | string |
| FileCategory | string |
| FileEcpBitmask | string |
| FileFlags | string |
| FileIdentifier | string |
| FileObject | string |
| FileOperatorSid | string |
| FileWrittenFlags | string |
| FixedFileVersion | string |
| GID | string |
| HandleCreateAuthenticationId | string |
| ImageFileName | string |
| Information | string |
| IrpFlags | string |
| IsOnNetwork | string |
| IsOnRemovableDisk | string |
| IsTransactedFile | string |
| MachOSubType | string |
| MajorFunction | string |
| MinorFunction | string |
| MSOfficeSubType | string |
| name | string |
| NewFileIdentifier | string |
| OciContainerId | string |
| OperationFlags | string |
| Options | string |
| OriginalFilename | string |
| PatternId | string |
| SHA256HashData | string |
| ShareAccess | string |
| Size | long |
| SourceFileName | string |
| Status | string |
| Tags | string |
| TargetDirectoryName | string |
| TargetFileName | string |
| TemporaryFileName | string |
| TimeGenerated | datetime |
| timestamp | long |
| TokenType | string |
| TreeId | string |
| UID | string |
| UnixMode | string |
| UserName | string |
| USN | string |
| VnodeModificationType | string |
| VnodeType | string |
| VolumeSessionUUID | string |

## Solutions (1)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

