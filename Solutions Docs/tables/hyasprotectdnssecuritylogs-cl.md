# HYASProtectDnsSecurityLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (57 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/HYASProtectDnsSecurityLogs_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| ARecord_s | string |
| ClientID_g | string |
| ClientIP_s | string |
| ClientName_s | string |
| CName2TLD_s | string |
| CName_s | string |
| CNameTLD_s | string |
| Computer | string |
| DateTime_s | string |
| DeviceName_s | string |
| Domain2TLD_s | string |
| Domain_s | string |
| DomainAge_d | real |
| DomainCategory_s | string |
| DomainCreationDate_t | datetime |
| DomainExpiresDate_t | datetime |
| DomainTLD_s | string |
| DomainUpdatedDate_t | datetime |
| DomainVerdict_s | string |
| FQDNVerdict_s | string |
| IPVerdict_s | string |
| LogID_s | string |
| ManagementGroupName | string |
| MG | string |
| Nameserver2TLD_s | string |
| Nameserver_s | string |
| NameserverCountryISOCode_s | string |
| NameserverCountryName_s | string |
| NameserverIP_s | string |
| NameserverTLD_s | string |
| NameserverVerdict_s | string |
| PolicyID_d | real |
| PolicyName_s | string |
| ProcessName_s | string |
| QueryType_s | string |
| RawData | string |
| ReasonLists_s | string |
| ReasonType_s | string |
| Registrar_s | string |
| RegistrarVerdict_s | string |
| Reputation_d | real |
| ResolverMode_s | string |
| ResponseCode_d | real |
| ResponseDescription_s | string |
| ResponseName_s | string |
| SourceSystem | string |
| Tags_s | string |
| TenantId | string |
| ThreatLevel_s | string |
| TimeGenerated | datetime |
| TLDVerdict_s | string |
| TTL_d | real |
| Type | string |
| Verdict_s | string |
| VerdictSource_s | string |
| VerdictStatus_s | string |

## Solutions (1)

This table is used by the following solutions:

- [HYAS Protect](../solutions/hyas-protect.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [HYAS Protect](../connectors/hyasprotect.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [HYASProtectDNSActivity](../parsers/hyasprotectdnsactivity.md) | [HYAS Protect](../solutions/hyas-protect.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

