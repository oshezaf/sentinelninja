# Rubrik_Anomaly_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (20 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Rubrik_Anomaly_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| class_s | string |
| Computer | string |
| custom_details_clusterId_g | string |
| custom_details_id_g | string |
| custom_details_objectId_g | string |
| custom_details_objectName_s | string |
| custom_details_objectType_s | string |
| custom_details_status_s | string |
| custom_details_type_s | string |
| ManagementGroupName | string |
| MG | string |
| RawData | string |
| severity_s | string |
| source_s | string |
| SourceSystem | string |
| summary_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [RubrikSecurityCloud](../solutions/rubriksecuritycloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Rubrik Security Cloud data connector](../connectors/rubriksecuritycloudazurefunctions.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [RubrikSecurityCloud](../solutions/rubriksecuritycloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Rubrik Critical Anomaly](../content/rubriksecuritycloud-rubrik-critical-anomaly-54c70d21-696f-4f03-9238-9d7118d079fe-12070b5e.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

