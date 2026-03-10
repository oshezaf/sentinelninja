# Cymru_Scout_IP_Data_Details_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (78 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Cymru_Scout_IP_Data_Details_CL.json)

| Column Name | Type |
|:------------|:-----|
| communications_event_count | real |
| end_date | string |
| fingerprints_event_count | real |
| identity | dynamic |
| identity_as_name | string |
| identity_asn | real |
| identity_net_name | string |
| identity_org_name | string |
| identity_reverse_hostNames | dynamic |
| identity_tags | dynamic |
| ip | string |
| open_ports_event_count | real |
| open_ports_unique_ports | real |
| pdns_event_count | real |
| size | real |
| start_date | string |
| TimeGenerated | datetime |
| Type | string |
| usage | dynamic |
| usage_ai_insights_usage_query_limit | real |
| usage_ai_insights_usage_remaining_queries | real |
| usage_ai_insights_usage_used_queries | real |
| usage_foundation_api_usage_query_limit | real |
| usage_foundation_api_usage_remaining_queries | real |
| usage_foundation_api_usage_used_queries | real |
| usage_query_limit | real |
| usage_remaining_queries | real |
| usage_used_queries | real |
| whois | dynamic |
| whois_about_contact_address | string |
| whois_about_contact_city | string |
| whois_about_contact_country | string |
| whois_about_contact_email | string |
| whois_about_contact_person | string |
| whois_about_contact_phone | string |
| whois_about_contact_role | string |
| whois_abuse_contact_id | string |
| whois_address | string |
| whois_admin_contact_address | string |
| whois_admin_contact_city | string |
| whois_admin_contact_country | string |
| whois_admin_contact_email | string |
| whois_admin_contact_id | string |
| whois_admin_contact_person | string |
| whois_admin_contact_phone | string |
| whois_admin_contact_role | string |
| whois_as_name | string |
| whois_asn | real |
| whois_bgp_asn | real |
| whois_bgp_asn_name | string |
| whois_cc | string |
| whois_cidr | string |
| whois_city | string |
| whois_description | string |
| whois_mnt_by_email | string |
| whois_mnt_lower_email | string |
| whois_mnt_router_email | string |
| whois_modified | string |
| whois_net_handle | string |
| whois_net_name | string |
| whois_net_name1 | string |
| whois_org_address | string |
| whois_org_city | string |
| whois_org_country | string |
| whois_org_email | string |
| whois_org_id | string |
| whois_org_name | string |
| whois_org_name1 | string |
| whois_org_phone | string |
| whois_tech_contact_address | string |
| whois_tech_contact_city | string |
| whois_tech_contact_country | string |
| whois_tech_contact_email | string |
| whois_tech_contact_id | string |
| whois_tech_contact_person | string |
| whois_tech_contact_phone | string |
| whois_tech_contact_role | string |
| x509_event_count | real |

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

