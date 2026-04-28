# OCI_LogsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (212 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Oracle%20Cloud%20Infrastructure%5CData%20Connectors%5COracle_Cloud_Infrastructure_CCP/OCI_DataConnector_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| data | dynamic | Data |
| data_action_s | string | Data action s |
| data_additionalDetails_description_s | string | Data additional details description s |
| data_additionalDetails_homeRegionKey_s | string | Data additional details home region key s |
| data_additionalDetails_id_s | string | Data additional details id s |
| data_additionalDetails_imageId_s | string | Data additional details image id s |
| data_additionalDetails_isAccessable_b | bool | Data additional details is accessable b |
| data_additionalDetails_isFreeTier_b | bool | Data additional details is free tier b |
| data_additionalDetails_lifeCycleState_s | string | Data additional details life cycle state s |
| data_additionalDetails_namespace_s | string | Data additional details namespace s |
| data_additionalDetails_oracleMyServicesIdentifier_s | string | Data additional details oracle my services identifier s |
| data_additionalDetails_shape_s | string | Data additional details shape s |
| data_additionalDetails_type_s | string | Data additional details type s |
| data_additionalDetails_userId_s | string | Data additional details user id s |
| data_additionalDetails_volumeId_s | string | Data additional details volume id s |
| data_additionalDetails_X_Real_Port_s | string | Data additional details x real port s |
| data_availabilityDomain_s | string | Data availability domain s |
| data_bytesOut_d | int | Data bytes out d |
| data_compartmentId_s | string | Data compartment id s |
| data_compartmentName_s | string | Data compartment name s |
| data_definedTags_Oracle_Tags_CreatedBy_s | string | Data defined tags oracle tags created by s |
| data_definedTags_Oracle_Tags_CreatedOn_t | datetime | Data defined tags oracle tags created on t |
| data_destinationAddress_s | string | Data destination address s |
| data_destinationPort_d | int | Data destination port d |
| data_endTime_d | int | Data end time d |
| data_eventGroupingId_s | string | Data event grouping id s |
| data_eventName_s | string | Data event name s |
| data_flowid_s | string | Data flowid s |
| data_freeformTags_VCN_s | string | Data freeform tags vcn s |
| data_identity_authType_s | string | Data identity auth type s |
| data_identity_callerId_s | string | Data identity caller id s |
| data_identity_callerName_s | string | Data identity caller name s |
| data_identity_consoleSessionId_s | string | Data identity console session id s |
| data_identity_credentials_s | string | Data identity credentials s |
| data_identity_ipAddress_s | string | Data identity ip address s |
| data_identity_principalId_s | string | Data identity principal id s |
| data_identity_principalName_s | string | Data identity principal name s |
| data_identity_tenantId_s | string | Data identity tenant id s |
| data_packets_d | int | Data packets d |
| data_protocol_d | int | Data protocol d |
| data_protocolName_s | string | Data protocol name s |
| data_request_headers_Accept_Encoding_s | string | Data request headers accept encoding s |
| data_request_headers_Accept_Language_s | string | Data request headers accept language s |
| data_request_headers_Accept_s | string | Data request headers accept s |
| data_request_headers_auth_info_s | string | Data request headers auth info s |
| data_request_headers_authorization_s | string | Data request headers authorization s |
| data_request_headers_Cache_Control_s | string | Data request headers cache control s |
| data_request_headers_Connection_s | string | Data request headers connection s |
| data_request_headers_Content_Length_d | real | Data request headers content length d |
| data_request_headers_Content_Type_s | string | Data request headers content type s |
| data_request_headers_Cookie_s | string | Data request headers cookie s |
| data_request_headers_Date_t | datetime | Data request headers date t |
| data_request_headers_If_None_Match_s | string | Data request headers if none match s |
| data_request_headers_oci_original_url_s | string | Data request headers oci original url s |
| data_request_headers_oci_skip_authorization_for_splat_s | string | Data request headers oci skip authorization for splat s |
| data_request_headers_oci_splat_audited_s | string | Data request headers oci splat audited s |
| data_request_headers_oci_splat_generated_ocids_s | string | Data request headers oci splat generated ocids s |
| data_request_headers_oci_splat_internal_context_s | string | Data request headers oci splat internal context s |
| data_request_headers_opc_client_info_s | string | Data request headers opc client info s |
| data_request_headers_opc_obo_token_s | string | Data request headers opc obo token s |
| data_request_headers_opc_principal_s | string | Data request headers opc principal s |
| data_request_headers_opc_request_id_s | string | Data request headers opc request id s |
| data_request_headers_opc_retry_token_s | string | Data request headers opc retry token s |
| data_request_headers_Origin_s | string | Data request headers origin s |
| data_request_headers_Referer_s | string | Data request headers referer s |
| data_request_headers_User_Agent_s | string | Data request headers user agent s |
| data_request_headers_x_content_sha256_s | string | Data request headers x content sha256 s |
| data_request_headers_x_date_t | datetime | Data request headers x date t |
| data_request_headers_X_Forwarded_For_s | string | Data request headers x forwarded for s |
| data_request_headers_X_Forwarded_Host_s | string | Data request headers x forwarded host s |
| data_request_headers_X_Forwarded_Port_s | string | Data request headers x forwarded port s |
| data_request_headers_X_Forwarded_Proto_s | string | Data request headers x forwarded proto s |
| data_request_headers_X_OCI_LB_NetworkMetadata_s | string | Data request headers x oci lb network metadata s |
| data_request_headers_X_OCI_LB_PrivateAccessMetadata_s | string | Data request headers x oci lb private access metadata s |
| data_request_headers_X_Oracle_Auth_Client_CN_s | string | Data request headers x oracle auth client cn s |
| data_request_headers_X_Real_IP_s | string | Data request headers x real ip s |
| data_request_headers_X_Real_Port_s | string | Data request headers x real port s |
| data_request_id_s | string | Data request id s |
| data_request_parameters_accessLevel_s | string | Data request parameters access level s |
| data_request_parameters_availabilityDomain_s | string | Data request parameters availability domain s |
| data_request_parameters_compartmentId_s | string | Data request parameters compartment id s |
| data_request_parameters_compartmentIdInSubtree_b | bool | Data request parameters compartment id in subtree b |
| data_request_parameters_endTime_t | datetime | Data request parameters end time t |
| data_request_parameters_fields_s | string | Data request parameters fields s |
| data_request_parameters_granularity_s | string | Data request parameters granularity s |
| data_request_parameters_id_s | string | Data request parameters id s |
| data_request_parameters_imageId_s | string | Data request parameters image id s |
| data_request_parameters_includeSubcompartments_b | bool | Data request parameters include subcompartments b |
| data_request_parameters_instanceId_s | string | Data request parameters instance id s |
| data_request_parameters_isBanner_b | bool | Data request parameters is banner b |
| data_request_parameters_isMergeEnabled_s | string | Data request parameters is merge enabled s |
| data_request_parameters_lifecycleState_s | string | Data request parameters lifecycle state s |
| data_request_parameters_limit_d | real | Data request parameters limit d |
| data_request_parameters_name_s | string | Data request parameters name s |
| data_request_parameters_operatingSystem_s | string | Data request parameters operating system s |
| data_request_parameters_operatingSystemVersion_s | string | Data request parameters operating system version s |
| data_request_parameters_page_s | string | Data request parameters page s |
| data_request_parameters_param0_s | string | Data request parameters param0 s |
| data_request_parameters_protocol_s | string | Data request parameters protocol s |
| data_request_parameters_serviceName_s | string | Data request parameters service name s |
| data_request_parameters_shape_s | string | Data request parameters shape s |
| data_request_parameters_sortBy_s | string | Data request parameters sort by s |
| data_request_parameters_sortOrder_s | string | Data request parameters sort order s |
| data_request_parameters_startTime_t | datetime | Data request parameters start time t |
| data_request_parameters_streamPoolId_s | string | Data request parameters stream pool id s |
| data_request_parameters_subnetId_s | string | Data request parameters subnet id s |
| data_request_parameters_tenancy_s | string | Data request parameters tenancy s |
| data_request_parameters_userId_s | string | Data request parameters user id s |
| data_request_parameters_vcnId_s | string | Data request parameters vcn id s |
| data_request_path_s | string | Data request path s |
| data_resourceId_s | string | Data resource id s |
| data_response_headers_Access_Control_Allow_Credentials_s | string | Data response headers access control allow credentials s |
| data_response_headers_access_control_allow_methods_s | string | Data response headers access control allow methods s |
| data_response_headers_Access_Control_Allow_Origin_s | string | Data response headers access control allow origin s |
| data_response_headers_Access_Control_Expose_Headers_s | string | Data response headers access control expose headers s |
| data_response_headers_Cache_Control_s | string | Data response headers cache control s |
| data_response_headers_Connection_s | string | Data response headers connection s |
| data_response_headers_Content_Encoding_s | string | Data response headers content encoding s |
| data_response_headers_Content_Length_d | real | Data response headers content length d |
| data_response_headers_Content_Security_Policy_s | string | Data response headers content security policy s |
| data_response_headers_Content_Type_s | string | Data response headers content type s |
| data_response_headers_Date_t | datetime | Data response headers date t |
| data_response_headers_Etag_s | string | Data response headers etag s |
| data_response_headers_Location_s | string | Data response headers location s |
| data_response_headers_opc_limit_d | real | Data response headers opc limit d |
| data_response_headers_opc_next_page_s | string | Data response headers opc next page s |
| data_response_headers_opc_prev_page_s | string | Data response headers opc prev page s |
| data_response_headers_opc_previous_page_s | string | Data response headers opc previous page s |
| data_response_headers_Opc_Request_Id_s | string | Data response headers opc request id s |
| data_response_headers_opc_work_request_id_s | string | Data response headers opc work request id s |
| data_response_headers_Pragma_s | string | Data response headers pragma s |
| data_response_headers_Strict_Transport_Security_s | string | Data response headers strict transport security s |
| data_response_headers_Timing_Allow_Origin_s | string | Data response headers timing allow origin s |
| data_response_headers_Transfer_Encoding_s | string | Data response headers transfer encoding s |
| data_response_headers_Vary_s | string | Data response headers vary s |
| data_response_headers_x_api_id_s | string | Data response headers x api id s |
| data_response_headers_X_Content_Type_Options_s | string | Data response headers x content type options s |
| data_response_headers_X_Frame_Options_s | string | Data response headers x frame options s |
| data_response_headers_X_Xss_Protection_s | string | Data response headers x xss protection s |
| data_response_payload_id_s | string | Data response payload id s |
| data_response_payload_resourceName_s | string | Data response payload resource name s |
| data_response_responseTime_d | real | Data response response time d |
| data_response_status_d | int | Data response status d |
| data_sourceAddress_s | string | Data source address s |
| data_sourcePort_d | int | Data source port d |
| data_startTime_d | int | Data start time d |
| data_stateChange_current_compartmentId_s | string | Data state change current compartment id s |
| data_stateChange_current_configuration_s | string | Data state change current configuration s |
| data_stateChange_current_definedTags_Oracle_Tags_s | string | Data state change current defined tags oracle tags s |
| data_stateChange_current_definedTags_s | string | Data state change current defined tags s |
| data_stateChange_current_displayName_s | string | Data state change current display name s |
| data_stateChange_current_fingerprint_s | string | Data state change current fingerprint s |
| data_stateChange_current_freeformTags_s | string | Data state change current freeform tags s |
| data_stateChange_current_id_s | string | Data state change current id s |
| data_stateChange_current_Instance_agentConfig_s | string | Data state change current instance agent config s |
| data_stateChange_current_Instance_availabilityConfig_s | string | Data state change current instance availability config s |
| data_stateChange_current_Instance_availabilityDomain_s | string | Data state change current instance availability domain s |
| data_stateChange_current_Instance_compartmentId_s | string | Data state change current instance compartment id s |
| data_stateChange_current_Instance_definedTags_s | string | Data state change current instance defined tags s |
| data_stateChange_current_Instance_displayName_s | string | Data state change current instance display name s |
| data_stateChange_current_instanceId_s | string | Data state change current instance id s |
| data_stateChange_current_isEnabled_b | bool | Data state change current is enabled b |
| data_stateChange_current_keyId_s | string | Data state change current key id s |
| data_stateChange_current_keyValue_s | string | Data state change current key value s |
| data_stateChange_current_lifecycleDetails_s | string | Data state change current lifecycle details s |
| data_stateChange_current_lifecycleState_s | string | Data state change current lifecycle state s |
| data_stateChange_current_LoadBalancers_s | string | Data state change current load balancers s |
| data_stateChange_current_logGroupId_s | string | Data state change current log group id s |
| data_stateChange_current_logType_s | string | Data state change current log type s |
| data_stateChange_current_retentionDuration_d | real | Data state change current retention duration d |
| data_stateChange_current_systemTags_orcl_cloud_s | string | Data state change current system tags orcl cloud s |
| data_stateChange_current_tenancyId_s | string | Data state change current tenancy id s |
| data_stateChange_current_timeCreated_t | datetime | Data state change current time created t |
| data_stateChange_current_timeLastModified_t | datetime | Data state change current time last modified t |
| data_stateChange_current_timeUpdated_t | datetime | Data state change current time updated t |
| data_stateChange_current_userDisplayName_s | string | Data state change current user display name s |
| data_stateChange_current_userId_s | string | Data state change current user id s |
| data_stateChange_current_userName_s | string | Data state change current user name s |
| data_status_s | string | Data status s |
| data_version_s | string | Data version s |
| dataschema_s | string | Dataschema s |
| DstBytes | int | Dst bytes |
| DstIpAddr | string | Dst ip addr |
| DstPortNumber | int | Dst port number |
| EventEndTime | datetime | Event end time |
| EventMessage | string | Event message |
| EventProduct | string | Event product |
| EventStartTime | datetime | Event start time |
| EventType | string | Event type |
| EventVendor | string | Event vendor |
| HttpRequestMethod | string | Http request method |
| HttpStatusCode | string | Http status code |
| HttpUserAgentOriginal | string | Http user agent original |
| id | string | Id |
| id_s | string | Id s |
| NetworkProtocol | string | Network protocol |
| oracle | dynamic | Oracle |
| oracle_compartmentid_s | string | Oracle compartmentid s |
| oracle_ingestedtime_t | datetime | Oracle ingestedtime t |
| oracle_loggroupid_s | string | Oracle loggroupid s |
| oracle_logid_s | string | Oracle logid s |
| oracle_tenantid_s | string | Oracle tenantid s |
| oracle_vniccompartmentocid_s | string | Oracle vniccompartmentocid s |
| oracle_vnicocid_s | string | Oracle vnicocid s |
| oracle_vnicsubnetocid_s | string | Oracle vnicsubnetocid s |
| source_s | string | Source s |
| specversion_s | string | Specversion s |
| SrcIpAddr | string | Src ip addr |
| SrcPortNumber | int | Src port number |
| StreamName | string | Stream name |
| time_t | datetime | Time t |
| TimeGenerated | datetime | The time when the log entry was generated |

## Solutions (1)

This table is used by the following solutions:

- [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Oracle Cloud Infrastructure (via CCP) – Preview](../connectors/oci-connector-ccp-definition.md) |  |
| [Oracle Cloud Infrastructure (via Codeless Connector Framework)](../connectors/oraclecloudinfraconnector.md) |  |

---

## Content Items Using This Table (21)

### Analytic Rules (10)

**In solution [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md):**

| Analytic Rule | Selection Criteria |
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

| Hunting Query | Selection Criteria |
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

| Workbook | Selection Criteria |
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

