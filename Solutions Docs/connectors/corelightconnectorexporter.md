# Corelight Connector Exporter

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Corelight/Data%20Connectors/Logo/corelight.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CorelightConnectorExporter` |
| **Publisher** | Corelight |
| **Used in Solutions** | [Corelight](../solutions/corelight.md) |
| **Collection Method** | [Unknown (Custom Log)](../methods/unknown-custom-log.md) |
| **Connector Definition Files** | [CorelightConnectorExporter.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Corelight/Data%20Connectors/CorelightConnectorExporter.json) |

The [Corelight](https://corelight.com/) data connector enables incident responders and threat hunters who use Microsoft Sentinel to work faster and more effectively. The data connector enables ingestion of events from [Zeek](https://zeek.org/) and [Suricata](https://suricata-ids.org/) via Corelight Sensors into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Corelight_CL`](../tables/corelight-cl.md) | — | — |
| [`Corelight_v2_bacnet_CL`](../tables/corelight-v2-bacnet-cl.md) | — | — |
| [`Corelight_v2_capture_loss_CL`](../tables/corelight-v2-capture-loss-cl.md) | — | — |
| [`Corelight_v2_cip_CL`](../tables/corelight-v2-cip-cl.md) | — | — |
| [`Corelight_v2_conn_CL`](../tables/corelight-v2-conn-cl.md) | — | — |
| [`Corelight_v2_conn_long_CL`](../tables/corelight-v2-conn-long-cl.md) | — | — |
| [`Corelight_v2_conn_red_CL`](../tables/corelight-v2-conn-red-cl.md) | — | — |
| [`Corelight_v2_corelight_burst_CL`](../tables/corelight-v2-corelight-burst-cl.md) | — | — |
| [`Corelight_v2_corelight_overall_capture_loss_CL`](../tables/corelight-v2-corelight-overall-capture-loss-cl.md) | — | — |
| [`Corelight_v2_corelight_profiling_CL`](../tables/corelight-v2-corelight-profiling-cl.md) | — | — |
| [`Corelight_v2_datared_CL`](../tables/corelight-v2-datared-cl.md) | — | — |
| [`Corelight_v2_dce_rpc_CL`](../tables/corelight-v2-dce-rpc-cl.md) | — | — |
| [`Corelight_v2_dga_CL`](../tables/corelight-v2-dga-cl.md) | — | — |
| [`Corelight_v2_dhcp_CL`](../tables/corelight-v2-dhcp-cl.md) | — | — |
| [`Corelight_v2_dnp3_CL`](../tables/corelight-v2-dnp3-cl.md) | — | — |
| [`Corelight_v2_dns_CL`](../tables/corelight-v2-dns-cl.md) | — | — |
| [`Corelight_v2_dns_red_CL`](../tables/corelight-v2-dns-red-cl.md) | — | — |
| [`Corelight_v2_dpd_CL`](../tables/corelight-v2-dpd-cl.md) | — | — |
| [`Corelight_v2_encrypted_dns_CL`](../tables/corelight-v2-encrypted-dns-cl.md) | — | — |
| [`Corelight_v2_enip_CL`](../tables/corelight-v2-enip-cl.md) | — | — |
| [`Corelight_v2_enip_debug_CL`](../tables/corelight-v2-enip-debug-cl.md) | — | — |
| [`Corelight_v2_enip_list_identity_CL`](../tables/corelight-v2-enip-list-identity-cl.md) | — | — |
| [`Corelight_v2_etc_viz_CL`](../tables/corelight-v2-etc-viz-cl.md) | — | — |
| [`Corelight_v2_files_CL`](../tables/corelight-v2-files-cl.md) | — | — |
| [`Corelight_v2_files_red_CL`](../tables/corelight-v2-files-red-cl.md) | — | — |
| [`Corelight_v2_ftp_CL`](../tables/corelight-v2-ftp-cl.md) | — | — |
| [`Corelight_v2_generic_dns_tunnels_CL`](../tables/corelight-v2-generic-dns-tunnels-cl.md) | — | — |
| [`Corelight_v2_generic_icmp_tunnels_CL`](../tables/corelight-v2-generic-icmp-tunnels-cl.md) | — | — |
| [`Corelight_v2_http2_CL`](../tables/corelight-v2-http2-cl.md) | — | — |
| [`Corelight_v2_http_CL`](../tables/corelight-v2-http-cl.md) | — | — |
| [`Corelight_v2_http_red_CL`](../tables/corelight-v2-http-red-cl.md) | — | — |
| [`Corelight_v2_icmp_specific_tunnels_CL`](../tables/corelight-v2-icmp-specific-tunnels-cl.md) | — | — |
| [`Corelight_v2_intel_CL`](../tables/corelight-v2-intel-cl.md) | — | — |
| [`Corelight_v2_ipsec_CL`](../tables/corelight-v2-ipsec-cl.md) | — | — |
| [`Corelight_v2_irc_CL`](../tables/corelight-v2-irc-cl.md) | — | — |
| [`Corelight_v2_iso_cotp_CL`](../tables/corelight-v2-iso-cotp-cl.md) | — | — |
| [`Corelight_v2_kerberos_CL`](../tables/corelight-v2-kerberos-cl.md) | — | — |
| [`Corelight_v2_known_certs_CL`](../tables/corelight-v2-known-certs-cl.md) | — | — |
| [`Corelight_v2_known_devices_CL`](../tables/corelight-v2-known-devices-cl.md) | — | — |
| [`Corelight_v2_known_domains_CL`](../tables/corelight-v2-known-domains-cl.md) | — | — |
| [`Corelight_v2_known_hosts_CL`](../tables/corelight-v2-known-hosts-cl.md) | — | — |
| [`Corelight_v2_known_names_CL`](../tables/corelight-v2-known-names-cl.md) | — | — |
| [`Corelight_v2_known_remotes_CL`](../tables/corelight-v2-known-remotes-cl.md) | — | — |
| [`Corelight_v2_known_services_CL`](../tables/corelight-v2-known-services-cl.md) | — | — |
| [`Corelight_v2_known_users_CL`](../tables/corelight-v2-known-users-cl.md) | — | — |
| [`Corelight_v2_local_subnets_CL`](../tables/corelight-v2-local-subnets-cl.md) | — | — |
| [`Corelight_v2_local_subnets_dj_CL`](../tables/corelight-v2-local-subnets-dj-cl.md) | — | — |
| [`Corelight_v2_local_subnets_graphs_CL`](../tables/corelight-v2-local-subnets-graphs-cl.md) | — | — |
| [`Corelight_v2_log4shell_CL`](../tables/corelight-v2-log4shell-cl.md) | — | — |
| [`Corelight_v2_modbus_CL`](../tables/corelight-v2-modbus-cl.md) | — | — |
| [`Corelight_v2_mqtt_connect_CL`](../tables/corelight-v2-mqtt-connect-cl.md) | — | — |
| [`Corelight_v2_mqtt_publish_CL`](../tables/corelight-v2-mqtt-publish-cl.md) | — | — |
| [`Corelight_v2_mqtt_subscribe_CL`](../tables/corelight-v2-mqtt-subscribe-cl.md) | — | — |
| [`Corelight_v2_mysql_CL`](../tables/corelight-v2-mysql-cl.md) | — | — |
| [`Corelight_v2_notice_CL`](../tables/corelight-v2-notice-cl.md) | — | — |
| [`Corelight_v2_ntlm_CL`](../tables/corelight-v2-ntlm-cl.md) | — | — |
| [`Corelight_v2_ntp_CL`](../tables/corelight-v2-ntp-cl.md) | — | — |
| [`Corelight_v2_ocsp_CL`](../tables/corelight-v2-ocsp-cl.md) | — | — |
| [`Corelight_v2_openflow_CL`](../tables/corelight-v2-openflow-cl.md) | — | — |
| [`Corelight_v2_packet_filter_CL`](../tables/corelight-v2-packet-filter-cl.md) | — | — |
| [`Corelight_v2_pe_CL`](../tables/corelight-v2-pe-cl.md) | — | — |
| [`Corelight_v2_profinet_CL`](../tables/corelight-v2-profinet-cl.md) | — | — |
| [`Corelight_v2_profinet_dce_rpc_CL`](../tables/corelight-v2-profinet-dce-rpc-cl.md) | — | — |
| [`Corelight_v2_profinet_debug_CL`](../tables/corelight-v2-profinet-debug-cl.md) | — | — |
| [`Corelight_v2_radius_CL`](../tables/corelight-v2-radius-cl.md) | — | — |
| [`Corelight_v2_rdp_CL`](../tables/corelight-v2-rdp-cl.md) | — | — |
| [`Corelight_v2_reporter_CL`](../tables/corelight-v2-reporter-cl.md) | — | — |
| [`Corelight_v2_rfb_CL`](../tables/corelight-v2-rfb-cl.md) | — | — |
| [`Corelight_v2_s7comm_CL`](../tables/corelight-v2-s7comm-cl.md) | — | — |
| [`Corelight_v2_signatures_CL`](../tables/corelight-v2-signatures-cl.md) | — | — |
| [`Corelight_v2_sip_CL`](../tables/corelight-v2-sip-cl.md) | — | — |
| [`Corelight_v2_smartpcap_CL`](../tables/corelight-v2-smartpcap-cl.md) | — | — |
| [`Corelight_v2_smartpcap_stats_CL`](../tables/corelight-v2-smartpcap-stats-cl.md) | — | — |
| [`Corelight_v2_smb_files_CL`](../tables/corelight-v2-smb-files-cl.md) | — | — |
| [`Corelight_v2_smb_mapping_CL`](../tables/corelight-v2-smb-mapping-cl.md) | — | — |
| [`Corelight_v2_smtp_CL`](../tables/corelight-v2-smtp-cl.md) | — | — |
| [`Corelight_v2_smtp_links_CL`](../tables/corelight-v2-smtp-links-cl.md) | — | — |
| [`Corelight_v2_snmp_CL`](../tables/corelight-v2-snmp-cl.md) | — | — |
| [`Corelight_v2_socks_CL`](../tables/corelight-v2-socks-cl.md) | — | — |
| [`Corelight_v2_software_CL`](../tables/corelight-v2-software-cl.md) | — | — |
| [`Corelight_v2_specific_dns_tunnels_CL`](../tables/corelight-v2-specific-dns-tunnels-cl.md) | — | — |
| [`Corelight_v2_ssh_CL`](../tables/corelight-v2-ssh-cl.md) | — | — |
| [`Corelight_v2_ssl_CL`](../tables/corelight-v2-ssl-cl.md) | — | — |
| [`Corelight_v2_ssl_red_CL`](../tables/corelight-v2-ssl-red-cl.md) | — | — |
| [`Corelight_v2_stats_CL`](../tables/corelight-v2-stats-cl.md) | — | — |
| [`Corelight_v2_stepping_CL`](../tables/corelight-v2-stepping-cl.md) | — | — |
| [`Corelight_v2_stun_CL`](../tables/corelight-v2-stun-cl.md) | — | — |
| [`Corelight_v2_stun_nat_CL`](../tables/corelight-v2-stun-nat-cl.md) | — | — |
| [`Corelight_v2_suricata_corelight_CL`](../tables/corelight-v2-suricata-corelight-cl.md) | — | — |
| [`Corelight_v2_suricata_eve_CL`](../tables/corelight-v2-suricata-eve-cl.md) | — | — |
| [`Corelight_v2_suricata_stats_CL`](../tables/corelight-v2-suricata-stats-cl.md) | — | — |
| [`Corelight_v2_suricata_zeek_stats_CL`](../tables/corelight-v2-suricata-zeek-stats-cl.md) | — | — |
| [`Corelight_v2_syslog_CL`](../tables/corelight-v2-syslog-cl.md) | — | — |
| [`Corelight_v2_tds_CL`](../tables/corelight-v2-tds-cl.md) | — | — |
| [`Corelight_v2_tds_rpc_CL`](../tables/corelight-v2-tds-rpc-cl.md) | — | — |
| [`Corelight_v2_tds_sql_batch_CL`](../tables/corelight-v2-tds-sql-batch-cl.md) | — | — |
| [`Corelight_v2_traceroute_CL`](../tables/corelight-v2-traceroute-cl.md) | — | — |
| [`Corelight_v2_tunnel_CL`](../tables/corelight-v2-tunnel-cl.md) | — | — |
| [`Corelight_v2_unknown_smartpcap_CL`](../tables/corelight-v2-unknown-smartpcap-cl.md) | — | — |
| [`Corelight_v2_util_stats_CL`](../tables/corelight-v2-util-stats-cl.md) | — | — |
| [`Corelight_v2_vpn_CL`](../tables/corelight-v2-vpn-cl.md) | — | — |
| [`Corelight_v2_weird_CL`](../tables/corelight-v2-weird-cl.md) | — | — |
| [`Corelight_v2_weird_red_CL`](../tables/corelight-v2-weird-red-cl.md) | — | — |
| [`Corelight_v2_weird_stats_CL`](../tables/corelight-v2-weird-stats-cl.md) | — | — |
| [`Corelight_v2_wireguard_CL`](../tables/corelight-v2-wireguard-cl.md) | — | — |
| [`Corelight_v2_x509_CL`](../tables/corelight-v2-x509-cl.md) | — | — |
| [`Corelight_v2_x509_red_CL`](../tables/corelight-v2-x509-red-cl.md) | — | — |
| [`Corelight_v2_zeek_doctor_CL`](../tables/corelight-v2-zeek-doctor-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This data connector depends on a parser based on a Kusto Function to work as expected [**Corelight**](https://aka.ms/sentinel-Corelight-parser) which is deployed with the Microsoft Sentinel Solution.

**1. Get the files**

Contact your TAM, SE, or info@corelight.com to get the files needed for the Microsoft Sentinel integration.

**2. Replay sample data.**

Replay sample data to create the needed tables in your Log Analytics workspace.
- **Send sample data (only needed once per Log Analytics workspace)**: `./send_samples.py --workspace-id {0} --workspace-key {1}`

**3. Install custom exporter.**

Install the custom exporter or the logstash container.

**4. Configure the Corelight Sensor to send logs to the Azure Log Analytics Agent.**

Using the following values, configure your Corelight Sensor to use the Microsoft Sentinel exporter. Alternatively, you can configure the logstash container with these values and configure your sensor to send JSON over TCP to that container on the appropriate port.
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Workspace Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

