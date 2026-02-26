# NXLog_DNS_Server_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (69 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NXLog_DNS_Server_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| _ResourceId | string |
| AA_s | string |
| AccountName_s | string |
| AccountType_s | string |
| AD_s | string |
| AdditionalInfo_s | string |
| BufferSize_s | string |
| CacheScope_s | string |
| ChannelID_d | real |
| Computer | string |
| Destination_s | string |
| DNS_LogType_s | string |
| DNSSEC_s | string |
| DNSSeverType_s | string |
| Domain_s | string |
| ElapsedTime_s | string |
| EventID_d | real |
| EventReceivedTime_t | datetime |
| EventTime_t | datetime |
| EventType_s | string |
| ExecutionProcessID_d | real |
| ExecutionThreadID_d | real |
| FilePath_s | string |
| Flags_s | string |
| GUID_g | string |
| HostIP_s | string |
| Hostname_s | string |
| InterfaceIP_s | string |
| Keywords_s | string |
| ManagementGroupName | string |
| MG | string |
| NAME_s | string |
| OpcodeValue_d | real |
| PacketData_s | string |
| PolicyName_s | string |
| Port_s | string |
| ProviderGuid_g | string |
| QNAME_s | string |
| QTYPE_s | string |
| QXID_s | string |
| RawData | string |
| RCODE_s | string |
| RD_s | string |
| RDATA_s | string |
| Reason_s | string |
| RecursionDepth_s | string |
| RecursionScope_s | string |
| Scope_s | string |
| Severity_s | string |
| SeverityValue_d | real |
| Source_s | string |
| SourceModuleName_s | string |
| SourceModuleType_s | string |
| SourceName_s | string |
| SourceSystem | string |
| TaskValue_d | real |
| TCP_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| TTL_s | string |
| Type | string |
| Type_s | string |
| UserID_s | string |
| Version_d | real |
| VirtualizationID_s | string |
| XID_s | string |
| Zone_s | string |
| ZoneScope_s | string |

## Solutions (2)

This table is used by the following solutions:

- [NXLogDNSLogs](../solutions/nxlogdnslogs.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [NXLog DNS Logs](../connectors/nxlogdnslogs.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimDnsMicrosoftNXlog](../asim/asimdnsmicrosoftnxlog.md) | Dns | MS DNS Events |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

