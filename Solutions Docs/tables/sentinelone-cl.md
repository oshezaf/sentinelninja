# SentinelOne_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (322 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SentinelOne_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| _ResourceId | string |
| accountId_s | string |
| accountName_s | string |
| activeDirectory_computerDistinguishedName_s | string |
| activeDirectory_computerMemberOf_s | string |
| activeDirectory_lastUserDistinguishedName_s | string |
| activeDirectory_lastUserMemberOf_s | string |
| activeThreats_d | real |
| activityType_d | real |
| activityUuid_g | string |
| agentDetectionInfo_accountId_s | string |
| agentDetectionInfo_accountName_s | string |
| agentDetectionInfo_agentDetectionState_s | string |
| agentDetectionInfo_agentDomain_s | string |
| agentDetectionInfo_agentIpV4_s | string |
| agentDetectionInfo_agentIpV6_s | string |
| agentDetectionInfo_agentLastLoggedInUserName_s | string |
| agentDetectionInfo_agentMitigationMode_s | string |
| agentDetectionInfo_agentOsName_s | string |
| agentDetectionInfo_agentOsRevision_s | string |
| agentDetectionInfo_agentRegisteredAt_t | datetime |
| agentDetectionInfo_agentUuid_g | string |
| agentDetectionInfo_agentVersion_s | string |
| agentDetectionInfo_externalIp_s | string |
| agentDetectionInfo_groupId_s | string |
| agentDetectionInfo_groupName_s | string |
| agentDetectionInfo_machineType_s | string |
| agentDetectionInfo_name_s | string |
| agentDetectionInfo_osFamily_s | string |
| agentDetectionInfo_osName_s | string |
| agentDetectionInfo_osRevision_s | string |
| agentDetectionInfo_siteId_s | string |
| agentDetectionInfo_siteName_s | string |
| agentDetectionInfo_uuid_g | string |
| agentDetectionInfo_version_s | string |
| agentId_s | string |
| agentRealtimeInfo_accountId_s | string |
| agentRealtimeInfo_accountName_s | string |
| agentRealtimeInfo_activeThreats_d | real |
| agentRealtimeInfo_agentComputerName_s | string |
| agentRealtimeInfo_agentDomain_s | string |
| agentRealtimeInfo_agentId_s | string |
| agentRealtimeInfo_agentInfected_b | bool |
| agentRealtimeInfo_agentIsActive_b | bool |
| agentRealtimeInfo_agentIsDecommissioned_b | bool |
| agentRealtimeInfo_agentMachineType_s | string |
| agentRealtimeInfo_agentMitigationMode_s | string |
| agentRealtimeInfo_agentNetworkStatus_s | string |
| agentRealtimeInfo_agentOsName_s | string |
| agentRealtimeInfo_agentOsRevision_s | string |
| agentRealtimeInfo_agentOsType_s | string |
| agentRealtimeInfo_agentUuid_g | string |
| agentRealtimeInfo_agentVersion_s | string |
| agentRealtimeInfo_groupId_s | string |
| agentRealtimeInfo_groupName_s | string |
| agentRealtimeInfo_id_s | string |
| agentRealtimeInfo_infected_b | bool |
| agentRealtimeInfo_isActive_b | bool |
| agentRealtimeInfo_isDecommissioned_b | bool |
| agentRealtimeInfo_machineType_s | string |
| agentRealtimeInfo_name_s | string |
| agentRealtimeInfo_networkInterfaces_s | string |
| agentRealtimeInfo_operationalState_s | string |
| agentRealtimeInfo_os_s | string |
| agentRealtimeInfo_rebootRequired_b | bool |
| agentRealtimeInfo_scanFinishedAt_t | datetime |
| agentRealtimeInfo_scanStartedAt_t | datetime |
| agentRealtimeInfo_scanStatus_s | string |
| agentRealtimeInfo_siteId_s | string |
| agentRealtimeInfo_siteName_s | string |
| agentRealtimeInfo_userActionsNeeded_s | string |
| agentRealtimeInfo_uuid_g | string |
| agentUpdatedVersion_s | string |
| agentVersion_s | string |
| alertInfo_alertId_s | string |
| alertInfo_analystVerdict_s | string |
| alertInfo_createdAt_t | datetime |
| alertInfo_dnsRequest_s | string |
| alertInfo_dnsResponse_s | string |
| alertInfo_dstIp_s | string |
| alertInfo_dstPort_s | string |
| alertInfo_dvEventId_s | string |
| alertInfo_eventType_s | string |
| alertInfo_hitType_s | string |
| alertInfo_incidentStatus_s | string |
| alertInfo_indicatorCategory_s | string |
| alertInfo_indicatorDescription_s | string |
| alertInfo_indicatorName_s | string |
| alertInfo_isEdr_b | bool |
| alertInfo_loginAccountDomain_s | string |
| alertInfo_loginAccountSid_s | string |
| alertInfo_loginIsAdministratorEquivalent_s | string |
| alertInfo_loginIsSuccessful_s | string |
| alertInfo_loginsUserName_s | string |
| alertInfo_loginType_s | string |
| alertInfo_netEventDirection_s | string |
| alertInfo_registryKeyPath_s | string |
| alertInfo_registryOldValue_g | string |
| alertInfo_registryOldValue_s | string |
| alertInfo_registryOldValueType_s | string |
| alertInfo_registryPath_s | string |
| alertInfo_registryValue_g | string |
| alertInfo_registryValue_s | string |
| alertInfo_reportedAt_t | datetime |
| alertInfo_source_s | string |
| alertInfo_srcIp_s | string |
| alertInfo_srcMachineIp_s | string |
| alertInfo_srcPort_s | string |
| alertInfo_updatedAt_t | datetime |
| allowRemoteShell_b | bool |
| appsVulnerabilityStatus_s | string |
| comments_s | string |
| Computer | string |
| computerName_s | string |
| consoleMigrationStatus_s | string |
| containerInfo_id_s | string |
| coreCount_d | real |
| cpuCount_d | real |
| cpuId_s | string |
| createdAt_t | datetime |
| creator_s | string |
| creatorId_s | string |
| data_accountName_s | string |
| data_fullScopeDetails_s | string |
| data_role_s | string |
| data_scopeLevel_s | string |
| data_scopeName_s | string |
| data_siteName_s | string |
| data_source_s | string |
| data_username_s | string |
| data_userScope_s | string |
| DataFields_s | string |
| description_s | string |
| detectionState_s | string |
| domain_s | string |
| encryptedApplications_b | bool |
| event_name_s | string |
| externalId_s | string |
| externalIp_s | string |
| firewallEnabled_b | bool |
| firstFullModeTime_t | datetime |
| fullDiskScanLastUpdatedAt_t | datetime |
| groupId_s | string |
| groupIp_s | string |
| groupName_s | string |
| hash_s | string |
| id_s | string |
| indicators_s | string |
| infected_b | bool |
| inherits_b | bool |
| inRemoteShellSession_b | bool |
| installerType_s | string |
| isActive_b | bool |
| isDecommissioned_b | bool |
| isDefault_b | bool |
| isPendingUninstall_b | bool |
| isUninstalled_b | bool |
| isUpToDate_b | bool |
| lastActiveDate_t | datetime |
| lastIpToMgmt_s | string |
| lastLoggedInUserName_s | string |
| licenseKey_s | string |
| locationEnabled_b | bool |
| locations_s | string |
| locationType_s | string |
| machineType_s | string |
| ManagementGroupName | string |
| MG | string |
| mitigationMode_s | string |
| mitigationModeSuspicious_s | string |
| mitigationStatus_s | string |
| modelName_s | string |
| name_s | string |
| networkInterfaces_s | string |
| networkQuarantineEnabled_b | bool |
| networkStatus_s | string |
| operationalState_s | string |
| osArch_s | string |
| osFamily_s | string |
| osName_s | string |
| osRevision_s | string |
| osStartTime_t | datetime |
| osType_s | string |
| osUsername_s | string |
| primaryDescription_s | string |
| rangerStatus_s | string |
| rangerVersion_s | string |
| RawData | string |
| registeredAt_t | datetime |
| registrationToken_s | string |
| remoteProfilingState_s | string |
| ruleInfo_description_s | string |
| ruleInfo_id_s | string |
| ruleInfo_name_s | string |
| ruleInfo_queryLang_s | string |
| ruleInfo_queryType_s | string |
| ruleInfo_s1ql_s | string |
| ruleInfo_scopeLevel_s | string |
| ruleInfo_severity_s | string |
| ruleInfo_treatAsThreat_s | string |
| scanAbortedAt_t | datetime |
| scanFinishedAt_t | datetime |
| scanStartedAt_t | datetime |
| scanStatus_s | string |
| secondaryDescription_s | string |
| serialNumber_s | string |
| showAlertIcon_b | bool |
| siteId_s | string |
| siteName_s | string |
| sourceParentProcessInfo_commandline_s | string |
| sourceParentProcessInfo_fileHashMd5_g | string |
| sourceParentProcessInfo_fileHashSha1_s | string |
| sourceParentProcessInfo_fileHashSha256_s | string |
| sourceParentProcessInfo_filePath_s | string |
| sourceParentProcessInfo_fileSignerIdentity_s | string |
| sourceParentProcessInfo_integrityLevel_s | string |
| sourceParentProcessInfo_name_s | string |
| sourceParentProcessInfo_pid_s | string |
| sourceParentProcessInfo_pidStarttime_t | datetime |
| sourceParentProcessInfo_storyline_g | string |
| sourceParentProcessInfo_storyline_s | string |
| sourceParentProcessInfo_subsystem_s | string |
| sourceParentProcessInfo_uniqueId_g | string |
| sourceParentProcessInfo_uniqueId_s | string |
| sourceParentProcessInfo_user_s | string |
| sourceProcessInfo_commandline_s | string |
| sourceProcessInfo_fileHashMd5_g | string |
| sourceProcessInfo_fileHashSha1_s | string |
| sourceProcessInfo_fileHashSha256_s | string |
| sourceProcessInfo_filePath_s | string |
| sourceProcessInfo_fileSignerIdentity_s | string |
| sourceProcessInfo_integrityLevel_s | string |
| sourceProcessInfo_name_s | string |
| sourceProcessInfo_pid_s | string |
| sourceProcessInfo_pidStarttime_t | datetime |
| sourceProcessInfo_storyline_g | string |
| sourceProcessInfo_storyline_s | string |
| sourceProcessInfo_subsystem_s | string |
| sourceProcessInfo_uniqueId_g | string |
| sourceProcessInfo_uniqueId_s | string |
| sourceProcessInfo_user_s | string |
| SourceSystem | string |
| tags_sentinelone_s | string |
| targetProcessInfo_tgtFileCreatedAt_t | datetime |
| targetProcessInfo_tgtFileHashSha1_s | string |
| targetProcessInfo_tgtFileHashSha256_s | string |
| targetProcessInfo_tgtFileId_g | string |
| targetProcessInfo_tgtFileId_s | string |
| targetProcessInfo_tgtFileIsSigned_s | string |
| targetProcessInfo_tgtFileModifiedAt_t | datetime |
| targetProcessInfo_tgtFileOldPath_s | string |
| targetProcessInfo_tgtFilePath_s | string |
| targetProcessInfo_tgtProcCmdLine_s | string |
| targetProcessInfo_tgtProcessStartTime_t | datetime |
| targetProcessInfo_tgtProcImagePath_s | string |
| targetProcessInfo_tgtProcIntegrityLevel_s | string |
| targetProcessInfo_tgtProcName_s | string |
| targetProcessInfo_tgtProcPid_s | string |
| targetProcessInfo_tgtProcSignedStatus_s | string |
| targetProcessInfo_tgtProcStorylineId_g | string |
| targetProcessInfo_tgtProcStorylineId_s | string |
| targetProcessInfo_tgtProcUid_g | string |
| targetProcessInfo_tgtProcUid_s | string |
| TenantId | string |
| threatId_s | string |
| threatInfo_analystVerdict_s | string |
| threatInfo_analystVerdictDescription_s | string |
| threatInfo_automaticallyResolved_b | bool |
| threatInfo_certificateId_s | string |
| threatInfo_classification_s | string |
| threatInfo_classificationSource_s | string |
| threatInfo_cloudFilesHashVerdict_s | string |
| threatInfo_collectionId_s | string |
| threatInfo_confidenceLevel_s | string |
| threatInfo_createdAt_t | datetime |
| threatInfo_detectionEngines_s | string |
| threatInfo_detectionType_s | string |
| threatInfo_engines_s | string |
| threatInfo_externalTicketExists_b | bool |
| threatInfo_failedActions_b | bool |
| threatInfo_fileExtension_g | string |
| threatInfo_fileExtension_s | string |
| threatInfo_fileExtensionType_s | string |
| threatInfo_filePath_s | string |
| threatInfo_fileSize_d | real |
| threatInfo_fileVerificationType_s | string |
| threatInfo_identifiedAt_t | datetime |
| threatInfo_incidentStatus_s | string |
| threatInfo_incidentStatusDescription_s | string |
| threatInfo_initiatedBy_s | string |
| threatInfo_initiatedByDescription_s | string |
| threatInfo_isFileless_b | bool |
| threatInfo_isValidCertificate_b | bool |
| threatInfo_maliciousProcessArguments_s | string |
| threatInfo_mitigatedPreemptively_b | bool |
| threatInfo_mitigationStatus_s | string |
| threatInfo_mitigationStatusDescription_s | string |
| threatInfo_originatorProcess_s | string |
| threatInfo_pendingActions_b | bool |
| threatInfo_processUser_s | string |
| threatInfo_publisherName_s | string |
| threatInfo_reachedEventsLimit_b | bool |
| threatInfo_rebootRequired_b | bool |
| threatInfo_sha1_s | string |
| threatInfo_storyline_g | string |
| threatInfo_storyline_s | string |
| threatInfo_threatId_s | string |
| threatInfo_threatName_g | string |
| threatInfo_threatName_s | string |
| threatInfo_updatedAt_t | datetime |
| threatRebootRequired_b | bool |
| TimeGenerated | datetime |
| totalAgents_d | real |
| totalMemory_d | real |
| Type | string |
| type_s | string |
| updatedAt_t | datetime |
| userActionsNeeded_s | string |
| userId_s | string |
| uuid_g | string |
| whiteningOptions_s | string |

## Solutions (1)

This table is used by the following solutions:

- [SentinelOne](../solutions/sentinelone.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SentinelOne](../connectors/sentinelone.md) |  |

---

## Content Items Using This Table (22)

### Analytic Rules (11)

**In solution [SentinelOne](../solutions/sentinelone.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Sentinel One - Admin login from new location](../content/sentinelone-sentinel-one-admin-login-from-new-location-382f37b3-b49a-492f-b436-a4717c8c5c3e-e7ec747e.md) |  |
| [Sentinel One - Agent uninstalled from multiple hosts](../content/sentinelone-sentinel-one-agent-uninstalled-from-multiple-hosts-4ad87e4a-d045-4c6b-9652-c9de27fcb442-10a3603c.md) |  |
| [Sentinel One - Alert from custom rule](../content/sentinelone-sentinel-one-alert-from-custom-rule-5f37de91-ff2b-45fb-9eda-49e9f76a3942-7cb8d841.md) |  |
| [Sentinel One - Blacklist hash deleted](../content/sentinelone-sentinel-one-blacklist-hash-deleted-de339761-2298-4b37-8f1b-80ebd4f0b5f6-8fa631c1.md) |  |
| [Sentinel One - Exclusion added](../content/sentinelone-sentinel-one-exclusion-added-4224409f-a7bf-45eb-a931-922d79575a05-c94db4fe.md) |  |
| [Sentinel One - Multiple alerts on host](../content/sentinelone-sentinel-one-multiple-alerts-on-host-47e427e6-61bc-4e24-8d16-a12871b9f939-a9644e81.md) |  |
| [Sentinel One - New admin created](../content/sentinelone-sentinel-one-new-admin-created-e73d293d-966c-47ec-b8e0-95255755f12c-c6c1cb15.md) |  |
| [Sentinel One - Rule deleted](../content/sentinelone-sentinel-one-rule-deleted-e171b587-22bd-46ec-b96c-7c99024847a7-13809a6c.md) |  |
| [Sentinel One - Rule disabled](../content/sentinelone-sentinel-one-rule-disabled-84e210dd-8982-4398-b6f3-264fd72d036c-8dd4a965.md) |  |
| [Sentinel One - Same custom rule triggered on different hosts](../content/sentinelone-sentinel-one-same-custom-rule-triggered-on-different-hosts-5586d378-1bce-4d9b-9ac8-e7271c9d5a9a-6f74484f.md) |  |
| [Sentinel One - User viewed agent's passphrase](../content/sentinelone-sentinel-one-user-viewed-agent's-passphrase-51999097-60f4-42c0-bee8-fa28160e5583-1188d485.md) |  |

### Hunting Queries (10)

**In solution [SentinelOne](../solutions/sentinelone.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Sentinel One - Agent not updated](../content/sentinelone-sentinel-one-agent-not-updated-7fc83c11-1d80-4d1e-9d4b-4f48bbf77abe-d8920f73.md) |  |
| [Sentinel One - Agent status](../content/sentinelone-sentinel-one-agent-status-4b2ed4b6-10bf-4b2c-b31e-ae51b575dfd4-ecfcfb9d.md) |  |
| [Sentinel One - Alert triggers (files, processes, strings)](../content/sentinelone-sentinel-one-alert-triggers-files,-processes,-strings-660e92b5-1ef6-471f-b753-44a34af82c41-3e9fb5c4.md) |  |
| [Sentinel One - Deleted rules](../content/sentinelone-sentinel-one-deleted-rules-8d1ca735-e29a-4bea-a2ec-93162790b686-ccd750bf.md) |  |
| [Sentinel One - Hosts not scanned recently](../content/sentinelone-sentinel-one-hosts-not-scanned-recently-e45ff570-e8a6-4f8e-9c08-7ee92ef86060-f02435bd.md) |  |
| [Sentinel One - New rules](../content/sentinelone-sentinel-one-new-rules-9c3a38e4-0975-4f96-82ee-90ce68bec76a-83965701.md) |  |
| [Sentinel One - Scanned hosts](../content/sentinelone-sentinel-one-scanned-hosts-17c77743-8bdb-4d29-a3cb-a7a08676122f-33d8fd36.md) |  |
| [Sentinel One - Sources by alert count](../content/sentinelone-sentinel-one-sources-by-alert-count-acd0a127-461e-48c8-96fa-27d14595abe0-e0f215ff.md) |  |
| [Sentinel One - Uninstalled agents](../content/sentinelone-sentinel-one-uninstalled-agents-f3a7cedd-6fc3-4661-a0ad-c1738e531917-9f651695.md) |  |
| [Sentinel One - Users by alert count](../content/sentinelone-sentinel-one-users-by-alert-count-56500e23-4e64-45a5-a444-98a1acb2f700-01daf4b9.md) |  |

### Workbooks (1)

**In solution [SentinelOne](../solutions/sentinelone.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SentinelOne](../content/sentinelone-sentinelone-8f12ec76.md) |  |

## Parsers Using This Table (11)

### ASIM Parsers (9)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAlertEventSentinelOneSingularity](../asim/asimalerteventsentinelonesingularity.md) | AlertEvent | SentinelOne |  |
| [ASimAuditEventSentinelOne](../asim/asimauditeventsentinelone.md) | AuditEvent | SentinelOne |  |
| [ASimAuthenticationSentinelOne](../asim/asimauthenticationsentinelone.md) | Authentication | SentinelOne |  |
| [ASimDnsSentinelOne](../asim/asimdnssentinelone.md) | Dns | SentinelOne |  |
| [ASimFileEventSentinelOne](../asim/asimfileeventsentinelone.md) | FileEvent | SentinelOne |  |
| [ASimNetworkSessionSentinelOne](../asim/asimnetworksessionsentinelone.md) | NetworkSession | SentinelOne |  |
| [ASimProcessCreateSentinelOne](../asim/asimprocesscreatesentinelone.md) | ProcessEvent | SentinelOne |  |
| [ASimRegistryEventSentinelOne](../asim/asimregistryeventsentinelone.md) | RegistryEvent | SentinelOne |  |
| [ASimUserManagementSentinelOne](../asim/asimusermanagementsentinelone.md) | UserManagement | SentinelOne |  |

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [SentinelOne](../parsers/sentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |  |
| [SentinelOne](../parsers/sentinelone.md) | [SentinelOne](../solutions/sentinelone.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

