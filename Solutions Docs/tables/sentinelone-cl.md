# SentinelOne_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (230 columns)

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
| activeDirectory_userPrincipalName_s | string |
| activeProtection_s | string |
| activeThreats_d | real |
| activityType_d | real |
| activityUuid_g | string |
| agentDetectionInfo_accountId_s | string |
| agentDetectionInfo_accountName_s | string |
| agentDetectionInfo_agentDetectionState_s | string |
| agentDetectionInfo_agentDomain_s | string |
| agentDetectionInfo_agentIpV4_s | string |
| agentDetectionInfo_agentIpV6_s | string |
| agentDetectionInfo_agentLastLoggedInUpn_s | string |
| agentDetectionInfo_agentLastLoggedInUserName_s | string |
| agentDetectionInfo_agentMitigationMode_s | string |
| agentDetectionInfo_agentOsName_s | string |
| agentDetectionInfo_agentOsRevision_s | string |
| agentDetectionInfo_agentRegisteredAt_t | datetime |
| agentDetectionInfo_agentUuid_g | string |
| agentDetectionInfo_agentVersion_s | string |
| agentDetectionInfo_assetVersion_s | string |
| agentDetectionInfo_externalIp_s | string |
| agentDetectionInfo_groupId_s | string |
| agentDetectionInfo_groupName_s | string |
| agentDetectionInfo_siteId_s | string |
| agentDetectionInfo_siteName_s | string |
| agentId_s | string |
| agentRealtimeInfo_accountId_s | string |
| agentRealtimeInfo_accountName_s | string |
| agentRealtimeInfo_activeThreats_d | real |
| agentRealtimeInfo_agentComputerName_s | string |
| agentRealtimeInfo_agentDecommissionedAt_b | int |
| agentRealtimeInfo_agentDomain_s | string |
| agentRealtimeInfo_agentId_s | string |
| agentRealtimeInfo_agentInfected_b | int |
| agentRealtimeInfo_agentIsActive_b | int |
| agentRealtimeInfo_agentIsDecommissioned_b | int |
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
| agentRealtimeInfo_networkInterfaces_s | string |
| agentRealtimeInfo_operationalState_s | string |
| agentRealtimeInfo_rebootRequired_b | int |
| agentRealtimeInfo_scanAbortedAt_t | datetime |
| agentRealtimeInfo_scanFinishedAt_t | datetime |
| agentRealtimeInfo_scanStartedAt_t | datetime |
| agentRealtimeInfo_scanStatus_s | string |
| agentRealtimeInfo_siteId_s | string |
| agentRealtimeInfo_siteName_s | string |
| agentRealtimeInfo_userActionsNeeded_s | string |
| agentUpdatedVersion_s | string |
| agentVersion_s | string |
| allowRemoteShell_b | int |
| appsVulnerabilityStatus_s | string |
| cloudProviders_Azure_azureResourceGroup_s | string |
| cloudProviders_Azure_cloudAccount_g | string |
| cloudProviders_Azure_cloudImage_s | string |
| cloudProviders_Azure_cloudInstanceId_g | string |
| cloudProviders_Azure_cloudLocation_s | string |
| cloudProviders_Azure_cloudTags_s | string |
| comments_s | string |
| Computer | string |
| computerName_s | string |
| consoleMigrationStatus_s | string |
| containerizedWorkloadCounts_containersCount_d | real |
| containerizedWorkloadCounts_podsCount_d | real |
| containerizedWorkloadCounts_tasksCount_d | real |
| coreCount_d | real |
| cpuCount_d | real |
| cpuId_s | string |
| createdAt_t | datetime |
| creator_s | string |
| creatorId_s | string |
| DataFields_s | string |
| description_s | string |
| detectionState_s | string |
| domain_s | string |
| encryptedApplications_b | int |
| event_name_s | string |
| externalId_s | string |
| externalIp_s | string |
| filterId_s | string |
| filterName_s | string |
| firewallEnabled_b | int |
| firstFullModeTime_t | datetime |
| fullDiskScanLastUpdatedAt_t | datetime |
| groupId_s | string |
| groupIp_s | string |
| groupName_s | string |
| hasContainerizedWorkload_b | int |
| hash_s | string |
| id_s | string |
| indicators_s | string |
| infected_b | int |
| inherits_b | int |
| inRemoteShellSession_b | int |
| installerType_s | string |
| isActive_b | int |
| isAdConnector_b | int |
| isDecommissioned_b | int |
| isDefault_b | int |
| isPendingUninstall_b | int |
| isUninstalled_b | int |
| isUpToDate_b | int |
| lastActiveDate_t | datetime |
| lastIpToMgmt_s | string |
| lastLoggedInUserName_s | string |
| lastSuccessfulScanDate_t | datetime |
| licenseKey_s | string |
| locationEnabled_b | int |
| locations_s | string |
| locationType_s | string |
| machineSid_s | string |
| machineType_s | string |
| ManagementGroupName | string |
| MG | string |
| missingPermissions_s | string |
| mitigationMode_s | string |
| mitigationModeSuspicious_s | string |
| mitigationStatus_s | string |
| modelName_s | string |
| name_s | string |
| networkInterfaces_s | string |
| networkQuarantineEnabled_b | int |
| networkStatus_s | string |
| operationalState_s | string |
| operationalStateExpiration_t | datetime |
| osArch_s | string |
| osFamily_s | string |
| osName_s | string |
| osRevision_s | string |
| osStartTime_t | datetime |
| osType_s | string |
| osUsername_s | string |
| primaryDescription_s | string |
| proxyStates_console_b | int |
| proxyStates_deepVisibility_b | int |
| proxyStates_pacFileUsage_b | int |
| rangerStatus_s | string |
| rangerVersion_s | string |
| rank_d | real |
| RawData | string |
| registeredAt_t | datetime |
| registrationToken_s | string |
| remoteProfilingState_s | string |
| scanAbortedAt_t | datetime |
| scanFinishedAt_t | datetime |
| scanStartedAt_t | datetime |
| scanStatus_s | string |
| secondaryDescription_s | string |
| serialNumber_g | string |
| serialNumber_s | string |
| showAlertIcon_b | int |
| siteId_s | string |
| siteName_s | string |
| SourceSystem | string |
| tags_sentinelone_s | string |
| TenantId | string |
| threatId_s | string |
| threatInfo_analystVerdict_s | string |
| threatInfo_analystVerdictDescription_s | string |
| threatInfo_automaticallyResolved_b | int |
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
| threatInfo_externalTicketExists_b | int |
| threatInfo_failedActions_b | int |
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
| threatInfo_isFileless_b | int |
| threatInfo_isValidCertificate_b | int |
| threatInfo_maliciousProcessArguments_s | string |
| threatInfo_md5_g | string |
| threatInfo_mitigatedPreemptively_b | int |
| threatInfo_mitigationStatus_s | string |
| threatInfo_mitigationStatusDescription_s | string |
| threatInfo_originatorProcess_s | string |
| threatInfo_pendingActions_b | int |
| threatInfo_processUser_s | string |
| threatInfo_publisherName_s | string |
| threatInfo_reachedEventsLimit_b | int |
| threatInfo_rebootRequired_b | int |
| threatInfo_rootProcessUpn_s | string |
| threatInfo_sha1_s | string |
| threatInfo_sha256_s | string |
| threatInfo_storyline_g | string |
| threatInfo_storyline_s | string |
| threatInfo_threatId_s | string |
| threatInfo_threatName_s | string |
| threatInfo_updatedAt_t | datetime |
| threatRebootRequired_b | int |
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

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [SentinelOne](../solutions/sentinelone.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] SentinelOne (using Azure Function)](../connectors/sentinelone.md) |  |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

