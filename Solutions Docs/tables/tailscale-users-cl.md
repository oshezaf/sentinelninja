# Tailscale_Users_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tailscale_Users_CL.json)

| Column Name | Type |
|:------------|:-----|
| Created | datetime |
| CurrentlyConnected | bool |
| DeviceCount | int |
| DisplayName | string |
| LastSeen | datetime |
| LoginName | string |
| ProfilePicUrl | string |
| Role | string |
| SourceSystem | string |
| Status | string |
| TailnetId | string |
| TenantId | string |
| TimeGenerated | datetime |
| UserId | string |
| UserType | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Tailscale (CCF)](../solutions/tailscale-ccf.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tailscale Standard (CCF)](../connectors/tailscaleccf.md) |  |
| [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (1)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Tailscale: User role elevated to admin or owner](../content/tailscale-ccf-tailscale-user-role-elevated-to-admin-or-owner-d3c4e5f6-3456-7890-12ab-cdef12345003-11393154.md) |  |

### Hunting Queries (1)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Tailscale: Users with zero devices](../content/tailscale-ccf-tailscale-users-with-zero-devices-a6f7b8c9-6789-0123-45ab-cdef12345006-448573f1.md) |  |

### Workbooks (2)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TailscalePremiumOperations](../content/tailscale-ccf-tailscalepremiumoperations-5218a067.md) |  |
| [TailscaleStandardOperations](../content/tailscale-ccf-tailscalestandardoperations-76dbc0de.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

