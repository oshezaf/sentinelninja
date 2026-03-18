# Samsung_Knox_Audit_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (20 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Samsung_Knox_Audit_CL.json)

| Column Name | Type |
|:------------|:-----|
| Action | string |
| AdmPkgName | string |
| AdmUserId | int |
| DeviceImei1 | string |
| DeviceImei2 | string |
| DeviceModel | string |
| DeviceSerialNumber | string |
| DeviceWifimac | string |
| EventGuid | long |
| FailureReason | string |
| KeyMask | int |
| MitreTtp | dynamic |
| Name | string |
| PkgName | string |
| PrimaryImei | string |
| Profile | string |
| Severity | string |
| TimeGenerated | datetime |
| UserId | int |
| Version | string |

## Solutions (1)

This table is used by the following solutions:

- [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Samsung Knox - Security Log Full Events](../content/samsung-knox-asset-intelligence-samsung-knox-security-log-full-events-bf9be360-7f08-48b2-8e9d-ca240c48b404-349fe6fb.md) |  |

### Workbooks (2)

**In solution [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SamsungKnoxAssetIntelligence](../content/samsung-knox-asset-intelligence-samsungknoxassetintelligence-db535420.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SamsungKnoxAssetIntelligence](../content/github-only-samsungknoxassetintelligence-0d539170.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

