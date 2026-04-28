# Censys_Web_Property_Vuln_CL

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
- [Content Items](#content-items-using-this-table)

## Schema (38 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Censys_Web_Property_Vuln_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| confidence_d | real |
| evidence_s | string |
| hostname_s | string |
| id_s | string |
| kev_s | string |
| ManagementGroupName | string |
| metrics_cvss_v31_components_attack_complexity_s | string |
| metrics_cvss_v31_components_attack_vector_s | string |
| metrics_cvss_v31_components_availability_s | string |
| metrics_cvss_v31_components_confidentiality_s | string |
| metrics_cvss_v31_components_integrity_s | string |
| metrics_cvss_v31_components_privileges_required_s | string |
| metrics_cvss_v31_components_scope_s | string |
| metrics_cvss_v31_components_user_interaction_s | string |
| metrics_cvss_v31_score_d | real |
| metrics_cvss_v31_vector_s | string |
| metrics_cvss_v40_components_attack_complexity_s | string |
| metrics_cvss_v40_components_attack_requirements_s | string |
| metrics_cvss_v40_components_attack_vector_s | string |
| metrics_cvss_v40_components_privileges_required_s | string |
| metrics_cvss_v40_components_user_interaction_s | string |
| metrics_cvss_v40_score_d | real |
| metrics_cvss_v40_vector_s | string |
| metrics_epss_percentile_d | real |
| metrics_epss_score_d | real |
| MG | string |
| name_s | string |
| port_d | real |
| RawData | string |
| risk_source_s | string |
| severity_s | string |
| source_s | string |
| SourceSystem | string |
| TimeGenerated | datetime |
| Type | string |
| year_d | real |

## Solutions (1)

This table is used by the following solutions:

- [Censys](../solutions/censys.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Censys](../solutions/censys.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Censys](../content/censys-censys-21c23ffd.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

