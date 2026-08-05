# Tailscale_PostureIntegrations_CL

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

## Schema (10 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tailscale_PostureIntegrations_CL.json)

| Column Name | Type |
|:------------|:-----|
| ClientId | string |
| CloudId | string |
| ConfigOverwrites | dynamic |
| IntegrationId | string |
| Provider | string |
| SourceSystem | string |
| Status | dynamic |
| TenantId | string |
| TenantId_Provider | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Tailscale (CCF)](../solutions/tailscale-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tailscale Premium (CCF)](../connectors/tailscalepremiumccf.md) |  |

---

## Content Items Using This Table (2)

### Hunting Queries (1)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Tailscale Premium: Current posture integration inventory](../content/tailscale-ccf-tailscale-premium-current-posture-integration-inventory-c3d4e5f6-7890-1234-56ab-cdef12345032-2211ead1.md) |  |

### Workbooks (1)

**In solution [Tailscale (CCF)](../solutions/tailscale-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TailscalePremiumOperations](../content/tailscale-ccf-tailscalepremiumoperations-5218a067.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

