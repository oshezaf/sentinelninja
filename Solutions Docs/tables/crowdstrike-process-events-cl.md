# CrowdStrike_Process_Events_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Ingestion API Supported** | ✓ Yes |

## Schema (145 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CrowdStrike_Process_Events_CL.json)

| Column Name | Type |
|:------------|:-----|
| AdditionalFields | dynamic |
| aid | string |
| aip | string |
| AllocateVirtualMemoryCount | long |
| ArchiveFileWrittenCount | long |
| AsepWrittenCount | long |
| AuthenticationId | string |
| AuthenticodeHashData | string |
| BinaryExecutableWrittenCount | long |
| BoundingLimitCount | long |
| BoundingLimitDuration | string |
| CallStackModuleNames | string |
| CallStackModuleNamesVersion | string |
| Certificate | string |
| cid | string |
| CLICreationCount | long |
| CommandLine | string |
| ConfigBuild | string |
| ConfigStateHash | string |
| ConHostId | string |
| ConHostProcessId | string |
| ContextData | string |
| ContextProcessId | string |
| ContextThreadId | string |
| ContextTimeStamp | real |
| CreateProcessCount | long |
| CreateProcessType | string |
| CrowdStrikeId | string |
| CsaProcessDataCollectionInstanceId | string |
| CycleTime | long |
| DirectoryCreatedCount | long |
| DirectoryEnumeratedCount | long |
| DnsRequestCount | long |
| DocumentFileWrittenCount | long |
| EffectiveTransmissionClass | string |
| Entitlements | string |
| event_platform | string |
| event_simpleName | string |
| ExeAndServiceCount | long |
| ExecutableBytes | string |
| ExecutableDeletedCount | long |
| ExitCode | string |
| ExtendedKeyUsages | string |
| FileDeletedCount | long |
| FileIdentifier | string |
| FileSigningTime | real |
| GenericFileWrittenCount | long |
| HostUrl | string |
| ImageDirectoryClassification | string |
| ImageFileName | string |
| ImageSubsystem | string |
| InjectedDllCount | long |
| InjectedThreadCount | long |
| InjecteeImageFileName | string |
| InjectorImageFileName | string |
| IntegrityLevel | string |
| KernelTime | long |
| LoadingProcessOriginalFilename | string |
| MappedFromUserMode | string |
| MaxThreadCount | long |
| MD5HashData | string |
| MemoryDescriptionFlags | string |
| ModuleCharacteristics | string |
| ModuleLoadCount | long |
| ModuleLoadMechanism | string |
| ModuleName | string |
| ModuleTagsAsString | string |
| name | string |
| NetworkBindCount | long |
| NetworkCapableAsepWriteCount | long |
| NetworkCloseCount | long |
| NetworkConnectCount | long |
| NetworkConnectCountUdp | long |
| NetworkListenCount | long |
| NetworkModuleLoadCount | long |
| NetworkRecvAcceptCount | long |
| NewExecutableWrittenCount | long |
| OciContainerId | string |
| OriginalFilename | string |
| ParentAuthenticationId | string |
| ParentBaseFileName | string |
| ParentCommandLine | string |
| ParentImageFileName | string |
| ParentProcessId | string |
| ParentProcessPatternIdList | string |
| PatternId | string |
| PatternIdList | string |
| PayloadClassification | string |
| PayloadClassificationFlags | string |
| PrivilegedProcessHandleCount | long |
| ProcessEndTime | real |
| ProcessGroupId | string |
| ProcessStartTime | real |
| ProtectVirtualMemoryCount | long |
| PublicKeys | string |
| QueueApcCount | long |
| RawProcessId | string |
| RegKeySecurityDecreasedCount | long |
| RemoteAddressIP4 | string |
| RemovableDiskFileWrittenCount | long |
| RpcClientProcessId | string |
| RunDllInvocationCount | long |
| ScreenshotsTakenCount | long |
| ScriptEngineInvocationCount | long |
| ServiceEventCount | long |
| SessionId | string |
| SetThreadContextCount | long |
| SHA1HashData | string |
| SHA256HashData | string |
| SignatureErrorState | string |
| SignatureState | string |
| SignInfoFlags | string |
| SnapshotFileOpenCount | long |
| SourceProcessId | string |
| SourceThreadId | string |
| SuspectStackCount | long |
| SuspiciousCredentialModuleLoadCount | long |
| SuspiciousDnsRequestCount | long |
| SuspiciousFontLoadCount | long |
| SuspiciousRawDiskReadCount | long |
| SyntheticPR2Flags | string |
| Tags | string |
| TargetFileName | string |
| TargetProcessId | string |
| TargetThreadId | string |
| TemplateInstanceId | string |
| ThreadExecutionControlType | string |
| ThreadStartAddress | string |
| TimeGenerated | datetime |
| timestamp | long |
| TokenType | string |
| TreeId | string |
| UnsignedModuleLoadCount | long |
| UserMemoryAllocateExecutableCount | long |
| UserMemoryAllocateExecutableRemoteCount | long |
| UserMemoryProtectExecutableCount | long |
| UserMemoryProtectExecutableRemoteCount | long |
| UserName | string |
| UserSid | string |
| UserTime | long |
| WellKnownTargetFunction | string |
| WritingProcessCommandLine | string |
| WritingProcessId | string |
| WritingProcessImageFileName | string |
| ZoneIdentifier | string |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

