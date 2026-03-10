# Illumio_Flow_Events_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (36 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Illumio_Flow_Events_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| class | string |
| code | int |
| ddms | int |
| dir | string |
| dst_dbi | int |
| dst_dbo | int |
| dst_hostname | string |
| dst_href | string |
| dst_ip | string |
| dst_labels | dynamic |
| dst_port | int |
| dst_tbi | int |
| dst_tbo | int |
| flow_count | int |
| icmp_type | int |
| interval_sec | int |
| network | string |
| org_id | int |
| pce_fqdn | string |
| pd | int |
| pd_qualifier | int |
| pn | string |
| proto | int |
| sn | string |
| src_hostname | string |
| src_href | string |
| src_ip | string |
| src_labels | dynamic |
| state | string |
| tdms | int |
| TenantId | string |
| TimeGenerated | datetime |
| type | int |
| un | string |
| version | int |

## Solutions (2)

This table is used by the following solutions:

- [IllumioSaaS](../solutions/illumiosaas.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Illumio SaaS](../connectors/illumiosaasdataconnector.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [IllumioSaaS](../solutions/illumiosaas.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [IllumioFlowData](../content/illumiosaas-illumioflowdata-b836f8b9.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimNetworkSessionIllumioSaaSCore](../asim/asimnetworksessionillumiosaascore.md) | NetworkSession | Illumio SaaS Core |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

