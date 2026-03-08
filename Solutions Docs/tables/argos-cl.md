# ARGOS_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (25 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ARGOS_CL.json)

| Column Name | Type |
|:------------|:-----|
| auditLog_s | string |
| cloud_s | string |
| Computer | string |
| connectionId_g | guid |
| customerId_s | string |
| exploitable_b | bool |
| id_s | string |
| inventoryId_g | guid |
| inventoryId_s | string |
| itsmTickets_s | string |
| ManagementGroupName | string |
| metadata_id_s | string |
| MG | string |
| name_s | string |
| RawData | string |
| ResourceGroup | string |
| ResourceId | string |
| ruleId_s | string |
| ruleServiceId_s | string |
| status_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| type_s | string |
| url_s | string |

## Solutions (1)

This table is used by the following solutions:

- [ARGOSCloudSecurity](../solutions/argoscloudsecurity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ARGOS Cloud Security](../connectors/argoscloudsecurity.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [ARGOSCloudSecurity](../solutions/argoscloudsecurity.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ARGOS Cloud Security - Exploitable Cloud Resources](../content/argoscloudsecurity-argos-cloud-security-exploitable-cloud-resources-a9bf1b8c-c761-4840-b9a8-7535ca68ca28-4146438c.md) |  |

### Workbooks (1)

**In solution [ARGOSCloudSecurity](../solutions/argoscloudsecurity.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ARGOSCloudSecurityWorkbook](../content/argoscloudsecurity-argoscloudsecurityworkbook-313e9d94.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

