# NexposeInsightVMCloud_vulnerabilities_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (49 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NexposeInsightVMCloud_vulnerabilities_CL.json)

| Column Name | Type |
|:------------|:-----|
| asset_id_s | string |
| EventProduct | string |
| EventVendor | string |
| host_name_s | string |
| ip_s | string |
| TimeGenerated | datetime |
| vuln_details_added_t | datetime |
| vuln_details_categories_s | string |
| vuln_details_cves_s | string |
| vuln_details_cvss_v2_access_complexity_s | string |
| vuln_details_cvss_v2_access_vector_s | string |
| vuln_details_cvss_v2_authentication_s | string |
| vuln_details_cvss_v2_availability_impact_s | string |
| vuln_details_cvss_v2_confidentiality_impact_s | string |
| vuln_details_cvss_v2_exploit_score_d | real |
| vuln_details_cvss_v2_impact_score_d | real |
| vuln_details_cvss_v2_integrity_impact_s | string |
| vuln_details_cvss_v2_score_d | real |
| vuln_details_cvss_v2_vector_s | string |
| vuln_details_cvss_v3_attack_complexity_s | string |
| vuln_details_cvss_v3_attack_vector_s | string |
| vuln_details_cvss_v3_availability_impact_s | string |
| vuln_details_cvss_v3_confidentiality_impact_s | string |
| vuln_details_cvss_v3_exploit_score_d | real |
| vuln_details_cvss_v3_impact_score_d | real |
| vuln_details_cvss_v3_integrity_impact_s | string |
| vuln_details_cvss_v3_privileges_required_s | string |
| vuln_details_cvss_v3_scope_s | string |
| vuln_details_cvss_v3_score_d | real |
| vuln_details_cvss_v3_user_interaction_s | string |
| vuln_details_cvss_v3_vector_s | string |
| vuln_details_denial_of_service_b | bool |
| vuln_details_description_s | string |
| vuln_details_exploits_s | string |
| vuln_details_id_s | string |
| vuln_details_links_s | string |
| vuln_details_malware_kits_s | string |
| vuln_details_modified_t | datetime |
| vuln_details_pci_cvss_score_d | real |
| vuln_details_pci_fail_b | bool |
| vuln_details_pci_severity_score_d | real |
| vuln_details_pci_special_notes_s | string |
| vuln_details_pci_status_s | string |
| vuln_details_published_t | datetime |
| vuln_details_references_s | string |
| vuln_details_risk_score_d | real |
| vuln_details_severity_s | string |
| vuln_details_severity_score_d | real |
| vuln_details_title_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Rapid7InsightVM](../solutions/rapid7insightvm.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Rapid7 Insight Platform Vulnerability Management Reports](../connectors/insightvmcloudapi.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [InsightVMVulnerabilities](../parsers/insightvmvulnerabilities.md) | [Rapid7InsightVM](../solutions/rapid7insightvm.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

