# UpwindCatalogAssets_CL

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

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/UpwindCatalogAssets_CL.json)

| Column Name | Type |
|:------------|:-----|
| AssetId | string |
| AssetName | string |
| Category | string |
| CloudAccountId | string |
| CloudProvider | string |
| CloudResourceId | string |
| DetectionRisk | dynamic |
| HighPrivilegeRisk | dynamic |
| NetworkRisk | dynamic |
| PrivateIpAddresses | dynamic |
| ProtectedBy | string |
| PublicIpAddresses | dynamic |
| Region | string |
| ResourceType | string |
| SensitiveDataAtRest | dynamic |
| SensitiveDataInTransit | dynamic |
| Status | string |
| SubCategory | string |
| Tags | dynamic |
| Technologies | dynamic |
| TimeGenerated | datetime |
| VulnerabilityRisk | dynamic |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Upwind](../solutions/upwind.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Upwind Catalog Loader (Ingestion API)](../connectors/upwindcatalogloader.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

