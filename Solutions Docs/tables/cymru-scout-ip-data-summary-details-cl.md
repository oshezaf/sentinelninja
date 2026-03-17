# Cymru_Scout_IP_Data_Summary_Details_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Cymru_Scout_IP_Data_Summary_Details_CL.json)

| Column Name | Type |
|:------------|:-----|
| bgp_asn | real |
| bgp_asname | string |
| end_date | string |
| fingerprints | dynamic |
| geo_ip_cc | string |
| insights | dynamic |
| insights_insights | dynamic |
| insights_overall_rating | string |
| insights_total | real |
| ip | string |
| open_ports | dynamic |
| open_ports_total | real |
| open_ports_unique_ports | real |
| pdns | dynamic |
| pdns_total | real |
| reverse_hostnames | dynamic |
| start_date | string |
| tag_timeline | dynamic |
| tag_timeline_data | dynamic |
| tags | dynamic |
| tags_id | string |
| tags_name | string |
| TimeGenerated | datetime |
| total | real |
| Type | string |
| whois | dynamic |
| whois_as_name | string |
| whois_asn | real |
| whois_net_name | string |
| whois_org_name | string |

## Solutions (1)

This table is used by the following solutions:

- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Team Cymru Scout Data Connector](../connectors/teamcymruscout.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CymruScoutIP](../parsers/cymruscoutip.md) | [Team Cymru Scout](../solutions/team-cymru-scout.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

