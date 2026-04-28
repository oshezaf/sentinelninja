# CarbonBlackAuditLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (27 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CarbonBlackAuditLogs_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| _ResourceId | string |
| clientIp | string |
| clientIp_s | string |
| Computer | string |
| description | string |
| description_s | string |
| eventId | string |
| eventId_g | string |
| eventTime | real |
| eventTime_d | real |
| flagged | bool |
| flagged_b | bool |
| loginName_s | string |
| ManagementGroupName | string |
| MG | string |
| orgName | string |
| orgName_s | string |
| RawData | string |
| requestUrl | string |
| requestUrl_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| verbose | bool |
| verbose_b | bool |

## Solutions (1)

This table is used by the following solutions:

- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] VMware Carbon Black Cloud (using Azure Function)](../connectors/vmwarecarbonblack.md) |  |

---

## Parsers Using This Table (2)

### ASIM Parsers (2)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuditEventVMwareCarbonBlackCloud](../asim/asimauditeventvmwarecarbonblackcloud.md) | AuditEvent | VMware Carbon Black Cloud |  |
| [ASimAuthenticationVMwareCarbonBlackCloud](../asim/asimauthenticationvmwarecarbonblackcloud.md) | Authentication | VMware Carbon Black Cloud |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

