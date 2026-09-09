# Corelight Connector Exporter

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Corelight/Data%20Connectors/Logo/corelight.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CorelightConnectorExporter` |
| **Publisher** | Corelight |
| **Used in Solutions** | [Corelight](../solutions/corelight.md) |
| **Collection Method** | [Unknown (Custom Log)](../methods/unknown-custom-log.md) |
| **Connector Definition Files** | [CorelightConnectorExporter.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Corelight/Data%20Connectors/CorelightExporter/CorelightConnectorExporter.json) |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#corelight-connector-exporter) |

The [Corelight](https://corelight.com/) data connector enables incident responders and threat hunters who use Microsoft Sentinel to work faster and more effectively. The data connector enables ingestion of events from [Zeek](https://zeek.org/) and [Suricata](https://suricata.io/) via Corelight Sensors into Microsoft Sentinel using the Azure Monitor Logs Ingestion API. Events are sent by the Corelight Sensor to a Data Collection Endpoint (DCE) and routed into dedicated `Corelight_v3_*_CL` tables by per-log-type Data Collection Rules (DCRs).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Corelight_v3_amqp_CL`](../tables/corelight-v3-amqp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_analyzer_CL`](../tables/corelight-v3-analyzer-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_anomaly_CL`](../tables/corelight-v3-anomaly-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_asset_classification_CL`](../tables/corelight-v3-asset-classification-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bacnet_CL`](../tables/corelight-v3-bacnet-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bacnet_device_control_CL`](../tables/corelight-v3-bacnet-device-control-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bacnet_discovery_CL`](../tables/corelight-v3-bacnet-discovery-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bacnet_property_CL`](../tables/corelight-v3-bacnet-property-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_broker_CL`](../tables/corelight-v3-broker-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bsap_ip_header_CL`](../tables/corelight-v3-bsap-ip-header-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bsap_ip_rdb_CL`](../tables/corelight-v3-bsap-ip-rdb-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bsap_ip_unknown_CL`](../tables/corelight-v3-bsap-ip-unknown-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bsap_serial_header_CL`](../tables/corelight-v3-bsap-serial-header-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bsap_serial_rdb_CL`](../tables/corelight-v3-bsap-serial-rdb-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bsap_serial_rdb_ext_CL`](../tables/corelight-v3-bsap-serial-rdb-ext-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_bsap_serial_unknown_CL`](../tables/corelight-v3-bsap-serial-unknown-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_capture_loss_CL`](../tables/corelight-v3-capture-loss-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_cip_CL`](../tables/corelight-v3-cip-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_cip_identity_CL`](../tables/corelight-v3-cip-identity-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_cip_io_CL`](../tables/corelight-v3-cip-io-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_cluster_CL`](../tables/corelight-v3-cluster-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_config_CL`](../tables/corelight-v3-config-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_conn_agg_CL`](../tables/corelight-v3-conn-agg-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_ad_admin_shares_CL`](../tables/corelight-v3-corelight-ad-admin-shares-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_ad_ew_servers_services_CL`](../tables/corelight-v3-corelight-ad-ew-servers-services-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_ad_exe_files_CL`](../tables/corelight-v3-corelight-ad-exe-files-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_ad_ftp_connections_CL`](../tables/corelight-v3-corelight-ad-ftp-connections-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_ad_http_user_agents_CL`](../tables/corelight-v3-corelight-ad-http-user-agents-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_ad_ns_servers_services_CL`](../tables/corelight-v3-corelight-ad-ns-servers-services-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_ad_ntlm_auth_CL`](../tables/corelight-v3-corelight-ad-ntlm-auth-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_ad_rdp_CL`](../tables/corelight-v3-corelight-ad-rdp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_ad_ssh_clients_CL`](../tables/corelight-v3-corelight-ad-ssh-clients-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_ad_ssh_connections_CL`](../tables/corelight-v3-corelight-ad-ssh-connections-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_burst_CL`](../tables/corelight-v3-corelight-burst-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_license_capacity_CL`](../tables/corelight-v3-corelight-license-capacity-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_metrics_disk_CL`](../tables/corelight-v3-corelight-metrics-disk-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_metrics_iface_CL`](../tables/corelight-v3-corelight-metrics-iface-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_metrics_memory_CL`](../tables/corelight-v3-corelight-metrics-memory-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_metrics_system_CL`](../tables/corelight-v3-corelight-metrics-system-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_metrics_zeek_doctor_CL`](../tables/corelight-v3-corelight-metrics-zeek-doctor-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_overall_capture_loss_CL`](../tables/corelight-v3-corelight-overall-capture-loss-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_pipeline_test_CL`](../tables/corelight-v3-corelight-pipeline-test-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_corelight_profiling_CL`](../tables/corelight-v3-corelight-profiling-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_cotp_CL`](../tables/corelight-v3-cotp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_datared_CL`](../tables/corelight-v3-datared-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_dce_rpc_CL`](../tables/corelight-v3-dce-rpc-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_dga_CL`](../tables/corelight-v3-dga-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_dhcp_CL`](../tables/corelight-v3-dhcp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_dnp3_CL`](../tables/corelight-v3-dnp3-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_dnp3_control_CL`](../tables/corelight-v3-dnp3-control-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_dnp3_objects_CL`](../tables/corelight-v3-dnp3-objects-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_dns_CL`](../tables/corelight-v3-dns-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_dns_agg_CL`](../tables/corelight-v3-dns-agg-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_dpd_CL`](../tables/corelight-v3-dpd-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ecat_aoe_info_CL`](../tables/corelight-v3-ecat-aoe-info-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ecat_arp_info_CL`](../tables/corelight-v3-ecat-arp-info-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ecat_coe_info_CL`](../tables/corelight-v3-ecat-coe-info-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ecat_dev_info_CL`](../tables/corelight-v3-ecat-dev-info-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ecat_foe_info_CL`](../tables/corelight-v3-ecat-foe-info-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ecat_log_address_CL`](../tables/corelight-v3-ecat-log-address-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ecat_registers_CL`](../tables/corelight-v3-ecat-registers-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ecat_soe_info_CL`](../tables/corelight-v3-ecat-soe-info-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_encrypted_dns_CL`](../tables/corelight-v3-encrypted-dns-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_enip_CL`](../tables/corelight-v3-enip-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_enip_debug_CL`](../tables/corelight-v3-enip-debug-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_enip_list_identity_CL`](../tables/corelight-v3-enip-list-identity-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_etc_viz_CL`](../tables/corelight-v3-etc-viz-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_files_CL`](../tables/corelight-v3-files-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_files_agg_CL`](../tables/corelight-v3-files-agg-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_files_red_CL`](../tables/corelight-v3-files-red-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_first_seen_CL`](../tables/corelight-v3-first-seen-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ftp_CL`](../tables/corelight-v3-ftp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_gena_CL`](../tables/corelight-v3-gena-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_generic_dns_tunnels_CL`](../tables/corelight-v3-generic-dns-tunnels-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_generic_icmp_tunnels_CL`](../tables/corelight-v3-generic-icmp-tunnels-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_genisys_CL`](../tables/corelight-v3-genisys-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_http_agg_CL`](../tables/corelight-v3-http-agg-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_icmp_specific_tunnels_CL`](../tables/corelight-v3-icmp-specific-tunnels-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_intel_CL`](../tables/corelight-v3-intel-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ipsec_CL`](../tables/corelight-v3-ipsec-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_irc_CL`](../tables/corelight-v3-irc-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_iso_cotp_CL`](../tables/corelight-v3-iso-cotp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_kerberos_CL`](../tables/corelight-v3-kerberos-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_known_certs_CL`](../tables/corelight-v3-known-certs-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_known_devices_CL`](../tables/corelight-v3-known-devices-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_known_domains_CL`](../tables/corelight-v3-known-domains-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_known_hosts_CL`](../tables/corelight-v3-known-hosts-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_known_names_CL`](../tables/corelight-v3-known-names-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_known_remotes_CL`](../tables/corelight-v3-known-remotes-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_known_services_CL`](../tables/corelight-v3-known-services-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_known_users_CL`](../tables/corelight-v3-known-users-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ldap_CL`](../tables/corelight-v3-ldap-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ldap_search_CL`](../tables/corelight-v3-ldap-search-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_loaded_scripts_CL`](../tables/corelight-v3-loaded-scripts-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_local_subnets_CL`](../tables/corelight-v3-local-subnets-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_local_subnets_dj_CL`](../tables/corelight-v3-local-subnets-dj-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_local_subnets_graphs_CL`](../tables/corelight-v3-local-subnets-graphs-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_local_subnets_neighbor_CL`](../tables/corelight-v3-local-subnets-neighbor-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_log4shell_CL`](../tables/corelight-v3-log4shell-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_logschema_CL`](../tables/corelight-v3-logschema-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_modbus_CL`](../tables/corelight-v3-modbus-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_modbus_detailed_CL`](../tables/corelight-v3-modbus-detailed-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_modbus_mask_write_register_CL`](../tables/corelight-v3-modbus-mask-write-register-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_modbus_read_device_identificatio_CL`](../tables/corelight-v3-modbus-read-device-identificatio-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_modbus_read_write_multiple_regis_CL`](../tables/corelight-v3-modbus-read-write-multiple-regis-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_mqtt_connect_CL`](../tables/corelight-v3-mqtt-connect-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_mqtt_publish_CL`](../tables/corelight-v3-mqtt-publish-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_mqtt_subscribe_CL`](../tables/corelight-v3-mqtt-subscribe-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_mysql_CL`](../tables/corelight-v3-mysql-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_net_perf_CL`](../tables/corelight-v3-net-perf-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_netcontrol_CL`](../tables/corelight-v3-netcontrol-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_netcontrol_drop_CL`](../tables/corelight-v3-netcontrol-drop-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_netcontrol_shunt_CL`](../tables/corelight-v3-netcontrol-shunt-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_notice_CL`](../tables/corelight-v3-notice-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_notice_alarm_CL`](../tables/corelight-v3-notice-alarm-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ntlm_CL`](../tables/corelight-v3-ntlm-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ntp_CL`](../tables/corelight-v3-ntp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ocsp_CL`](../tables/corelight-v3-ocsp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_bef_attr_operand_bpaths_CL`](../tables/corelight-v3-opcua-bef-attr-operand-bpaths-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_bef_smpl_attr_bpaths_CL`](../tables/corelight-v3-opcua-bef-smpl-attr-bpaths-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_bef_where_clause_CL`](../tables/corelight-v3-opcua-bef-where-clause-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_bef_where_clause_elements_CL`](../tables/corelight-v3-opcua-bef-where-clause-elements-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_CL`](../tables/corelight-v3-opcua-binary-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_activate_session_CL`](../tables/corelight-v3-opcua-binary-activate-session-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_activate_session_cl_CL`](../tables/corelight-v3-opcua-binary-activate-session-cl-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_activate_session_lo_CL`](../tables/corelight-v3-opcua-binary-activate-session-lo-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_aggregate_filter_CL`](../tables/corelight-v3-opcua-binary-aggregate-filter-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_browse_CL`](../tables/corelight-v3-opcua-binary-browse-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_browse_description_CL`](../tables/corelight-v3-opcua-binary-browse-description-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_browse_request_cont_CL`](../tables/corelight-v3-opcua-binary-browse-request-cont-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_browse_response_ref_CL`](../tables/corelight-v3-opcua-binary-browse-response-ref-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_browse_result_CL`](../tables/corelight-v3-opcua-binary-browse-result-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_close_session_CL`](../tables/corelight-v3-opcua-binary-close-session-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_cm_create_item_CL`](../tables/corelight-v3-opcua-binary-cm-create-item-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_cm_items_CL`](../tables/corelight-v3-opcua-binary-cm-items-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_create_session_CL`](../tables/corelight-v3-opcua-binary-create-session-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_create_session_disc_CL`](../tables/corelight-v3-opcua-binary-create-session-disc-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_create_session_endp_CL`](../tables/corelight-v3-opcua-binary-create-session-endp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_create_session_user_CL`](../tables/corelight-v3-opcua-binary-create-session-user-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_create_subscription_CL`](../tables/corelight-v3-opcua-binary-create-subscription-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_data_change_filter_CL`](../tables/corelight-v3-opcua-binary-data-change-filter-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_diag_info_detail_CL`](../tables/corelight-v3-opcua-binary-diag-info-detail-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_event_filter_CL`](../tables/corelight-v3-opcua-binary-event-filter-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_event_filter_attrib_CL`](../tables/corelight-v3-opcua-binary-event-filter-attrib-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_event_filter_elemen_CL`](../tables/corelight-v3-opcua-binary-event-filter-elemen-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_event_filter_litera_CL`](../tables/corelight-v3-opcua-binary-event-filter-litera-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_event_filter_select_CL`](../tables/corelight-v3-opcua-binary-event-filter-select-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_event_filter_simple_CL`](../tables/corelight-v3-opcua-binary-event-filter-simple-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_get_endpoints_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_get_endpoints_descr_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-descr-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_get_endpoints_disco_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-disco-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_get_endpoints_local_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-local-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_get_endpoints_profi_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-profi-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_get_endpoints_user_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-user-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_opensecure_channel_CL`](../tables/corelight-v3-opcua-binary-opensecure-channel-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_read_CL`](../tables/corelight-v3-opcua-binary-read-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_read_nodes_to_read_CL`](../tables/corelight-v3-opcua-binary-read-nodes-to-read-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_read_results_CL`](../tables/corelight-v3-opcua-binary-read-results-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_status_code_detail_CL`](../tables/corelight-v3-opcua-binary-status-code-detail-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_variant_array_dims_CL`](../tables/corelight-v3-opcua-binary-variant-array-dims-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_variant_data_CL`](../tables/corelight-v3-opcua-binary-variant-data-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_variant_data_value_CL`](../tables/corelight-v3-opcua-binary-variant-data-value-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_variant_extension_o_CL`](../tables/corelight-v3-opcua-binary-variant-extension-o-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_variant_metadata_CL`](../tables/corelight-v3-opcua-binary-variant-metadata-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_opcua_binary_write_CL`](../tables/corelight-v3-opcua-binary-write-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_openflow_CL`](../tables/corelight-v3-openflow-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_packet_filter_CL`](../tables/corelight-v3-packet-filter-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_pe_CL`](../tables/corelight-v3-pe-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_postgresql_CL`](../tables/corelight-v3-postgresql-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_print_CL`](../tables/corelight-v3-print-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_profinet_CL`](../tables/corelight-v3-profinet-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_profinet_dce_rpc_CL`](../tables/corelight-v3-profinet-dce-rpc-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_profinet_debug_CL`](../tables/corelight-v3-profinet-debug-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_quic_CL`](../tables/corelight-v3-quic-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_radius_CL`](../tables/corelight-v3-radius-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_rdp_CL`](../tables/corelight-v3-rdp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_redis_CL`](../tables/corelight-v3-redis-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_reporter_CL`](../tables/corelight-v3-reporter-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_rfb_CL`](../tables/corelight-v3-rfb-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_s7comm_CL`](../tables/corelight-v3-s7comm-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_s7comm_known_devices_CL`](../tables/corelight-v3-s7comm-known-devices-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_s7comm_plus_CL`](../tables/corelight-v3-s7comm-plus-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_s7comm_read_szl_CL`](../tables/corelight-v3-s7comm-read-szl-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_s7comm_upload_download_CL`](../tables/corelight-v3-s7comm-upload-download-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_signatures_CL`](../tables/corelight-v3-signatures-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_sip_CL`](../tables/corelight-v3-sip-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_smartpcap_CL`](../tables/corelight-v3-smartpcap-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_smartpcap_stats_CL`](../tables/corelight-v3-smartpcap-stats-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_smb_files_CL`](../tables/corelight-v3-smb-files-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_smb_mapping_CL`](../tables/corelight-v3-smb-mapping-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_smtp_CL`](../tables/corelight-v3-smtp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_smtp_links_CL`](../tables/corelight-v3-smtp-links-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_snmp_CL`](../tables/corelight-v3-snmp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_socks_CL`](../tables/corelight-v3-socks-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_software_CL`](../tables/corelight-v3-software-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_specific_dns_tunnels_CL`](../tables/corelight-v3-specific-dns-tunnels-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ssdp_CL`](../tables/corelight-v3-ssdp-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ssh_CL`](../tables/corelight-v3-ssh-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ssl_CL`](../tables/corelight-v3-ssl-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ssl_agg_CL`](../tables/corelight-v3-ssl-agg-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_ssl_red_CL`](../tables/corelight-v3-ssl-red-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_stats_CL`](../tables/corelight-v3-stats-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_stepping_CL`](../tables/corelight-v3-stepping-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_stun_CL`](../tables/corelight-v3-stun-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_stun_nat_CL`](../tables/corelight-v3-stun-nat-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_suricata_corelight_CL`](../tables/corelight-v3-suricata-corelight-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_suricata_eve_CL`](../tables/corelight-v3-suricata-eve-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_suricata_stats_CL`](../tables/corelight-v3-suricata-stats-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_suricata_zeek_stats_CL`](../tables/corelight-v3-suricata-zeek-stats-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_syslog_CL`](../tables/corelight-v3-syslog-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_tds_CL`](../tables/corelight-v3-tds-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_tds_rpc_CL`](../tables/corelight-v3-tds-rpc-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_tds_sql_batch_CL`](../tables/corelight-v3-tds-sql-batch-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_telemetry_CL`](../tables/corelight-v3-telemetry-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_telnet_CL`](../tables/corelight-v3-telnet-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_traceroute_CL`](../tables/corelight-v3-traceroute-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_tunnel_CL`](../tables/corelight-v3-tunnel-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_unknown_smartpcap_CL`](../tables/corelight-v3-unknown-smartpcap-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_util_stats_CL`](../tables/corelight-v3-util-stats-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_vpn_CL`](../tables/corelight-v3-vpn-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_websocket_CL`](../tables/corelight-v3-websocket-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_weird_CL`](../tables/corelight-v3-weird-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_weird_agg_CL`](../tables/corelight-v3-weird-agg-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_weird_red_CL`](../tables/corelight-v3-weird-red-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_weird_stats_CL`](../tables/corelight-v3-weird-stats-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_wireguard_CL`](../tables/corelight-v3-wireguard-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_x509_CL`](../tables/corelight-v3-x509-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_x509_red_CL`](../tables/corelight-v3-x509-red-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_yara_corelight_CL`](../tables/corelight-v3-yara-corelight-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_yara_error_corelight_CL`](../tables/corelight-v3-yara-error-corelight-cl.md) | ? | ✓ | ? |
| [`Corelight_v3_zeek_doctor_CL`](../tables/corelight-v3-zeek-doctor-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Data Collection Rules** (Subscription): read and write permissions to Data Collection Rules and Data Collection Endpoints are required. [See the documentation to learn more about the Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview).

**Custom Permissions:**
- **Microsoft Entra ID application**: Permission to register an application in Microsoft Entra ID and create a client secret. Typically requires the Application Developer role or higher.
- **Azure role assignment**: Permission to assign the **Monitoring Metrics Publisher** role on the deployed Data Collection Rules. Typically requires the Owner or User Access Administrator role on the target resource group.
- **Corelight Sensor access**: Administrative access to the Corelight Sensor (or Fleet Manager) to configure the Microsoft Sentinel export.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This data connector depends on a parser based on a Kusto Function to work as expected [**Corelight**](https://aka.ms/sentinel-Corelight-parser) which is deployed with the Microsoft Sentinel Solution.

**1. Deploy the Corelight data collection resources**

Deploy the ARM template that creates the Data Collection Endpoint (DCE), the `Corelight_v3_*_CL` tables, and one Data Collection Rule (DCR) per Corelight log type in your workspace.

Use the button below to deploy the connector resources into the same subscription and resource group as your Microsoft Sentinel workspace.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-CorelightExporter-azuredeploy)

When prompted, supply:

| Parameter | Value |
| --- | --- |
| `workspace` | The **name** of your Log Analytics workspace (not the ID). Maximum **18 characters** -- see the note below |
| `workspace-location` | The Azure region of the workspace |
| `resourceId` | The full resource ID of the workspace |

The deployment creates:

- One Data Collection Endpoint named `dce-corelight-<workspace>`
- One custom table per Corelight log type, named `Corelight_v3_<log_type>_CL`
- One Data Collection Rule per log type, named `dcr-corelight-<workspace>-<log_type>`, each tagged with `corelight-log-type`

> **IMPORTANT:** The workspace name must be **18 characters or fewer**. Each Data Collection Rule is named `dcr-corelight-<workspace>-<log_type>` and Azure limits resource names to 64 characters. The longest Corelight log type is 32 characters, so a longer workspace name makes some rule names exceed the limit and the deployment fails preflight validation with `'Name' must be between 1 and 64 characters`. If your workspace name is longer, deploy Microsoft Sentinel on a workspace with a shorter name.

> **NOTE:** The deployment can take several minutes to complete because a large number of tables and rules are created. Wait for it to finish before continuing.

**2. Register a Microsoft Entra ID application**

The Corelight Sensor authenticates to the Logs Ingestion API with a Microsoft Entra ID application. Create the application and a client secret, then record the values.

#### Create the application

1. In the Azure portal, go to **Microsoft Entra ID** > **App registrations** > **New registration**.
2. Enter a name, for example `Corelight Sentinel Connector`.
3. Under **Supported account types**, select **Accounts in this organizational directory only**.
4. Leave **Redirect URI** empty and select **Register**.
5. On the application **Overview** page, copy the **Application (client) ID** and the **Directory (tenant) ID**.

#### Create a client secret

1. On the application page, go to **Certificates & secrets** > **Client secrets** > **New client secret**.
2. Enter a description, choose an expiry, and select **Add**.
3. Copy the secret **Value** immediately. It is shown only once and cannot be retrieved later.

You now have the **Tenant ID**, **Client ID**, and **Client Secret** required by the Corelight Sensor.

For more information, see [Register an application with Microsoft Entra ID](https://learn.microsoft.com/entra/identity-platform/quickstart-register-app).

**3. Grant the application permission to send data**

Assign the **Monitoring Metrics Publisher** role so the application can publish to the Data Collection Rules created in step 1.

Assign the role once at the **resource group** scope so it covers every Corelight Data Collection Rule in a single assignment.

1. Go to the resource group that contains the deployed DCE and DCRs.
2. Select **Access control (IAM)** > **Add** > **Add role assignment**.
3. On the **Role** tab, search for and select **Monitoring Metrics Publisher**.
4. On the **Members** tab, choose **User, group, or service principal**, then select the application you registered in step 2.
5. Select **Review + assign**.

> **NOTE:** Role assignments can take a few minutes to take effect. If the sensor reports authorization errors immediately after assignment, wait and retry.

**4. Collect the values needed by the Corelight exporter**

The Corelight exporter discovers the Data Collection Rules by tag. Collect the Data Collection Endpoint URI, the subscription ID, and confirm the DCR tag and stream name pattern.

#### Data Collection Endpoint URI

1. Go to **Monitor** > **Settings** > **Data Collection Endpoints**.
2. Select `dce-corelight-<workspace>`.
3. On the **Overview** page, copy the **Logs ingestion** URI. It has the form `https://dce-corelight-<workspace>-<suffix>.<region>.ingest.monitor.azure.com`.

#### Subscription ID

Copy the ID of the subscription that contains the deployed Data Collection Endpoint and Data Collection Rules.

1. In the Azure portal, search for and open **Subscriptions**.
2. Select the subscription that contains the deployed resources.
3. On the **Overview** page, copy the **Subscription ID**.

#### Data Collection Rule log type tag

The deployment tags every Corelight Data Collection Rule with the log type it accepts. The exporter uses this tag to select the correct DCR for each log, so no immutable ID has to be entered manually.

| Tag | Value |
| --- | --- |
| `corelight-log-type` | The Corelight log type, for example `conn`, `dns`, `http` |
| `solution` | `Corelight` |

To review the deployed rules and their log types in the portal, go to **Monitor** > **Settings** > **Data Collection Rules** and look for rules named `dcr-corelight-<workspace>-<log_type>`.

You can also list them with the Azure CLI. Run the commands from **Azure Cloud Shell** in the portal, as described in the section below.

```bash
az monitor data-collection rule list \
  --resource-group <resource-group> \
  --query "[?tags.solution=='Corelight'].{logType:tags.\"corelight-log-type\", name:name}" \
  --output table
```

#### Running the Azure CLI commands from the Azure portal

The Azure CLI commands in this connector can be run directly in the portal using Azure Cloud Shell, with no local installation required.

1. In the Azure portal, select the **Cloud Shell** icon (`>_`) in the top toolbar, or go to [https://shell.azure.com](https://shell.azure.com).
2. When prompted to choose an environment, select **Bash**. The commands below are written for Bash.
3. If this is your first time using Cloud Shell, follow the prompt to create or select a storage account.
4. Confirm you are in the correct subscription, and switch if needed:

   ```bash
   az account show --output table
   az account set --subscription "<subscription-name-or-id>"
   ```

5. Add the Data Collection Rule commands, which ship in a CLI extension:

   ```bash
   az extension add --name monitor-control-service
   ```

6. Paste the command you want to run, replacing `<resource-group>`, `<workspace>`, and `<log_type>` with your own values.

> **NOTE:** The `az monitor data-collection rule` commands require the `monitor-control-service` extension. If you run them without it, Cloud Shell offers to install the extension automatically the first time.

#### Stream names

Each DCR declares a single stream, named after its destination table:

```
Custom-<table_name>
```

For most log types the table name follows the pattern `Corelight_v3_<log_type>_CL`. For example, the `conn` log type uses the stream `Custom-Corelight_v3_conn_CL` and lands in the table `Corelight_v3_conn_CL`. This is why the exporter **Stream Name** template is set to `Custom-Corelight_v3_$LOG_CL` in the next step.

> **IMPORTANT:** A small number of log types with long names have a shortened table name, because Log Analytics limits table name length. For those log types the stream name is **not** `Custom-Corelight_v3_<log_type>_CL`, and the `$LOG` template does not resolve to the correct stream. See the list in step 5.

To read the stream name directly from a rule, use the portal under **Monitor** > **Settings** > **Data Collection Rules** > select the rule > **JSON View**, or run:

```bash
az monitor data-collection rule show \
  --resource-group <resource-group> \
  --name dcr-corelight-<workspace>-<log_type> \
  --query "keys(streamDeclarations)" \
  --output tsv
```

#### Data Collection Rule immutable IDs (reference only)

The exporter resolves rules through the `corelight-log-type` tag, so immutable IDs are not required for configuration. If you need one for troubleshooting or for a direct Logs Ingestion API call, read it in the portal under **Monitor** > **Settings** > **Data Collection Rules** > select the rule > **JSON View** > `immutableId`, or run:

```bash
az monitor data-collection rule show \
  --resource-group <resource-group> \
  --name dcr-corelight-<workspace>-conn \
  --query immutableId \
  --output tsv
```

**5. Configure the Azure Sentinel exporter on the Corelight Sensor**

Create an Azure Sentinel exporter on the Corelight Sensor or in Fleet Manager, using the values collected in the previous steps. The exporter is configured on the Corelight platform and is documented by Corelight.
**Configure the exporter on the Corelight platform (expandable)**

**Corelight documentation**

  The exporter is created and managed on the Corelight platform, using the sensor web interface or Fleet Manager. Follow Corelight's own documentation for the exporter creation steps, the supported sensor and Fleet Manager versions, enabling the dynamic exporter option, and uploading a private CA bundle if your deployment requires one:

**[Corelight documentation: Azure Sentinel dynamic exporter](https://docs.corelight.cloud/sensor/export/azure-sentinel-dynamic-exporter.html)**

  **Before you begin**

  - Steps 1 to 4 of this connector are complete, and you have the Data Collection Endpoint URI, subscription ID, and application credentials.
- The sensor or Fleet Manager can reach the Data Collection Endpoint over outbound HTTPS on port 443. If outbound traffic must traverse a proxy, have the proxy URL ready.
- Your sensor runs a version that supports the Azure Sentinel dynamic exporter, and the dynamic exporter option is enabled. Corelight's documentation lists the required versions and the setting to enable.

  **Values to enter in the exporter**

  Enter these values when creating the Azure Sentinel exporter. Leave any setting not listed here at its Corelight default unless Corelight advises otherwise.

| Corelight exporter setting | Value to use |
| --- | --- |
| Tenant ID | Step 2, application **Directory (tenant) ID** |
| Client ID | Step 2, application **Application (client) ID** |
| Client Secret | Step 2, client secret **Value** |
| Subscription ID | Step 4, the subscription containing the DCE and DCRs |
| Data Collection Endpoint | Step 4, the **Logs ingestion** URI |
| DCR Log Type Tag | `corelight-log-type` |
| Stream Name | `Custom-Corelight_v3_$LOG_CL` |

> **IMPORTANT:** The exporter ships with the default stream name template `Custom-Corelight_v2_$LOG_CL`. This solution creates `v3` tables, so the template must be changed to `Custom-Corelight_v3_$LOG_CL`. Leaving the default in place sends events to streams that do not exist and the data is rejected.

Use the exporter's log type filter to control which Zeek logs are exported. Enable only the log types you intend to ingest.

> **NOTE:** Ingesting a large number of log types increases Microsoft Sentinel data ingestion cost. Review the [Microsoft Sentinel pricing](https://azure.microsoft.com/pricing/details/microsoft-sentinel/) page before enabling the full set.

  **Log types not covered by the stream name template**

  26 log types have a shortened table name because of the Log Analytics table name length limit, so `Custom-Corelight_v3_$LOG_CL` does not resolve to their stream. To ingest any of these, set the stream name explicitly from the value below rather than relying on the template.

| Log type | Stream name |
| --- | --- |
| `modbus_read_device_identification` | `Custom-Corelight_v3_modbus_read_device_identificatio_CL` |
| `modbus_read_write_multiple_registers` | `Custom-Corelight_v3_modbus_read_write_multiple_regis_CL` |
| `opcua_binary_activate_session_client_software_cert` | `Custom-Corelight_v3_opcua_binary_activate_session_cl_CL` |
| `opcua_binary_activate_session_locale_id` | `Custom-Corelight_v3_opcua_binary_activate_session_lo_CL` |
| `opcua_binary_browse_request_continuation_point` | `Custom-Corelight_v3_opcua_binary_browse_request_cont_CL` |
| `opcua_binary_browse_response_references` | `Custom-Corelight_v3_opcua_binary_browse_response_ref_CL` |
| `opcua_binary_create_monitored_items` | `Custom-Corelight_v3_opcua_binary_cm_items_CL` |
| `opcua_binary_create_monitored_items_create_item` | `Custom-Corelight_v3_opcua_binary_cm_create_item_CL` |
| `opcua_binary_create_session_discovery` | `Custom-Corelight_v3_opcua_binary_create_session_disc_CL` |
| `opcua_binary_create_session_endpoints` | `Custom-Corelight_v3_opcua_binary_create_session_endp_CL` |
| `opcua_binary_create_session_user_token` | `Custom-Corelight_v3_opcua_binary_create_session_user_CL` |
| `opcua_binary_event_filter_attribute_operand` | `Custom-Corelight_v3_opcua_binary_event_filter_attrib_CL` |
| `opcua_binary_event_filter_attribute_operand_browse_paths` | `Custom-Corelight_v3_opcua_bef_attr_operand_bpaths_CL` |
| `opcua_binary_event_filter_element_operand` | `Custom-Corelight_v3_opcua_binary_event_filter_elemen_CL` |
| `opcua_binary_event_filter_literal_operand` | `Custom-Corelight_v3_opcua_binary_event_filter_litera_CL` |
| `opcua_binary_event_filter_select_clause` | `Custom-Corelight_v3_opcua_binary_event_filter_select_CL` |
| `opcua_binary_event_filter_simple_attribute_operand` | `Custom-Corelight_v3_opcua_binary_event_filter_simple_CL` |
| `opcua_binary_event_filter_simple_attribute_operand_browse_paths` | `Custom-Corelight_v3_opcua_bef_smpl_attr_bpaths_CL` |
| `opcua_binary_event_filter_where_clause` | `Custom-Corelight_v3_opcua_bef_where_clause_CL` |
| `opcua_binary_event_filter_where_clause_elements` | `Custom-Corelight_v3_opcua_bef_where_clause_elements_CL` |
| `opcua_binary_get_endpoints_description` | `Custom-Corelight_v3_opcua_binary_get_endpoints_descr_CL` |
| `opcua_binary_get_endpoints_discovery` | `Custom-Corelight_v3_opcua_binary_get_endpoints_disco_CL` |
| `opcua_binary_get_endpoints_locale_id` | `Custom-Corelight_v3_opcua_binary_get_endpoints_local_CL` |
| `opcua_binary_get_endpoints_profile_uri` | `Custom-Corelight_v3_opcua_binary_get_endpoints_profi_CL` |
| `opcua_binary_get_endpoints_user_token` | `Custom-Corelight_v3_opcua_binary_get_endpoints_user_CL` |
| `opcua_binary_variant_extension_object` | `Custom-Corelight_v3_opcua_binary_variant_extension_o_CL` |

  **Getting help**

  - For questions about the exporter itself, sensor or Fleet Manager configuration, supported versions, CA bundles, or exporter errors reported by the sensor, contact your Corelight TAM or SE, or Corelight support at [info@corelight.com](mailto:info@corelight.com).
- If the exporter reports success but no data reaches the workspace, the issue is usually on the Azure side. Confirm the role assignment from step 3, the Data Collection Endpoint URI, and the stream name, then continue to step 6.

**6. Verify data ingestion**

Confirm that events from the Corelight Sensor are arriving in your workspace.

Allow 5 to 15 minutes after configuring the exporter for the first events to appear, then run the following queries in **Logs**.

Check which Corelight tables are receiving data:

```kusto
union withsource=TableName Corelight_v3_*_CL
| summarize EventCount = count(), LastReceived = max(TimeGenerated) by TableName
| sort by LastReceived desc
```

Check connection events specifically:

```kusto
Corelight_v3_conn_CL
| take 10
```

Confirm connectivity:

```kusto
Corelight_v3_conn_CL
| summarize LastLogReceived = max(TimeGenerated)
| project IsConnected = LastLogReceived > ago(30m)
```

If no data appears, check the following on the Azure side:

- The **Monitoring Metrics Publisher** role assignment from step 3 exists at the resource group scope and has taken effect. Role assignments can take several minutes to propagate.
- The **Data Collection Endpoint** value in the exporter matches the **Logs ingestion** URI from step 4.
- The exporter **Stream Name** template is `Custom-Corelight_v3_$LOG_CL` and not the `v2` default, and any log type listed in step 5 as having a shortened stream name is configured with its explicit stream name.
- The **DCR Log Type Tag** is `corelight-log-type`, and the rules for the log types you enabled exist in the resource group.

If the values above are correct and the sensor still reports export errors, contact Corelight support as described in step 5.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

