# NexposeInsightVMCloud_assets_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NexposeInsightVMCloud_assets_CL.json)

| Column Name | Type |
|:------------|:-----|
| assessed_for_policies_b | bool |
| assessed_for_vulnerabilities_b | bool |
| credential_assessments_s | string |
| critical_vulnerabilities_d | real |
| EventProduct | string |
| EventVendor | string |
| exploits_d | real |
| host_name_s | string |
| id_s | string |
| ip_s | string |
| last_assessed_for_vulnerabilities_t | datetime |
| last_scan_end_t | datetime |
| last_scan_start_t | datetime |
| mac_s | string |
| malware_kits_d | real |
| moderate_vulnerabilities_d | real |
| os_architecture_s | string |
| os_description_s | string |
| os_family_s | string |
| os_name_s | string |
| os_system_name_s | string |
| os_type_s | string |
| os_vendor_s | string |
| os_version_s | string |
| risk_score_d | real |
| same_s | string |
| severe_vulnerabilities_d | real |
| TimeGenerated | datetime |
| total_vulnerabilities_d | real |
| unique_identifiers_s | string |

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
| [InsightVMAssets](../parsers/insightvmassets.md) | [Rapid7InsightVM](../solutions/rapid7insightvm.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

