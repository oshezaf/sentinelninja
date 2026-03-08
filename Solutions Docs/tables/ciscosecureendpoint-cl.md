# CiscoSecureEndpoint_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (86 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CiscoSecureEndpoint_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| _SubscriptionId | string |
| audit_log_id_g | string |
| audit_log_id_s | string |
| audit_log_type_s | string |
| audit_log_user_s | string |
| bp_data_package_manager_pending_version_d | real |
| bp_data_package_manager_serial_number_d | real |
| bp_data_sts_d | real |
| cloud_ioc_description_s | string |
| cloud_ioc_short_description_s | string |
| command_line_arguments_s | string |
| Computer | string |
| computer_active_b | bool |
| computer_connector_guid_g | string |
| computer_external_ip_s | string |
| computer_hostname_s | string |
| computer_links_computer_s | string |
| computer_links_group_s | string |
| computer_links_trajectory_s | string |
| computer_network_addresses_s | string |
| computer_user_s | string |
| connector_guid_g | string |
| created_at_t | datetime |
| date_t | datetime |
| detection_id_s | string |
| detection_s | string |
| error_description_s | string |
| error_error_code_d | real |
| event_s | string |
| event_type_id_d | real |
| event_type_s | string |
| file_attack_details_application_s | string |
| file_attack_details_attacked_module_s | string |
| file_attack_details_base_address_s | string |
| file_attack_details_suspicious_files_s | string |
| file_disposition_s | string |
| file_file_name_s | string |
| file_file_path_s | string |
| file_identity_md5_g | string |
| file_identity_sha1_s | string |
| file_identity_sha256_s | string |
| file_parent_disposition_s | string |
| file_parent_file_name_s | string |
| file_parent_identity_md5_g | string |
| file_parent_identity_sha1_s | string |
| file_parent_identity_sha256_s | string |
| file_parent_process_id_d | real |
| file_parent_process_id_s | string |
| group_guids_s | string |
| hostname_s | string |
| id_d | real |
| new_attributes_connector_guid_g | string |
| new_attributes_group_id_d | real |
| new_attributes_hostname_s | string |
| new_attributes_ip_external_s | string |
| new_attributes_name_s | string |
| new_attributes_operating_system_id_d | real |
| new_attributes_policy_id_d | real |
| new_attributes_product_version_id_d | real |
| new_attributes_status_s | string |
| old_attributes_hostname_s | string |
| old_attributes_ip_external_s | string |
| old_attributes_name_s | string |
| old_attributes_operating_system_id_d | real |
| old_attributes_product_version_id_d | real |
| old_attributes_status_s | string |
| orbital_old_version_s | string |
| orbital_version_s | string |
| RawData | string |
| scan_clean_b | bool |
| scan_description_s | string |
| scan_malicious_detections_d | real |
| scan_scanned_files_d | real |
| scan_scanned_paths_d | real |
| scan_scanned_processes_d | real |
| severity_s | string |
| start_date_t | datetime |
| start_timestamp_d | real |
| tactics_s | string |
| techniques_s | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| timestamp_nanoseconds_d | real |
| Type | string |
| vulnerabilities_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] Cisco Secure Endpoint (AMP)](../connectors/ciscosecureendpoint.md) |  |

---

## Content Items Using This Table (22)

### Analytic Rules (11)

**In solution [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cisco SE - Connection to known C2 server](../content/cisco-secure-endpoint-cisco-se-connection-to-known-c2-server-0f788a93-dc88-4f80-89ef-bef7cd0fef05-8712dcc0.md) |  |
| [Cisco SE - Dropper activity on host](../content/cisco-secure-endpoint-cisco-se-dropper-activity-on-host-b6df3e11-de70-4779-ac9a-276c454a9025-05cf295f.md) |  |
| [Cisco SE - Generic IOC](../content/cisco-secure-endpoint-cisco-se-generic-ioc-bccdbc39-31d3-4e2b-9df2-e4c9eecba825-72d32591.md) |  |
| [Cisco SE - Malware execusion on host](../content/cisco-secure-endpoint-cisco-se-malware-execusion-on-host-aea4468e-6322-48b6-bd83-f9d300cce855-2d57c940.md) |  |
| [Cisco SE - Malware outbreak](../content/cisco-secure-endpoint-cisco-se-malware-outbreak-225053c7-085b-4fca-a18f-c367f9228bf3-5df4ca01.md) |  |
| [Cisco SE - Multiple malware on host](../content/cisco-secure-endpoint-cisco-se-multiple-malware-on-host-b13489d7-feb1-4ad3-9a4c-09f6d64448fd-13e2b837.md) |  |
| [Cisco SE - Policy update failure](../content/cisco-secure-endpoint-cisco-se-policy-update-failure-64fece0a-44db-4bab-844d-fd503dc0aaba-8be03ddc.md) |  |
| [Cisco SE - Possible webshell](../content/cisco-secure-endpoint-cisco-se-possible-webshell-d2c97cc9-1ccc-494d-bad4-564700451a2b-13941844.md) |  |
| [Cisco SE - Ransomware Activity](../content/cisco-secure-endpoint-cisco-se-ransomware-activity-c9629114-0f49-4b50-9f1b-345287b2eebf-74a95a48.md) |  |
| [Cisco SE - Unexpected binary file](../content/cisco-secure-endpoint-cisco-se-unexpected-binary-file-eabb9c20-7b0b-4a77-81e8-b06944f351c6-e45f58b7.md) |  |
| [Cisco SE High Events Last Hour](../content/cisco-secure-endpoint-cisco-se-high-events-last-hour-4683ebce-07ad-4089-89e3-39d8fe83c011-74a85d28.md) |  |

### Hunting Queries (10)

**In solution [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cisco SE - Infected hosts](../content/cisco-secure-endpoint-cisco-se-infected-hosts-2b2415f3-6bfd-48df-8f9f-a1ccf67449f5-ba154dcb.md) |  |
| [Cisco SE - Infected users](../content/cisco-secure-endpoint-cisco-se-infected-users-f597ff7a-bddc-4cb1-83a8-62b0d7f4740d-d3b9b36b.md) |  |
| [Cisco SE - Malicious files](../content/cisco-secure-endpoint-cisco-se-malicious-files-d074fc1b-e276-48c8-9ef4-d691652a6625-97813a5f.md) |  |
| [Cisco SE - Modified agents on hosts](../content/cisco-secure-endpoint-cisco-se-modified-agents-on-hosts-0c478995-c9c0-44ad-b3e9-428d54851b0c-fd7de8b7.md) |  |
| [Cisco SE - Rare scanned files](../content/cisco-secure-endpoint-cisco-se-rare-scanned-files-fd6f8d2b-416d-4ee6-8289-961022205d7e-15e58b08.md) |  |
| [Cisco SE - Scanned files](../content/cisco-secure-endpoint-cisco-se-scanned-files-1eae0963-16be-4d49-9491-6fc54f8254fd-5b24f87d.md) |  |
| [Cisco SE - Suspicious powershel downloads](../content/cisco-secure-endpoint-cisco-se-suspicious-powershel-downloads-31c92a55-375a-4199-8407-d2863476d85d-49c0efd2.md) |  |
| [Cisco SE - Uncommon application behavior](../content/cisco-secure-endpoint-cisco-se-uncommon-application-behavior-dc87c967-61d2-48e9-9fe1-26920944ca57-c6dc4e1b.md) |  |
| [Cisco SE - User Logins](../content/cisco-secure-endpoint-cisco-se-user-logins-987681e4-3f0f-484c-95c1-88044b07759b-adf8f4cf.md) |  |
| [Cisco SE - Vulnerable applications](../content/cisco-secure-endpoint-cisco-se-vulnerable-applications-3d3330e9-d11b-4b68-8861-251253950bd2-b925e376.md) |  |

### Workbooks (1)

**In solution [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cisco Secure Endpoint Overview](../content/cisco-secure-endpoint-cisco-secure-endpoint-overview-653ce4d3.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CiscoSecureEndpoint](../parsers/ciscosecureendpoint.md) | [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

