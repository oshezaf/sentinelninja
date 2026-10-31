# SLP_Feeds_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (58 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SilentPush%5CData%20Connectors%5CSilentPushFeeds/Connector_SilentPush_Feeds_table.json)

| Column Name | Type |
|:------------|:-----|
| asn | string |
| asn_allocation_age | string |
| asn_reputation_score | string |
| asn_takedown_reputation_score | string |
| asname | string |
| benign_info_known_benign | string |
| datasource | string |
| density | string |
| domain | string |
| domain_urls_results_summary_is_dynamic_domain | string |
| domain_urls_results_summary_is_url_shortener | string |
| domain_urls_results_summary_tranco_rank | string |
| domain_urls_results_summary_tranco_top10k | string |
| domaininfo_age | string |
| domaininfo_registrar | string |
| domaininfo_whois_age | string |
| domaininfo_whois_created_date | string |
| domaininfo_zone | string |
| feed | string |
| feed_category | string |
| feed_frequency | string |
| feed_scope | string |
| host | string |
| indicator | string |
| indicator_hash | string |
| IndicatorType | string |
| ip_diversity_asn_diversity | string |
| ip_diversity_ip_diversity_all | string |
| ip_diversity_ip_diversity_groups | string |
| ip_flags_is_proxy | string |
| ip_flags_is_vpn | string |
| ip_flags_proxy_tags | string |
| ip_flags_vpn_tags | string |
| ip_is_dsl_dynamic | string |
| ip_is_tor_exit_node | string |
| ip_location_continent_code | string |
| ip_location_country_code | string |
| ip_ptr | string |
| ip_reputation_score | string |
| ipv4 | string |
| last_seen_on | string |
| listing_score | string |
| nameservers_density | string |
| nameservers_nameserver | string |
| nameservers_tags | string |
| ns_reputation_is_parked | string |
| ns_reputation_ns_reputation_max | string |
| nschanges_results_summary_ns_entropy_score | string |
| sinkhole_info_known_sinkhole_ip | string |
| sp_risk_score | string |
| subdomain | string |
| subnet | string |
| subnet_allocation_age | string |
| subnet_reputation_score | string |
| tags | string |
| TimeGenerated | datetime |
| uuid | string |
| vendor | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [SilentPush](../solutions/silentpush.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SilentPush Feeds](../connectors/silentpushfeedsconnectordefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

