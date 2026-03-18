# Rubrik_Events_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (27 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Rubrik_Events_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| class_s | string |
| Computer | string |
| custom_details_auditUserId_s | string |
| custom_details_auditUserName_s | string |
| custom_details_clusterId_g | string |
| custom_details_clusterName_s | string |
| custom_details_eventName_s | string |
| custom_details_id_g | string |
| custom_details_location_s | string |
| custom_details_objectId_g | string |
| custom_details_objectId_s | string |
| custom_details_objectName_s | string |
| custom_details_objectType_s | string |
| custom_details_seriesId_g | string |
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
| timestamp_s | datetime |

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

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Rubrik Threat Monitoring](../content/rubriksecuritycloud-rubrik-threat-monitoring-0083cbc4-776e-42ca-8694-6950fd605df9-8e319268.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

