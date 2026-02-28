# Domain_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (24 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Domain_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| as_info_s | string |
| comms_enrichment_as_info_s | string |
| comms_enrichment_tags_s | string |
| country_codes_s | string |
| end_date_s | string |
| event_count_d | real |
| ip_s | string |
| query_s | string |
| start_date_s | string |
| summary_certs_s | string |
| summary_comms_total_d | real |
| summary_fingerprints_s | string |
| summary_last_seen_s | string |
| summary_open_ports_s | string |
| summary_pdns_s | string |
| summary_service_counts_s | string |
| summary_top_peers_s | string |
| summary_whois_as_name_s | string |
| summary_whois_asn_d | real |
| summary_whois_net_name_s | string |
| summary_whois_org_name_s | string |
| tags_s | string |
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
| [CymruScoutDomainData](../parsers/cymruscoutdomaindata.md) | [Team Cymru Scout](../solutions/team-cymru-scout.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

