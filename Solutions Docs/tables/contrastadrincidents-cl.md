# ContrastADRIncidents_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (18 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR%5CData%20Connectors%5CContrastADRCCF/table_incidents.json)

| Column Name | Type |
|:------------|:-----|
| alertReason | string |
| alertType | string |
| createdTime | datetime |
| eventType | string |
| incidentId | string |
| incidentName | string |
| organizationUuid | string |
| recommendedActions | dynamic |
| recommendedRunbooks | dynamic |
| relatedRules | dynamic |
| score | real |
| severity | string |
| source | string |
| status | string |
| summary | string |
| TimeGenerated | datetime |
| timestamp | string |
| url | string |

## Solutions (1)

This table is used by the following solutions:

- [ContrastADR](../solutions/contrastadr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Contrast ADR Push Connector](../connectors/contrastadrccf.md) |  |

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

