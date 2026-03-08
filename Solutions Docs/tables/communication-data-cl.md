# Communication_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (24 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Communication_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| event_count_d | real |
| first_seen_s | string |
| ip_s | string |
| last_seen_s | string |
| local_as_info_s | string |
| local_country_codes_s | string |
| local_ip_s | string |
| local_max_port_d | real |
| local_min_port_d | real |
| local_tags_s | string |
| local_top_services_s | string |
| local_unique_ports_d | real |
| peer_as_info_s | string |
| peer_country_codes_s | string |
| peer_ip_s | string |
| peer_max_port_d | real |
| peer_min_port_d | real |
| peer_tags_s | string |
| peer_top_services_s | string |
| peer_unique_ports_d | real |
| proto_d | real |
| proto_text_s | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Team Cymru Scout](../solutions/team-cymru-scout.md)

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
| [CymruScoutCommunicationsData](../parsers/cymruscoutcommunicationsdata.md) | [Team Cymru Scout](../solutions/team-cymru-scout.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

