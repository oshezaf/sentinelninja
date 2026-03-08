# DeviceInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Machine information, including OS information

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceinfo-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (53 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AadDeviceId | string | Unique identifier for the device in Azure Active Directory. |
| AdditionalFields | dynamic | Additional information about the entity or event. |
| AssetValue | string | Indicates the value of a device as assigned by the user. |
| AwsResourceName | string | Unique identifier of the AWS resource associated with the device. |
| AzureResourceId | string | Unique identifier of the Azure resource associated with the device. |
| AzureVmId | string | Unique identifier assigned to the device in Azure. |
| AzureVmSubscriptionId | string | Unique identifier of the Azure subscription associated with the device. |
| ClientVersion | string | Version of the endpoint agent or sensor running on the machine. |
| CloudPlatforms | string | Thse cloud platforms that the device belongs to-can be Azure, Amazon Web Services, Google Cloud Platform and Azure Arc. |
| DeviceCategory | string | Broader classification that groups certain device types under the following categories: Endpoint, Network device, IoT, Unknown. |
| DeviceDynamicTags | string | Device tags added and removed dynamically based on dynamic rules. |
| DeviceId | string | Unique identifier for the device in the service. |
| DeviceManualTags | string | Device tags created manually using the portal UI or public API. |
| DeviceName | string | Fully qualified domain name (FQDN) of the device. |
| DeviceObjectId | string | Unique identifier for the device in Azure AD. |
| DeviceSubtype | string | Additional modifier for certain types of devices, for example, a mobile device can be a tablet or a smartphone; only available if device discovery finds enough information about this attribute. |
| DeviceType | string | Type of device based on purpose and functionality, such as network device, workstation, server, mobile, gaming console, or printer. |
| ExclusionReason | string | Indicates the reason for device exclusion. |
| ExposureLevel | string | Indicates the exposure level of a device. |
| GcpFullResourceName | string | Unique identifier of the AWS resource associated with the device. |
| HardwareUuid | string | Universally Unique Identifier (UUID) of the device's hardware. |
| HostDeviceId | string | Device ID of the device running Windows Subsystem for Linux. |
| IsAzureADJoined | bool | Boolean indicator of whether machine is joined to the Azure Active Directory. |
| IsExcluded | bool | Determines if the device is currently excluded from Microsoft Defender for Vulnerability Management experiences. |
| IsInternetFacing | bool | Indicates whether the device is internet-facing. |
| IsTransient | bool | Indicates whether this device is classified as short-lived or transient based on the frequency of appearance of the device on the network. |
| JoinType | string | The device's Azure Active Directory join type. |
| LoggedOnUsers | dynamic | List of all users that are logged on the machine at the time of the event in JSON array format. |
| MachineGroup | string | Machine group used to determine access to the machine and apply group-specific settings. |
| MergedDeviceIds | string | Previous device IDs that have been assigned to the same device. |
| MergedToDeviceId | string | The most recent device ID assigned to a device. |
| MitigationStatus | string | Indicates the mitigation action applied to a device. |
| Model | string | Model name or number of the product from the vendor or manufacturer, only available if device discovery finds enough information about this attribute. |
| OnboardingStatus | string | Indicates whether the device is currently onboarded or not to Microsoft Defender for Endpoint or if the device is not supported. |
| OSArchitecture | string | Architecture of the operating system running on the machine. |
| OSBuild | long | Build version of the operating system running on the machine. |
| OsBuildRevision | string | Build revision number of the operating system running on the machine. |
| OSDistribution | string | Distribution of the OS platform, such as Ubuntu or RedHat for Linux platforms. |
| OSPlatform | string | Platform of the operating system running on the machine. This indicates specific operating systems, including variations within the same family, such as Windows 10 and Windows 7. |
| OSVersion | string | Version of the operating system running on the machine. |
| OSVersionInfo | string | Additional information about the OS version, such as the popular name, code name, or version number. |
| PublicIP | string | Public IP address used by the onboarded machine to connect to the Windows Defender ATP service. This could be the IP address of the machine itself, a NAT device, or a proxy. |
| RegistryDeviceTag | string | Device tag added through the registry. |
| ReportId | long | Event identifier based on a repeating counter. To identify unique events, this column must be used in conjunction with the ComputerName and EventTime columns.. |
| RestrictedDeviceSecurityOperations | string | The response categories that have been turned off on a device if its security operations settings is set to restricted. If the device's security operations settings is set to full operations, the value is null. |
| SensorHealthState | string | Indicates health of the device's EDR sensor, if onboarded to Microsoft Defender For Endpoint. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the event was recorded by the MDE agent on the endpoint. |
| Type | string | The name of the table |
| Vendor | string | Name of the product vendor or manufacturer, only available if device discovery finds enough information about this attribute. |

## Solutions (5)

This table is used by the following solutions:

- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (5)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Terminated employee exfiltration to USB drive](../content/microsoft-business-applications-dataverse-terminated-employee-exfiltration-to-usb-drive-c5e75cb6-cea0-49c2-a998-da414035aac1-627b05d7.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AV detections related to SpringShell Vulnerability](../content/microsoft-defender-xdr-av-detections-related-to-springshell-vulnerability-3bd33158-3f0b-47e3-a50f-7c20a1b88038-091061ce.md) |  |
| [AV detections related to Tarrask malware](../content/microsoft-defender-xdr-av-detections-related-to-tarrask-malware-1785d372-b9fe-4283-96a6-3a1d83cabfd1-8b612d87.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [[Deprecated] Explicit MFA Deny](../content/microsoft-entra-id-[deprecated]-explicit-mfa-deny-a22740ec-fc1e-4c91-8de6-c29c6450ad00-04320464.md) |  |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AV detections related to Zinc actors](../content/zinc-open-source-av-detections-related-to-zinc-actors-3705158d-e008-49c9-92dd-e538e1549090-62580aab.md) |  |

### Hunting Queries (1)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Dataverse export copied to USB devices](../content/microsoft-business-applications-dataverse-dataverse-export-copied-to-usb-devices-f9658e11-e277-4a65-8f91-2cb94cf7497c-664d805c.md) |  |

### Workbooks (2)

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType in "FileCreated,UsbDriveMounted"`

| Content Item |
|:-------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |

## Selection Criteria Summary (1 criteria, 1 total references)

References by type: 0 connectors, 1 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType in "FileCreated,UsbDriveMounted"` | - | 1 | - | - | **1** |
| **Total** | **0** | **1** | **0** | **0** | **1** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `FileCreated` | - | 1 | - | - | **1** |
| `UsbDriveMounted` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

