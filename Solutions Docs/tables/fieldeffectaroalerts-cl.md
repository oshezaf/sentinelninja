# FieldEffectAROAlerts_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (11 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FieldEffectMDR/Data%20Connectors/FieldEffect_Table.json)

| Column Name | Type |
|:------------|:-----|
| AROType | string |
| DetailsMarkdown | string |
| DetailsRaw | string |
| Hostname | string |
| ID | string |
| IPAddress | string |
| LastUser | string |
| PortalUrl | string |
| Severity | string |
| TimeGenerated | datetime |
| Title | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [FieldEffectMDR](../solutions/fieldeffectmdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Field Effect MDR Data Connector (via Codeless Connector Framework)](../connectors/fieldeffectccf.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [FieldEffectMDR](../solutions/fieldeffectmdr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Field Effect MDR Alert: ARO Alert](../content/fieldeffectmdr-field-effect-mdr-alert-aro-alert-6d2d6b3f-7d7b-4d4a-9b2b-9f7f3b8c2a11-86e91283.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [FieldEffect](../parsers/fieldeffect.md) | [FieldEffectMDR](../solutions/fieldeffectmdr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

