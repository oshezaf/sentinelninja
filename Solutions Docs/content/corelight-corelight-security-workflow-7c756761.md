# Corelight_Security_Workflow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Corelight](../solutions/corelight.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Corelight/Workbooks/Corelight_Security_Workflow.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Corelight_v3_bacnet_CL`](../tables/corelight-v3-bacnet-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_capture_loss_CL`](../tables/corelight-v3-capture-loss-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_cip_CL`](../tables/corelight-v3-cip-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_conn_CL`](../tables/corelight-v3-conn-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_conn_long_CL`](../tables/corelight-v3-conn-long-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_conn_red_CL`](../tables/corelight-v3-conn-red-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_corelight_burst_CL`](../tables/corelight-v3-corelight-burst-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_corelight_overall_capture_loss_CL`](../tables/corelight-v3-corelight-overall-capture-loss-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_corelight_profiling_CL`](../tables/corelight-v3-corelight-profiling-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_datared_CL`](../tables/corelight-v3-datared-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_dce_rpc_CL`](../tables/corelight-v3-dce-rpc-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_dga_CL`](../tables/corelight-v3-dga-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_dhcp_CL`](../tables/corelight-v3-dhcp-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_dnp3_CL`](../tables/corelight-v3-dnp3-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_dns_CL`](../tables/corelight-v3-dns-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_dns_red_CL`](../tables/corelight-v3-dns-red-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_dpd_CL`](../tables/corelight-v3-dpd-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_encrypted_dns_CL`](../tables/corelight-v3-encrypted-dns-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_enip_CL`](../tables/corelight-v3-enip-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_enip_debug_CL`](../tables/corelight-v3-enip-debug-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_enip_list_identity_CL`](../tables/corelight-v3-enip-list-identity-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_etc_viz_CL`](../tables/corelight-v3-etc-viz-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_files_CL`](../tables/corelight-v3-files-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_files_red_CL`](../tables/corelight-v3-files-red-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_ftp_CL`](../tables/corelight-v3-ftp-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_generic_dns_tunnels_CL`](../tables/corelight-v3-generic-dns-tunnels-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_generic_icmp_tunnels_CL`](../tables/corelight-v3-generic-icmp-tunnels-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_http2_CL`](../tables/corelight-v3-http2-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_http_CL`](../tables/corelight-v3-http-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_http_red_CL`](../tables/corelight-v3-http-red-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_icmp_specific_tunnels_CL`](../tables/corelight-v3-icmp-specific-tunnels-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_intel_CL`](../tables/corelight-v3-intel-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_ipsec_CL`](../tables/corelight-v3-ipsec-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_irc_CL`](../tables/corelight-v3-irc-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_iso_cotp_CL`](../tables/corelight-v3-iso-cotp-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_kerberos_CL`](../tables/corelight-v3-kerberos-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_known_certs_CL`](../tables/corelight-v3-known-certs-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_known_devices_CL`](../tables/corelight-v3-known-devices-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_known_domains_CL`](../tables/corelight-v3-known-domains-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_known_hosts_CL`](../tables/corelight-v3-known-hosts-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_known_names_CL`](../tables/corelight-v3-known-names-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_known_remotes_CL`](../tables/corelight-v3-known-remotes-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_known_services_CL`](../tables/corelight-v3-known-services-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_known_users_CL`](../tables/corelight-v3-known-users-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_local_subnets_CL`](../tables/corelight-v3-local-subnets-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_local_subnets_dj_CL`](../tables/corelight-v3-local-subnets-dj-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_local_subnets_graphs_CL`](../tables/corelight-v3-local-subnets-graphs-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_log4shell_CL`](../tables/corelight-v3-log4shell-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_modbus_CL`](../tables/corelight-v3-modbus-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_mqtt_connect_CL`](../tables/corelight-v3-mqtt-connect-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_mqtt_publish_CL`](../tables/corelight-v3-mqtt-publish-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_mqtt_subscribe_CL`](../tables/corelight-v3-mqtt-subscribe-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_mysql_CL`](../tables/corelight-v3-mysql-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_notice_CL`](../tables/corelight-v3-notice-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_ntlm_CL`](../tables/corelight-v3-ntlm-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_ntp_CL`](../tables/corelight-v3-ntp-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_ocsp_CL`](../tables/corelight-v3-ocsp-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_openflow_CL`](../tables/corelight-v3-openflow-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_packet_filter_CL`](../tables/corelight-v3-packet-filter-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_pe_CL`](../tables/corelight-v3-pe-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_profinet_CL`](../tables/corelight-v3-profinet-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_profinet_dce_rpc_CL`](../tables/corelight-v3-profinet-dce-rpc-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_profinet_debug_CL`](../tables/corelight-v3-profinet-debug-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_radius_CL`](../tables/corelight-v3-radius-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_rdp_CL`](../tables/corelight-v3-rdp-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_reporter_CL`](../tables/corelight-v3-reporter-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_rfb_CL`](../tables/corelight-v3-rfb-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_s7comm_CL`](../tables/corelight-v3-s7comm-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_signatures_CL`](../tables/corelight-v3-signatures-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_sip_CL`](../tables/corelight-v3-sip-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_smartpcap_CL`](../tables/corelight-v3-smartpcap-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_smartpcap_stats_CL`](../tables/corelight-v3-smartpcap-stats-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_smb_files_CL`](../tables/corelight-v3-smb-files-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_smb_mapping_CL`](../tables/corelight-v3-smb-mapping-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_smtp_CL`](../tables/corelight-v3-smtp-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_smtp_links_CL`](../tables/corelight-v3-smtp-links-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_snmp_CL`](../tables/corelight-v3-snmp-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_socks_CL`](../tables/corelight-v3-socks-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_software_CL`](../tables/corelight-v3-software-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_specific_dns_tunnels_CL`](../tables/corelight-v3-specific-dns-tunnels-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_ssh_CL`](../tables/corelight-v3-ssh-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_ssl_CL`](../tables/corelight-v3-ssl-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_ssl_red_CL`](../tables/corelight-v3-ssl-red-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_stats_CL`](../tables/corelight-v3-stats-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_stepping_CL`](../tables/corelight-v3-stepping-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_stun_CL`](../tables/corelight-v3-stun-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_stun_nat_CL`](../tables/corelight-v3-stun-nat-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_suricata_corelight_CL`](../tables/corelight-v3-suricata-corelight-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_suricata_eve_CL`](../tables/corelight-v3-suricata-eve-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_suricata_stats_CL`](../tables/corelight-v3-suricata-stats-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_suricata_zeek_stats_CL`](../tables/corelight-v3-suricata-zeek-stats-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_syslog_CL`](../tables/corelight-v3-syslog-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_tds_CL`](../tables/corelight-v3-tds-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_tds_rpc_CL`](../tables/corelight-v3-tds-rpc-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_tds_sql_batch_CL`](../tables/corelight-v3-tds-sql-batch-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_traceroute_CL`](../tables/corelight-v3-traceroute-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_tunnel_CL`](../tables/corelight-v3-tunnel-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_unknown_smartpcap_CL`](../tables/corelight-v3-unknown-smartpcap-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_util_stats_CL`](../tables/corelight-v3-util-stats-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_vpn_CL`](../tables/corelight-v3-vpn-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_weird_CL`](../tables/corelight-v3-weird-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_weird_red_CL`](../tables/corelight-v3-weird-red-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_weird_stats_CL`](../tables/corelight-v3-weird-stats-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_wireguard_CL`](../tables/corelight-v3-wireguard-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_x509_CL`](../tables/corelight-v3-x509-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_x509_red_CL`](../tables/corelight-v3-x509-red-cl.md) |  | ? | ✓ | ? |
| [`Corelight_v3_zeek_doctor_CL`](../tables/corelight-v3-zeek-doctor-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Corelight](../solutions/corelight.md)

