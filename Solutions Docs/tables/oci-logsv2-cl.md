# OCI_LogsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

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
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (86 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Oracle%20Cloud%20Infrastructure%5CData%20Connectors%5COracle_Cloud_Infrastructure_CCP/OCI_DataConnector_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| data_action_s | string | Data action s |
| data_additionalDetails_imageId_s | string | Data additionaldetails imageid s |
| data_additionalDetails_shape_s | string | Data additionaldetails shape s |
| data_additionalDetails_userId_s | string | Data additionaldetails userid s |
| data_additionalDetails_volumeId_s | string | Data additionaldetails volumeid s |
| data_availabilityDomain_s | string | Data availabilitydomain s |
| data_compartmentId_s | string | Data compartmentid s |
| data_compartmentName_s | string | Data compartmentname s |
| data_definedTags_Oracle_Tags_CreatedBy_s | string | Data definedtags oracle tags createdby s |
| data_definedTags_Oracle_Tags_CreatedOn_t | datetime | Data definedtags oracle tags createdon t |
| data_endTime_d | int | Data endtime d |
| data_eventGroupingId_s | string | Data eventgroupingid s |
| data_eventName_s | string | Data eventname s |
| data_flowid_s | string | Data flowid s |
| data_identity_authType_s | string | Data identity authtype s |
| data_identity_callerId_s | string | Data identity callerid s |
| data_identity_callerName_s | string | Data identity callername s |
| data_identity_consoleSessionId_s | string | Data identity consolesessionid s |
| data_identity_credentials_s | string | Data identity credentials s |
| data_identity_principalId_s | string | Data identity principalid s |
| data_identity_principalName_s | string | Data identity principalname s |
| data_identity_tenantId_s | string | Data identity tenantid s |
| data_packets_d | int | Data packets d |
| data_request_headers_oci_original_url_s | string | Data request headers oci original url s |
| data_request_headers_X_Forwarded_For_s | string | Data request headers x forwarded for s |
| data_request_headers_X_Real_IP_s | string | Data request headers x real ip s |
| data_request_id_s | string | Data request id s |
| data_request_parameters_compartmentId_s | string | Data request parameters compartmentid s |
| data_request_parameters_id_s | string | Data request parameters id s |
| data_request_parameters_imageId_s | string | Data request parameters imageid s |
| data_request_parameters_instanceId_s | string | Data request parameters instanceid s |
| data_request_parameters_lifecycleState_s | string | Data request parameters lifecyclestate s |
| data_request_parameters_name_s | string | Data request parameters name s |
| data_request_parameters_serviceName_s | string | Data request parameters servicename s |
| data_request_parameters_subnetId_s | string | Data request parameters subnetid s |
| data_request_parameters_userId_s | string | Data request parameters userid s |
| data_request_parameters_vcnId_s | string | Data request parameters vcnid s |
| data_request_path_s | string | Data request path s |
| data_resourceId_s | string | Data resourceid s |
| data_response_payload_id_s | string | Data response payload id s |
| data_response_payload_resourceName_s | string | Data response payload resourcename s |
| data_startTime_d | int | Data starttime d |
| data_stateChange_current_compartmentId_s | string | Data statechange current compartmentid s |
| data_stateChange_current_displayName_s | string | Data statechange current displayname s |
| data_stateChange_current_fingerprint_s | string | Data statechange current fingerprint s |
| data_stateChange_current_id_s | string | Data statechange current id s |
| data_stateChange_current_Instance_availabilityDomain_s | string | Data statechange current instance availabilitydomain s |
| data_stateChange_current_Instance_compartmentId_s | string | Data statechange current instance compartmentid s |
| data_stateChange_current_Instance_displayName_s | string | Data statechange current instance displayname s |
| data_stateChange_current_instanceId_s | string | Data statechange current instanceid s |
| data_stateChange_current_isEnabled_b | bool | Data statechange current isenabled b |
| data_stateChange_current_keyId_s | string | Data statechange current keyid s |
| data_stateChange_current_lifecycleState_s | string | Data statechange current lifecyclestate s |
| data_stateChange_current_logGroupId_s | string | Data statechange current loggroupid s |
| data_stateChange_current_logType_s | string | Data statechange current logtype s |
| data_stateChange_current_retentionDuration_d | real | Data statechange current retentionduration d |
| data_stateChange_current_timeCreated_t | datetime | Data statechange current timecreated t |
| data_stateChange_current_timeUpdated_t | datetime | Data statechange current timeupdated t |
| data_stateChange_current_userDisplayName_s | string | Data statechange current userdisplayname s |
| data_stateChange_current_userId_s | string | Data statechange current userid s |
| data_stateChange_current_userName_s | string | Data statechange current username s |
| data_status_s | string | Data status s |
| DstBytes | int | Dstbytes |
| DstIpAddr | string | Dstipaddr |
| DstPortNumber | int | Dstportnumber |
| EventMessage | string | Eventmessage |
| EventProduct | string | Eventproduct |
| EventType | string | Eventtype |
| EventVendor | string | Eventvendor |
| HttpRequestMethod | string | Httprequestmethod |
| HttpStatusCode | string | Httpstatuscode |
| HttpUserAgentOriginal | string | Httpuseragentoriginal |
| id | string | Id |
| NetworkProtocol | string | Networkprotocol |
| oracle_compartmentid_s | string | Oracle compartmentid s |
| oracle_loggroupid_s | string | Oracle loggroupid s |
| oracle_logid_s | string | Oracle logid s |
| oracle_tenantid_s | string | Oracle tenantid s |
| oracle_vniccompartmentocid_s | string | Oracle vniccompartmentocid s |
| oracle_vnicocid_s | string | Oracle vnicocid s |
| oracle_vnicsubnetocid_s | string | Oracle vnicsubnetocid s |
| source_s | string | Source s |
| SrcIpAddr | string | Srcipaddr |
| SrcPortNumber | int | Srcportnumber |
| StreamName | string | Streamname |
| TimeGenerated | datetime | The time when the log entry was generated |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

