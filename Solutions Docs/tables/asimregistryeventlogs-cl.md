# ASimRegistryEventLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (60 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ASimRegistryEventLogs_CL.json)

| Column Name | Type |
|:------------|:-----|
| ActingProcessGuid | string |
| ActingProcessId | string |
| ActingProcessName | string |
| ActorScope | string |
| ActorScopeId | string |
| ActorSessionId | string |
| ActorUserId | string |
| ActorUserIdType | string |
| ActorUsername | string |
| ActorUsernameType | string |
| AdditionalFields | dynamic |
| DvcAction | string |
| DvcDescription | string |
| DvcDomain | string |
| DvcDomainType | string |
| DvcFQDN | string |
| DvcHostname | string |
| DvcId | string |
| DvcIdType | string |
| DvcInterface | string |
| DvcIpAddr | string |
| DvcMacAddr | string |
| DvcOriginalAction | string |
| DvcOs | string |
| DvcOsVersion | string |
| DvcScope | string |
| DvcScopeId | string |
| DvcZone | string |
| EventCount | int |
| EventEndTime | datetime |
| EventMessage | string |
| EventOriginalResultDetails | string |
| EventOriginalSeverity | string |
| EventOriginalSubType | string |
| EventOriginalType | string |
| EventOriginalUid | string |
| EventOwner | string |
| EventProduct | string |
| EventProductVersion | string |
| EventReportUrl | string |
| EventResult | string |
| EventResultDetails | string |
| EventSchemaVersion | string |
| EventSeverity | string |
| EventStartTime | datetime |
| EventSubType | string |
| EventType | string |
| EventVendor | string |
| ParentProcessGuid | string |
| ParentProcessId | string |
| ParentProcessName | string |
| RegistryKey | string |
| RegistryPreviousKey | string |
| RegistryPreviousValue | string |
| RegistryPreviousValueData | string |
| RegistryPreviousValueType | string |
| RegistryValue | string |
| RegistryValueData | string |
| RegistryValueType | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrikeReplicatorV2](../parsers/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

