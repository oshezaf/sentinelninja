# CyfirmaVulnerabilities_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (10 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Vulnerabilities%20Intel/Data%20Connectors/CyfirmaVulnerabilitiesIntel_ccp/CyfirmaVulnerabilitiesIntel_DCR.json)

| Column Name | Type |
|:------------|:-----|
| confidence | int |
| created | datetime |
| description | string |
| extensions | dynamic |
| external_references | dynamic |
| id | string |
| modified | datetime |
| name | string |
| spec_version | string |
| type | string |

## Solutions (1)

This table is used by the following solutions:

- [Cyfirma Vulnerabilities Intel](../solutions/cyfirma-vulnerabilities-intel.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CYFIRMA Vulnerabilities Intelligence](../connectors/cyfirmavulnerabilitiesinteldc.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (4)

**In solution [Cyfirma Vulnerabilities Intel](../solutions/cyfirma-vulnerabilities-intel.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - High Severity Asset based Vulnerabilities Rule Alert](../content/cyfirma-vulnerabilities-intel-cyfirma-high-severity-asset-based-vulnerabilities-rule-alert-123fad02-6d9e-439e-8241-7a2fffa7e0a5-e5408163.md) |  |
| [CYFIRMA - High Severity Attack Surface based Vulnerabilities Rule Alert](../content/cyfirma-vulnerabilities-intel-cyfirma-high-severity-attack-surface-based-vulnerabilities-rule-alert-6cc62c46-dd44-46d7-8681-8422f780eabd-26f72676.md) |  |
| [CYFIRMA - Medium Severity Asset based Vulnerabilities Rule Alert](../content/cyfirma-vulnerabilities-intel-cyfirma-medium-severity-asset-based-vulnerabilities-rule-alert-6306f2d9-34a3-409a-850d-175b7bdd1ab1-7c84708a.md) |  |
| [CYFIRMA - Medium Severity Attack Surface based Vulnerabilities Rule](../content/cyfirma-vulnerabilities-intel-cyfirma-medium-severity-attack-surface-based-vulnerabilities-rule-4c1b282b-62f1-4783-bf40-94c44f0ae630-2022643e.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

