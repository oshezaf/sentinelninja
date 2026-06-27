# SecurityRegulatoryCompliance

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SecurityRegulatoryCompliance table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityregulatorycompliance) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityregulatorycompliance)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AssessedResourceId | string | The ID of the assessed resource |
| ComplianceControl | string | The name of regulatory compliance control |
| ComplianceStandard | string | The name of compliance standard |
| FailedResources | int | The number of resources that failed this assessment |
| IsSnapshot | bool | Indicates whether the data was exported as part of a snapshot when 'true', or streamed in real-time when 'false'. |
| PassedResources | int | The number of resources that passed this assessment |
| Properties | dynamic | The complete set of metadata. |
| RecommendationId | string | The ID of the assessed recommendation |
| RecommendationLink | string | A link for more details on the assessment result |
| RecommendationName | string | Recommendation display name |
| RegulatoryComplianceSubscriptionId | string | The subscription ID of the assessed resource |
| ResourceProviderType | string | Resource provider type of the assessed resource |
| SkippedResources | int | The number of resources that passed this assessment |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| State | string | The assessment state |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The (UTC) date and time the assessment was generated |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [SecurityRegulatoryCompliance Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityregulatorycompliance)

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

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Azure Security Benchmark Posture Changed](../content/azuresecuritybenchmark-azure-security-benchmark-posture-changed-0610e72f-ceaf-42d1-879e-952a1bd8d07a-131c2b8a.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `ComplianceStandard == "NIST-SP-800-171-R2"`<br>`State == "Failed"`

| Analytic Rule |
|:-------------|
| [CMMC 2.0 Level 1 (Foundational) Readiness Posture](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cmmc-2.0-level-1-foundational-readiness-posture-fb127436-e5c4-4e31-85a8-d3507128dd09-3a67e6df.md) |
| [CMMC 2.0 Level 2 (Advanced) Readiness Posture](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cmmc-2.0-level-2-advanced-readiness-posture-7bfe573b-3069-4e81-98fe-9a4cffbcbc24-0a9527c7.md) |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [NIST SP 800-53 Posture Changed](../content/nistsp80053-nist-sp-800-53-posture-changed-dd834c97-4638-4bb3-a4e3-807e8b0580dc-3c44ad7b.md) |  |

### Workbooks (5)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):** `ComplianceStandard == "Microsoft-cloud-security-benchmark"`<br>`State == "Failed"`

| Workbook |
|:-------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `ComplianceStandard == "NIST-SP-800-171-R2"`

| Workbook |
|:-------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):** `ComplianceStandard == "NIST-SP-800-53-R4"`

| Workbook |
|:-------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):** `ComplianceStandard == "NIST-SP-800-53-R4"`<br>`State == "Failed"`

| Workbook |
|:-------------|
| [DynamicThreatModeling&Response](../content/threatanalysis&response-dynamicthreatmodeling&response-54123c47.md) |

## Selection Criteria Summary (5 criteria, 6 total references)

References by type: 0 connectors, 6 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ComplianceStandard == "NIST-SP-800-171-R2"`<br>`State == "Failed"` | - | 2 | - | - | **2** |
| `ComplianceStandard == "Microsoft-cloud-security-benchmark"`<br>`State == "Failed"` | - | 1 | - | - | **1** |
| `ComplianceStandard == "NIST-SP-800-171-R2"` | - | 1 | - | - | **1** |
| `ComplianceStandard == "NIST-SP-800-53-R4"` | - | 1 | - | - | **1** |
| `ComplianceStandard == "NIST-SP-800-53-R4"`<br>`State == "Failed"` | - | 1 | - | - | **1** |
| **Total** | **0** | **6** | **0** | **0** | **6** |

### ComplianceStandard

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `NIST-SP-800-171-R2` | - | 3 | - | - | **3** |
| `NIST-SP-800-53-R4` | - | 2 | - | - | **2** |
| `Microsoft-cloud-security-benchmark` | - | 1 | - | - | **1** |

### State

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Failed` | - | 4 | - | - | **4** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

