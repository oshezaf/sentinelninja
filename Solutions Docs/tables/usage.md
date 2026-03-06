# Usage

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Usage table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Monitor |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/usage) |

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/usage)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AvgLatencyInSeconds | real | Deprecated |
| BatchesCapped | long | Deprecated |
| BatchesOutsideSla | long | Deprecated |
| BatchesWithinSla | long | Deprecated |
| Computer | string | Deprecated |
| DataType | string | Table that usage is being reported about. |
| EndTime | datetime | End time of the one hour aggregation window. |
| IsBillable | bool | Logical flag to indicate whether we bill for this data record. |
| LinkedMeterId | string | Deprecated |
| LinkedResourceUri | string | Deprecated |
| MeterId | string | GUID of the meter used for billing. |
| Quantity | real | Size of data in Mbytes. |
| QuantityUnit | string | Value is alwais Mbytes. |
| ResourceUri | string | The URI of the workspace. This will be same for all records in this table in workspace. |
| Solution | string | Solution about which usage is being reported. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | Start time of the 1 hour aggregation window (same as TimeGenerated). |
| TimeGenerated | datetime | Date and time the record was created. |
| TotalBatches | long | Deprecated |
| Type | string | The name of the table |

## Solutions (9)

This table is used by the following solutions:

- [Corelight](../solutions/corelight.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOC-Process-Framework](../solutions/soc-process-framework.md)
- [Standalone Content](../solutions/standalone-content.md)
- [ThreatAnalysis&Response](../solutions/threatanalysis&response.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

---

## Content Items Using This Table (17)

### Analytic Rules (1)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [M2131_RecommendedDatatableUnhealthy](../content/maturitymodelforeventlogmanagementm2131-m2131-recommendeddatatableunhealthy-c61b167a-59ae-42af-bc98-36c78c5acb5c-492ca648.md) |  |

### Hunting Queries (4)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [M2131_RecommendedDatatableNotLogged_EL0](../content/maturitymodelforeventlogmanagementm2131-m2131-recommendeddatatablenotlogged-el0-b3e0bfd4-52d2-4684-9514-716035cdbff2-0b7d3adf.md) |  |
| [M2131_RecommendedDatatableNotLogged_EL1](../content/maturitymodelforeventlogmanagementm2131-m2131-recommendeddatatablenotlogged-el1-f9e0ae98-6828-4d5a-b596-7c4586bb14f6-b18b3bbb.md) |  |
| [M2131_RecommendedDatatableNotLogged_EL2](../content/maturitymodelforeventlogmanagementm2131-m2131-recommendeddatatablenotlogged-el2-76326a24-1223-4066-88a3-3826e3768932-869d983c.md) |  |
| [M2131_RecommendedDatatableNotLogged_EL3](../content/maturitymodelforeventlogmanagementm2131-m2131-recommendeddatatablenotlogged-el3-8b415f2d-44c1-4edb-8ca6-ddf7d2d28b20-0cceb968.md) |  |

### Workbooks (10)

**In solution [Corelight](../solutions/corelight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Corelight_Sensor_Overview](../content/corelight-corelight-sensor-overview-71e61142.md) |  |

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

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md) |  |
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |
| [MITREAttack](../content/soc-handbook-mitreattack-3fb92d64.md) |  |

**In solution [SOC-Process-Framework](../solutions/soc-process-framework.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SOCProcessFramework](../content/soc-process-framework-socprocessframework-5c770df0.md) |  |

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ThreatAnalysis&Response](../content/threatanalysis&response-threatanalysis&response-56e66291.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

