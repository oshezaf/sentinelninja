# RFI_PlaybookAlertResults_V2_CL

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

## Schema (11 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/RFI_PlaybookAlertResults_V2_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_description | string |
| panel_evidence_summary | dynamic |
| panel_status | dynamic |
| panel_status_alert_rule_id | string |
| panel_status_alert_rule_name | string |
| panel_status_created | datetime |
| panel_status_entity_name | string |
| panel_status_priority | string |
| panel_status_status | string |
| playbook_alert_id | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Recorded Future Identity](../solutions/recorded-future-identity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Recorded Future Identity - Playbook Alert Importer](../connectors/recordedfutureidentityalertimporter.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Recorded Future Identity](../solutions/recorded-future-identity.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Recorded Future Identity - Credential Exposure Detected](../content/recorded-future-identity-recorded-future-identity-credential-exposure-detected-b1c2d3e4-5678-90ab-cdef-444444444444-dd38ff85.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

