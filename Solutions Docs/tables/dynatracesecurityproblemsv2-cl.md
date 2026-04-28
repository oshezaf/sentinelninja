# DynatraceSecurityProblemsV2_CL

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

## Schema (17 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace%5CData%20Connectors%5CDynatraceRuntimeVulnerabilitiesV2/Connector_Dynatrace_RuntimeVulnerabilities_table.json)

| Column Name | Type |
|:------------|:-----|
| cveIds | dynamic |
| displayId | string |
| externalVulnerabilityId | string |
| firstSeenTimestampUtc | datetime |
| lastOpenedTimestampUtc | datetime |
| lastUpdatedTimestampUtc | datetime |
| managementZones | dynamic |
| muted | bool |
| muteStateChangeInProgress | string |
| riskAssessment | dynamic |
| securityProblemId | string |
| securityProblemTitle | string |
| status | string |
| technology | string |
| TimeGenerated | datetime |
| url | string |
| vulnerabilityType | string |

## Solutions (1)

This table is used by the following solutions:

- [Dynatrace](../solutions/dynatrace.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Dynatrace Runtime Vulnerabilities V2](../connectors/dtrunvulnccpdefinition.md) |  |
| [Dynatrace Runtime Vulnerabilities V1](../connectors/dynatraceruntimevulnerabilities.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (3)

**In solution [Dynatrace](../solutions/dynatrace.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Dynatrace Application Security - Code-Level runtime vulnerability detection](../content/dynatrace-dynatrace-application-security-code-level-runtime-vulnerability-detection-305093b4-0fa2-57bc-bced-caea782a6e9c-7ce892bd.md) |  |
| [Dynatrace Application Security - Non-critical runtime vulnerability detection](../content/dynatrace-dynatrace-application-security-non-critical-runtime-vulnerability-detection-ff0af873-a2f2-4233-8412-0ef4e00b0156-12214a98.md) |  |
| [Dynatrace Application Security - Third-Party runtime vulnerability detection](../content/dynatrace-dynatrace-application-security-third-party-runtime-vulnerability-detection-af99b078-124b-543a-9a50-66ef87c09f6a-ea28978d.md) |  |

### Workbooks (1)

**In solution [Dynatrace](../solutions/dynatrace.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Dynatrace](../content/dynatrace-dynatrace-eddf4fe2.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DynatraceSecurityProblems](../parsers/dynatracesecurityproblems.md) | [Dynatrace](../solutions/dynatrace.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

