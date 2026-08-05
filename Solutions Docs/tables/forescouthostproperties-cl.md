# ForescoutHostProperties_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (224 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ForescoutHostPropertyMonitor%5CData%20Connectors%5CForescoutHostPropertyMonitor_ccf/ForescoutHostPropertyMonitor_table_ForescoutHostProperties.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Admission | dynamic | Admission status |
| BigFixAgentVersion | dynamic | IBM BigFix agent version |
| BigFixId | dynamic | IBM BigFix identifier |
| BigFixLastReportedTime | dynamic | IBM BigFix last reported time |
| BigFixServer | dynamic | IBM BigFix server |
| CbAppControlAgentVersion | dynamic | Carbon Black App Control agent version |
| CbAppControlComputerConnected | dynamic | Carbon Black App Control computer connected state |
| CbAppControlDaysOffline | dynamic | Carbon Black App Control days offline |
| CbAppControlPolicyStatus | dynamic | Carbon Black App Control policy status |
| CbEdrHealthStatus | dynamic | Carbon Black EDR sensor health status |
| CbEdrLastCheckin | dynamic | Carbon Black EDR last check-in time |
| CbEdrNextExpectedCheckin | dynamic | Carbon Black EDR next expected check-in time |
| CbEdrSensorHealthScore | dynamic | Carbon Black EDR sensor health score |
| CbEdrSensorVersion | dynamic | Carbon Black EDR sensor version |
| ClassificationVendor | dynamic | Manufacturer classification |
| CloudClassificationGwFunctionClassification | dynamic | Cloud classification gateway function classification |
| CloudClassificationGwOsClassification | dynamic | Cloud classification gateway OS classification |
| CloudClassificationGwVendorClassification | dynamic | Cloud classification gateway vendor classification |
| CommonName | dynamic | Active Directory common name (CN) |
| Company | dynamic | Active Directory company attribute |
| ComplianceStatus | dynamic | Overall compliance status |
| ConnectivityType | dynamic | Connectivity type of the endpoint |
| CrowdStrikeAgentVersion | dynamic | CrowdStrike agent version |
| CrowdStrikeDeviceId | dynamic | CrowdStrike device ID |
| CrowdStrikeHostname | dynamic | CrowdStrike hostname |
| CrowdStrikeLastSeenTime | dynamic | CrowdStrike last seen time |
| DefenderAntivirusStatus | dynamic | Microsoft Defender antivirus status |
| DefenderClientId | dynamic | Microsoft Defender client ID |
| DefenderLastSeen | dynamic | Microsoft Defender last seen time |
| Department | dynamic | Active Directory department attribute |
| DhcpDeviceClass | dynamic | DHCP device class |
| DhcpOs | dynamic | Operating system reported via DHCP |
| DisplayName | dynamic | Active Directory display name |
| Dot1xAuthenticatedEntity | dynamic | 802.1X authenticated entity |
| Dot1xAuthenticatingDomain | dynamic | 802.1X authenticating domain |
| Dot1xAuthenticationType | dynamic | 802.1X authentication type |
| Dot1xAuthorizeActionSummary | dynamic | 802.1X authorize action summary |
| Dot1xHostname | dynamic | 802.1X hostname |
| Dot1xLastAuthenticationState | dynamic | 802.1X last authentication state |
| Dot1xLastAuthenticationTime | dynamic | 802.1X last authentication time |
| Dot1xLastAuthorizeActionFailure | dynamic | 802.1X last authorize action failure |
| Dot1xLastRejectedAuthenticationTime | dynamic | 802.1X last rejected authentication time |
| Dot1xLastSuccessfulAuthenticationTime | dynamic | 802.1X last successful authentication time |
| Dot1xMarComment | dynamic | 802.1X MAC authentication bypass (MAR) comment |
| Dot1xNasId | dynamic | 802.1X NAS identifier |
| Dot1xNasIpAddr | dynamic | 802.1X NAS IPv4 address |
| Dot1xNasIpv6Addr | dynamic | 802.1X NAS IPv6 address |
| Dot1xNasPortType | dynamic | 802.1X NAS port type |
| Dot1xRadiusAuthenticationState | dynamic | 802.1X RADIUS authentication state |
| Dot1xReauthenticationMethod | dynamic | 802.1X reauthentication method |
| Dot1xRequestedAuthorizeAction | dynamic | 802.1X requested authorize action |
| Dot1xUserLoginResult | dynamic | 802.1X user login result |
| Dot1xUserName | dynamic | 802.1X user name |
| EmIpAddr | string | Enterprise Manager IP address (Forescout appliance) |
| EpoAgentLastCommunication | dynamic | McAfee ePO agent last communication time |
| EpoAgentManagedState | dynamic | McAfee ePO agent managed state |
| ExternalDevices | dynamic | Connected external devices |
| ExternalIpReuseDomain | dynamic | External IP reuse domain |
| ForescoutDeviceType | dynamic | Forescout device type |
| FunctionClassification | dynamic | Device function/role classification |
| FunctionDerivedFromVendor | dynamic | Device function derived from vendor |
| GlobalProtectClientType | dynamic | Palo Alto GlobalProtect client type |
| GlobalProtectComputerName | dynamic | Palo Alto GlobalProtect computer name |
| GlobalProtectComputerPublicIpAddr | dynamic | Palo Alto GlobalProtect computer public IPv4 address |
| GlobalProtectComputerPublicIpv6Addr | dynamic | Palo Alto GlobalProtect computer public IPv6 address (sanitized from original name with space) |
| GlobalProtectGateway | dynamic | Palo Alto GlobalProtect gateway |
| GlobalProtectServer | dynamic | Palo Alto GlobalProtect server |
| GlobalProtectUser | dynamic | Palo Alto GlobalProtect user |
| HardDriveName | dynamic | Hard drive name |
| HardDriveState | dynamic | Hard drive state |
| Hostname | dynamic | Hostname of the endpoint |
| HostOnline | dynamic | Whether the host is online |
| HostProperties | dynamic | Full JSON blob of all Forescout host properties |
| HttpLoginUser | dynamic | HTTP login user |
| InsightvmRiskScore | dynamic | Rapid7 InsightVM risk score |
| InsightvmScanResults | dynamic | Rapid7 InsightVM scan results |
| InsightvmScanStatus | dynamic | Rapid7 InsightVM scan status |
| IntuneDevice | dynamic | Microsoft Intune device indicator |
| IntuneDeviceComplianceState | dynamic | Microsoft Intune device compliance state |
| IntuneDeviceLastSyncDateTime | dynamic | Microsoft Intune device last sync time |
| IntuneDeviceManufacturer | dynamic | Microsoft Intune device manufacturer |
| IntuneDeviceModel | dynamic | Microsoft Intune device model |
| IntuneDeviceName | dynamic | Microsoft Intune device name |
| IntuneDeviceSerialNumber | dynamic | Microsoft Intune device serial number |
| IpAddr | dynamic | Primary IP address |
| Ipv4Addr | string | IPv4 address of the endpoint |
| Ipv6Addr | dynamic | IPv6 address(es) of the endpoint |
| Ipv6LinkLocalAddr | dynamic | IPv6 link-local address |
| Ipv6LinkLocalAddrInternal | dynamic | Internal IPv6 link-local address |
| JamfAgentInformation | dynamic | Jamf agent information |
| JamfId | dynamic | Jamf identifier |
| JamfManaged | dynamic | Whether the device is Jamf managed |
| JamfMobileDeviceName | dynamic | Jamf mobile device name |
| JamfMobileId | dynamic | Jamf mobile identifier |
| JamfMobileManaged | dynamic | Whether the mobile device is Jamf managed |
| JamfMobileUserInformation | dynamic | Jamf mobile user information |
| LdapUserName | dynamic | LDAP/Active Directory user name |
| LinuxManageableSecureConnector | dynamic | Whether the Linux device is manageable via SecureConnector |
| LinuxManageableSshDirectAccess | dynamic | Whether the Linux device is manageable via SSH direct access |
| LinuxProcessesRunning | dynamic | Running processes (Linux) |
| LinuxSecureConnectorVersion | dynamic | Linux SecureConnector version |
| LinuxUser | dynamic | Linux logged-in user |
| LinuxVersion | dynamic | Linux version |
| LocalCredentialsUserName | dynamic | Local credentials user name |
| LoginName | dynamic | Login name |
| MacAddr | string | MAC address of the endpoint |
| MacintoshManageableSecureConnector | dynamic | Whether the macOS device is manageable via SecureConnector |
| MacintoshManageableSshDirectAccess | dynamic | Whether the macOS device is manageable via SSH direct access |
| MacintoshProcessesRunning | dynamic | Running processes (macOS) |
| MacintoshSoftwareUpdates | dynamic | Pending software updates (macOS) |
| MacintoshUser | dynamic | macOS logged-in user |
| MemberOfGroup | dynamic | Groups the endpoint belongs to |
| ModelClassification | dynamic | Device model classification |
| MsRrpReachable | dynamic | Whether Microsoft RRP (Remote Registry) is reachable |
| MsSmbReachable | dynamic | Whether Microsoft SMB is reachable |
| MsWmiReachable | dynamic | Whether Microsoft WMI is reachable |
| NcClientMode | dynamic | Network controller client mode |
| NcDeviceName | dynamic | Network controller device name |
| NcDevicePort | dynamic | Network controller device port |
| NcDeviceType | dynamic | Network controller device type |
| NcDeviceVendor | dynamic | Network controller device vendor |
| NcFamily | dynamic | Network controller device family |
| NcHostConnectionStatus | dynamic | Network controller host connection status |
| NcHostInformation | dynamic | Network controller host information |
| NcNetworkName | dynamic | Network controller network name |
| NcOrganizationName | dynamic | Network controller organization name |
| NcPortProfile | dynamic | Network controller port profile |
| NcProduct | dynamic | Network controller product |
| NetBiosDomain | dynamic | NetBIOS domain |
| NetBiosHostname | dynamic | NetBIOS hostname |
| NetworkFunction | dynamic | Network function of the endpoint |
| NicVendor | dynamic | Network interface card vendor |
| NumberOfIpAddr | dynamic | Number of IP addresses on the endpoint |
| OpenPorts | dynamic | Open ports detected on the endpoint |
| OsClassification | dynamic | Operating system classification |
| OsDerivedFromVendor | dynamic | Operating system derived from vendor |
| OsDetailsClassification | dynamic | Detailed operating system classification |
| OtCriticality | dynamic | Operational technology (OT) criticality |
| OtLastSeen | dynamic | OT device last seen time |
| OtPurdueLevel | dynamic | OT Purdue model level |
| OtVulnerabilities | dynamic | OT device vulnerabilities |
| ParentOs | dynamic | Parent operating system |
| Properties | dynamic | Raw JSON blob of all Forescout host properties for this record |
| PropertyType | string | Type of property record: host, policy, or compliance |
| QualysAgent | dynamic | Qualys agent information |
| QualysLastScan | dynamic | Qualys last scan time |
| SecureConnectorCompatibility | dynamic | SecureConnector compatibility |
| SegmentName | dynamic | Forescout segment name |
| SegmentPath | dynamic | Forescout segment path |
| SnowHostStatusInCmdb | dynamic | ServiceNow host status in CMDB |
| SnowLastActionStatus | dynamic | ServiceNow last action status |
| SplunkAlerts | dynamic | Splunk alerts |
| SwitchHostname | dynamic | Connected switch hostname |
| SwitchIpAddr | dynamic | Connected switch IP address |
| SwitchIpAddrPortName | dynamic | Connected switch IP address and port name |
| SwitchLocation | dynamic | Connected switch location |
| SwitchNumberOfHostsOnPort | dynamic | Number of hosts on the connected switch port |
| SwitchOs | dynamic | Connected switch operating system |
| SwitchPortAlias | dynamic | Connected switch port alias |
| SwitchPortName | dynamic | Connected switch port name |
| SwitchPortPoeConnectedDevice | dynamic | PoE device connected to the switch port |
| SwitchPortVlan | dynamic | Connected switch port VLAN |
| SwitchPortVlanName | dynamic | Connected switch port VLAN name |
| SwitchPortVoiceVlan | dynamic | Connected switch port voice VLAN |
| SwitchVendor | dynamic | Connected switch vendor |
| SwitchVendorAndType | dynamic | Connected switch vendor and type |
| SymantecAntiVirusDefinitionDate | dynamic | Symantec antivirus definition date |
| SymantecAutoProtectionStatus | dynamic | Symantec auto-protect status |
| TaniumClientVersion | dynamic | Tanium client version |
| TaniumUacStatus | dynamic | Tanium UAC status |
| TenableIoCloudIsReachable | dynamic | Whether Tenable.io cloud is reachable |
| TenableIoLastScan | dynamic | Tenable.io last scan time |
| TenableIoScanResults | dynamic | Tenable.io scan results |
| TenableScScanStatus | dynamic | Tenable.sc scan status |
| TenableScVulnerabilityResults | dynamic | Tenable.sc vulnerability results |
| TimeGenerated | datetime | Time the record was generated |
| UploadTime | datetime | Time the record was uploaded by Forescout |
| User | dynamic | Logged-in user |
| VendorClassification | dynamic | Device vendor classification |
| VmwareEsxiHostname | dynamic | VMware ESXi hostname |
| VmwareServerOsType | dynamic | VMware server OS type |
| VmwareVmName | dynamic | VMware virtual machine name |
| VpnClientType | dynamic | VPN client type |
| VpnIpAddr | dynamic | VPN IP address |
| VpnLoggedInUser | dynamic | VPN logged-in user |
| VpnSyslogClientPublicIpv4Addr | dynamic | VPN syslog client public IPv4 address |
| VpnSyslogClientPublicIpv6Addr | dynamic | VPN syslog client public IPv6 address |
| VpnSyslogClientVersion | dynamic | VPN syslog client version |
| VpnSyslogGatewayName | dynamic | VPN syslog gateway name |
| VpnSyslogUserGroup | dynamic | VPN syslog user group |
| VpnSyslogUserId | dynamic | VPN syslog user ID |
| VpnSyslogVendor | dynamic | VPN syslog vendor |
| WindowsActiveUsers | dynamic | Active users (Windows) |
| WindowsAntiSpywareInstalled | dynamic | Anti-spyware installed (Windows) |
| WindowsAntivirusInstalled | dynamic | Whether antivirus is installed (Windows) |
| WindowsAntivirusInstalledVersion | dynamic | Installed antivirus version (Windows) |
| WindowsAntivirusRunning | dynamic | Whether antivirus is running (Windows) |
| WindowsAntivirusUpdateDate | dynamic | Antivirus signature update date (Windows) |
| WindowsApplicationsInstalled | dynamic | Installed applications (Windows) |
| WindowsCloudStorageInstalled | dynamic | Cloud storage application installed (Windows) |
| WindowsCloudStorageRunning | dynamic | Cloud storage application running (Windows) |
| WindowsDomainMember | dynamic | Whether the device is a Windows domain member |
| WindowsHardDriveEncryptionInstalled | dynamic | Hard drive encryption software installed (Windows) |
| WindowsHardDriveEncryptionState | dynamic | Hard drive encryption state (Windows) |
| WindowsInstantMessagingInstalled | dynamic | Instant messaging application installed (Windows) |
| WindowsInstantMessagingRunning | dynamic | Instant messaging application running (Windows) |
| WindowsLoggedOn | dynamic | Whether a user is logged on (Windows) |
| WindowsManageableDomain | dynamic | Whether the device is manageable via domain (Windows) |
| WindowsManageableDomainCurrent | dynamic | Whether the device is currently manageable via domain (Windows) |
| WindowsManageableSecureConnector | dynamic | Whether the Windows device is manageable via SecureConnector |
| WindowsPeerToPeerInstalled | dynamic | Peer-to-peer application installed (Windows) |
| WindowsPeerToPeerRunning | dynamic | Peer-to-peer application running (Windows) |
| WindowsPersonalFirewall | dynamic | Windows personal firewall status |
| WindowsProcessesRunning | dynamic | Running processes (Windows) |
| WindowsVersion | dynamic | Windows version |
| WindowsVersionCpeFormat | dynamic | Windows version in CPE format |
| WindowsVersionFineTuned | dynamic | Fine-tuned Windows version |
| WlanApLocation | dynamic | Wireless access point location |
| WlanApName | dynamic | Wireless access point name |
| WlanClientConnectivityStatus | dynamic | Wireless client connectivity status |
| WlanClientUsername | dynamic | Wireless client username |
| WlanDetectedClientType | dynamic | Wireless detected client type |
| WlanManagingController | dynamic | Wireless managing controller |
| WlanSsid | dynamic | Wireless SSID |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [ForescoutHostPropertyMonitor](../solutions/forescouthostpropertymonitor.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Forescout Host Property Monitor](../connectors/forescouthostpropertymonitor.md) |  |
| [Forescout Host Property Monitor (Push Connector via Codeless Connector Framework)](../connectors/forescouthostpropertymonitor.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [ForescoutHostPropertyMonitor](../solutions/forescouthostpropertymonitor.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Forescout-DNS_Sniff_Event_Monitor](../content/forescouthostpropertymonitor-forescout-dns-sniff-event-monitor-d272e277-f285-4dbc-ae2d-7f65ba64a79e-39ee6063.md) |  |

### Workbooks (1)

**In solution [ForescoutHostPropertyMonitor](../solutions/forescouthostpropertymonitor.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ForescoutHostPropertyMonitorWorkbook](../content/forescouthostpropertymonitor-forescouthostpropertymonitorworkbook-cbfbbf6d.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

