# VMwareWorkspaceOneDevices_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | VMware *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (30 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Workspace%20ONE%5CData%20Connectors%5CVMwareWorkspaceOneConnector_CCF/table_VMwareWorkspaceOneDevices.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AssetNumber | string | Organization-assigned asset tag. |
| AvailablePhysicalMemory | long | Available physical memory (RAM) as reported by the API. |
| BatteryLevel | string | Battery charge percentage at last check-in. |
| ComplianceStatus | string | Policy compliance state: Compliant, NonCompliant, Unknown. |
| CompromisedStatus | bool | True if the device is detected as compromised or jailbroken. |
| DataProtectionStatus | int | Encryption / data protection policy status code. |
| DeviceFriendlyName | string | User-assigned friendly name for the device. |
| DeviceId | string | Workspace ONE internal numeric device ID. |
| DeviceUuid | string | Workspace ONE UUID for the device. |
| EnrollmentStatus | string | Enrollment state: Enrolled, Unenrolled, EnterpriseWipePending. |
| Imei | string | IMEI number for cellular-capable devices. |
| IsDeviceDNDEnabled | bool | True if Do-Not-Disturb mode is currently enabled. |
| IsDeviceLocatorEnabled | bool | True if Find My Device / Device Locator is enabled. |
| IsRoaming | bool | True if the device is currently in roaming mode. |
| LastComplianceCheck | datetime | Most recent compliance policy evaluation timestamp. |
| LastEnrolledOn | datetime | Date and time of the device's initial enrollment. |
| LastSeen | datetime | Date and time of the device's last check-in with Workspace ONE. |
| LocationGroupName | string | Organization Group (Location Group) display name. |
| MacAddress | string | Primary MAC address of the device. |
| Model | string | Device model name (e.g., iPhone 14 Pro, Samsung Galaxy S23). |
| OperatingSystem | string | Operating system version string. |
| OwnerName | string | Workspace ONE username of the device owner. |
| Ownership | string | Device ownership type: C (Corporate), E (Employee), S (Shared). |
| PhoneNumber | string | Device phone number (cellular devices only). |
| Platform | string | Device platform (Apple, Android, WindowsPC, macOS). |
| SerialNumber | string | Device hardware serial number. |
| TimeGenerated | datetime | UTC timestamp when the record was ingested into Microsoft Sentinel. |
| TotalPhysicalMemory | long | Total physical memory (RAM) as reported by the API. |
| UserEmailAddress | string | Email address of the enrolled user. |
| WifiSsid | string | Wi-Fi SSID the device was connected to at last check-in. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [VMware Workspace ONE](../solutions/vmware-workspace-one.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [VMware Workspace ONE (via Codeless Connector Framework)](../connectors/vmwareworkspaceoneconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

