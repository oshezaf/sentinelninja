# HackerViewLog_Azure_1_CL

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
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (34 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/HackerViewLog_Azure_1_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| assigned_to_s | string |
| cwe_s | string |
| detail_s | string |
| fixing_effort_s | string |
| hackerview_link_s | string |
| issue_category_s | string |
| issue_name_s | string |
| issue_type_s | string |
| ManagementGroupName | string |
| meta_asset_s | string |
| meta_asset_type_s | string |
| meta_brand_s | string |
| meta_business_unit_s | string |
| meta_discovery_source_s | string |
| meta_domain_s | string |
| meta_environments_s | string |
| meta_first_seen_s | string |
| meta_host_s | string |
| meta_host_type_s | string |
| meta_hosts_s | string |
| meta_ip_s | string |
| meta_ip_type_s | string |
| meta_last_seen_s | string |
| meta_resolved_ip_s | string |
| meta_technologies_s | string |
| meta_ticket_id_s | string |
| MG | string |
| potential_attack_type_s | string |
| potential_impact_s | string |
| progress_status_s | string |
| severity_s | string |
| status_s | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [CTM360](../solutions/ctm360.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [HackerView Intergration](../connectors/hvpollingidazurefunctions.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [CTM360](../solutions/ctm360.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [HackerView - Any Issue Detected](../content/ctm360-hackerview-any-issue-detected-abe1a663-d00d-482e-aa68-9394622ae03e-0626c64c.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [HackerViewLog](../parsers/hackerviewlog.md) | [CTM360](../solutions/ctm360.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

