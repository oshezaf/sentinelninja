# LightningTier0Nodes_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/LightningTier0Nodes_CL.json)

| Column Name | Type |
|:------------|:-----|
| DN | string |
| Domain | string |
| IdentitySource | string |
| IncomingEdgesOfConcern | int |
| Label | string |
| LastLogonTimestamp | datetime |
| NodeId | string |
| NodeType | string |
| OID | string |
| PasswordLastSet | datetime |
| TimeGenerated | datetime |
| UnclassifiedIncomingEdges | int |
| UserAccountControl | int |
| WhenChanged | datetime |
| Zone | string |

## Solutions (1)

This table is used by the following solutions:

- [SemperisLightning](../solutions/semperislightning.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Semperis Lightning Logs](../connectors/semperislightninglogsazurefunctions.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

