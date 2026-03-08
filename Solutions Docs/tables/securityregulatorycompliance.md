# SecurityRegulatoryCompliance

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (18 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SecurityRegulatoryCompliance.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| AssessedResourceId | string |
| ComplianceControl | string |
| ComplianceStandard | string |
| FailedResources | int |
| IsSnapshot | bool |
| PassedResources | int |
| RecommendationId | string |
| RecommendationLink | string |
| RecommendationName | string |
| RegulatoryComplianceSubscriptionId | string |
| ResourceProviderType | string |
| SkippedResources | int |
| SourceSystem | string |
| State | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (5)

This table is used by the following solutions:

- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [ThreatAnalysis&Response](../solutions/threatanalysis&response.md)

---

## Content Items Using This Table (9)

### Analytic Rules (4)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Azure Security Benchmark Posture Changed](../content/azuresecuritybenchmark-azure-security-benchmark-posture-changed-0610e72f-ceaf-42d1-879e-952a1bd8d07a-131c2b8a.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CMMC 2.0 Level 1 (Foundational) Readiness Posture](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cmmc-2.0-level-1-foundational-readiness-posture-fb127436-e5c4-4e31-85a8-d3507128dd09-3a67e6df.md) |  |
| [CMMC 2.0 Level 2 (Advanced) Readiness Posture](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cmmc-2.0-level-2-advanced-readiness-posture-7bfe573b-3069-4e81-98fe-9a4cffbcbc24-0a9527c7.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NIST SP 800-53 Posture Changed](../content/nistsp80053-nist-sp-800-53-posture-changed-dd834c97-4638-4bb3-a4e3-807e8b0580dc-3c44ad7b.md) |  |

### Workbooks (5)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DynamicThreatModeling&Response](../content/threatanalysis&response-dynamicthreatmodeling&response-54123c47.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

