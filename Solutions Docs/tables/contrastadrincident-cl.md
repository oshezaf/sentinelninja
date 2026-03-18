# ContrastADRIncident_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (18 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ContrastADRIncident_CL.json)

| Column Name | Type |
|:------------|:-----|
| alertReason_s | string |
| alertType_s | string |
| createdTime_t | datetime |
| eventType_s | string |
| incidentId_s | string |
| incidentName_s | string |
| organizationUuid_g | string |
| recommendedActions_s | string |
| recommendedRunbooks_s | string |
| relatedRules_s | string |
| score_d | real |
| severity_s | string |
| source_s | string |
| status_s | string |
| summary_s | string |
| TimeGenerated | datetime |
| timestamp_t | datetime |
| url_s | string |

## Solutions (1)

This table is used by the following solutions:

- [ContrastADR](../solutions/contrastadr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ContrastADR](../connectors/contrastadr.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [ContrastADR](../solutions/contrastadr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Contrast ADR - EDR Alert Correlation](../content/contrastadr-contrast-adr-edr-alert-correlation-c1c6ba64-134e-403b-b9a6-1bebc90809a4-f21fd8c4.md) |  |
| [Contrast ADR - Security Incident Alert](../content/contrastadr-contrast-adr-security-incident-alert-7ce5956f-48f2-42f5-8e2e-c254e7643c11-88acfa5a.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ContrastADR_Incident](../parsers/contrastadr-incident.md) | [ContrastADR](../solutions/contrastadr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

