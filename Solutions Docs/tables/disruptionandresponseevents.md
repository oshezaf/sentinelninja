# DisruptionAndResponseEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

[Automatic attack disruption](automatic-attack-disruption.md) events in Microsoft Defender XDR

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-disruptionandresponseevents-table) |

## Schema (37 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/disruptionandresponseevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ActionType | string | Type of disruption action takenTip: For more information, seeActionType values. |
| AuthenticationProtocol | string | Authentication protocol that the compromised user used to sign in; possible values: Undefined, NTLM, Kerberos |
| CompromisedAccountCount | integer | Number of compromised accounts that are part of the policy |
| DataSources | string | Products or services that provided information for the event; for example: Microsoft Defender for Endpoint |
| DeviceId | string | Unique identifier for the device that reported the event; the reporting device can be the one that blocked the access, the compromised device itself, or even a different device that is aware of the attack |
| DeviceName | string | Name of the device that reported the event; the reporting device can be the one that blocked the access, the compromised device itself, or even a different device that is aware of the attack |
| DomainName | string | Domain name that the device that reported the event is joined to; the reporting device can be the one that blocked the access, the compromised device itself, or even a different device that is aware of the attack |
| FileName | string | Name of the file that the attacker attempted to access |
| InitiatingProcessFileName | string | Name of the process that triggered the block action, based on the perspective of the reporting device |
| InitiatingProcessId | integer | Process ID (PID) of the process that triggered that block action, based on the perspective of the reporting device |
| InterfaceFriendlyName | string | Friendly name of the interface represented by the interface UUID |
| InterfaceUuid | string | Unique identifier (UUID) for the Remote Procedure Call (RPC) interface that the attacker attempted to access |
| IpAddress | string | IP address that the attacker attempted to access |
| IsPolicyOn | boolean | Indicates the current state of the policy on the device at the time of the disruption event; possible values: true (the policy is on, therefore it was applied or enforced), false (the policy was turned off or revoked from the device) |
| LogonId | long | Identifier for a logon session; this is unique on the same device only between restarts |
| LogonType | string | Type of logon session the user attempted; possible values: interactive, remote interactive (RDP), network, batch job, service |
| PolicyHash | string | Unique hash of the policy |
| PolicyId | string | Unique identifier for the policy |
| PolicyName | string | Name of the policy |
| PolicyVersion | string | Version of the policy |
| Port | string | Port that the attacker attempted to access |
| ReportType | string | The nature and impact level of the reported event; possible values: Prevented (the action, such as a connection or authentication attempt, was fully blocked before execution), Blocked (an active connection or session was forcibly terminated, with partial impact on the device), PolicyUpdated (the client received and possibly applied a new policy) |
| Service | string | Name of the service the attacker attempted to use, if the attacker signed in using Kerberos or NTLM; for example: SMB, HTTP, cifs, SMB, host, ldap, SMB, krbtgt |
| SessionId | long | Unique number assigned to a user by a website's server for the duration of the visit or session |
| ShareName | string | Name of the share location that the attacker attempted to access |
| SourceDeviceId | string | Unique identifier for the device that the attack originated from |
| SourceDeviceName | string | Host name of the device where the attack originated from |
| SourceDomainName | string | Domain name of the device where the attack originated from |
| SourceIpAddress | string | IP address where the attacker communication originated from and was blocked by automatic attack disruption |
| SourcePort | integer | Port where the attacker communication originated from |
| SourceUserDomainName | string | The domain name of the account conducting the malicious activity |
| SourceUserName | string | The user name of the account conducting the malicious activity |
| SourceUserSid | string | The security identifier of the account conducting the malicious activity |
| TargetDeviceId | string | Unique identifier for the device that was targeted or attacked |
| TargetDeviceName | string | Name of the device that was targeted or attacked |
| TargetDomainName | string | Domain name of the device that was targeted or attacked |
| Timestamp | datetime | Date and time when the event was recorded |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

