# CriblAudit_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (20 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CriblAudit_CL.json)

| Column Name | Type |
|:------------|:-----|
| _raw_s | string |
| action_s | string |
| cribl_breaker_s | string |
| data_source_s | string |
| dataset_s | string |
| deployment_s | string |
| fleet_s | string |
| group_s | string |
| id_s | string |
| instance_s | string |
| requestId_s | string |
| saas_domain_s | string |
| service_s | string |
| source_s | string |
| sourceType_s | string |
| tenantId_s | string |
| TimeGenerated_i | datetime |
| Type_s | string |
| user_s | string |
| workspace_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Cribl](../solutions/cribl.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cribl](../connectors/cribl.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CriblWorkbook](../content/github-only-criblworkbook-923de34f.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CriblAudit](../parsers/criblaudit.md) | [Cribl](../solutions/cribl.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

