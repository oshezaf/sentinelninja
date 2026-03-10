# CrowdStrike_Auth_Events_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Ingestion API Supported** | ✓ Yes |

## Schema (62 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CrowdStrike_Auth_Events_CL.json)

| Column Name | Type |
|:------------|:-----|
| AdditionalFields | dynamic |
| aid | string |
| aip | string |
| AuthenticationId | string |
| AuthenticationIdMac | string |
| AuthenticationPackage | string |
| AuthenticationUuid | string |
| AuthenticationUuidAsString | string |
| BoundingLimitCount | long |
| BoundingLimitDuration | string |
| cid | string |
| ClientComputerName | string |
| ConfigBuild | string |
| ConfigStateHash | string |
| ConfigStateHashA1 | string |
| ContextProcessId | string |
| ContextThreadId | string |
| ContextTimeStamp | real |
| CrowdStrikeId | string |
| EffectiveTransmissionClass | string |
| EnabledPrivilegesBitmask | string |
| Entitlements | string |
| EtwRawProcessId | string |
| EtwRawThreadId | long |
| event_platform | string |
| event_simpleName | string |
| EventOrigin | string |
| LinkedAuthenticationId | string |
| LocalSession | string |
| LoginSessionId | string |
| LogoffTime | real |
| LogonDomain | string |
| LogonId | string |
| LogonServer | string |
| LogonTime | real |
| LogonType | string |
| name | string |
| OciContainerId | string |
| PasswordLastSet | string |
| PrivilegesBitmask | string |
| RawProcessId | string |
| RemoteAccount | string |
| RemoteAddressIP4 | string |
| RemoteAddressIP6 | string |
| ResendToCloud | string |
| SessionId | string |
| Status | string |
| SubStatus | string |
| TargetProcessId | string |
| TimeGenerated | datetime |
| timestamp | long |
| TreeId | string |
| UID | string |
| UserCanonical | string |
| UserFlags | string |
| UserGroupsBitmask | string |
| UserIsAdmin | string |
| UserLogoffType | string |
| UserLogonFlags | string |
| UserName | string |
| UserPrincipal | string |
| UserSid | string |

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

