# F5Telemetry_system_CL

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

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/F5Telemetry_system_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| client_ip_s | string |
| Computer | string |
| geo_location_s | string |
| hostname_s | string |
| ManagementGroupName | string |
| MG | string |
| probability | real |
| RawData | string |
| RawMessage | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [F5 Big-IP](../solutions/f5-big-ip.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [F5 BIG-IP](../connectors/f5bigip.md) |  |

---

## Content Items Using This Table (4)

### Workbooks (4)

**In solution [F5 Big-IP](../solutions/f5-big-ip.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [F5BIGIPSystemMetrics](../content/f5-big-ip-f5bigipsystemmetrics-70978c22.md) |  |
| [F5Networks](../content/f5-big-ip-f5networks-56be211d.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [F5BIGIPSystemMetrics](../content/github-only-f5bigipsystemmetrics-f6e795e8.md) |  |
| [F5Networks](../content/github-only-f5networks-1dca2cd9.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

