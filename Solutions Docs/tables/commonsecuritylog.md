# CommonSecurityLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CommonSecurityLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Syslog/CEF |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/commonsecuritylog) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Additional Information](#additional-information)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)
- [Resource Types](#resource-types)

## Schema (163 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/commonsecuritylog)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Activity | string | A string that represents a human-readable and understandable description of the event. |
| AdditionalExtensions | string | A placeholder for additional fields. Fields are logged as key-value pairs. |
| ApplicationProtocol | string | The protocol used in the application, such as HTTP, HTTPS, SSHv2, Telnet, POP, IMPA, IMAPS, and so on. |
| CollectorHostName | string | The hostname of the collector machine running the agent. |
| CommunicationDirection | string | Any information about the direction the observed communication has taken. Valid values: 0 = Inbound, 1 = Outbound. |
| Computer | string | Host, from Syslog. |
| DestinationDnsDomain | string | The DNS part of the fully-qualified domain name (FQDN). |
| DestinationHostName | string | The destination that the event refers to in an IP network. The format should be an FQDN associated with the destination node, when a node is available. For example: host.domain.com or host. |
| DestinationIP | string | The destination IpV4 address that the event refers to in an IP network. |
| DestinationMACAddress | string | The destination MAC address (FQDN). |
| DestinationNTDomain | string | The Windows domain name of the destination address. |
| DestinationPort | int | Destination port. Valid values: 0 - 65535. |
| DestinationProcessId | int | The ID of the destination process associated with the event. |
| DestinationProcessName | string | The name of the event's destination process, such as telnetd or sshd. |
| DestinationServiceName | string | The service that is targeted by the event. For example: sshd. |
| DestinationTranslatedAddress | string | Identifies the translated destination referred to by the event in an IP network, as an IPv4 IP address. |
| DestinationTranslatedPort | int | Port after translation, such as a firewall Valid port numbers: 0 - 65535. |
| DestinationUserID | string | Identifies the destination user by ID. For example: in Unix, the root user is generally associated with the user ID 0. |
| DestinationUserName | string | Identifies the destination user by name. |
| DestinationUserPrivileges | string | Defines the destination use's privileges. Valid values: Admninistrator, User, Guest. |
| DeviceAction | string | The action mentioned in the event. |
| DeviceAddress | string | The IPv4 address of the device generating the event. |
| DeviceCustomDate1 | string | One of two timestamp fields available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. |
| DeviceCustomDate1Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomDate2 | string | One of two timestamp fields available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. |
| DeviceCustomDate2Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomFloatingPoint1 | real | One of four floating point fields available to map fields that do not apply to any other in this dictionary. |
| DeviceCustomFloatingPoint1Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomFloatingPoint2 | real | One of four floating point fields available to map fields that do not apply to any other in this dictionary. |
| DeviceCustomFloatingPoint2Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomFloatingPoint3 | real | One of four floating point fields available to map fields that do not apply to any other in this dictionary. |
| DeviceCustomFloatingPoint3Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomFloatingPoint4 | real | One of four floating point fields available to map fields that do not apply to any other in this dictionary. |
| DeviceCustomFloatingPoint4Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomIPv6Address1 | string | One of four IPv6 address fields available to map fields that do not apply to any other in this dictionary. |
| DeviceCustomIPv6Address1Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomIPv6Address2 | string | One of four IPv6 address fields available to map fields that do not apply to any other in this dictionary. |
| DeviceCustomIPv6Address2Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomIPv6Address3 | string | One of four IPv6 address fields available to map fields that do not apply to any other in this dictionary. |
| DeviceCustomIPv6Address3Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomIPv6Address4 | string | One of four IPv6 address fields available to map fields that do not apply to any other in this dictionary. |
| DeviceCustomIPv6Address4Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomNumber1 | int | Soon to be a deprecated field. Will be replaced by FieldDeviceCustomNumber1. |
| DeviceCustomNumber1Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomNumber2 | int | Soon to be a deprecated field. Will be replaced by FieldDeviceCustomNumber2. |
| DeviceCustomNumber2Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomNumber3 | int | Soon to be a deprecated field. Will be replaced by FieldDeviceCustomNumber3. |
| DeviceCustomNumber3Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomString1 | string | One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. |
| DeviceCustomString1Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomString2 | string | One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. |
| DeviceCustomString2Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomString3 | string | One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. |
| DeviceCustomString3Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomString4 | string | One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. |
| DeviceCustomString4Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomString5 | string | One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. |
| DeviceCustomString5Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceCustomString6 | string | One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. |
| DeviceCustomString6Label | string | All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field. |
| DeviceDnsDomain | string | The DNS domain part of the full qualified domain name (FQDN). |
| DeviceEventCategory | string | Represents the category assigned by the originating device. Devices often use their own categorization schema to classify event. Example: '/Monitor/Disk/Read'. |
| DeviceEventClassID | string | String or integer that serves as a unique identifier per event type. |
| DeviceExternalID | string | A name that uniquely identifies the device generating the event. |
| DeviceFacility | string | The facility generating the event. For example: auth or local1. |
| DeviceInboundInterface | string | The interface on which the packet or data entered the device. For example: ethernet1/2. |
| DeviceMacAddress | string | The MAC address of the device generating the event. |
| DeviceName | string | The FQDN associated with the device node, when a node is available. For example: host.domain.com or host. |
| DeviceNtDomain | string | The Windows domain of the device address. |
| DeviceOutboundInterface | string | Interface on which the packet or data left the device. |
| DevicePayloadId | string | Unique identifier for the payload associated with the event. |
| DeviceProduct | string | String that together with device product and version definitions, uniquely identifies the type of sending device. |
| DeviceTimeZone | string | Timezone of the device generating the event. |
| DeviceTranslatedAddress | string | Identifies the translated device address that the event refers to, in an IP network. The format is an Ipv4 address. |
| DeviceVendor | string | String that together with device product and version definitions, uniquely identifies the type of sending device. |
| DeviceVersion | string | String that together with device product and version definitions, uniquely identifies the type of sending device. |
| EndTime | datetime | The time at which the activity related to the event ended. |
| EventCount | int | A count associated with the event, showing how many times the same event was observed. |
| EventOutcome | string | Displays the outcome, usually as 'success' or 'failure'. |
| EventType | int | Event type. Value values include: 0: base event, 1: aggregated, 2: correlation event, 3: action event. Note: This event can be omitted for base events. |
| ExternalID | int | Soon to be a deprecated field. Will be replaced by ExtID. |
| ExtID | string | An ID used by the originating device (will replace legacy ExternalID). Typically, these values have increasing values that are each associated with an event. |
| FieldDeviceCustomNumber1 | long | One of three number fields available to map fields that do not apply to any other in this dictionary (will replace legacy DeviceCustomNumber1). Use sparingly and seek a more specific, dictionary supplied field when possible. |
| FieldDeviceCustomNumber2 | long | One of three number fields available to map fields that do not apply to any other in this dictionary (will replace legacy DeviceCustomNumber2). Use sparingly and seek a more specific, dictionary supplied field when possible. |
| FieldDeviceCustomNumber3 | long | One of three number fields available to map fields that do not apply to any other in this dictionary (will replace legacy DeviceCustomNumber3). Use sparingly and seek a more specific, dictionary supplied field when possible. |
| FileCreateTime | string | Time when the file was created. |
| FileHash | string | Hash of a file. |
| FileID | string | An ID associated with a file, such as the inode. |
| FileModificationTime | string | Time when the file was last modified. |
| FileName | string | The file's name, without the path. |
| FilePath | string | Full path to the file, including the filename. For example: C:\ProgramFiles\WindowsNT\Accessories\wordpad.exe or /usr/bin/zip. |
| FilePermission | string | The file's permissions. For example: '2,1,1'. |
| FileSize | int | The size of the file in bytes. |
| FileType | string | File type, such as pipe, socket, and so on. |
| FlexDate1 | string | A timestamp field available to map a timestamp that does not apply to any other defined timestamp field in this dictionary. Use all flex fields sparingly and seek a more specific, dictionary supplied field when possible. These fields are typically reserved for customer use and should not be set by vendors unless necessary. |
| FlexDate1Label | string | The label field is a string and describes the purpose of the flex field. |
| FlexNumber1 | int | Number fields available to map Int data that does not apply to any other field in this dictionary. |
| FlexNumber1Label | string | The label that describes the value in FlexNumber1 |
| FlexNumber2 | int | Number fields available to map Int data that does not apply to any other field in this dictionary. |
| FlexNumber2Label | string | The label that describes the value in FlexNumber2 |
| FlexString1 | string | One of four floating point fields available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. These fields are typically reserved for customer use and should not be set by vendors unless necessary. |
| FlexString1Label | string | The label field is a string and describes the purpose of the flex field. |
| FlexString2 | string | One of four floating point fields available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. These fields are typically reserved for customer use and should not be set by vendors unless necessary. |
| FlexString2Label | string | The label field is a string and describes the purpose of the flex field. |
| IndicatorThreatType | string | The threat type of the MaliciousIP according to our TI feed. |
| LogSeverity | string | A string or integer that describes the importance of the event. Valid string values: Unknown , Low, Medium, High, Very-High Valid integer values are: 0-3 = Low, 4-6 = Medium, 7-8 = High, 9-10 = Very-High. |
| MaliciousIP | string | If one of the IP in the message was correlate with the current TI feed we have it will show up here. |
| MaliciousIPCountry | string | The country of the MaliciousIP according to the GEO information at the time of the record ingestion. |
| MaliciousIPLatitude | real | The Latitude of the MaliciousIP according to the GEO information at the time of the record ingestion. |
| MaliciousIPLongitude | real | The Longitude of the MaliciousIP according to the GEO information at the time of the record ingestion. |
| Message | string | A message that gives more details about the event. |
| OldFileCreateTime | string | Time when the old file was created. |
| OldFileHash | string | Hash of the old file. |
| OldFileID | string | And ID associated with the old file, such as the inode. |
| OldFileModificationTime | string | Time when the old file was last modified. |
| OldFileName | string | Name of the old file. |
| OldFilePath | string | Full path to the old file, including the filename. For example: C:\ProgramFiles\WindowsNT\Accessories\wordpad.exe or /usr/bin/zip. |
| OldFilePermission | string | Permissions of the old file. For example: '2,1,1'. |
| OldFileSize | int | The size of the old file in bytes. |
| OldFileType | string | File type of the old file, such as a pipe, socket, and so on. |
| OriginalLogSeverity | string | A non-mapped version of LogSeverity. For example: Warning/Critical/Info insted of the normilized Low/Medium/High in the LogSeverity Field |
| ProcessID | int | Defines the ID of the process on the device generating the event. |
| ProcessName | string | Process name associated with the event. For example: in UNIX, the process generating the syslog entry. |
| Protocol | string | Transport protocol that identifies the Layer-4 protocol used. Possible values include protocol names, such as TCP or UDP. |
| Reason | string | The reason an audit event was generated. For example 'bad password' or 'unknown user'. This could also be an error or return code. Example: '0x1234'. |
| ReceiptTime | string | The time at which the event related to the activity was received. Different then the 'Timegenerated' field, which is when the event was recieved in the log collector machine. |
| ReceivedBytes | long | Number of bytes transferred inbound. |
| RemoteIP | string | The remote IP address, derived from the event's direction value, if possible. |
| RemotePort | string | The remote port, derived from the event's direction value, if possible. |
| ReportReferenceLink | string | Link to the report of the TI feed. |
| RequestClientApplication | string | The user agent associated with the request. |
| RequestContext | string | Describes the content from which the request originated, such as the HTTP Referrer. |
| RequestCookies | string | Cookies associated with the request. |
| RequestMethod | string | The method used to access a URL. Valid values include methods such as POST, GET, and so on. |
| RequestURL | string | The URL accessed for an HTTP request, including the protocol. For example: http://www/secure.com. |
| SentBytes | long | Number of bytes transferred outbound. |
| SimplifiedDeviceAction | string | A mapped version of DeviceAction, such as Denied > Deny. |
| SourceDnsDomain | string | The DNS domain part of the complete FQDN. |
| SourceHostName | string | Identifies the source that event refers to in an IP network. Format should be a fully qualified domain name (DQDN) associated with the source node, when a node is available. For example: host or host.domain.com. |
| SourceIP | string | The source that an event refers to in an IP network, as an IPv4 address. |
| SourceMACAddress | string | Source MAC address. |
| SourceNTDomain | string | The Windows domain name for the source address. |
| SourcePort | int | The source port number. Valid port numbers are 0 - 65535. |
| SourceProcessId | int | The ID of the source process associated with the event. |
| SourceProcessName | string | The name of the event's source process. |
| SourceServiceName | string | The service responsible for generating the event. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SourceTranslatedAddress | string | Identifies the translated source that the event refers to in an IP network. |
| SourceTranslatedPort | int | Source port after translation, such as a firewall. Valid port numbers are 0 - 65535. |
| SourceUserID | string | Identifies the source user by ID. |
| SourceUserName | string | Identifies the source user by name. Email addresses are also mapped into the UserName fields. The sender is a candidate to put into this field. |
| SourceUserPrivileges | string | The source user's privileges. Valid values include: Administrator, User, Guest. |
| StartTime | datetime | The time when the activity that the event refers to started. |
| TenantId | string | The Log Analytics workspace ID |
| ThreatConfidence | string | The threat confidence of the MaliciousIP according to our TI feed. |
| ThreatDescription | string | The threat description of the MaliciousIP according to our TI feed. |
| ThreatSeverity | int | The threat severity of the MaliciousIP according to our TI feed at the time of the record ingestion. |
| TimeGenerated | datetime | Event collection time in UTC. |
| Type | string | The name of the table |

## Additional Information

- 📖 **Related Documentation:** [CEF and CommonSecurityLog field mapping](https://learn.microsoft.com/azure/sentinel/cef-name-mapping) - Maps CEF field names to CommonSecurityLog column names
- 📖 **Related Documentation:** [CEF collection best practices](https://techcommunity.microsoft.com/blog/microsoftsentinelblog/best-practices-for-common-event-format-cef-collection-in-azure-sentinel/969990) - Performance tuning and collection recommendations
- 📚 **Vendor CEF Guide:** [Palo Alto PAN-OS](https://docs.paloaltonetworks.com/pan-os/11-1/pan-os-admin/monitoring/use-syslog-for-monitoring/syslog-field-descriptions) - Syslog field descriptions
- 📚 **Vendor CEF Guide:** [Fortinet FortiGate](https://docs.fortinet.com/document/fortigate/7.4.0/fortios-log-message-reference/357866/log-message-fields) - Log message fields reference
- 📚 **Vendor CEF Guide:** [Cisco ASA](https://www.cisco.com/c/en/us/td/docs/security/asa/syslog/b_syslog.html) - Syslog messages reference
- 📚 **Vendor CEF Guide:** [Check Point](https://support.checkpoint.com/results/sk/sk144192) - Log fields description
- 📚 **Vendor CEF Guide:** [Barracuda WAF](https://campus.barracuda.com/product/webapplicationfirewall/doc/168300161/how-to-export-logs-from-the-barracuda-web-application-firewall) - How to export logs
- 📚 **Vendor CEF Guide:** [Citrix/NetScaler WAF](https://docs.netscaler.com/en-us/citrix-adc/current-release/application-firewall/logs.html) - Application Firewall logs
- 📚 **Vendor CEF Guide:** [Symantec Endpoint Protection](https://techdocs.broadcom.com/us/en/symantec-security-software/endpoint-security-and-management/endpoint-protection/all/Monitoring-Reporting-and-Enforcing-Compliance/viewing-logs-v7522439-d37e464/about-the-types-of-logs-v8156418-d37e6.html) - Log types reference

## Solutions (80)

This table is used by the following solutions:

- [AI Analyst Darktrace](../solutions/ai-analyst-darktrace.md)
- [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md)
- [Akamai Security Events](../solutions/akamai-security-events.md)
- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [AristaAwakeSecurity](../solutions/aristaawakesecurity.md)
- [Aruba ClearPass](../solutions/aruba-clearpass.md)
- [Barracuda CloudGen Firewall](../solutions/barracuda-cloudgen-firewall.md)
- [Barracuda WAF](../solutions/barracuda-waf.md)
- [Broadcom SymantecDLP](../solutions/broadcom-symantecdlp.md)
- [Check Point](../solutions/check-point.md)
- [Cisco Firepower EStreamer](../solutions/cisco-firepower-estreamer.md)
- [CiscoASA](../solutions/ciscoasa.md)
- [CiscoSEG](../solutions/ciscoseg.md)
- [Citrix Web App Firewall](../solutions/citrix-web-app-firewall.md)
- [Claroty](../solutions/claroty.md)
- [Claroty xDome](../solutions/claroty-xdome.md)
- [Common Event Format](../solutions/common-event-format.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [Contrast Protect](../solutions/contrast-protect.md)
- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [CyberArk Privilege Access Manager (PAM) Events](../solutions/cyberark-privilege-access-manager-pam-events.md)
- [Cyware](../solutions/cyware.md)
- [Delinea Secret Server](../solutions/delinea-secret-server.md)
- [Endace](../solutions/endace.md)
- [ExtraHop Reveal(x)](../solutions/extrahop-reveal-x.md)
- [F5 Networks](../solutions/f5-networks.md)
- [FalconFriday](../solutions/falconfriday.md)
- [FireEye Network Security](../solutions/fireeye-network-security.md)
- [Forcepoint CASB](../solutions/forcepoint-casb.md)
- [Forcepoint CSG](../solutions/forcepoint-csg.md)
- [Forcepoint NGFW](../solutions/forcepoint-ngfw.md)
- [ForgeRock Common Audit for CEF](../solutions/forgerock-common-audit-for-cef.md)
- [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md)
- [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Illumio Core](../solutions/illumio-core.md)
- [Illusive Platform](../solutions/illusive-platform.md)
- [Imperva WAF Gateway](../solutions/imperva-waf-gateway.md)
- [Infoblox](../solutions/infoblox.md)
- [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md)
- [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)
- [IronNet IronDefense](../solutions/ironnet-irondefense.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [Netwrix Auditor](../solutions/netwrix-auditor.md)
- [NozomiNetworks](../solutions/nozominetworks.md)
- [OSSEC](../solutions/ossec.md)
- [Onapsis Platform](../solutions/onapsis-platform.md)
- [OneIdentity](../solutions/oneidentity.md)
- [Palo Alto - XDR (Cortex)](../solutions/palo-alto-xdr-cortex.md)
- [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md)
- [PaloAltoCDL](../solutions/paloaltocdl.md)
- [PingFederate](../solutions/pingfederate.md)
- [Radiflow](../solutions/radiflow.md)
- [RidgeSecurity](../solutions/ridgesecurity.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md)
- [Silverfort](../solutions/silverfort.md)
- [SonicWall Firewall](../solutions/sonicwall-firewall.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Trend Micro Apex One](../solutions/trend-micro-apex-one.md)
- [Trend Micro Deep Security](../solutions/trend-micro-deep-security.md)
- [Trend Micro TippingPoint](../solutions/trend-micro-tippingpoint.md)
- [Vectra AI Detect](../solutions/vectra-ai-detect.md)
- [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)
- [Votiro](../solutions/votiro.md)
- [WireX Network Forensics Platform](../solutions/wirex-network-forensics-platform.md)
- [WithSecureElementsViaConnector](../solutions/withsecureelementsviaconnector.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)
- [Zscaler Internet Access](../solutions/zscaler-internet-access.md)
- [iboss](../solutions/iboss.md)
- [vArmour Application Controller](../solutions/varmour-application-controller.md)

## Connectors (113)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[Deprecated] Vectra AI Detect via Legacy Agent](../connectors/aivectradetect.md) | `DeviceEventClassID == "hsc"`<br>`DeviceEventClassID !in "health,audit,campaigns,hsc,asc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` |
| [[Deprecated] Vectra AI Detect via AMA](../connectors/aivectradetectama.md) | `DeviceEventClassID == "hsc"`<br>`DeviceEventClassID !in "health,audit,campaigns,hsc,asc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` |
| [[Deprecated] Akamai Security Events via Legacy Agent](../connectors/akamaisecurityevents.md) | `DeviceProduct == "akamai_siem"`<br>`DeviceVendor == "Akamai"` |
| [[Deprecated] Akamai Security Events via AMA](../connectors/akamaisecurityeventsama.md) | `DeviceProduct == "akamai_siem"`<br>`DeviceVendor == "Akamai"` |
| [[Deprecated] Awake Security via Legacy Agent](../connectors/aristaawakesecurity.md) | `DeviceProduct == "Awake Security"`<br>`DeviceVendor == "Arista Networks"` |
| [[Deprecated] Aruba ClearPass via Legacy Agent](../connectors/arubaclearpass.md) | `DeviceProduct == "ClearPass"`<br>`DeviceVendor == "Aruba Networks"` |
| [[Deprecated] Aruba ClearPass via AMA](../connectors/arubaclearpassama.md) | `DeviceProduct == "ClearPass"`<br>`DeviceVendor == "Aruba Networks"` |
| [[Deprecated] Barracuda Web Application Firewall via Legacy Agent](../connectors/barracuda.md) | `DeviceVendor == "Barracuda"` |
| [[Deprecated] Broadcom Symantec DLP via Legacy Agent](../connectors/broadcomsymantecdlp.md) | `DeviceProduct == "DLP"`<br>`DeviceVendor == "Symantec"` |
| [[Deprecated] Broadcom Symantec DLP via AMA](../connectors/broadcomsymantecdlpama.md) | `DeviceProduct == "DLP"`<br>`DeviceVendor == "Symantec"` |
| [Common Event Format (CEF)](../connectors/cef.md) | `DeviceVendor !in "Cisco,Check Point,Palo Alto Networks,Fortinet,F5,Barracuda,ExtraHop,OneIdentity,Zscaler,ForgeRock Inc,Cyber-Ark,illusive,Vectra Networks,Citrix,Darktrace,Akamai,Aruba Networks,CrowdStrike,Symantec,Claroty,Contrast Security,Delinea Software,Thycotic Software,FireEye,Forcepoint CSG,Forcepoint,Forcepoint CASB,iboss,Illumio,Imperva Inc.,Infoblox,Morphisec,Netwrix,Nozomi,Onapsis,OSSEC,PingFederate,RidgeSecurity,SonicWall,Trend Micro,vArmour"`<br>`DeviceVendor !in "Cisco,Check Point,Palo Alto Networks,Fortinet,F5,Barracuda,ExtraHop,OneIdentity,Zscaler,ForgeRock Inc,Cyber-Ark,illusive,Vectra Networks,Citrix,Darktrace,Akamai,Aruba Networks,CrowdStrike,Symantec,Claroty,Contrast Security,Delinea Software,Thycotic Software,FireEye,Forcepoint CSG,Forcepoint,Forcepoint CASB,iboss,Illumio,Imperva Inc.,Infoblox,Morphisec,Netwrix,Nozomi,Onapsis,OSSEC,PingFederate,RidgeSecurity,SonicWall,Trend Micro,vArmour,Votiro"` |
| [Common Event Format (CEF) via AMA](../connectors/cefama.md) |  |
| [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) | `DeviceProduct == "ASA"`<br>`DeviceVendor == "Cisco"`<br>`SimplifiedDeviceAction == "Deny"` |
| [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) | `DeviceProduct in "ASA,FTD"`<br>`DeviceVendor == "Cisco"` |
| [[Deprecated] Cisco Firepower eStreamer via Legacy Agent](../connectors/ciscofirepowerestreamer.md) | `Activity == "File Malware Event"`<br>`DestinationPort == "80"`<br>`DeviceAction != "Allow"`<br>`DeviceProduct == "Firepower"`<br>`DeviceVendor == "Cisco"` |
| [[Deprecated] Cisco Firepower eStreamer via AMA](../connectors/ciscofirepowerestreamerama.md) | `Activity == "File Malware Event"`<br>`DestinationPort == "80"`<br>`DeviceAction != "Allow"`<br>`DeviceProduct == "Firepower"`<br>`DeviceVendor == "Cisco"` |
| [[Deprecated] Cisco Secure Email Gateway via Legacy Agent](../connectors/ciscoseg.md) | `DeviceEventClassID == "ESA_CONSOLIDATED_LOG_EVENT"` |
| [[Deprecated] Cisco Secure Email Gateway via AMA](../connectors/ciscosegama.md) | `DeviceEventClassID == "ESA_CONSOLIDATED_LOG_EVENT"`<br>`DeviceProduct == "ESA_CONSOLIDATED_LOG_EVENT"`<br>`DeviceVendor == "Cisco"` |
| [[Deprecated] Citrix WAF (Web App Firewall) via Legacy Agent](../connectors/citrixwaf.md) | `Activity in "APPFW_SQL,APPFW_STARTURL,APPFW_XSS"`<br>`DeviceProduct == "NetScaler"`<br>`DeviceVendor == "Citrix"` |
| [[Deprecated] Citrix WAF (Web App Firewall) via AMA](../connectors/citrixwafama.md) | `Activity in "APPFW_SQL,APPFW_STARTURL,APPFW_XSS"`<br>`DeviceProduct == "NetScaler"`<br>`DeviceVendor == "Citrix"` |
| [[Deprecated] Claroty via Legacy Agent](../connectors/claroty.md) | `DeviceVendor == "Claroty"` |
| [[Deprecated] Claroty via AMA](../connectors/clarotyama.md) | `DeviceVendor == "Claroty"` |
| [Claroty xDome](../connectors/clarotyxdome.md) | `DeviceVendor in "Claroty,Medigate"` |
| [Zscaler Internet Access Cloud NSS Audit Log Push Connector](../connectors/cloudnssauditlogs-ccp.md) | `DeviceProduct == "NSSAuditlog"`<br>`EventOutcome == "Failure"` |
| [Zscaler Internet Access Cloud NSS CASB Activity Log Push Connector](../connectors/cloudnsscasbactivitylogs-ccp.md) | `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbactivitylog"` |
| [Zscaler Internet Access Cloud NSS CASB CRM Log Push Connector](../connectors/cloudnsscasbcrmlogs-ccp.md) | `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbcrmlog"` |
| [Zscaler Internet Access Cloud NSS CASB Cloud Storage Log Push Connector](../connectors/cloudnsscasbcloudstoragelogs-ccp.md) | `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbcloudstoragelog"` |
| [Zscaler Internet Access Cloud NSS CASB Collaboration Log Push Connector](../connectors/cloudnsscasbcollablogs-ccp.md) | `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbcollablog"` |
| [Zscaler Internet Access Cloud NSS CASB Email Log Push Connector](../connectors/cloudnsscasbemaillogs-ccp.md) | `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbemaillog"` |
| [Zscaler Internet Access Cloud NSS CASB File Sharing Log Push Connector](../connectors/cloudnsscasbfilesharinglogs-ccp.md) | `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbfilesharinglog"` |
| [Zscaler Internet Access Cloud NSS CASB ITSM Log Push Connector](../connectors/cloudnsscasbitsmlogs-ccp.md) | `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbitsmlog"` |
| [Zscaler Internet Access Cloud NSS CASB Repo Log Push Connector](../connectors/cloudnsscasbrepologs-ccp.md) | `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbrepolog"` |
| [Zscaler Internet Access Cloud NSS DNS Log Push Connector](../connectors/cloudnssdnslogs-ccp.md) | `DeviceEventClassID == "Blocked"`<br>`DeviceProduct == "NSSDNSlog"` |
| [Zscaler Internet Access Cloud NSS Email DLP Log Push Connector](../connectors/cloudnssemaildlplogs-ccp.md) | `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSEmaildlplog"` |
| [Zscaler Internet Access Cloud NSS Endpoint DLP Log Push Connector](../connectors/cloudnssendpointdlplogs-ccp.md) | `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSEndpointdlplog"` |
| [Zscaler Internet Access Cloud NSS Firewall Log Push Connector](../connectors/cloudnssfwlogs-ccp.md) | `DeviceProduct == "NSSFWlog"` |
| [Zscaler Internet Access Cloud NSS Tunnel Log Push Connector](../connectors/cloudnsstunnellogs-ccp.md) | `DeviceEventClassID in "IPSec Phase1,IPSec Phase2,Tunnel Event"`<br>`DeviceProduct == "NSSTunnellog"` |
| [Zscaler Internet Access Cloud NSS Web Log Push Connector](../connectors/cloudnssweblogs-ccp.md) | `DeviceEventClassID == "Blocked"`<br>`DeviceProduct == "NSSWeblog"` |
| [[Deprecated] Contrast Protect via Legacy Agent](../connectors/contrastprotect.md) | `DeviceVendor == "Contrast Security"` |
| [[Deprecated] Contrast Protect via AMA](../connectors/contrastprotectama.md) | `DeviceVendor == "Contrast Security"` |
| [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) | `DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` |
| [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) | `DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` |
| [[Deprecated] CyberArk Enterprise Password Vault (EPV) Events via Legacy Agent](../connectors/cyberark.md) | `DeviceProduct == "Vault"`<br>`DeviceVendor == "Cyber-Ark"`<br>`LogSeverity in "10,7"` |
| [[Deprecated] CyberArk Privilege Access Manager (PAM) Events via AMA](../connectors/cyberarkama.md) | `DeviceProduct == "Vault"`<br>`DeviceVendor == "Cyber-Ark"`<br>`LogSeverity in "10,7"` |
| [[Deprecated] AI Analyst Darktrace via Legacy Agent](../connectors/darktrace.md) | `DeviceVendor == "Darktrace"` |
| [[Deprecated] AI Analyst Darktrace via AMA](../connectors/darktraceama.md) | `DeviceVendor == "Darktrace"` |
| [[Deprecated] Delinea Secret Server via AMA](../connectors/delineasecretserverama.md) | `Activity has "SECRET - CREATE"`<br>`Activity has "SECRET - VIEW"`<br>`DeviceProduct == "Secret Server"`<br>`DeviceVendor in "Delinea Software,Thycotic Software"` |
| [[Deprecated] Delinea Secret Server via Legacy Agent](../connectors/delineasecretserver-cef.md) | `Activity has "SECRET - CREATE"`<br>`Activity has "SECRET - VIEW"`<br>`DeviceProduct == "Secret Server"`<br>`DeviceVendor in "Delinea Software,Thycotic Software"` |
| [[Deprecated] ExtraHop Reveal(x) via Legacy Agent](../connectors/extrahopnetworks.md) | `DeviceEventClassID == "ExtraHop Detection"`<br>`DeviceVendor == "ExtraHop"` |
| [[Deprecated] ExtraHop Reveal(x) via AMA](../connectors/extrahopnetworksama.md) | `DeviceEventClassID == "ExtraHop Detection"`<br>`DeviceVendor == "ExtraHop"` |
| [[Deprecated] F5 Networks via Legacy Agent](../connectors/f5.md) | `DeviceVendor == "F5"` |
| [[Deprecated] F5 Networks via AMA](../connectors/f5ama.md) | `DeviceVendor == "F5"` |
| [[Deprecated] FireEye Network Security (NX) via Legacy Agent](../connectors/fireeyenx.md) | `DeviceVendor == "FireEye"` |
| [[Deprecated] FireEye Network Security (NX) via AMA](../connectors/fireeyenxama.md) | `DeviceVendor == "FireEye"` |
| [[Deprecated] Forcepoint CSG via Legacy Agent](../connectors/forcepointcsg.md) | `Activity == "Blocked"`<br>`DeviceProduct in "Email,Web"`<br>`DeviceVendor == "Forcepoint CSG"`<br>`LogSeverity == "6"`<br>`SourceUserID != "Not available"` |
| [[Deprecated] Forcepoint CSG via AMA](../connectors/forcepointcsgama.md) | `Activity == "Blocked"`<br>`DeviceProduct in "Email,Web"`<br>`DeviceVendor == "Forcepoint CSG"`<br>`LogSeverity == "6"`<br>`SourceUserID != "Not available"` |
| [[Deprecated] Forcepoint CASB via Legacy Agent](../connectors/forcepointcasb.md) | `DeviceVendor == "Forcepoint CASB"` |
| [[Deprecated] Forcepoint CASB via AMA](../connectors/forcepointcasbama.md) | `DeviceVendor == "Forcepoint CASB"` |
| [[Deprecated] Forcepoint NGFW via Legacy Agent](../connectors/forcepointngfw.md) | `Activity contains "compromise"`<br>`DeviceAction == "Terminate"`<br>`DeviceProduct == "NGFW"`<br>`DeviceVendor == "Forcepoint"` |
| [[Deprecated] Forcepoint NGFW via AMA](../connectors/forcepointngfwama.md) | `Activity contains "compromise"`<br>`DeviceAction == "Terminate"`<br>`DeviceProduct == "NGFW"`<br>`DeviceVendor == "Forcepoint"` |
| [[Deprecated] ForgeRock Identity Platform](../connectors/forgerock.md) | `DeviceAction == "FAILED"`<br>`DeviceProduct == "IDM"`<br>`DeviceVendor == "ForgeRock Inc"` |
| [[Deprecated] Fortinet via Legacy Agent](../connectors/fortinet.md) | `DeviceProduct startswith "Fortigate"`<br>`DeviceVendor == "Fortinet"` |
| [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md) | `DeviceProduct == "Fortigate"`<br>`DeviceProduct startswith "Fortigate"`<br>`DeviceVendor == "Fortinet"` |
| [[Deprecated] Fortinet FortiWeb Web Application Firewall via Legacy Agent](../connectors/fortinetfortiweb.md) | `DeviceProduct == "Fortiweb"`<br>`DeviceProduct has "Fortiweb"`<br>`DeviceVendor == "Fortinet"` |
| [Fortinet FortiWeb Web Application Firewall via AMA](../connectors/fortinetfortiwebama.md) | `Computer contains "Fortiweb"`<br>`DeviceProduct contains "Fortiweb"`<br>`DeviceProduct has "Fortiweb"`<br>`DeviceVendor == "Fortinet"`<br>`DeviceVendor contains "Fortinet"` |
| [[Deprecated] Illumio Core via Legacy Agent](../connectors/illumiocore.md) | `DeviceCustomString1Label in "dst_vulns,event_href"`<br>`DeviceCustomString2Label in "resource_changes,state"`<br>`DeviceCustomString4Label in "dst_labels,notifications"`<br>`DeviceCustomString6Label == "dst_href"`<br>`DeviceVendor == "Illumio"` |
| [[Deprecated] Illumio Core via AMA](../connectors/illumiocoreama.md) | `DeviceCustomString1Label in "dst_vulns,event_href"`<br>`DeviceCustomString2Label in "resource_changes,state"`<br>`DeviceCustomString4Label in "dst_labels,notifications"`<br>`DeviceCustomString6Label == "dst_href"`<br>`DeviceVendor == "Illumio"` |
| [Imperva WAF Gateway](../connectors/impervawafgateway.md) | `Activity == "sql-injection"`<br>`DeviceAction == "block"`<br>`DeviceProduct == "WAF Gateway"`<br>`DeviceVendor in "Imperva,Imperva Inc."`<br>`LogSeverity == "High"` |
| [[Deprecated] Infoblox Cloud Data Connector via Legacy Agent](../connectors/infobloxclouddataconnector.md) | `AdditionalExtensions has "InfobloxRPZ=APP_"`<br>`AdditionalExtensions has "InfobloxRPZ=CAT_"`<br>`DeviceEventClassID == "DHCP-LEASE-CREATE"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [[Deprecated] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md) | `AdditionalExtensions has "InfobloxRPZ=APP_"`<br>`AdditionalExtensions has "InfobloxRPZ=CAT_"`<br>`DeviceEventClassID == "DHCP-LEASE-CREATE"`<br>`DeviceEventClassID has "Audit"`<br>`DeviceEventClassID has "DHCP"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceEventClassID has "Service"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [[Recommended] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md) | `AdditionalExtensions has "InfobloxRPZ=APP_"`<br>`AdditionalExtensions has "InfobloxRPZ=CAT_"`<br>`DeviceEventClassID == "DHCP-LEASE-CREATE"`<br>`DeviceEventClassID has "Audit"`<br>`DeviceEventClassID has "DHCP"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceEventClassID has "Service"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [[Deprecated] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md) | `DeviceEventClassID == "BloxOne-InsightsNotification-Log"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [[Recommended] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md) | `DeviceEventClassID == "BloxOne-InsightsNotification-Log"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [[Deprecated] Infoblox SOC Insight Data Connector via Legacy Agent](../connectors/infobloxsocinsightsdataconnector-legacy.md) | `DeviceEventClassID == "BloxOne-InsightsNotification-Log"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [IronNet IronDefense](../connectors/ironnetirondefense.md) | `DeviceProduct in "IronDefense,IronDome"`<br>`DeviceVendor == "IronNet"` |
| [[Deprecated] Netwrix Auditor via Legacy Agent](../connectors/netwrix.md) | `DeviceVendor == "Netwrix"` |
| [[Deprecated] Netwrix Auditor via AMA](../connectors/netwrixama.md) | `DeviceVendor == "Netwrix"` |
| [[Deprecated] Nozomi Networks N2OS via Legacy Agent](../connectors/nozominetworksn2os.md) | `DeviceVendor has "Nozomi"` |
| [[Deprecated] Nozomi Networks N2OS via AMA](../connectors/nozominetworksn2osama.md) | `DeviceVendor has "Nozomi"` |
| [[Deprecated] OSSEC via Legacy Agent](../connectors/ossec.md) | `DeviceVendor has "OSSEC"` |
| [[Deprecated] OSSEC via AMA](../connectors/ossecama.md) | `DeviceVendor == "OSSEC"`<br>`DeviceVendor has "OSSEC"` |
| [[Deprecated] Onapsis Platform](../connectors/onapsisplatform.md) | `DeviceProduct == "OSP"`<br>`DeviceVendor == "Onapsis"` |
| [One Identity Safeguard](../connectors/oneidentity.md) | `Activity == "SessionClosed"`<br>`DeviceCustomString1Label == "Session ID"`<br>`DeviceProduct == "SPS"`<br>`DeviceVendor == "OneIdentity"` |
| [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via Legacy Agent](../connectors/paloaltocdl.md) | `DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via AMA](../connectors/paloaltocdlama.md) | `DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md) | `Activity == "THREAT"`<br>`DeviceProduct has "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md) | `Activity == "THREAT"`<br>`DeviceProduct == "PAN-OS"`<br>`DeviceProduct has "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [Palo Alto Networks Cortex XDR](../connectors/paloaltonetworkscortex.md) | `DeviceAction == "Prevented (Blocked)"`<br>`DeviceProduct == "Cortex XDR"`<br>`DeviceVendor == "Palo Alto Networks"`<br>`LogSeverity == "6"` |
| [[Deprecated] PingFederate via Legacy Agent](../connectors/pingfederate.md) | `DeviceProduct has "PingFederate"` |
| [[Deprecated] PingFederate via AMA](../connectors/pingfederateama.md) | `DeviceProduct has "PingFederate"` |
| [Radiflow iSID via AMA](../connectors/radiflowisid.md) | `DeviceProduct == "iSID"`<br>`DeviceVendor == "radiflow"` |
| [[Deprecated] RIDGEBOT - data connector for Microsoft Sentinel](../connectors/ridgebotdataconnector.md) | `DeviceEventClassID == "4001"`<br>`DeviceVendor == "RidgeSecurity"` |
| [Silverfort Admin Console](../connectors/silverfortama.md) | `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct == "Admin Console"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor == "Silverfort"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "UserBruteForce"` |
| [[Deprecated] SonicWall Firewall via Legacy Agent](../connectors/sonicwallfirewall.md) | `AdditionalExtensions contains "fw_action="`<br>`DeviceVendor == "SonicWall"` |
| [[Deprecated] SonicWall Firewall via AMA](../connectors/sonicwallfirewallama.md) | `AdditionalExtensions contains "fw_action="`<br>`DeviceVendor == "SonicWall"` |
| [Threat Intelligence Platforms](../connectors/threatintelligence.md) |  |
| [[Deprecated] Trend Micro Deep Security via Legacy](../connectors/trendmicro.md) | `DeviceProduct startswith "Deep Security"`<br>`DeviceVendor has_any "Trend Micro,TrendMicro"` |
| [[Deprecated] Trend Micro Apex One via Legacy Agent](../connectors/trendmicroapexone.md) | `DeviceProduct == "Apex Central"`<br>`DeviceVendor == "Trend Micro"` |
| [[Deprecated] Trend Micro Apex One via AMA](../connectors/trendmicroapexoneama.md) | `DeviceProduct == "Apex Central"`<br>`DeviceVendor == "Trend Micro"` |
| [[Deprecated] Trend Micro TippingPoint via Legacy](../connectors/trendmicrotippingpoint.md) | `DeviceProduct == "UnityOne"` |
| [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) |  |
| [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) |  |
| [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) |  |
| [[Deprecated] Votiro Sanitization Engine Logs](../connectors/votiro.md) | `DeviceProduct == "Votiro cloud"`<br>`DeviceVendor == "Votiro"` |
| [[Deprecated] WireX Network Forensics Platform via Legacy Agent](../connectors/wirex-systems-nfp.md) | `ApplicationProtocol in "DNS,HTTP,TDS"`<br>`DeviceProduct == "WireX NFP"`<br>`DeviceVendor == "WireX"` |
| [[Deprecated] WireX Network Forensics Platform via AMA](../connectors/wirex-systems-nfpama.md) | `ApplicationProtocol in "DNS,HTTP,TDS"`<br>`DeviceProduct == "WireX NFP"`<br>`DeviceVendor == "WireX"` |
| [[Deprecated] WithSecure Elements via Connector](../connectors/withsecureelementsviaconnector.md) | `DeviceVendor == "WithSecure™"` |
| [[Deprecated] iboss via Legacy Agent](../connectors/iboss.md) | `AdditionalExtensions !contains "amaExternalLogService=true"`<br>`DeviceVendor == "iboss"` |
| [iboss via AMA](../connectors/ibossama.md) | `AdditionalExtensions contains "amaExternalLogService=true"`<br>`DeviceVendor == "iboss"` |
| [[Deprecated] Illusive Platform via Legacy Agent](../connectors/illusiveattackmanagementsystem.md) | `DeviceEventClassID in "illusive:access,illusive:login,illusive:suspicious"`<br>`DeviceProduct == "illusive"`<br>`DeviceVendor == "illusive"`<br>`Message !contains "hasForensics"`<br>`SourceHostName != "Failed to obtain"` |
| [[Deprecated] Illusive Platform via AMA](../connectors/illusiveattackmanagementsystemama.md) | `DeviceEventClassID in "illusive:access,illusive:login,illusive:suspicious"`<br>`DeviceProduct == "illusive"`<br>`DeviceVendor == "illusive"`<br>`Message !contains "hasForensics"`<br>`SourceHostName != "Failed to obtain"` |
| [[Deprecated] vArmour Application Controller via Legacy Agent](../connectors/varmourac.md) | `Activity == "POLICY_VIOLATION"`<br>`DeviceProduct == "AC"`<br>`DeviceVendor == "vArmour"` |
| [[Deprecated] vArmour Application Controller via AMA](../connectors/varmouracama.md) | `Activity == "POLICY_VIOLATION"`<br>`DeviceProduct == "AC"`<br>`DeviceVendor == "vArmour"` |

---

## Content Items Using This Table (278)

### Analytic Rules (130)

**In solution [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Acronis - Login from Abnormal IP - Low Occurrence](../content/acronis-cyber-protect-cloud-acronis-login-from-abnormal-ip-low-occurrence-84037130-a623-46c2-9144-0c0955ac4112-5d101d22.md) | `DeviceVendor == "Acronis audit"` |
| [Acronis - Multiple Endpoints Accessing Malicious URLs](../content/acronis-cyber-protect-cloud-acronis-multiple-endpoints-accessing-malicious-urls-1385f0ce-69d9-4abf-8039-52080c8c7017-873d8b8f.md) | `DeviceEventClassID == "MaliciousUrlDetected"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Multiple Endpoints Infected by Ransomware](../content/acronis-cyber-protect-cloud-acronis-multiple-endpoints-infected-by-ransomware-a783ade7-bf43-416d-b809-8f5b06d87790-b918ffca.md) | `DeviceEventClassID == "ActiveProtectionBlocksSuspiciousActivity"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Multiple Inboxes with Malicious Content Detected](../content/acronis-cyber-protect-cloud-acronis-multiple-inboxes-with-malicious-content-detected-5090ad7b-4b47-4cab-9015-bffb43aecde8-54d81823.md) | `DeviceEventClassID in "MaliciousEmailDetectedPerceptionPointWarning,MaliciousURLDetectedInM365MailboxBackup,MalwareDetectedInM365MailboxBackup"`<br>`DeviceVendor == "Acronis"` |

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |  |

**In solution [AristaAwakeSecurity](../solutions/aristaawakesecurity.md):** `DeviceProduct == "Awake Security"`<br>`DeviceVendor == "Arista Networks"`

| Analytic Rule |
|:-------------|
| [Awake Security - High Match Counts By Device](../content/aristaawakesecurity-awake-security-high-match-counts-by-device-90b7ac11-dd6c-4ba1-a99b-737061873859-e21f6938.md) |
| [Awake Security - High Severity Matches By Device](../content/aristaawakesecurity-awake-security-high-severity-matches-by-device-d5e012c2-29ba-4a02-a813-37b928aafe2d-3c38bc0d.md) |
| [Awake Security - Model With Multiple Destinations](../content/aristaawakesecurity-awake-security-model-with-multiple-destinations-dfa3ec92-bdae-410f-b675-fe1814e4d43e-8eda1cfb.md) |

**In solution [CiscoASA](../solutions/ciscoasa.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Cisco ASA - average attack detection rate increase](../content/ciscoasa-cisco-asa-average-attack-detection-rate-increase-79f29feb-6a9d-4cdf-baaa-2daf480a5da1-4b63ae5b.md) | `DeviceEventClassID == "733100"` |
| [Cisco ASA - threat detection message fired](../content/ciscoasa-cisco-asa-threat-detection-message-fired-795edf2d-cf3e-45b5-8452-fe6c9e6a582e-a934f81d.md) | `DeviceEventClassID in "733101,733102,733103,733104,733105"` |

**In solution [CiscoSEG](../solutions/ciscoseg.md):** `DeviceEventClassID == "ESA_CONSOLIDATED_LOG_EVENT"`

| Analytic Rule |
|:-------------|
| [Cisco SEG - DLP policy violation](../content/ciscoseg-cisco-seg-dlp-policy-violation-df5c34dd-e1e6-4e07-90b1-4309ebfe754c-96f99f96.md) |
| [Cisco SEG - Malicious attachment not blocked](../content/ciscoseg-cisco-seg-malicious-attachment-not-blocked-236e872c-31d1-4b45-ac2a-fda3af465c97-7e651da0.md) |
| [Cisco SEG - Multiple large emails sent to external recipient](../content/ciscoseg-cisco-seg-multiple-large-emails-sent-to-external-recipient-1399a9a5-6200-411e-8c34-ca5658754cf7-2d76e97f.md) |
| [Cisco SEG - Multiple suspiciuos attachments received](../content/ciscoseg-cisco-seg-multiple-suspiciuos-attachments-received-dfdb9a73-4335-4bb4-b29b-eb713bce61a6-8ef60726.md) |
| [Cisco SEG - Possible outbreak](../content/ciscoseg-cisco-seg-possible-outbreak-53242559-95ea-4d4c-b003-107e8f06304b-e012a15d.md) |
| [Cisco SEG - Potential phishing link](../content/ciscoseg-cisco-seg-potential-phishing-link-2e5158e1-9fc2-40ff-a909-c701a13a0405-0b87976a.md) |
| [Cisco SEG - Suspicious link](../content/ciscoseg-cisco-seg-suspicious-link-506291dd-8050-4c98-a92f-58e376080a0a-090fa657.md) |
| [Cisco SEG - Suspicious sender domain](../content/ciscoseg-cisco-seg-suspicious-sender-domain-ef0a253c-95b5-48e1-8ebc-dbeb073b9338-8e5c2362.md) |
| [Cisco SEG - Unexpected attachment](../content/ciscoseg-cisco-seg-unexpected-attachment-f8ba18c4-81e3-4db0-8f85-4989f2ed2ade-f10c8136.md) |
| [Cisco SEG - Unexpected link](../content/ciscoseg-cisco-seg-unexpected-link-9cb4a02d-3708-42ba-b33b-0fdd360ce4b6-603d8991.md) |
| [Cisco SEG - Unscannable attacment](../content/ciscoseg-cisco-seg-unscannable-attacment-c66b8ced-8c76-415b-a0f3-08c7030a857d-d10ee3f4.md) |

**In solution [Claroty](../solutions/claroty.md):** `DeviceVendor == "Claroty"`

| Analytic Rule |
|:-------------|
| [Claroty - Asset Down](../content/claroty-claroty-asset-down-fd6e3416-0421-4166-adb9-186e555a7008-cba265d2.md) |
| [Claroty - Critical baseline deviation](../content/claroty-claroty-critical-baseline-deviation-9a8b4321-e2be-449b-8227-a78227441b2a-96c7d22a.md) |
| [Claroty - Login to uncommon location](../content/claroty-claroty-login-to-uncommon-location-e7dbcbc3-b18f-4635-b27c-718195c369f1-286dbcdd.md) |
| [Claroty - Multiple failed logins by user](../content/claroty-claroty-multiple-failed-logins-by-user-4b5bb3fc-c690-4f54-9a74-016213d699b4-4fbe665b.md) |
| [Claroty - Multiple failed logins to same destinations](../content/claroty-claroty-multiple-failed-logins-to-same-destinations-1c2310ef-19bf-4caf-b2b0-a4c983932fa5-2c96b616.md) |
| [Claroty - New Asset](../content/claroty-claroty-new-asset-6c29b611-ce69-4016-bf99-eca639fee1f5-83fc6e1d.md) |
| [Claroty - Policy violation](../content/claroty-claroty-policy-violation-3b22ac47-e02c-4599-a37a-57f965de17be-0b548fc4.md) |
| [Claroty - Suspicious activity](../content/claroty-claroty-suspicious-activity-99ad9f3c-304c-44c5-a61f-3a17f8b58218-64471eca.md) |
| [Claroty - Suspicious file transfer](../content/claroty-claroty-suspicious-file-transfer-5cf35bad-677f-4c23-8927-1611e7ff6f28-b144365c.md) |
| [Claroty - Threat detected](../content/claroty-claroty-threat-detected-731e5ac4-7fe1-4b06-9941-532f2e008bb3-84acea52.md) |

**In solution [Contrast Protect](../solutions/contrast-protect.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Contrast Blocks](../content/contrast-protect-contrast-blocks-4396f8c3-d114-4154-9f4c-048ba522ed04-c10d7a5d.md) | `AdditionalExtensions contains "BLOCKED"`<br>`DeviceVendor == "Contrast Security"` |
| [Contrast Exploits](../content/contrast-protect-contrast-exploits-e1abb6ed-be18-40fd-be58-3d3d84041daf-470b92cd.md) | `AdditionalExtensions contains "EXPLOITED"`<br>`DeviceVendor == "Contrast Security"` |
| [Contrast Probes](../content/contrast-protect-contrast-probes-297596de-d9ae-4fb8-b6ff-00fc01c9462d-d1e26597.md) | `AdditionalExtensions contains "INEFFECTIVE"`<br>`AdditionalExtensions contains "PROBED"`<br>`DeviceVendor == "Contrast Security"` |
| [Contrast Suspicious](../content/contrast-protect-contrast-suspicious-f713404e-805c-4e0c-91fa-2c149f76a07d-f612944c.md) | `AdditionalExtensions contains "SUSPICIOUS"`<br>`DeviceVendor == "Contrast Security"` |

**In solution [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md):** `DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"`

| Analytic Rule |
|:-------------|
| [Critical Severity Detection](../content/crowdstrike-falcon-endpoint-protection-critical-severity-detection-f7d298b2-726c-42a5-bbac-0d7f9950f527-d91689ae.md) |

**In solution [FalconFriday](../solutions/falconfriday.md):** `DeviceProduct == "NSSWeblog"`<br>`DeviceVendor == "Zscaler"`

| Analytic Rule |
|:-------------|
| [Beacon Traffic Based on Common User Agents Visiting Limited Number of Domains](../content/falconfriday-beacon-traffic-based-on-common-user-agents-visiting-limited-number-of-domains-6345c923-99eb-4a83-b11d-7af0ffa75577-e0e2298a.md) |

**In solution [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md):** `DeviceProduct has "Fortiweb"`<br>`DeviceVendor == "Fortinet"`

| Analytic Rule |
|:-------------|
| [Fortiweb - WAF Allowed threat](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-fortiweb-waf-allowed-threat-86e9409f-b9ea-4e9a-8b72-5132ba43bcae-93ed74f7.md) |

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [GreyNoise TI Map IP Entity to CommonSecurityLog](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-commonsecuritylog-e50657d7-8bca-43ff-a647-d407fae440d6-31126886.md) |  |

**In solution [Illusive Platform](../solutions/illusive-platform.md):** `DeviceProduct == "illusive"`

| Analytic Rule |
|:-------------|
| [Illusive Incidents Analytic Rule](../content/illusive-platform-illusive-incidents-analytic-rule-1a7dbcf6-21a2-4255-84b2-c8dbbdca4630-7fa2b740.md) |

**In solution [Infoblox](../solutions/infoblox.md):** `DeviceEventClassID == "BloxOne-InsightsNotification-Log"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"`

| Analytic Rule |
|:-------------|
| [Infoblox - SOC Insight Detected - CDC Source](../content/infoblox-infoblox-soc-insight-detected-cdc-source-d04f1963-df27-4127-b1ec-3d37148d65be-80d9956d.md) |

**In solution [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox - Data Exfiltration Attack](../content/infoblox-cloud-data-connector-infoblox-data-exfiltration-attack-8db2b374-0337-49bd-94c9-cfbf8e5d83ad-0a635c49.md) | `DeviceEventClassID has "RPZ"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [Infoblox - High Threat Level Query Not Blocked Detected](../content/infoblox-cloud-data-connector-infoblox-high-threat-level-query-not-blocked-detected-dc7af829-d716-4774-9d6f-03d9aa7c27a4-fa962d5e.md) | `DeviceEventClassID has "RPZ"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [Infoblox - Many High Threat Level Queries From Single Host Detected](../content/infoblox-cloud-data-connector-infoblox-many-high-threat-level-queries-from-single-host-detected-3822b794-fa89-4420-aad6-0e1a2307f419-c7bc74ac.md) | `DeviceEventClassID has "RPZ"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [Infoblox - Many High Threat Level Single Query Detected](../content/infoblox-cloud-data-connector-infoblox-many-high-threat-level-single-query-detected-99278700-79ca-4b0f-b416-bf57ec699e1a-857f6b94.md) | `DeviceEventClassID has "RPZ"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [Infoblox - Many NXDOMAIN DNS Responses Detected](../content/infoblox-cloud-data-connector-infoblox-many-nxdomain-dns-responses-detected-b2f34315-9065-488e-88d0-a171d2b0da8e-1198d7a0.md) | `DeviceEventClassID == "DNS Response"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [Infoblox - TI - CommonSecurityLog Match Found - MalwareC2](../content/infoblox-cloud-data-connector-infoblox-ti-commonsecuritylog-match-found-malwarec2-5b0864a9-4577-4087-b9fa-de3e14a8a999-339e0057.md) |  |
| [Infoblox - TI - InfobloxCDC Match Found - Lookalike Domains](../content/infoblox-cloud-data-connector-infoblox-ti-infobloxcdc-match-found-lookalike-domains-568730be-b39d-45e3-a392-941e00837d52-07dc8d1e.md) | `DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |

**In solution [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md):** `DeviceEventClassID == "BloxOne-InsightsNotification-Log"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"`

| Analytic Rule |
|:-------------|
| [Infoblox - SOC Insight Detected - CDC Source](../content/infoblox-soc-insights-infoblox-soc-insight-detected-cdc-source-a4bdd81e-afc8-4410-a3d1-8478fa810537-11c9ff59.md) |

**In solution [IronNet IronDefense](../solutions/ironnet-irondefense.md):** `DeviceProduct == "IronDefense"`

| Analytic Rule |
|:-------------|
| [Create Incidents from IronDefense](../content/ironnet-irondefense-create-incidents-from-irondefense-3cf46cb9-99d5-42ee-a43c-7bd88ea394a1-25613242.md) |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in CommonSecurityLog](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-commonsecuritylog-bc8a262a-5db3-4ac1-8757-519ed36ed929-6c2a7f14.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12-631549a4.md) |  |

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):** `Activity == "Deny List updated"`<br>`DeviceVendor == "Trend Micro"`

| Analytic Rule |
|:-------------|
| [Network endpoint to host executable correlation](../content/network-threat-protection-essentials-network-endpoint-to-host-executable-correlation-01f64465-b1ef-41ea-a7f5-31553a11ad43-f4ed06da.md) |

**In solution [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Microsoft COVID-19 file hash indicator matches](../content/paloalto-pan-os-microsoft-covid-19-file-hash-indicator-matches-2be4ef67-a93f-4d8a-981a-88158cb73abd-3ed74bda.md) |  |
| [Palo Alto - possible internal to external port scanning](../content/paloalto-pan-os-palo-alto-possible-internal-to-external-port-scanning-5b72f527-e3f6-4a00-9908-8e4fee14da9f-56e27714.md) | `AdditionalExtensions has "reason=tcp-rst-from-client"`<br>`AdditionalExtensions has "reason=tcp-rst-from-server"`<br>`ApplicationProtocol == "incomplete"`<br>`DestinationPort !in "443,53,389,80,0,880,8888,8080"`<br>`DeviceAction !in "reset-both,deny"` |
| [Palo Alto - possible nmap scan on with top 100 option](../content/paloalto-pan-os-palo-alto-possible-nmap-scan-on-with-top-100-option-4d61bb9a-7f6d-45b1-ac0e-517e2a92f6fd-008533ce.md) | `DestinationPort in "10000,1025,1026,1027,1028,1029,106,110,111,1110,119,13,135,139,143,1433,144,1720,1723,1755,179,1900,199,2000,2001,2049,21,2121,22,23,25,26,2717,3000,3128,32768,3306,3389,37,389,3986,427,444,445,465,4899,49152,49153,49154,49155,49156,49157,5000,5009,5051,5060,5101,513,514,515,5190,5357,543,5432,544,548,554,5631,5666,5800,587,5900,6000,6001,631,646,6646,7,7070,79,8000,8008,8009,8080,8081,81,8443,873,88,8888,9,9100,990,993,995,9999"` |
| [Palo Alto - potential beaconing detected](../content/paloalto-pan-os-palo-alto-potential-beaconing-detected-f0be259a-34ac-4946-aa15-ca2b115d5feb-7815de87.md) | `Activity == "TRAFFIC"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [Palo Alto Threat signatures from Unusual IP addresses](../content/paloalto-pan-os-palo-alto-threat-signatures-from-unusual-ip-addresses-89a86f70-615f-4a79-9621-6f68c50f365f-44162468.md) | `DeviceEventClassID in "file,flood,packet,scan,spyware,virus,vulnerability,wildfire,wildfire-virus"`<br>`DeviceVendor == "Palo Alto Networks"` |

**In solution [PaloAltoCDL](../solutions/paloaltocdl.md):** `DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"`

| Analytic Rule |
|:-------------|
| [PaloAlto - Dropping or denying session with traffic](../content/paloaltocdl-paloalto-dropping-or-denying-session-with-traffic-ba663b74-51f4-11ec-bf63-0242ac130002-787fad5d.md) |
| [PaloAlto - File type changed](../content/paloaltocdl-paloalto-file-type-changed-9150ad68-51c8-11ec-bf63-0242ac130002-87204344.md) |
| [PaloAlto - Forbidden countries](../content/paloaltocdl-paloalto-forbidden-countries-9fcc7734-4d1b-11ec-81d3-0242ac130003-c36b5bad.md) |
| [PaloAlto - Inbound connection to high risk ports](../content/paloaltocdl-paloalto-inbound-connection-to-high-risk-ports-b2dd2dac-51c9-11ec-bf63-0242ac130002-b7141df6.md) |
| [PaloAlto - MAC address conflict](../content/paloaltocdl-paloalto-mac-address-conflict-976d2eee-51cb-11ec-bf63-0242ac130002-2f4d2b9d.md) |
| [PaloAlto - Possible attack without response](../content/paloaltocdl-paloalto-possible-attack-without-response-b6d54840-51d3-11ec-bf63-0242ac130002-a8b30694.md) |
| [PaloAlto - Possible flooding](../content/paloaltocdl-paloalto-possible-flooding-feb185cc-51f4-11ec-bf63-0242ac130002-88d2e10c.md) |
| [PaloAlto - Possible port scan](../content/paloaltocdl-paloalto-possible-port-scan-3575a9c0-51c9-11ec-bf63-0242ac130002-2090332d.md) |
| [PaloAlto - Put and post method request in high risk file type](../content/paloaltocdl-paloalto-put-and-post-method-request-in-high-risk-file-type-f12e9d10-51ca-11ec-bf63-0242ac130002-6fe08e13.md) |
| [PaloAlto - User privileges was changed](../content/paloaltocdl-paloalto-user-privileges-was-changed-38f9e010-51ca-11ec-bf63-0242ac130002-ec13ffe8.md) |

**In solution [PingFederate](../solutions/pingfederate.md):** `DeviceProduct has "PingFederate"`

| Analytic Rule |
|:-------------|
| [Ping Federate - Abnormal password reset attempts](../content/pingfederate-ping-federate-abnormal-password-reset-attempts-e45a7334-2cb4-4690-8156-f02cac73d584-66f0ba30.md) |
| [Ping Federate - Abnormal password resets for user](../content/pingfederate-ping-federate-abnormal-password-resets-for-user-6145efdc-4724-42a6-9756-5bd1ba33982e-032d12ff.md) |
| [Ping Federate - Authentication from new IP.](../content/pingfederate-ping-federate-authentication-from-new-ip.-30583ed4-d13c-43b8-baf2-d75fbe727210-c7473a0b.md) |
| [Ping Federate - Forbidden country](../content/pingfederate-ping-federate-forbidden-country-14042f74-e50b-4c21-8a01-0faf4915ada4-ba3e6874.md) |
| [Ping Federate - New user SSO success login](../content/pingfederate-ping-federate-new-user-sso-success-login-05282c91-7aaf-4d76-9a19-6dc582e6a411-ac2468e0.md) |
| [Ping Federate - OAuth old version](../content/pingfederate-ping-federate-oauth-old-version-85f70197-4865-4635-a4b2-a9c57e8fea1b-a844b284.md) |
| [Ping Federate - Password reset request from unexpected source IP address..](../content/pingfederate-ping-federate-password-reset-request-from-unexpected-source-ip-address..-2d201d21-77b4-4d97-95f3-26b5c6bde09f-1f0eb2b3.md) |
| [Ping Federate - SAML old version](../content/pingfederate-ping-federate-saml-old-version-fddd3840-acd2-41ed-94d9-1474b0a7c8a6-f0a3cb29.md) |
| [Ping Federate - Unexpected authentication URL.](../content/pingfederate-ping-federate-unexpected-authentication-url.-9578ef7f-cbb4-4e9a-bd26-37c15c53b413-2e62ddab.md) |
| [Ping Federate - Unexpected country for user](../content/pingfederate-ping-federate-unexpected-country-for-user-64e65105-c4fc-4c28-a4e9-bb1a3ce7652d-6d3dc524.md) |
| [Ping Federate - Unusual mail domain.](../content/pingfederate-ping-federate-unusual-mail-domain.-dc79de7d-2590-4852-95fb-f8e02b34f4da-2fa89f0f.md) |

**In solution [Radiflow](../solutions/radiflow.md):** `DeviceProduct == "iSID"`<br>`DeviceVendor == "radiflow"`

| Analytic Rule |
|:-------------|
| [Radiflow - Exploit Detected](../content/radiflow-radiflow-exploit-detected-6c028ebd-03ca-41cb-bce7-5727ddb43731-3576efb7.md) |
| [Radiflow - Network Scanning Detected](../content/radiflow-radiflow-network-scanning-detected-cde00cc5-5841-4aa9-96c5-dd836f9e3f26-4b8baf5f.md) |
| [Radiflow - New Activity Detected](../content/radiflow-radiflow-new-activity-detected-8177ecff-30a1-4d4f-9a82-7fbb69019504-9ff3a66e.md) |
| [Radiflow - Platform Alert](../content/radiflow-radiflow-platform-alert-ff0c781a-b30f-4acf-9cf1-75d7383d66d1-a461dd39.md) |
| [Radiflow - Policy Violation Detected](../content/radiflow-radiflow-policy-violation-detected-a3f4cc3e-2403-4570-8d21-1dedd5632958-4e9005dc.md) |
| [Radiflow - Suspicious Malicious Activity Detected](../content/radiflow-radiflow-suspicious-malicious-activity-detected-ecac26b8-147d-478a-9d50-99be4bf14019-5ae248d9.md) |
| [Radiflow - Unauthorized Command in Operational Device](../content/radiflow-radiflow-unauthorized-command-in-operational-device-4d90d485-6d47-417e-80ea-9cf956c1a671-c23a25ae.md) |
| [Radiflow - Unauthorized Internet Access](../content/radiflow-radiflow-unauthorized-internet-access-cc33e1a9-e167-460b-93e6-f14af652dbd3-503d4133.md) |

**In solution [RidgeSecurity](../solutions/ridgesecurity.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Critical Risks](../content/ridgesecurity-critical-risks-1eebfaf3-40e1-4bc2-9f42-049b7b8ceb60-11ad44c8.md) | `DeviceEventClassID == "4001"`<br>`DeviceVendor == "RidgeSecurity"` |
| [Vulerabilities](../content/ridgesecurity-vulerabilities-d096643d-6789-4c74-8893-dd3fc8a94069-d1a748f6.md) | `DeviceEventClassID startswith "40"`<br>`DeviceVendor == "RidgeSecurity"` |

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Threat Essentials - Time series anomaly for data size transferred to public internet](../content/securitythreatessentialsolution-threat-essentials-time-series-anomaly-for-data-size-transferred-to-publi-b49a1093-cbf6-4973-89ac-2eef98f533c6-bc9cced1.md) |  |

**In solution [Silverfort](../solutions/silverfort.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Silverfort - Certifried Incident](../content/silverfort-silverfort-certifried-incident-9ae540c9-c926-4100-8f07-1eac22596292-74a2bc0f.md) | `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "Certifried"` |
| [Silverfort - Log4Shell Incident](../content/silverfort-silverfort-log4shell-incident-d6abed70-4043-46da-9304-a98f3446fa5f-69483854.md) | `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "Log4Shell"` |
| [Silverfort - NoPacBreach Incident](../content/silverfort-silverfort-nopacbreach-incident-bdfd2c45-10a0-44e7-a90a-ba7b6bdd9ff2-486f0310.md) | `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "NoPacBreach"` |
| [Silverfort - UserBruteForce Incident](../content/silverfort-silverfort-userbruteforce-incident-46ff357b-9e98-465b-9e45-cd52fa4a7522-aec505ad.md) | `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "UserBruteForce"` |

**In solution [SonicWall Firewall](../solutions/sonicwall-firewall.md):** `Protocol !contains "/"`<br>`Protocol contains "-"`

| Analytic Rule |
|:-------------|
| [SonicWall - Capture ATP Malicious File Detection](../content/sonicwall-firewall-sonicwall-capture-atp-malicious-file-detection-3db9f99e-a459-41e0-8e02-8b332f5fcb2c-219e6d5b.md) |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to CommonSecurityLog](../content/threat-intelligence-ti-map-ip-entity-to-commonsecuritylog-66c81ae2-1f89-4433-be00-2fbbd9ba5ebe-1afb299b.md) |  |
| [TI Map URL Entity to PaloAlto Data](../content/threat-intelligence-ti-map-url-entity-to-paloalto-data-106813db-679e-4382-a51b-1bfc463befc3-df95f41e.md) | `DeviceAction != "block-url"`<br>`DeviceEventClassID == "url"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [TI map Domain entity to PaloAlto](../content/threat-intelligence-ti-map-domain-entity-to-paloalto-ec21493c-2684-4acd-9bc2-696dbad72426-30f0e4c8.md) | `DeviceAction != "block-url"`<br>`DeviceEventClassID == "url"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [TI map Domain entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-ti-map-domain-entity-to-paloalto-commonsecuritylog-dd0a6029-ecef-4507-89c4-fc355ac52111-78fcc05f.md) | `DeviceEventClassID == "url"` |
| [TI map Email entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-ti-map-email-entity-to-paloalto-commonsecuritylog-ffcd575b-3d54-482a-a6d8-d0de13b6ac63-7a9927d1.md) | `ApplicationProtocol in "pop3,smtp"`<br>`DeviceEventClassID == "wildfire"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [TI map File Hash to CommonSecurityLog Event](../content/threat-intelligence-ti-map-file-hash-to-commonsecuritylog-event-5d33fc63-b83b-4913-b95e-94d13f0d379f-27089def.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to CommonSecurityLog](../content/threat-intelligence-new-ti-map-ip-entity-to-commonsecuritylog-cdd1933b-ef94-48a4-b94a-18d45b902751-8a8093d3.md) |  |
| [TI Map URL Entity to PaloAlto Data](../content/threat-intelligence-new-ti-map-url-entity-to-paloalto-data-32b437c4-dddb-45b3-9aae-5188e80624b0-bf06198a.md) | `DeviceAction != "block-url"`<br>`DeviceEventClassID == "url"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [TI map Domain entity to PaloAlto](../content/threat-intelligence-new-ti-map-domain-entity-to-paloalto-418192ba-01b8-4be8-89b7-5b5396a9d062-3c5cbaa4.md) | `DeviceAction != "block-url"`<br>`DeviceEventClassID == "url"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [TI map Domain entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-new-ti-map-domain-entity-to-paloalto-commonsecuritylog-094a4e6e-1a0d-4d49-9d64-cfc3b01a0be1-b0f33009.md) | `DeviceEventClassID == "url"` |
| [TI map Email entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-new-ti-map-email-entity-to-paloalto-commonsecuritylog-17fe80fe-072f-44d4-b62c-97a5bce56a64-3f51c924.md) | `ApplicationProtocol in "pop3,smtp"`<br>`DeviceEventClassID == "wildfire"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [TI map File Hash to CommonSecurityLog Event](../content/threat-intelligence-new-ti-map-file-hash-to-commonsecuritylog-event-432996e9-8a93-4407-985f-13707b318a0b-a4223a3c.md) |  |

**In solution [Trend Micro Apex One](../solutions/trend-micro-apex-one.md):** `DeviceProduct == "Apex Central"`<br>`DeviceVendor == "Trend Micro"`

| Analytic Rule |
|:-------------|
| [ApexOne - Attack Discovery Detection](../content/trend-micro-apex-one-apexone-attack-discovery-detection-7a3193b8-67b7-11ec-90d6-0242ac120003-a72ca676.md) |
| [ApexOne - C&C callback events](../content/trend-micro-apex-one-apexone-c&c-callback-events-1a87cd10-67b7-11ec-90d6-0242ac120003-9344779a.md) |
| [ApexOne - Commands in Url](../content/trend-micro-apex-one-apexone-commands-in-url-4a9a5900-67b7-11ec-90d6-0242ac120003-d17dff8a.md) |
| [ApexOne - Device access permissions was changed](../content/trend-micro-apex-one-apexone-device-access-permissions-was-changed-b463b952-67b8-11ec-90d6-0242ac120003-865f571b.md) |
| [ApexOne - Inbound remote access connection](../content/trend-micro-apex-one-apexone-inbound-remote-access-connection-6303235a-ee70-42a4-b969-43e7b969b916-992a56b7.md) |
| [ApexOne - Multiple deny or terminate actions on single IP](../content/trend-micro-apex-one-apexone-multiple-deny-or-terminate-actions-on-single-ip-cd94e078-67b7-11ec-90d6-0242ac120003-d82f94a5.md) |
| [ApexOne - Possible exploit or execute operation](../content/trend-micro-apex-one-apexone-possible-exploit-or-execute-operation-e289d762-6cc2-11ec-90d6-0242ac120003-ccf90dbf.md) |
| [ApexOne - Spyware with failed response](../content/trend-micro-apex-one-apexone-spyware-with-failed-response-c92d9fe4-67b6-11ec-90d6-0242ac120003-c437c42d.md) |
| [ApexOne - Suspicious commandline arguments](../content/trend-micro-apex-one-apexone-suspicious-commandline-arguments-4d7199b2-67b8-11ec-90d6-0242ac120003-ad589883.md) |
| [ApexOne - Suspicious connections](../content/trend-micro-apex-one-apexone-suspicious-connections-9e3dc038-67b7-11ec-90d6-0242ac120003-1a074d22.md) |

**In solution [Vectra AI Detect](../solutions/vectra-ai-detect.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Vectra AI Detect - Detections with High Severity](../content/vectra-ai-detect-vectra-ai-detect-detections-with-high-severity-39e48890-2c02-487e-aa9e-3ba494061798-5f2d3995.md) | `DeviceEventClassID != "asc"`<br>`DeviceEventClassID != "audit"`<br>`DeviceEventClassID != "campaigns"`<br>`DeviceEventClassID != "health"`<br>`DeviceEventClassID != "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` |
| [Vectra AI Detect - New Campaign Detected](../content/vectra-ai-detect-vectra-ai-detect-new-campaign-detected-a34d0338-eda0-42b5-8b93-32aae0d7a501-d435ce1c.md) | `DeviceAction == "START"`<br>`DeviceEventClassID contains "campaign"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` |
| [Vectra AI Detect - Suspected Compromised Account](../content/vectra-ai-detect-vectra-ai-detect-suspected-compromised-account-321f9dbd-64b7-4541-81dc-08cf7732ccb0-540085a2.md) | `DeviceEventClassID == "asc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` |
| [Vectra AI Detect - Suspected Compromised Host](../content/vectra-ai-detect-vectra-ai-detect-suspected-compromised-host-60eb6cf0-3fa1-44c1-b1fe-220fbee23d63-39ca3d55.md) | `DeviceEventClassID == "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` |
| [Vectra AI Detect - Suspicious Behaviors by Category](../content/vectra-ai-detect-vectra-ai-detect-suspicious-behaviors-by-category-6cb75f65-231f-46c4-a0b3-50ff21ee6ed3-81fb48ba.md) | `DeviceEventClassID != "asc"`<br>`DeviceEventClassID != "audit"`<br>`DeviceEventClassID != "campaigns"`<br>`DeviceEventClassID != "health"`<br>`DeviceEventClassID != "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` |
| [Vectra Account's Behaviors](../content/vectra-ai-detect-vectra-account's-behaviors-ce54b5d3-4c31-4eaf-a73e-31412270b6ab-45fe2d23.md) | `AdditionalExtensions contains "account"`<br>`DeviceEventClassID != "asc"`<br>`DeviceEventClassID != "audit"`<br>`DeviceEventClassID != "campaigns"`<br>`DeviceEventClassID != "health"`<br>`DeviceEventClassID != "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` |
| [Vectra Host's Behaviors](../content/vectra-ai-detect-vectra-host's-behaviors-33e3b6da-2660-4cd7-9032-11be76db88d2-080b319b.md) | `AdditionalExtensions !has "account"`<br>`DeviceEventClassID != "asc"`<br>`DeviceEventClassID != "audit"`<br>`DeviceEventClassID != "campaigns"`<br>`DeviceEventClassID != "health"`<br>`DeviceEventClassID != "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` |

**In solution [Votiro](../solutions/votiro.md):** `DeviceProduct == "Votiro cloud"`<br>`DeviceVendor == "Votiro"`

| Analytic Rule |
|:-------------|
| [Votiro - File Blocked from Connector](../content/votiro-votiro-file-blocked-from-connector-17bf3780-ae0d-4cd9-a884-5df8b687f3f5-13901b84.md) |
| [Votiro - File Blocked in Email](../content/votiro-votiro-file-blocked-in-email-0b8b91de-c63e-4bc2-b5f4-b15d3b379ec9-dd69805e.md) |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

**In solution [Zscaler Internet Access](../solutions/zscaler-internet-access.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Discord CDN Risky File Download](../content/zscaler-internet-access-discord-cdn-risky-file-download-010bd98c-a6be-498c-bdcd-502308c0fdae-581fe083.md) | `DeviceAction != "blocked"`<br>`DeviceVendor == "ZScaler"` |
| [Request for single resource on domain](../content/zscaler-internet-access-request-for-single-resource-on-domain-4d500e6d-c984-43a3-9f39-7edec8dcc04d-7778e224.md) | `DeviceAction == "Allowed"`<br>`DeviceVendor == "Zscaler"` |

**In solution [vArmour Application Controller](../solutions/varmour-application-controller.md):** `Activity == "POLICY_VIOLATION"`<br>`DeviceProduct == "AC"`<br>`DeviceVendor == "vArmour"`

| Analytic Rule |
|:-------------|
| [vArmour AppController - SMB Realm Traversal](../content/varmour-application-controller-varmour-appcontroller-smb-realm-traversal-a36de6c3-3198-4d37-92ae-e19e36712c2e-f56ac1bb.md) |

### Hunting Queries (74)

**In solution [Acronis Cyber Protect Cloud](../solutions/acronis-cyber-protect-cloud.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Acronis - ASZ defence: Unauthorized operation is detected and blocked](../content/acronis-cyber-protect-cloud-acronis-asz-defence-unauthorized-operation-is-detected-and-blocked-39310cb8-53bc-47c1-86c4-2ff9f0d3cc5f-bcc0c583.md) | `DeviceEventClassID == "ActiveProtectionDetectedAszPartitionAccessed"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Agent failed updating more than twice in a day](../content/acronis-cyber-protect-cloud-acronis-agent-failed-updating-more-than-twice-in-a-day-b140b19a-0fcf-40f2-9284-5e0f58e1efd8-f580a535.md) | `DeviceEventClassID == "AgentAutoUpdateStalled"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Agents offline for 2 days or more](../content/acronis-cyber-protect-cloud-acronis-agents-offline-for-2-days-or-more-7a981151-a648-4ff4-a827-fc98337a95ed-8a6f3996.md) | `DeviceEventClassID == "MiniPlanAgentOffline"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Audit Log](../content/acronis-cyber-protect-cloud-acronis-audit-log-ce88b396-db24-44b6-babd-c431ee7a527f-c15182ee.md) | `DeviceVendor == "Acronis audit"` |
| [Acronis - Cloud Connection Errors](../content/acronis-cyber-protect-cloud-acronis-cloud-connection-errors-98d1abaf-6be8-4d20-8ff3-16b19bc616af-8bfb24e9.md) | `DeviceEventClassID in "CloudConnectionAzureApplianceConfigurationFailed,CloudConnectionAzureApplianceDeallocationFailed,CloudConnectionAzureApplianceDeletionFailed,CloudConnectionAzureApplianceEOL,CloudConnectionAzureApplianceFailed,CloudConnectionAzureApplianceUpdateFailed,CloudConnectionAzureCloudAccessExpired,CloudConnectionS3CloudAccessExpired"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Endpoints Accessing Malicious URLs](../content/acronis-cyber-protect-cloud-acronis-endpoints-accessing-malicious-urls-29c1b194-50d1-418d-82a9-3db5e3dfc3bf-78dba951.md) | `DeviceEventClassID == "MaliciousUrlDetected"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Endpoints Infected by Ransomware](../content/acronis-cyber-protect-cloud-acronis-endpoints-infected-by-ransomware-cc3a2ea1-2dbb-4e5e-acb1-866b9bffb85c-e2e1374f.md) | `DeviceEventClassID == "ActiveProtectionBlocksSuspiciousActivity"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Endpoints with Backup issues](../content/acronis-cyber-protect-cloud-acronis-endpoints-with-backup-issues-51ac84a9-5e82-456a-b398-f2e7b9ea8611-a0e4e0d0.md) | `DeviceEventClassID in "ArchiveCorrupted,BackupFailed,BackupNotResponding,BackupRecoveryFailed"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Endpoints with EDR Incidents](../content/acronis-cyber-protect-cloud-acronis-endpoints-with-edr-incidents-55b6da0d-08c1-4af0-af2d-c4d14a1f6c3c-e5dd2a41.md) | `DeviceEventClassID in "EDRIOCDetected,EDRIncidentDetected"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Endpoints with high failed login attempts](../content/acronis-cyber-protect-cloud-acronis-endpoints-with-high-failed-login-attempts-9657f70c-d7df-4232-937c-6045fffe4e3d-cdae21a2.md) | `DeviceEventClassID == "MiMonitoringFailedLoginAttemptsOverThreshold"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Inboxes with Malicious Content](../content/acronis-cyber-protect-cloud-acronis-inboxes-with-malicious-content-1de4a0c7-4e72-45f3-b335-ab25f99ace3f-3797908a.md) | `DeviceEventClassID in "MaliciousEmailDetectedPerceptionPointWarning,MaliciousURLDetectedInM365MailboxBackup,MalwareDetectedInM365MailboxBackup"`<br>`DeviceVendor == "Acronis"` |
| [Acronis - Login from Abnormal IP - Low Occurrence](../content/acronis-cyber-protect-cloud-acronis-login-from-abnormal-ip-low-occurrence-362666d6-5e4f-4f84-958b-6237e766eb6d-752ce66b.md) | `DeviceVendor == "Acronis audit"` |
| [Acronis - Protection Service Errors](../content/acronis-cyber-protect-cloud-acronis-protection-service-errors-aaf57371-02c0-4bf5-8c03-dfeb6536e397-013c8a42.md) | `DeviceEventClassID in "ActiveProtectionDriverRemediated,ActiveProtectionInvalidNetworkRecoveryPath,ActiveProtectionServiceConflict,ActiveProtectionServiceFailureToApplyPolicy,ActiveProtectionServiceNotAvailable,ActiveProtectionServiceNotRunning,CPSProtectionFailureDetected,ProtectionServiceNotWorking"`<br>`DeviceVendor == "Acronis"` |

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):** `ApplicationProtocol == "ldap"`<br>`DeviceAction has_any "allow"`

| Hunting Query |
|:-------------|
| [Network Connection to New External LDAP Server](../content/apache-log4j-vulnerability-detection-network-connection-to-new-external-ldap-server-bf094505-fd2e-484f-b72a-acd79ee00ce8-d9ed48fd.md) |

**In solution [CiscoSEG](../solutions/ciscoseg.md):** `DeviceEventClassID == "ESA_CONSOLIDATED_LOG_EVENT"`

| Hunting Query |
|:-------------|
| [Cisco SEG - DKIM failures](../content/ciscoseg-cisco-seg-dkim-failures-d7ea4577-1192-49da-96a2-b6d8219c6ac0-0f156528.md) |
| [Cisco SEG - DMARK failures](../content/ciscoseg-cisco-seg-dmark-failures-8bd157d3-2613-4a36-83e2-ec55332ed7f7-116b51a1.md) |
| [Cisco SEG - Dropped incoming mails](../content/ciscoseg-cisco-seg-dropped-incoming-mails-efb45608-3955-4915-8a46-ef5d7160cef7-ca1522f6.md) |
| [Cisco SEG - Dropped outgoing mails](../content/ciscoseg-cisco-seg-dropped-outgoing-mails-805b5625-8a04-4ca5-bab5-7c8cb383b3e3-8e66b7fb.md) |
| [Cisco SEG - Failed incoming TLS connections](../content/ciscoseg-cisco-seg-failed-incoming-tls-connections-4511f6a0-c174-4ccc-a851-24b14022e217-40bf1781.md) |
| [Cisco SEG - Failed outgoing TLS connections](../content/ciscoseg-cisco-seg-failed-outgoing-tls-connections-aeb733e3-34e9-4724-97c7-c6ad31ea39e5-b30250d9.md) |
| [Cisco SEG - Insecure protocol](../content/ciscoseg-cisco-seg-insecure-protocol-2389de0a-f53f-4a11-b01b-1adce5f26287-8a5004c8.md) |
| [Cisco SEG - SPF failures](../content/ciscoseg-cisco-seg-spf-failures-215a747d-5a5e-4596-b399-85ff5cc572bd-f535331c.md) |
| [Cisco SEG - Sources of spam mails](../content/ciscoseg-cisco-seg-sources-of-spam-mails-7895ffa5-cd61-43cf-89e5-9630e79685fd-1d6f85cd.md) |
| [Cisco SEG - Top users receiving spam mails](../content/ciscoseg-cisco-seg-top-users-receiving-spam-mails-064b1051-d8ac-4ef2-a537-30d32b4c27d9-e16d1fea.md) |

**In solution [Claroty](../solutions/claroty.md):** `DeviceVendor == "Claroty"`

| Hunting Query |
|:-------------|
| [Claroty - Baseline deviation](../content/claroty-claroty-baseline-deviation-6b24f3aa-01db-4d26-9d60-538dd9a56391-8531ba45.md) |
| [Claroty - Conflict assets](../content/claroty-claroty-conflict-assets-8038c683-f4dc-481e-94c6-f906d880b0ec-65ea2c65.md) |
| [Claroty - Critical Events](../content/claroty-claroty-critical-events-a81f3a44-049c-409d-8b98-b78aa256dacf-39a2f0b4.md) |
| [Claroty - Network scan sources](../content/claroty-claroty-network-scan-sources-6c43a50e-2e59-48d9-848b-825f50927bbf-07e5f692.md) |
| [Claroty - Network scan targets](../content/claroty-claroty-network-scan-targets-8e70ddf9-32c3-4acd-9cb9-59570344335e-d9fbab3a.md) |
| [Claroty - PLC logins](../content/claroty-claroty-plc-logins-15569b45-4c34-4693-bf99-841e76b5da65-ce51ab47.md) |
| [Claroty - Unapproved access](../content/claroty-claroty-unapproved-access-de0fca32-85f3-45df-872e-41e980e5d8d3-d0ee72f9.md) |
| [Claroty - Unresolved alerts](../content/claroty-claroty-unresolved-alerts-fad6cb81-9a05-4acb-9c5b-a7c62af28034-0c927404.md) |
| [Claroty - User failed logins](../content/claroty-claroty-user-failed-logins-917364b7-2925-4c5d-a27c-64137a3b75b5-050519b3.md) |
| [Claroty - Write and Execute operations](../content/claroty-claroty-write-and-execute-operations-3882ffbf-6228-4e1f-ab8f-8d79a26da0fb-6e35713e.md) |

**In solution [Cyware](../solutions/cyware.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Match Cyware Intel Watchlist Items With Common Logs](../content/cyware-match-cyware-intel-watchlist-items-with-common-logs-61c99147-b749-4164-80b1-c4bfa4efa704-8cd42456.md) |  |

**In solution [Endace](../solutions/endace.md):** `Activity == "THREAT"`

| Hunting Query |
|:-------------|
| [Endace - Pivot-to-Vision](../content/endace-endace-pivot-to-vision-b70b02bd-fe1f-4466-8c4d-64d42adc59b3-2f1bf7f0.md) |

**In solution [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md):** `DeviceProduct has "Fortiweb"`<br>`DeviceVendor == "Fortinet"`

| Hunting Query |
|:-------------|
| [Fortiweb - Unexpected countries](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-fortiweb-unexpected-countries-9fc7d945-0e82-4664-aca0-dc121a7rt5nt-5e669605.md) |
| [Fortiweb - identify owasp10 vulnerabilities](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-fortiweb-identify-owasp10-vuln-3rg4d567-0e82-4664-aca0-dc121a7th3ht-b0214951.md) |

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Retrospective hunt for Forest Blizzard IP IOCs](../content/legacy-ioc-based-threat-protection-retrospective-hunt-for-forest-blizzard-ip-iocs-b8b7574f-1cd6-4308-822a-ab07256106f8-95c2528a.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress indicator in CommonSecurityLog](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-indicator-in-commonsecuritylog-4e329d3a-9fc0-4be7-9000-e092e7f68011-8e375221.md) |  |

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Base64 encoded IPv4 address in request url](../content/network-threat-protection-essentials-base64-encoded-ipv4-address-in-request-url-39156a1d-c9e3-439e-967b-be7dcba918d9-ac55ba03.md) |  |
| [Risky base64 encoded command in URL](../content/network-threat-protection-essentials-risky-base64-encoded-command-in-url-c46eeb45-c324-4a84-9df1-248c6d1507bb-5cdc18f9.md) |  |

**In solution [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Palo Alto - high-risk ports](../content/paloalto-pan-os-palo-alto-high-risk-ports-0a57accf-3548-4e38-a861-99687c958f59-955c29a8.md) | `Activity == "TRAFFIC"`<br>`DeviceAction != "deny"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [Palo Alto - potential beaconing detected](../content/paloalto-pan-os-palo-alto-potential-beaconing-detected-2f8522fc-7807-4f0a-b53d-458296edab8d-02b916be.md) | `Activity == "TRAFFIC"`<br>`DeviceVendor == "Palo Alto Networks"` |

**In solution [PaloAltoCDL](../solutions/paloaltocdl.md):** `DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"`

| Hunting Query |
|:-------------|
| [PaloAlto - Agent versions](../content/paloaltocdl-paloalto-agent-versions-555bf415-e171-4ad2-920f-1a4a96a9644c-135ba2b4.md) |
| [PaloAlto - Critical event result](../content/paloaltocdl-paloalto-critical-event-result-97760cb0-511e-11ec-bf63-0242ac130002-764139e8.md) |
| [PaloAlto - Destination ports by IPs](../content/paloaltocdl-paloalto-destination-ports-by-ips-a8887944-4c72-11ec-81d3-0242ac130003-ef950548.md) |
| [PaloAlto - File permission with PUT or POST request](../content/paloaltocdl-paloalto-file-permission-with-put-or-post-request-2af5e154-511f-11ec-bf63-0242ac130002-e4067896.md) |
| [PaloAlto - Incomplete application protocol](../content/paloaltocdl-paloalto-incomplete-application-protocol-7cbd46ce-5121-11ec-bf63-0242ac130002-58301333.md) |
| [PaloAlto - Multiple Deny result by user](../content/paloaltocdl-paloalto-multiple-deny-result-by-user-04456860-5122-11ec-bf63-0242ac130002-a8059a9f.md) |
| [PaloAlto - Outdated config vesions](../content/paloaltocdl-paloalto-outdated-config-vesions-6e4b6758-23a5-409b-a444-9bdef78e9dcc-e81f22ee.md) |
| [PaloAlto - Rare application layer protocols](../content/paloaltocdl-paloalto-rare-application-layer-protocols-0a18756a-5123-11ec-bf63-0242ac130002-c1608dc2.md) |
| [PaloAlto - Rare files observed](../content/paloaltocdl-paloalto-rare-files-observed-93ae5df2-4c74-11ec-81d3-0242ac130003-29632ba9.md) |
| [PaloAlto - Rare ports by user](../content/paloaltocdl-paloalto-rare-ports-by-user-ce9d58ce-51cd-11ec-bf63-0242ac130002-386d6508.md) |

**In solution [PingFederate](../solutions/pingfederate.md):** `DeviceProduct has "PingFederate"`

| Hunting Query |
|:-------------|
| [Ping Federate - Authentication URLs](../content/pingfederate-ping-federate-authentication-urls-e309c774-8f31-41c3-b270-7efc934de96a-d335e82c.md) |
| [Ping Federate - Authentication from unusual sources](../content/pingfederate-ping-federate-authentication-from-unusual-sources-0bce5bd0-cc19-43de-a5ab-47dbc5c6c600-f33ddf03.md) |
| [Ping Federate - Failed Authentication](../content/pingfederate-ping-federate-failed-authentication-b04e339c-942d-439a-bc27-dbee2961927c-cd5d855c.md) |
| [Ping Federate - New users](../content/pingfederate-ping-federate-new-users-a52d874d-dc45-438f-b395-92d1a3ebcf76-851a9fee.md) |
| [Ping Federate - Password reset requests](../content/pingfederate-ping-federate-password-reset-requests-31bb34b4-26f7-4b83-a667-d596e05eb28a-eb5c8e99.md) |
| [Ping Federate - Rare source IP addresses](../content/pingfederate-ping-federate-rare-source-ip-addresses-86c8a38a-96bd-445d-8d12-e35b7290832b-146697e7.md) |
| [Ping Federate - Requests from unusual countries](../content/pingfederate-ping-federate-requests-from-unusual-countries-378e53cd-c28a-46d7-8160-1920240bf09e-936e5397.md) |
| [Ping Federate - SAML subjects](../content/pingfederate-ping-federate-saml-subjects-b0a25cd9-08f4-470d-bd04-47da22810b5f-7ae3da54.md) |
| [Ping Federate - Top source IP addresses](../content/pingfederate-ping-federate-top-source-ip-addresses-ce92624d-ae52-4b8e-ba36-3e5bdb6a793a-39d9e3c4.md) |
| [Ping Federate - Users recently reseted password](../content/pingfederate-ping-federate-users-recently-reseted-password-6698f022-adf4-48a3-a8da-a4052ac999b4-d90c92a1.md) |

**In solution [Trend Micro Apex One](../solutions/trend-micro-apex-one.md):** `DeviceProduct == "Apex Central"`<br>`DeviceVendor == "Trend Micro"`

| Hunting Query |
|:-------------|
| [ApexOne - Behavior monitoring actions by files](../content/trend-micro-apex-one-apexone-behavior-monitoring-actions-by-files-96451e96-67b5-11ec-90d6-0242ac120003-87c1a703.md) |
| [ApexOne - Behavior monitoring event types by users](../content/trend-micro-apex-one-apexone-behavior-monitoring-event-types-by-users-433ccdb0-67b6-11ec-90d6-0242ac120003-589eed1f.md) |
| [ApexOne - Behavior monitoring operations by users](../content/trend-micro-apex-one-apexone-behavior-monitoring-operations-by-users-0caa3472-67b6-11ec-90d6-0242ac120003-1d28776b.md) |
| [ApexOne - Behavior monitoring triggered policy by command line](../content/trend-micro-apex-one-apexone-behavior-monitoring-triggered-policy-by-command-line-14a4a824-67b6-11ec-90d6-0242ac120003-2c0ff361.md) |
| [ApexOne - Channel type by users](../content/trend-micro-apex-one-apexone-channel-type-by-users-40d8ad3e-67b4-11ec-90d6-0242ac120003-e82a1272.md) |
| [ApexOne - Data loss prevention action by IP](../content/trend-micro-apex-one-apexone-data-loss-prevention-action-by-ip-6c7f9bfe-67b5-11ec-90d6-0242ac120003-b9cca4d4.md) |
| [ApexOne - Rare application protocols by Ip address](../content/trend-micro-apex-one-apexone-rare-application-protocols-by-ip-address-be89944e-4e75-4d0a-b2d6-ae757d22ed43-0e863ded.md) |
| [ApexOne - Spyware detection](../content/trend-micro-apex-one-apexone-spyware-detection-506955be-648f-11ec-90d6-0242ac120003-42ec9672.md) |
| [ApexOne - Suspicious files events](../content/trend-micro-apex-one-apexone-suspicious-files-events-7bf0f260-61a0-11ec-90d6-0242ac120003-58b95e02.md) |
| [ApexOne - Top sources with alerts](../content/trend-micro-apex-one-apexone-top-sources-with-alerts-8bb86556-67b4-11ec-90d6-0242ac120003-9e3076ba.md) |

### Workbooks (72)

**In solution [AI Analyst Darktrace](../solutions/ai-analyst-darktrace.md):** `Activity !contains "saas"`<br>`Activity contains "Antigena"`<br>`Activity contains "Compliance"`<br>`Activity contains "iaas"`<br>`Activity contains "saas"`<br>`DestinationIP !startswith "10"`<br>`DestinationIP !startswith "172"`<br>`DestinationIP !startswith "192"`<br>`DeviceName contains "#"`<br>`DeviceProduct in "AI Analyst,Enterprise Immune System"`<br>`DeviceVendor == "Darktrace"`

| Workbook |
|:-------------|
| [AIA-Darktrace](../content/ai-analyst-darktrace-aia-darktrace-c99f20ad.md) |

**In solution [AristaAwakeSecurity](../solutions/aristaawakesecurity.md):** `DeviceProduct == "Awake Security"`<br>`DeviceVendor == "Arista Networks"`

| Workbook |
|:-------------|
| [AristaAwakeSecurityWorkbook](../content/aristaawakesecurity-aristaawakesecurityworkbook-9b7c92d9.md) |

**In solution [Barracuda CloudGen Firewall](../solutions/barracuda-cloudgen-firewall.md):** `DeviceVendor == "Barracuda"`

| Workbook |
|:-------------|
| [Barracuda](../content/barracuda-cloudgen-firewall-barracuda-9d8c6fb5.md) |

**In solution [Check Point](../solutions/check-point.md):** `DeviceCustomString3 in "DNS Reputation,IP Reputation,URL Reputation"`<br>`DeviceProduct in "Anti Malware,Anti-Bot,Anti-Virus,Application Control,DDoS Protector,IPS,Threat Emulation,URL Filtering"`<br>`DeviceVendor == "Check Point"`<br>`FlexNumber1 in "3,4,5"`<br>`LogSeverity in "Critical,High,Medium,Very-High"`

| Workbook |
|:-------------|
| [CheckPoint](../content/check-point-checkpoint-2a6f42ae.md) |

**In solution [CiscoASA](../solutions/ciscoasa.md):** `CommunicationDirection contains "inbound"`<br>`CommunicationDirection contains "outbound"`<br>`DeviceEventClassID in "106100,111008,113012,113015,302010,315011,611102,733100"`<br>`DeviceProduct == "ASA"`<br>`DeviceVendor == "Cisco"`<br>`Message contains "-> inside"`<br>`Message contains "-> management"`<br>`SimplifiedDeviceAction in "Allow,Built,Deny"`

| Workbook |
|:-------------|
| [Cisco](../content/ciscoasa-cisco-87e00b58.md) |

**In solution [CiscoSEG](../solutions/ciscoseg.md):** `DeviceEventClassID == "ESA_CONSOLIDATED_LOG_EVENT"`

| Workbook |
|:-------------|
| [CiscoSEG](../content/ciscoseg-ciscoseg-8d0b6fd3.md) |

**In solution [Citrix Web App Firewall](../solutions/citrix-web-app-firewall.md):** `DeviceProduct == "NetScaler"`<br>`DeviceVendor == "Citrix"`

| Workbook |
|:-------------|
| [CitrixWAF](../content/citrix-web-app-firewall-citrixwaf-f26995f5.md) |

**In solution [Claroty](../solutions/claroty.md):** `DeviceVendor == "Claroty"`

| Workbook |
|:-------------|
| [ClarotyOverview](../content/claroty-clarotyoverview-724141ff.md) |

**In solution [Common Event Format](../solutions/common-event-format.md):** `DeviceProduct has "PAN-OS"`

| Workbook |
|:-------------|
| [CEFOverviewWorkbook](../content/common-event-format-cefoverviewworkbook-a335b98c.md) |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [Contrast Protect](../solutions/contrast-protect.md):** `DeviceVendor == "Contrast Security"`

| Workbook |
|:-------------|
| [ContrastProtect](../content/contrast-protect-contrastprotect-d1bc473e.md) |

**In solution [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md):** `DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"`

| Workbook |
|:-------------|
| [CrowdStrikeFalconEndpointProtection](../content/crowdstrike-falcon-endpoint-protection-crowdstrikefalconendpointprotection-b9a8efc3.md) |

**In solution [CyberArk Privilege Access Manager (PAM) Events](../solutions/cyberark-privilege-access-manager-pam-events.md):** `DestinationUserPrivileges !contains "ConjurSync"`<br>`DestinationUserPrivileges !contains "PSM"`<br>`DestinationUserPrivileges !contains "PSMSessions"`<br>`DestinationUserPrivileges !contains "PVWAConfig"`<br>`DestinationUserPrivileges !contains "PVWAPrivateUserPrefs"`<br>`DestinationUserPrivileges !contains "PasswordManager"`<br>`DestinationUserPrivileges !contains "PasswordManagerShared"`<br>`DestinationUserPrivileges !contains "SharedAuth_Internal"`<br>`DestinationUserPrivileges !contains "VaultInternal"`<br>`DestinationUserPrivileges contains "ConjurSync"`<br>`DeviceAction contains "disable"`<br>`DeviceProduct == "Vault"`<br>`DeviceVendor == "Cyber-Ark"`<br>`OldFileID contains "Error"`<br>`OldFileID contains "Failure"`<br>`OldFileID contains "error"`<br>`SourceUserName !contains "PasswordManager"`<br>`SourceUserName contains "Sync_components"`<br>`SourceUserName contains "administrator"`

| Workbook |
|:-------------|
| [CyberArkEPV](../content/cyberark-privilege-access-manager-pam-events-cyberarkepv-316d29f3.md) |

**In solution [Delinea Secret Server](../solutions/delinea-secret-server.md):** `Activity == "SECRET - EXPIREDTODAY"`<br>`DeviceProduct == "Secret Server"`<br>`DeviceVendor in "Delinea Software,Thycotic Software"`<br>`LogSeverity == "2"`

| Workbook |
|:-------------|
| [DelineaWorkbook](../content/delinea-secret-server-delineaworkbook-819c816c.md) |

**In solution [ExtraHop Reveal(x)](../solutions/extrahop-reveal-x.md):** `DeviceVendor == "ExtraHop"`

| Workbook |
|:-------------|
| [ExtraHopDetectionSummary](../content/extrahop-reveal-x-extrahopdetectionsummary-e66497f1.md) |

**In solution [Forcepoint CASB](../solutions/forcepoint-casb.md):** `DeviceProduct in "CASB Admin audit log,Cloud Service Monitoring,SaaS Security Gateway"`<br>`DeviceVendor == "Forcepoint CASB"`

| Workbook |
|:-------------|
| [ForcepointCASB](../content/forcepoint-casb-forcepointcasb-d5d7df21.md) |

**In solution [Forcepoint CSG](../solutions/forcepoint-csg.md):** `Activity != "Blocked"`<br>`DeviceProduct in "Email,Web"`<br>`DeviceVendor == "Forcepoint CSG"`<br>`LogSeverity in "6,9"`<br>`SourceUserID != "Not available"`

| Workbook |
|:-------------|
| [ForcepointCloudSecuirtyGateway](../content/forcepoint-csg-forcepointcloudsecuirtygateway-3685ea15.md) |

**In solution [Forcepoint NGFW](../solutions/forcepoint-ngfw.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ForcepointNGFW](../content/forcepoint-ngfw-forcepointngfw-6b671d61.md) | `DeviceAction == "Terminate"`<br>`DeviceProduct == "NGFW"`<br>`DeviceVendor == "Forcepoint"`<br>`LogSeverity == "10"` |
| [ForcepointNGFWAdvanced](../content/forcepoint-ngfw-forcepointngfwadvanced-b6a3422e.md) | `Activity in "File_Malware-Blocked,URL_Category-Accounting"`<br>`DeviceAction == "Discard"`<br>`DeviceAction != "Discard"`<br>`DeviceAction != "Terminate"`<br>`DeviceFacility == "Inspection"`<br>`DeviceProduct in "Alert,Audit"`<br>`DeviceVendor in "FORCEPOINT,Forcepoint"`<br>`Message contains "Login succeeded"`<br>`Message contains "Logout"`<br>`Message contains "created"`<br>`Message contains "modified"` |

**In solution [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md):** `Activity contains "forward"`<br>`DestinationTranslatedAddress contains "."`<br>`DeviceInboundInterface in "port1,port2"`<br>`DeviceProduct contains "Fortigate"`<br>`DeviceVendor == "Fortinet"`

| Workbook |
|:-------------|
| [Fortigate](../content/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel-fortigate-2cb10dce.md) |

**In solution [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md):** `DeviceProduct has "Fortiweb"`<br>`DeviceVendor == "Fortinet"`

| Workbook |
|:-------------|
| [Fortiweb-workbook](../content/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel-fortiweb-workbook-9b70e162.md) |

**In solution [Illusive Platform](../solutions/illusive-platform.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [IllusiveADS](../content/illusive-platform-illusiveads-5d29048c.md) | `DeviceEventClassID in "illusive:access,illusive:login,illusive:suspicious"`<br>`Message !contains "hasForensics"`<br>`SourceHostName != "Failed to obtain"` |
| [IllusiveASM](../content/illusive-platform-illusiveasm-bca1238e.md) | `DeviceCustomString1 in "CROWN_JEWEL_CREDENTIALS,LOCAL_USER_ADMINISTRATORS,SUSPICIOUS_FILES,USER_CREDENTIALS"`<br>`DeviceEventClassID == "illusive:violation"` |

**In solution [Infoblox](../solutions/infoblox.md):** `DeviceEventClassID in "DHCP-LEASE-CREATE,DHCP-LEASE-DELETE,DHCP-LEASE-UPDATE"`<br>`DeviceEventClassID has "Audit"`<br>`DeviceEventClassID has "DHCP"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceEventClassID has "Service"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"`

| Workbook |
|:-------------|
| [Infoblox_Workbook](../content/infoblox-infoblox-workbook-0b2c239e.md) |

**In solution [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md):** `DeviceEventClassID in "DHCP-LEASE-CREATE,DHCP-LEASE-DELETE,DHCP-LEASE-UPDATE"`<br>`DeviceEventClassID has "DHCP"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"`

| Workbook |
|:-------------|
| [InfobloxCDCB1TDWorkbook](../content/infoblox-cloud-data-connector-infobloxcdcb1tdworkbook-a058ef8d.md) |

**In solution [IronNet IronDefense](../solutions/ironnet-irondefense.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [IronDefenseAlertDashboard](../content/ironnet-irondefense-irondefensealertdashboard-7226985d.md) |  |
| [IronDefenseAlertDetails](../content/ironnet-irondefense-irondefensealertdetails-13051619.md) | `DeviceProduct == "IronDefense"`<br>`LogSeverity in "High,Low,Medium,Very-High"` |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [Onapsis Platform](../solutions/onapsis-platform.md):** `DeviceVendor == "Onapsis"`

| Workbook |
|:-------------|
| [OnapsisAlarmsOverview](../content/onapsis-platform-onapsisalarmsoverview-d3ec56a6.md) |

**In solution [OneIdentity](../solutions/oneidentity.md):** `Activity in "ServerConnect,SessionClosed"`<br>`DeviceCustomString1Label == "Session ID"`<br>`DeviceProduct == "SPS"`<br>`DeviceVendor == "OneIdentity"`

| Workbook |
|:-------------|
| [OneIdentity](../content/oneidentity-oneidentity-732be1d3.md) |

**In solution [Palo Alto - XDR (Cortex)](../solutions/palo-alto-xdr-cortex.md):** `Activity == "WildFire Malware"`<br>`DeviceProduct == "Cortex XDR"`<br>`DeviceVendor == "Palo Alto Networks"`

| Workbook |
|:-------------|
| [PaloAltoXDR](../content/palo-alto-xdr-cortex-paloaltoxdr-404625dc.md) |

**In solution [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [PaloAltoNetworkThreat](../content/paloalto-pan-os-paloaltonetworkthreat-4d4c5438.md) | `Activity == "THREAT"`<br>`DeviceEventClassID in "correlation,vulnerability,wildfire"`<br>`DeviceEventClassID != "file"`<br>`DeviceEventClassID != "url"`<br>`DeviceProduct has "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [PaloAltoOverview](../content/paloalto-pan-os-paloaltooverview-9f519554.md) | `Activity in "THREAT,TRAFFIC,Traffic"`<br>`DeviceAction in "alert,block-continue,block-url,continue"`<br>`DeviceAction !contains "block"`<br>`DeviceAction !contains "deny"`<br>`DeviceAction contains "block"`<br>`DeviceAction contains "deny"`<br>`DeviceEventClassID in "end,file,url,wildfire"`<br>`DeviceProduct has "LF"`<br>`DeviceProduct has "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` |

**In solution [PaloAltoCDL](../solutions/paloaltocdl.md):** `DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"`

| Workbook |
|:-------------|
| [PaloAltoCDL](../content/paloaltocdl-paloaltocdl-00280c2a.md) |

**In solution [PingFederate](../solutions/pingfederate.md):** `DeviceProduct == "PingFederate"`<br>`DeviceProduct has "PingFederate"`

| Workbook |
|:-------------|
| [PingFederate](../content/pingfederate-pingfederate-c26986d3.md) |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) |  |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):** `DeviceVendor has_any "CrowdStrike,Microsoft,Qualys,Tripwire"`<br>`Message has_any "change"`<br>`Message has_any "record modified"`

| Workbook |
|:-------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |

**In solution [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SemperisDSPADChanges](../content/semperis-directory-services-protector-semperisdspadchanges-b1c49b5b.md) | `DeviceEventClassID == "Semperis.DSP.AdChanges"` |
| [SemperisDSPNotifications](../content/semperis-directory-services-protector-semperisdspnotifications-fcd6b926.md) | `DeviceProduct == "Core Directory"` |
| [SemperisDSPQuickviewDashboard](../content/semperis-directory-services-protector-semperisdspquickviewdashboard-72fd1e27.md) | `DeviceProduct == "Core Directory"` |
| [SemperisDSPSecurityIndicators](../content/semperis-directory-services-protector-semperisdspsecurityindicators-a942a3d9.md) |  |

**In solution [Silverfort](../solutions/silverfort.md):** `DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message !contains "count:"`

| Workbook |
|:-------------|
| [SilverfortWorkbook](../content/silverfort-silverfortworkbook-63b31322.md) |

**In solution [SonicWall Firewall](../solutions/sonicwall-firewall.md):** `Activity in "Anti-Spyware Detection Alert,Anti-Spyware Prevention Alert,Application Control Detection Alert,Application Control Prevention Alert,IPS Detection Alert,IPS Prevention Alert,Website Blocked"`<br>`Computer != "127.0.0.1"`<br>`DeviceVendor == "SonicWall"`<br>`Protocol !contains "/"`<br>`Protocol contains "-"`

| Workbook |
|:-------------|
| [SonicWallFirewall](../content/sonicwall-firewall-sonicwallfirewall-108e460f.md) |

**In solution [Trend Micro Apex One](../solutions/trend-micro-apex-one.md):** `DeviceProduct == "Apex Central"`<br>`DeviceVendor == "Trend Micro"`

| Workbook |
|:-------------|
| [TrendMicroApexOne](../content/trend-micro-apex-one-trendmicroapexone-36972fb3.md) |

**In solution [Trend Micro Deep Security](../solutions/trend-micro-deep-security.md):** `DeviceProduct startswith "Deep Security"`<br>`DeviceVendor has_any "Trend Micro,TrendMicro"`

| Workbook |
|:-------------|
| [TrendMicroDeepSecurityAttackActivity](../content/trend-micro-deep-security-trendmicrodeepsecurityattackactivity-4ac1a0a6.md) |
| [TrendMicroDeepSecurityOverview](../content/trend-micro-deep-security-trendmicrodeepsecurityoverview-abad9508.md) |

**In solution [Vectra AI Detect](../solutions/vectra-ai-detect.md):** `DeviceCustomString1 == "True"`<br>`DeviceCustomString2 == "True"`<br>`DeviceEventClassID in "asc,audit,campaigns,health,hsc"`<br>`DeviceEventClassID !in "health,audit,campaigns,hsc,asc"`<br>`DeviceEventClassID !in "health,audit,campaigns,hsc,asc"`<br>`DeviceVendor == "Vectra Networks"`<br>`SourceUserName != "All"`

| Workbook |
|:-------------|
| [AIVectraDetectWorkbook](../content/vectra-ai-detect-aivectradetectworkbook-74fce2d7.md) |

**In solution [Votiro](../solutions/votiro.md):** `DeviceProduct == "Votiro cloud"`<br>`DeviceVendor == "Votiro"`

| Workbook |
|:-------------|
| [Votiro Monitoring Dashboard](../content/votiro-votiro-monitoring-dashboard-733f09ff.md) |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

**In solution [Zscaler Internet Access](../solutions/zscaler-internet-access.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NSSAuditLogs](../content/zscaler-internet-access-nssauditlogs-87498814.md) | `DeviceProduct == "NSSAuditlog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSCASBActivityLogs](../content/zscaler-internet-access-nsscasbactivitylogs-0f33695f.md) | `DeviceProduct == "NSSCasbactivitylog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSCASBCRMLogs](../content/zscaler-internet-access-nsscasbcrmlogs-26d4fe79.md) | `DeviceProduct == "NSSCasbcrmlog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSCASBCloudStorageLogs](../content/zscaler-internet-access-nsscasbcloudstoragelogs-82b90374.md) | `DeviceProduct == "NSSCasbcloudstoragelog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSCASBCollabLogs](../content/zscaler-internet-access-nsscasbcollablogs-c8df0b8f.md) | `DeviceProduct == "NSSCasbcollablog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSCASBEmail](../content/zscaler-internet-access-nsscasbemail-b49ea906.md) | `DeviceProduct == "NSSCasbemaillog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSCASBFileSharingLogs](../content/zscaler-internet-access-nsscasbfilesharinglogs-9c3c0d80.md) | `DeviceProduct == "NSSCasbfilesharinglog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSCASBITSMLogs](../content/zscaler-internet-access-nsscasbitsmlogs-d4dec864.md) | `DeviceProduct == "NSSCasbitsmlog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSCASBRepoLogs](../content/zscaler-internet-access-nsscasbrepologs-fe9ebeee.md) | `DeviceProduct == "NSSCasbrepolog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSDNSLogs](../content/zscaler-internet-access-nssdnslogs-42cf7154.md) | `DeviceProduct == "NSSDNSlog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSEmailDLPLogs](../content/zscaler-internet-access-nssemaildlplogs-f9c40d5b.md) | `DeviceCustomString4Label == "rulelabels"`<br>`DeviceEventClassID == "DLP Incident"`<br>`DeviceProduct == "NSSEmaildlplog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSEndpointDLPLogs](../content/zscaler-internet-access-nssendpointdlplogs-0e576c1a.md) | `DeviceProduct == "NSSEndpointdlplog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSFWLogs](../content/zscaler-internet-access-nssfwlogs-388b174c.md) | `Activity !contains "Default"`<br>`Activity !contains "Recommended"`<br>`DestinationPort != "0"`<br>`DeviceEventClassID !contains "Allow"`<br>`DeviceEventClassID contains "Allow"`<br>`DeviceProduct == "NSSFWlog"`<br>`SourcePort != "0"` |
| [NSSTunnelLogs](../content/zscaler-internet-access-nsstunnellogs-b80054bc.md) | `DeviceEventClassID in "Tunnel Event,Tunnel Samples"`<br>`DeviceProduct == "NSSTunnellog"`<br>`DeviceVendor == "Zscaler"` |
| [NSSWebLogsOffice365](../content/zscaler-internet-access-nssweblogsoffice365-2d8bc9c5.md) | `DestinationServiceName contains "Microsoft"`<br>`DestinationServiceName contains "Onedrive"`<br>`DestinationServiceName contains "Outlook"`<br>`DestinationServiceName contains "Sharepoint"`<br>`DestinationServiceName contains "Skype"`<br>`DestinationServiceName contains "office.com"`<br>`DeviceCustomString2 == "Phishing"`<br>`DeviceEventClassID !contains "Allow"`<br>`DeviceEventClassID contains "Allow"`<br>`DeviceVendor == "Zscaler"` |
| [NSSWebLogsOverview](../content/zscaler-internet-access-nssweblogsoverview-075f4b3c.md) | `DestinationServiceName has_any "Microsoft"`<br>`DeviceEventClassID in "Allow,Allowed"`<br>`DeviceEventClassID !contains "Allow"`<br>`DeviceEventClassID contains "Allow"`<br>`DeviceProduct == "NSSWeblog"`<br>`DeviceVendor == "Zscaler"`<br>`RequestMethod != "None"`<br>`SourceUserPrivileges == "Road Warrior"` |
| [NSSWebLogsThreats](../content/zscaler-internet-access-nssweblogsthreats-fa8d9804.md) | `Activity contains "IPS"`<br>`DestinationServiceName != "generalbrowsing"`<br>`DeviceCustomString3 contains "Behavior"`<br>`DeviceCustomString5 != "None"`<br>`DeviceCustomString5 != "suspiciousfile"`<br>`DeviceCustomString5Label == "threatname"`<br>`DeviceEventClassID == "Blocked"`<br>`DeviceEventClassID !contains "Allow"`<br>`DeviceEventClassID contains "Block"`<br>`DeviceProduct == "NSSWeblog"`<br>`DeviceVendor == "Zscaler"`<br>`SourceUserPrivileges == "Road Warrior"` |

**In solution [iboss](../solutions/iboss.md):** `DeviceVendor == "iboss"`

| Workbook |
|:-------------|
| [ibossMalwareAndC2](../content/iboss-ibossmalwareandc2-0213a927.md) |
| [ibossWebUsage](../content/iboss-ibosswebusage-5b4fbb25.md) |

**In solution [vArmour Application Controller](../solutions/varmour-application-controller.md):** `Activity == "POLICY_VIOLATION"`<br>`DeviceProduct == "AC"`<br>`DeviceVendor == "vArmour"`

| Workbook |
|:-------------|
| [vArmour_AppContoller_Workbook](../content/varmour-application-controller-varmour-appcontoller-workbook-89c75f45.md) |

## Parsers Using This Table (67)

### ASIM Parsers (34)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuditEventBarracudaCEF](../asim/asimauditeventbarracudacef.md) | AuditEvent | Barracuda WAF | `DeviceProduct in "WAAS,WAF"`<br>`DeviceVendor startswith "Barracuda"` |
| [ASimAuditEventCrowdStrikeFalconHost](../asim/asimauditeventcrowdstrikefalconhost.md) | AuditEvent | CrowdStrike Falcon Endpoint Protection | `DeviceEventClassID == "UserActivityAuditEvent"`<br>`DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` |
| [ASimAuditEventInfobloxBloxOne](../asim/asimauditeventinfobloxbloxone.md) | AuditEvent | Infoblox BloxOne | `DeviceEventClassID has "AUDIT"`<br>`DeviceVendor == "Infoblox"` |
| [ASimAuthenticationCiscoASA](../asim/asimauthenticationciscoasa.md) | Authentication | Cisco Adaptive Security Appliance (ASA) | `DeviceProduct == "ASA"`<br>`DeviceVendor == "Cisco"` |
| [ASimAuthenticationCrowdStrikeFalconHost](../asim/asimauthenticationcrowdstrikefalconhost.md) | Authentication | CrowdStrike Falcon Endpoint Protection | `DeviceEventClassID in "twoFactorAuthenticate,userAuthenticate"`<br>`DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` |
| [ASimAuthenticationFortinetFortigate](../asim/asimauthenticationfortinetfortigate.md) | Authentication | Fortigate | `DeviceEventClassID !in "0100022949,0100022952"`<br>`DeviceProduct has "Fortigate"`<br>`DeviceVendor == "Fortinet"` |
| [ASimAuthenticationPaloAltoCortexDataLake](../asim/asimauthenticationpaloaltocortexdatalake.md) | Authentication | Palo Alto Cortex Data Lake | `DeviceEventClassID == "AUTH"`<br>`DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [ASimAuthenticationPaloAltoGlobalProtect](../asim/asimauthenticationpaloaltoglobalprotect.md) | Authentication | Palo Alto PAN-OS GlobalProtect | `DeviceEventClassID == "GLOBALPROTECT"`<br>`DeviceProduct == "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [ASimAuthenticationPaloAltoPanOS](../asim/asimauthenticationpaloaltopanos.md) | Authentication | Palo Alto PAN-OS | `DeviceEventClassID startswith "auth"`<br>`DeviceProduct == "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [ASimDhcpEventInfobloxBloxOne](../asim/asimdhcpeventinfobloxbloxone.md) | DhcpEvent | Infoblox BloxOne | `DeviceEventClassID has "DHCP"`<br>`DeviceVendor == "Infoblox"` |
| [ASimDnsFortinetFortiGate](../asim/asimdnsfortinetfortigate.md) | Dns | Fortinet FortiGate | `DeviceEventClassID endswith "54000"`<br>`DeviceEventClassID endswith "54200"`<br>`DeviceEventClassID endswith "54400"`<br>`DeviceEventClassID endswith "54401"`<br>`DeviceEventClassID endswith "54600"`<br>`DeviceEventClassID endswith "54601"`<br>`DeviceEventClassID endswith "54800"`<br>`DeviceEventClassID endswith "54801"`<br>`DeviceEventClassID endswith "54802"`<br>`DeviceEventClassID endswith "54803"`<br>`DeviceEventClassID endswith "54804"`<br>`DeviceEventClassID endswith "54805"`<br>`DeviceProduct startswith "Fortigate"`<br>`DeviceVendor == "Fortinet"` |
| [ASimDnsInfobloxBloxOne](../asim/asimdnsinfobloxbloxone.md) | Dns | Infoblox BloxOne | `DeviceEventClassID has "DNS"`<br>`DeviceVendor == "Infoblox"` |
| [ASimDnsZscalerZIA](../asim/asimdnszscalerzia.md) | Dns | Zscaler ZIA DNS | `DeviceProduct == "NSSDNSlog"` |
| [ASimNetworkSessionBarracudaCEF](../asim/asimnetworksessionbarracudacef.md) | NetworkSession | Barracuda WAF | `DeviceProduct in "WAAS,WAF"`<br>`DeviceVendor startswith "Barracuda"` |
| [ASimNetworkSessionCheckPointFirewall](../asim/asimnetworksessioncheckpointfirewall.md) | NetworkSession | CheckPointFirewall | `DeviceProduct == "VPN-1 & FireWall-1"`<br>`DeviceVendor == "CheckPoint"` |
| [ASimNetworkSessionCheckPointSmartDefense](../asim/asimnetworksessioncheckpointsmartdefense.md) | NetworkSession | CheckPointSmartDefense | `DeviceProduct == "SmartDefense"`<br>`DeviceVendor == "Check Point"` |
| [ASimNetworkSessionCiscoASA](../asim/asimnetworksessionciscoasa.md) | NetworkSession | CiscoASA | `DeviceEventClassID in "106001,106002,106006,106007,106010,106012,106013,106014,106015,106016,106017,106018,106020,106021,106022,106023,106100,302013,302014,302015,302016,302020,302021,710002,710003,710004,710005"`<br>`DeviceProduct == "ASA"`<br>`DeviceVendor == "Cisco"` |
| [ASimNetworkSessionCiscoFirepower](../asim/asimnetworksessionciscofirepower.md) | NetworkSession | Cisco Firepower | `DeviceEventClassID has "INTRUSION:400"`<br>`DeviceEventClassID has "PV:112"`<br>`DeviceEventClassID has "RNA:1003:1"`<br>`DeviceEventClassID has_any "INTRUSION:400,PV:112,RNA:1003:1"`<br>`DeviceProduct == "Firepower"`<br>`DeviceVendor == "Cisco"` |
| [ASimNetworkSessionCrowdStrikeFalconHost](../asim/asimnetworksessioncrowdstrikefalconhost.md) | NetworkSession | CrowdStrike Falcon Endpoint Protection | `DeviceEventClassID in "FirewallMatchEvent,Network Access In A Detection Summary Event"`<br>`DeviceEventClassID has "Network Access In A Detection Summary Event"`<br>`DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` |
| [ASimNetworkSessionForcePointFirewall](../asim/asimnetworksessionforcepointfirewall.md) | NetworkSession | ForcePointFirewall | `ApplicationProtocol startswith "TCP"`<br>`ApplicationProtocol startswith "UDP"`<br>`DestinationServiceName in "Application-Unknown,Generic-Web-HTTP,Unknown-Encrypted-Application"`<br>`DeviceEventClassID in "70734,76508,76509"`<br>`DeviceEventClassID != "0"`<br>`DeviceEventClassID !in "70383,70393,70734,71009,71040"`<br>`DeviceProduct == "Firewall"`<br>`DeviceVendor == "FORCEPOINT"`<br>`RequestMethod != "UNKNOWN"` |
| [ASimNetworkSessionFortinetFortiGate](../asim/asimnetworksessionfortinetfortigate.md) | NetworkSession | Fortinet FortiGate | `DeviceProduct startswith "FortiGate"`<br>`DeviceVendor == "Fortinet"` |
| [ASimNetworkSessionPaloAltoCEF](../asim/asimnetworksessionpaloaltocef.md) | NetworkSession | Palo Alto PanOS | `DeviceProduct == "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [ASimNetworkSessionPaloAltoCortexDataLake](../asim/asimnetworksessionpaloaltocortexdatalake.md) | NetworkSession | Palo Alto Cortex Data Lake | `DeviceEventClassID == "TRAFFIC"`<br>`DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [ASimNetworkSessionSonicWallFirewall](../asim/asimnetworksessionsonicwallfirewall.md) | NetworkSession | SonicWall | `DeviceVendor == "SonicWall"`<br>`Protocol !contains "/"`<br>`Protocol contains "-"` |
| [ASimNetworkSessionZscalerZIA](../asim/asimnetworksessionzscalerzia.md) | NetworkSession | Zscaler ZIA Firewall | `DeviceProduct == "NSSFWlog"`<br>`DeviceVendor == "Zscaler"` |
| [ASimWebSessionBarracudaCEF](../asim/asimwebsessionbarracudacef.md) | WebSession | Barracuda WAF | `DeviceProduct in "WAAS,WAF"`<br>`DeviceVendor startswith "Barracuda"` |
| [ASimWebSessionCiscoFirepower](../asim/asimwebsessionciscofirepower.md) | WebSession | Cisco Firepower | `DeviceEventClassID in "File:500:1,FileMalware:502:1,FireAMP:125:1"`<br>`DeviceEventClassID has "File:500:1"`<br>`DeviceEventClassID has "FileMalware:502:1"`<br>`DeviceProduct == "Firepower"`<br>`DeviceVendor == "Cisco"` |
| [ASimWebSessionCitrixNetScaler](../asim/asimwebsessioncitrixnetscaler.md) | WebSession | Citrix NetScaler | `DeviceEventClassID == "APPFW"`<br>`DeviceProduct == "NetScaler"`<br>`DeviceVendor == "Citrix"` |
| [ASimWebSessionF5ASM](../asim/asimwebsessionf5asm.md) | WebSession | F5 BIG-IP Application Security Manager (ASM) | `DeviceProduct == "ASM"`<br>`DeviceVendor == "F5"` |
| [ASimWebSessionFortinetFortiGate](../asim/asimwebsessionfortinetfortigate.md) | WebSession | Fortinet FortiGate | `DeviceProduct startswith "Fortigate"`<br>`DeviceVendor == "Fortinet"` |
| [ASimWebSessionPaloAltoCEF](../asim/asimwebsessionpaloaltocef.md) | WebSession | Palo Alto Networks | `Activity == "THREAT"`<br>`DeviceEventClassID == "url"`<br>`DeviceProduct == "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [ASimWebSessionPaloAltoCortexDataLake](../asim/asimwebsessionpaloaltocortexdatalake.md) | WebSession | Palo Alto Cortex Data Lake | `DeviceEventClassID == "THREAT"`<br>`DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [ASimWebSessionSonicWallFirewall](../asim/asimwebsessionsonicwallfirewall.md) | WebSession | SonicWall | `DestinationIP has ":"`<br>`DeviceVendor == "SonicWall"`<br>`Protocol !contains "/"`<br>`Protocol contains "-"` |
| [ASimWebSessionZscalerZIA](../asim/asimwebsessionzscalerzia.md) | WebSession | Zscaler ZIA | `DeviceCustomString4 == "None"`<br>`DeviceProduct == "NSSWeblog"`<br>`DeviceVendor == "Zscaler"`<br>`RequestContext == "None"` |

### Other Parsers (33)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AkamaiSIEMEvent](../parsers/akamaisiemevent.md) | [Akamai Security Events](../solutions/akamai-security-events.md) | `DeviceProduct == "akamai_siem"`<br>`DeviceVendor == "Akamai"` |
| [ArubaClearPass](../parsers/arubaclearpass.md) | [Aruba ClearPass](../solutions/aruba-clearpass.md) | `DeviceProduct == "ClearPass"`<br>`DeviceVendor == "Aruba Networks"` |
| [CiscoSEGEvent](../parsers/ciscosegevent.md) | [CiscoSEG](../solutions/ciscoseg.md) | `DeviceEventClassID == "ESA_CONSOLIDATED_LOG_EVENT"` |
| [CitrixADCEventOld](../parsers/citrixadceventold.md) | [Citrix ADC](../solutions/citrix-adc.md) ⚠️ | `DeviceProduct == "NetScaler"`<br>`DeviceVendor == "Citrix"` |
| [ClarotyEvent](../parsers/clarotyevent.md) | [Claroty](../solutions/claroty.md) | `DeviceVendor == "Claroty"` |
| [CrowdStrikeFalconEventStream](../parsers/crowdstrikefalconeventstream.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) | `DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` |
| [DragosPushNotificationsToSentinel](../parsers/dragospushnotificationstosentinel.md) | [Dragos](../solutions/dragos.md) | `DeviceCustomString1 has "None"`<br>`DeviceProduct == "Platform"`<br>`DeviceVendor == "Dragos"`<br>`DeviceVersion == "2"` |
| [FireEyeNXEvent](../parsers/fireeyenxevent.md) | [FireEye Network Security](../solutions/fireeye-network-security.md) | `DeviceVendor == "FireEye"` |
| [ForgeRockParser](../parsers/forgerockparser.md) | [ForgeRock Common Audit for CEF](../solutions/forgerock-common-audit-for-cef.md) | `DeviceVendor == "ForgeRock Inc"` |
| [Fortiweb](../parsers/fortiweb.md) | [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md) | `DeviceProduct has "Fortiweb"`<br>`DeviceVendor == "Fortinet"` |
| [IllumioCoreEvent](../parsers/illumiocoreevent.md) | [Illumio Core](../solutions/illumio-core.md) | `DeviceCustomString1Label in "dst_vulns,event_href"`<br>`DeviceCustomString2Label in "resource_changes,state"`<br>`DeviceCustomString4Label in "dst_labels,notifications"`<br>`DeviceCustomString6Label == "dst_href"`<br>`DeviceVendor == "Illumio"` |
| [InfobloxCDC](../parsers/infobloxcdc.md) | [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md) | `DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [InfobloxCDC_SOCInsights](../parsers/infobloxcdc-socinsights.md) | [Infoblox](../solutions/infoblox.md) | `DeviceEventClassID == "BloxOne-InsightsNotification-Log"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [InfobloxCDC_SOCInsights](../parsers/infobloxcdc-socinsights.md) | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) | `DeviceEventClassID == "BloxOne-InsightsNotification-Log"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` |
| [McAfee Common Security Log Parser](../parsers/mcafee-common-security-log-parser.md) | *(Legacy)* | `DeviceVendor == "McAfee"` |
| [NetwrixAuditor](../parsers/netwrixauditor.md) | [Netwrix Auditor](../solutions/netwrix-auditor.md) | `DeviceVendor == "Netwrix"` |
| [NozomiNetworksEvents](../parsers/nozominetworksevents.md) | [NozomiNetworks](../solutions/nozominetworks.md) | `DeviceVendor has "Nozomi"` |
| [OSSECEvent](../parsers/ossecevent.md) | [OSSEC](../solutions/ossec.md) | `DeviceVendor has "OSSEC"` |
| [OneIdentity_Safeguard](../parsers/oneidentity-safeguard.md) | [OneIdentity](../solutions/oneidentity.md) ⚠️ | `DeviceVendor == "OneIdentity"` |
| [OneIdentity_Safeguard](../parsers/oneidentity-safeguard.md) | [OneIdentity](../solutions/oneidentity.md) | `DeviceVendor == "OneIdentity"` |
| [PaloAltoCDLEvent](../parsers/paloaltocdlevent.md) | [PaloAltoCDL](../solutions/paloaltocdl.md) | `DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"` |
| [PingFederateEvent](../parsers/pingfederateevent.md) | [PingFederate](../solutions/pingfederate.md) | `DeviceProduct has "PingFederate"` |
| [RadiflowEvent](../parsers/radiflowevent.md) | [Radiflow](../solutions/radiflow.md) | `DeviceVendor == "radiflow"` |
| [StealthBits StealthDefend Parser](../parsers/stealthbits-stealthdefend-parser.md) | *(Legacy)* | `DeviceProduct == "StealthDEFEND"`<br>`DeviceVendor == "STEALTHbits Technologies"` |
| [SymantecDLP](../parsers/symantecdlp.md) | [Broadcom SymantecDLP](../solutions/broadcom-symantecdlp.md) | `DeviceProduct == "DLP"`<br>`DeviceVendor == "Symantec"` |
| [TMApexOneEvent](../parsers/tmapexoneevent.md) | [Trend Micro Apex One](../solutions/trend-micro-apex-one.md) | `DeviceProduct == "Apex Central"`<br>`DeviceVendor == "Trend Micro"` |
| [TrendMicroDeepSecurity](../parsers/trendmicrodeepsecurity.md) | [Trend Micro Deep Security](../solutions/trend-micro-deep-security.md) | `DeviceProduct startswith "Deep Security"`<br>`DeviceVendor has_any "Trend Micro,TrendMicro"` |
| [TrendMicroTippingPoint](../parsers/trendmicrotippingpoint.md) | [Trend Micro TippingPoint](../solutions/trend-micro-tippingpoint.md) | `DeviceProduct == "UnityOne"` |
| [VotiroEvents](../parsers/votiroevents.md) | [Votiro](../solutions/votiro.md) | `DeviceProduct == "Votiro cloud"`<br>`DeviceVendor == "Votiro"` |
| [getForgeRockUsers](../parsers/getforgerockusers.md) | [ForgeRock Common Audit for CEF](../solutions/forgerock-common-audit-for-cef.md) ⚠️ | `DeviceVendor == "ForgeRock Inc"` |
| [ibossUrlEvent](../parsers/ibossurlevent.md) | [iboss](../solutions/iboss.md) | `DeviceVendor == "iboss"` |
| [pfsensefilterlog](../parsers/pfsensefilterlog.md) | *(Legacy)* | `DeviceEventClassID == "filterlog"`<br>`DeviceProduct == "pfsense"` |
| [pfsensenginx](../parsers/pfsensenginx.md) | *(Legacy)* | `DeviceEventClassID == "nginx"`<br>`DeviceProduct == "pfsense"` |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/cef`
- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

## Selection Criteria Summary (214 criteria, 425 total references)

References by type: 108 connectors, 250 content items, 34 ASIM parsers, 33 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `DeviceProduct has "PingFederate"` | 2 | 21 | - | 1 | **24** |
| `DeviceEventClassID == "ESA_CONSOLIDATED_LOG_EVENT"` | 1 | 22 | - | 1 | **24** |
| `DeviceProduct == "Apex Central"`<br>`DeviceVendor == "Trend Micro"` | 2 | 21 | - | 1 | **24** |
| `DeviceVendor == "Claroty"` | 2 | 21 | - | 1 | **24** |
| `DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"` | 2 | 21 | - | 1 | **24** |
| `DeviceProduct == "iSID"`<br>`DeviceVendor == "radiflow"` | 1 | 8 | - | - | **9** |
| `DeviceEventClassID == "BloxOne-InsightsNotification-Log"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | 3 | 2 | - | 2 | **7** |
| `DeviceProduct == "Votiro cloud"`<br>`DeviceVendor == "Votiro"` | 1 | 3 | - | 1 | **5** |
| `DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` | 2 | 2 | - | 1 | **5** |
| `DeviceProduct == "Awake Security"`<br>`DeviceVendor == "Arista Networks"` | 1 | 4 | - | - | **5** |
| `DeviceProduct has "Fortiweb"`<br>`DeviceVendor == "Fortinet"` | - | 4 | - | 1 | **5** |
| `Activity == "POLICY_VIOLATION"`<br>`DeviceProduct == "AC"`<br>`DeviceVendor == "vArmour"` | 2 | 2 | - | - | **4** |
| `DeviceProduct startswith "Deep Security"`<br>`DeviceVendor has_any "Trend Micro,TrendMicro"` | 1 | 2 | - | 1 | **4** |
| `DeviceEventClassID has "RPZ"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | - | 4 | - | - | **4** |
| `DeviceAction != "block-url"`<br>`DeviceEventClassID == "url"`<br>`DeviceVendor == "Palo Alto Networks"` | - | 4 | - | - | **4** |
| `DeviceVendor == "Contrast Security"` | 2 | 1 | - | - | **3** |
| `DeviceVendor has "Nozomi"` | 2 | - | - | 1 | **3** |
| `DeviceVendor == "Netwrix"` | 2 | - | - | 1 | **3** |
| `DeviceProduct == "ClearPass"`<br>`DeviceVendor == "Aruba Networks"` | 2 | - | - | 1 | **3** |
| `DeviceProduct == "akamai_siem"`<br>`DeviceVendor == "Akamai"` | 2 | - | - | 1 | **3** |
| `DeviceCustomString1Label in "dst_vulns,event_href"`<br>`DeviceCustomString2Label in "resource_changes,state"`<br>`DeviceCustomString4Label in "dst_labels,notifications"`<br>`DeviceCustomString6Label == "dst_href"`<br>`DeviceVendor == "Illumio"` | 2 | - | - | 1 | **3** |
| `DeviceProduct == "DLP"`<br>`DeviceVendor == "Symantec"` | 2 | - | - | 1 | **3** |
| `DeviceVendor == "FireEye"` | 2 | - | - | 1 | **3** |
| `DeviceVendor == "Acronis audit"` | - | 3 | - | - | **3** |
| `DeviceVendor == "iboss"` | - | 2 | - | 1 | **3** |
| `DeviceProduct in "WAAS,WAF"`<br>`DeviceVendor startswith "Barracuda"` | - | - | 3 | - | **3** |
| `DeviceVendor == "Forcepoint CASB"` | 2 | - | - | - | **2** |
| `DeviceEventClassID == "4001"`<br>`DeviceVendor == "RidgeSecurity"` | 1 | 1 | - | - | **2** |
| `AdditionalExtensions contains "fw_action="`<br>`DeviceVendor == "SonicWall"` | 2 | - | - | - | **2** |
| `DeviceEventClassID == "ExtraHop Detection"`<br>`DeviceVendor == "ExtraHop"` | 2 | - | - | - | **2** |
| `DeviceProduct == "Vault"`<br>`DeviceVendor == "Cyber-Ark"`<br>`LogSeverity in "10,7"` | 2 | - | - | - | **2** |
| `DeviceVendor == "Darktrace"` | 2 | - | - | - | **2** |
| `Activity in "APPFW_SQL,APPFW_STARTURL,APPFW_XSS"`<br>`DeviceProduct == "NetScaler"`<br>`DeviceVendor == "Citrix"` | 2 | - | - | - | **2** |
| `AdditionalExtensions has "InfobloxRPZ=APP_"`<br>`AdditionalExtensions has "InfobloxRPZ=CAT_"`<br>`DeviceEventClassID == "DHCP-LEASE-CREATE"`<br>`DeviceEventClassID has "Audit"`<br>`DeviceEventClassID has "DHCP"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceEventClassID has "Service"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | 2 | - | - | - | **2** |
| `Activity contains "compromise"`<br>`DeviceAction == "Terminate"`<br>`DeviceProduct == "NGFW"`<br>`DeviceVendor == "Forcepoint"` | 2 | - | - | - | **2** |
| `DeviceVendor == "Barracuda"` | 1 | 1 | - | - | **2** |
| `ApplicationProtocol in "DNS,HTTP,TDS"`<br>`DeviceProduct == "WireX NFP"`<br>`DeviceVendor == "WireX"` | 2 | - | - | - | **2** |
| `Activity == "Blocked"`<br>`DeviceProduct in "Email,Web"`<br>`DeviceVendor == "Forcepoint CSG"`<br>`LogSeverity == "6"`<br>`SourceUserID != "Not available"` | 2 | - | - | - | **2** |
| `Activity has "SECRET - CREATE"`<br>`Activity has "SECRET - VIEW"`<br>`DeviceProduct == "Secret Server"`<br>`DeviceVendor in "Delinea Software,Thycotic Software"` | 2 | - | - | - | **2** |
| `DeviceEventClassID == "hsc"`<br>`DeviceEventClassID !in "health,audit,campaigns,hsc,asc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` | 2 | - | - | - | **2** |
| `Activity == "File Malware Event"`<br>`DestinationPort == "80"`<br>`DeviceAction != "Allow"`<br>`DeviceProduct == "Firepower"`<br>`DeviceVendor == "Cisco"` | 2 | - | - | - | **2** |
| `DeviceProduct == "UnityOne"` | 1 | - | - | 1 | **2** |
| `DeviceEventClassID in "illusive:access,illusive:login,illusive:suspicious"`<br>`DeviceProduct == "illusive"`<br>`DeviceVendor == "illusive"`<br>`Message !contains "hasForensics"`<br>`SourceHostName != "Failed to obtain"` | 2 | - | - | - | **2** |
| `DeviceVendor == "F5"` | 2 | - | - | - | **2** |
| `DeviceVendor has "OSSEC"` | 1 | - | - | 1 | **2** |
| `DeviceProduct startswith "Fortigate"`<br>`DeviceVendor == "Fortinet"` | 1 | - | 1 | - | **2** |
| `DeviceEventClassID == "MaliciousUrlDetected"`<br>`DeviceVendor == "Acronis"` | - | 2 | - | - | **2** |
| `DeviceEventClassID == "ActiveProtectionBlocksSuspiciousActivity"`<br>`DeviceVendor == "Acronis"` | - | 2 | - | - | **2** |
| `DeviceEventClassID in "MaliciousEmailDetectedPerceptionPointWarning,MaliciousURLDetectedInM365MailboxBackup,MalwareDetectedInM365MailboxBackup"`<br>`DeviceVendor == "Acronis"` | - | 2 | - | - | **2** |
| `DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | - | 1 | - | 1 | **2** |
| `Activity == "TRAFFIC"`<br>`DeviceVendor == "Palo Alto Networks"` | - | 2 | - | - | **2** |
| `DeviceEventClassID == "url"` | - | 2 | - | - | **2** |
| `ApplicationProtocol in "pop3,smtp"`<br>`DeviceEventClassID == "wildfire"`<br>`DeviceVendor == "Palo Alto Networks"` | - | 2 | - | - | **2** |
| `DeviceEventClassID != "asc"`<br>`DeviceEventClassID != "audit"`<br>`DeviceEventClassID != "campaigns"`<br>`DeviceEventClassID != "health"`<br>`DeviceEventClassID != "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` | - | 2 | - | - | **2** |
| `DeviceProduct == "NetScaler"`<br>`DeviceVendor == "Citrix"` | - | 1 | - | 1 | **2** |
| `DeviceProduct == "Core Directory"` | - | 2 | - | - | **2** |
| `DeviceVendor == "ForgeRock Inc"` | - | - | - | 2 | **2** |
| `DeviceVendor == "OneIdentity"` | - | - | - | 2 | **2** |
| `AdditionalExtensions contains "amaExternalLogService=true"`<br>`DeviceVendor == "iboss"` | 1 | - | - | - | **1** |
| `DeviceProduct == "ASA"`<br>`DeviceVendor == "Cisco"`<br>`SimplifiedDeviceAction == "Deny"` | 1 | - | - | - | **1** |
| `Activity == "SessionClosed"`<br>`DeviceCustomString1Label == "Session ID"`<br>`DeviceProduct == "SPS"`<br>`DeviceVendor == "OneIdentity"` | 1 | - | - | - | **1** |
| `Activity == "THREAT"`<br>`DeviceProduct has "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` | 1 | - | - | - | **1** |
| `DeviceEventClassID in "IPSec Phase1,IPSec Phase2,Tunnel Event"`<br>`DeviceProduct == "NSSTunnellog"` | 1 | - | - | - | **1** |
| `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbcollablog"` | 1 | - | - | - | **1** |
| `DeviceProduct == "Fortiweb"`<br>`DeviceProduct has "Fortiweb"`<br>`DeviceVendor == "Fortinet"` | 1 | - | - | - | **1** |
| `DeviceAction == "FAILED"`<br>`DeviceProduct == "IDM"`<br>`DeviceVendor == "ForgeRock Inc"` | 1 | - | - | - | **1** |
| `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbitsmlog"` | 1 | - | - | - | **1** |
| `AdditionalExtensions !contains "amaExternalLogService=true"`<br>`DeviceVendor == "iboss"` | 1 | - | - | - | **1** |
| `DeviceVendor in "Claroty,Medigate"` | 1 | - | - | - | **1** |
| `DeviceVendor == "OSSEC"`<br>`DeviceVendor has "OSSEC"` | 1 | - | - | - | **1** |
| `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbcrmlog"` | 1 | - | - | - | **1** |
| `DeviceProduct in "IronDefense,IronDome"`<br>`DeviceVendor == "IronNet"` | 1 | - | - | - | **1** |
| `DeviceProduct == "Fortigate"`<br>`DeviceProduct startswith "Fortigate"`<br>`DeviceVendor == "Fortinet"` | 1 | - | - | - | **1** |
| `DeviceVendor == "WithSecure™"` | 1 | - | - | - | **1** |
| `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbcloudstoragelog"` | 1 | - | - | - | **1** |
| `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbrepolog"` | 1 | - | - | - | **1** |
| `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSEmaildlplog"` | 1 | - | - | - | **1** |
| `Computer contains "Fortiweb"`<br>`DeviceProduct contains "Fortiweb"`<br>`DeviceProduct has "Fortiweb"`<br>`DeviceVendor == "Fortinet"`<br>`DeviceVendor contains "Fortinet"` | 1 | - | - | - | **1** |
| `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbactivitylog"` | 1 | - | - | - | **1** |
| `DeviceEventClassID == "ESA_CONSOLIDATED_LOG_EVENT"`<br>`DeviceProduct == "ESA_CONSOLIDATED_LOG_EVENT"`<br>`DeviceVendor == "Cisco"` | 1 | - | - | - | **1** |
| `AdditionalExtensions has "InfobloxRPZ=APP_"`<br>`AdditionalExtensions has "InfobloxRPZ=CAT_"`<br>`DeviceEventClassID == "DHCP-LEASE-CREATE"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | 1 | - | - | - | **1** |
| `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct == "Admin Console"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor == "Silverfort"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "UserBruteForce"` | 1 | - | - | - | **1** |
| `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSEndpointdlplog"` | 1 | - | - | - | **1** |
| `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbemaillog"` | 1 | - | - | - | **1** |
| `DeviceAction == "Blocked"`<br>`DeviceProduct == "NSSCasbfilesharinglog"` | 1 | - | - | - | **1** |
| `DeviceProduct in "ASA,FTD"`<br>`DeviceVendor == "Cisco"` | 1 | - | - | - | **1** |
| `DeviceEventClassID == "Blocked"`<br>`DeviceProduct == "NSSDNSlog"` | 1 | - | - | - | **1** |
| `Activity == "THREAT"`<br>`DeviceProduct == "PAN-OS"`<br>`DeviceProduct has "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` | 1 | - | - | - | **1** |
| `DeviceProduct == "NSSFWlog"` | 1 | - | - | - | **1** |
| `DeviceProduct == "NSSAuditlog"`<br>`EventOutcome == "Failure"` | 1 | - | - | - | **1** |
| `DeviceEventClassID == "Blocked"`<br>`DeviceProduct == "NSSWeblog"` | 1 | - | - | - | **1** |
| `DeviceProduct == "OSP"`<br>`DeviceVendor == "Onapsis"` | 1 | - | - | - | **1** |
| `DeviceAction == "Prevented (Blocked)"`<br>`DeviceProduct == "Cortex XDR"`<br>`DeviceVendor == "Palo Alto Networks"`<br>`LogSeverity == "6"` | 1 | - | - | - | **1** |
| `Activity == "sql-injection"`<br>`DeviceAction == "block"`<br>`DeviceProduct == "WAF Gateway"`<br>`DeviceVendor in "Imperva,Imperva Inc."`<br>`LogSeverity == "High"` | 1 | - | - | - | **1** |
| `DeviceVendor !in "Cisco,Check Point,Palo Alto Networks,Fortinet,F5,Barracuda,ExtraHop,OneIdentity,Zscaler,ForgeRock Inc,Cyber-Ark,illusive,Vectra Networks,Citrix,Darktrace,Akamai,Aruba Networks,CrowdStrike,Symantec,Claroty,Contrast Security,Delinea Software,Thycotic Software,FireEye,Forcepoint CSG,Forcepoint,Forcepoint CASB,iboss,Illumio,Imperva Inc.,Infoblox,Morphisec,Netwrix,Nozomi,Onapsis,OSSEC,PingFederate,RidgeSecurity,SonicWall,Trend Micro,vArmour"`<br>`DeviceVendor !in "Cisco,Check Point,Palo Alto Networks,Fortinet,F5,Barracuda,ExtraHop,OneIdentity,Zscaler,ForgeRock Inc,Cyber-Ark,illusive,Vectra Networks,Citrix,Darktrace,Akamai,Aruba Networks,CrowdStrike,Symantec,Claroty,Contrast Security,Delinea Software,Thycotic Software,FireEye,Forcepoint CSG,Forcepoint,Forcepoint CASB,iboss,Illumio,Imperva Inc.,Infoblox,Morphisec,Netwrix,Nozomi,Onapsis,OSSEC,PingFederate,RidgeSecurity,SonicWall,Trend Micro,vArmour,Votiro"` | 1 | - | - | - | **1** |
| `DeviceEventClassID == "733100"` | - | 1 | - | - | **1** |
| `DeviceEventClassID in "733101,733102,733103,733104,733105"` | - | 1 | - | - | **1** |
| `AdditionalExtensions contains "BLOCKED"`<br>`DeviceVendor == "Contrast Security"` | - | 1 | - | - | **1** |
| `AdditionalExtensions contains "EXPLOITED"`<br>`DeviceVendor == "Contrast Security"` | - | 1 | - | - | **1** |
| `AdditionalExtensions contains "INEFFECTIVE"`<br>`AdditionalExtensions contains "PROBED"`<br>`DeviceVendor == "Contrast Security"` | - | 1 | - | - | **1** |
| `AdditionalExtensions contains "SUSPICIOUS"`<br>`DeviceVendor == "Contrast Security"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSWeblog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "illusive"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "DNS Response"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | - | 1 | - | - | **1** |
| `DeviceProduct == "IronDefense"` | - | 1 | - | - | **1** |
| `Activity == "Deny List updated"`<br>`DeviceVendor == "Trend Micro"` | - | 1 | - | - | **1** |
| `AdditionalExtensions has "reason=tcp-rst-from-client"`<br>`AdditionalExtensions has "reason=tcp-rst-from-server"`<br>`ApplicationProtocol == "incomplete"`<br>`DestinationPort !in "443,53,389,80,0,880,8888,8080"`<br>`DeviceAction !in "reset-both,deny"` | - | 1 | - | - | **1** |
| `DestinationPort in "10000,1025,1026,1027,1028,1029,106,110,111,1110,119,13,135,139,143,1433,144,1720,1723,1755,179,1900,199,2000,2001,2049,21,2121,22,23,25,26,2717,3000,3128,32768,3306,3389,37,389,3986,427,444,445,465,4899,49152,49153,49154,49155,49156,49157,5000,5009,5051,5060,5101,513,514,515,5190,5357,543,5432,544,548,554,5631,5666,5800,587,5900,6000,6001,631,646,6646,7,7070,79,8000,8008,8009,8080,8081,81,8443,873,88,8888,9,9100,990,993,995,9999"` | - | 1 | - | - | **1** |
| `DeviceEventClassID in "file,flood,packet,scan,spyware,virus,vulnerability,wildfire,wildfire-virus"`<br>`DeviceVendor == "Palo Alto Networks"` | - | 1 | - | - | **1** |
| `DeviceEventClassID startswith "40"`<br>`DeviceVendor == "RidgeSecurity"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "Certifried"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "Log4Shell"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "NoPacBreach"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "UserBruteForce"` | - | 1 | - | - | **1** |
| `Protocol !contains "/"`<br>`Protocol contains "-"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "asc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` | - | 1 | - | - | **1** |
| `AdditionalExtensions contains "account"`<br>`DeviceEventClassID != "asc"`<br>`DeviceEventClassID != "audit"`<br>`DeviceEventClassID != "campaigns"`<br>`DeviceEventClassID != "health"`<br>`DeviceEventClassID != "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` | - | 1 | - | - | **1** |
| `AdditionalExtensions !has "account"`<br>`DeviceEventClassID != "asc"`<br>`DeviceEventClassID != "audit"`<br>`DeviceEventClassID != "campaigns"`<br>`DeviceEventClassID != "health"`<br>`DeviceEventClassID != "hsc"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` | - | 1 | - | - | **1** |
| `DeviceAction == "START"`<br>`DeviceEventClassID contains "campaign"`<br>`DeviceProduct == "X Series"`<br>`DeviceVendor == "Vectra Networks"` | - | 1 | - | - | **1** |
| `DeviceAction != "blocked"`<br>`DeviceVendor == "ZScaler"` | - | 1 | - | - | **1** |
| `DeviceAction == "Allowed"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "AgentAutoUpdateStalled"`<br>`DeviceVendor == "Acronis"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "MiniPlanAgentOffline"`<br>`DeviceVendor == "Acronis"` | - | 1 | - | - | **1** |
| `DeviceEventClassID in "CloudConnectionAzureApplianceConfigurationFailed,CloudConnectionAzureApplianceDeallocationFailed,CloudConnectionAzureApplianceDeletionFailed,CloudConnectionAzureApplianceEOL,CloudConnectionAzureApplianceFailed,CloudConnectionAzureApplianceUpdateFailed,CloudConnectionAzureCloudAccessExpired,CloudConnectionS3CloudAccessExpired"`<br>`DeviceVendor == "Acronis"` | - | 1 | - | - | **1** |
| `DeviceEventClassID in "ArchiveCorrupted,BackupFailed,BackupNotResponding,BackupRecoveryFailed"`<br>`DeviceVendor == "Acronis"` | - | 1 | - | - | **1** |
| `DeviceEventClassID in "EDRIOCDetected,EDRIncidentDetected"`<br>`DeviceVendor == "Acronis"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "MiMonitoringFailedLoginAttemptsOverThreshold"`<br>`DeviceVendor == "Acronis"` | - | 1 | - | - | **1** |
| `DeviceEventClassID in "ActiveProtectionDriverRemediated,ActiveProtectionInvalidNetworkRecoveryPath,ActiveProtectionServiceConflict,ActiveProtectionServiceFailureToApplyPolicy,ActiveProtectionServiceNotAvailable,ActiveProtectionServiceNotRunning,CPSProtectionFailureDetected,ProtectionServiceNotWorking"`<br>`DeviceVendor == "Acronis"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "ActiveProtectionDetectedAszPartitionAccessed"`<br>`DeviceVendor == "Acronis"` | - | 1 | - | - | **1** |
| `ApplicationProtocol == "ldap"`<br>`DeviceAction has_any "allow"` | - | 1 | - | - | **1** |
| `Activity == "THREAT"` | - | 1 | - | - | **1** |
| `Activity == "TRAFFIC"`<br>`DeviceAction != "deny"`<br>`DeviceVendor == "Palo Alto Networks"` | - | 1 | - | - | **1** |
| `Activity !contains "saas"`<br>`Activity contains "Antigena"`<br>`Activity contains "Compliance"`<br>`Activity contains "iaas"`<br>`Activity contains "saas"`<br>`DestinationIP !startswith "10"`<br>`DestinationIP !startswith "172"`<br>`DestinationIP !startswith "192"`<br>`DeviceName contains "#"`<br>`DeviceProduct in "AI Analyst,Enterprise Immune System"`<br>`DeviceVendor == "Darktrace"` | - | 1 | - | - | **1** |
| `DeviceCustomString3 in "DNS Reputation,IP Reputation,URL Reputation"`<br>`DeviceProduct in "Anti Malware,Anti-Bot,Anti-Virus,Application Control,DDoS Protector,IPS,Threat Emulation,URL Filtering"`<br>`DeviceVendor == "Check Point"`<br>`FlexNumber1 in "3,4,5"`<br>`LogSeverity in "Critical,High,Medium,Very-High"` | - | 1 | - | - | **1** |
| `CommunicationDirection contains "inbound"`<br>`CommunicationDirection contains "outbound"`<br>`DeviceEventClassID in "106100,111008,113012,113015,302010,315011,611102,733100"`<br>`DeviceProduct == "ASA"`<br>`DeviceVendor == "Cisco"`<br>`Message contains "-> inside"`<br>`Message contains "-> management"`<br>`SimplifiedDeviceAction in "Allow,Built,Deny"` | - | 1 | - | - | **1** |
| `DeviceProduct has "PAN-OS"` | - | 1 | - | - | **1** |
| `DestinationUserPrivileges !contains "ConjurSync"`<br>`DestinationUserPrivileges !contains "PSM"`<br>`DestinationUserPrivileges !contains "PSMSessions"`<br>`DestinationUserPrivileges !contains "PVWAConfig"`<br>`DestinationUserPrivileges !contains "PVWAPrivateUserPrefs"`<br>`DestinationUserPrivileges !contains "PasswordManager"`<br>`DestinationUserPrivileges !contains "PasswordManagerShared"`<br>`DestinationUserPrivileges !contains "SharedAuth_Internal"`<br>`DestinationUserPrivileges !contains "VaultInternal"`<br>`DestinationUserPrivileges contains "ConjurSync"`<br>`DeviceAction contains "disable"`<br>`DeviceProduct == "Vault"`<br>`DeviceVendor == "Cyber-Ark"`<br>`OldFileID contains "Error"`<br>`OldFileID contains "Failure"`<br>`OldFileID contains "error"`<br>`SourceUserName !contains "PasswordManager"`<br>`SourceUserName contains "Sync_components"`<br>`SourceUserName contains "administrator"` | - | 1 | - | - | **1** |
| `Activity == "SECRET - EXPIREDTODAY"`<br>`DeviceProduct == "Secret Server"`<br>`DeviceVendor in "Delinea Software,Thycotic Software"`<br>`LogSeverity == "2"` | - | 1 | - | - | **1** |
| `DeviceVendor == "ExtraHop"` | - | 1 | - | - | **1** |
| `DeviceProduct in "CASB Admin audit log,Cloud Service Monitoring,SaaS Security Gateway"`<br>`DeviceVendor == "Forcepoint CASB"` | - | 1 | - | - | **1** |
| `Activity != "Blocked"`<br>`DeviceProduct in "Email,Web"`<br>`DeviceVendor == "Forcepoint CSG"`<br>`LogSeverity in "6,9"`<br>`SourceUserID != "Not available"` | - | 1 | - | - | **1** |
| `DeviceAction == "Terminate"`<br>`DeviceProduct == "NGFW"`<br>`DeviceVendor == "Forcepoint"`<br>`LogSeverity == "10"` | - | 1 | - | - | **1** |
| `Activity in "File_Malware-Blocked,URL_Category-Accounting"`<br>`DeviceAction == "Discard"`<br>`DeviceAction != "Discard"`<br>`DeviceAction != "Terminate"`<br>`DeviceFacility == "Inspection"`<br>`DeviceProduct in "Alert,Audit"`<br>`DeviceVendor in "FORCEPOINT,Forcepoint"`<br>`Message contains "Login succeeded"`<br>`Message contains "Logout"`<br>`Message contains "created"`<br>`Message contains "modified"` | - | 1 | - | - | **1** |
| `Activity contains "forward"`<br>`DestinationTranslatedAddress contains "."`<br>`DeviceInboundInterface in "port1,port2"`<br>`DeviceProduct contains "Fortigate"`<br>`DeviceVendor == "Fortinet"` | - | 1 | - | - | **1** |
| `DeviceEventClassID in "illusive:access,illusive:login,illusive:suspicious"`<br>`Message !contains "hasForensics"`<br>`SourceHostName != "Failed to obtain"` | - | 1 | - | - | **1** |
| `DeviceCustomString1 in "CROWN_JEWEL_CREDENTIALS,LOCAL_USER_ADMINISTRATORS,SUSPICIOUS_FILES,USER_CREDENTIALS"`<br>`DeviceEventClassID == "illusive:violation"` | - | 1 | - | - | **1** |
| `DeviceEventClassID in "DHCP-LEASE-CREATE,DHCP-LEASE-DELETE,DHCP-LEASE-UPDATE"`<br>`DeviceEventClassID has "Audit"`<br>`DeviceEventClassID has "DHCP"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceEventClassID has "Service"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | - | 1 | - | - | **1** |
| `DeviceEventClassID in "DHCP-LEASE-CREATE,DHCP-LEASE-DELETE,DHCP-LEASE-UPDATE"`<br>`DeviceEventClassID has "DHCP"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | - | 1 | - | - | **1** |
| `DeviceProduct == "IronDefense"`<br>`LogSeverity in "High,Low,Medium,Very-High"` | - | 1 | - | - | **1** |
| `DeviceVendor == "Onapsis"` | - | 1 | - | - | **1** |
| `Activity in "ServerConnect,SessionClosed"`<br>`DeviceCustomString1Label == "Session ID"`<br>`DeviceProduct == "SPS"`<br>`DeviceVendor == "OneIdentity"` | - | 1 | - | - | **1** |
| `Activity == "WildFire Malware"`<br>`DeviceProduct == "Cortex XDR"`<br>`DeviceVendor == "Palo Alto Networks"` | - | 1 | - | - | **1** |
| `Activity == "THREAT"`<br>`DeviceEventClassID in "correlation,vulnerability,wildfire"`<br>`DeviceEventClassID != "file"`<br>`DeviceEventClassID != "url"`<br>`DeviceProduct has "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` | - | 1 | - | - | **1** |
| `Activity in "THREAT,TRAFFIC,Traffic"`<br>`DeviceAction in "alert,block-continue,block-url,continue"`<br>`DeviceAction !contains "block"`<br>`DeviceAction !contains "deny"`<br>`DeviceAction contains "block"`<br>`DeviceAction contains "deny"`<br>`DeviceEventClassID in "end,file,url,wildfire"`<br>`DeviceProduct has "LF"`<br>`DeviceProduct has "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` | - | 1 | - | - | **1** |
| `DeviceProduct == "PingFederate"`<br>`DeviceProduct has "PingFederate"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "Semperis.DSP.AdChanges"` | - | 1 | - | - | **1** |
| `DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message !contains "count:"` | - | 1 | - | - | **1** |
| `Activity in "Anti-Spyware Detection Alert,Anti-Spyware Prevention Alert,Application Control Detection Alert,Application Control Prevention Alert,IPS Detection Alert,IPS Prevention Alert,Website Blocked"`<br>`Computer != "127.0.0.1"`<br>`DeviceVendor == "SonicWall"`<br>`Protocol !contains "/"`<br>`Protocol contains "-"` | - | 1 | - | - | **1** |
| `DeviceVendor has_any "CrowdStrike,Microsoft,Qualys,Tripwire"`<br>`Message has_any "change"`<br>`Message has_any "record modified"` | - | 1 | - | - | **1** |
| `DeviceCustomString1 == "True"`<br>`DeviceCustomString2 == "True"`<br>`DeviceEventClassID in "asc,audit,campaigns,health,hsc"`<br>`DeviceEventClassID !in "health,audit,campaigns,hsc,asc"`<br>`DeviceEventClassID !in "health,audit,campaigns,hsc,asc"`<br>`DeviceVendor == "Vectra Networks"`<br>`SourceUserName != "All"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSAuditlog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSCasbactivitylog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSCasbcloudstoragelog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSCasbcollablog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSCasbcrmlog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSCasbemaillog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSCasbfilesharinglog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSCasbitsmlog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSCasbrepolog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSDNSlog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceCustomString4Label == "rulelabels"`<br>`DeviceEventClassID == "DLP Incident"`<br>`DeviceProduct == "NSSEmaildlplog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DeviceProduct == "NSSEndpointdlplog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `Activity !contains "Default"`<br>`Activity !contains "Recommended"`<br>`DestinationPort != "0"`<br>`DeviceEventClassID !contains "Allow"`<br>`DeviceEventClassID contains "Allow"`<br>`DeviceProduct == "NSSFWlog"`<br>`SourcePort != "0"` | - | 1 | - | - | **1** |
| `DeviceEventClassID in "Tunnel Event,Tunnel Samples"`<br>`DeviceProduct == "NSSTunnellog"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DestinationServiceName contains "Microsoft"`<br>`DestinationServiceName contains "Onedrive"`<br>`DestinationServiceName contains "Outlook"`<br>`DestinationServiceName contains "Sharepoint"`<br>`DestinationServiceName contains "Skype"`<br>`DestinationServiceName contains "office.com"`<br>`DeviceCustomString2 == "Phishing"`<br>`DeviceEventClassID !contains "Allow"`<br>`DeviceEventClassID contains "Allow"`<br>`DeviceVendor == "Zscaler"` | - | 1 | - | - | **1** |
| `DestinationServiceName has_any "Microsoft"`<br>`DeviceEventClassID in "Allow,Allowed"`<br>`DeviceEventClassID !contains "Allow"`<br>`DeviceEventClassID contains "Allow"`<br>`DeviceProduct == "NSSWeblog"`<br>`DeviceVendor == "Zscaler"`<br>`RequestMethod != "None"`<br>`SourceUserPrivileges == "Road Warrior"` | - | 1 | - | - | **1** |
| `Activity contains "IPS"`<br>`DestinationServiceName != "generalbrowsing"`<br>`DeviceCustomString3 contains "Behavior"`<br>`DeviceCustomString5 != "None"`<br>`DeviceCustomString5 != "suspiciousfile"`<br>`DeviceCustomString5Label == "threatname"`<br>`DeviceEventClassID == "Blocked"`<br>`DeviceEventClassID !contains "Allow"`<br>`DeviceEventClassID contains "Block"`<br>`DeviceProduct == "NSSWeblog"`<br>`DeviceVendor == "Zscaler"`<br>`SourceUserPrivileges == "Road Warrior"` | - | 1 | - | - | **1** |
| `DeviceEventClassID == "UserActivityAuditEvent"`<br>`DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` | - | - | 1 | - | **1** |
| `DeviceEventClassID has "AUDIT"`<br>`DeviceVendor == "Infoblox"` | - | - | 1 | - | **1** |
| `DeviceProduct == "ASA"`<br>`DeviceVendor == "Cisco"` | - | - | 1 | - | **1** |
| `DeviceEventClassID in "twoFactorAuthenticate,userAuthenticate"`<br>`DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` | - | - | 1 | - | **1** |
| `DeviceEventClassID !in "0100022949,0100022952"`<br>`DeviceProduct has "Fortigate"`<br>`DeviceVendor == "Fortinet"` | - | - | 1 | - | **1** |
| `DeviceEventClassID == "AUTH"`<br>`DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"` | - | - | 1 | - | **1** |
| `DeviceEventClassID == "GLOBALPROTECT"`<br>`DeviceProduct == "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` | - | - | 1 | - | **1** |
| `DeviceEventClassID startswith "auth"`<br>`DeviceProduct == "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` | - | - | 1 | - | **1** |
| `DeviceEventClassID has "DHCP"`<br>`DeviceVendor == "Infoblox"` | - | - | 1 | - | **1** |
| `DeviceEventClassID endswith "54000"`<br>`DeviceEventClassID endswith "54200"`<br>`DeviceEventClassID endswith "54400"`<br>`DeviceEventClassID endswith "54401"`<br>`DeviceEventClassID endswith "54600"`<br>`DeviceEventClassID endswith "54601"`<br>`DeviceEventClassID endswith "54800"`<br>`DeviceEventClassID endswith "54801"`<br>`DeviceEventClassID endswith "54802"`<br>`DeviceEventClassID endswith "54803"`<br>`DeviceEventClassID endswith "54804"`<br>`DeviceEventClassID endswith "54805"`<br>`DeviceProduct startswith "Fortigate"`<br>`DeviceVendor == "Fortinet"` | - | - | 1 | - | **1** |
| `DeviceEventClassID has "DNS"`<br>`DeviceVendor == "Infoblox"` | - | - | 1 | - | **1** |
| `DeviceProduct == "NSSDNSlog"` | - | - | 1 | - | **1** |
| `DeviceProduct == "VPN-1 & FireWall-1"`<br>`DeviceVendor == "CheckPoint"` | - | - | 1 | - | **1** |
| `DeviceProduct == "SmartDefense"`<br>`DeviceVendor == "Check Point"` | - | - | 1 | - | **1** |
| `DeviceEventClassID in "106001,106002,106006,106007,106010,106012,106013,106014,106015,106016,106017,106018,106020,106021,106022,106023,106100,302013,302014,302015,302016,302020,302021,710002,710003,710004,710005"`<br>`DeviceProduct == "ASA"`<br>`DeviceVendor == "Cisco"` | - | - | 1 | - | **1** |
| `DeviceEventClassID has "INTRUSION:400"`<br>`DeviceEventClassID has "PV:112"`<br>`DeviceEventClassID has "RNA:1003:1"`<br>`DeviceEventClassID has_any "INTRUSION:400,PV:112,RNA:1003:1"`<br>`DeviceProduct == "Firepower"`<br>`DeviceVendor == "Cisco"` | - | - | 1 | - | **1** |
| `DeviceEventClassID in "FirewallMatchEvent,Network Access In A Detection Summary Event"`<br>`DeviceEventClassID has "Network Access In A Detection Summary Event"`<br>`DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` | - | - | 1 | - | **1** |
| `ApplicationProtocol startswith "TCP"`<br>`ApplicationProtocol startswith "UDP"`<br>`DestinationServiceName in "Application-Unknown,Generic-Web-HTTP,Unknown-Encrypted-Application"`<br>`DeviceEventClassID in "70734,76508,76509"`<br>`DeviceEventClassID != "0"`<br>`DeviceEventClassID !in "70383,70393,70734,71009,71040"`<br>`DeviceProduct == "Firewall"`<br>`DeviceVendor == "FORCEPOINT"`<br>`RequestMethod != "UNKNOWN"` | - | - | 1 | - | **1** |
| `DeviceProduct startswith "FortiGate"`<br>`DeviceVendor == "Fortinet"` | - | - | 1 | - | **1** |
| `DeviceProduct == "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` | - | - | 1 | - | **1** |
| `DeviceEventClassID == "TRAFFIC"`<br>`DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"` | - | - | 1 | - | **1** |
| `DeviceVendor == "SonicWall"`<br>`Protocol !contains "/"`<br>`Protocol contains "-"` | - | - | 1 | - | **1** |
| `DeviceProduct == "NSSFWlog"`<br>`DeviceVendor == "Zscaler"` | - | - | 1 | - | **1** |
| `DeviceEventClassID in "File:500:1,FileMalware:502:1,FireAMP:125:1"`<br>`DeviceEventClassID has "File:500:1"`<br>`DeviceEventClassID has "FileMalware:502:1"`<br>`DeviceProduct == "Firepower"`<br>`DeviceVendor == "Cisco"` | - | - | 1 | - | **1** |
| `DeviceEventClassID == "APPFW"`<br>`DeviceProduct == "NetScaler"`<br>`DeviceVendor == "Citrix"` | - | - | 1 | - | **1** |
| `DeviceProduct == "ASM"`<br>`DeviceVendor == "F5"` | - | - | 1 | - | **1** |
| `Activity == "THREAT"`<br>`DeviceEventClassID == "url"`<br>`DeviceProduct == "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` | - | - | 1 | - | **1** |
| `DeviceEventClassID == "THREAT"`<br>`DeviceProduct == "LF"`<br>`DeviceVendor == "Palo Alto Networks"` | - | - | 1 | - | **1** |
| `DestinationIP has ":"`<br>`DeviceVendor == "SonicWall"`<br>`Protocol !contains "/"`<br>`Protocol contains "-"` | - | - | 1 | - | **1** |
| `DeviceCustomString4 == "None"`<br>`DeviceProduct == "NSSWeblog"`<br>`DeviceVendor == "Zscaler"`<br>`RequestContext == "None"` | - | - | 1 | - | **1** |
| `DeviceVendor == "McAfee"` | - | - | - | 1 | **1** |
| `DeviceProduct == "StealthDEFEND"`<br>`DeviceVendor == "STEALTHbits Technologies"` | - | - | - | 1 | **1** |
| `DeviceEventClassID == "filterlog"`<br>`DeviceProduct == "pfsense"` | - | - | - | 1 | **1** |
| `DeviceEventClassID == "nginx"`<br>`DeviceProduct == "pfsense"` | - | - | - | 1 | **1** |
| `DeviceCustomString1 has "None"`<br>`DeviceProduct == "Platform"`<br>`DeviceVendor == "Dragos"`<br>`DeviceVersion == "2"` | - | - | - | 1 | **1** |
| `DeviceVendor == "radiflow"` | - | - | - | 1 | **1** |
| **Total** | **108** | **250** | **34** | **33** | **425** |

### DeviceProduct / DeviceVendor

| DeviceProduct | DeviceVendor | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:---------|:---------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `LF` | `Palo Alto Networks` | 2 | 21 | 3 | 1 | **27** |
| `has PingFederate` |  | 2 | 22 | - | 1 | **25** |
|  | `Claroty` | 3 | 21 | - | 1 | **25** |
| `Apex Central` | `Trend Micro` | 2 | 21 | - | 1 | **24** |
| `Data Connector` | `Infoblox` | 6 | 10 | - | 3 | **19** |
|  | `Acronis` | - | 14 | - | - | **14** |
|  | `Palo Alto Networks` | - | 10 | - | - | **10** |
| `X Series` | `Vectra Networks` | 2 | 7 | - | - | **9** |
| `iSID` | `radiflow` | 1 | 8 | - | - | **9** |
| `FalconHost` | `CrowdStrike` | 2 | 2 | 3 | 1 | **8** |
|  | `Contrast Security` | 2 | 5 | - | - | **7** |
| `has Fortiweb` | `Fortinet` | 2 | 4 | - | 1 | **7** |
| `has Admin Console` | `has Silverfort` | 1 | 5 | - | - | **6** |
|  | `iboss` | 2 | 2 | - | 1 | **5** |
|  | `SonicWall` | 2 | 1 | 2 | - | **5** |
| `ASA` | `Cisco` | 2 | 1 | 2 | - | **5** |
| `NetScaler` | `Citrix` | 2 | 1 | 1 | 1 | **5** |
| `Votiro cloud` | `Votiro` | 1 | 3 | - | 1 | **5** |
| `Awake Security` | `Arista Networks` | 1 | 4 | - | - | **5** |
| `PAN-OS` | `Palo Alto Networks` | 1 | - | 4 | - | **5** |
| `has PAN-OS` | `Palo Alto Networks` | 2 | 2 | - | - | **4** |
| `startswith Fortigate` | `Fortinet` | 2 | - | 2 | - | **4** |
| `AC` | `vArmour` | 2 | 2 | - | - | **4** |
| `startswith Deep Security` | `has_any Trend Micro` | 1 | 2 | - | 1 | **4** |
| `startswith Deep Security` | `has_any TrendMicro` | 1 | 2 | - | 1 | **4** |
| `Firepower` | `Cisco` | 2 | - | 2 | - | **4** |
| `NSSWeblog` | `Zscaler` | - | 3 | 1 | - | **4** |
|  | `RidgeSecurity` | 1 | 2 | - | - | **3** |
|  | `has Nozomi` | 2 | - | - | 1 | **3** |
|  | `ExtraHop` | 2 | 1 | - | - | **3** |
| `Vault` | `Cyber-Ark` | 2 | 1 | - | - | **3** |
|  | `Netwrix` | 2 | - | - | 1 | **3** |
| `NGFW` | `Forcepoint` | 2 | 1 | - | - | **3** |
|  | `has OSSEC` | 2 | - | - | 1 | **3** |
| `Email` | `Forcepoint CSG` | 2 | 1 | - | - | **3** |
| `Web` | `Forcepoint CSG` | 2 | 1 | - | - | **3** |
| `ClearPass` | `Aruba Networks` | 2 | - | - | 1 | **3** |
| `Secret Server` | `Delinea Software` | 2 | 1 | - | - | **3** |
| `Secret Server` | `Thycotic Software` | 2 | 1 | - | - | **3** |
| `akamai_siem` | `Akamai` | 2 | - | - | 1 | **3** |
|  | `Illumio` | 2 | - | - | 1 | **3** |
| `DLP` | `Symantec` | 2 | - | - | 1 | **3** |
|  | `FireEye` | 2 | - | - | 1 | **3** |
|  | `Acronis audit` | - | 3 | - | - | **3** |
| `WAAS` | `startswith Barracuda` | - | - | 3 | - | **3** |
| `WAF` | `startswith Barracuda` | - | - | 3 | - | **3** |
|  | `Infoblox` | - | - | 3 | - | **3** |
|  | `Forcepoint CASB` | 2 | - | - | - | **2** |
| `SPS` | `OneIdentity` | 1 | 1 | - | - | **2** |
|  | `Darktrace` | 2 | - | - | - | **2** |
|  | `Barracuda` | 1 | 1 | - | - | **2** |
| `WireX NFP` | `WireX` | 2 | - | - | - | **2** |
| `UnityOne` |  | 1 | - | - | 1 | **2** |
| `illusive` | `illusive` | 2 | - | - | - | **2** |
|  | `F5` | 2 | - | - | - | **2** |
| `NSSDNSlog` |  | 1 | - | 1 | - | **2** |
| `NSSFWlog` |  | 1 | 1 | - | - | **2** |
| `Cortex XDR` | `Palo Alto Networks` | 1 | 1 | - | - | **2** |
|  | `!= Cisco` | 2 | - | - | - | **2** |
|  | `!= Check Point` | 2 | - | - | - | **2** |
|  | `!= Palo Alto Networks` | 2 | - | - | - | **2** |
|  | `!= Fortinet` | 2 | - | - | - | **2** |
|  | `!= F5` | 2 | - | - | - | **2** |
|  | `!= Barracuda` | 2 | - | - | - | **2** |
|  | `!= ExtraHop` | 2 | - | - | - | **2** |
|  | `!= OneIdentity` | 2 | - | - | - | **2** |
|  | `!= Zscaler` | 2 | - | - | - | **2** |
|  | `!= ForgeRock Inc` | 2 | - | - | - | **2** |
|  | `!= Cyber-Ark` | 2 | - | - | - | **2** |
|  | `!= illusive` | 2 | - | - | - | **2** |
|  | `!= Vectra Networks` | 2 | - | - | - | **2** |
|  | `!= Citrix` | 2 | - | - | - | **2** |
|  | `!= Darktrace` | 2 | - | - | - | **2** |
|  | `!= Akamai` | 2 | - | - | - | **2** |
|  | `!= Aruba Networks` | 2 | - | - | - | **2** |
|  | `!= CrowdStrike` | 2 | - | - | - | **2** |
|  | `!= Symantec` | 2 | - | - | - | **2** |
|  | `!= Claroty` | 2 | - | - | - | **2** |
|  | `!= Contrast Security` | 2 | - | - | - | **2** |
|  | `!= Delinea Software` | 2 | - | - | - | **2** |
|  | `!= Thycotic Software` | 2 | - | - | - | **2** |
|  | `!= FireEye` | 2 | - | - | - | **2** |
|  | `!= Forcepoint CSG` | 2 | - | - | - | **2** |
|  | `!= Forcepoint` | 2 | - | - | - | **2** |
|  | `!= Forcepoint CASB` | 2 | - | - | - | **2** |
|  | `!= iboss` | 2 | - | - | - | **2** |
|  | `!= Illumio` | 2 | - | - | - | **2** |
|  | `!= Imperva Inc.` | 2 | - | - | - | **2** |
|  | `!= Infoblox` | 2 | - | - | - | **2** |
|  | `!= Morphisec` | 2 | - | - | - | **2** |
|  | `!= Netwrix` | 2 | - | - | - | **2** |
|  | `!= Nozomi` | 2 | - | - | - | **2** |
|  | `!= Onapsis` | 2 | - | - | - | **2** |
|  | `!= OSSEC` | 2 | - | - | - | **2** |
|  | `!= PingFederate` | 2 | - | - | - | **2** |
|  | `!= RidgeSecurity` | 2 | - | - | - | **2** |
|  | `!= SonicWall` | 2 | - | - | - | **2** |
|  | `!= Trend Micro` | 2 | - | - | - | **2** |
|  | `!= vArmour` | 2 | - | - | - | **2** |
| `IronDefense` |  | - | 2 | - | - | **2** |
|  | `Zscaler` | - | 2 | - | - | **2** |
| `Core Directory` |  | - | 2 | - | - | **2** |
| `pfsense` |  | - | - | - | 2 | **2** |
|  | `ForgeRock Inc` | - | - | - | 2 | **2** |
|  | `OneIdentity` | - | - | - | 2 | **2** |
| `NSSTunnellog` |  | 1 | - | - | - | **1** |
| `NSSCasbcollablog` |  | 1 | - | - | - | **1** |
| `Fortiweb` | `Fortinet` | 1 | - | - | - | **1** |
| `IDM` | `ForgeRock Inc` | 1 | - | - | - | **1** |
| `NSSCasbitsmlog` |  | 1 | - | - | - | **1** |
|  | `Medigate` | 1 | - | - | - | **1** |
|  | `OSSEC` | 1 | - | - | - | **1** |
| `NSSCasbcrmlog` |  | 1 | - | - | - | **1** |
| `IronDefense` | `IronNet` | 1 | - | - | - | **1** |
| `IronDome` | `IronNet` | 1 | - | - | - | **1** |
| `Fortigate` | `Fortinet` | 1 | - | - | - | **1** |
|  | `WithSecure™` | 1 | - | - | - | **1** |
| `NSSCasbcloudstoragelog` |  | 1 | - | - | - | **1** |
| `NSSCasbrepolog` |  | 1 | - | - | - | **1** |
| `NSSEmaildlplog` |  | 1 | - | - | - | **1** |
| `contains Fortiweb` | `Fortinet` | 1 | - | - | - | **1** |
| `contains Fortiweb` | `contains Fortinet` | 1 | - | - | - | **1** |
| `has Fortiweb` | `contains Fortinet` | 1 | - | - | - | **1** |
| `NSSCasbactivitylog` |  | 1 | - | - | - | **1** |
| `ESA_CONSOLIDATED_LOG_EVENT` | `Cisco` | 1 | - | - | - | **1** |
| `Admin Console` | `Silverfort` | 1 | - | - | - | **1** |
| `Admin Console` | `has Silverfort` | 1 | - | - | - | **1** |
| `has Admin Console` | `Silverfort` | 1 | - | - | - | **1** |
| `NSSEndpointdlplog` |  | 1 | - | - | - | **1** |
| `NSSCasbemaillog` |  | 1 | - | - | - | **1** |
| `NSSCasbfilesharinglog` |  | 1 | - | - | - | **1** |
| `FTD` | `Cisco` | 1 | - | - | - | **1** |
| `NSSAuditlog` |  | 1 | - | - | - | **1** |
| `NSSWeblog` |  | 1 | - | - | - | **1** |
| `OSP` | `Onapsis` | 1 | - | - | - | **1** |
| `WAF Gateway` | `Imperva` | 1 | - | - | - | **1** |
| `WAF Gateway` | `Imperva Inc.` | 1 | - | - | - | **1** |
|  | `!= Votiro` | 1 | - | - | - | **1** |
| `illusive` |  | - | 1 | - | - | **1** |
|  | `Trend Micro` | - | 1 | - | - | **1** |
|  | `ZScaler` | - | 1 | - | - | **1** |
| `AI Analyst` | `Darktrace` | - | 1 | - | - | **1** |
| `Enterprise Immune System` | `Darktrace` | - | 1 | - | - | **1** |
| `Anti Malware` | `Check Point` | - | 1 | - | - | **1** |
| `Anti-Bot` | `Check Point` | - | 1 | - | - | **1** |
| `Anti-Virus` | `Check Point` | - | 1 | - | - | **1** |
| `Application Control` | `Check Point` | - | 1 | - | - | **1** |
| `DDoS Protector` | `Check Point` | - | 1 | - | - | **1** |
| `IPS` | `Check Point` | - | 1 | - | - | **1** |
| `Threat Emulation` | `Check Point` | - | 1 | - | - | **1** |
| `URL Filtering` | `Check Point` | - | 1 | - | - | **1** |
| `has PAN-OS` |  | - | 1 | - | - | **1** |
| `CASB Admin audit log` | `Forcepoint CASB` | - | 1 | - | - | **1** |
| `Cloud Service Monitoring` | `Forcepoint CASB` | - | 1 | - | - | **1** |
| `SaaS Security Gateway` | `Forcepoint CASB` | - | 1 | - | - | **1** |
| `Alert` | `FORCEPOINT` | - | 1 | - | - | **1** |
| `Alert` | `Forcepoint` | - | 1 | - | - | **1** |
| `Audit` | `FORCEPOINT` | - | 1 | - | - | **1** |
| `Audit` | `Forcepoint` | - | 1 | - | - | **1** |
| `contains Fortigate` | `Fortinet` | - | 1 | - | - | **1** |
|  | `Onapsis` | - | 1 | - | - | **1** |
| `has LF` | `Palo Alto Networks` | - | 1 | - | - | **1** |
| `PingFederate` |  | - | 1 | - | - | **1** |
|  | `has_any CrowdStrike` | - | 1 | - | - | **1** |
|  | `has_any Microsoft` | - | 1 | - | - | **1** |
|  | `has_any Qualys` | - | 1 | - | - | **1** |
|  | `has_any Tripwire` | - | 1 | - | - | **1** |
|  | `Vectra Networks` | - | 1 | - | - | **1** |
| `NSSAuditlog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSCasbactivitylog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSCasbcloudstoragelog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSCasbcollablog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSCasbcrmlog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSCasbemaillog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSCasbfilesharinglog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSCasbitsmlog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSCasbrepolog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSDNSlog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSEmaildlplog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSEndpointdlplog` | `Zscaler` | - | 1 | - | - | **1** |
| `NSSTunnellog` | `Zscaler` | - | 1 | - | - | **1** |
| `has Fortigate` | `Fortinet` | - | - | 1 | - | **1** |
| `VPN-1 & FireWall-1` | `CheckPoint` | - | - | 1 | - | **1** |
| `SmartDefense` | `Check Point` | - | - | 1 | - | **1** |
| `Firewall` | `FORCEPOINT` | - | - | 1 | - | **1** |
| `startswith FortiGate` | `Fortinet` | - | - | 1 | - | **1** |
| `NSSFWlog` | `Zscaler` | - | - | 1 | - | **1** |
| `ASM` | `F5` | - | - | 1 | - | **1** |
|  | `McAfee` | - | - | - | 1 | **1** |
| `StealthDEFEND` | `STEALTHbits Technologies` | - | - | - | 1 | **1** |
| `Platform` | `Dragos` | - | - | - | 1 | **1** |
|  | `radiflow` | - | - | - | 1 | **1** |

### Activity

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `THREAT` | 2 | 3 | 1 | - | **6** |
| `POLICY_VIOLATION` | 2 | 2 | - | - | **4** |
| `TRAFFIC` | - | 4 | - | - | **4** |
| `SessionClosed` | 1 | 1 | - | - | **2** |
| `APPFW_SQL` | 2 | - | - | - | **2** |
| `APPFW_STARTURL` | 2 | - | - | - | **2** |
| `APPFW_XSS` | 2 | - | - | - | **2** |
| `contains compromise` | 2 | - | - | - | **2** |
| `Blocked` | 2 | - | - | - | **2** |
| `has SECRET - CREATE` | 2 | - | - | - | **2** |
| `has SECRET - VIEW` | 2 | - | - | - | **2** |
| `File Malware Event` | 2 | - | - | - | **2** |
| `sql-injection` | 1 | - | - | - | **1** |
| `Deny List updated` | - | 1 | - | - | **1** |
| `!contains saas` | - | 1 | - | - | **1** |
| `contains Antigena` | - | 1 | - | - | **1** |
| `contains Compliance` | - | 1 | - | - | **1** |
| `contains iaas` | - | 1 | - | - | **1** |
| `contains saas` | - | 1 | - | - | **1** |
| `SECRET - EXPIREDTODAY` | - | 1 | - | - | **1** |
| `!= Blocked` | - | 1 | - | - | **1** |
| `File_Malware-Blocked` | - | 1 | - | - | **1** |
| `URL_Category-Accounting` | - | 1 | - | - | **1** |
| `contains forward` | - | 1 | - | - | **1** |
| `ServerConnect` | - | 1 | - | - | **1** |
| `WildFire Malware` | - | 1 | - | - | **1** |
| `Traffic` | - | 1 | - | - | **1** |
| `Anti-Spyware Detection Alert` | - | 1 | - | - | **1** |
| `Anti-Spyware Prevention Alert` | - | 1 | - | - | **1** |
| `Application Control Detection Alert` | - | 1 | - | - | **1** |
| `Application Control Prevention Alert` | - | 1 | - | - | **1** |
| `IPS Detection Alert` | - | 1 | - | - | **1** |
| `IPS Prevention Alert` | - | 1 | - | - | **1** |
| `Website Blocked` | - | 1 | - | - | **1** |
| `!contains Default` | - | 1 | - | - | **1** |
| `!contains Recommended` | - | 1 | - | - | **1** |
| `contains IPS` | - | 1 | - | - | **1** |

### AdditionalExtensions

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has InfobloxRPZ=APP_` | 3 | - | - | - | **3** |
| `has InfobloxRPZ=CAT_` | 3 | - | - | - | **3** |
| `contains fw_action=` | 2 | - | - | - | **2** |
| `contains amaExternalLogService=true` | 1 | - | - | - | **1** |
| `!contains amaExternalLogService=true` | 1 | - | - | - | **1** |
| `contains BLOCKED` | - | 1 | - | - | **1** |
| `contains EXPLOITED` | - | 1 | - | - | **1** |
| `contains INEFFECTIVE` | - | 1 | - | - | **1** |
| `contains PROBED` | - | 1 | - | - | **1** |
| `contains SUSPICIOUS` | - | 1 | - | - | **1** |
| `has reason=tcp-rst-from-client` | - | 1 | - | - | **1** |
| `has reason=tcp-rst-from-server` | - | 1 | - | - | **1** |
| `contains account` | - | 1 | - | - | **1** |
| `!has account` | - | 1 | - | - | **1** |

### ApplicationProtocol

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `DNS` | 2 | - | - | - | **2** |
| `HTTP` | 2 | - | - | - | **2** |
| `TDS` | 2 | - | - | - | **2** |
| `pop3` | - | 2 | - | - | **2** |
| `smtp` | - | 2 | - | - | **2** |
| `incomplete` | - | 1 | - | - | **1** |
| `ldap` | - | 1 | - | - | **1** |
| `startswith TCP` | - | - | 1 | - | **1** |
| `startswith UDP` | - | - | 1 | - | **1** |

### CommunicationDirection

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains inbound` | - | 1 | - | - | **1** |
| `contains outbound` | - | 1 | - | - | **1** |

### Computer

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains Fortiweb` | 1 | - | - | - | **1** |
| `!= 127.0.0.1` | - | 1 | - | - | **1** |

### DestinationIP

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!startswith 10` | - | 1 | - | - | **1** |
| `!startswith 172` | - | 1 | - | - | **1** |
| `!startswith 192` | - | 1 | - | - | **1** |
| `has :` | - | - | 1 | - | **1** |

### DestinationPort

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `80` | 2 | - | - | - | **2** |
| `!= 0` | - | 2 | - | - | **2** |
| `!= 443` | - | 1 | - | - | **1** |
| `!= 53` | - | 1 | - | - | **1** |
| `!= 389` | - | 1 | - | - | **1** |
| `!= 80` | - | 1 | - | - | **1** |
| `!= 880` | - | 1 | - | - | **1** |
| `!= 8888` | - | 1 | - | - | **1** |
| `!= 8080` | - | 1 | - | - | **1** |
| `10000` | - | 1 | - | - | **1** |
| `1025` | - | 1 | - | - | **1** |
| `1026` | - | 1 | - | - | **1** |
| `1027` | - | 1 | - | - | **1** |
| `1028` | - | 1 | - | - | **1** |
| `1029` | - | 1 | - | - | **1** |
| `106` | - | 1 | - | - | **1** |
| `110` | - | 1 | - | - | **1** |
| `111` | - | 1 | - | - | **1** |
| `1110` | - | 1 | - | - | **1** |
| `119` | - | 1 | - | - | **1** |
| `13` | - | 1 | - | - | **1** |
| `135` | - | 1 | - | - | **1** |
| `139` | - | 1 | - | - | **1** |
| `143` | - | 1 | - | - | **1** |
| `1433` | - | 1 | - | - | **1** |
| `144` | - | 1 | - | - | **1** |
| `1720` | - | 1 | - | - | **1** |
| `1723` | - | 1 | - | - | **1** |
| `1755` | - | 1 | - | - | **1** |
| `179` | - | 1 | - | - | **1** |
| `1900` | - | 1 | - | - | **1** |
| `199` | - | 1 | - | - | **1** |
| `2000` | - | 1 | - | - | **1** |
| `2001` | - | 1 | - | - | **1** |
| `2049` | - | 1 | - | - | **1** |
| `21` | - | 1 | - | - | **1** |
| `2121` | - | 1 | - | - | **1** |
| `22` | - | 1 | - | - | **1** |
| `23` | - | 1 | - | - | **1** |
| `25` | - | 1 | - | - | **1** |
| `26` | - | 1 | - | - | **1** |
| `2717` | - | 1 | - | - | **1** |
| `3000` | - | 1 | - | - | **1** |
| `3128` | - | 1 | - | - | **1** |
| `32768` | - | 1 | - | - | **1** |
| `3306` | - | 1 | - | - | **1** |
| `3389` | - | 1 | - | - | **1** |
| `37` | - | 1 | - | - | **1** |
| `389` | - | 1 | - | - | **1** |
| `3986` | - | 1 | - | - | **1** |
| `427` | - | 1 | - | - | **1** |
| `444` | - | 1 | - | - | **1** |
| `445` | - | 1 | - | - | **1** |
| `465` | - | 1 | - | - | **1** |
| `4899` | - | 1 | - | - | **1** |
| `49152` | - | 1 | - | - | **1** |
| `49153` | - | 1 | - | - | **1** |
| `49154` | - | 1 | - | - | **1** |
| `49155` | - | 1 | - | - | **1** |
| `49156` | - | 1 | - | - | **1** |
| `49157` | - | 1 | - | - | **1** |
| `5000` | - | 1 | - | - | **1** |
| `5009` | - | 1 | - | - | **1** |
| `5051` | - | 1 | - | - | **1** |
| `5060` | - | 1 | - | - | **1** |
| `5101` | - | 1 | - | - | **1** |
| `513` | - | 1 | - | - | **1** |
| `514` | - | 1 | - | - | **1** |
| `515` | - | 1 | - | - | **1** |
| `5190` | - | 1 | - | - | **1** |
| `5357` | - | 1 | - | - | **1** |
| `543` | - | 1 | - | - | **1** |
| `5432` | - | 1 | - | - | **1** |
| `544` | - | 1 | - | - | **1** |
| `548` | - | 1 | - | - | **1** |
| `554` | - | 1 | - | - | **1** |
| `5631` | - | 1 | - | - | **1** |
| `5666` | - | 1 | - | - | **1** |
| `5800` | - | 1 | - | - | **1** |
| `587` | - | 1 | - | - | **1** |
| `5900` | - | 1 | - | - | **1** |
| `6000` | - | 1 | - | - | **1** |
| `6001` | - | 1 | - | - | **1** |
| `631` | - | 1 | - | - | **1** |
| `646` | - | 1 | - | - | **1** |
| `6646` | - | 1 | - | - | **1** |
| `7` | - | 1 | - | - | **1** |
| `7070` | - | 1 | - | - | **1** |
| `79` | - | 1 | - | - | **1** |
| `8000` | - | 1 | - | - | **1** |
| `8008` | - | 1 | - | - | **1** |
| `8009` | - | 1 | - | - | **1** |
| `8080` | - | 1 | - | - | **1** |
| `8081` | - | 1 | - | - | **1** |
| `81` | - | 1 | - | - | **1** |
| `8443` | - | 1 | - | - | **1** |
| `873` | - | 1 | - | - | **1** |
| `88` | - | 1 | - | - | **1** |
| `8888` | - | 1 | - | - | **1** |
| `9` | - | 1 | - | - | **1** |
| `9100` | - | 1 | - | - | **1** |
| `990` | - | 1 | - | - | **1** |
| `993` | - | 1 | - | - | **1** |
| `995` | - | 1 | - | - | **1** |
| `9999` | - | 1 | - | - | **1** |

### DestinationServiceName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains Microsoft` | - | 1 | - | - | **1** |
| `contains Onedrive` | - | 1 | - | - | **1** |
| `contains Outlook` | - | 1 | - | - | **1** |
| `contains Sharepoint` | - | 1 | - | - | **1** |
| `contains Skype` | - | 1 | - | - | **1** |
| `contains office.com` | - | 1 | - | - | **1** |
| `has_any Microsoft` | - | 1 | - | - | **1** |
| `!= generalbrowsing` | - | 1 | - | - | **1** |
| `Application-Unknown` | - | - | 1 | - | **1** |
| `Generic-Web-HTTP` | - | - | 1 | - | **1** |
| `Unknown-Encrypted-Application` | - | - | 1 | - | **1** |

### DestinationTranslatedAddress

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains .` | - | 1 | - | - | **1** |

### DestinationUserPrivileges

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!contains ConjurSync` | - | 1 | - | - | **1** |
| `!contains PSM` | - | 1 | - | - | **1** |
| `!contains PSMSessions` | - | 1 | - | - | **1** |
| `!contains PVWAConfig` | - | 1 | - | - | **1** |
| `!contains PVWAPrivateUserPrefs` | - | 1 | - | - | **1** |
| `!contains PasswordManager` | - | 1 | - | - | **1** |
| `!contains PasswordManagerShared` | - | 1 | - | - | **1** |
| `!contains SharedAuth_Internal` | - | 1 | - | - | **1** |
| `!contains VaultInternal` | - | 1 | - | - | **1** |
| `contains ConjurSync` | - | 1 | - | - | **1** |

### DeviceAction

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Blocked` | 10 | - | - | - | **10** |
| `!= block-url` | - | 4 | - | - | **4** |
| `Terminate` | 2 | 1 | - | - | **3** |
| `!= Allow` | 2 | - | - | - | **2** |
| `!= deny` | - | 2 | - | - | **2** |
| `FAILED` | 1 | - | - | - | **1** |
| `Prevented (Blocked)` | 1 | - | - | - | **1** |
| `block` | 1 | - | - | - | **1** |
| `!= reset-both` | - | 1 | - | - | **1** |
| `START` | - | 1 | - | - | **1** |
| `!= blocked` | - | 1 | - | - | **1** |
| `Allowed` | - | 1 | - | - | **1** |
| `has_any allow` | - | 1 | - | - | **1** |
| `contains disable` | - | 1 | - | - | **1** |
| `Discard` | - | 1 | - | - | **1** |
| `!= Discard` | - | 1 | - | - | **1** |
| `!= Terminate` | - | 1 | - | - | **1** |
| `alert` | - | 1 | - | - | **1** |
| `block-continue` | - | 1 | - | - | **1** |
| `block-url` | - | 1 | - | - | **1** |
| `continue` | - | 1 | - | - | **1** |
| `!contains block` | - | 1 | - | - | **1** |
| `!contains deny` | - | 1 | - | - | **1** |
| `contains block` | - | 1 | - | - | **1** |
| `contains deny` | - | 1 | - | - | **1** |

### DeviceCustomString1

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `CROWN_JEWEL_CREDENTIALS` | - | 1 | - | - | **1** |
| `LOCAL_USER_ADMINISTRATORS` | - | 1 | - | - | **1** |
| `SUSPICIOUS_FILES` | - | 1 | - | - | **1** |
| `USER_CREDENTIALS` | - | 1 | - | - | **1** |
| `True` | - | 1 | - | - | **1** |
| `has None` | - | - | - | 1 | **1** |

### DeviceCustomString1Label

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `dst_vulns` | 2 | - | - | 1 | **3** |
| `event_href` | 2 | - | - | 1 | **3** |
| `Session ID` | 1 | 1 | - | - | **2** |

### DeviceCustomString2

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `True` | - | 1 | - | - | **1** |
| `Phishing` | - | 1 | - | - | **1** |

### DeviceCustomString2Label

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `resource_changes` | 2 | - | - | 1 | **3** |
| `state` | 2 | - | - | 1 | **3** |

### DeviceCustomString3

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `DNS Reputation` | - | 1 | - | - | **1** |
| `IP Reputation` | - | 1 | - | - | **1** |
| `URL Reputation` | - | 1 | - | - | **1** |
| `contains Behavior` | - | 1 | - | - | **1** |

### DeviceCustomString4

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `None` | - | - | 1 | - | **1** |

### DeviceCustomString4Label

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `dst_labels` | 2 | - | - | 1 | **3** |
| `notifications` | 2 | - | - | 1 | **3** |
| `rulelabels` | - | 1 | - | - | **1** |

### DeviceCustomString5

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= None` | - | 1 | - | - | **1** |
| `!= suspiciousfile` | - | 1 | - | - | **1** |

### DeviceCustomString5Label

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `threatname` | - | 1 | - | - | **1** |

### DeviceCustomString6Label

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `dst_href` | 2 | - | - | 1 | **3** |

### DeviceEventClassID

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ESA_CONSOLIDATED_LOG_EVENT` | 2 | 22 | - | 1 | **25** |
| `has RPZ` | 3 | 6 | - | - | **9** |
| `!= health` | 2 | 6 | - | - | **8** |
| `!= audit` | 2 | 6 | - | - | **8** |
| `!= campaigns` | 2 | 6 | - | - | **8** |
| `!= hsc` | 2 | 6 | - | - | **8** |
| `!= asc` | 2 | 6 | - | - | **8** |
| `url` | - | 7 | 1 | - | **8** |
| `BloxOne-InsightsNotification-Log` | 3 | 2 | - | 2 | **7** |
| `has DNS` | 3 | 2 | 1 | - | **6** |
| `DHCP-LEASE-CREATE` | 3 | 2 | - | - | **5** |
| `has DHCP` | 2 | 2 | 1 | - | **5** |
| `NewIncident` | 1 | 4 | - | - | **5** |
| `wildfire` | - | 5 | - | - | **5** |
| `hsc` | 2 | 2 | - | - | **4** |
| `!contains Allow` | - | 4 | - | - | **4** |
| `has Audit` | 2 | 1 | - | - | **3** |
| `has Service` | 2 | 1 | - | - | **3** |
| `illusive:access` | 2 | 1 | - | - | **3** |
| `illusive:login` | 2 | 1 | - | - | **3** |
| `illusive:suspicious` | 2 | 1 | - | - | **3** |
| `Blocked` | 2 | 1 | - | - | **3** |
| `contains Allow` | - | 3 | - | - | **3** |
| `4001` | 1 | 1 | - | - | **2** |
| `Tunnel Event` | 1 | 1 | - | - | **2** |
| `ExtraHop Detection` | 2 | - | - | - | **2** |
| `MaliciousUrlDetected` | - | 2 | - | - | **2** |
| `ActiveProtectionBlocksSuspiciousActivity` | - | 2 | - | - | **2** |
| `MaliciousEmailDetectedPerceptionPointWarning` | - | 2 | - | - | **2** |
| `MaliciousURLDetectedInM365MailboxBackup` | - | 2 | - | - | **2** |
| `MalwareDetectedInM365MailboxBackup` | - | 2 | - | - | **2** |
| `733100` | - | 2 | - | - | **2** |
| `file` | - | 2 | - | - | **2** |
| `vulnerability` | - | 2 | - | - | **2** |
| `asc` | - | 2 | - | - | **2** |
| `106100` | - | 1 | 1 | - | **2** |
| `DHCP-LEASE-DELETE` | - | 2 | - | - | **2** |
| `DHCP-LEASE-UPDATE` | - | 2 | - | - | **2** |
| `IPSec Phase1` | 1 | - | - | - | **1** |
| `IPSec Phase2` | 1 | - | - | - | **1** |
| `733101` | - | 1 | - | - | **1** |
| `733102` | - | 1 | - | - | **1** |
| `733103` | - | 1 | - | - | **1** |
| `733104` | - | 1 | - | - | **1** |
| `733105` | - | 1 | - | - | **1** |
| `DNS Response` | - | 1 | - | - | **1** |
| `flood` | - | 1 | - | - | **1** |
| `packet` | - | 1 | - | - | **1** |
| `scan` | - | 1 | - | - | **1** |
| `spyware` | - | 1 | - | - | **1** |
| `virus` | - | 1 | - | - | **1** |
| `wildfire-virus` | - | 1 | - | - | **1** |
| `startswith 40` | - | 1 | - | - | **1** |
| `contains campaign` | - | 1 | - | - | **1** |
| `AgentAutoUpdateStalled` | - | 1 | - | - | **1** |
| `MiniPlanAgentOffline` | - | 1 | - | - | **1** |
| `CloudConnectionAzureApplianceConfigurationFailed` | - | 1 | - | - | **1** |
| `CloudConnectionAzureApplianceDeallocationFailed` | - | 1 | - | - | **1** |
| `CloudConnectionAzureApplianceDeletionFailed` | - | 1 | - | - | **1** |
| `CloudConnectionAzureApplianceEOL` | - | 1 | - | - | **1** |
| `CloudConnectionAzureApplianceFailed` | - | 1 | - | - | **1** |
| `CloudConnectionAzureApplianceUpdateFailed` | - | 1 | - | - | **1** |
| `CloudConnectionAzureCloudAccessExpired` | - | 1 | - | - | **1** |
| `CloudConnectionS3CloudAccessExpired` | - | 1 | - | - | **1** |
| `ArchiveCorrupted` | - | 1 | - | - | **1** |
| `BackupFailed` | - | 1 | - | - | **1** |
| `BackupNotResponding` | - | 1 | - | - | **1** |
| `BackupRecoveryFailed` | - | 1 | - | - | **1** |
| `EDRIOCDetected` | - | 1 | - | - | **1** |
| `EDRIncidentDetected` | - | 1 | - | - | **1** |
| `MiMonitoringFailedLoginAttemptsOverThreshold` | - | 1 | - | - | **1** |
| `ActiveProtectionDriverRemediated` | - | 1 | - | - | **1** |
| `ActiveProtectionInvalidNetworkRecoveryPath` | - | 1 | - | - | **1** |
| `ActiveProtectionServiceConflict` | - | 1 | - | - | **1** |
| `ActiveProtectionServiceFailureToApplyPolicy` | - | 1 | - | - | **1** |
| `ActiveProtectionServiceNotAvailable` | - | 1 | - | - | **1** |
| `ActiveProtectionServiceNotRunning` | - | 1 | - | - | **1** |
| `CPSProtectionFailureDetected` | - | 1 | - | - | **1** |
| `ProtectionServiceNotWorking` | - | 1 | - | - | **1** |
| `ActiveProtectionDetectedAszPartitionAccessed` | - | 1 | - | - | **1** |
| `111008` | - | 1 | - | - | **1** |
| `113012` | - | 1 | - | - | **1** |
| `113015` | - | 1 | - | - | **1** |
| `302010` | - | 1 | - | - | **1** |
| `315011` | - | 1 | - | - | **1** |
| `611102` | - | 1 | - | - | **1** |
| `illusive:violation` | - | 1 | - | - | **1** |
| `correlation` | - | 1 | - | - | **1** |
| `!= file` | - | 1 | - | - | **1** |
| `!= url` | - | 1 | - | - | **1** |
| `end` | - | 1 | - | - | **1** |
| `Semperis.DSP.AdChanges` | - | 1 | - | - | **1** |
| `audit` | - | 1 | - | - | **1** |
| `campaigns` | - | 1 | - | - | **1** |
| `health` | - | 1 | - | - | **1** |
| `DLP Incident` | - | 1 | - | - | **1** |
| `Tunnel Samples` | - | 1 | - | - | **1** |
| `Allow` | - | 1 | - | - | **1** |
| `Allowed` | - | 1 | - | - | **1** |
| `contains Block` | - | 1 | - | - | **1** |
| `UserActivityAuditEvent` | - | - | 1 | - | **1** |
| `has AUDIT` | - | - | 1 | - | **1** |
| `twoFactorAuthenticate` | - | - | 1 | - | **1** |
| `userAuthenticate` | - | - | 1 | - | **1** |
| `!= 0100022949` | - | - | 1 | - | **1** |
| `!= 0100022952` | - | - | 1 | - | **1** |
| `AUTH` | - | - | 1 | - | **1** |
| `GLOBALPROTECT` | - | - | 1 | - | **1** |
| `startswith auth` | - | - | 1 | - | **1** |
| `endswith 54000` | - | - | 1 | - | **1** |
| `endswith 54200` | - | - | 1 | - | **1** |
| `endswith 54400` | - | - | 1 | - | **1** |
| `endswith 54401` | - | - | 1 | - | **1** |
| `endswith 54600` | - | - | 1 | - | **1** |
| `endswith 54601` | - | - | 1 | - | **1** |
| `endswith 54800` | - | - | 1 | - | **1** |
| `endswith 54801` | - | - | 1 | - | **1** |
| `endswith 54802` | - | - | 1 | - | **1** |
| `endswith 54803` | - | - | 1 | - | **1** |
| `endswith 54804` | - | - | 1 | - | **1** |
| `endswith 54805` | - | - | 1 | - | **1** |
| `106001` | - | - | 1 | - | **1** |
| `106002` | - | - | 1 | - | **1** |
| `106006` | - | - | 1 | - | **1** |
| `106007` | - | - | 1 | - | **1** |
| `106010` | - | - | 1 | - | **1** |
| `106012` | - | - | 1 | - | **1** |
| `106013` | - | - | 1 | - | **1** |
| `106014` | - | - | 1 | - | **1** |
| `106015` | - | - | 1 | - | **1** |
| `106016` | - | - | 1 | - | **1** |
| `106017` | - | - | 1 | - | **1** |
| `106018` | - | - | 1 | - | **1** |
| `106020` | - | - | 1 | - | **1** |
| `106021` | - | - | 1 | - | **1** |
| `106022` | - | - | 1 | - | **1** |
| `106023` | - | - | 1 | - | **1** |
| `302013` | - | - | 1 | - | **1** |
| `302014` | - | - | 1 | - | **1** |
| `302015` | - | - | 1 | - | **1** |
| `302016` | - | - | 1 | - | **1** |
| `302020` | - | - | 1 | - | **1** |
| `302021` | - | - | 1 | - | **1** |
| `710002` | - | - | 1 | - | **1** |
| `710003` | - | - | 1 | - | **1** |
| `710004` | - | - | 1 | - | **1** |
| `710005` | - | - | 1 | - | **1** |
| `has INTRUSION:400` | - | - | 1 | - | **1** |
| `has PV:112` | - | - | 1 | - | **1** |
| `has RNA:1003:1` | - | - | 1 | - | **1** |
| `has_any INTRUSION:400` | - | - | 1 | - | **1** |
| `has_any PV:112` | - | - | 1 | - | **1** |
| `has_any RNA:1003:1` | - | - | 1 | - | **1** |
| `FirewallMatchEvent` | - | - | 1 | - | **1** |
| `Network Access In A Detection Summary Event` | - | - | 1 | - | **1** |
| `has Network Access In A Detection Summary Event` | - | - | 1 | - | **1** |
| `70734` | - | - | 1 | - | **1** |
| `76508` | - | - | 1 | - | **1** |
| `76509` | - | - | 1 | - | **1** |
| `!= 0` | - | - | 1 | - | **1** |
| `!= 70383` | - | - | 1 | - | **1** |
| `!= 70393` | - | - | 1 | - | **1** |
| `!= 70734` | - | - | 1 | - | **1** |
| `!= 71009` | - | - | 1 | - | **1** |
| `!= 71040` | - | - | 1 | - | **1** |
| `TRAFFIC` | - | - | 1 | - | **1** |
| `File:500:1` | - | - | 1 | - | **1** |
| `FileMalware:502:1` | - | - | 1 | - | **1** |
| `FireAMP:125:1` | - | - | 1 | - | **1** |
| `has File:500:1` | - | - | 1 | - | **1** |
| `has FileMalware:502:1` | - | - | 1 | - | **1** |
| `APPFW` | - | - | 1 | - | **1** |
| `THREAT` | - | - | 1 | - | **1** |
| `filterlog` | - | - | - | 1 | **1** |
| `nginx` | - | - | - | 1 | **1** |

### DeviceFacility

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Inspection` | - | 1 | - | - | **1** |

### DeviceInboundInterface

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `port1` | - | 1 | - | - | **1** |
| `port2` | - | 1 | - | - | **1** |

### DeviceName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains #` | - | 1 | - | - | **1** |

### DeviceVersion

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `2` | - | - | - | 1 | **1** |

### EventOutcome

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Failure` | 1 | - | - | - | **1** |

### FlexNumber1

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `3` | - | 1 | - | - | **1** |
| `4` | - | 1 | - | - | **1** |
| `5` | - | 1 | - | - | **1** |

### LogSeverity

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `6` | 3 | 1 | - | - | **4** |
| `10` | 2 | 1 | - | - | **3** |
| `High` | 1 | 2 | - | - | **3** |
| `7` | 2 | - | - | - | **2** |
| `Medium` | - | 2 | - | - | **2** |
| `Very-High` | - | 2 | - | - | **2** |
| `Critical` | - | 1 | - | - | **1** |
| `2` | - | 1 | - | - | **1** |
| `9` | - | 1 | - | - | **1** |
| `Low` | - | 1 | - | - | **1** |

### Message

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!contains hasForensics` | 2 | 1 | - | - | **3** |
| `has UserBruteForce` | 1 | 1 | - | - | **2** |
| `has Certifried` | - | 1 | - | - | **1** |
| `has Log4Shell` | - | 1 | - | - | **1** |
| `has NoPacBreach` | - | 1 | - | - | **1** |
| `contains -> inside` | - | 1 | - | - | **1** |
| `contains -> management` | - | 1 | - | - | **1** |
| `contains Login succeeded` | - | 1 | - | - | **1** |
| `contains Logout` | - | 1 | - | - | **1** |
| `contains created` | - | 1 | - | - | **1** |
| `contains modified` | - | 1 | - | - | **1** |
| `!contains count:` | - | 1 | - | - | **1** |
| `has_any change` | - | 1 | - | - | **1** |
| `has_any record modified` | - | 1 | - | - | **1** |

### OldFileID

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains Error` | - | 1 | - | - | **1** |
| `contains Failure` | - | 1 | - | - | **1** |
| `contains error` | - | 1 | - | - | **1** |

### Protocol

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!contains /` | - | 2 | 2 | - | **4** |
| `contains -` | - | 2 | 2 | - | **4** |

### RequestContext

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `None` | - | - | 1 | - | **1** |

### RequestMethod

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= None` | - | 1 | - | - | **1** |
| `!= UNKNOWN` | - | - | 1 | - | **1** |

### SimplifiedDeviceAction

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Deny` | 1 | 1 | - | - | **2** |
| `Allow` | - | 1 | - | - | **1** |
| `Built` | - | 1 | - | - | **1** |

### SourceHostName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= Failed to obtain` | 2 | 1 | - | - | **3** |

### SourcePort

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= 0` | - | 1 | - | - | **1** |

### SourceUserID

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= Not available` | 2 | 1 | - | - | **3** |

### SourceUserName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!contains PasswordManager` | - | 1 | - | - | **1** |
| `contains Sync_components` | - | 1 | - | - | **1** |
| `contains administrator` | - | 1 | - | - | **1** |
| `!= All` | - | 1 | - | - | **1** |

### SourceUserPrivileges

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Road Warrior` | - | 2 | - | - | **2** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

