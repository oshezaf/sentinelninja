# BHEAttackPathsTimelineData_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BHEAttackPathsTimelineData_CL.json)

| Column Name | Type |
|:------------|:-----|
| CompositeRisk | string |
| created_at | datetime |
| deleted_at | dynamic |
| domain_name | string |
| DomainSID | string |
| ExposureCount | int |
| Finding | string |
| FindingCount | int |
| id | int |
| ImpactCount | int |
| ImpactedAssetCount | int |
| path_title | string |
| tenant_url | string |
| TimeGenerated | datetime |
| updated_at | datetime |

## Solutions (1)

This table is used by the following solutions:

- [BloodHound Enterprise](../solutions/bloodhound-enterprise.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [BloodHound Enterprise Data Connector (using Azure Functions)](../connectors/bloodhoundenterprise.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [BloodHound Enterprise](../solutions/bloodhound-enterprise.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [BloodHoundEnterpriseAttackPathDetails](../content/bloodhound-enterprise-bloodhoundenterpriseattackpathdetails-abb1936c.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

