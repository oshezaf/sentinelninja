# XbowFindings_CL

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
- [Content Items](#content-items-using-this-table)

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/XbowFindings_CL.json)

| Column Name | Type |
|:------------|:-----|
| AssetId | string |
| AssetName | string |
| CreatedAt | string |
| Evidence | string |
| FindingId | string |
| FindingName | string |
| Impact | string |
| Mitigations | string |
| OrganizationId | string |
| Recipe | string |
| Severity | string |
| State | string |
| Summary | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [XBOW](../solutions/xbow.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [XBOW Security Platform (via Azure Function)](../connectors/xbowsecurityconnector.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [XBOW](../solutions/xbow.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [XbowCriticalHighFindings](../content/xbow-xbowcriticalhighfindings-f8e7d6c5-4b3a-4912-8f0e-2d1c3b4a5678-cfec1e39.md) |  |
| [XbowLowFindings](../content/xbow-xbowlowfindings-d2e4f1a8-7c9b-4356-8e0d-5a2b7c8e9f01-be196e24.md) |  |
| [XbowMediumFindings](../content/xbow-xbowmediumfindings-b3c5e2f9-6a8d-4127-9b2e-4f6a8c9d0e12-25358c30.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

