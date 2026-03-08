# SecurityNestedRecommendation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (24 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SecurityNestedRecommendation.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| AdditionalData | dynamic |
| AssessedResourceId | string |
| Category | string |
| Cause | string |
| Description | string |
| Id | string |
| Impact | string |
| IsSnapshot | string |
| NestedRecommendationId | string |
| ParentRecommendationId | string |
| RecommendationName | string |
| RecommendationSeverity | string |
| RecommendationState | string |
| RecommendationSubscriptionId | string |
| RemediationDescription | string |
| ResourceDetails | dynamic |
| ResourceGroup | string |
| ResourceProviderType | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| VulnerabilityId | string |

## Solutions (3)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)

---

## Content Items Using This Table (4)

### Analytic Rules (1)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Vulnerable Machines related to log4j CVE-2021-44228](../content/apache-log4j-vulnerability-detection-vulnerable-machines-related-to-log4j-cve-2021-44228-3d71fc38-f249-454e-8479-0a358382ef9a-5fca98f8.md) |  |

### Workbooks (3)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |  |

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |  |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

