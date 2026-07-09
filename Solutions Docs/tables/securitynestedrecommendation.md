# SecurityNestedRecommendation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SecurityNestedRecommendation table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securitynestedrecommendation) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securitynestedrecommendation)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AdditionalData | dynamic | Additional details of the sub-assessment |
| AssessedResourceId | string | Id of the assessed resource |
| Category | string | Category of the sub-assessment |
| Cause | string | Cause of the assessment status |
| Description | string | Description of the assessment status |
| Id | string | Id of the assessed recommendation |
| Impact | string | Description of the impact of this sub-assessment |
| IsSnapshot | bool | Indicates whether the data was exported as part of a snapshot when 'true', or streamed in real-time when 'false'. |
| NestedRecommendationId | string | Id of the nested-recommendation |
| ParentRecommendationId | string | Id of the parent recommendation |
| RecommendationLink | string | Recommendation link URL |
| RecommendationName | string | Display name of the sub-assessment |
| RecommendationSeverity | string | The sub-assessment severity level |
| RecommendationState | string | The sub-assessment state |
| RecommendationSubscriptionId | string | Recommendation's subscription Id |
| RemediationDescription | string | Information on how to remediate this sub-assessment |
| RemidiationDescription | string | Information on how to remediate this sub-assessment |
| ResourceDetails | dynamic | Details of the resource that was assessed |
| ResourceGroup | string | Resource group name |
| ResourceProviderType | string | Resource provider type of the assessed resource |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| SubAssessmentTimeGeneration | datetime | The date and time the sub-assessment was generated |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time the sub-assessment was exported |
| Type | string | Resource type |
| VulnerabilityId | string | Vulnerability Id |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [SecurityNestedRecommendation Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securitynestedrecommendation)

## Solutions (3)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)

---

## Content Items Using This Table (4)

### Analytic Rules (1)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):** `RemediationDescription has "CVE-2021-44228"`

| Analytic Rule |
|:-------------|
| [Vulnerable Machines related to log4j CVE-2021-44228](../content/apache-log4j-vulnerability-detection-vulnerable-machines-related-to-log4j-cve-2021-44228-3d71fc38-f249-454e-8479-0a358382ef9a-5fca98f8.md) |

### Workbooks (3)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):** `RemediationDescription has "CVE-2021-44228"`

| Workbook |
|:-------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):** `RecommendationState == "Unhealthy"`

| Workbook |
|:-------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

## Selection Criteria Summary (2 criteria, 3 total references)

References by type: 0 connectors, 3 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `RemediationDescription has "CVE-2021-44228"` | - | 2 | - | - | **2** |
| `RecommendationState == "Unhealthy"` | - | 1 | - | - | **1** |
| **Total** | **0** | **3** | **0** | **0** | **3** |

### RecommendationState

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Unhealthy` | - | 1 | - | - | **1** |

### RemediationDescription

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has CVE-2021-44228` | - | 2 | - | - | **2** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

