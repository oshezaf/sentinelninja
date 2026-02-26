# OCI_Logs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (257 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/OCI_Logs_CL.json)

| Column Name | Type |
|:------------|:-----|
| data_action_s | string |
| data_additionalDetails_description_s | string |
| data_additionalDetails_homeRegionKey_s | string |
| data_additionalDetails_id_s | string |
| data_additionalDetails_imageId_s | string |
| data_additionalDetails_isAccessable_b | bool |
| data_additionalDetails_isFreeTier_b | bool |
| data_additionalDetails_lifeCycleState_s | string |
| data_additionalDetails_namespace_s | string |
| data_additionalDetails_oracleMyServicesIdentifier_s | string |
| data_additionalDetails_shape_s | string |
| data_additionalDetails_type_s | string |
| data_additionalDetails_userId_s | string |
| data_additionalDetails_volumeId_s | string |
| data_additionalDetails_X_Real_Port_d | real |
| data_availabilityDomain_s | string |
| data_bytesOut_d | real |
| data_compartmentId_s | string |
| data_compartmentName_s | string |
| data_definedTags_Oracle_Tags_CreatedBy_s | string |
| data_definedTags_Oracle_Tags_CreatedOn_t | datetime |
| data_destinationAddress_s | string |
| data_destinationPort_d | real |
| data_endTime_d | real |
| data_eventGroupingId_g | string |
| data_eventGroupingId_s | string |
| data_eventName_s | string |
| data_flowid_s | string |
| data_freeformTags_VCN_s | string |
| data_identity_authType_s | string |
| data_identity_callerId_s | string |
| data_identity_callerName_s | string |
| data_identity_consoleSessionId_s | string |
| data_identity_credentials_s | string |
| data_identity_ipAddress_s | string |
| data_identity_principalId_s | string |
| data_identity_principalName_s | string |
| data_identity_tenantId_s | string |
| data_identity_userAgent_s | string |
| data_message_s | string |
| data_packets_d | real |
| data_protocol_d | real |
| data_protocolName_s | string |
| data_request_action_s | string |
| data_request_headers_Accept_Encoding_s | string |
| data_request_headers_Accept_Language_s | string |
| data_request_headers_Accept_s | string |
| data_request_headers_auth_info_s | string |
| data_request_headers_Authorization_s | string |
| data_request_headers_Cache_Control_s | string |
| data_request_headers_Connection_s | string |
| data_request_headers_Content_Length_s | string |
| data_request_headers_Content_Type_s | string |
| data_request_headers_Cookie_s | string |
| data_request_headers_Date_s | string |
| data_request_headers_If_None_Match_s | string |
| data_request_headers_oci_original_url_s | string |
| data_request_headers_oci_skip_authorization_for_splat_s | string |
| data_request_headers_oci_splat_audited_s | string |
| data_request_headers_oci_splat_generated_ocids_s | string |
| data_request_headers_oci_splat_internal_context_s | string |
| data_request_headers_opc_client_info_s | string |
| data_request_headers_opc_obo_token_s | string |
| data_request_headers_opc_principal_s | string |
| data_request_headers_opc_request_id_s | string |
| data_request_headers_opc_retry_token_s | string |
| data_request_headers_Origin_s | string |
| data_request_headers_Referer_s | string |
| data_request_headers_sec_ch_ua_mobile_s | string |
| data_request_headers_sec_ch_ua_s | string |
| data_request_headers_Sec_Fetch_Dest_s | string |
| data_request_headers_Sec_Fetch_Mode_s | string |
| data_request_headers_Sec_Fetch_Site_s | string |
| data_request_headers_Sec_Fetch_User_s | string |
| data_request_headers_Upgrade_Insecure_Requests_s | string |
| data_request_headers_User_Agent_s | string |
| data_request_headers_x_content_sha256_s | string |
| data_request_headers_x_date_s | string |
| data_request_headers_X_Forwarded_For_s | string |
| data_request_headers_X_Forwarded_Host_s | string |
| data_request_headers_X_Forwarded_Port_s | string |
| data_request_headers_X_Forwarded_Proto_s | string |
| data_request_headers_X_OCI_LB_NetworkMetadata_s | string |
| data_request_headers_X_OCI_LB_PrivateAccessMetadata_s | string |
| data_request_headers_X_Oracle_Auth_Client_CN_s | string |
| data_request_headers_X_Real_IP_s | string |
| data_request_headers_X_Real_Port_s | string |
| data_request_id_s | string |
| data_request_parameters_accessLevel_s | string |
| data_request_parameters_availabilityDomain_s | string |
| data_request_parameters_compartmentId_s | string |
| data_request_parameters_compartmentIdInSubtree_s | string |
| data_request_parameters_endTime_s | string |
| data_request_parameters_fields_s | string |
| data_request_parameters_granularity_s | string |
| data_request_parameters_id_s | string |
| data_request_parameters_imageId_s | string |
| data_request_parameters_includeSubcompartments_s | string |
| data_request_parameters_instanceId_s | string |
| data_request_parameters_isBanner_s | string |
| data_request_parameters_isMergeEnabled_s | string |
| data_request_parameters_lifecycleState_s | string |
| data_request_parameters_limit_s | string |
| data_request_parameters_name_s | string |
| data_request_parameters_operatingSystem_s | string |
| data_request_parameters_operatingSystemVersion_s | string |
| data_request_parameters_page_s | string |
| data_request_parameters_param0_s | string |
| data_request_parameters_protocol_s | string |
| data_request_parameters_serviceName_s | string |
| data_request_parameters_shape_s | string |
| data_request_parameters_sortBy_s | string |
| data_request_parameters_sortOrder_s | string |
| data_request_parameters_startTime_s | string |
| data_request_parameters_streamPoolId_s | string |
| data_request_parameters_subnetId_s | string |
| data_request_parameters_tenancy_s | string |
| data_request_parameters_userId_s | string |
| data_request_parameters_vcnId_s | string |
| data_request_path_s | string |
| data_resourceId_s | string |
| data_response_headers_Access_Control_Allow_Credentials_s | string |
| data_response_headers_access_control_allow_methods_s | string |
| data_response_headers_Access_Control_Allow_Origin_s | string |
| data_response_headers_Access_Control_Expose_Headers_s | string |
| data_response_headers_Cache_Control_s | string |
| data_response_headers_Connection_s | string |
| data_response_headers_Content_Encoding_s | string |
| data_response_headers_Content_Length_s | string |
| data_response_headers_Content_Security_Policy_s | string |
| data_response_headers_Content_Type_s | string |
| data_response_headers_Date_s | string |
| data_response_headers_Etag_s | string |
| data_response_headers_Location_s | string |
| data_response_headers_oci_splat_authorization_verify_content_s | string |
| data_response_headers_opc_limit_s | string |
| data_response_headers_opc_next_page_s | string |
| data_response_headers_opc_prev_page_s | string |
| data_response_headers_opc_previous_page_s | string |
| data_response_headers_Opc_Request_Id_s | string |
| data_response_headers_opc_work_request_id_s | string |
| data_response_headers_Pragma_s | string |
| data_response_headers_Strict_Transport_Security_s | string |
| data_response_headers_Timing_Allow_Origin_s | string |
| data_response_headers_Transfer_Encoding_s | string |
| data_response_headers_Vary_s | string |
| data_response_headers_x_api_id_s | string |
| data_response_headers_X_Content_Type_Options_s | string |
| data_response_headers_X_Frame_Options_s | string |
| data_response_headers_X_Xss_Protection_s | string |
| data_response_payload_id_s | string |
| data_response_payload_resourceName_s | string |
| data_response_responseTime_t | datetime |
| data_response_status_s | string |
| data_sourceAddress_s | string |
| data_sourcePort_d | real |
| data_startTime_d | real |
| data_stateChange_current_agentConfig_areAllPluginsDisabled_b | bool |
| data_stateChange_current_agentConfig_isManagementDisabled_b | bool |
| data_stateChange_current_agentConfig_isMonitoringDisabled_b | bool |
| data_stateChange_current_agentConfig_pluginsConfig_s | string |
| data_stateChange_current_availabilityConfig_recoveryAction_s | string |
| data_stateChange_current_availabilityDomain_s | string |
| data_stateChange_current_compartmentId_s | string |
| data_stateChange_current_configuration_s | string |
| data_stateChange_current_definedTags_Oracle_Tags_s | string |
| data_stateChange_current_definedTags_s | string |
| data_stateChange_current_displayName_s | string |
| data_stateChange_current_faultDomain_s | string |
| data_stateChange_current_fingerprint_s | string |
| data_stateChange_current_freeformTags_s | string |
| data_stateChange_current_id_s | string |
| data_stateChange_current_imageId_s | string |
| data_stateChange_current_Instance_agentConfig_s | string |
| data_stateChange_current_Instance_availabilityConfig_s | string |
| data_stateChange_current_Instance_availabilityDomain_s | string |
| data_stateChange_current_Instance_compartmentId_s | string |
| data_stateChange_current_Instance_definedTags_s | string |
| data_stateChange_current_Instance_displayName_s | string |
| data_stateChange_current_Instance_extendedMetadata_s | string |
| data_stateChange_current_Instance_faultDomain_s | string |
| data_stateChange_current_Instance_freeformTags_s | string |
| data_stateChange_current_Instance_id_s | string |
| data_stateChange_current_Instance_imageId_s | string |
| data_stateChange_current_Instance_instanceOptions_s | string |
| data_stateChange_current_Instance_launchMode_s | string |
| data_stateChange_current_Instance_launchOptions_s | string |
| data_stateChange_current_Instance_lifecycleState_s | string |
| data_stateChange_current_Instance_metadata_s | string |
| data_stateChange_current_Instance_region_s | string |
| data_stateChange_current_Instance_shape_s | string |
| data_stateChange_current_Instance_shapeConfig_s | string |
| data_stateChange_current_Instance_sourceDetails_s | string |
| data_stateChange_current_Instance_systemTags_s | string |
| data_stateChange_current_Instance_timeCreated_t | datetime |
| data_stateChange_current_instanceId_s | string |
| data_stateChange_current_instanceOptions_areLegacyImdsEndpointsDisabled_b | bool |
| data_stateChange_current_isEnabled_s | string |
| data_stateChange_current_keyId_s | string |
| data_stateChange_current_keyValue_s | string |
| data_stateChange_current_launchMode_s | string |
| data_stateChange_current_launchOptions_bootVolumeType_s | string |
| data_stateChange_current_launchOptions_firmware_s | string |
| data_stateChange_current_launchOptions_isConsistentVolumeNamingEnabled_b | bool |
| data_stateChange_current_launchOptions_isPvEncryptionInTransitEnabled_b | bool |
| data_stateChange_current_launchOptions_networkType_s | string |
| data_stateChange_current_launchOptions_remoteDataVolumeType_s | string |
| data_stateChange_current_lifecycleDetails_s | string |
| data_stateChange_current_lifecycleState_s | string |
| data_stateChange_current_lifecyleDetails_s | string |
| data_stateChange_current_LoadBalancers_s | string |
| data_stateChange_current_logGroupId_s | string |
| data_stateChange_current_logType_s | string |
| data_stateChange_current_metadata_ssh_authorized_keys_s | string |
| data_stateChange_current_region_s | string |
| data_stateChange_current_retentionDuration_s | string |
| data_stateChange_current_shape_s | string |
| data_stateChange_current_shapeConfig_gpus_d | real |
| data_stateChange_current_shapeConfig_localDisks_d | real |
| data_stateChange_current_shapeConfig_maxVnicAttachments_d | real |
| data_stateChange_current_shapeConfig_memoryInGBs_d | real |
| data_stateChange_current_shapeConfig_networkingBandwidthInGbps_d | real |
| data_stateChange_current_shapeConfig_ocpus_d | real |
| data_stateChange_current_shapeConfig_processorDescription_s | string |
| data_stateChange_current_sourceDetails_imageId_s | string |
| data_stateChange_current_sourceDetails_sourceType_s | string |
| data_stateChange_current_subnetIds_s | string |
| data_stateChange_current_syslogUrl_s | string |
| data_stateChange_current_systemTags_orcl_cloud_s | string |
| data_stateChange_current_tenancyId_s | string |
| data_stateChange_current_timeCreated_s | string |
| data_stateChange_current_timeCreated_t | datetime |
| data_stateChange_current_timeLastModified_s | string |
| data_stateChange_current_timeUpdated_t | datetime |
| data_stateChange_current_traceConfig_domainId_s | string |
| data_stateChange_current_traceConfig_isEnabled_b | bool |
| data_stateChange_current_userDisplayName_s | string |
| data_stateChange_current_userId_s | string |
| data_stateChange_current_userName_s | string |
| data_status_s | string |
| data_version_s | string |
| dataschema_s | string |
| id_g | string |
| id_s | string |
| oracle_compartmentid_s | string |
| oracle_ingestedtime_t | datetime |
| oracle_loggroupid_s | string |
| oracle_logid_s | string |
| oracle_tenantid_s | string |
| oracle_vniccompartmentocid_s | string |
| oracle_vnicocid_s | string |
| oracle_vnicsubnetocid_s | string |
| source_s | string |
| specversion_s | string |
| time_t | datetime |
| TimeGenerated | datetime |
| type_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] Oracle Cloud Infrastructure](../connectors/oraclecloudinfrastructurelogsconnector.md) |  |

---

## Content Items Using This Table (21)

### Analytic Rules (10)

**In solution [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [OCI - Discovery activity](../content/oracle-cloud-infrastructure-oci-discovery-activity-61f995d7-8038-4ff0-ad2b-eccfd18fcc8c-3b103bbb.md) |  |
| [OCI - Event rule deleted](../content/oracle-cloud-infrastructure-oci-event-rule-deleted-31b15699-0b55-4246-851e-93f9cefb6f5c-52b327bf.md) |  |
| [OCI - Inbound SSH connection](../content/oracle-cloud-infrastructure-oci-inbound-ssh-connection-eb6e07a1-2895-4c55-9c27-ac84294f0e46-b168a5f8.md) |  |
| [OCI - Insecure metadata endpoint](../content/oracle-cloud-infrastructure-oci-insecure-metadata-endpoint-9c4b1b9c-6462-41ce-8f2e-ce8c104331fc-b22ffd8a.md) |  |
| [OCI - Instance metadata access](../content/oracle-cloud-infrastructure-oci-instance-metadata-access-a55b4bbe-a014-4ae9-a50d-441ba5e98b65-9c40229f.md) |  |
| [OCI - Multiple instances launched](../content/oracle-cloud-infrastructure-oci-multiple-instances-launched-a79cf2b9-a511-4282-ba5d-812e14b07831-c81054f3.md) |  |
| [OCI - Multiple instances terminated](../content/oracle-cloud-infrastructure-oci-multiple-instances-terminated-252e651d-d825-480c-bdeb-8b239354577d-58dfd5da.md) |  |
| [OCI - Multiple rejects on rare ports](../content/oracle-cloud-infrastructure-oci-multiple-rejects-on-rare-ports-482c24b9-a700-4b2a-85d3-1c42110ba78c-1acf665f.md) |  |
| [OCI - SSH scanner](../content/oracle-cloud-infrastructure-oci-ssh-scanner-e087d4fb-af0b-4e08-a067-b9ba9e5f8840-a4b0a62f.md) |  |
| [OCI - Unexpected user agent](../content/oracle-cloud-infrastructure-oci-unexpected-user-agent-a0b9a7ca-3e6d-4996-ae35-759df1d67a54-ec9d7de9.md) |  |

### Hunting Queries (10)

**In solution [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [OCI - Delete operations](../content/oracle-cloud-infrastructure-oci-delete-operations-eed33749-85c4-47cc-9776-12eeb3172888-62fef1b2.md) |  |
| [OCI - Deleted users](../content/oracle-cloud-infrastructure-oci-deleted-users-4f7c20dc-702c-491d-908e-3b5f8bdc73ab-9424b8e4.md) |  |
| [OCI - Destination ports (inbound traffic)](../content/oracle-cloud-infrastructure-oci-destination-ports-inbound-traffic-3bdfa923-3fc8-4651-8954-dab2bef2bdd1-7abbc360.md) |  |
| [OCI - Destination ports (outbound traffic)](../content/oracle-cloud-infrastructure-oci-destination-ports-outbound-traffic-fff09b57-24ff-4e47-8a29-6292b0310e19-a5e0c310.md) |  |
| [OCI - Launched instances](../content/oracle-cloud-infrastructure-oci-launched-instances-3df69415-2dec-4457-9433-97a3c15a4b70-2f0f2a81.md) |  |
| [OCI - New users](../content/oracle-cloud-infrastructure-oci-new-users-c411dc09-a8ca-44f9-a594-242b5e90ada8-53c9f4f0.md) |  |
| [OCI - Terminated instances](../content/oracle-cloud-infrastructure-oci-terminated-instances-51101a78-a802-4a83-ac02-ef31416ffbc7-09371e34.md) |  |
| [OCI - Update activities](../content/oracle-cloud-infrastructure-oci-update-activities-e4353276-19a5-4833-a271-be507170269e-51a407a0.md) |  |
| [OCI - Updated instances](../content/oracle-cloud-infrastructure-oci-updated-instances-7b17d83a-7a88-4867-accf-494736bcec50-72bc8aa3.md) |  |
| [OCI - User source IP addresses](../content/oracle-cloud-infrastructure-oci-user-source-ip-addresses-01dc84d2-ef1d-4df6-9499-e1c4a305f01f-d4d386ac.md) |  |

### Workbooks (1)

**In solution [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [OracleCloudInfrastructureOCI](../content/oracle-cloud-infrastructure-oraclecloudinfrastructureoci-601b3646.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [OCILogs](../parsers/ocilogs.md) | [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

