# CyberArkEPM_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (85 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyberArkEPM_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| accessAction_s | string |
| accessTargetName_s | string |
| accessTargetType_s | string |
| adminTaskId_s | string |
| affectedComputers_d | real |
| affectedUsers_d | real |
| agentEventCount_d | real |
| agentId_g | string |
| aggregatedBy_s | string |
| applicationSubType_s | string |
| applicationType_s | string |
| appPackageDisplayName_s | string |
| bundleId_s | string |
| bundleName_s | string |
| bundleVersion_s | string |
| CLSID_s | string |
| company_s | string |
| Computer | string |
| deceptionType_d | real |
| defenceActionId_d | real |
| displayName_s | string |
| event_type_s | string |
| eventType_s | string |
| evidences_s | string |
| fileAccessPermission_s | string |
| fileDescription_s | string |
| fileLocation_s | string |
| fileName_s | string |
| filePath_s | string |
| fileQualifier_s | string |
| fileSize_d | real |
| fileVersion_s | string |
| firstEventDate_t | datetime |
| firstEventUserName_s | string |
| hash_s | string |
| justification_s | string |
| justificationEmail_s | string |
| lastAgentId_g | string |
| lastEventDate_t | datetime |
| lastEventDisplayName_s | string |
| lastEventFileName_s | string |
| lastEventJustification_s | string |
| lastEventSourceName_s | string |
| lastEventSourceType_s | string |
| lastEventUserName_s | string |
| logonAttemptTypeId_d | real |
| logonStatusId_d | real |
| ManagementGroupName | string |
| MG | string |
| mimeType_s | string |
| modificationTime_t | datetime |
| originalFileName_s | string |
| owner_s | string |
| packageName_s | string |
| policyId_d | real |
| policyName_s | string |
| processCommandLine_g | string |
| processCommandLine_s | string |
| productName_s | string |
| productVersion_s | string |
| publisher_s | string |
| RawData | string |
| set_name_s | string |
| skipped_b | bool |
| skippedCount_d | real |
| sourceName_s | string |
| sourceProcessCommandLine_s | string |
| sourceProcessHash_s | string |
| sourceProcessPublisher_s | string |
| sourceProcessSigner_s | string |
| sourceProcessUsername_s | string |
| SourceSystem | string |
| sourceType_s | string |
| TenantId | string |
| threatDetectionAction_s | string |
| threatProtectionAction_s | string |
| TimeGenerated | datetime |
| totalEvents_d | real |
| Type | string |
| url_s | string |
| userIsAdmin_b | bool |
| userName_s | string |
| winEventRecordId_d | real |
| winEventType_d | real |

## Solutions (1)

This table is used by the following solutions:

- [CyberArkEPM](../solutions/cyberarkepm.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CyberArkEPM](../connectors/cyberarkepm.md) |  |

---

## Content Items Using This Table (21)

### Analytic Rules (10)

**In solution [CyberArkEPM](../solutions/cyberarkepm.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CyberArkEPM - Attack attempt not blocked](../content/cyberarkepm-cyberarkepm-attack-attempt-not-blocked-8e8978a2-9188-4187-8909-5ea00507bf16-2c52bf85.md) |  |
| [CyberArkEPM - MSBuild usage as LOLBin](../content/cyberarkepm-cyberarkepm-msbuild-usage-as-lolbin-a11bf869-458e-49fd-be03-58021b14be15-c30da3a6.md) |  |
| [CyberArkEPM - Multiple attack types](../content/cyberarkepm-cyberarkepm-multiple-attack-types-c02f96b4-057b-4e63-87af-6376ef7a081b-c13c5274.md) |  |
| [CyberArkEPM - Possible execution of Powershell Empire](../content/cyberarkepm-cyberarkepm-possible-execution-of-powershell-empire-eddfd1fd-71df-4cc3-b050-287643bee398-2d5da046.md) |  |
| [CyberArkEPM - Process started from different locations](../content/cyberarkepm-cyberarkepm-process-started-from-different-locations-0d4e62da-0a64-4532-b93e-28cd2940c300-6e1ef9fe.md) |  |
| [CyberArkEPM - Renamed Windows binary](../content/cyberarkepm-cyberarkepm-renamed-windows-binary-9281b7cc-8f05-45a9-bf10-17fb29492a84-2d034aad.md) |  |
| [CyberArkEPM - Uncommon Windows process started from System folder](../content/cyberarkepm-cyberarkepm-uncommon-windows-process-started-from-system-folder-16b940d2-aaf8-4eaa-a5e1-05df5f5c3d43-515a91a8.md) |  |
| [CyberArkEPM - Uncommon process Internet access](../content/cyberarkepm-cyberarkepm-uncommon-process-internet-access-9d0d44ab-54dc-472a-9931-53521e888932-7cd557dd.md) |  |
| [CyberArkEPM - Unexpected executable extension](../content/cyberarkepm-cyberarkepm-unexpected-executable-extension-911d5b75-a1ce-4f13-a839-9c2474768696-814c115f.md) |  |
| [CyberArkEPM - Unexpected executable location](../content/cyberarkepm-cyberarkepm-unexpected-executable-location-c1fcbbd7-74f8-4f32-8116-0a533ebd3878-f588775e.md) |  |

### Hunting Queries (10)

**In solution [CyberArkEPM](../solutions/cyberarkepm.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CyberArkEPM - Elevation requests](../content/cyberarkepm-cyberarkepm-elevation-requests-20fc7ee2-5387-4c4c-8819-77fb7bfb8d2a-c48d1704.md) |  |
| [CyberArkEPM - Powershell downloads](../content/cyberarkepm-cyberarkepm-powershell-downloads-576cac40-d6f5-4ef9-9c3d-013b94656bea-5c113d34.md) |  |
| [CyberArkEPM - Powershell scripts execution parameters](../content/cyberarkepm-cyberarkepm-powershell-scripts-execution-parameters-f1490e77-2a5e-4f07-afd9-c2bb20e26d30-cce84b88.md) |  |
| [CyberArkEPM - Process hash changed](../content/cyberarkepm-cyberarkepm-process-hash-changed-8d72be65-d837-4e86-bca8-4a30e6834a22-71d80861.md) |  |
| [CyberArkEPM - Processes run as admin](../content/cyberarkepm-cyberarkepm-processes-run-as-admin-e96de960-f4d7-49a3-8de7-4f5b7e8537cf-6d23b2f4.md) |  |
| [CyberArkEPM - Processes with Internet access attempts](../content/cyberarkepm-cyberarkepm-processes-with-internet-access-attempts-cff4d318-eaec-43c9-8c3e-84f74c789b98-7c6ad7ed.md) |  |
| [CyberArkEPM - Rare process run by users](../content/cyberarkepm-cyberarkepm-rare-process-run-by-users-9cf63647-4e05-47cc-90ac-4a17cfd06a05-59b01a72.md) |  |
| [CyberArkEPM - Rare process vendors](../content/cyberarkepm-cyberarkepm-rare-process-vendors-37031fed-f7cb-45fc-a1c2-e2eab46cbba2-6a23417c.md) |  |
| [CyberArkEPM - Scripts executed on hosts](../content/cyberarkepm-cyberarkepm-scripts-executed-on-hosts-bd8511dd-ee8f-4c76-a9c8-b8f263ec7355-53f78481.md) |  |
| [CyberArkEPM - Suspicious activity attempts](../content/cyberarkepm-cyberarkepm-suspicious-activity-attempts-e60cf50c-3ae0-44ac-9de1-ea13886973b8-c068e0ec.md) |  |

### Workbooks (1)

**In solution [CyberArkEPM](../solutions/cyberarkepm.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CyberArkEPM](../content/cyberarkepm-cyberarkepm-34ce07fb.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CyberArkEPM](../parsers/cyberarkepm.md) | [CyberArkEPM](../solutions/cyberarkepm.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

