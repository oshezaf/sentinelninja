# DisruptionAndResponseEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

[Automatic attack disruption](automatic-attack-disruption.md) events in Microsoft Defender XDR

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/disruptionandresponseevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-disruptionandresponseevents-table) |

## Schema (42 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/disruptionandresponseevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| ActionType | string | Type of disruption action taken |
| AuthenticationProtocol | string | Authentication protocol that the compromised user used to sign in |
| CompromisedAccountCount | int | Number of compromised accounts that are part of the policy |
| DataSources | string | Products or services that provided information for the event |
| DeviceId | string | Unique identifier for the device that reported the event |
| DeviceName | string | Name of the device that reported the event |
| DomainName | string | Domain name that the device that reported the event is joined to |
| FileName | string | Name of the file that the attacker attempted to access |
| InitiatingProcessFileName | string | Name of the process that triggered the block action |
| InitiatingProcessId | int | Process ID (PID) of the process that triggered that block action |
| InterfaceFriendlyName | string | Friendly name of the interface represented by the interface UUID |
| InterfaceUuid | string | Unique identifier (UUID) for the RPC interface that the attacker attempted to access |
| IpAddress | string | IP address that the attacker attempted to access |
| IsPolicyOn | bool | Indicates the current state of the policy on the device at the time of the disruption event |
| LogonId | long | Identifier for a logon session |
| LogonType | string | Type of logon session the user attempted |
| PolicyHash | string | Unique hash of the policy |
| PolicyId | string | Unique identifier for the policy |
| PolicyName | string | Name of the policy |
| PolicyVersion | string | Version of the policy |
| Port | string | Port that the attacker attempted to access |
| ReportType | string | The nature and impact level of the reported event |
| Service | string | Name of the service the attacker attempted to use |
| SessionId | long | Unique number assigned to a user by a website's server for the duration of the visit or session |
| ShareName | string | Name of the share location that the attacker attempted to access |
| SourceDeviceId | string | Unique identifier for the device that the attack originated from |
| SourceDeviceName | string | Host name of the device where the attack originated from |
| SourceDomainName | string | Domain name of the device where the attack originated from |
| SourceIpAddress | string | IP address where the attacker communication originated from |
| SourcePort | int | Port where the attacker communication originated from |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| SourceUserDomainName | string | The domain name of the account conducting the malicious activity |
| SourceUserName | string | The user name of the account conducting the malicious activity |
| SourceUserSid | string | The security identifier of the account conducting the malicious activity |
| TargetDeviceId | string | Unique identifier for the device that was targeted or attacked |
| TargetDeviceName | string | Name of the device that was targeted or attacked |
| TargetDomainName | string | Domain name of the device that was targeted or attacked |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the event was recorded by the MDE agent on the endpoint. |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

