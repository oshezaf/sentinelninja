# SquidProxy_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (26 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SquidProxy_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| _ResourceId_s | string |
| Bytes_s | string |
| Computer | string |
| ContentType_s | string |
| Description_s | string |
| Duration_s | string |
| EventTime_UTC__s | string |
| ManagementGroupName | string |
| MG | string |
| MG_s | string |
| PeerHost | string |
| PeerStatus_s | string |
| RawData | string |
| RequstMethod_s | string |
| ResultCode | string |
| SourceSystem | string |
| SrcIpAddr_s | string |
| StatusCode_s | string |
| TenantId | string |
| TenantId_s | string |
| TimeGenerated | datetime |
| Type | string |
| Type_s | string |
| Url_s | string |
| Username_s | string |

## Solutions (3)

This table is used by the following solutions:

- [CustomLogsAma](../solutions/customlogsama.md)
- [SquidProxy](../solutions/squidproxy.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Custom logs via AMA](../connectors/customlogsviaama.md) |  |
| [[Deprecated] Squid Proxy](../connectors/squidproxy.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimWebSessionSquidProxy](../asim/asimwebsessionsquidproxy.md) | WebSession | Squid Proxy |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [SquidProxy](../parsers/squidproxy.md) | [SquidProxy](../solutions/squidproxy.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

