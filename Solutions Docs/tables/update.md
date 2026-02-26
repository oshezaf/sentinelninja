# Update

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Update table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools, Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/update) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (46 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/update)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApprovalSource | string |  |
| Approved | bool |  |
| BulletinID | string |  |
| BulletinUrl | string |  |
| Classification | string |  |
| Computer | string |  |
| ComputerEnvironment | string |  |
| CVENumbers | string |  |
| InstallTimeAvailable | bool |  |
| InstallTimeDeviationRangeSeconds | real |  |
| InstallTimePredictionSeconds | real |  |
| KBID | string |  |
| ManagementGroupName | string |  |
| MSRCBulletinID | string |  |
| MSRCSeverity | string |  |
| Optional | bool |  |
| OSFullName | string |  |
| OSName | string |  |
| OSType | string |  |
| OSVersion | string |  |
| PackageRepository | string |  |
| PackageSeverity | string |  |
| Product | string |  |
| ProductArch | string |  |
| ProductVersion | string |  |
| PublishedDate | datetime |  |
| RebootBehavior | string |  |
| Resource | string |  |
| ResourceGroup | string |  |
| ResourceId | string |  |
| ResourceProvider | string |  |
| ResourceType | string |  |
| RevisionNumber | string |  |
| SourceComputerId | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubscriptionId | string |  |
| TimeGenerated | datetime |  |
| Title | string |  |
| Type | string | The name of the table |
| UpdateID | string |  |
| UpdateState | string |  |
| VMUUID | string |  |

## Solutions (4)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [SAP BTP](../solutions/sap-btp.md)
- [SOC Handbook](../solutions/soc-handbook.md)

---

## Content Items Using This Table (4)

### Workbooks (4)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**In solution [SAP BTP](../solutions/sap-btp.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SAPBTPActivity](../content/sap-btp-sapbtpactivity-8f5b3a2b.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`
- `microsoft.automation/automationaccounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

