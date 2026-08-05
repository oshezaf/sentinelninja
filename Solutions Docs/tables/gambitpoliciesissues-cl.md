# GambitPoliciesIssues_CL

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

## Schema (18 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GambitSecurity/Data%20Connectors/GambitSecurity_ccf/GambitSecurity_DCR.json)

| Column Name | Type |
|:------------|:-----|
| AffectedSystems | dynamic |
| BusinessImpacts | dynamic |
| CreatedAt | datetime |
| Environment | string |
| HostPlatform | string |
| IssueId | string |
| IssueStatus | string |
| LastEvaluationTime | datetime |
| PolicyCategories | dynamic |
| PolicyDescription | string |
| PolicyId | string |
| PolicyName | string |
| RemediationSteps | string |
| ResourceDisplayId | string |
| ResourceType | string |
| Severity | string |
| State | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [GambitSecurity](../solutions/gambitsecurity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Gambit Security Policy Issues (Push)](../connectors/gambitsecuritypush.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [GambitSecurity](../solutions/gambitsecurity.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Gambit Security - Critical Policy Issue Promotion](../content/gambitsecurity-gambit-security-critical-policy-issue-promotion-8d2b6f4c-1a37-4e9b-b5c8-7f0e3a2d9c14-15369d23.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [GambitPoliciesIssues](../parsers/gambitpoliciesissues.md) | [GambitSecurity](../solutions/gambitsecurity.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

