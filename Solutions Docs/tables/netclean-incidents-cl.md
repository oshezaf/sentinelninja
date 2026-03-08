# Netclean_Incidents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (65 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Netclean_Incidents_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| key_identifier_g | string |
| key_type_s | string |
| ManagementGroupName | string |
| MG | guid |
| RawData | string |
| schemaVersion_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| value_agent_type_s | string |
| value_agent_version_s | string |
| value_detectionHashType_s | string |
| value_device_accessingProcesses_s | string |
| value_device_identifier_d | string |
| value_device_loggedOnUsers_s | string |
| value_device_machineName_s | string |
| value_device_microsoftCultureId_d | string |
| value_device_microsoftGeoId_d | string |
| value_device_networkInterfaces_s | string |
| value_device_operatingSystem_s | string |
| value_device_operatingSystemVersion_s | string |
| value_device_timeZoneName_s | string |
| value_file_calculatedHashes_pdna_s | string |
| value_file_calculatedHashes_sha1_s | string |
| value_file_createdBy_graphIdentity_application_s | string |
| value_file_createdBy_graphIdentity_user_s | string |
| value_file_creationTime_t | datetime |
| value_file_diskDrive_diskModelNumber_s | string |
| value_file_diskDrive_diskSerialNumber_s | string |
| value_file_diskDrive_diskType_s | string |
| value_file_diskDrive_mountPoint_s | string |
| value_file_diskDrive_volumeSerialNumber_s | string |
| value_file_lastAccessTime_t | datetime |
| value_file_lastModifiedBy_graphIdentity_application_s | string |
| value_file_lastModifiedBy_graphIdentity_user_s | string |
| value_file_lastModifiedTime_t | datetime |
| value_file_microsoft365_id_s | string |
| value_file_microsoft365_library_displayName_s | string |
| value_file_microsoft365_library_id_s | string |
| value_file_microsoft365_library_type_s | string |
| value_file_microsoft365_mimeType_s | string |
| value_file_microsoft365_name_s | string |
| value_file_microsoft365_parent_id_s | string |
| value_file_microsoft365_parent_name_s | string |
| value_file_microsoft365_parent_path_s | string |
| value_file_microsoft365_site_displayName_s | string |
| value_file_microsoft365_site_id_s | string |
| value_file_microsoft365_site_name_s | string |
| value_file_microsoft365_webUrl_s | string |
| value_file_nearbyFiles_s | array |
| value_file_owner_computerUser_domain_s | string |
| value_file_owner_computerUser_username_s | string |
| value_file_path_s | string |
| value_file_signature_hashes_md5_s | string |
| value_file_signature_hashes_pdna_s | string |
| value_file_signature_hashes_sha1_s | string |
| value_file_size_d | number |
| value_foundTime_t | string |
| value_identifier_g | string |
| value_incidentType_isDemo_b | bool |
| value_incidentType_source_s | string |
| value_incidentVersion_d | number |

## Solutions (1)

This table is used by the following solutions:

- [NetClean ProActive](../solutions/netclean-proactive.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netclean ProActive Incidents](../connectors/netclean-proactive-incidents.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [NetClean ProActive](../solutions/netclean-proactive.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NetClean ProActive Incidents](../content/netclean-proactive-netclean-proactive-incidents-77548170-5c60-42e5-bdac-b0360d0779bb-1b0b1d6f.md) |  |

### Workbooks (1)

**In solution [NetClean ProActive](../solutions/netclean-proactive.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NetCleanProActiveWorkbook](../content/netclean-proactive-netcleanproactiveworkbook-47938b1a.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

