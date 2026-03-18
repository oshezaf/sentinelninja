# CrowdStrike_Audit_Events_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (110 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection%5CData%20Connectors%5CCrowdStrikeS3FDR_ccp/CrowdStrike_Audit_Events_CL.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccountDomain | string |  |
| AccountObjectGuid | string |  |
| AccountObjectSid | string |  |
| ActiveDirectoryDepartment | string |  |
| ActiveDirectoryOuDn | string |  |
| AdditionalFields | dynamic |  |
| AddressFamily | string |  |
| AgentLoadFlags | string |  |
| aid | string |  |
| aip | string |  |
| AttemptNumber | long |  |
| AuthenticationId | string |  |
| BluetoothDeviceAddress | string |  |
| BluetoothDeviceAddressType | string |  |
| BluetoothDeviceType | string |  |
| BoundingLimitCount | long |  |
| BoundingLimitDuration | string |  |
| ChannelDiffStatusList | string |  |
| cid | string |  |
| ClientComputerName | string |  |
| CloudErrorCode | string |  |
| CloudRequestId | string |  |
| CommandLine | string |  |
| ComputerName | string |  |
| ConfigBuild | string |  |
| ConfigStateData | string |  |
| ConfigStateHash | string |  |
| ContextProcessId | string |  |
| ContextThreadId | string |  |
| ContextTimeStamp | real |  |
| CrowdStrikeId | string |  |
| DesiredAccess | string |  |
| DeviceDescriptorSetHash | string |  |
| DeviceInstanceId | string |  |
| DeviceManufacturer | string |  |
| DeviceProduct | string |  |
| DeviceProductId | string |  |
| DeviceSerialNumber | string |  |
| DeviceTimeStamp | real |  |
| DeviceUserAuthenticationId | string |  |
| DeviceUserSid | string |  |
| DeviceVendorId | string |  |
| DeviceVersion | string |  |
| DomainName | string |  |
| EffectiveTransmissionClass | string |  |
| Entitlements | string |  |
| EnvironmentVariableName | string |  |
| EnvironmentVariableValue | string |  |
| ErrorCode | string |  |
| ErrorText | string |  |
| event_platform | string |  |
| event_simpleName | string |  |
| EventOrigin | string |  |
| FalconServiceState | string |  |
| FileVaultIsEnabled | bool |  |
| FirewallOption | string |  |
| FirewallOptionNumericValue | string |  |
| FirewallOptionStringValue | string |  |
| FirewallProfile | string |  |
| FirewallRule | string |  |
| FirewallRuleId | string |  |
| GID | string |  |
| ImageFileName | string |  |
| IntelTDTEnabled | string |  |
| InterfaceGuid | string |  |
| InterfaceVersion | string |  |
| IOServiceClass | string |  |
| IOServiceName | string |  |
| IOServicePath | string |  |
| IOServiceProperties | string |  |
| LfoUploadFlags | string |  |
| LocalSession | string |  |
| name | string |  |
| OciContainerId | string |  |
| Protocol | string |  |
| ProvisioningDuration | string |  |
| RemoteAddressIP4 | string |  |
| RemoteAddressIP6 | string |  |
| RpcClientProcessId | string |  |
| RpcClientThreadId | string |  |
| RpcNestingLevel | string |  |
| RpcOpNum | string |  |
| SamAccountName | string |  |
| SessionId | string |  |
| SHA256HashData | string |  |
| ShareAccess | string |  |
| ShareData | string |  |
| ShareMaxCount | long |  |
| ShareName | string |  |
| SharePath | string |  |
| ShareRemark | string |  |
| Size | string |  |
| SmbClientName | string |  |
| SmbShareName | string |  |
| SourceFileName | string |  |
| Status | string |  |
| Tags | string |  |
| TargetFileName | string |  |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| timestamp | long |  |
| TokenType | string |  |
| TotalCount | long |  |
| TreeId | string |  |
| UID | string |  |
| UnixMode | string |  |
| UploadId | string |  |
| UserName | string |  |
| VolumeDriveLetter | string |  |
| VolumeName | string |  |
| VolumeSnapshotName | string |  |

## Solutions (1)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

