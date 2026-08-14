# TrendAI_XDR_OAT_V2_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (155 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TrendAI%20Vision%20One%28CCF%29%5CData%20Connectors%5CTrendAIVisionOneOAT_ccp/TrendAIVisionOneOAT_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Computer | string |  |
| detail_act_s | string |  |
| detail_actResult_s | string |  |
| detail_aggregatedCount_d | real |  |
| detail_app_s | string |  |
| detail_appGroup_s | string |  |
| detail_aptRelated_s | string |  |
| detail_cat_d | real |  |
| detail_channel_s | string |  |
| detail_clientFlag_s | string |  |
| detail_detectionType_s | string |  |
| detail_deviceDirection_s | string |  |
| detail_deviceGUID_g | string |  |
| detail_deviceMacAddress_s | string |  |
| detail_dhost_s | string |  |
| detail_dmac_s | string |  |
| detail_domainName_s | string |  |
| detail_dpt_d | real | Destination port. |
| detail_dst_s | string | Destination IP address. |
| detail_dstGroup_s | string |  |
| detail_dstZone_s | string |  |
| detail_dvchost_s | string |  |
| detail_endpointGuid_g | string |  |
| detail_endpointHostName_s | string | Endpoint host name from the detail object. |
| detail_endpointIp_s | string |  |
| detail_endpointMacAddress_s | string |  |
| detail_eventId_d | real |  |
| detail_eventId_s | string |  |
| detail_eventName_s | string | OAT event name / technique name. |
| detail_eventSourceType_s | string |  |
| detail_eventSubId_s | string |  |
| detail_eventSubName_s | string |  |
| detail_eventTime_d | real |  |
| detail_fileExt_s | string |  |
| detail_fileHash_s | string |  |
| detail_fileName_s | string |  |
| detail_filePath_s | string |  |
| detail_filePathName_s | string |  |
| detail_fileSize_d | real |  |
| detail_filterRiskLevel_s | string | Risk level: low, medium, high, or critical. |
| detail_firstAct_s | string |  |
| detail_firstActResult_s | string |  |
| detail_firstSeen_t | datetime |  |
| detail_fullPath_s | string |  |
| detail_hostName_s | string |  |
| detail_hostSeverity_d | real |  |
| detail_interestedGroup_s | string |  |
| detail_interestedHost_s | string |  |
| detail_interestedIp_s | string |  |
| detail_lastSeen_t | datetime |  |
| detail_logonUser_s | string |  |
| detail_malDst_s | string |  |
| detail_malName_s | string |  |
| detail_malSubType_s | string |  |
| detail_malType_s | string |  |
| detail_malTypeGroup_s | string |  |
| detail_mDevice_s | string |  |
| detail_objectAppName_s | string |  |
| detail_objectCmd_s | string | Command line of the object process. |
| detail_objectContentName_s | string |  |
| detail_objectFileCreation_d | real |  |
| detail_objectFileHashSha1_s | string |  |
| detail_objectFileHashSha256_s | string |  |
| detail_objectFileModifiedTime_d | real |  |
| detail_objectFileName_s | string |  |
| detail_objectFilePath_s | string |  |
| detail_objectFileSize_d | real |  |
| detail_objectFirstSeen_d | real |  |
| detail_objectIps_s | string |  |
| detail_objectLastSeen_d | real |  |
| detail_objectLaunchTime_d | real |  |
| detail_objectName_s | string |  |
| detail_objectRawDataStr_s | string |  |
| detail_objectRunAsLocalAccount_b | bool |  |
| detail_objectSigner_s | string |  |
| detail_objectSignerValid_s | string |  |
| detail_objectSubTrueType_d | real |  |
| detail_objectTrueType_d | real |  |
| detail_objectType_s | string |  |
| detail_objectUser_s | string |  |
| detail_objectUserDomain_s | string |  |
| detail_osName_s | string |  |
| detail_osType_s | string |  |
| detail_osVer_s | string |  |
| detail_parentCmd_s | string | Command line of the parent process. |
| detail_parentFileCreation_d | real |  |
| detail_parentFileHashSha1_s | string |  |
| detail_parentFileHashSha256_s | string |  |
| detail_parentFileModifiedTime_d | real |  |
| detail_parentFilePath_s | string |  |
| detail_parentFileSize_d | real |  |
| detail_parentLaunchTime_d | real |  |
| detail_parentName_s | string | Parent process name. |
| detail_parentSigner_s | string |  |
| detail_parentSignerValid_s | string |  |
| detail_parentTrueType_d | real |  |
| detail_parentUser_s | string |  |
| detail_parentUserDomain_s | string |  |
| detail_pAttackPhase_s | string | MITRE ATT&CK attack phase. |
| detail_pComp_s | string |  |
| detail_peerGroup_s | string |  |
| detail_peerHost_s | string |  |
| detail_peerIp_s | string |  |
| detail_plang_d | real |  |
| detail_pname_s | string |  |
| detail_processCmd_s | string | Command line of the triggering process. |
| detail_processFileCreation_d | real |  |
| detail_processFileHashSha1_s | string |  |
| detail_processFileHashSha256_s | string | SHA256 hash of the triggering process. |
| detail_processFileModifiedTime_d | real |  |
| detail_processFilePath_s | string |  |
| detail_processFileSize_d | real |  |
| detail_processLaunchTime_d | real |  |
| detail_processName_s | string | Name of the triggering process. |
| detail_processPid_d | real | PID of the triggering process. |
| detail_processSigner_s | string |  |
| detail_processSignerValid_s | string |  |
| detail_processTrueType_d | real |  |
| detail_processUser_s | string |  |
| detail_processUserDomain_s | string |  |
| detail_proto_s | string | Network protocol. |
| detail_remarks_s | string |  |
| detail_rt_t | datetime |  |
| detail_rtHour_d | real |  |
| detail_ruleId_d | real |  |
| detail_ruleName_s | string |  |
| detail_scanType_s | string |  |
| detail_secondAct_s | string |  |
| detail_secondActResult_s | string |  |
| detail_senderIp_s | string |  |
| detail_severity_d | real |  |
| detail_shost_s | string |  |
| detail_smac_s | string |  |
| detail_spt_d | real | Source port. |
| detail_src_s | string | Source IP address. |
| detail_srcFirstSeen_d | real |  |
| detail_srcGroup_s | string |  |
| detail_srcLastSeen_d | real |  |
| detail_srcZone_s | string |  |
| detail_tags_s | string |  |
| detail_threatType_s | string |  |
| detail_timezone_s | string |  |
| detail_userDomain_s | string |  |
| detail_uuid_g | string |  |
| detectionTime_t | datetime | Time the detection was made. |
| endpoint_guid_g | string | Endpoint agent GUID. |
| endpoint_ips_s | string | IP addresses of the endpoint. |
| endpoint_name_s | string | Endpoint host name. |
| entityName_s | string | Name of the entity involved. |
| entityType_s | string | Type of entity involved (e.g. endpoint). |
| filters_s | string | OAT filter details serialized as string. |
| RawData | string | Full detail object serialized as string for fallback parsing. |
| SourceSystem | string |  |
| TimeGenerated | datetime | The timestamp (UTC) when the detection occurred. |
| xdrCustomerId_g | string |  |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [TrendAI Vision One(CCF)](../solutions/trendai-vision-one-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [TrendAI Vision One™ - OAT Detections (via Codeless Connector Framework)](../connectors/trendaivisiononeoat.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [TrendAIOAT_Complete](../parsers/trendaioat-complete.md) | [TrendAI Vision One(CCF)](../solutions/trendai-vision-one-ccf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

