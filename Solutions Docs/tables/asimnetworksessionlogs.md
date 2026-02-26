# ASimNetworkSessionLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASimNetworkSessionLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimnetworksessionlogs) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (237 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimnetworksessionlogs) · [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Carbon%20Black%20Cloud/Data%20Connectors/VMwareCarbonBlackCloud_ccp/CarbonBlack_DCR.json)

| Column Name | Type | Description | Source |
|:------------|:-----|:------------|:-------|
| _BilledSize | real | The record size in bytes | Azure Monitor docs |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account | Azure Monitor docs |
| _ResourceId | string | A unique identifier for the resource that the record is associated with | Azure Monitor docs |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with | Azure Monitor docs |
| action | string |  | DCR |
| action_s | string |  | DCR |
| AdditionalFields | dynamic | Additional information, represented using key/value pairs provided by the source which do not map to ASim. | Azure Monitor docs |
| alert_id | string |  | DCR |
| backend_timestamp | string |  | DCR |
| childproc_cmdline | string |  | DCR |
| childproc_guid | string |  | DCR |
| childproc_hash | string |  | DCR |
| childproc_name | string |  | DCR |
| childproc_pid | string |  | DCR |
| childproc_publisher | string |  | DCR |
| childproc_reputation | string |  | DCR |
| childproc_username | string |  | DCR |
| crossproc_action | string |  | DCR |
| crossproc_api | string |  | DCR |
| crossproc_guid | string |  | DCR |
| crossproc_hash | string |  | DCR |
| crossproc_name | string |  | DCR |
| crossproc_publisher | string |  | DCR |
| crossproc_reputation | string |  | DCR |
| crossproc_target | string |  | DCR |
| device_external_ip | string |  | DCR |
| device_group | string |  | DCR |
| device_id | string |  | DCR |
| device_name | string |  | DCR |
| device_os | string |  | DCR |
| device_timestamp | string |  | DCR |
| DstAppId | string | The ID of the destination application, as reported by the reporting device. | Azure Monitor docs |
| DstAppName | string | The name of the destination application. | Azure Monitor docs |
| DstAppType | string | The type of the destination application. | Azure Monitor docs |
| DstBytes | long | The number of bytes sent from the destination to the source for the connection or session. If the event is aggregated, DstBytes is the sum over all aggregated sessions. | Azure Monitor docs |
| DstDescription | string | A descriptive text associated with the destination. | Azure Monitor docs |
| DstDeviceType | string | The type of the destination device. | Azure Monitor docs |
| DstDomain | string | The domain of the destination device. | Azure Monitor docs |
| DstDomainType | string | The type of DstDomain. | Azure Monitor docs |
| DstDvcId | string | The ID of the destination device. | Azure Monitor docs |
| DstDvcIdType | string | The type of DstDvcId. | Azure Monitor docs |
| DstFQDN | string | The destination device hostname, including domain information when available. | Azure Monitor docs |
| DstGeoCity | string | The city associated with the destination IP address. | Azure Monitor docs |
| DstGeoCountry | string | The country associated with the destination IP address. | Azure Monitor docs |
| DstGeoLatitude | real | The latitude of the geographical coordinate associated with the destination IP address. | Azure Monitor docs |
| DstGeoLongitude | real | The longitude of the geographical coordinate associated with the destination IP address. | Azure Monitor docs |
| DstGeoRegion | string | The region, or state, within a country associated with the destination IP address. | Azure Monitor docs |
| DstHostname | string | The destination device hostname, excluding domain information. | Azure Monitor docs |
| DstInterfaceGuid | string | The GUID of the network interface used on the destination device. | Azure Monitor docs |
| DstInterfaceName | string | The network interface used for the connection or session by the destination device. | Azure Monitor docs |
| DstIpAddr | string | The IP address of the connection or session destination. | Azure Monitor docs |
| DstMacAddr | string | The MAC address of the network interface used for the connection or session by the destination device. | Azure Monitor docs |
| DstNatIpAddr | string | The DstNatIpAddr represents either of: The original address of the destination device if network address translation was used or the IP address used by the intermediary device for communication with the source. | Azure Monitor docs |
| DstNatPortNumber | int | If reported by an intermediary NAT device, the port used by the NAT device for communication with the source. | Azure Monitor docs |
| DstOriginalUserType | string | The original destination user type, if provided by the source. | Azure Monitor docs |
| DstPackets | long | The number of packets sent from the destination to the source for the connection or session. The meaning of a packet is defined by the reporting device. If the event is aggregated, DstPackets is the sum over all aggregated sessions. | Azure Monitor docs |
| DstPortNumber | int | The destination IP port. | Azure Monitor docs |
| DstSubscriptionId | string | The cloud platform subscription ID the destination device belongs to. DstSubscriptionId map to a subscription ID on Azure and to an account ID on AWS. | Azure Monitor docs |
| DstUserId | string | A machine-readable, alphanumeric, unique representation of the destination user. | Azure Monitor docs |
| DstUserIdType | string | The type of the ID stored in the DstUserId field. | Azure Monitor docs |
| DstUsername | string | The destination username, including domain information when available. Use the simple form only if domain information isn't available. | Azure Monitor docs |
| DstUsernameType | string | Specifies the type of the username stored in the DstUsername field. | Azure Monitor docs |
| DstUserType | string | The type of destination user. | Azure Monitor docs |
| DstVlanId | string | The VLAN ID related to the destination device. | Azure Monitor docs |
| DstZone | string | The network zone of the destination, as defined by the reporting device. | Azure Monitor docs |
| Dvc | string | A unique identifier of the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcAction | string | The action taken on the network session. | Azure Monitor docs |
| DvcDescription | string | A descriptive text associated with the device. For example: Primary Domain Controller. | Azure Monitor docs |
| DvcDomain | string | The domain of the device reporting the event. | Azure Monitor docs |
| DvcDomainType | string | The type of DvcDomain. Possible values include 'Windows' and 'FQDN'. | Azure Monitor docs |
| DvcFQDN | string | The hostname of the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcHostname | string | The hostname of the device reporting the event. | Azure Monitor docs |
| DvcId | string | The unique ID of the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcIdType | string | The type of DvcId. | Azure Monitor docs |
| DvcInboundInterface | string | If reported by an intermediary device, the network interface used by the NAT device for the connection to the source device. | Azure Monitor docs |
| DvcInterface | string | The network interface on which data was captured. This field is typically relevant to network related activity which is captured by an intermediate or tap device. | Azure Monitor docs |
| DvcIpAddr | string | The IP Address of the device reporting the event. | Azure Monitor docs |
| DvcMacAddr | string | The MAC address of the device on which the event occurred or which reported the event. Example: 00:1B:44:11:3A:B7. | Azure Monitor docs |
| DvcOriginalAction | string | The original DvcAction as provided by the reporting device. | Azure Monitor docs |
| DvcOs | string | The operating system running on the device reporting the event. | Azure Monitor docs |
| DvcOsVersion | string | The version of the operating system on the device reporting the event. | Azure Monitor docs |
| DvcOutboundInterface | string | If reported by an intermediary device, the network interface used by the NAT device for the connection to the destination device. | Azure Monitor docs |
| DvcSubscriptionId | string | The cloud platform subscription ID the device belongs to. DvcSubscriptionId map to a subscription ID on Azure and to an account ID on AWS. | Azure Monitor docs |
| DvcZone | string | The network on which the event occurred or which reported the event. The zone is defined by the reporting device. | Azure Monitor docs |
| event_description | string |  | DCR |
| event_id | string |  | DCR |
| event_origin | string |  | DCR |
| EventCount | int | This value is used when the source supports aggregation, and a single record may represent multiple events. | Azure Monitor docs |
| EventEndTime | datetime | The time in which the event ended. If the source supports aggregation and the record represents multiple events, the time that the last event was generated. If not provided by the source record, this field aliases the TimeGenerated field. | Azure Monitor docs |
| EventMessage | string | A general message or description. | Azure Monitor docs |
| EventOriginalResultDetails | string | The original result details provided by the source. This value is used to derive EventResultDetails, which should have only one of the values documented for each schema. | Azure Monitor docs |
| EventOriginalSeverity | string | The original severity as provided by the reporting device. This value is used to derive EventSeverity. | Azure Monitor docs |
| EventOriginalSubType | string | The original event subtype or ID, if provided by the source. For example, this field will be used to store the original Windows logon type. This value is used to derive EventSubType, which should have only one of the values documented for each schema. | Azure Monitor docs |
| EventOriginalType | string | The original event type or ID, if provided by the source. | Azure Monitor docs |
| EventOriginalUid | string | A unique ID of the original record, if provided by the source. | Azure Monitor docs |
| EventProduct | string | The product generating the event. | Azure Monitor docs |
| EventProductVersion | string | The version of the product generating the event. | Azure Monitor docs |
| EventReportUrl | string | A URL provided in the event for a resource that provides more information about the event. | Azure Monitor docs |
| EventResult | string | The outcome of the event, represented by one of the following values: Success, Partial, Failure, NA (Not Applicable). The value may not be provided directly by the sources, in which case it is derived from other event fields, for example, the EventResultDetails field. | Azure Monitor docs |
| EventResultDetails | string | Reason or details for the result reported in the EventResult field. | Azure Monitor docs |
| EventSchemaVersion | string | The version of the schema. | Azure Monitor docs |
| EventSeverity | string | The severity of the event. Valid values are: Informational, Low, Medium, or High. | Azure Monitor docs |
| EventStartTime | datetime | The time in which the event started. If the source supports aggregation and the record represents multiple events, the time that the first event was generated. If not provided by the source record, this field aliases the TimeGenerated field. | Azure Monitor docs |
| EventSubType | string | Additional description of the event type, if applicable. | Azure Monitor docs |
| EventType | string | The operation reported by the record. | Azure Monitor docs |
| EventVendor | string | The vendor of the product generating the event. | Azure Monitor docs |
| fileless_scriptload_cmdline | string |  | DCR |
| fileless_scriptload_cmdline_length | string |  | DCR |
| fileless_scriptload_hash | string |  | DCR |
| filemod_hash | string |  | DCR |
| filemod_name | string |  | DCR |
| local_ip | string |  | DCR |
| local_port | string |  | DCR |
| netconn_application_protocol | string |  | DCR |
| netconn_bytes_received | string |  | DCR |
| netconn_bytes_sent | string |  | DCR |
| netconn_community_id | string |  | DCR |
| netconn_domain | string |  | DCR |
| netconn_first_packet_timestamp | string |  | DCR |
| netconn_inbound | string |  | DCR |
| netconn_ja3_local_fingerprint | string |  | DCR |
| netconn_ja3_local_fingerprint_fields | string |  | DCR |
| netconn_ja3_remote_fingerprint | string |  | DCR |
| netconn_ja3_remote_fingerprint_fields | string |  | DCR |
| netconn_last_packet_timestamp | string |  | DCR |
| netconn_protocol | string |  | DCR |
| netconn_proxy_domain | string |  | DCR |
| netconn_proxy_ip | string |  | DCR |
| netconn_proxy_port | string |  | DCR |
| netconn_remote_device_id | string |  | DCR |
| netconn_remote_device_name | string |  | DCR |
| netconn_request_headers | string |  | DCR |
| netconn_request_method | string |  | DCR |
| netconn_request_url | string |  | DCR |
| netconn_response_headers | string |  | DCR |
| netconn_response_status_code | string |  | DCR |
| netconn_server_name_indication | string |  | DCR |
| netconn_tls_certificate_issuer_name | string |  | DCR |
| netconn_tls_certificate_subject_name | string |  | DCR |
| netconn_tls_cipher | string |  | DCR |
| netconn_tls_version | string |  | DCR |
| NetworkApplicationProtocol | string | The application layer protocol used by the connection or session. | Azure Monitor docs |
| NetworkBytes | long | Number of bytes sent in both directions. If both BytesReceived and BytesSent exist, BytesTotal should equal their sum. If the event is aggregated, NetworkBytes is the sum over all aggregated sessions. | Azure Monitor docs |
| NetworkConnectionHistory | string | TCP flags and other potential IP header information. | Azure Monitor docs |
| NetworkDirection | string | The direction of the connection or session. | Azure Monitor docs |
| NetworkDuration | int | The amount of time, in milliseconds, for the completion of the network session or connection. | Azure Monitor docs |
| NetworkIcmpCode | int | For an ICMP message, the ICMP message type numeric value as described in RFC 2780 for IPv4 network connections, or in RFC 4443 for IPv6 network connections. | Azure Monitor docs |
| NetworkIcmpType | string | For an ICMP message, the ICMP message type text representation, as described in RFC 2780 for IPv4 network connections, or in RFC 4443 for IPv6 network connections. | Azure Monitor docs |
| NetworkPackets | long | The number of packets sent in both directions. If both PacketsReceived and PacketsSent exist, BytesTotal should equal their sum. The meaning of a packet is defined by the reporting device. If the event is aggregated, NetworkPackets is the sum over all aggregated sessions. | Azure Monitor docs |
| NetworkProtocol | string | The IP protocol used by the connection or session as listed in IANA protocol assignment, which is typically TCP, UDP, or ICMP. | Azure Monitor docs |
| NetworkProtocolVersion | string | The version of NetworkProtocol. | Azure Monitor docs |
| NetworkRuleName | string | The name or ID of the rule by which DvcAction was decided upon. | Azure Monitor docs |
| NetworkRuleNumber | int | The number of the rule by which DvcAction was decided upon. | Azure Monitor docs |
| NetworkSessionId | string | The session identifier as reported by the reporting device. | Azure Monitor docs |
| org_key | string |  | DCR |
| parent_cmdline | string |  | DCR |
| parent_guid | string |  | DCR |
| parent_hash | string |  | DCR |
| parent_path | string |  | DCR |
| parent_pid | string |  | DCR |
| parent_reputation | string |  | DCR |
| process_cmdline | string |  | DCR |
| process_duration | string |  | DCR |
| process_fork_pid | string |  | DCR |
| process_guid | string |  | DCR |
| process_hash | string |  | DCR |
| process_path | string |  | DCR |
| process_path_s | string |  | DCR |
| process_pid | string |  | DCR |
| process_pid_d | string |  | DCR |
| process_publisher | string |  | DCR |
| process_reputation | string |  | DCR |
| process_terminated | string |  | DCR |
| process_username | string |  | DCR |
| process_username_s | string |  | DCR |
| remote_ip | string |  | DCR |
| remote_port | string |  | DCR |
| schema | string |  | DCR |
| sensor_action | string |  | DCR |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics | Azure Monitor docs |
| SrcAppId | string | The ID of the source application, as reported by the reporting device. | Azure Monitor docs |
| SrcAppName | string | The name of the source application. | Azure Monitor docs |
| SrcAppType | string | The type of the source application. | Azure Monitor docs |
| SrcBytes | long | The number of bytes sent from the source to the destination for the connection or session. If the event is aggregated, SrcBytes is the sum over all aggregated sessions. | Azure Monitor docs |
| SrcDescription | string | A descriptive text associated with the source. | Azure Monitor docs |
| SrcDeviceType | string | The type of the source device. | Azure Monitor docs |
| SrcDomain | string | The domain of the source device. | Azure Monitor docs |
| SrcDomainType | string | The type of SrcDomain. | Azure Monitor docs |
| SrcDvcId | string | The ID of the source device. | Azure Monitor docs |
| SrcDvcIdType | string | The type of SrcDvcId. | Azure Monitor docs |
| SrcFQDN | string | The source device hostname, including domain information when available. | Azure Monitor docs |
| SrcGeoCity | string | The city associated with the source IP address. | Azure Monitor docs |
| SrcGeoCountry | string | The country associated with the source IP address. | Azure Monitor docs |
| SrcGeoLatitude | real | The latitude of the geographical coordinate associated with the source IP address. | Azure Monitor docs |
| SrcGeoLongitude | real | The longitude of the geographical coordinate associated with the source IP address. | Azure Monitor docs |
| SrcGeoRegion | string | The region within a country associated with the source IP address. | Azure Monitor docs |
| SrcHostname | string | The source device hostname, excluding domain information. If no device name is available, may store the relevant IP address. | Azure Monitor docs |
| SrcInterfaceGuid | string | The GUID of the network interface used on the source device. | Azure Monitor docs |
| SrcInterfaceName | string | The network interface used for the connection or session by the source device. | Azure Monitor docs |
| SrcIpAddr | string | The IP address from which the connection or session originated. | Azure Monitor docs |
| SrcMacAddr | string | The MAC address of the network interface from which the connection or session originated. | Azure Monitor docs |
| SrcNatIpAddr | string | The SrcNatIpAddr represents either of: The original address of the source device if network address translation was used or the IP address used by the intermediary device for communication with the destination. | Azure Monitor docs |
| SrcNatPortNumber | int | If reported by an intermediary NAT device, the port used by the NAT device for communication with the destination. | Azure Monitor docs |
| SrcOriginalUserType | string | The original destination user type, if provided by the by the reporting device. | Azure Monitor docs |
| SrcPackets | long | The number of packets sent from the source to the destination for the connection or session. The meaning of a packet is defined by the reporting device. If the event is aggregated, SrcPackets is the sum over all aggregated sessions. | Azure Monitor docs |
| SrcPortNumber | int | The IP port from which the connection originated. Might not be relevant for a session comprising multiple connections. | Azure Monitor docs |
| SrcSubscriptionId | string | The cloud platform subscription ID the source device belongs to. SrcSubscriptionId map to a subscription ID on Azure and to an account ID on AWS. | Azure Monitor docs |
| SrcUserId | string | A machine-readable, alphanumeric, unique representation of the source user. | Azure Monitor docs |
| SrcUserIdType | string | The type of the ID stored in the SrcUserId field. | Azure Monitor docs |
| SrcUsername | string | The source username, including domain information when available. | Azure Monitor docs |
| SrcUsernameType | string | Specifies the type of the username stored in the SrcUsername field. | Azure Monitor docs |
| SrcUserType | string | The type of the source user. | Azure Monitor docs |
| SrcVlanId | string | The VLAN ID related to the source device. | Azure Monitor docs |
| SrcZone | string | The network zone of the source, as defined by the reporting device. | Azure Monitor docs |
| target_cmdline | string |  | DCR |
| TcpFlagsAck | bool | The TCP ACK flag reported. The acknowledgment flag is used to acknowledge the successful receipt of a packet. As we can see from the diagram above, the receiver sends an ACK as well as a SYN in the second step of the three way handshake process to tell the sender that it received its initial packet. | Azure Monitor docs |
| TcpFlagsFin | bool | The TCP FIN flag reported. The finished flag means there is no more data from the sender. Therefore, it is used in the last packet sent from the sender. | Azure Monitor docs |
| TcpFlagsPsh | bool | The TCP PSH flag reported. The push flag is somewhat similar to the URG flag and tells the receiver to process these packets as they are received instead of buffering them. | Azure Monitor docs |
| TcpFlagsRst | bool | The TCP RST flag reported. The reset flag gets sent from the receiver to the sender when a packet is sent to a particular host that was not expecting it. | Azure Monitor docs |
| TcpFlagsSyn | bool | The TCP SYN flag reported. The synchronisation flag is used as a first step in establishing a three way handshake between two hosts. Only the first packet from both the sender and receiver should have this flag set. | Azure Monitor docs |
| TcpFlagsUrg | bool | The TCP URG flag reported. The urgent flag is used to notify the receiver to process the urgent packets before processing all other packets. The receiver will be notified when all known urgent data has been received. See RFC 6093 for more details. | Azure Monitor docs |
| TenantId | string | The Log Analytics workspace ID | Azure Monitor docs |
| ThreatCategory | string | The category of the threat or malware identified in the network session. | Azure Monitor docs |
| ThreatConfidence | int | The confidence level of the threat identified, normalized to a value between 0 and a 100. | Azure Monitor docs |
| ThreatField | string | The field for which a threat was identified. The value is either SrcIpAddr, DstIpAddr, Domain, or DnsResponseName. | Azure Monitor docs |
| ThreatFirstReportedTime | datetime | The first time the IP address or domain were identified as a threat. | Azure Monitor docs |
| ThreatId | string | The ID of the threat or malware identified in the network session. | Azure Monitor docs |
| ThreatIpAddr | string | An IP address for which a threat was identified. The field ThreatField contains the name of the field ThreatIpAddr represents. | Azure Monitor docs |
| ThreatIsActive | bool | True ID the threat identified is considered an active threat. | Azure Monitor docs |
| ThreatLastReportedTime | datetime | The last time the IP address or domain were identified as a threat. | Azure Monitor docs |
| ThreatName | string | The name of the threat or malware identified in the network session. | Azure Monitor docs |
| ThreatOriginalConfidence | string | The original confidence level of the threat identified, as reported by the reporting device. | Azure Monitor docs |
| ThreatOriginalRiskLevel | string | The risk level as reported by the reporting device. | Azure Monitor docs |
| ThreatRiskLevel | int | The risk level associated with the session. The level is a number between 0 to 100. | Azure Monitor docs |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. | DCR, Azure Monitor docs |
| type | string | The name of the table | DCR, Azure Monitor docs |
| version | string |  | DCR |

## Solutions (6)

This table is used by the following solutions:

- [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)
- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)
- [Windows Firewall](../solutions/windows-firewall.md)

## Connectors (4)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) |  |
| [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) |  |
| [Windows Firewall Events via AMA](../connectors/windowsfirewallama.md) | `EventProduct == "Windows Firewall"` |
| [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1) — Selection Criteria: `EventType in "EndpointNetworkSession,L2NetworkSession"`

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimNetworkSessionNative](../asim/asimnetworksessionnative.md) | NetworkSession | Native |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrikeReplicatorV2](../parsers/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/networksessionnormalized`

## Selection Criteria Summary (2 criteria, 2 total references)

References by type: 1 connectors, 0 content items, 1 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `EventProduct == "Windows Firewall"` | 1 | - | - | - | **1** |
| `EventType in "EndpointNetworkSession,L2NetworkSession"` | - | - | 1 | - | **1** |
| **Total** | **1** | **0** | **1** | **0** | **2** |

### EventProduct / EventVendor

| EventProduct | EventVendor | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:---------|:---------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Windows Firewall` |  | 1 | - | - | - | **1** |

### EventType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `EndpointNetworkSession` | - | - | 1 | - | **1** |
| `L2NetworkSession` | - | - | 1 | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

