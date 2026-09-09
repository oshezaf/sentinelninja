# Corelight for Microsoft Sentinel

*Solution: Corelight*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Corelight/Data%20Connectors/Logo/corelight.svg" alt="Corelight Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Corelight |
| **Support Tier** | Partner |
| **Support Link** | [https://support.corelight.com/](https://support.corelight.com/) |
| **Categories** | IT Operations,Security - Network |
| **Version** | 3.3.0 |
| **Author** | Corelight - info@corelight.com |
| **First Published** | 2022-06-01 |
| **Last Updated** | 2026-08-28 |
| **Solution Folder** | [Corelight](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Corelight) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/corelightinc1584998267292.corelight-for-azure-sentinel) · Rating: ★★★★★ 4.8/5 (20 ratings) · Popularity: 🔵 Medium (65%) |

The [Corelight](https://corelight.com/) solution provides the capability to ingest events from [Zeek](https://zeek.org/) and [Suricata](https://suricata.io/) via Corelight Sensors into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Agent based logs collection from Windows and Linux machines](https://docs.microsoft.com/azure/azure-monitor/agents/data-sources-custom-logs)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md)

## Tables Used

This solution uses **239 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Corelight_v3_amqp_CL`](../tables/corelight-v3-amqp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_analyzer_CL`](../tables/corelight-v3-analyzer-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_anomaly_CL`](../tables/corelight-v3-anomaly-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_asset_classification_CL`](../tables/corelight-v3-asset-classification-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_bacnet_CL`](../tables/corelight-v3-bacnet-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_bacnet_device_control_CL`](../tables/corelight-v3-bacnet-device-control-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_bacnet_discovery_CL`](../tables/corelight-v3-bacnet-discovery-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_bacnet_property_CL`](../tables/corelight-v3-bacnet-property-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_broker_CL`](../tables/corelight-v3-broker-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_bsap_ip_header_CL`](../tables/corelight-v3-bsap-ip-header-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_bsap_ip_rdb_CL`](../tables/corelight-v3-bsap-ip-rdb-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_bsap_ip_unknown_CL`](../tables/corelight-v3-bsap-ip-unknown-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_bsap_serial_header_CL`](../tables/corelight-v3-bsap-serial-header-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_bsap_serial_rdb_CL`](../tables/corelight-v3-bsap-serial-rdb-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_bsap_serial_rdb_ext_CL`](../tables/corelight-v3-bsap-serial-rdb-ext-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_bsap_serial_unknown_CL`](../tables/corelight-v3-bsap-serial-unknown-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_capture_loss_CL`](../tables/corelight-v3-capture-loss-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_cip_CL`](../tables/corelight-v3-cip-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_cip_identity_CL`](../tables/corelight-v3-cip-identity-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_cip_io_CL`](../tables/corelight-v3-cip-io-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_cluster_CL`](../tables/corelight-v3-cluster-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_config_CL`](../tables/corelight-v3-config-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v3_conn_agg_CL`](../tables/corelight-v3-conn-agg-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Workbooks |
| [`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v3_corelight_ad_admin_shares_CL`](../tables/corelight-v3-corelight-ad-admin-shares-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_ad_ew_servers_services_CL`](../tables/corelight-v3-corelight-ad-ew-servers-services-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_ad_exe_files_CL`](../tables/corelight-v3-corelight-ad-exe-files-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_ad_ftp_connections_CL`](../tables/corelight-v3-corelight-ad-ftp-connections-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_ad_http_user_agents_CL`](../tables/corelight-v3-corelight-ad-http-user-agents-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_ad_ns_servers_services_CL`](../tables/corelight-v3-corelight-ad-ns-servers-services-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_ad_ntlm_auth_CL`](../tables/corelight-v3-corelight-ad-ntlm-auth-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_ad_rdp_CL`](../tables/corelight-v3-corelight-ad-rdp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_ad_ssh_clients_CL`](../tables/corelight-v3-corelight-ad-ssh-clients-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_ad_ssh_connections_CL`](../tables/corelight-v3-corelight-ad-ssh-connections-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_burst_CL`](../tables/corelight-v3-corelight-burst-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_corelight_license_capacity_CL`](../tables/corelight-v3-corelight-license-capacity-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_metrics_disk_CL`](../tables/corelight-v3-corelight-metrics-disk-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_corelight_metrics_iface_CL`](../tables/corelight-v3-corelight-metrics-iface-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_corelight_metrics_memory_CL`](../tables/corelight-v3-corelight-metrics-memory-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_corelight_metrics_system_CL`](../tables/corelight-v3-corelight-metrics-system-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_corelight_metrics_zeek_doctor_CL`](../tables/corelight-v3-corelight-metrics-zeek-doctor-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_corelight_overall_capture_loss_CL`](../tables/corelight-v3-corelight-overall-capture-loss-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_corelight_pipeline_test_CL`](../tables/corelight-v3-corelight-pipeline-test-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_corelight_profiling_CL`](../tables/corelight-v3-corelight-profiling-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_cotp_CL`](../tables/corelight-v3-cotp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_datared_CL`](../tables/corelight-v3-datared-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_dce_rpc_CL`](../tables/corelight-v3-dce-rpc-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_dga_CL`](../tables/corelight-v3-dga-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_dhcp_CL`](../tables/corelight-v3-dhcp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_dnp3_CL`](../tables/corelight-v3-dnp3-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_dnp3_control_CL`](../tables/corelight-v3-dnp3-control-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_dnp3_objects_CL`](../tables/corelight-v3-dnp3-objects-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_dns_CL`](../tables/corelight-v3-dns-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v3_dns_agg_CL`](../tables/corelight-v3-dns-agg-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Workbooks |
| [`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v3_dpd_CL`](../tables/corelight-v3-dpd-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_ecat_aoe_info_CL`](../tables/corelight-v3-ecat-aoe-info-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ecat_arp_info_CL`](../tables/corelight-v3-ecat-arp-info-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ecat_coe_info_CL`](../tables/corelight-v3-ecat-coe-info-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ecat_dev_info_CL`](../tables/corelight-v3-ecat-dev-info-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ecat_foe_info_CL`](../tables/corelight-v3-ecat-foe-info-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ecat_log_address_CL`](../tables/corelight-v3-ecat-log-address-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ecat_registers_CL`](../tables/corelight-v3-ecat-registers-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ecat_soe_info_CL`](../tables/corelight-v3-ecat-soe-info-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_encrypted_dns_CL`](../tables/corelight-v3-encrypted-dns-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_enip_CL`](../tables/corelight-v3-enip-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_enip_debug_CL`](../tables/corelight-v3-enip-debug-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_enip_list_identity_CL`](../tables/corelight-v3-enip-list-identity-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_etc_viz_CL`](../tables/corelight-v3-etc-viz-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_files_CL`](../tables/corelight-v3-files-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Hunting, Workbooks |
| [`Corelight_v3_files_agg_CL`](../tables/corelight-v3-files-agg-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_files_red_CL`](../tables/corelight-v3-files-red-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Hunting, Workbooks |
| [`Corelight_v3_first_seen_CL`](../tables/corelight-v3-first-seen-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ftp_CL`](../tables/corelight-v3-ftp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_gena_CL`](../tables/corelight-v3-gena-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_generic_dns_tunnels_CL`](../tables/corelight-v3-generic-dns-tunnels-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_generic_icmp_tunnels_CL`](../tables/corelight-v3-generic-icmp-tunnels-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_genisys_CL`](../tables/corelight-v3-genisys-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v3_http_agg_CL`](../tables/corelight-v3-http-agg-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Workbooks |
| [`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v3_icmp_specific_tunnels_CL`](../tables/corelight-v3-icmp-specific-tunnels-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_intel_CL`](../tables/corelight-v3-intel-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_ipsec_CL`](../tables/corelight-v3-ipsec-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_irc_CL`](../tables/corelight-v3-irc-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_iso_cotp_CL`](../tables/corelight-v3-iso-cotp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_kerberos_CL`](../tables/corelight-v3-kerberos-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_known_certs_CL`](../tables/corelight-v3-known-certs-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_known_devices_CL`](../tables/corelight-v3-known-devices-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_known_domains_CL`](../tables/corelight-v3-known-domains-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_known_hosts_CL`](../tables/corelight-v3-known-hosts-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_known_names_CL`](../tables/corelight-v3-known-names-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_known_remotes_CL`](../tables/corelight-v3-known-remotes-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_known_services_CL`](../tables/corelight-v3-known-services-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_known_users_CL`](../tables/corelight-v3-known-users-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_ldap_CL`](../tables/corelight-v3-ldap-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ldap_search_CL`](../tables/corelight-v3-ldap-search-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_loaded_scripts_CL`](../tables/corelight-v3-loaded-scripts-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_local_subnets_CL`](../tables/corelight-v3-local-subnets-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_local_subnets_dj_CL`](../tables/corelight-v3-local-subnets-dj-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_local_subnets_graphs_CL`](../tables/corelight-v3-local-subnets-graphs-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_local_subnets_neighbor_CL`](../tables/corelight-v3-local-subnets-neighbor-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_log4shell_CL`](../tables/corelight-v3-log4shell-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_logschema_CL`](../tables/corelight-v3-logschema-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_modbus_CL`](../tables/corelight-v3-modbus-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_modbus_detailed_CL`](../tables/corelight-v3-modbus-detailed-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_modbus_mask_write_register_CL`](../tables/corelight-v3-modbus-mask-write-register-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_modbus_read_device_identificatio_CL`](../tables/corelight-v3-modbus-read-device-identificatio-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_modbus_read_write_multiple_regis_CL`](../tables/corelight-v3-modbus-read-write-multiple-regis-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_mqtt_connect_CL`](../tables/corelight-v3-mqtt-connect-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_mqtt_publish_CL`](../tables/corelight-v3-mqtt-publish-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_mqtt_subscribe_CL`](../tables/corelight-v3-mqtt-subscribe-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_mysql_CL`](../tables/corelight-v3-mysql-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_net_perf_CL`](../tables/corelight-v3-net-perf-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_netcontrol_CL`](../tables/corelight-v3-netcontrol-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_netcontrol_drop_CL`](../tables/corelight-v3-netcontrol-drop-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_netcontrol_shunt_CL`](../tables/corelight-v3-netcontrol-shunt-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_notice_CL`](../tables/corelight-v3-notice-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_notice_alarm_CL`](../tables/corelight-v3-notice-alarm-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ntlm_CL`](../tables/corelight-v3-ntlm-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_ntp_CL`](../tables/corelight-v3-ntp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_ocsp_CL`](../tables/corelight-v3-ocsp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_opcua_bef_attr_operand_bpaths_CL`](../tables/corelight-v3-opcua-bef-attr-operand-bpaths-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_bef_smpl_attr_bpaths_CL`](../tables/corelight-v3-opcua-bef-smpl-attr-bpaths-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_bef_where_clause_CL`](../tables/corelight-v3-opcua-bef-where-clause-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_bef_where_clause_elements_CL`](../tables/corelight-v3-opcua-bef-where-clause-elements-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_CL`](../tables/corelight-v3-opcua-binary-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_activate_session_CL`](../tables/corelight-v3-opcua-binary-activate-session-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_activate_session_cl_CL`](../tables/corelight-v3-opcua-binary-activate-session-cl-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_activate_session_lo_CL`](../tables/corelight-v3-opcua-binary-activate-session-lo-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_aggregate_filter_CL`](../tables/corelight-v3-opcua-binary-aggregate-filter-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_browse_CL`](../tables/corelight-v3-opcua-binary-browse-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_browse_description_CL`](../tables/corelight-v3-opcua-binary-browse-description-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_browse_request_cont_CL`](../tables/corelight-v3-opcua-binary-browse-request-cont-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_browse_response_ref_CL`](../tables/corelight-v3-opcua-binary-browse-response-ref-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_browse_result_CL`](../tables/corelight-v3-opcua-binary-browse-result-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_close_session_CL`](../tables/corelight-v3-opcua-binary-close-session-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_cm_create_item_CL`](../tables/corelight-v3-opcua-binary-cm-create-item-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_cm_items_CL`](../tables/corelight-v3-opcua-binary-cm-items-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_create_session_CL`](../tables/corelight-v3-opcua-binary-create-session-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_create_session_disc_CL`](../tables/corelight-v3-opcua-binary-create-session-disc-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_create_session_endp_CL`](../tables/corelight-v3-opcua-binary-create-session-endp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_create_session_user_CL`](../tables/corelight-v3-opcua-binary-create-session-user-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_create_subscription_CL`](../tables/corelight-v3-opcua-binary-create-subscription-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_data_change_filter_CL`](../tables/corelight-v3-opcua-binary-data-change-filter-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_diag_info_detail_CL`](../tables/corelight-v3-opcua-binary-diag-info-detail-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_event_filter_CL`](../tables/corelight-v3-opcua-binary-event-filter-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_event_filter_attrib_CL`](../tables/corelight-v3-opcua-binary-event-filter-attrib-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_event_filter_elemen_CL`](../tables/corelight-v3-opcua-binary-event-filter-elemen-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_event_filter_litera_CL`](../tables/corelight-v3-opcua-binary-event-filter-litera-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_event_filter_select_CL`](../tables/corelight-v3-opcua-binary-event-filter-select-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_event_filter_simple_CL`](../tables/corelight-v3-opcua-binary-event-filter-simple-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_get_endpoints_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_get_endpoints_descr_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-descr-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_get_endpoints_disco_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-disco-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_get_endpoints_local_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-local-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_get_endpoints_profi_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-profi-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_get_endpoints_user_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-user-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_opensecure_channel_CL`](../tables/corelight-v3-opcua-binary-opensecure-channel-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_read_CL`](../tables/corelight-v3-opcua-binary-read-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_read_nodes_to_read_CL`](../tables/corelight-v3-opcua-binary-read-nodes-to-read-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_read_results_CL`](../tables/corelight-v3-opcua-binary-read-results-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_status_code_detail_CL`](../tables/corelight-v3-opcua-binary-status-code-detail-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_variant_array_dims_CL`](../tables/corelight-v3-opcua-binary-variant-array-dims-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_variant_data_CL`](../tables/corelight-v3-opcua-binary-variant-data-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_variant_data_value_CL`](../tables/corelight-v3-opcua-binary-variant-data-value-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_variant_extension_o_CL`](../tables/corelight-v3-opcua-binary-variant-extension-o-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_variant_metadata_CL`](../tables/corelight-v3-opcua-binary-variant-metadata-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_opcua_binary_write_CL`](../tables/corelight-v3-opcua-binary-write-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_openflow_CL`](../tables/corelight-v3-openflow-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_packet_filter_CL`](../tables/corelight-v3-packet-filter-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_pe_CL`](../tables/corelight-v3-pe-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_postgresql_CL`](../tables/corelight-v3-postgresql-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_print_CL`](../tables/corelight-v3-print-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_profinet_CL`](../tables/corelight-v3-profinet-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_profinet_dce_rpc_CL`](../tables/corelight-v3-profinet-dce-rpc-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_profinet_debug_CL`](../tables/corelight-v3-profinet-debug-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_quic_CL`](../tables/corelight-v3-quic-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_radius_CL`](../tables/corelight-v3-radius-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_rdp_CL`](../tables/corelight-v3-rdp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_redis_CL`](../tables/corelight-v3-redis-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_reporter_CL`](../tables/corelight-v3-reporter-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_rfb_CL`](../tables/corelight-v3-rfb-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_s7comm_CL`](../tables/corelight-v3-s7comm-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_s7comm_known_devices_CL`](../tables/corelight-v3-s7comm-known-devices-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_s7comm_plus_CL`](../tables/corelight-v3-s7comm-plus-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_s7comm_read_szl_CL`](../tables/corelight-v3-s7comm-read-szl-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_s7comm_upload_download_CL`](../tables/corelight-v3-s7comm-upload-download-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_signatures_CL`](../tables/corelight-v3-signatures-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_sip_CL`](../tables/corelight-v3-sip-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_smartpcap_CL`](../tables/corelight-v3-smartpcap-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_smartpcap_stats_CL`](../tables/corelight-v3-smartpcap-stats-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_smb_files_CL`](../tables/corelight-v3-smb-files-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_smb_mapping_CL`](../tables/corelight-v3-smb-mapping-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Hunting, Workbooks |
| [`Corelight_v3_smtp_CL`](../tables/corelight-v3-smtp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v3_smtp_links_CL`](../tables/corelight-v3-smtp-links-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_snmp_CL`](../tables/corelight-v3-snmp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_socks_CL`](../tables/corelight-v3-socks-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_software_CL`](../tables/corelight-v3-software-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_specific_dns_tunnels_CL`](../tables/corelight-v3-specific-dns-tunnels-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_ssdp_CL`](../tables/corelight-v3-ssdp-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_ssh_CL`](../tables/corelight-v3-ssh-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_ssl_CL`](../tables/corelight-v3-ssl-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_ssl_agg_CL`](../tables/corelight-v3-ssl-agg-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_ssl_red_CL`](../tables/corelight-v3-ssl-red-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_stats_CL`](../tables/corelight-v3-stats-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_stepping_CL`](../tables/corelight-v3-stepping-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_stun_CL`](../tables/corelight-v3-stun-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_stun_nat_CL`](../tables/corelight-v3-stun-nat-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_suricata_corelight_CL`](../tables/corelight-v3-suricata-corelight-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_suricata_eve_CL`](../tables/corelight-v3-suricata-eve-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_suricata_stats_CL`](../tables/corelight-v3-suricata-stats-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_suricata_zeek_stats_CL`](../tables/corelight-v3-suricata-zeek-stats-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_syslog_CL`](../tables/corelight-v3-syslog-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_tds_CL`](../tables/corelight-v3-tds-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_tds_rpc_CL`](../tables/corelight-v3-tds-rpc-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_tds_sql_batch_CL`](../tables/corelight-v3-tds-sql-batch-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_telemetry_CL`](../tables/corelight-v3-telemetry-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_telnet_CL`](../tables/corelight-v3-telnet-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_traceroute_CL`](../tables/corelight-v3-traceroute-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_tunnel_CL`](../tables/corelight-v3-tunnel-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_unknown_smartpcap_CL`](../tables/corelight-v3-unknown-smartpcap-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_util_stats_CL`](../tables/corelight-v3-util-stats-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_vpn_CL`](../tables/corelight-v3-vpn-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_websocket_CL`](../tables/corelight-v3-websocket-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_weird_CL`](../tables/corelight-v3-weird-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_weird_agg_CL`](../tables/corelight-v3-weird-agg-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_weird_red_CL`](../tables/corelight-v3-weird-red-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_weird_stats_CL`](../tables/corelight-v3-weird-stats-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_wireguard_CL`](../tables/corelight-v3-wireguard-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_x509_CL`](../tables/corelight-v3-x509-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_x509_red_CL`](../tables/corelight-v3-x509-red-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Corelight_v3_yara_corelight_CL`](../tables/corelight-v3-yara-corelight-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_yara_error_corelight_CL`](../tables/corelight-v3-yara-error-corelight-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | - |
| [`Corelight_v3_zeek_doctor_CL`](../tables/corelight-v3-zeek-doctor-cl.md) | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) | Workbooks |
| [`Usage`](../tables/usage.md) | - | Workbooks |

## Content Items

This solution includes **261 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 231 |
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 5 |
| Watchlists | 5 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Corelight - C2 DGA Detected Via Repetitive Failures](../content/corelight-corelight-c2-dga-detected-via-repetitive-failures-8eaa2268-74ee-492c-b869-450eff707fef-523acd4f.md) | Medium | CommandAndControl | [`Corelight_v3_dns_CL`](../tables/corelight-v3-dns-cl.md)<br>[`Corelight_v3_dns_agg_CL`](../tables/corelight-v3-dns-agg-cl.md)<br>[`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md) |
| [Corelight - External Proxy Detected](../content/corelight-corelight-external-proxy-detected-05850746-9ae4-412f-838b-844f0903f4a9-ddace3ce.md) | Low | DefenseEvasion, CommandAndControl | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_agg_CL`](../tables/corelight-v3-http-agg-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |
| [Corelight - Forced External Outbound SMB](../content/corelight-corelight-forced-external-outbound-smb-73f23aa2-5cc4-4507-940b-75c9092e9e01-7d9f3286.md) | Medium | CredentialAccess | [`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md)<br>[`Corelight_v3_conn_agg_CL`](../tables/corelight-v3-conn-agg-cl.md)<br>[`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md)<br>[`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md) |
| [Corelight - Multiple Compressed Files Transferred over HTTP](../content/corelight-corelight-multiple-compressed-files-transferred-over-http-4e55e306-3022-43a1-870a-41c4d5116079-08a06d64.md) | Medium | Exfiltration | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_agg_CL`](../tables/corelight-v3-http-agg-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |
| [Corelight - Multiple files sent over HTTP with abnormal requests](../content/corelight-corelight-multiple-files-sent-over-http-with-abnormal-requests-7226d37b-50ee-4e3b-9f80-5b74080d8f2c-a74bb743.md) | Medium | Exfiltration | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_agg_CL`](../tables/corelight-v3-http-agg-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |
| [Corelight - Network Service Scanning Multiple IP Addresses](../content/corelight-corelight-network-service-scanning-multiple-ip-addresses-599570d4-06f8-4939-8e29-95cd003f1abd-442ae0cd.md) | Medium | InitialAccess | [`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md)<br>[`Corelight_v3_conn_agg_CL`](../tables/corelight-v3-conn-agg-cl.md)<br>[`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md)<br>[`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md) |
| [Corelight - Possible Typo Squatting or Punycode Phishing HTTP Request](../content/corelight-corelight-possible-typo-squatting-or-punycode-phishing-http-request-6b579e98-abc9-4e7a-9efc-2f3408ba16c9-8c086033.md) | Medium | InitialAccess | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_agg_CL`](../tables/corelight-v3-http-agg-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |
| [Corelight - Possible Webshell](../content/corelight-corelight-possible-webshell-f3245aa1-1ca1-471c-a0b7-97ea6b791d5d-53a9b40c.md) | Medium | Persistence | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_agg_CL`](../tables/corelight-v3-http-agg-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |
| [Corelight - Possible Webshell (Rare PUT or POST)](../content/corelight-corelight-possible-webshell-rare-put-or-post-db662e49-6e34-4d10-9d3c-5d04b5479658-85d9b33d.md) | Medium | Persistence | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_agg_CL`](../tables/corelight-v3-http-agg-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |
| [Corelight - SMTP Email containing NON Ascii Characters within the Subject](../content/corelight-corelight-smtp-email-containing-non-ascii-characters-within-the-subject-50c61708-9824-46f3-87cf-22490796fae2-fc7b03e6.md) | Low | InitialAccess | [`Corelight_v3_smtp_CL`](../tables/corelight-v3-smtp-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Corelight - Abnormal Email Subject](../content/corelight-corelight-abnormal-email-subject-e9441d57-39f4-41fb-aaad-d02e47783d1a-637876de.md) | InitialAccess | [`Corelight_v3_smtp_CL`](../tables/corelight-v3-smtp-cl.md) |
| [Corelight - Compressed Files Transferred over HTTP](../content/corelight-corelight-compressed-files-transferred-over-http-f37e076e-69f6-4fcf-81dc-ca2bc5929eb5-09dc7d94.md) | Exfiltration | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |
| [Corelight - External Facing Services](../content/corelight-corelight-external-facing-services-3e42a796-9a4c-4ebf-a0e0-5282947986b5-c93e035f.md) | InitialAccess | [`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md)<br>[`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md)<br>[`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md) |
| [Corelight - File uploads by source](../content/corelight-corelight-file-uploads-by-source-887e648f-32d7-4803-8cd4-2ceef7995872-c9abbff0.md) | Exfiltration | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |
| [Corelight - Files in logs](../content/corelight-corelight-files-in-logs-0c3ad86f-6b92-4ff5-8d41-86ff7e01d518-360eb7b5.md) | InitialAccess, Exfiltration | [`Corelight_v3_files_CL`](../tables/corelight-v3-files-cl.md)<br>[`Corelight_v3_files_red_CL`](../tables/corelight-v3-files-red-cl.md) |
| [Corelight - Multiple Remote SMB Connections from single client](../content/corelight-corelight-multiple-remote-smb-connections-from-single-client-69736969-6ae0-48cd-a05a-743f7372ee84-4142e974.md) | Discovery | [`Corelight_v3_smb_mapping_CL`](../tables/corelight-v3-smb-mapping-cl.md) |
| [Corelight - Obfuscated binary filenames](../content/corelight-corelight-obfuscated-binary-filenames-a518ea0c-f87a-4a79-8f45-2b5b6f44bd7f-faf14a09.md) | InitialAccess | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |
| [Corelight - Rare PUT or POST](../content/corelight-corelight-rare-put-or-post-9aab6aac-6dad-4749-b8cf-46840b6d978f-dfc675f6.md) | Persistence | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |
| [Corelight - Repetitive DNS Failures](../content/corelight-corelight-repetitive-dns-failures-1ea3a384-77a4-4b0d-8e42-74d26b38ab5b-eef9a7ed.md) | CommandAndControl | [`Corelight_v3_dns_CL`](../tables/corelight-v3-dns-cl.md)<br>[`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md) |
| [Corelight - Top sources of data transferred](../content/corelight-corelight-top-sources-of-data-transferred-c5f3974b-f411-4a06-a3f8-ee14fcadd0e1-363c440b.md) | Exfiltration | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Corelight](../content/corelight-corelight-90dad195.md) | [`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md)<br>[`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md)<br>[`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md)<br>[`Corelight_v3_dns_CL`](../tables/corelight-v3-dns-cl.md)<br>[`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md)<br>[`Corelight_v3_etc_viz_CL`](../tables/corelight-v3-etc-viz-cl.md)<br>[`Corelight_v3_files_CL`](../tables/corelight-v3-files-cl.md)<br>[`Corelight_v3_files_red_CL`](../tables/corelight-v3-files-red-cl.md)<br>[`Corelight_v3_ftp_CL`](../tables/corelight-v3-ftp-cl.md)<br>[`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md)<br>[`Corelight_v3_intel_CL`](../tables/corelight-v3-intel-cl.md)<br>[`Corelight_v3_notice_CL`](../tables/corelight-v3-notice-cl.md)<br>[`Corelight_v3_rdp_CL`](../tables/corelight-v3-rdp-cl.md)<br>[`Corelight_v3_smb_files_CL`](../tables/corelight-v3-smb-files-cl.md)<br>[`Corelight_v3_smb_mapping_CL`](../tables/corelight-v3-smb-mapping-cl.md)<br>[`Corelight_v3_ssl_CL`](../tables/corelight-v3-ssl-cl.md)<br>[`Corelight_v3_ssl_red_CL`](../tables/corelight-v3-ssl-red-cl.md)<br>[`Corelight_v3_suricata_corelight_CL`](../tables/corelight-v3-suricata-corelight-cl.md)<br>[`Corelight_v3_vpn_CL`](../tables/corelight-v3-vpn-cl.md)<br>[`Corelight_v3_x509_CL`](../tables/corelight-v3-x509-cl.md)<br>[`Corelight_v3_x509_red_CL`](../tables/corelight-v3-x509-red-cl.md) |
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) | [`Corelight_v3_asset_classification_CL`](../tables/corelight-v3-asset-classification-cl.md)<br>[`Corelight_v3_bacnet_CL`](../tables/corelight-v3-bacnet-cl.md)<br>[`Corelight_v3_capture_loss_CL`](../tables/corelight-v3-capture-loss-cl.md)<br>[`Corelight_v3_cip_CL`](../tables/corelight-v3-cip-cl.md)<br>[`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md)<br>[`Corelight_v3_conn_agg_CL`](../tables/corelight-v3-conn-agg-cl.md)<br>[`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md)<br>[`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md)<br>[`Corelight_v3_corelight_burst_CL`](../tables/corelight-v3-corelight-burst-cl.md)<br>[`Corelight_v3_corelight_overall_capture_loss_CL`](../tables/corelight-v3-corelight-overall-capture-loss-cl.md)<br>[`Corelight_v3_corelight_profiling_CL`](../tables/corelight-v3-corelight-profiling-cl.md)<br>[`Corelight_v3_datared_CL`](../tables/corelight-v3-datared-cl.md)<br>[`Corelight_v3_dce_rpc_CL`](../tables/corelight-v3-dce-rpc-cl.md)<br>[`Corelight_v3_dga_CL`](../tables/corelight-v3-dga-cl.md)<br>[`Corelight_v3_dhcp_CL`](../tables/corelight-v3-dhcp-cl.md)<br>[`Corelight_v3_dnp3_CL`](../tables/corelight-v3-dnp3-cl.md)<br>[`Corelight_v3_dns_CL`](../tables/corelight-v3-dns-cl.md)<br>[`Corelight_v3_dns_agg_CL`](../tables/corelight-v3-dns-agg-cl.md)<br>[`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md)<br>[`Corelight_v3_dpd_CL`](../tables/corelight-v3-dpd-cl.md)<br>[`Corelight_v3_encrypted_dns_CL`](../tables/corelight-v3-encrypted-dns-cl.md)<br>[`Corelight_v3_enip_CL`](../tables/corelight-v3-enip-cl.md)<br>[`Corelight_v3_enip_debug_CL`](../tables/corelight-v3-enip-debug-cl.md)<br>[`Corelight_v3_enip_list_identity_CL`](../tables/corelight-v3-enip-list-identity-cl.md)<br>[`Corelight_v3_etc_viz_CL`](../tables/corelight-v3-etc-viz-cl.md)<br>[`Corelight_v3_files_CL`](../tables/corelight-v3-files-cl.md)<br>[`Corelight_v3_files_agg_CL`](../tables/corelight-v3-files-agg-cl.md)<br>[`Corelight_v3_files_red_CL`](../tables/corelight-v3-files-red-cl.md)<br>[`Corelight_v3_ftp_CL`](../tables/corelight-v3-ftp-cl.md)<br>[`Corelight_v3_generic_dns_tunnels_CL`](../tables/corelight-v3-generic-dns-tunnels-cl.md)<br>[`Corelight_v3_generic_icmp_tunnels_CL`](../tables/corelight-v3-generic-icmp-tunnels-cl.md)<br>[`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_agg_CL`](../tables/corelight-v3-http-agg-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md)<br>[`Corelight_v3_icmp_specific_tunnels_CL`](../tables/corelight-v3-icmp-specific-tunnels-cl.md)<br>[`Corelight_v3_intel_CL`](../tables/corelight-v3-intel-cl.md)<br>[`Corelight_v3_ipsec_CL`](../tables/corelight-v3-ipsec-cl.md)<br>[`Corelight_v3_irc_CL`](../tables/corelight-v3-irc-cl.md)<br>[`Corelight_v3_iso_cotp_CL`](../tables/corelight-v3-iso-cotp-cl.md)<br>[`Corelight_v3_kerberos_CL`](../tables/corelight-v3-kerberos-cl.md)<br>[`Corelight_v3_known_certs_CL`](../tables/corelight-v3-known-certs-cl.md)<br>[`Corelight_v3_known_devices_CL`](../tables/corelight-v3-known-devices-cl.md)<br>[`Corelight_v3_known_domains_CL`](../tables/corelight-v3-known-domains-cl.md)<br>[`Corelight_v3_known_hosts_CL`](../tables/corelight-v3-known-hosts-cl.md)<br>[`Corelight_v3_known_names_CL`](../tables/corelight-v3-known-names-cl.md)<br>[`Corelight_v3_known_remotes_CL`](../tables/corelight-v3-known-remotes-cl.md)<br>[`Corelight_v3_known_services_CL`](../tables/corelight-v3-known-services-cl.md)<br>[`Corelight_v3_known_users_CL`](../tables/corelight-v3-known-users-cl.md)<br>[`Corelight_v3_local_subnets_CL`](../tables/corelight-v3-local-subnets-cl.md)<br>[`Corelight_v3_local_subnets_dj_CL`](../tables/corelight-v3-local-subnets-dj-cl.md)<br>[`Corelight_v3_local_subnets_graphs_CL`](../tables/corelight-v3-local-subnets-graphs-cl.md)<br>[`Corelight_v3_log4shell_CL`](../tables/corelight-v3-log4shell-cl.md)<br>[`Corelight_v3_modbus_CL`](../tables/corelight-v3-modbus-cl.md)<br>[`Corelight_v3_mqtt_connect_CL`](../tables/corelight-v3-mqtt-connect-cl.md)<br>[`Corelight_v3_mqtt_publish_CL`](../tables/corelight-v3-mqtt-publish-cl.md)<br>[`Corelight_v3_mqtt_subscribe_CL`](../tables/corelight-v3-mqtt-subscribe-cl.md)<br>[`Corelight_v3_mysql_CL`](../tables/corelight-v3-mysql-cl.md)<br>[`Corelight_v3_notice_CL`](../tables/corelight-v3-notice-cl.md)<br>[`Corelight_v3_ntlm_CL`](../tables/corelight-v3-ntlm-cl.md)<br>[`Corelight_v3_ntp_CL`](../tables/corelight-v3-ntp-cl.md)<br>[`Corelight_v3_ocsp_CL`](../tables/corelight-v3-ocsp-cl.md)<br>[`Corelight_v3_openflow_CL`](../tables/corelight-v3-openflow-cl.md)<br>[`Corelight_v3_packet_filter_CL`](../tables/corelight-v3-packet-filter-cl.md)<br>[`Corelight_v3_pe_CL`](../tables/corelight-v3-pe-cl.md)<br>[`Corelight_v3_profinet_CL`](../tables/corelight-v3-profinet-cl.md)<br>[`Corelight_v3_profinet_dce_rpc_CL`](../tables/corelight-v3-profinet-dce-rpc-cl.md)<br>[`Corelight_v3_profinet_debug_CL`](../tables/corelight-v3-profinet-debug-cl.md)<br>[`Corelight_v3_radius_CL`](../tables/corelight-v3-radius-cl.md)<br>[`Corelight_v3_rdp_CL`](../tables/corelight-v3-rdp-cl.md)<br>[`Corelight_v3_reporter_CL`](../tables/corelight-v3-reporter-cl.md)<br>[`Corelight_v3_rfb_CL`](../tables/corelight-v3-rfb-cl.md)<br>[`Corelight_v3_s7comm_CL`](../tables/corelight-v3-s7comm-cl.md)<br>[`Corelight_v3_signatures_CL`](../tables/corelight-v3-signatures-cl.md)<br>[`Corelight_v3_sip_CL`](../tables/corelight-v3-sip-cl.md)<br>[`Corelight_v3_smartpcap_CL`](../tables/corelight-v3-smartpcap-cl.md)<br>[`Corelight_v3_smartpcap_stats_CL`](../tables/corelight-v3-smartpcap-stats-cl.md)<br>[`Corelight_v3_smb_files_CL`](../tables/corelight-v3-smb-files-cl.md)<br>[`Corelight_v3_smb_mapping_CL`](../tables/corelight-v3-smb-mapping-cl.md)<br>[`Corelight_v3_smtp_CL`](../tables/corelight-v3-smtp-cl.md)<br>[`Corelight_v3_smtp_links_CL`](../tables/corelight-v3-smtp-links-cl.md)<br>[`Corelight_v3_snmp_CL`](../tables/corelight-v3-snmp-cl.md)<br>[`Corelight_v3_socks_CL`](../tables/corelight-v3-socks-cl.md)<br>[`Corelight_v3_software_CL`](../tables/corelight-v3-software-cl.md)<br>[`Corelight_v3_specific_dns_tunnels_CL`](../tables/corelight-v3-specific-dns-tunnels-cl.md)<br>[`Corelight_v3_ssh_CL`](../tables/corelight-v3-ssh-cl.md)<br>[`Corelight_v3_ssl_CL`](../tables/corelight-v3-ssl-cl.md)<br>[`Corelight_v3_ssl_agg_CL`](../tables/corelight-v3-ssl-agg-cl.md)<br>[`Corelight_v3_ssl_red_CL`](../tables/corelight-v3-ssl-red-cl.md)<br>[`Corelight_v3_stats_CL`](../tables/corelight-v3-stats-cl.md)<br>[`Corelight_v3_stepping_CL`](../tables/corelight-v3-stepping-cl.md)<br>[`Corelight_v3_stun_CL`](../tables/corelight-v3-stun-cl.md)<br>[`Corelight_v3_stun_nat_CL`](../tables/corelight-v3-stun-nat-cl.md)<br>[`Corelight_v3_suricata_corelight_CL`](../tables/corelight-v3-suricata-corelight-cl.md)<br>[`Corelight_v3_suricata_eve_CL`](../tables/corelight-v3-suricata-eve-cl.md)<br>[`Corelight_v3_suricata_stats_CL`](../tables/corelight-v3-suricata-stats-cl.md)<br>[`Corelight_v3_suricata_zeek_stats_CL`](../tables/corelight-v3-suricata-zeek-stats-cl.md)<br>[`Corelight_v3_syslog_CL`](../tables/corelight-v3-syslog-cl.md)<br>[`Corelight_v3_tds_CL`](../tables/corelight-v3-tds-cl.md)<br>[`Corelight_v3_tds_rpc_CL`](../tables/corelight-v3-tds-rpc-cl.md)<br>[`Corelight_v3_tds_sql_batch_CL`](../tables/corelight-v3-tds-sql-batch-cl.md)<br>[`Corelight_v3_traceroute_CL`](../tables/corelight-v3-traceroute-cl.md)<br>[`Corelight_v3_tunnel_CL`](../tables/corelight-v3-tunnel-cl.md)<br>[`Corelight_v3_unknown_smartpcap_CL`](../tables/corelight-v3-unknown-smartpcap-cl.md)<br>[`Corelight_v3_util_stats_CL`](../tables/corelight-v3-util-stats-cl.md)<br>[`Corelight_v3_vpn_CL`](../tables/corelight-v3-vpn-cl.md)<br>[`Corelight_v3_weird_CL`](../tables/corelight-v3-weird-cl.md)<br>[`Corelight_v3_weird_red_CL`](../tables/corelight-v3-weird-red-cl.md)<br>[`Corelight_v3_weird_stats_CL`](../tables/corelight-v3-weird-stats-cl.md)<br>[`Corelight_v3_wireguard_CL`](../tables/corelight-v3-wireguard-cl.md)<br>[`Corelight_v3_x509_CL`](../tables/corelight-v3-x509-cl.md)<br>[`Corelight_v3_x509_red_CL`](../tables/corelight-v3-x509-red-cl.md)<br>[`Corelight_v3_zeek_doctor_CL`](../tables/corelight-v3-zeek-doctor-cl.md) |
| [Corelight_Data_Insights](../content/corelight-corelight-data-insights-e22362fc.md) | [`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md)<br>[`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md)<br>[`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md)<br>[`Corelight_v3_dns_CL`](../tables/corelight-v3-dns-cl.md)<br>[`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md)<br>[`Corelight_v3_rdp_CL`](../tables/corelight-v3-rdp-cl.md)<br>[`Corelight_v3_ssh_CL`](../tables/corelight-v3-ssh-cl.md)<br>[`Corelight_v3_ssl_CL`](../tables/corelight-v3-ssl-cl.md)<br>[`Corelight_v3_ssl_red_CL`](../tables/corelight-v3-ssl-red-cl.md)<br>[`Corelight_v3_vpn_CL`](../tables/corelight-v3-vpn-cl.md)<br>[`Corelight_v3_x509_CL`](../tables/corelight-v3-x509-cl.md)<br>[`Corelight_v3_x509_red_CL`](../tables/corelight-v3-x509-red-cl.md) |
| [Corelight_Operations](../content/corelight-corelight-operations-90113242.md) | [`Corelight_v3_corelight_metrics_disk_CL`](../tables/corelight-v3-corelight-metrics-disk-cl.md)<br>[`Corelight_v3_corelight_metrics_iface_CL`](../tables/corelight-v3-corelight-metrics-iface-cl.md)<br>[`Corelight_v3_corelight_metrics_memory_CL`](../tables/corelight-v3-corelight-metrics-memory-cl.md)<br>[`Corelight_v3_corelight_metrics_system_CL`](../tables/corelight-v3-corelight-metrics-system-cl.md)<br>[`Corelight_v3_corelight_metrics_zeek_doctor_CL`](../tables/corelight-v3-corelight-metrics-zeek-doctor-cl.md)<br>[`Usage`](../tables/usage.md) |
| [Corelight_Security_Workflow](../content/corelight-corelight-security-workflow-7c756761.md) | [`Corelight_v3_bacnet_CL`](../tables/corelight-v3-bacnet-cl.md)<br>[`Corelight_v3_capture_loss_CL`](../tables/corelight-v3-capture-loss-cl.md)<br>[`Corelight_v3_cip_CL`](../tables/corelight-v3-cip-cl.md)<br>[`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md)<br>[`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md)<br>[`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md)<br>[`Corelight_v3_corelight_burst_CL`](../tables/corelight-v3-corelight-burst-cl.md)<br>[`Corelight_v3_corelight_overall_capture_loss_CL`](../tables/corelight-v3-corelight-overall-capture-loss-cl.md)<br>[`Corelight_v3_corelight_profiling_CL`](../tables/corelight-v3-corelight-profiling-cl.md)<br>[`Corelight_v3_datared_CL`](../tables/corelight-v3-datared-cl.md)<br>[`Corelight_v3_dce_rpc_CL`](../tables/corelight-v3-dce-rpc-cl.md)<br>[`Corelight_v3_dga_CL`](../tables/corelight-v3-dga-cl.md)<br>[`Corelight_v3_dhcp_CL`](../tables/corelight-v3-dhcp-cl.md)<br>[`Corelight_v3_dnp3_CL`](../tables/corelight-v3-dnp3-cl.md)<br>[`Corelight_v3_dns_CL`](../tables/corelight-v3-dns-cl.md)<br>[`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md)<br>[`Corelight_v3_dpd_CL`](../tables/corelight-v3-dpd-cl.md)<br>[`Corelight_v3_encrypted_dns_CL`](../tables/corelight-v3-encrypted-dns-cl.md)<br>[`Corelight_v3_enip_CL`](../tables/corelight-v3-enip-cl.md)<br>[`Corelight_v3_enip_debug_CL`](../tables/corelight-v3-enip-debug-cl.md)<br>[`Corelight_v3_enip_list_identity_CL`](../tables/corelight-v3-enip-list-identity-cl.md)<br>[`Corelight_v3_etc_viz_CL`](../tables/corelight-v3-etc-viz-cl.md)<br>[`Corelight_v3_files_CL`](../tables/corelight-v3-files-cl.md)<br>[`Corelight_v3_files_red_CL`](../tables/corelight-v3-files-red-cl.md)<br>[`Corelight_v3_ftp_CL`](../tables/corelight-v3-ftp-cl.md)<br>[`Corelight_v3_generic_dns_tunnels_CL`](../tables/corelight-v3-generic-dns-tunnels-cl.md)<br>[`Corelight_v3_generic_icmp_tunnels_CL`](../tables/corelight-v3-generic-icmp-tunnels-cl.md)<br>[`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md)<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md)<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md)<br>[`Corelight_v3_icmp_specific_tunnels_CL`](../tables/corelight-v3-icmp-specific-tunnels-cl.md)<br>[`Corelight_v3_intel_CL`](../tables/corelight-v3-intel-cl.md)<br>[`Corelight_v3_ipsec_CL`](../tables/corelight-v3-ipsec-cl.md)<br>[`Corelight_v3_irc_CL`](../tables/corelight-v3-irc-cl.md)<br>[`Corelight_v3_iso_cotp_CL`](../tables/corelight-v3-iso-cotp-cl.md)<br>[`Corelight_v3_kerberos_CL`](../tables/corelight-v3-kerberos-cl.md)<br>[`Corelight_v3_known_certs_CL`](../tables/corelight-v3-known-certs-cl.md)<br>[`Corelight_v3_known_devices_CL`](../tables/corelight-v3-known-devices-cl.md)<br>[`Corelight_v3_known_domains_CL`](../tables/corelight-v3-known-domains-cl.md)<br>[`Corelight_v3_known_hosts_CL`](../tables/corelight-v3-known-hosts-cl.md)<br>[`Corelight_v3_known_names_CL`](../tables/corelight-v3-known-names-cl.md)<br>[`Corelight_v3_known_remotes_CL`](../tables/corelight-v3-known-remotes-cl.md)<br>[`Corelight_v3_known_services_CL`](../tables/corelight-v3-known-services-cl.md)<br>[`Corelight_v3_known_users_CL`](../tables/corelight-v3-known-users-cl.md)<br>[`Corelight_v3_local_subnets_CL`](../tables/corelight-v3-local-subnets-cl.md)<br>[`Corelight_v3_local_subnets_dj_CL`](../tables/corelight-v3-local-subnets-dj-cl.md)<br>[`Corelight_v3_local_subnets_graphs_CL`](../tables/corelight-v3-local-subnets-graphs-cl.md)<br>[`Corelight_v3_log4shell_CL`](../tables/corelight-v3-log4shell-cl.md)<br>[`Corelight_v3_modbus_CL`](../tables/corelight-v3-modbus-cl.md)<br>[`Corelight_v3_mqtt_connect_CL`](../tables/corelight-v3-mqtt-connect-cl.md)<br>[`Corelight_v3_mqtt_publish_CL`](../tables/corelight-v3-mqtt-publish-cl.md)<br>[`Corelight_v3_mqtt_subscribe_CL`](../tables/corelight-v3-mqtt-subscribe-cl.md)<br>[`Corelight_v3_mysql_CL`](../tables/corelight-v3-mysql-cl.md)<br>[`Corelight_v3_notice_CL`](../tables/corelight-v3-notice-cl.md)<br>[`Corelight_v3_ntlm_CL`](../tables/corelight-v3-ntlm-cl.md)<br>[`Corelight_v3_ntp_CL`](../tables/corelight-v3-ntp-cl.md)<br>[`Corelight_v3_ocsp_CL`](../tables/corelight-v3-ocsp-cl.md)<br>[`Corelight_v3_openflow_CL`](../tables/corelight-v3-openflow-cl.md)<br>[`Corelight_v3_packet_filter_CL`](../tables/corelight-v3-packet-filter-cl.md)<br>[`Corelight_v3_pe_CL`](../tables/corelight-v3-pe-cl.md)<br>[`Corelight_v3_profinet_CL`](../tables/corelight-v3-profinet-cl.md)<br>[`Corelight_v3_profinet_dce_rpc_CL`](../tables/corelight-v3-profinet-dce-rpc-cl.md)<br>[`Corelight_v3_profinet_debug_CL`](../tables/corelight-v3-profinet-debug-cl.md)<br>[`Corelight_v3_radius_CL`](../tables/corelight-v3-radius-cl.md)<br>[`Corelight_v3_rdp_CL`](../tables/corelight-v3-rdp-cl.md)<br>[`Corelight_v3_reporter_CL`](../tables/corelight-v3-reporter-cl.md)<br>[`Corelight_v3_rfb_CL`](../tables/corelight-v3-rfb-cl.md)<br>[`Corelight_v3_s7comm_CL`](../tables/corelight-v3-s7comm-cl.md)<br>[`Corelight_v3_signatures_CL`](../tables/corelight-v3-signatures-cl.md)<br>[`Corelight_v3_sip_CL`](../tables/corelight-v3-sip-cl.md)<br>[`Corelight_v3_smartpcap_CL`](../tables/corelight-v3-smartpcap-cl.md)<br>[`Corelight_v3_smartpcap_stats_CL`](../tables/corelight-v3-smartpcap-stats-cl.md)<br>[`Corelight_v3_smb_files_CL`](../tables/corelight-v3-smb-files-cl.md)<br>[`Corelight_v3_smb_mapping_CL`](../tables/corelight-v3-smb-mapping-cl.md)<br>[`Corelight_v3_smtp_CL`](../tables/corelight-v3-smtp-cl.md)<br>[`Corelight_v3_smtp_links_CL`](../tables/corelight-v3-smtp-links-cl.md)<br>[`Corelight_v3_snmp_CL`](../tables/corelight-v3-snmp-cl.md)<br>[`Corelight_v3_socks_CL`](../tables/corelight-v3-socks-cl.md)<br>[`Corelight_v3_software_CL`](../tables/corelight-v3-software-cl.md)<br>[`Corelight_v3_specific_dns_tunnels_CL`](../tables/corelight-v3-specific-dns-tunnels-cl.md)<br>[`Corelight_v3_ssh_CL`](../tables/corelight-v3-ssh-cl.md)<br>[`Corelight_v3_ssl_CL`](../tables/corelight-v3-ssl-cl.md)<br>[`Corelight_v3_ssl_red_CL`](../tables/corelight-v3-ssl-red-cl.md)<br>[`Corelight_v3_stats_CL`](../tables/corelight-v3-stats-cl.md)<br>[`Corelight_v3_stepping_CL`](../tables/corelight-v3-stepping-cl.md)<br>[`Corelight_v3_stun_CL`](../tables/corelight-v3-stun-cl.md)<br>[`Corelight_v3_stun_nat_CL`](../tables/corelight-v3-stun-nat-cl.md)<br>[`Corelight_v3_suricata_corelight_CL`](../tables/corelight-v3-suricata-corelight-cl.md)<br>[`Corelight_v3_suricata_eve_CL`](../tables/corelight-v3-suricata-eve-cl.md)<br>[`Corelight_v3_suricata_stats_CL`](../tables/corelight-v3-suricata-stats-cl.md)<br>[`Corelight_v3_suricata_zeek_stats_CL`](../tables/corelight-v3-suricata-zeek-stats-cl.md)<br>[`Corelight_v3_syslog_CL`](../tables/corelight-v3-syslog-cl.md)<br>[`Corelight_v3_tds_CL`](../tables/corelight-v3-tds-cl.md)<br>[`Corelight_v3_tds_rpc_CL`](../tables/corelight-v3-tds-rpc-cl.md)<br>[`Corelight_v3_tds_sql_batch_CL`](../tables/corelight-v3-tds-sql-batch-cl.md)<br>[`Corelight_v3_traceroute_CL`](../tables/corelight-v3-traceroute-cl.md)<br>[`Corelight_v3_tunnel_CL`](../tables/corelight-v3-tunnel-cl.md)<br>[`Corelight_v3_unknown_smartpcap_CL`](../tables/corelight-v3-unknown-smartpcap-cl.md)<br>[`Corelight_v3_util_stats_CL`](../tables/corelight-v3-util-stats-cl.md)<br>[`Corelight_v3_vpn_CL`](../tables/corelight-v3-vpn-cl.md)<br>[`Corelight_v3_weird_CL`](../tables/corelight-v3-weird-cl.md)<br>[`Corelight_v3_weird_red_CL`](../tables/corelight-v3-weird-red-cl.md)<br>[`Corelight_v3_weird_stats_CL`](../tables/corelight-v3-weird-stats-cl.md)<br>[`Corelight_v3_wireguard_CL`](../tables/corelight-v3-wireguard-cl.md)<br>[`Corelight_v3_x509_CL`](../tables/corelight-v3-x509-cl.md)<br>[`Corelight_v3_x509_red_CL`](../tables/corelight-v3-x509-red-cl.md)<br>[`Corelight_v3_zeek_doctor_CL`](../tables/corelight-v3-zeek-doctor-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Corelight](../parsers/corelight.md) | - | - |
| [corelight_amqp](../parsers/corelight-amqp.md) | - | [`Corelight_v3_amqp_CL`](../tables/corelight-v3-amqp-cl.md) *(read)* |
| [corelight_analyzer](../parsers/corelight-analyzer.md) | - | [`Corelight_v3_analyzer_CL`](../tables/corelight-v3-analyzer-cl.md) *(read)* |
| [corelight_anomaly](../parsers/corelight-anomaly.md) | - | [`Corelight_v3_anomaly_CL`](../tables/corelight-v3-anomaly-cl.md) *(read)* |
| [corelight_asset_classification](../parsers/corelight-asset-classification.md) | - | [`Corelight_v3_asset_classification_CL`](../tables/corelight-v3-asset-classification-cl.md) *(read)* |
| [corelight_bacnet](../parsers/corelight-bacnet.md) | - | [`Corelight_v3_bacnet_CL`](../tables/corelight-v3-bacnet-cl.md) *(read)* |
| [corelight_bacnet_device_control](../parsers/corelight-bacnet-device-control.md) | - | [`Corelight_v3_bacnet_device_control_CL`](../tables/corelight-v3-bacnet-device-control-cl.md) *(read)* |
| [corelight_bacnet_discovery](../parsers/corelight-bacnet-discovery.md) | - | [`Corelight_v3_bacnet_discovery_CL`](../tables/corelight-v3-bacnet-discovery-cl.md) *(read)* |
| [corelight_bacnet_property](../parsers/corelight-bacnet-property.md) | - | [`Corelight_v3_bacnet_property_CL`](../tables/corelight-v3-bacnet-property-cl.md) *(read)* |
| [corelight_broker](../parsers/corelight-broker.md) | - | [`Corelight_v3_broker_CL`](../tables/corelight-v3-broker-cl.md) *(read)* |
| [corelight_bsap_ip_header](../parsers/corelight-bsap-ip-header.md) | - | [`Corelight_v3_bsap_ip_header_CL`](../tables/corelight-v3-bsap-ip-header-cl.md) *(read)* |
| [corelight_bsap_ip_rdb](../parsers/corelight-bsap-ip-rdb.md) | - | [`Corelight_v3_bsap_ip_rdb_CL`](../tables/corelight-v3-bsap-ip-rdb-cl.md) *(read)* |
| [corelight_bsap_ip_unknown](../parsers/corelight-bsap-ip-unknown.md) | - | [`Corelight_v3_bsap_ip_unknown_CL`](../tables/corelight-v3-bsap-ip-unknown-cl.md) *(read)* |
| [corelight_bsap_serial_header](../parsers/corelight-bsap-serial-header.md) | - | [`Corelight_v3_bsap_serial_header_CL`](../tables/corelight-v3-bsap-serial-header-cl.md) *(read)* |
| [corelight_bsap_serial_rdb](../parsers/corelight-bsap-serial-rdb.md) | - | [`Corelight_v3_bsap_serial_rdb_CL`](../tables/corelight-v3-bsap-serial-rdb-cl.md) *(read)* |
| [corelight_bsap_serial_rdb_ext](../parsers/corelight-bsap-serial-rdb-ext.md) | - | [`Corelight_v3_bsap_serial_rdb_ext_CL`](../tables/corelight-v3-bsap-serial-rdb-ext-cl.md) *(read)* |
| [corelight_bsap_serial_unknown](../parsers/corelight-bsap-serial-unknown.md) | - | [`Corelight_v3_bsap_serial_unknown_CL`](../tables/corelight-v3-bsap-serial-unknown-cl.md) *(read)* |
| [corelight_capture_loss](../parsers/corelight-capture-loss.md) | - | [`Corelight_v3_capture_loss_CL`](../tables/corelight-v3-capture-loss-cl.md) *(read)* |
| [corelight_cip](../parsers/corelight-cip.md) | - | [`Corelight_v3_cip_CL`](../tables/corelight-v3-cip-cl.md) *(read)* |
| [corelight_cip_identity](../parsers/corelight-cip-identity.md) | - | [`Corelight_v3_cip_identity_CL`](../tables/corelight-v3-cip-identity-cl.md) *(read)* |
| [corelight_cip_io](../parsers/corelight-cip-io.md) | - | [`Corelight_v3_cip_io_CL`](../tables/corelight-v3-cip-io-cl.md) *(read)* |
| [corelight_cluster](../parsers/corelight-cluster.md) | - | [`Corelight_v3_cluster_CL`](../tables/corelight-v3-cluster-cl.md) *(read)* |
| [corelight_config](../parsers/corelight-config.md) | - | [`Corelight_v3_config_CL`](../tables/corelight-v3-config-cl.md) *(read)* |
| [corelight_conn](../parsers/corelight-conn.md) | - | [`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md) *(read)*<br>[`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md) *(read)*<br>[`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md) *(read)* |
| [corelight_conn_agg](../parsers/corelight-conn-agg.md) | - | [`Corelight_v3_conn_agg_CL`](../tables/corelight-v3-conn-agg-cl.md) *(read)* |
| [corelight_conn_long](../parsers/corelight-conn-long.md) | - | [`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md) *(read)* |
| [corelight_conn_red](../parsers/corelight-conn-red.md) | - | [`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md) *(read)* |
| [corelight_corelight_ad_admin_shares](../parsers/corelight-corelight-ad-admin-shares.md) | - | [`Corelight_v3_corelight_ad_admin_shares_CL`](../tables/corelight-v3-corelight-ad-admin-shares-cl.md) *(read)* |
| [corelight_corelight_ad_ew_servers_services](../parsers/corelight-corelight-ad-ew-servers-services.md) | - | [`Corelight_v3_corelight_ad_ew_servers_services_CL`](../tables/corelight-v3-corelight-ad-ew-servers-services-cl.md) *(read)* |
| [corelight_corelight_ad_exe_files](../parsers/corelight-corelight-ad-exe-files.md) | - | [`Corelight_v3_corelight_ad_exe_files_CL`](../tables/corelight-v3-corelight-ad-exe-files-cl.md) *(read)* |
| [corelight_corelight_ad_ftp_connections](../parsers/corelight-corelight-ad-ftp-connections.md) | - | [`Corelight_v3_corelight_ad_ftp_connections_CL`](../tables/corelight-v3-corelight-ad-ftp-connections-cl.md) *(read)* |
| [corelight_corelight_ad_http_user_agents](../parsers/corelight-corelight-ad-http-user-agents.md) | - | [`Corelight_v3_corelight_ad_http_user_agents_CL`](../tables/corelight-v3-corelight-ad-http-user-agents-cl.md) *(read)* |
| [corelight_corelight_ad_ns_servers_services](../parsers/corelight-corelight-ad-ns-servers-services.md) | - | [`Corelight_v3_corelight_ad_ns_servers_services_CL`](../tables/corelight-v3-corelight-ad-ns-servers-services-cl.md) *(read)* |
| [corelight_corelight_ad_ntlm_auth](../parsers/corelight-corelight-ad-ntlm-auth.md) | - | [`Corelight_v3_corelight_ad_ntlm_auth_CL`](../tables/corelight-v3-corelight-ad-ntlm-auth-cl.md) *(read)* |
| [corelight_corelight_ad_rdp](../parsers/corelight-corelight-ad-rdp.md) | - | [`Corelight_v3_corelight_ad_rdp_CL`](../tables/corelight-v3-corelight-ad-rdp-cl.md) *(read)* |
| [corelight_corelight_ad_ssh_clients](../parsers/corelight-corelight-ad-ssh-clients.md) | - | [`Corelight_v3_corelight_ad_ssh_clients_CL`](../tables/corelight-v3-corelight-ad-ssh-clients-cl.md) *(read)* |
| [corelight_corelight_ad_ssh_connections](../parsers/corelight-corelight-ad-ssh-connections.md) | - | [`Corelight_v3_corelight_ad_ssh_connections_CL`](../tables/corelight-v3-corelight-ad-ssh-connections-cl.md) *(read)* |
| [corelight_corelight_burst](../parsers/corelight-corelight-burst.md) | - | [`Corelight_v3_corelight_burst_CL`](../tables/corelight-v3-corelight-burst-cl.md) *(read)* |
| [corelight_corelight_license_capacity](../parsers/corelight-corelight-license-capacity.md) | - | [`Corelight_v3_corelight_license_capacity_CL`](../tables/corelight-v3-corelight-license-capacity-cl.md) *(read)* |
| [corelight_corelight_metrics_disk](../parsers/corelight-corelight-metrics-disk.md) | - | [`Corelight_v3_corelight_metrics_disk_CL`](../tables/corelight-v3-corelight-metrics-disk-cl.md) *(read)* |
| [corelight_corelight_metrics_iface](../parsers/corelight-corelight-metrics-iface.md) | - | [`Corelight_v3_corelight_metrics_iface_CL`](../tables/corelight-v3-corelight-metrics-iface-cl.md) *(read)* |
| [corelight_corelight_metrics_memory](../parsers/corelight-corelight-metrics-memory.md) | - | [`Corelight_v3_corelight_metrics_memory_CL`](../tables/corelight-v3-corelight-metrics-memory-cl.md) *(read)* |
| [corelight_corelight_metrics_system](../parsers/corelight-corelight-metrics-system.md) | - | [`Corelight_v3_corelight_metrics_system_CL`](../tables/corelight-v3-corelight-metrics-system-cl.md) *(read)* |
| [corelight_corelight_metrics_zeek_doctor](../parsers/corelight-corelight-metrics-zeek-doctor.md) | - | [`Corelight_v3_corelight_metrics_zeek_doctor_CL`](../tables/corelight-v3-corelight-metrics-zeek-doctor-cl.md) *(read)* |
| [corelight_corelight_overall_capture_loss](../parsers/corelight-corelight-overall-capture-loss.md) | - | [`Corelight_v3_corelight_overall_capture_loss_CL`](../tables/corelight-v3-corelight-overall-capture-loss-cl.md) *(read)* |
| [corelight_corelight_pipeline_test](../parsers/corelight-corelight-pipeline-test.md) | - | [`Corelight_v3_corelight_pipeline_test_CL`](../tables/corelight-v3-corelight-pipeline-test-cl.md) *(read)* |
| [corelight_corelight_profiling](../parsers/corelight-corelight-profiling.md) | - | [`Corelight_v3_corelight_profiling_CL`](../tables/corelight-v3-corelight-profiling-cl.md) *(read)* |
| [corelight_datared](../parsers/corelight-datared.md) | - | [`Corelight_v3_datared_CL`](../tables/corelight-v3-datared-cl.md) *(read)* |
| [corelight_dce_rpc](../parsers/corelight-dce-rpc.md) | - | [`Corelight_v3_dce_rpc_CL`](../tables/corelight-v3-dce-rpc-cl.md) *(read)* |
| [corelight_dga](../parsers/corelight-dga.md) | - | [`Corelight_v3_dga_CL`](../tables/corelight-v3-dga-cl.md) *(read)* |
| [corelight_dhcp](../parsers/corelight-dhcp.md) | - | [`Corelight_v3_dhcp_CL`](../tables/corelight-v3-dhcp-cl.md) *(read)* |
| [corelight_dnp3](../parsers/corelight-dnp3.md) | - | [`Corelight_v3_dnp3_CL`](../tables/corelight-v3-dnp3-cl.md) *(read)* |
| [corelight_dnp3_control](../parsers/corelight-dnp3-control.md) | - | [`Corelight_v3_dnp3_control_CL`](../tables/corelight-v3-dnp3-control-cl.md) *(read)* |
| [corelight_dnp3_objects](../parsers/corelight-dnp3-objects.md) | - | [`Corelight_v3_dnp3_objects_CL`](../tables/corelight-v3-dnp3-objects-cl.md) *(read)* |
| [corelight_dns](../parsers/corelight-dns.md) | - | [`Corelight_v3_dns_CL`](../tables/corelight-v3-dns-cl.md) *(read)*<br>[`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md) *(read)* |
| [corelight_dns_agg](../parsers/corelight-dns-agg.md) | - | [`Corelight_v3_dns_agg_CL`](../tables/corelight-v3-dns-agg-cl.md) *(read)* |
| [corelight_dns_red](../parsers/corelight-dns-red.md) | - | [`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md) *(read)* |
| [corelight_dpd](../parsers/corelight-dpd.md) | - | [`Corelight_v3_dpd_CL`](../tables/corelight-v3-dpd-cl.md) *(read)* |
| [corelight_ecat_aoe_info](../parsers/corelight-ecat-aoe-info.md) | - | [`Corelight_v3_ecat_aoe_info_CL`](../tables/corelight-v3-ecat-aoe-info-cl.md) *(read)* |
| [corelight_ecat_arp_info](../parsers/corelight-ecat-arp-info.md) | - | [`Corelight_v3_ecat_arp_info_CL`](../tables/corelight-v3-ecat-arp-info-cl.md) *(read)* |
| [corelight_ecat_coe_info](../parsers/corelight-ecat-coe-info.md) | - | [`Corelight_v3_ecat_coe_info_CL`](../tables/corelight-v3-ecat-coe-info-cl.md) *(read)* |
| [corelight_ecat_dev_info](../parsers/corelight-ecat-dev-info.md) | - | [`Corelight_v3_ecat_dev_info_CL`](../tables/corelight-v3-ecat-dev-info-cl.md) *(read)* |
| [corelight_ecat_foe_info](../parsers/corelight-ecat-foe-info.md) | - | [`Corelight_v3_ecat_foe_info_CL`](../tables/corelight-v3-ecat-foe-info-cl.md) *(read)* |
| [corelight_ecat_log_address](../parsers/corelight-ecat-log-address.md) | - | [`Corelight_v3_ecat_log_address_CL`](../tables/corelight-v3-ecat-log-address-cl.md) *(read)* |
| [corelight_ecat_registers](../parsers/corelight-ecat-registers.md) | - | [`Corelight_v3_ecat_registers_CL`](../tables/corelight-v3-ecat-registers-cl.md) *(read)* |
| [corelight_ecat_soe_info](../parsers/corelight-ecat-soe-info.md) | - | [`Corelight_v3_ecat_soe_info_CL`](../tables/corelight-v3-ecat-soe-info-cl.md) *(read)* |
| [corelight_encrypted_dns](../parsers/corelight-encrypted-dns.md) | - | [`Corelight_v3_encrypted_dns_CL`](../tables/corelight-v3-encrypted-dns-cl.md) *(read)* |
| [corelight_enip](../parsers/corelight-enip.md) | - | [`Corelight_v3_enip_CL`](../tables/corelight-v3-enip-cl.md) *(read)* |
| [corelight_enip_debug](../parsers/corelight-enip-debug.md) | - | [`Corelight_v3_enip_debug_CL`](../tables/corelight-v3-enip-debug-cl.md) *(read)* |
| [corelight_enip_list_identity](../parsers/corelight-enip-list-identity.md) | - | [`Corelight_v3_enip_list_identity_CL`](../tables/corelight-v3-enip-list-identity-cl.md) *(read)* |
| [corelight_etc_viz](../parsers/corelight-etc-viz.md) | - | [`Corelight_v3_etc_viz_CL`](../tables/corelight-v3-etc-viz-cl.md) *(read)* |
| [corelight_files](../parsers/corelight-files.md) | - | [`Corelight_v3_files_CL`](../tables/corelight-v3-files-cl.md) *(read)*<br>[`Corelight_v3_files_red_CL`](../tables/corelight-v3-files-red-cl.md) *(read)* |
| [corelight_files_agg](../parsers/corelight-files-agg.md) | - | [`Corelight_v3_files_agg_CL`](../tables/corelight-v3-files-agg-cl.md) *(read)* |
| [corelight_files_red](../parsers/corelight-files-red.md) | - | [`Corelight_v3_files_red_CL`](../tables/corelight-v3-files-red-cl.md) *(read)* |
| [corelight_first_seen](../parsers/corelight-first-seen.md) | - | [`Corelight_v3_first_seen_CL`](../tables/corelight-v3-first-seen-cl.md) *(read)* |
| [corelight_ftp](../parsers/corelight-ftp.md) | - | [`Corelight_v3_ftp_CL`](../tables/corelight-v3-ftp-cl.md) *(read)* |
| [corelight_gena](../parsers/corelight-gena.md) | - | [`Corelight_v3_gena_CL`](../tables/corelight-v3-gena-cl.md) *(read)* |
| [corelight_generic_dns_tunnels](../parsers/corelight-generic-dns-tunnels.md) | - | [`Corelight_v3_generic_dns_tunnels_CL`](../tables/corelight-v3-generic-dns-tunnels-cl.md) *(read)* |
| [corelight_generic_icmp_tunnels](../parsers/corelight-generic-icmp-tunnels.md) | - | [`Corelight_v3_generic_icmp_tunnels_CL`](../tables/corelight-v3-generic-icmp-tunnels-cl.md) *(read)* |
| [corelight_genisys](../parsers/corelight-genisys.md) | - | [`Corelight_v3_genisys_CL`](../tables/corelight-v3-genisys-cl.md) *(read)* |
| [corelight_http](../parsers/corelight-http.md) | - | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md) *(read)*<br>[`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md) *(read)*<br>[`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) *(read)* |
| [corelight_http2](../parsers/corelight-http2.md) | - | [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md) *(read)* |
| [corelight_http_agg](../parsers/corelight-http-agg.md) | - | [`Corelight_v3_http_agg_CL`](../tables/corelight-v3-http-agg-cl.md) *(read)* |
| [corelight_http_red](../parsers/corelight-http-red.md) | - | [`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) *(read)* |
| [corelight_icmp_specific_tunnels](../parsers/corelight-icmp-specific-tunnels.md) | - | [`Corelight_v3_icmp_specific_tunnels_CL`](../tables/corelight-v3-icmp-specific-tunnels-cl.md) *(read)* |
| [corelight_intel](../parsers/corelight-intel.md) | - | [`Corelight_v3_intel_CL`](../tables/corelight-v3-intel-cl.md) *(read)* |
| [corelight_ipsec](../parsers/corelight-ipsec.md) | - | [`Corelight_v3_ipsec_CL`](../tables/corelight-v3-ipsec-cl.md) *(read)* |
| [corelight_irc](../parsers/corelight-irc.md) | - | [`Corelight_v3_irc_CL`](../tables/corelight-v3-irc-cl.md) *(read)* |
| [corelight_iso_cotp](../parsers/corelight-iso-cotp.md) | - | [`Corelight_v3_iso_cotp_CL`](../tables/corelight-v3-iso-cotp-cl.md) *(read)* |
| [corelight_kerberos](../parsers/corelight-kerberos.md) | - | [`Corelight_v3_kerberos_CL`](../tables/corelight-v3-kerberos-cl.md) *(read)* |
| [corelight_known_certs](../parsers/corelight-known-certs.md) | - | [`Corelight_v3_known_certs_CL`](../tables/corelight-v3-known-certs-cl.md) *(read)* |
| [corelight_known_devices](../parsers/corelight-known-devices.md) | - | [`Corelight_v3_known_devices_CL`](../tables/corelight-v3-known-devices-cl.md) *(read)* |
| [corelight_known_domains](../parsers/corelight-known-domains.md) | - | [`Corelight_v3_known_domains_CL`](../tables/corelight-v3-known-domains-cl.md) *(read)* |
| [corelight_known_hosts](../parsers/corelight-known-hosts.md) | - | [`Corelight_v3_known_hosts_CL`](../tables/corelight-v3-known-hosts-cl.md) *(read)* |
| [corelight_known_names](../parsers/corelight-known-names.md) | - | [`Corelight_v3_known_names_CL`](../tables/corelight-v3-known-names-cl.md) *(read)* |
| [corelight_known_remotes](../parsers/corelight-known-remotes.md) | - | [`Corelight_v3_known_remotes_CL`](../tables/corelight-v3-known-remotes-cl.md) *(read)* |
| [corelight_known_services](../parsers/corelight-known-services.md) | - | [`Corelight_v3_known_services_CL`](../tables/corelight-v3-known-services-cl.md) *(read)* |
| [corelight_known_users](../parsers/corelight-known-users.md) | - | [`Corelight_v3_known_users_CL`](../tables/corelight-v3-known-users-cl.md) *(read)* |
| [corelight_ldap](../parsers/corelight-ldap.md) | - | [`Corelight_v3_ldap_CL`](../tables/corelight-v3-ldap-cl.md) *(read)* |
| [corelight_ldap_search](../parsers/corelight-ldap-search.md) | - | [`Corelight_v3_ldap_search_CL`](../tables/corelight-v3-ldap-search-cl.md) *(read)* |
| [corelight_loaded_scripts](../parsers/corelight-loaded-scripts.md) | - | [`Corelight_v3_loaded_scripts_CL`](../tables/corelight-v3-loaded-scripts-cl.md) *(read)* |
| [corelight_local_subnets](../parsers/corelight-local-subnets.md) | - | [`Corelight_v3_local_subnets_CL`](../tables/corelight-v3-local-subnets-cl.md) *(read)* |
| [corelight_local_subnets_dj](../parsers/corelight-local-subnets-dj.md) | - | [`Corelight_v3_local_subnets_dj_CL`](../tables/corelight-v3-local-subnets-dj-cl.md) *(read)* |
| [corelight_local_subnets_graphs](../parsers/corelight-local-subnets-graphs.md) | - | [`Corelight_v3_local_subnets_graphs_CL`](../tables/corelight-v3-local-subnets-graphs-cl.md) *(read)* |
| [corelight_local_subnets_neighbor](../parsers/corelight-local-subnets-neighbor.md) | - | [`Corelight_v3_local_subnets_neighbor_CL`](../tables/corelight-v3-local-subnets-neighbor-cl.md) *(read)* |
| [corelight_log4shell](../parsers/corelight-log4shell.md) | - | [`Corelight_v3_log4shell_CL`](../tables/corelight-v3-log4shell-cl.md) *(read)* |
| [corelight_logschema](../parsers/corelight-logschema.md) | - | [`Corelight_v3_logschema_CL`](../tables/corelight-v3-logschema-cl.md) *(read)* |
| [corelight_modbus](../parsers/corelight-modbus.md) | - | [`Corelight_v3_modbus_CL`](../tables/corelight-v3-modbus-cl.md) *(read)* |
| [corelight_modbus_detailed](../parsers/corelight-modbus-detailed.md) | - | [`Corelight_v3_modbus_detailed_CL`](../tables/corelight-v3-modbus-detailed-cl.md) *(read)* |
| [corelight_modbus_mask_write_register](../parsers/corelight-modbus-mask-write-register.md) | - | [`Corelight_v3_modbus_mask_write_register_CL`](../tables/corelight-v3-modbus-mask-write-register-cl.md) *(read)* |
| [corelight_modbus_read_device_identification](../parsers/corelight-modbus-read-device-identification.md) | - | [`Corelight_v3_modbus_read_device_identificatio_CL`](../tables/corelight-v3-modbus-read-device-identificatio-cl.md) *(read)* |
| [corelight_modbus_read_write_multiple_registers](../parsers/corelight-modbus-read-write-multiple-registers.md) | - | [`Corelight_v3_modbus_read_write_multiple_regis_CL`](../tables/corelight-v3-modbus-read-write-multiple-regis-cl.md) *(read)* |
| [corelight_mqtt_connect](../parsers/corelight-mqtt-connect.md) | - | [`Corelight_v3_mqtt_connect_CL`](../tables/corelight-v3-mqtt-connect-cl.md) *(read)* |
| [corelight_mqtt_publish](../parsers/corelight-mqtt-publish.md) | - | [`Corelight_v3_mqtt_publish_CL`](../tables/corelight-v3-mqtt-publish-cl.md) *(read)* |
| [corelight_mqtt_subscribe](../parsers/corelight-mqtt-subscribe.md) | - | [`Corelight_v3_mqtt_subscribe_CL`](../tables/corelight-v3-mqtt-subscribe-cl.md) *(read)* |
| [corelight_mysql](../parsers/corelight-mysql.md) | - | [`Corelight_v3_mysql_CL`](../tables/corelight-v3-mysql-cl.md) *(read)* |
| [corelight_netcontrol](../parsers/corelight-netcontrol.md) | - | [`Corelight_v3_netcontrol_CL`](../tables/corelight-v3-netcontrol-cl.md) *(read)* |
| [corelight_netcontrol_drop](../parsers/corelight-netcontrol-drop.md) | - | [`Corelight_v3_netcontrol_drop_CL`](../tables/corelight-v3-netcontrol-drop-cl.md) *(read)* |
| [corelight_netcontrol_shunt](../parsers/corelight-netcontrol-shunt.md) | - | [`Corelight_v3_netcontrol_shunt_CL`](../tables/corelight-v3-netcontrol-shunt-cl.md) *(read)* |
| [corelight_notice](../parsers/corelight-notice.md) | - | [`Corelight_v3_notice_CL`](../tables/corelight-v3-notice-cl.md) *(read)* |
| [corelight_notice_alarm](../parsers/corelight-notice-alarm.md) | - | [`Corelight_v3_notice_alarm_CL`](../tables/corelight-v3-notice-alarm-cl.md) *(read)* |
| [corelight_ntlm](../parsers/corelight-ntlm.md) | - | [`Corelight_v3_ntlm_CL`](../tables/corelight-v3-ntlm-cl.md) *(read)* |
| [corelight_ntp](../parsers/corelight-ntp.md) | - | [`Corelight_v3_ntp_CL`](../tables/corelight-v3-ntp-cl.md) *(read)* |
| [corelight_ocsp](../parsers/corelight-ocsp.md) | - | [`Corelight_v3_ocsp_CL`](../tables/corelight-v3-ocsp-cl.md) *(read)* |
| [corelight_opcua_binary](../parsers/corelight-opcua-binary.md) | - | [`Corelight_v3_opcua_binary_CL`](../tables/corelight-v3-opcua-binary-cl.md) *(read)* |
| [corelight_opcua_binary_activate_session](../parsers/corelight-opcua-binary-activate-session.md) | - | [`Corelight_v3_opcua_binary_activate_session_CL`](../tables/corelight-v3-opcua-binary-activate-session-cl.md) *(read)* |
| [corelight_opcua_binary_activate_session_client_software_cert](../parsers/corelight-opcua-binary-activate-session-client-software-cert.md) | - | [`Corelight_v3_opcua_binary_activate_session_cl_CL`](../tables/corelight-v3-opcua-binary-activate-session-cl-cl.md) *(read)* |
| [corelight_opcua_binary_activate_session_locale_id](../parsers/corelight-opcua-binary-activate-session-locale-id.md) | - | [`Corelight_v3_opcua_binary_activate_session_lo_CL`](../tables/corelight-v3-opcua-binary-activate-session-lo-cl.md) *(read)* |
| [corelight_opcua_binary_aggregate_filter](../parsers/corelight-opcua-binary-aggregate-filter.md) | - | [`Corelight_v3_opcua_binary_aggregate_filter_CL`](../tables/corelight-v3-opcua-binary-aggregate-filter-cl.md) *(read)* |
| [corelight_opcua_binary_browse](../parsers/corelight-opcua-binary-browse.md) | - | [`Corelight_v3_opcua_binary_browse_CL`](../tables/corelight-v3-opcua-binary-browse-cl.md) *(read)* |
| [corelight_opcua_binary_browse_description](../parsers/corelight-opcua-binary-browse-description.md) | - | [`Corelight_v3_opcua_binary_browse_description_CL`](../tables/corelight-v3-opcua-binary-browse-description-cl.md) *(read)* |
| [corelight_opcua_binary_browse_request_continuation_point](../parsers/corelight-opcua-binary-browse-request-continuation-point.md) | - | [`Corelight_v3_opcua_binary_browse_request_cont_CL`](../tables/corelight-v3-opcua-binary-browse-request-cont-cl.md) *(read)* |
| [corelight_opcua_binary_browse_response_references](../parsers/corelight-opcua-binary-browse-response-references.md) | - | [`Corelight_v3_opcua_binary_browse_response_ref_CL`](../tables/corelight-v3-opcua-binary-browse-response-ref-cl.md) *(read)* |
| [corelight_opcua_binary_browse_result](../parsers/corelight-opcua-binary-browse-result.md) | - | [`Corelight_v3_opcua_binary_browse_result_CL`](../tables/corelight-v3-opcua-binary-browse-result-cl.md) *(read)* |
| [corelight_opcua_binary_close_session](../parsers/corelight-opcua-binary-close-session.md) | - | [`Corelight_v3_opcua_binary_close_session_CL`](../tables/corelight-v3-opcua-binary-close-session-cl.md) *(read)* |
| [corelight_opcua_binary_create_monitored_items](../parsers/corelight-opcua-binary-create-monitored-items.md) | - | [`Corelight_v3_opcua_binary_cm_items_CL`](../tables/corelight-v3-opcua-binary-cm-items-cl.md) *(read)* |
| [corelight_opcua_binary_create_monitored_items_create_item](../parsers/corelight-opcua-binary-create-monitored-items-create-item.md) | - | [`Corelight_v3_opcua_binary_cm_create_item_CL`](../tables/corelight-v3-opcua-binary-cm-create-item-cl.md) *(read)* |
| [corelight_opcua_binary_create_session](../parsers/corelight-opcua-binary-create-session.md) | - | [`Corelight_v3_opcua_binary_create_session_CL`](../tables/corelight-v3-opcua-binary-create-session-cl.md) *(read)* |
| [corelight_opcua_binary_create_session_discovery](../parsers/corelight-opcua-binary-create-session-discovery.md) | - | [`Corelight_v3_opcua_binary_create_session_disc_CL`](../tables/corelight-v3-opcua-binary-create-session-disc-cl.md) *(read)* |
| [corelight_opcua_binary_create_session_endpoints](../parsers/corelight-opcua-binary-create-session-endpoints.md) | - | [`Corelight_v3_opcua_binary_create_session_endp_CL`](../tables/corelight-v3-opcua-binary-create-session-endp-cl.md) *(read)* |
| [corelight_opcua_binary_create_session_user_token](../parsers/corelight-opcua-binary-create-session-user-token.md) | - | [`Corelight_v3_opcua_binary_create_session_user_CL`](../tables/corelight-v3-opcua-binary-create-session-user-cl.md) *(read)* |
| [corelight_opcua_binary_create_subscription](../parsers/corelight-opcua-binary-create-subscription.md) | - | [`Corelight_v3_opcua_binary_create_subscription_CL`](../tables/corelight-v3-opcua-binary-create-subscription-cl.md) *(read)* |
| [corelight_opcua_binary_data_change_filter](../parsers/corelight-opcua-binary-data-change-filter.md) | - | [`Corelight_v3_opcua_binary_data_change_filter_CL`](../tables/corelight-v3-opcua-binary-data-change-filter-cl.md) *(read)* |
| [corelight_opcua_binary_diag_info_detail](../parsers/corelight-opcua-binary-diag-info-detail.md) | - | [`Corelight_v3_opcua_binary_diag_info_detail_CL`](../tables/corelight-v3-opcua-binary-diag-info-detail-cl.md) *(read)* |
| [corelight_opcua_binary_event_filter](../parsers/corelight-opcua-binary-event-filter.md) | - | [`Corelight_v3_opcua_binary_event_filter_CL`](../tables/corelight-v3-opcua-binary-event-filter-cl.md) *(read)* |
| [corelight_opcua_binary_event_filter_attribute_operand](../parsers/corelight-opcua-binary-event-filter-attribute-operand.md) | - | [`Corelight_v3_opcua_binary_event_filter_attrib_CL`](../tables/corelight-v3-opcua-binary-event-filter-attrib-cl.md) *(read)* |
| [corelight_opcua_binary_event_filter_attribute_operand_browse_paths](../parsers/corelight-opcua-binary-event-filter-attribute-operand-browse-paths.md) | - | [`Corelight_v3_opcua_bef_attr_operand_bpaths_CL`](../tables/corelight-v3-opcua-bef-attr-operand-bpaths-cl.md) *(read)* |
| [corelight_opcua_binary_event_filter_element_operand](../parsers/corelight-opcua-binary-event-filter-element-operand.md) | - | [`Corelight_v3_opcua_binary_event_filter_elemen_CL`](../tables/corelight-v3-opcua-binary-event-filter-elemen-cl.md) *(read)* |
| [corelight_opcua_binary_event_filter_literal_operand](../parsers/corelight-opcua-binary-event-filter-literal-operand.md) | - | [`Corelight_v3_opcua_binary_event_filter_litera_CL`](../tables/corelight-v3-opcua-binary-event-filter-litera-cl.md) *(read)* |
| [corelight_opcua_binary_event_filter_select_clause](../parsers/corelight-opcua-binary-event-filter-select-clause.md) | - | [`Corelight_v3_opcua_binary_event_filter_select_CL`](../tables/corelight-v3-opcua-binary-event-filter-select-cl.md) *(read)* |
| [corelight_opcua_binary_event_filter_simple_attribute_operand](../parsers/corelight-opcua-binary-event-filter-simple-attribute-operand.md) | - | [`Corelight_v3_opcua_binary_event_filter_simple_CL`](../tables/corelight-v3-opcua-binary-event-filter-simple-cl.md) *(read)* |
| [corelight_opcua_binary_event_filter_simple_attribute_operand_browse_paths](../parsers/corelight-opcua-binary-event-filter-simple-attribute-operand-browse-paths.md) | - | [`Corelight_v3_opcua_bef_smpl_attr_bpaths_CL`](../tables/corelight-v3-opcua-bef-smpl-attr-bpaths-cl.md) *(read)* |
| [corelight_opcua_binary_event_filter_where_clause](../parsers/corelight-opcua-binary-event-filter-where-clause.md) | - | [`Corelight_v3_opcua_bef_where_clause_CL`](../tables/corelight-v3-opcua-bef-where-clause-cl.md) *(read)* |
| [corelight_opcua_binary_event_filter_where_clause_elements](../parsers/corelight-opcua-binary-event-filter-where-clause-elements.md) | - | [`Corelight_v3_opcua_bef_where_clause_elements_CL`](../tables/corelight-v3-opcua-bef-where-clause-elements-cl.md) *(read)* |
| [corelight_opcua_binary_get_endpoints](../parsers/corelight-opcua-binary-get-endpoints.md) | - | [`Corelight_v3_opcua_binary_get_endpoints_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-cl.md) *(read)* |
| [corelight_opcua_binary_get_endpoints_description](../parsers/corelight-opcua-binary-get-endpoints-description.md) | - | [`Corelight_v3_opcua_binary_get_endpoints_descr_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-descr-cl.md) *(read)* |
| [corelight_opcua_binary_get_endpoints_discovery](../parsers/corelight-opcua-binary-get-endpoints-discovery.md) | - | [`Corelight_v3_opcua_binary_get_endpoints_disco_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-disco-cl.md) *(read)* |
| [corelight_opcua_binary_get_endpoints_locale_id](../parsers/corelight-opcua-binary-get-endpoints-locale-id.md) | - | [`Corelight_v3_opcua_binary_get_endpoints_local_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-local-cl.md) *(read)* |
| [corelight_opcua_binary_get_endpoints_profile_uri](../parsers/corelight-opcua-binary-get-endpoints-profile-uri.md) | - | [`Corelight_v3_opcua_binary_get_endpoints_profi_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-profi-cl.md) *(read)* |
| [corelight_opcua_binary_get_endpoints_user_token](../parsers/corelight-opcua-binary-get-endpoints-user-token.md) | - | [`Corelight_v3_opcua_binary_get_endpoints_user_CL`](../tables/corelight-v3-opcua-binary-get-endpoints-user-cl.md) *(read)* |
| [corelight_opcua_binary_opensecure_channel](../parsers/corelight-opcua-binary-opensecure-channel.md) | - | [`Corelight_v3_opcua_binary_opensecure_channel_CL`](../tables/corelight-v3-opcua-binary-opensecure-channel-cl.md) *(read)* |
| [corelight_opcua_binary_read](../parsers/corelight-opcua-binary-read.md) | - | [`Corelight_v3_opcua_binary_read_CL`](../tables/corelight-v3-opcua-binary-read-cl.md) *(read)* |
| [corelight_opcua_binary_read_nodes_to_read](../parsers/corelight-opcua-binary-read-nodes-to-read.md) | - | [`Corelight_v3_opcua_binary_read_nodes_to_read_CL`](../tables/corelight-v3-opcua-binary-read-nodes-to-read-cl.md) *(read)* |
| [corelight_opcua_binary_read_results](../parsers/corelight-opcua-binary-read-results.md) | - | [`Corelight_v3_opcua_binary_read_results_CL`](../tables/corelight-v3-opcua-binary-read-results-cl.md) *(read)* |
| [corelight_opcua_binary_status_code_detail](../parsers/corelight-opcua-binary-status-code-detail.md) | - | [`Corelight_v3_opcua_binary_status_code_detail_CL`](../tables/corelight-v3-opcua-binary-status-code-detail-cl.md) *(read)* |
| [corelight_opcua_binary_variant_array_dims](../parsers/corelight-opcua-binary-variant-array-dims.md) | - | [`Corelight_v3_opcua_binary_variant_array_dims_CL`](../tables/corelight-v3-opcua-binary-variant-array-dims-cl.md) *(read)* |
| [corelight_opcua_binary_variant_data](../parsers/corelight-opcua-binary-variant-data.md) | - | [`Corelight_v3_opcua_binary_variant_data_CL`](../tables/corelight-v3-opcua-binary-variant-data-cl.md) *(read)* |
| [corelight_opcua_binary_variant_data_value](../parsers/corelight-opcua-binary-variant-data-value.md) | - | [`Corelight_v3_opcua_binary_variant_data_value_CL`](../tables/corelight-v3-opcua-binary-variant-data-value-cl.md) *(read)* |
| [corelight_opcua_binary_variant_extension_object](../parsers/corelight-opcua-binary-variant-extension-object.md) | - | [`Corelight_v3_opcua_binary_variant_extension_o_CL`](../tables/corelight-v3-opcua-binary-variant-extension-o-cl.md) *(read)* |
| [corelight_opcua_binary_variant_metadata](../parsers/corelight-opcua-binary-variant-metadata.md) | - | [`Corelight_v3_opcua_binary_variant_metadata_CL`](../tables/corelight-v3-opcua-binary-variant-metadata-cl.md) *(read)* |
| [corelight_openflow](../parsers/corelight-openflow.md) | - | [`Corelight_v3_openflow_CL`](../tables/corelight-v3-openflow-cl.md) *(read)* |
| [corelight_packet_filter](../parsers/corelight-packet-filter.md) | - | [`Corelight_v3_packet_filter_CL`](../tables/corelight-v3-packet-filter-cl.md) *(read)* |
| [corelight_pe](../parsers/corelight-pe.md) | - | [`Corelight_v3_pe_CL`](../tables/corelight-v3-pe-cl.md) *(read)* |
| [corelight_print](../parsers/corelight-print.md) | - | [`Corelight_v3_print_CL`](../tables/corelight-v3-print-cl.md) *(read)* |
| [corelight_profinet](../parsers/corelight-profinet.md) | - | [`Corelight_v3_profinet_CL`](../tables/corelight-v3-profinet-cl.md) *(read)* |
| [corelight_profinet_dce_rpc](../parsers/corelight-profinet-dce-rpc.md) | - | [`Corelight_v3_profinet_dce_rpc_CL`](../tables/corelight-v3-profinet-dce-rpc-cl.md) *(read)* |
| [corelight_profinet_debug](../parsers/corelight-profinet-debug.md) | - | [`Corelight_v3_profinet_debug_CL`](../tables/corelight-v3-profinet-debug-cl.md) *(read)* |
| [corelight_quic](../parsers/corelight-quic.md) | - | [`Corelight_v3_quic_CL`](../tables/corelight-v3-quic-cl.md) *(read)* |
| [corelight_radius](../parsers/corelight-radius.md) | - | [`Corelight_v3_radius_CL`](../tables/corelight-v3-radius-cl.md) *(read)* |
| [corelight_rdp](../parsers/corelight-rdp.md) | - | [`Corelight_v3_rdp_CL`](../tables/corelight-v3-rdp-cl.md) *(read)* |
| [corelight_reporter](../parsers/corelight-reporter.md) | - | [`Corelight_v3_reporter_CL`](../tables/corelight-v3-reporter-cl.md) *(read)* |
| [corelight_rfb](../parsers/corelight-rfb.md) | - | [`Corelight_v3_rfb_CL`](../tables/corelight-v3-rfb-cl.md) *(read)* |
| [corelight_s7comm](../parsers/corelight-s7comm.md) | - | [`Corelight_v3_s7comm_CL`](../tables/corelight-v3-s7comm-cl.md) *(read)* |
| [corelight_s7comm_plus](../parsers/corelight-s7comm-plus.md) | - | [`Corelight_v3_s7comm_plus_CL`](../tables/corelight-v3-s7comm-plus-cl.md) *(read)* |
| [corelight_s7comm_read_szl](../parsers/corelight-s7comm-read-szl.md) | - | [`Corelight_v3_s7comm_read_szl_CL`](../tables/corelight-v3-s7comm-read-szl-cl.md) *(read)* |
| [corelight_s7comm_upload_download](../parsers/corelight-s7comm-upload-download.md) | - | [`Corelight_v3_s7comm_upload_download_CL`](../tables/corelight-v3-s7comm-upload-download-cl.md) *(read)* |
| [corelight_signatures](../parsers/corelight-signatures.md) | - | [`Corelight_v3_signatures_CL`](../tables/corelight-v3-signatures-cl.md) *(read)* |
| [corelight_sip](../parsers/corelight-sip.md) | - | [`Corelight_v3_sip_CL`](../tables/corelight-v3-sip-cl.md) *(read)* |
| [corelight_smartpcap](../parsers/corelight-smartpcap.md) | - | [`Corelight_v3_smartpcap_CL`](../tables/corelight-v3-smartpcap-cl.md) *(read)* |
| [corelight_smartpcap_stats](../parsers/corelight-smartpcap-stats.md) | - | [`Corelight_v3_smartpcap_stats_CL`](../tables/corelight-v3-smartpcap-stats-cl.md) *(read)* |
| [corelight_smb_files](../parsers/corelight-smb-files.md) | - | [`Corelight_v3_smb_files_CL`](../tables/corelight-v3-smb-files-cl.md) *(read)* |
| [corelight_smb_mapping](../parsers/corelight-smb-mapping.md) | - | [`Corelight_v3_smb_mapping_CL`](../tables/corelight-v3-smb-mapping-cl.md) *(read)* |
| [corelight_smtp](../parsers/corelight-smtp.md) | - | [`Corelight_v3_smtp_CL`](../tables/corelight-v3-smtp-cl.md) *(read)* |
| [corelight_smtp_links](../parsers/corelight-smtp-links.md) | - | [`Corelight_v3_smtp_links_CL`](../tables/corelight-v3-smtp-links-cl.md) *(read)* |
| [corelight_snmp](../parsers/corelight-snmp.md) | - | [`Corelight_v3_snmp_CL`](../tables/corelight-v3-snmp-cl.md) *(read)* |
| [corelight_socks](../parsers/corelight-socks.md) | - | [`Corelight_v3_socks_CL`](../tables/corelight-v3-socks-cl.md) *(read)* |
| [corelight_software](../parsers/corelight-software.md) | - | [`Corelight_v3_software_CL`](../tables/corelight-v3-software-cl.md) *(read)* |
| [corelight_specific_dns_tunnels](../parsers/corelight-specific-dns-tunnels.md) | - | [`Corelight_v3_specific_dns_tunnels_CL`](../tables/corelight-v3-specific-dns-tunnels-cl.md) *(read)* |
| [corelight_ssdp](../parsers/corelight-ssdp.md) | - | [`Corelight_v3_ssdp_CL`](../tables/corelight-v3-ssdp-cl.md) *(read)* |
| [corelight_ssh](../parsers/corelight-ssh.md) | string | [`Corelight_v3_ssh_CL`](../tables/corelight-v3-ssh-cl.md) *(read)* |
| [corelight_ssl](../parsers/corelight-ssl.md) | - | [`Corelight_v3_ssl_CL`](../tables/corelight-v3-ssl-cl.md) *(read)*<br>[`Corelight_v3_ssl_red_CL`](../tables/corelight-v3-ssl-red-cl.md) *(read)* |
| [corelight_ssl_agg](../parsers/corelight-ssl-agg.md) | - | [`Corelight_v3_ssl_agg_CL`](../tables/corelight-v3-ssl-agg-cl.md) *(read)* |
| [corelight_ssl_red](../parsers/corelight-ssl-red.md) | - | [`Corelight_v3_ssl_red_CL`](../tables/corelight-v3-ssl-red-cl.md) *(read)* |
| [corelight_stats](../parsers/corelight-stats.md) | - | [`Corelight_v3_stats_CL`](../tables/corelight-v3-stats-cl.md) *(read)* |
| [corelight_stepping](../parsers/corelight-stepping.md) | - | [`Corelight_v3_stepping_CL`](../tables/corelight-v3-stepping-cl.md) *(read)* |
| [corelight_stun](../parsers/corelight-stun.md) | - | [`Corelight_v3_stun_CL`](../tables/corelight-v3-stun-cl.md) *(read)* |
| [corelight_stun_nat](../parsers/corelight-stun-nat.md) | - | [`Corelight_v3_stun_nat_CL`](../tables/corelight-v3-stun-nat-cl.md) *(read)* |
| [corelight_suri_aggregations](../parsers/corelight-suri-aggregations.md) | - | - |
| [corelight_suricata_corelight](../parsers/corelight-suricata-corelight.md) | - | [`Corelight_v3_suricata_corelight_CL`](../tables/corelight-v3-suricata-corelight-cl.md) *(read)* |
| [corelight_suricata_eve](../parsers/corelight-suricata-eve.md) | - | [`Corelight_v3_suricata_eve_CL`](../tables/corelight-v3-suricata-eve-cl.md) *(read)* |
| [corelight_suricata_stats](../parsers/corelight-suricata-stats.md) | - | [`Corelight_v3_suricata_stats_CL`](../tables/corelight-v3-suricata-stats-cl.md) *(read)* |
| [corelight_suricata_zeek_stats](../parsers/corelight-suricata-zeek-stats.md) | - | [`Corelight_v3_suricata_zeek_stats_CL`](../tables/corelight-v3-suricata-zeek-stats-cl.md) *(read)* |
| [corelight_syslog](../parsers/corelight-syslog.md) | - | [`Corelight_v3_syslog_CL`](../tables/corelight-v3-syslog-cl.md) *(read)* |
| [corelight_tds](../parsers/corelight-tds.md) | - | [`Corelight_v3_tds_CL`](../tables/corelight-v3-tds-cl.md) *(read)* |
| [corelight_tds_rpc](../parsers/corelight-tds-rpc.md) | - | [`Corelight_v3_tds_rpc_CL`](../tables/corelight-v3-tds-rpc-cl.md) *(read)* |
| [corelight_tds_sql_batch](../parsers/corelight-tds-sql-batch.md) | - | [`Corelight_v3_tds_sql_batch_CL`](../tables/corelight-v3-tds-sql-batch-cl.md) *(read)* |
| [corelight_telnet](../parsers/corelight-telnet.md) | - | [`Corelight_v3_telnet_CL`](../tables/corelight-v3-telnet-cl.md) *(read)* |
| [corelight_traceroute](../parsers/corelight-traceroute.md) | - | [`Corelight_v3_traceroute_CL`](../tables/corelight-v3-traceroute-cl.md) *(read)* |
| [corelight_tunnel](../parsers/corelight-tunnel.md) | - | [`Corelight_v3_tunnel_CL`](../tables/corelight-v3-tunnel-cl.md) *(read)* |
| [corelight_unknown_smartpcap](../parsers/corelight-unknown-smartpcap.md) | - | [`Corelight_v3_unknown_smartpcap_CL`](../tables/corelight-v3-unknown-smartpcap-cl.md) *(read)* |
| [corelight_util_stats](../parsers/corelight-util-stats.md) | - | [`Corelight_v3_util_stats_CL`](../tables/corelight-v3-util-stats-cl.md) *(read)* |
| [corelight_vpn](../parsers/corelight-vpn.md) | string | [`Corelight_v3_vpn_CL`](../tables/corelight-v3-vpn-cl.md) *(read)* |
| [corelight_websocket](../parsers/corelight-websocket.md) | - | [`Corelight_v3_websocket_CL`](../tables/corelight-v3-websocket-cl.md) *(read)* |
| [corelight_weird](../parsers/corelight-weird.md) | - | [`Corelight_v3_weird_CL`](../tables/corelight-v3-weird-cl.md) *(read)* |
| [corelight_weird_agg](../parsers/corelight-weird-agg.md) | - | [`Corelight_v3_weird_agg_CL`](../tables/corelight-v3-weird-agg-cl.md) *(read)* |
| [corelight_weird_red](../parsers/corelight-weird-red.md) | - | [`Corelight_v3_weird_red_CL`](../tables/corelight-v3-weird-red-cl.md) *(read)* |
| [corelight_weird_stats](../parsers/corelight-weird-stats.md) | - | [`Corelight_v3_weird_stats_CL`](../tables/corelight-v3-weird-stats-cl.md) *(read)* |
| [corelight_wireguard](../parsers/corelight-wireguard.md) | - | [`Corelight_v3_wireguard_CL`](../tables/corelight-v3-wireguard-cl.md) *(read)* |
| [corelight_x509](../parsers/corelight-x509.md) | - | [`Corelight_v3_x509_CL`](../tables/corelight-v3-x509-cl.md) *(read)*<br>[`Corelight_v3_x509_red_CL`](../tables/corelight-v3-x509-red-cl.md) *(read)* |
| [corelight_x509_red](../parsers/corelight-x509-red.md) | - | [`Corelight_v3_x509_red_CL`](../tables/corelight-v3-x509-red-cl.md) *(read)* |
| [corelight_zeek_doctor](../parsers/corelight-zeek-doctor.md) | - | [`Corelight_v3_zeek_doctor_CL`](../tables/corelight-v3-zeek-doctor-cl.md) *(read)* |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CorelightAggregationsEnrichment1](../content/corelight-corelightaggregationsenrichment1-fbfba063.md) | - | - |
| [CorelightAggregationsEnrichment2](../content/corelight-corelightaggregationsenrichment2-e7960978.md) | - | - |
| [CorelightDNSPortDesc](../content/corelight-corelightdnsportdesc-d7ff9af5.md) | - | - |
| [CorelightGeoCountries](../content/corelight-corelightgeocountries-d522c9b2.md) | - | - |
| [CorelightInferencesDesc](../content/corelight-corelightinferencesdesc-51fd4d81.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.3.0       | 18-08-2026                     | Updated **Data Connector** page for DCE/DCR based ingestion, added new **Parsers**, and updated **Workbooks** and **Analytic Rules** queries for the new table schema and field names |
| 3.2.5       | 04-06-2026                     | Restructuring dashboards and adding asset classification tab in data explorer                         |
| 3.2.4       | 19-03-2026                     | Added 'Show Aggregation' filters in Corelight Data Explorer Workbook.                         |
| 3.2.3       | 27-01-2026                     | Added Corelight AWS VPC Flow dashboard.                               |
| 3.2.2       | 01-12-2025                     | Added Corelight Aggregation Parsers.                               |
| 3.2.1       | 30-10-2025                     | Added corelight_first_seen and corelight_anomaly Parsers.          |
| 3.2.0       | 05-03-2025                     | Added new Parsers, Workbooks and Watchlists.                       |
| 3.1.0       | 27-09-2024                     | Updated Parsers and added new tabs in Workbook.                    |
| 3.0.2       | 31-01-2024                     | Updated **Parser** Corelight <br/> Updated tactics of **Hunting Query** Corelight - Repetitive DNS Failures                             |
| 3.0.1       | 16-11-2023                     | Updated package mainTemplate variables                             |
| 3.0.0       | 20-09-2023                     | Changed backend format to use separate tables with parsed values   |
| 2.0.0       | 10-06-2022                     | Updated **Workbooks**                                               | 
| 1.1.0       | 22-10-2021                     | Packaging updates                                                  |
| 1.0.2       | 22-04-2021                     | Updated instructions, rules, LA config                              |
| 1.0.1       | 09-04-2021                     | Updated **Analytic Rule**                                           |
| 1.0.0       | 01-04-2021                     | Initial Solution Release                                           |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

